import { useEffect } from "react";
import { productData } from "../api/dummyusr";
import ProductCard from "./ProductCard";

const ProductLayout = () => {

  useEffect(()=>{
    console.log("useEffect Called")
    fetchData()
  })

  const fetchData = async () => {
    try {

      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      console.log(data)

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <section className="py-8 antialiased bg-gray-50 dark:bg-gray-900 md:py-12">
        <div className="px-4 mx-auto max-w-screen-xl 2xl:px-0">
          <div className="grid gap-4 mb-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {productData.map((items, index) => {
              return (
                <ProductCard
                  key={index}
                  title={items.title}
                  price={items.price}
                  offer={items.offer}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLayout