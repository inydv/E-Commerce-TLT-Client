import Api from "../Constants/API.Constant.json";
import toastConfig from "../Constants/Toast.Constant.json";
import { request } from "../Configs/RequestMethod.Config";
import toast from 'react-hot-toast';

export const CREATECONTACT = async (reqBody) => {
    try {
        return await request.post(Api.user.contact, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETALLCONTACT = async () => {
    try {
        return await request.get(Api.admin.contact);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETCONTACTDETAILS = async (contactId) => {
    try {
        return await request.get(Api.admin.contact + "/" + contactId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const UPDATECONTACTSTATUS = async (contactId, reqBody) => {
    try {
        return await request.patch(Api.admin.contact, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const DELETECONTACT = async (contactId) => {
    try {
        return await request.delete(Api.admin.contact + "/" + contactId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}