import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function View360Page() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-iftm-navy to-[#1a1040]" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-iftm-primary/10 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 text-center px-4">
          {/* Icon */}
          <div className="relative inline-block mb-8">
            <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto">
              <i className="fas fa-panorama text-5xl text-iftm-gold" />
            </div>
            <div className="absolute inset-0 rounded-full bg-iftm-gold/10 animate-ping" />
          </div>

          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="bg-iftm-primary/80 backdrop-blur-sm px-5 py-1.5" style={{ transform: "skewX(-12deg)" }}>
              <span className="text-white font-bold text-xs uppercase tracking-widest" style={{ transform: "skewX(12deg)", display: "inline-block" }}>
                Coming Soon
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            360° <span className="text-iftm-gold">Campus View</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Experience our campus like never before with an immersive 360° virtual tour. Stay tuned!
          </p>

          {/* Back button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all text-sm font-medium"
          >
            <i className="fas fa-arrow-left" />
            Back to Home
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
