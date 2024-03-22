import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  text: string | undefined;
  image: string | undefined;
  id: number | undefined;
  handleEvent?: () => void;
}

const Card: React.FC<CardProps> = ({ text, image, id }) => {
  const navigate = useNavigate();

  const handleProductDetails = async (id: number | undefined) => {
    if (id) {
      navigate("/details", { state: { id: id } });
    }
  };

  return (
    <>
      <div className="" onClick={() => handleProductDetails(id)}>
        <div className="bodyCard">
          <img src={image} alt="" width="100" />
          {text}
        </div>
      </div>
    </>
  );
};

export default Card;
