// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';
import ToastConstant from "../Constants/Toast.Constant.json";

// APIS
export const VERIFYPAYMENT = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.payment.verification, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const RAZORPAYCREATEORDER = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.payment.createOrder, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETRAZORPAYKEYID = async () => {
    try {
        return await Request.get(ApiConstant.payment.keyId);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}