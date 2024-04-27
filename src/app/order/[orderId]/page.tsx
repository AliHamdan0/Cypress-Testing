import Tods from "../../../../cypress/db/todos.json";
export default async function OrderID({ params }: { params: { orderId: string } }) {
  let data = null;
  if (process.env.APP_ENV === "test" || process.env.NODE_ENV === "test") data = Tods;
  else {
    const res = await fetch(`${process.env.DB_PATH}/todos`);
    data = await res.json();
  }
  return (
    <div>
      Order id : {data[0].id}
      <h6>{data[0].title}</h6>
    </div>
  );
}

export async function generateStaticParams() {
  if (process.env.APP_ENV === "test")
    return Tods.slice(0, 15).map((todo: any) => ({
      orderId: todo.id.toString(),
    }));
  else {
    const response = await fetch(`${process.env.DB_PATH}/todos`);
    const todos = await response.json();

    return todos.slice(0, 2).map((todo: any) => ({
      orderId: todo.id.toString(),
    }));
  }
}

export const dynamicParams = true;
