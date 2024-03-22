import axios from "axios";

export interface ProductListProps {
  title: string;
  image: string;
  id: number;
}

export interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const getAllProducts = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getAllCategories = async () => {
  try {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getOneCategory = async (type: string) => {
  try {
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${type}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getDetailsProduct = async (id: number) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getAllProducts, getAllCategories, getDetailsProduct, getOneCategory };
