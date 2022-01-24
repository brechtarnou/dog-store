import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
const DogList = () => {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    async function getListOfDogs() {
      const response = await axios.get(
        `${process.env.REACT_APP_DOG_API_BASE_URL}/breeds`,
        {
          headers: {
            "x-api-key": process.env.REACT_APP_DOG_APIKEY,
          },
        }
      );

      setBreeds(response.data);
    }
    getListOfDogs();
  }, []);
  return (
    <div>
      {breeds.map((breed) => {
        return (
          <div>
            <Link to={`/breed/${breed.id}`} key={breed.id}>
              {breed.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DogList;
