import Api from "../Constants/API.Constant.json";
import toastConfig from "../Constants/Toast.Constant.json";
import { request } from "../Configs/RequestMethod.Config";
import toast from 'react-hot-toast';

export const GETALLUSERS = async () => {
    try {
        return await request.get(Api.admin.user);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETUSERDETAIL = async (userId) => {
    try {
        return await request.get(Api.admin.user + "/" + userId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETME = async () => {
    try {
        return await request.get(Api.user.me);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const UPDATEMYPROFILE = async (reqBody) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        return await request.put(Api.user.updateProfile, reqBody, config);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const UPDATEUSERROLE = async (userId, reqBody) => {
    try {
        return await request.patch(Api.admin.user + "/" + userId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const DELETEUSER = async (userId) => {
    try {
        return await request.delete(Api.admin.user + "/" + userId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}