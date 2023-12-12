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
import EnumConstant from "../Constants/Enum.Constant.json";

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
    if (pathname.includes(EnumConstant.Patname.User)) {
      deleteApi(DELETEUSER(id, GETALLUSERS()));
    } else if (pathname.includes(EnumConstant.Patname.Product)) {
      deleteApi(DELETEPRODUCT(id, GETPRODUCTS({})));
    } else if (pathname.includes(EnumConstant.Patname.Order)) {
      deleteApi(DELETEORDER(id, GETALLORDERS()));
    } else if (pathname.includes(EnumConstant.Patname.Contact)) {
      deleteApi(DELETECONTACT(id, GETALLCONTACT()));
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    if (pathname.includes(EnumConstant.Patname.User)) {
      setHeader(AdminTableHeader.user);
      setBody(AdminTableBody.user);
      getAPI(GETALLUSERS());
    } else if (pathname.includes(EnumConstant.Patname.Product)) {
      setHeader(AdminTableHeader.product);
      setBody(AdminTableBody.product);
      getAPI(GETPRODUCTS({}));
    } else if (pathname.includes(EnumConstant.Patname.Order)) {
      setHeader(AdminTableHeader.order);
      setBody(AdminTableBody.order);
      getAPI(GETALLORDERS());
    } else if (pathname.includes(EnumConstant.Patname.Contact)) {
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
