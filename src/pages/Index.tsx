import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the main bakery business plan page
    navigate("/plano-de-negocios-para-padarias");
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Redirecionando...</h1>
        <p className="text-xl text-muted-foreground">Aguarde um momento.</p>
      </div>
    </div>
  );
};

export default Index;
