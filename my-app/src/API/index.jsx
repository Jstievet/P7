import { useState } from "react";
import { useEffect } from "react";

export default function GetData(urlApi) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(urlApi).then((res) => setData(res.data));
  }, []);
  return Response;
}

// const [data, getAllAppart] = useState({});

// async function getAllAppart(urlApi) {
//   useEffect(() => {
//     try {
//       const response = fetch(urlApi);
//       const { data } = response.json;
//     } catch (err) {
//     } finally {
//     }
// .then(async (response) => {
//   const data = await response.json();
//   if (!response.ok) {
//     const error = (data && data.message) || response.statusText;

//     return Promise.reject(error);
//   }

// return data;
//   }, []);
// }
