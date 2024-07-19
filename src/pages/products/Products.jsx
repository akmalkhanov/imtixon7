import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productsSlice";
import styles from "./Products.module.scss";
import HeaderPr from '../../components/headerpr/HeaderPr'
import Navbar from '../../components/navbar/Navbar'
import Card from "../../components/card/Card";
import Spinner from '../../components/spinner/Spinner';

const baseURL = import.meta.env.VITE_BASE_URL;

const Products = ({ cart, setCart }) => {
  const products = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch(`${baseURL}/brands`);
      const data = await response.json();
      setBrands(data);
    }

    async function fetchColors() {
      const response = await fetch(`${baseURL}/colors`);
      const data = await response.json();
      setColors(data);
    }

    fetchBrands();
    fetchColors();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = `${baseURL}/products`;

      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await fetch(query);
        const data = await response.json();

        // Sort products based on the selected sort option
        if (sortOption === "price-asc") {
          data.sort((a, b) => a.price - b.price);
        } else if (sortOption === "price-desc") {
          data.sort((a, b) => b.price - a.price);
        }

        dispatch(addProducts(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor, sortOption]);

  return (
    <div>
      <Navbar />
      <HeaderPr />
      <section className='w-full h-24 bg-primary mt-8 flex'>
        <h3 className='text-secondary text-2xl font-bold pl-24 pt-8'>Filter by:</h3>
        <div className='text-secondary text-2xl font-bold pl-[1150px] pt-8 '>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className='absolute w-36 focus:border-white outline-none rounded-xl outline-secondary bg-primary '
          >
            <option value="Sort">Sort by:</option>
            <option value="default">Reset</option>
            <option value="price-asc">Cheaps</option>
            <option value="price-desc">Expensive</option>
          </select>
        </div>
      </section>
      <div className='container'>
        <div className={styles.container}>
          <aside>
            <div>
              <hr className="border-2 border-dashed border-gray-500 w-[200px] my-6" />
              <h3 className='text-xl font-bold ml-4'>BRAND</h3>
              <ul className='ml-4'>
                {brands.map((brand, index) => (
                  <li key={index}>
                    <input
                      type='radio'
                      value={brand}
                      name='brand'
                      id={brand}
                      checked={brand === selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                    />
                    <label htmlFor={brand}>{brand}</label>
                  </li>
                ))}
              </ul>
              <button className='bg-secondary py-2 px-12 text-white font-bold text-xl ml-4 rounded-xl hover:bg-white hover:text-secondary hover:border-2 border-secondary' onClick={() => setSelectedBrand("")}>Reset</button>
            </div>

            <div>
              <hr className="border-2 border-dashed border-gray-500 w-[200px] my-6 mt-8" />
              <h3 className='text-xl font-bold ml-4'>COLORS</h3>
              <div className='ml-4 mt-4'>
                <ul className={styles.colorsContainer}>
                  {colors.map((color, index) => (
                    <li key={index}>
                      <div
                        style={{
                          background: color,
                          outline: selectedColor === color ? "3px solid " : "",
                        }}
                        className={styles.color}
                        onClick={() => setSelectedColor(color)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <button className='bg-secondary py-2 px-12 text-white font-bold text-xl ml-4 rounded-xl hover:bg-white hover:text-secondary hover:border-2 border-secondary' onClick={() => setSelectedColor("")}>Reset</button>
            </div>
          </aside>
          <main>
            {loading ? (
              <Spinner />
            ) : products.length ? (
              <div className="w-[1250px] h-[900px] grid grid-cols-4">
                <div className='grid grid-cols-3 w-[1000px] ml-32'>
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      cart={cart}
                      setCart={setCart}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p>No products</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
