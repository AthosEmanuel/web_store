import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductDetailsProps, getDetailsProduct } from "../../services/service";
import "./style.css";
const Details: React.FC = () => {
  const [product, setProduct] = useState<ProductDetailsProps | null>(null);

  const { state } = useLocation();
  const { id } = state;
  const navigate = useNavigate();

  const sendToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleProduct = async () => {
      const data = await getDetailsProduct(id);
      console.log(data);
      if (data) {
        setProduct(data);
      }
    };
    handleProduct();
  }, [id]);

  return (
    <>
      <div className="productContainer">
        {product && (
          <>
            <h1>{product.title}</h1>
            <img
              src={product.image}
              alt="Product"
              className="productImage"
              width={300}
            />
            <div className="productDetails">
              <div className="productPrice">Preço: {product.price}</div>
              <div className="productDescription">
                Descrição: {product.description}
              </div>
              <div className="productReviews">
                <div>Avaliações:</div>
                <ul>
                  <li>Nota: {product.rating.rate}</li>
                  <li>Total de avaliações: {product.rating.count}</li>
                </ul>
              </div>
            </div>
          </>
        )}

        <button onClick={sendToHome} className="footer-button">
          Voltar
        </button>
      </div>
    </>
  );
};

export default Details;
