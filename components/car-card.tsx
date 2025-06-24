import type { Car } from "@/lib/types";

export function CarCard({ car }: { car: Car }) {
  return (
    <div className="grid gap-4 border ">
      <img src={car.imageUrl} alt={car.vehicleTitle} />
      <div className="p-6 pt-0">
        <h3>
          {car.brand} - {car.model}
        </h3>
        <p>€{car.price.toLocaleString()}</p>
        <p className="mt-4">Options:</p>
        <ul className="list-disc pl-6">
          <li>Towing Capacity: {car.towingBrakedWeight ?? "N/A"} kg</li>
          <li>Has Towbar: {car.hasTowbar ? "Yes" : "No"}</li>
          <li>Apple CarPlay: {car.hasCarplay ? "Yes" : "No"}</li>
          <li>Android Auto: {car.hasAndroidAuto ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  );
}
