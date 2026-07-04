import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import Index from "./pages/Index";
import LaFamilia from "./pages/LaFamilia";
import ElRitual from "./pages/ElRitual";
import Galeria from "./pages/Galeria";
import ElAcceso from "./pages/ElAcceso";
import LegalPage from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/la-familia" element={<LaFamilia />} />
          <Route path="/el-ritual" element={<ElRitual />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/el-acceso" element={<ElAcceso />} />
          <Route path="/aviso-legal-privacidad" element={<LegalPage type="privacy" />} />
          <Route path="/terminos-condiciones" element={<LegalPage type="terms" />} />
          <Route path="/cookies" element={<LegalPage type="cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
