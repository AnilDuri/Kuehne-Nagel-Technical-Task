import { useContext, useEffect, useRef, useState } from "react";

import ProductDetail from "./components/ProductDetail";
import ProductDetailsCard from "./components/ProductDetailsCard";
import Subtitle from "./components/Subtitle";
import ProfileTabs from "./components/Tabs";
import TagFilter from "./components/TagFilter";
import Title from "./components/Title";
import { ProductsContext } from "./store/products-context";

function App() {
  const productsCtx = useContext(ProductsContext);
  const inputRef = useRef();
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProductTitle, setSelectedProductTitle] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    inputRef.current.value = "";
    setFilteredProducts(productsCtx.products.filteredProducts)
  }, [productsCtx.products.filteredProducts,])

  function showDetail(product) {
    setShowProductDetail(true);
    setSelectedProductTitle(product.productName);
    productsCtx.setSelectedProduct(product)
  }

  function handleInputChange(e) {
    const searchedProducts = productsCtx.products.filteredProducts.filter((product) => {
      // create a new object with the name and description of the product
      const fProduct = {
        name: product.productName,
        desc: product.description
      }
      const searchThrough = JSON.stringify(Object.values(fProduct).join(" "));
      console.log(searchThrough);
      return searchThrough.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredProducts(searchedProducts);
  }

  return (
    <div className="flex flex-col justify-start items-center pt-4 bg-gray-100">
      <div className="grid grid-cols-12 gap-0 w-full h-screen px-8">
        <div className="col-span-2">
        </div>
        <div className="flex flex-col flex-1 max-h-screen p-4 col-span-8 space-y-4">
          <div>
            <Title> Create Demand</Title>
            <Subtitle>Search the product you need here. Use tags to find any alternative.</Subtitle>
          </div>
          <ProfileTabs />
          <div className="py-6 bg-white shadow-sm rounded">
            <p className="font-semibold px-4 mb-6">I'm looking for...</p>
            <hr />
            <div className="grid grid-cols-5 gap-2 justify-items-center mt-6">
              <TagFilter label="Software Development" />
              <TagFilter label="Daily Business" />
              <TagFilter label="Graphic Editors" />
              <TagFilter label="Text Editors" />
              <TagFilter label="Management Tools" />
            </div>
            <div className="w-full px-4 relative text-gray-600 mt-4">
              <span className="absolute inset-y-1 left-4 flex items-center pl-2">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input ref={inputRef} onChange={handleInputChange} type="search" className="p-1 rounded w-full bg-gray-100 pl-10" placeholder="Type here..." />
            </div>
          </div>
          <div className="flex flex-col overflow-y-scroll max-h-fit space-y-5">
            {filteredProducts.map((product, index) => {
              return <ProductDetail
                key={index}
                product={product}
                showDetail={showDetail}
                selectedProductTitle={selectedProductTitle} />
            })}
          </div>
        </div>
        <div className="col-span-2">
          {showProductDetail &&
            <ProductDetailsCard />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
