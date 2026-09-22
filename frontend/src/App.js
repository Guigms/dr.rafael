import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Trajectory from "@/components/Trajectory";
import Testimonials from "@/components/Testimonials";
import Triage from "@/components/Triage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.error(err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-brand-paper p-8 text-center">
          <p className="text-brand-muted">Algo saiu do lugar. Recarregue a página, por favor.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="grain relative bg-brand-paper">
          <Header />
          <main>
            <Hero />
            <Marquee />
            <Manifesto />
            <Services />
            <Trajectory />
            <Testimonials />
            <Triage />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
          <Toaster position="bottom-left" richColors />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
