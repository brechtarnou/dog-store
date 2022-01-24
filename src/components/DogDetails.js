/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "@reach/router";
import { writeItem } from "../utils/database";

const DogDetails = () => {
  const [dog, setDog] = useState();
  const { breedid } = useParams();
  useEffect(() => {
    async function getDogDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_DOG_API_BASE_URL}/breeds/${breedid}`,
        {
          headers: {
            "x-api-key": process.env.REACT_APP_DOG_APIKEY,
          },
        }
      );
      console.log(response.data);
      setDog(response.data);
    }
    getDogDetails();
  }, []);

  if (dog) {
    return (
      <div>
        <h2>{dog.name}</h2>
        <img
          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
          style={{ height: "400px" }}
          alt="hondje"
        ></img>
        <button
          onClick={() => {
            writeItem(dog);
          }}
        >
          Add as favorite
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default DogDetails;
