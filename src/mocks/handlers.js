import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", ({ request }) => {
    return HttpResponse.json([{ id: 1, title: "delectus aut autem" }]);
  }),

  http.get("https://jsonplaceholder.typicode.com/todos/:id", (request) => {
    const { params } = request;
    const { id } = params;
    ///we can store the mock data in an array then return id==index
    return HttpResponse.json({ id: id, title: "dynamic value" });
  }),
];
