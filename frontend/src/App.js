import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Componentes da Landing Page Principal
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import HomeCare from "@/components/HomeCare";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Componente da Área Educacional (EduSaude)
import EduPage from "@/components/edu/EduPage";

// Página Principal
function MainPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Specialties />
        <HomeCare />
        <Differentials />
        <Testimonials />
        <Faq />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota Institucional Principal */}
        <Route path="/" element={<MainPage />} />

        {/* Rota Educacional Estática */}
        <Route path="/edu" element={<EduPage />} />

        {/* Redirecionamento de rotas inexistentes para a página inicial */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
