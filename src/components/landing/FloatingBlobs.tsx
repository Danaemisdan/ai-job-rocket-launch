
const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl floating-animation"></div>
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-gradient-to-tr from-accent/15 to-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl floating-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-2xl floating-animation" style={{ animationDelay: '5s' }}></div>
      
      {/* Smaller accent blobs */}
      <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-primary/5 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-accent/5 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingBlobs;
