import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withErrorBoundary from "../HOC/withErrorBoundary";
import { toast } from "react-toastify";

const Detail = () => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  console.log(params);

  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";

  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`;

  useEffect(() => {
    axios(url)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setRecipe(res.data);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
          toast("Receta obtenida!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          // caso en que la conexión falla
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al traer la receta!",
          footer: err,
        });
      });
  }, []);

  return (
    <div>
      {loading ? (
        "Acá va un spinner..."
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="" />
          <p>{recipe.instructions}</p>
        </>
      )}
    </div>
  );
};

const DetailWithError = withErrorBoundary(Detail);
export default DetailWithError;
