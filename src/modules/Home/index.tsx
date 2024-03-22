import React, { useEffect, useState } from "react";
import "./style.css";
import {
  ProductListProps,
  getAllCategories,
  getAllProducts,
} from "../../services/service";
import { Card } from "../../components";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductListProps | undefined>>(
    []
  );
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleProducts = async () => {
      const data = await getAllProducts();
      const data2 = await getAllCategories();
      console.log(data2);

      if (data) {
        setProducts(data);
      }
      if (data2) {
        setCategories(data2);
      }
    };
    handleProducts();
  }, []);

  const handleProductDetails = async (type: string | undefined) => {
    if (type) {
      navigate("/category", { state: { type: type } });
    }
  };

  return (
    <div className="bodyHome">
      <h1>Web Store</h1>
      <h2>Categorias de produtos</h2>
      <div className="bodyCategorie">
        {categories.map((type, index) => (
          <label onClick={() => handleProductDetails(type)}>{type}</label>
        ))}
      </div>
      <div className="bodyContainer">
        {products.map((produto, index) => (
          <Card text={produto?.title} image={produto?.image} id={produto?.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
