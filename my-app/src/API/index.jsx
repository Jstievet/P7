export async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("no data");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getDataById(idLocation) {
  try {
    const data = await getData("/logements.json");
    const dataOne = data.find(({ id }) => id === idLocation);

    if (dataOne) {
      return dataOne;
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}
