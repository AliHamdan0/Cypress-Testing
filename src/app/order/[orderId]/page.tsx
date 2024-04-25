export default async function OrderID({ params }: { params: { orderId: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.orderId}`);
  const data = await res.json();
  return <div>Order id : {data.id}</div>;
}
