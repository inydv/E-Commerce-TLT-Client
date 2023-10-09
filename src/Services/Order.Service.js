import Api from "../Constants/API.Constant.json";
import toastConfig from "../Constants/Toast.Constant.json";
import { request } from "../Configs/RequestMethod.Config";
import toast from 'react-hot-toast';

export const CREATEORDER = async (reqBody) => {
    try {
        return await request.post(Api.user.order, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETALLORDERS = async () => {
    try {
        return await request.get(Api.admin.order);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETMYORDERS = async () => {
    try {
        return await request.get(Api.user.order);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETORDERDETAILS = async (orderId) => {
    try {
        return await request.get(Api.user.order + "/" + orderId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const UPDATEORDERSTATUS = async (orderId, reqBody) => {
    try {
        return await request.patch(Api.user.order + "/" + orderId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const DELETEORDER = async (orderId) => {
    try {
        return await request.delete(Api.user.order + "/" + orderId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}