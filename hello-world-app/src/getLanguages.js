export default async function getLanguages() {
  const response = await fetch("http://localhost:3200/languages");
  if (!response.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    let contents = await response.json();
    return contents.languages;
  }
}
