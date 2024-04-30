import { notFound } from "next/navigation";
import Tods from "../../../../cypress/db/todos.json";
export default async function OrderID({ params }: { params: { orderId: string } }) {
  let data = null;
  const id = params.orderId;
  if (process.env.APP_ENV === "test" || process.env.NODE_ENV === "test") data = Tods;
  else {
    const res = await fetch(`${process.env.DB_PATH}/todos`);
    data = await res.json();
  }
  if (Number(id) <= 180 || id == "197")
    // Because we added 180 record to test database in json file
    return (
      <div>
        Order id : {data[Number(id)].id}
        <h6>{data[id].title}</h6>
      </div>
    );
  else notFound();
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
