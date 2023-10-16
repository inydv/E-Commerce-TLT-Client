import Api from "../Constants/API.Constant.json";
import toastConfig from "../Constants/Toast.Constant.json";
import { request } from "../Configs/RequestMethod.Config";
import toast from 'react-hot-toast';

export const REGISTERUSER = async (reqBody) => {
    try {
        return await request.post(Api.authentication.register, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const LOGINUSER = async (reqBody) => {
    try {
        return await request.post(Api.authentication.login, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const FORGOTPASSWORD = async (reqBody) => {
    try {
        return await request.post(Api.authentication.forgotPassword, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const RESETPASSWORD = async (reqBody, token) => {
    try {
        return await request.patch(Api.authentication.resetPassword + token, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const LOGOUTUSER = async () => {
    try {
        return await request.get(Api.authentication.logout);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}