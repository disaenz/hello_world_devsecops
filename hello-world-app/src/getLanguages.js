export default async function getLanguages() {
  console.log("at await");

  const response = await fetch("http://localhost:3200/languages");
  console.log(response);

  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    let contents = await response.json();
    return contents.languages;
  }
}
