export async function getData() {
  try {
    // le json = logement.json différent de logements.json
    // le json = postionement du fichier dans le dossier Public
    const response = await fetch("/logements.json");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("no data");
    }
  } catch (error) {
    console.error(error);
  }
}
// TODO Init getData and find by id
export async function getDataById(idLocation) {
  try {
    const data = await getData();
    const dataOne = data.find(({ id }) => id === idLocation);
    console.log("dataOne", dataOne);
    if (dataOne) {
      console.log("if dataOne", dataOne);
      return dataOne;
    } else {
      // TODO Lever une exception
    }
  } catch (error) {
    // console.error(error);
  }
}
