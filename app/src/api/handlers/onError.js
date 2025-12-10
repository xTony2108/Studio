import toast from "react-hot-toast";

export const onErrorFn = (error, setToast = false) => {
  if (setToast) toast.error(error);
  return error;
};
