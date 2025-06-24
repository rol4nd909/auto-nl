import { Car, CarData } from "./types";

const PAGE_SIZE = 500;
const MAX_PAGES = 2000;

export async function fetchAllValidCars(): Promise<Car[]> {
  const seen = new Set<string>();
  const results: Car[] = [];

  for (let page = 0; page < MAX_PAGES; page++) {
    const skip = page * PAGE_SIZE;
    const cars = await fetchCarsPage(skip, PAGE_SIZE);

    if (cars.length === 0) break;

    for (const car of cars) {
      if (!seen.has(car.id)) {
        seen.add(car.id);
        results.push(car);
      }
    }
  }

  return results.sort((a, b) => a.price - b.price);
}

async function fetchCarsPage(skip: number, limit: number): Promise<Car[]> {
  const res = await fetch(
    `https://whitelabel.auto.nl/stock/cars?ownerid=toyota&projection=all&skip=${skip}&limit=${limit}`
  );

  if (!res.ok) throw new Error("Failed to fetch cars");

  const data: CarData[] = await res.json();

  return data.filter(isValidCar).map(transformCar);
}

function isValidCar(car: CarData): boolean {
  return (
    car.specifications?.towbar === true &&
    (car.specifications.appleCarPlay || car.specifications.androidAuto) &&
    (car.measurements?.towingBrakedWeight ?? 0) >= 1700 &&
    car.brand?.toLowerCase() === "toyota"
  );
}

function transformCar(car: CarData): Car {
  return {
    id: car.id?.carId?.toString() ?? car.clientId,
    brand: car.brand,
    model: car.model,
    type: car.type,
    vehicleTitle: car.vehicleTitle,
    price: car.price,
    imageUrl: car.imageUrls?.[0] ?? undefined,
    hasTowbar: car.specifications?.towbar ?? false,
    hasCarplay: car.specifications?.appleCarPlay ?? false,
    hasAndroidAuto: car.specifications?.androidAuto ?? false,
    towingBrakedWeight: car.measurements?.towingBrakedWeight ?? null,
  };
}
