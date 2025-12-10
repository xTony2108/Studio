import { Link } from "react-router";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { FormInput } from "../components/form/FormInput";
import loginImg from "../assets/img/login.svg";
import { Submit } from "../components/form/Submit";
import { useState } from "react";
import { useLogin } from "../hooks/useAuth";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const { data, mutate } = useLogin();

  const handleLogin = (e) => {
    const { name, value, checked, type } = e.target;

    setLogin((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  };

  const handleSubmit = () => {
    mutate(login);
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-bg-primary overflow-hidden">
        <div className="hidden lg:flex items-center justify-center bg-primary text-white">
          <div className="max-w-sm text-center space-y-4 p-6">
            <h1 className="text-4xl font-bold">Bentornato/a 👋</h1>
            <p className="text-md">
              Accedi per gestire il tuo profilo, appuntamenti o materiali.
            </p>
            <img
              src={loginImg}
              alt="Login Illustration"
              className="w-72 mx-auto"
            />
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Accedi</h2>
            <p className="text-sm text-gray-500">
              Non hai un account?{" "}
              <Link
                to="/register"
                className="text-secondary font-semibold hover:underline"
              >
                Registrati
              </Link>
            </p>

            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />

                <FormInput
                  type="email"
                  placeholder="Email"
                  value={login.email}
                  name="email"
                  handler={(e) => handleLogin(e)}
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <FormInput
                  type="password"
                  placeholder="Password"
                  value={login.password}
                  name="password"
                  handler={(e) => handleLogin(e)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={login.remember}
                  onChange={handleLogin}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 "
                />
                <label
                  htmlFor="remember"
                  className="text-gray-700 text-sm cursor-pointer"
                >
                  Ricordami
                </label>
              </div>
              <div className="text-right text-sm">
                <Link
                  to="/forgotPassword"
                  className="text-secondary hover:underline"
                >
                  Hai dimenticato la password?
                </Link>
              </div>

              <Submit text="Accedi" handler={handleSubmit} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
