// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import ToastConstant from "../Constants/Toast.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';

// APIS
export const REGISTERUSER = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.authentication.register, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const LOGINUSER = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.authentication.login, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const FORGOTPASSWORD = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.authentication.forgotPassword, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const RESETPASSWORD = async (reqBody, token) => {
    try {
        return await Request.patch(ApiConstant.authentication.resetPassword + token, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const LOGOUTUSER = async () => {
    try {
        return await Request.get(ApiConstant.authentication.logout);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}