import { useProductContext } from "../Context/Context";
import Product from "../Product/Product";

function FeatureProducts() {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    <div>...loading</div>;
  }
  return (
    <div className="text-center ">  
      <div className="text-center flex justify-center flex-wrap">
        {featureProducts.map((products) => {
          return <Product key={products.id} {...products} />;
        })}
      </div>
    </div>
  );
}

export default FeatureProducts;
