import { Counter } from "./counter";

// export const revalidate = 3600;
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  const data = await res.json();
  return (
    <>
      <h6>
        Product Page <Counter />
      </h6>
      {data[data.length - 1].title}
    </>
  );
}
