import { useEffect, useState } from 'react';

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  return (
    <div>
      <h1>Popular</h1>
      {popular.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Popular;
