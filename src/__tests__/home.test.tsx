import { render, screen } from "@testing-library/react";
import Home from "../app/home/page";
import Order from "@/app/order/page";
import OrderID from "@/app/order/[orderId]/page";

test("test server component with intercepted api", async () => {
  const serverComponent = await Home();
  render(serverComponent);
  const heading = await screen.findByText("delectus aut autem");
  expect(heading).toBeInTheDocument();
});

test("test client component with intercepted api", async () => {
  render(<Order />);
  const heading = await screen.findByText(/delectus aut autem/i);
  expect(heading).toBeInTheDocument();
});

test("test dynamic page with dynamic params in MSW", async () => {
  const serverComponent = await OrderID({ params: { orderId: "1" } });
  render(serverComponent);
  const orderNum = await screen.findByText(/Order id : 1/i);
  expect(orderNum).toBeInTheDocument();
});
