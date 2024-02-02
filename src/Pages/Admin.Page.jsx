// REACT AND REACT ROUTER DOM
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// CUSTOM IMPORTS
import { OrderTable, Table } from "../Shared/index";
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
  UPDATEUSERROLE,
  UPDATEPRODUCT,
  UPDATEORDERSTATUS,
  UPDATECONTACTSTATUS,
} from "../Services/index";
import EnumConstant from "../Constants/Enum.Constant.json";
import { Pagination } from "../Components";
import { useUser } from "../Context/User.Context";

// ADMIN PAGE
export default function AdminPages() {
  // STATES
  const [header, setHeader] = useState(null);
  const [List, setList] = useState(null);
  const [body, setBody] = useState(null);
  const [formData, setFormData] = useState({});
  const [id, setId] = useState(null);
  const [isApiSuccessfull, setIsApiSuccessfull] = useState(false);
  const [filteredResult, setFilteredResult] = useState(0);

  // USE NAVIGATE, USE LOCATION AND USE SEARCH PARAMS
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();

  // CONTEXT
  const { user } = useUser();

  // CUSTOM FUNCTION
  const handlePagination = (pageNumber) => {
    if (pageNumber > 1 && pageNumber < Math.ceil(filteredResult / 8)) {
      navigate({
        search: `?${createSearchParams({ page: pageNumber })}`,
      });
    }
  };

  const getAPI = useCallback(async (API) => {
    const { data } = await API;

    if (data && data.SUCCESS) {
      setList(data.DATA?.LISTS);
      setFilteredResult(data.DATA.NUMBER_OF_FILTERED_LIST);
    }
  }, []);

  const callApi = async (API, getAPIFunc) => {
    const { data } = await API;

    if (data && data.SUCCESS) {
      getAPIFunc();
      setIsApiSuccessfull(true);
    }
  };

  const handleBtn = (id) => {
    if (pathname.includes(EnumConstant.Patname.User)) {
      callApi(DELETEUSER(id), () => getAPI(GETALLUSERS({})));
    } else if (pathname.includes(EnumConstant.Patname.Product)) {
      callApi(DELETEPRODUCT(id), () => getAPI(GETPRODUCTS({})));
    } else if (pathname.includes(EnumConstant.Patname.Order)) {
      callApi(DELETEORDER(id), () => getAPI(GETALLORDERS({})));
    } else if (pathname.includes(EnumConstant.Patname.Contact)) {
      callApi(DELETECONTACT(id), () => getAPI(GETALLCONTACT({})));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pathname.includes(EnumConstant.Patname.User)) {
      callApi(UPDATEUSERROLE(id, formData), () => getAPI(GETALLUSERS({})));
    } else if (pathname.includes(EnumConstant.Patname.Product)) {
      callApi(UPDATEPRODUCT(id, formData), () =>
        getAPI(
          GETPRODUCTS({
            page: +searchParams.get("page") || 1,
            resultPerPage: 15,
            created_by:
              user && user.role === EnumConstant.UserRole.Admin ? "" : user._id,
          })
        )
      );
    } else if (pathname.includes(EnumConstant.Patname.Order)) {
      callApi(UPDATEORDERSTATUS(id, formData), () => getAPI(GETALLORDERS({})));
    } else if (pathname.includes(EnumConstant.Patname.Contact)) {
      callApi(UPDATECONTACTSTATUS(id, formData), () =>
        getAPI(GETALLCONTACT({}))
      );
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname.includes(EnumConstant.Patname.User)) {
      setHeader(AdminTableHeader.user);
      setBody(AdminTableBody.user);
      getAPI(GETALLUSERS({ page: +searchParams.get("page") || 1 }));
    } else if (pathname.includes(EnumConstant.Patname.Product)) {
      setHeader(AdminTableHeader.product);
      setBody(AdminTableBody.product);
      getAPI(
        GETPRODUCTS({
          page: +searchParams.get("page") || 1,
          resultPerPage: 15,
          created_by:
            user && user.role === EnumConstant.UserRole.Admin ? "" : user._id,
        })
      );
    } else if (pathname.includes(EnumConstant.Patname.Order)) {
      setHeader(AdminTableHeader.order);
      getAPI(GETALLORDERS({ page: +searchParams.get("page") || 1 }));
    } else if (pathname.includes(EnumConstant.Patname.Contact)) {
      setHeader(AdminTableHeader.contact);
      setBody(AdminTableBody.contact);
      getAPI(GETALLCONTACT({ page: +searchParams.get("page") || 1 }));
    }
  }, [getAPI, pathname, searchParams, user]);

  // JSX ELEMENT
  return (
    <>
      {pathname.includes(EnumConstant.Patname.Order) ? (
        <OrderTable
          header={header}
          orders={List}
          isAdmin={true}
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          formData={formData}
          isApiSuccessfull={isApiSuccessfull}
          setIsApiSuccessfull={setIsApiSuccessfull}
          setId={setId}
        />
      ) : (
        <Table
          header={header}
          data={List}
          body={body}
          handleBtn={handleBtn}
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          formData={formData}
          setId={setId}
          isApiSuccessfull={isApiSuccessfull}
          setIsApiSuccessfull={setIsApiSuccessfull}
        />
      )}
      {pathname.includes(EnumConstant.Patname.Product) ? (
        <div className="pt-4">
          <p className="text-red-600 text-sm font-medium text-end">
            ** Please Refresh After Adding Products **
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="grid place-items-center mt-5">
        <Pagination
          handlePagination={handlePagination}
          filteredResult={filteredResult}
          page={+searchParams.get("page") || 1}
          resultPerPage={15}
        />
      </div>
    </>
  );
}
