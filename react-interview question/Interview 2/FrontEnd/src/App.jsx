import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //cleanup
    return () => controller.abort();
  }, [search]);

  // const [products, setProducts, error, Loading]=customReactQuery("/api/products");

  // if(error) return <h1>Something went wrong</h1>;

  // if(loading) return <h1>Loading...</h1>

  return (
    <>
      <h1>Hello React</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <span>
        <button onClick={() => setSearch("")}>Reset</button>{" "}
      </span>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>Number of products are: {products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {

//   return [ products, error, Loading ];
// }
