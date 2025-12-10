import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "../api/auth/auth";
import { onSuccessFn } from "../api/handlers/onSuccess";
import { onErrorFn } from "../api/handlers/onError";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => onSuccessFn(data, true, "/dashboard"),
    onError: (err) => onErrorFn(err, true),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => onSuccessFn(data, true, "/login"),
    onError: (err) => onErrorFn(err, true),
  });
};
