import React, { useState, useEffect } from 'react';
import './Found.css';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Found = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pet-rescue-project.onrender.com/pets');
        console.log(response);
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="found-home">
      <div className="card-container">
        {pets.map((pet) => (
          <div key={pet._id} className="card">
            <p className="pet-name">{pet.petname}</p>
            <p className="pet-date">{pet.date}</p>
            <p className="pet-description">{pet.desc}</p>
            <p className="pet-city">              <FaLocationDot /> {pet.city}
</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Found;
