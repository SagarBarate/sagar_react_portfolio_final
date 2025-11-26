const Shimmer = ({ type = 'default', className = '' }) => {
  const baseClasses = 'shimmer-loading';
  
  if (type === 'image' || type === 'profile') {
    return (
      <div className={`${baseClasses} ${className} rounded-lg bg-navy-900`}>
        <div className="shimmer-content"></div>
      </div>
    );
  }
  
  if (type === 'text') {
    return (
      <div className={`${baseClasses} ${className} h-4 bg-navy-900 rounded`}>
        <div className="shimmer-content"></div>
      </div>
    );
  }
  
  if (type === 'card') {
    return (
      <div className={`${baseClasses} ${className} rounded-lg bg-navy-900 border border-orange-500/30`}>
        <div className="shimmer-content"></div>
      </div>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className} bg-navy-900 rounded`}>
      <div className="shimmer-content"></div>
    </div>
  );
};

export default Shimmer;


