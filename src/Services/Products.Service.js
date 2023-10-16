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

export const GETPRODUCTS = async ({ name = '', price_lte = Infinity, price_gte = 0, rating_lte = 5, rating_gte = 0, category = '', subCategory = '', page = 1, sort = 'newest' }) => {
    try {
        let url = Api.user.product + "?price[lte]=" + price_lte + "&price[gte]=" + price_gte + "&ratings[lte]=" + rating_lte + "&ratings[gte]=" + rating_gte + "&page=" + page + "&sort=" + sort;

        if (name) {
            url += "&name=" + name;
        } if (category) {
            url += "&category=" + category;
        } if (subCategory) {
            url += "&subCategories=" + subCategory;
        }

        return await request.get(url);
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