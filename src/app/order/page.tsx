"use client";

import { useEffect, useState } from "react";

export default function Order() {
  const [data, setData] = useState<any>("");
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setData(data[0].title);
    };
    getData();
  }, []);

  return <h6>{data}</h6>;
}
