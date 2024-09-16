import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";
import withErrorBoundary from "../HOC/withErrorBoundary";

const Cart = () => {
  const { state } = useRecipeStates();
  // const { cart } = useContext(RecipeStates)
  return (
    <div>
      <h2>Recetas seleccionadas</h2>
      {state.cart.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
const CartWithError = withErrorBoundary(Cart);
export default CartWithError;
