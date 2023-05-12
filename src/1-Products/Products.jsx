import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Products() {
  const [productsData, setProductsData] = useState([]);
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/products"
      );
      if (status === 200) {
        setProductsData(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {productsData.map(({ id, name }) => (
          <button
            key={id}
            onClick={() =>
              setProductsData(
                productsData.filter((product) => product.name === name)
              )
            }
          >
            Show {name}
          </button>
        ))}
        {productsData.map(({ name, price, desc, src }) => (
          <div>
            <img src={src} alt={name} height="200px" width="200px" />
            <h3>{name}</h3>
            <p>
              <b>Price:</b>
              {price}
            </p>
            <p>
              <b>Description:</b>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
