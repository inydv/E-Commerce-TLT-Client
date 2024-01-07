// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import ToastConstant from "../Constants/Toast.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';

// APIS
export const GETALLUSERS = async ({ page = 1, resultPerPage = 15 }) => {
    try {
        return await Request.get(ApiConstant.admin.user + "?page=" + page + "&resultPerPage=" + resultPerPage);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETUSERDETAIL = async (userId) => {
    try {
        return await Request.get(ApiConstant.admin.user + "/" + userId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETME = async () => {
    try {
        return await Request.get(ApiConstant.user.me);
    } catch (error) {
        // if (error?.response?.data?.MESSAGE)
        //     return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const UPDATEMYPROFILE = async (reqBody) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return await Request.put(ApiConstant.user.updateProfile, reqBody, config);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const UPDATEUSERROLE = async (userId, reqBody) => {
    try {
        return await Request.patch(ApiConstant.admin.user + "/" + userId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const DELETEUSER = async (userId) => {
    try {
        return await Request.delete(ApiConstant.admin.user + "/" + userId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const COUNTUSER = async () => {
    try {
        return await Request.get(ApiConstant.admin.user + "/count-users");
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}