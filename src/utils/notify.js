import { toast } from 'react-toastify';

const options = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
}

export const error = msg => toast.error(msg, options);
export const success = msg => toast.success(msg, options);
