import React from "react";
import "../../assets/styles/PhoneCard.scss";

interface PhoneCardProps {
  children: React.ReactNode;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ children }) => {
  return (
    <div className="card">
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="btn4"></div>

      <div className="card-int">
        <div className="hello">{children}</div>
      </div>

      <div className="top">
        <div className="camera">
          <div className="int"></div>
        </div>
        <div className="speaker"></div>
      </div>
    </div>
  );
};

export default PhoneCard;
