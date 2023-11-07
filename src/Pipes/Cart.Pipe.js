// REACT
import { useState } from 'react'

// FUNCTION TO HANDLE CART
export default function UpdateCart(defaultValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem('cart');

            if (value) {
                return JSON.parse(value);
            } else {
                localStorage.setItem('cart', JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            return defaultValue;
        }
    });

    const setValue = (newValue) => {
        try {
            // LOGIC FOR UPDATE CART
            let cart = localStorage.getItem('cart');
            cart = cart && cart.length > 0 ? JSON.parse(cart) : [];

            const index = cart.findIndex(x => x.product._id === newValue.product._id);

            if (index >= 0) {
                cart[index].quantity = newValue.quantity;
            } else {
                cart.push(newValue);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            window.dispatchEvent(new Event("storage"));
        } catch (error) {
            console.log(error);
        }

        setStoredValue(newValue);
    }

    return [storedValue, setValue];
}
