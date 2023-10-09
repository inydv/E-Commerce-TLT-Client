import Api from "../Constants/API.Constant.json";
import toastConfig from "../Constants/Toast.Constant.json";
import { request } from "../Configs/RequestMethod.Config";
import toast from 'react-hot-toast';

export const PROCESSPAYMENT = async (reqBody) => {
    try {
        return await request.post(Api.payment.processPayment, reqBody);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}

export const GETSTRIPEAPIKEY = async () => {
    try {
        return await request.get(Api.payment.getStripeApiKey);
    } catch (error) {
        if (error?.response?.data?.MESSAGE)
            return toast.error(error?.response?.data?.MESSAGE, toastConfig.error);
    }
}