import { getStoredCart } from "./fakeDB";

export const productsAndCartData = async () => {
  const productsData = await fetch(
    "https://circle-it-server.vercel.app/allcourses"
  );
  const products = await productsData.json();

  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product._id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { initialCart };
};
