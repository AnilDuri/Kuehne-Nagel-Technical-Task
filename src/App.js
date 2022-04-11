import ProductDetail from "./components/ProductDetail";
import Subtitle from "./components/Subtitle";
import ProfileTabs from "./components/Tabs";
import TagFilter from "./components/TagFilter";
import Title from "./components/Title";

import { Products } from './data/Products';


function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen py-8 bg-gray-100">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="bg-red-800 p-4 col-span-2">
        </div>
        <div className="p-4 col-span-8 space-y-5">
          <div>
            <Title> Create Demand</Title>
            <Subtitle>Search the product you need here. Use tags to find an alternative</Subtitle>
          </div>
          <ProfileTabs />
          <div className="py-6 bg-white shadow-sm rounded">
            <p className="font-semibold px-9 mb-6">I'm looking for...</p>
            <hr />
            <div className="grid grid-cols-5 gap-2 justify-items-center mt-6">
              <TagFilter label="Software Development" />
              <TagFilter label="Daily Business" />
              <TagFilter label="Graphic Editors" />
              <TagFilter label="Text Editors" />
              <TagFilter label="Management Tools" />
            </div>
            <div className="w-full px-9 relative text-gray-600 mt-4">
              <span class="absolute inset-y-1 left-8 flex items-center pl-2">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input type="search" class="p-1 rounded w-full bg-gray-100 pl-10" placeholder="Type Here..." />
            </div>
          </div>
          {Products.map((product) => {
            return <ProductDetail product={product} />
          })}
        </div>
        <div className="bg-red-800 p-4 col-span-2">
        </div>

      </div>
    </div>
  );
}

export default App;
