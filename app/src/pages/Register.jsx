import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Mail, Lock, User, IdCard } from "lucide-react";
import welcome from "../assets/img/welcome.svg";
import { Submit } from "../components/form/Submit";
import { FormInput } from "../components/form/FormInput";
import { useEffect, useState } from "react";
import { useRegister } from "../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPw: "",
  });

  const { data, mutate } = useRegister();

  const handleRegister = (e) => {
    const { name, value } = e.target;

    setRegister((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    toast.dismiss();
    mutate(register);
  };

  useEffect(() => {
    if (data?.redirect) {
      navigate(data.redirect);
    }
  }, [data]);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-bg-primary overflow-hidden">
      <div className="hidden lg:flex items-center justify-center bg-primary text-white">
        <div className="max-w-sm text-center space-y-4 p-6">
          <h1 className="text-4xl font-bold">Benvenuto/a 🌱</h1>
          <p className="text-md">
            Crea il tuo account per iniziare il tuo percorso.
          </p>
          <img
            src={welcome}
            alt="Register Illustration"
            className="w-72 mx-auto"
          />
        </div>
      </div>

      <motion.div
        className="flex items-center justify-center p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Registrati</h2>
          <p className="text-sm text-gray-500">
            Hai già un account?{" "}
            <Link
              to="/login"
              className="text-secondary font-semibold hover:underline"
            >
              Accedi
            </Link>
          </p>

          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <FormInput
                type="text"
                placeholder="Nome"
                value={register.name}
                name="name"
                handler={(e) => handleRegister(e)}
              />
            </div>
            <div className="relative">
              <IdCard className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <FormInput
                type="text"
                placeholder="Cognome"
                value={register.lastName}
                name="lastName"
                handler={(e) => handleRegister(e)}
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <FormInput
                type="email"
                placeholder="Email"
                name="email"
                value={register.email}
                handler={(e) => handleRegister(e)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                value={register.password}
                handler={(e) => handleRegister(e)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <FormInput
                name="confirmPw"
                type="password"
                placeholder="Conferma password"
                value={register.confirmPw}
                handler={(e) => handleRegister(e)}
              />
            </div>

            <Submit text="Registrati" handler={handleSubmit} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
