export async function fetchData() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const { statusCode, statusMessage, ...data } = await response.json();
    if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
    return data;
  } catch (error) {
    console.error(error);
    return {
      content: "Opps... Something went wrong :(",
      author: "Try again later",
    };
  }
}
