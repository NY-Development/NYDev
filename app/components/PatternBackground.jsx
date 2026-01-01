export default function PatternBackground({ children }) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white dark:bg-gray-950">
      
      {/* ✨ Ambient Gradient Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(
              140% 120% at 50% 0%, 
              rgba(255,255,255,1) 38%, 
              rgba(99,102,241,0.45) 100%
            ),
            radial-gradient(
              circle at 50% 45%, 
              rgba(99,102,241,0.18), 
              transparent 72%
            ),
            radial-gradient(
              circle at 85% 15%, 
              rgba(99,102,241,0.12), 
              transparent 60%
            )
          `,
        }}
      />

      {/* 🧱 Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
