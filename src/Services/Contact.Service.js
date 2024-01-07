// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import ToastConstant from "../Constants/Toast.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';

// APIS
export const CREATECONTACT = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.user.contact, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETALLCONTACT = async ({ page = 1, resultPerPage = 15 }) => {
    try {
        return await Request.get(ApiConstant.admin.contact + "?page=" + page + "&resultPerPage=" + resultPerPage);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETCONTACTDETAILS = async (contactId) => {
    try {
        return await Request.get(ApiConstant.admin.contact + "/" + contactId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const UPDATECONTACTSTATUS = async (contactId, reqBody) => {
    try {
        return await Request.patch(ApiConstant.admin.contact + "/" + contactId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const DELETECONTACT = async (contactId) => {
    try {
        return await Request.delete(ApiConstant.admin.contact + "/" + contactId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const COUNTCONTACT = async () => {
    try {
        return await Request.get(ApiConstant.admin.contact + "/count-contacts");
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}