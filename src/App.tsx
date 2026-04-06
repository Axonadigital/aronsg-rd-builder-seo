import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Tjanster from "./pages/Tjanster.tsx";
import TjanstDetalj from "./pages/TjanstDetalj.tsx";
import OmOss from "./pages/OmOss.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Integritetspolicy from "./pages/Integritetspolicy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tjanster" element={<Tjanster />} />
            <Route path="/tjanster/:slug" element={<TjanstDetalj />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/integritetspolicy" element={<Integritetspolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
