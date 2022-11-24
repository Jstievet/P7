export async function getData() {
  try {
    // le json = logement.json différent de logements.json
    // le json = postionement du fichier dans le dossier Public
    const response = await fetch("/logements.json");
    if (response.ok) {
      return await response.json();
    } else {
      // TODO Lever une exception
    }
  } catch (error) {
    console.error(error);
  }
}
// TODO Init getData and find by id
export async function getDataById(params) {
  try {
    const data = await getData();
    const response = data.Find(({ id }) => id === params);
    if (response.ok) {
      return await response.json();
    } else {
      // TODO Lever une exception
    }
  } catch (error) {
    console.error(error);
  }
}
