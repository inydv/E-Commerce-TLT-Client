// TOASTER
import ToastConstant from "../Constants/Toast.Constant.json";
import toast from 'react-hot-toast';

// FUNCTION TO HANDLE CART
export default function UpdateCart(newValue, isDelete = false) {
    let cart = localStorage.getItem('cart');
    cart = cart && cart.length > 0 ? JSON.parse(cart) : [];

    const index = cart.findIndex(x => x.product._id === newValue.product._id);

    if (isDelete) {
        cart.splice(index, 1);
    } else {
        if (index >= 0) {
            cart[index].quantity = newValue.quantity;
        } else {
            cart.push(newValue);
        }

        toast.error("Product Added To Cart", ToastConstant.success)
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
}