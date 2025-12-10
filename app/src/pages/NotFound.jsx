import { useNavigate } from "react-router";
import { Button } from "../components/layout/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mx-6">
        Ops! La pagina che stai cercando non esiste.
      </p>
      <Button type="button" onClick={() => navigate(-1)}>
        Torna indietro
      </Button>
    </div>
  );
};

export default NotFound;
