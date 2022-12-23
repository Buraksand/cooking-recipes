import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:8000/recipes/" + id);
  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  );
};

export default Recipe;
