/* eslint-disable react/jsx-key */
// REACT
import { Children, useCallback, useEffect, useState } from "react";

// APEX CHART
import Chart from "react-apexcharts";
import { COUNTCONTACT, COUNTORDER, COUNTPRODUCT, COUNTUSER } from "../Services";

const BarChart = ({ labels, values }) => {
  const state = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: labels || [],
      },
    },
    series: [
      {
        data: values || [],
        color: "#dc2626",
      },
    ],
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      width="100%"
    />
  );
};

const Donut = ({ labels, values }) => {
  const state = {
    options: {
      labels: labels || [],
    },
    series: values || [],
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="donut"
      width="100%"
    />
  );
};

const DashboardCards = ({ obj }) => {
  const labels = [];
  const values = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      labels.push(key.replaceAll("_", " "));
      values.push(obj[key]);
    }
  }

  return (
    <div className="border border-customGray p-2 sm:p-5">
      <div className="flex flex-wrap gap-2 sm:gap-5 mb-5">
        {Children.toArray(
          Object.keys(obj).map((key) => (
            <h5 className="bg-customGray py-1 sm:py-2 px-2 sm:px-4">
              <span className="text-base sm:text-2xl font-semibold pr-2">
                {obj[key]}
              </span>
              <span className="text-xs sm:text-base">
                {key.replaceAll("_", " ")}
              </span>
            </h5>
          ))
        )}
      </div>
      <div className="max-w-md">
        <Donut labels={labels} values={values} />
        <BarChart labels={labels} values={values} />
      </div>
    </div>
  );
};

// DASHBOARD
export default function Dashboard() {
  // STATES
  const [contacts, setContact] = useState({});
  const [users, setUser] = useState({});
  const [orders, setOrders] = useState({});
  const [products, setProducts] = useState({});

  // CUSTOM FUNCTION
  const getAPI = useCallback(async (API, setState) => {
    const { data } = await API;

    if (data && data.SUCCESS) {
      setState(data.DATA);
    }
  }, []);

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    getAPI(COUNTCONTACT(), setContact);
    getAPI(COUNTUSER(), setUser);
    getAPI(COUNTORDER(), setOrders);
    getAPI(COUNTPRODUCT(), setProducts);
  }, [getAPI]);

  // JSX ELEMENT
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-5">
        <DashboardCards obj={orders} />
        <DashboardCards obj={products} />
        <DashboardCards obj={contacts} />
        <DashboardCards obj={users} />
      </div>
    </div>
  );
}
