import { useOutletContext } from "react-router-dom";

function Shop() {
  const { products } = useOutletContext();

  // create an item component that shows the info about a specific product and handles adding to cart

  return (
    <main>
      {products &&
        products.map((value) => {
          return <div key={value.id}>{value.title}</div>;
        })}
    </main>
  );
}

export default Shop;
