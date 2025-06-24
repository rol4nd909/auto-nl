import { CarData } from "@/types/car";

export function isValidCar(car: CarData): boolean {
  return (
    car.specifications?.towbar === true &&
    (car.specifications.appleCarPlay || car.specifications.androidAuto) &&
    (car.measurements?.towingBrakedWeight ?? 0) >= 1700 &&
    car.brand?.toLowerCase() === "toyota"
  );
}
