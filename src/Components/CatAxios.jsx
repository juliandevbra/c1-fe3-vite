import axios from "axios";
import React, { useEffect, useState } from "react";

const CatAxios = () => {
  const [loading, setLoading] = useState(true);
  const url = "https://api.thecatapi.com/v1/images/search";
  const [cat, setCat] = useState({});

  useEffect(() => {
    axios(url)
      .then((res) => {
        setCat(res.data[0]);
        console.log(res);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("cat", cat);

  return (
    <div>
      {loading ? (
        "Cargando gatito..."
      ) : (
        <img src={cat.url} alt="" width={400} />
      )}
    </div>
  );
};

export default CatAxios;
