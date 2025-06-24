import { CarApiResponse, CarData } from "@/types/car";

const PAGE_LIMIT = 500;

export async function fetchCarsBatch(skip: number): Promise<CarData[]> {
  const url = `https://whitelabel.auto.nl/stock/cars?ownerid=toyota&projection=all&skip=${skip}&limit=${PAGE_LIMIT}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  const json: CarData[] = await res.json();

  return json ?? [];
}

export { PAGE_LIMIT };
