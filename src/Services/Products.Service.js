// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import ToastConstant from "../Constants/Toast.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';

// APIS
export const CREATEPRODUCT = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.admin.product, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETPRODUCTS = async ({ name = '', price_lte = Infinity, price_gte = 0, rating_lte = 5, rating_gte = 0, category = '', subCategory = '', page = 1, sort = 'newest' }) => {
    try {
        let url = ApiConstant.user.product + "?price[lte]=" + price_lte + "&price[gte]=" + price_gte + "&ratings[lte]=" + rating_lte + "&ratings[gte]=" + rating_gte + "&page=" + page + "&sort=" + sort;

        if (name) {
            url += "&name=" + name;
        } if (category) {
            url += "&category=" + category;
        } if (subCategory) {
            url += "&subCategories=" + subCategory;
        }

        return await Request.get(url);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETPRODUCTDETAILS = async (productId) => {
    try {
        return await Request.get(ApiConstant.user.product + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const ADDORUPDATEPRODUCTREVIEW = async (productId, reqBody) => {
    try {
        return await Request.put(ApiConstant.user.review + "/" + productId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const UPDATEPRODUCT = async (productId, reqBody) => {
    try {
        return await Request.put(ApiConstant.admin.product + "/" + productId, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const DELETEPRODUCT = async (productId) => {
    try {
        return await Request.delete(ApiConstant.admin.product + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const DELETEUSERREVIEW = async (reviewId, productId) => {
    try {
        return await Request.delete(ApiConstant.admin.review + "/" + reviewId + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const DELETEPRODUCTREVIEW = async (reviewId, productId) => {
    try {
        return await Request.delete(ApiConstant.user.review + "/" + reviewId + "/" + productId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}