import React from 'react';

const ValueComponent = ({ value, maxValue }) => {
  // Calculate the percentage based on the given value and maxValue
  const percentage = (value / maxValue) * 100;

  // Determine the background color based on the percentage
  const bgColor = `linear-gradient(90deg, yellow ${percentage}%, transparent ${percentage + 1}%)`;

  // Apply the inline style with the calculated background color
  const style = {
    backgroundImage: bgColor,
    backgroundSize: '100% 100%',
    color: 'black',
  };

  return (
    <div className='w-[150px] h-[10px] rounded-xl bg-gray-200'>
      <div style={style} className='w-full h-full'/>
    </div>
  );
};

export default ValueComponent;

