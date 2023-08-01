import { useEffect, useState } from "react";

interface IData {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  mentioned: Array<string>;
  isArchived: boolean;
}

export const URL = "../src/data/data.json";

export function useFetch() {
  const [data, setData] = useState<IData[]>([]);

  useEffect((): void => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(URL);
    const json = await response.json();
    setData(json);
  }

  return { data, fetchData };
}
