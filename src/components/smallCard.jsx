import React, { useState } from 'react';

const SmallCard = ({
  imageUrl,
  name,
  description,
  buttonText = "Learn More", 
  onButtonClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div 
      className={`max-w-screen flex flex-col bg-white shadow-sm border border-gray-700 rounded-lg my-6 gap-8 w-64 h-96 transition-all duration-300 ease-in-out ${isHovered ? 'transform scale-110 shadow-xl z-10' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mt-6 overflow-hidden rounded-md h-auto flex justify-center items-center">
        <ProfileImage src={imageUrl} alt="profile-picture" isHovered={isHovered} />
      </div>
      <div className="p-1 text-center">
        <ProfileName isHovered={isHovered}>{name}</ProfileName>
        <ProfileDescription isHovered={isHovered}>{description}</ProfileDescription>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-2">
        <ProfileButton onClick={handleClick} isHovered={isHovered}>{buttonText}</ProfileButton>
      </div>
    </div>
  );
};

const ProfileImage = ({ src, alt, isHovered }) => (
  <img 
    className={`w-3/5 object-cover transition-all duration-300 ${isHovered ? 'transform scale-110' : ''}`} 
    src={src} 
    alt={alt} 
  />
);

const ProfileName = ({ children, isHovered }) => (
  <h4 
    className={`mb-1 text-xl font-semibold transition-all duration-300 ${isHovered ? 'text-blue-700' : 'text-slate-800'}`}
  >
    {children}
  </h4>
);

const ProfileDescription = ({ children, isHovered }) => (
  <p 
    className={`text-base mt-4 font-light transition-all duration-300 ${isHovered ? 'text-slate-900' : 'text-slate-600'}`}
  >
    {children}
  </p>
);

const ProfileButton = ({ children, onClick, isHovered }) => (
  <button 
    onClick={onClick}
    className={`min-w-32 rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all duration-300 ${isHovered ? 'bg-blue-600 shadow-lg' : 'bg-slate-800 shadow-md'} hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
    type="button"
  >
    {children}
  </button>
);

export default SmallCard;