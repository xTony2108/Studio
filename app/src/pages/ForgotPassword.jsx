import { Link } from "react-router";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import forgotPW from "../assets/img/forgot-pw.svg";
import { useState } from "react";
import { Submit } from "../components/form/Submit";
import { FormInput } from "../components/form/FormInput";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-bg-primary overflow-hidden">
      <div className="hidden lg:flex items-center justify-center bg-primary text-white">
        <div className="max-w-sm text-center space-y-4 p-6">
          <h1 className="text-4xl font-bold">Password dimenticata?</h1>
          <p className="text-md">
            Ti invieremo un link per reimpostare la tua password.
          </p>
          <img
            src={forgotPW}
            alt="Reset Illustration"
            className="w-72 mx-auto"
          />
        </div>
      </div>

      <motion.div
        className="flex items-center justify-center p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Reimposta password
          </h2>
          <p className="text-sm text-gray-500">
            Inserisci il tuo indirizzo email, ti invieremo le istruzioni.
          </p>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <FormInput
                type="email"
                placeholder="La tua email"
                value={email}
                name="email"
                handler={(e) => setEmail(e.target.value)}
              />
            </div>

            <Submit text="Invia link di recupero" handler={handleSubmit} />
          </div>

          <div className="text-center text-sm">
            <Link to="/login" className="text-secondary hover:underline">
              Torna al login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
