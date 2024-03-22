import React, { useEffect, useState } from "react";
import { ProductListProps, getOneCategory } from "../../services/service";
import { Card } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const Category: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductListProps | undefined>>(
    []
  );
  const { state } = useLocation();
  const { type } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const handleProduct = async () => {
      const data = await getOneCategory(type);

      if (data) {
        setProducts(data);
      }
    };
    handleProduct();
  }, [type]);

  const sendToHome = () => {
    navigate("/");
  };

  return (
    <div className="bodyCategory">
      <div style={{ marginBottom: 100 }}>
        <h1>{type}</h1>
      </div>
      <div className="bodyContainer">
        {products.map((produto, index) => (
          <Card text={produto?.title} image={produto?.image} id={produto?.id} />
        ))}
      </div>
      <button onClick={sendToHome} className="footer-button">
        Voltar
      </button>
    </div>
  );
};

export default Category;
