
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "./context/WalletContext";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import Proposals from "./pages/Proposals";
import SubmitProposal from "./pages/SubmitProposal";
import Token from "./pages/Token";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <WalletProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/proposals" element={<Proposals />} />
            <Route path="/submit-proposal" element={<SubmitProposal />} />
            <Route path="/token" element={<Token />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WalletProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
