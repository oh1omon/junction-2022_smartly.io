import axios from "axios";

export const fetchPlaces = (name, setPlaces) => {
  axios({
    url: `http://34.120.52.239/api/places/${name}`,
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
