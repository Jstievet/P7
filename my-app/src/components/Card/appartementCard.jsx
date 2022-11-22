import GetData from "./../../API/index";
import Card from "./index";

export default function AppartementCard() {
  const urlApi = "/logement.json";
  const appartementSheet = GetData(urlApi);

  console.log("test", GetData(urlApi));

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
