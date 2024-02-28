import React from 'react';

const InfoIconWithTooltip = ({ imageUrl, tooltipText }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="text-gray-500 cursor-pointer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <i className="fas fa-info-circle text-xl"></i>
      </div>
      {showTooltip && (
        <div className="absolute z-10 bg-white p-2 rounded-md shadow-md bottom-full left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
          <img src={imageUrl} alt="Tooltip Image" className="w-64 h-32 mb-2" />
          <p className="text-sm">{tooltipText}</p>
        </div>
      )}
    </div>
  );
};

export default InfoIconWithTooltip;
