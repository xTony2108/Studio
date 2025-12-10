import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const onSuccessFn = (data, setToast = false, redirect) => {
  if (setToast) toast.success(data.message);

  data.redirect = redirect;
  return data;
};
