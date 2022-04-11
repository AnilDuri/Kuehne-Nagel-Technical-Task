import { useContext, useState } from "react";
import ProductDetail from "./components/ProductDetail";
import ProductDetailsCard from "./components/ProductDetailsCard";
import Subtitle from "./components/Subtitle";
import ProfileTabs from "./components/Tabs";
import TagFilter from "./components/TagFilter";
import Title from "./components/Title";

import { ProductsContext } from "./store/productsContext";


function App() {
  const productsCtx = useContext(ProductsContext);
  const [filteredProducts ] = useState(productsCtx.products.filteredProducts);
  const [showProductDetail, setShowProductDetail] = useState(false);

  function showDetail(product) {
    setShowProductDetail(true);
    productsCtx.setSelectedProduct(product)
  }

  return (
    <div className="flex flex-col justify-start items-center h-auto py-8 bg-gray-100">
      <div className="grid grid-cols-12 gap-0 w-full px-8">
        <div className="col-span-2">
        </div>
        <div className="p-4 col-span-8 space-y-4">
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
              <input type="search" className="p-1 rounded w-full bg-gray-100 pl-10" placeholder="Type Here..." />
            </div>
          </div>
          {filteredProducts.map((product, index) => {
            return <ProductDetail key={index} product={product} showDetail={showDetail} />
          })}
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
