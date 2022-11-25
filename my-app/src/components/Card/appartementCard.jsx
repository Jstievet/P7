import { getData } from "./../../API/index";
import { useEffect, useState } from "react";
import Card from "./index";

export default function AppartementCard() {
  const [appartementSheet, setAppartementSheet] = useState([]);
  useEffect(() => {
    getData().then((data) => {
      setAppartementSheet(data);
    });
  }, []);

  console.log(appartementSheet);
  return (
    <div className="AllCard">
      {appartementSheet.map((sheet, index) => (
        <Card
          key={`${sheet.id}-${index}-${Math.random()}`}
          cover={sheet.cover}
          title={sheet.title}
          id={sheet.id}
        />
      ))}
    </div>
  );
}
