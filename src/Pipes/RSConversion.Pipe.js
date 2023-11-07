// FUNCTION CONVERT TO INDIAN CURRENCY
export default function RSCoversion(str) {
    return Number(str).toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
}