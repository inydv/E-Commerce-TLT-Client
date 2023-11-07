// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import ToastConstant from "../Constants/Toast.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';

// APIS
export const CREATEORDER = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.user.order, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETALLORDERS = async () => {
    try {
        return await Request.get(ApiConstant.admin.order);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETMYORDERS = async () => {
    try {
        return await Request.get(ApiConstant.user.order);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETORDERDETAILS = async (orderId) => {
    try {
        return await Request.get(ApiConstant.user.order + "/" + orderId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const UPDATEORDERSTATUS = async (orderId, reqBody) => {
    try {
        return await Request.patch(ApiConstant.user.order + "/" + orderId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const DELETEORDER = async (orderId) => {
    try {
        return await Request.delete(ApiConstant.user.order + "/" + orderId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}