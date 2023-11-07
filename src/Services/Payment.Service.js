// CUSTOM IMPORTS
import ApiConstant from "../Constants/API.Constant.json";
import ToastConstant from "../Constants/Toast.Constant.json";
import { Request } from "../Configs/RequestMethod.Config";

// TOASTER
import toast from 'react-hot-toast';

// APIS
export const PROCESSPAYMENT = async (reqBody) => {
    try {
        return await Request.post(ApiConstant.payment.processPayment, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}

export const GETSTRIPEAPIKEY = async () => {
    try {
        return await Request.get(ApiConstant.payment.getStripeApiKey);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, ToastConstant.error);
    }
}