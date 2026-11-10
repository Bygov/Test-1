import { useProductStore } from "../entities/productStore";
import Button from "../shared/Button";

interface FavoriteButtonProps {
  productId: number;
}

const FavoriteButton = ({ productId }: FavoriteButtonProps) => {
  const isFavorite = useProductStore((state) =>
    state.isFavorite(productId)
  );

  const toggleFavorite = useProductStore(
    (state) => state.toggleFavorite
  );

  return (
    <Button
      variant={isFavorite ? "danger" : "secondary"}
      size="sm"
      onClick={() => toggleFavorite(productId)}
    >
      {isFavorite ? "В избранном" : "В избранное"}
    </Button>
  );
};

export default FavoriteButton;