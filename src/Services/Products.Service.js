import Api from "../Constants/API.Constant.json";
import toastConfig from "../Constants/Toast.Constant.json";
import { request } from "../Configs/RequestMethod.Config";
import toast from 'react-hot-toast';

export const CREATEPRODUCT = async (reqBody) => {
    try {
        return await request.post(Api.admin.product, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETPRODUCTS = async () => {
    try {
        return await request.get(Api.user.product);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETPRODUCTDETAILS = async (productId) => {
    try {
        return await request.get(Api.user.product + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const ADDORUPDATEPRODUCTREVIEW = async (productId, reqBody) => {
    try {
        return await request.put(Api.user.review + "/" + productId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const UPDATEPRODUCT = async (productId, reqBody) => {
    try {
        return await request.put(Api.admin.product + "/" + productId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const DELETEPRODUCT = async (productId) => {
    try {
        return await request.delete(Api.admin.product + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const DELETEUSERREVIEW = async (reviewId, productId) => {
    try {
        return await request.delete(Api.admin.review + "/" + reviewId + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const DELETEPRODUCTREVIEW = async (reviewId, productId) => {
    try {
        return await request.delete(Api.user.review + "/" + reviewId + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}