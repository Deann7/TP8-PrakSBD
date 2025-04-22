import React from 'react';

const SmallCard = ({
  imageUrl,
  name,
  description,
  buttonText = "Learn More", 
  onButtonClick  // For scrolling to the section
}) => {
  // Use the scroll handler instead of opening a link
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <div className="max-w-screen flex flex-col bg-white shadow-sm border border-gray-700 rounded-lg my-6 gap-10 w-64 h-[420px]">
      <div className="mt-6 overflow-hidden rounded-md h-auto flex justify-center items-center">
        <ProfileImage src={imageUrl} alt="profile-picture" />
      </div>
      <div className="p-1 text-center">
        <ProfileName>{name}</ProfileName>
        <ProfileDescription>{description}</ProfileDescription>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-2">
        <ProfileButton onClick={handleClick}>{buttonText}</ProfileButton>
      </div>
    </div>
  );
};

const ProfileImage = ({ src, alt }) => (
  <img className="w-[60%] h-[100%] object-cover" src={src} alt={alt} />
);

const ProfileName = ({ children }) => (
  <h4 className="mb-1 text-xl font-semibold text-slate-800">
    {children}
  </h4>
);

const ProfileDescription = ({ children }) => (
  <p className="text-base text-slate-600 mt-4 font-light">
    {children}
  </p>
);

const ProfileButton = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="min-w-32 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
    type="button"
  >
    {children}
  </button>
);

export default SmallCard;