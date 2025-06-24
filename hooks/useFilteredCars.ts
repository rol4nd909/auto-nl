"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchCarsBatch, PAGE_LIMIT } from "@/lib/api/fetchCarsBatch";
import { isValidCar } from "@/lib/utils/isValidCar";
import { CarData } from "@/types/car";

async function fetchFilteredCars(desiredCount: number): Promise<CarData[]> {
  let skip = 0;
  let matched: CarData[] = [];

  while (matched.length < desiredCount) {
    const batch = await fetchCarsBatch(skip);

    if (batch.length === 0) {
      break;
    }

    const validCars = batch.filter(isValidCar);

    matched.push(...validCars);

    if (batch.length < PAGE_LIMIT) {
      break;
    }

    skip += PAGE_LIMIT;
  }

  matched = dedupeCars(matched);
  matched.sort((a, b) => a.price - b.price);

  return matched.slice(0, desiredCount);
}

export function useFilteredCars(desiredCount: number = 20) {
  return useQuery<CarData[]>({
    queryKey: ["filtered-cars", desiredCount],
    queryFn: () => fetchFilteredCars(desiredCount),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}

function dedupeCars(cars: CarData[]) {
  const seen = new Set<string>();
  return cars.filter((car) => {
    const id = car.id.carId.toString();

    if (seen.has(id)) return false;

    seen.add(id);

    return true;
  });
}
