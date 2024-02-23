import React from 'react';

interface CircularProgressBarProps {
  amountInvoiced: number;
  totalAmount: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ amountInvoiced, totalAmount }) => {
  // Calculate the percentage of amount invoiced
  const percentage = (amountInvoiced / totalAmount) * 100;

  // Calculate the clip path value based on the percentage
  const clipPathValue = `inset(0 ${(100 - percentage).toFixed(2)}% 0 0)`;

  return (
    <div className="circular-progress w-10 h-10 relative">
      <div className="absolute inset-0 flex items-center justify-center text-amber-600 text-md font-bold">
        {percentage.toFixed(0)}%
      </div>
      <div
        className={`absolute inset-0 border-4 border-transparent rounded-full ${percentage === 100 ? 'border-amber-400' : 'border-amber-800'}`}
        style={{
          clipPath: clipPathValue,
          transition: 'clip-path 0.5s ease', // Apply transition to clip-path
        }}
      ></div>
    </div>
  );
};

export default CircularProgressBar;
