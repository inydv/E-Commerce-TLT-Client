// REACT AND REACT ROUTER DOM
import { useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// CUSTOM IMPORTS
import { Table } from "../Shared/index";
import AdminTableHeader from "../Constants/TableHeader.json";
import AdminTableBody from "../Constants/TableBody.json";
import {
  GETALLUSERS,
  GETALLCONTACT,
  GETALLORDERS,
  GETPRODUCTS,
  DELETECONTACT,
  DELETEORDER,
  DELETEPRODUCT,
  DELETEUSER,
} from "../Services/index";

// ADMIN PAGE
export default function AdminPages() {
  // STATES
  const [header, setHeader] = useState();
  const [List, setList] = useState();
  const [body, setBody] = useState();

  // USE LOCATION
  const { pathname } = useLocation();

  // CUSTOM FUNCTION
  const getAPI = useCallback(async (API) => {
    const { data } = await API;

    if (data && data.SUCCESS) {
      setList(data.DATA);
    }
  }, []);

  const deleteApi = async (API, getAPIFunc) => {
    const { data } = await API;

    if (data && data.SUCCESS) {
      getAPI(getAPIFunc);
    }
  };

  const handleBtn = (id) => {
    if (pathname.includes("user")) {
      deleteApi(DELETEUSER(id, GETALLUSERS()));
    } else if (pathname.includes("product")) {
      deleteApi(DELETEPRODUCT(id, GETPRODUCTS({})));
    } else if (pathname.includes("order")) {
      deleteApi(DELETEORDER(id, GETALLORDERS()));
    } else if (pathname.includes("contact")) {
      deleteApi(DELETECONTACT(id, GETALLCONTACT()));
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname.includes("user")) {
      setHeader(AdminTableHeader.user);
      setBody(AdminTableBody.user);
      getAPI(GETALLUSERS());
    } else if (pathname.includes("product")) {
      setHeader(AdminTableHeader.product);
      setBody(AdminTableBody.product);
      getAPI(GETPRODUCTS({}));
    } else if (pathname.includes("order")) {
      setHeader(AdminTableHeader.order);
      setBody(AdminTableBody.order);
      getAPI(GETALLORDERS());
    } else if (pathname.includes("contact")) {
      setHeader(AdminTableHeader.contact);
      setBody(AdminTableBody.contact);
      getAPI(GETALLCONTACT());
    }
  }, [getAPI, pathname]);

  // JSX ELEMENT
  return (
    <Table header={header} data={List} body={body} handleBtn={handleBtn} />
  );
}
