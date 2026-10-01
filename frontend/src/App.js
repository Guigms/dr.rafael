import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";
import AssistencialPage from "@/components/AssistencialPage";
import EduPage from "@/components/edu/EduPage";
import LogoIntro from "@/components/LogoIntro";
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

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
        <ScrollToTop />
        <LogoIntro />
        <div className="grain relative bg-brand-paper">
          <Routes>
            <Route path="/" element={<AssistencialPage />} />
            <Route path="/edu" element={<EduPage />} />
            <Route path="*" element={<AssistencialPage />} />
          </Routes>
          <WhatsAppFloat />
          <Toaster position="bottom-left" richColors />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
