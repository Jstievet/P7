import { useState } from "react";
import { useEffect } from "react";

export default function GetData(urlApi) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(urlApi).then((res) => setData(res.data));
  }, []);
  return Response;
}
