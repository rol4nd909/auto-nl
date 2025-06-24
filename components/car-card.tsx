import type { CarData } from "@/types/car";

export function CarCard({ car }: { car: CarData }) {
  return (
    <div className="grid gap-4 border ">
      <img src={car.imageUrls[0]} alt={car.vehicleTitle} />
      <div className="p-6 pt-0">
        <h3>
          {car.brand} - {car.model}
        </h3>
        <p>€{car.price.toLocaleString()}</p>
        <p className="mt-4">Options:</p>
        <ul className="list-disc pl-6">
          <li>
            Towing Capacity: {car.measurements.towingBrakedWeight ?? "N/A"} kg
          </li>
          <li>Has Towbar: {car.specifications.towbar ? "Yes" : "No"}</li>
          <li>
            Apple CarPlay: {car.specifications.appleCarPlay ? "Yes" : "No"}
          </li>
          <li>Android Auto: {car.specifications.androidAuto ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  );
}
