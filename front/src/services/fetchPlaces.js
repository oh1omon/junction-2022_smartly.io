import axios from "axios";

export const fetchPlaces = (name, setPlaces) => {
  axios({
    url: `http://localhost:5000/api/places/${name}`,
    method: "POST",
    data: {},
  })
    .then((res) => {
      const resPlaces = res.data.slice(0, 5);
      setPlaces(resPlaces);
      console.log(resPlaces);
    })
    .catch((error) => {
      console.log(error);
    });
  return [];
};
