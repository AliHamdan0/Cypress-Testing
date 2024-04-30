export const revalidate = 3600; //one hour
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <>
      <h6>Number of items {data?.length || 0}</h6>
    </>
  );
}
