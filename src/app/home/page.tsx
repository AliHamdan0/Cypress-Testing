export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return <div>{res ? data[0].title : "Not Found"}</div>;
}
