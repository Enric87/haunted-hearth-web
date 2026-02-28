import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LaFamilia from "./pages/LaFamilia";
import ElRitual from "./pages/ElRitual";
import Galeria from "./pages/Galeria";
import ElAcceso from "./pages/ElAcceso";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/la-familia" element={<LaFamilia />} />
          <Route path="/el-ritual" element={<ElRitual />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/el-acceso" element={<ElAcceso />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
