import { useProductContext } from "../Context/Context";
import Product from "../Product/Product";

function FeatureProducts() {
  const { isLoading, products, featureProducts } = useProductContext();
  if (isLoading) {
    <div>...loading</div>;
  }
  return (
    <div className="text-center">
      This is FeatureProducts.
      <div>
        {products.map((products) => {
          return <Product key={products.id} {...products} />;
        })}
      </div>
    </div>
  );
}

export default FeatureProducts;
