import React, { useEffect, useState } from "react";
import { readAllItems } from "../utils/database";

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);
  useEffect(() => {
    async function getAllFavorites() {
      const response = await readAllItems();
      setFavorites(response);
    }
    getAllFavorites();
  }, []);

  if (!favorites) return null;
  return (
    <div>
      {/* Object.enties geeft je object terug als een array van arrays --> waarvan je eerste waarde altijd je key is en je tweede waarde je value */}
      {Object.entries(favorites).map(([objectKey, objectValue]) => {
        return <div key={objectKey}>{objectValue.name}</div>;
      })}
      {/* 
      {Object.keys(favorites).map((objectKey) => {
        return <div key={objectKey}>{favorites[objectKey].name}</div>;
      })}

      {(() => {
        for (const key in favorites) {
          console.log(key);
        }
      })()} */}
    </div>
  );
};

export default Favorites;
