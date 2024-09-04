import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";

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

export default Cart;
