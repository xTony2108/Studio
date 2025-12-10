import { AlertTriangle } from "lucide-react";
import { Button } from "../components/layout/Button";
import { useNavigate } from "react-router";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold  mb-2">Accesso negato</h1>
        <p className="text-gray-600 mb-6">
          Non hai i permessi necessari per accedere a questa pagina.
        </p>

        <div className="flex justify-center gap-4">
          <Button type="button" onClick={() => navigate(-1)}>
            Indietro
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
