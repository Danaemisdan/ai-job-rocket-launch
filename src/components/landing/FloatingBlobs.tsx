
const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">      
      {/* Green Blob */}
      <div 
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-success/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Gray Blob */}
      <div 
        className="absolute top-1/2 left-3/4 w-72 h-72 bg-muted-text/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Small Blue Blob */}
      <div 
        className="absolute top-1/6 right-1/3 w-48 h-48 bg-accent/30 rounded-full blur-2xl animate-float"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};

export default FloatingBlobs;
