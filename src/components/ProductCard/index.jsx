import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col justify-between items-center border border-gray-300 rounded-lg p-4 hover:shadow-md transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-2"
      />
      <h3 className="text-md font-medium text-center line-clamp-2">{product.title}</h3>
      <p className="text-green-600 font-semibold mt-1">${product.price}</p>
    </Link>
  );
}

export default ProductCard;
