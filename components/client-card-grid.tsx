"use client";

import { CarCard } from "@/components/car-card";
import { useFilteredCars } from "@/hooks/useFilteredCars";

export default function ClientCarGrid() {
  const { data, isLoading, isError } = useFilteredCars(9);

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 animate-pulse rounded" />
        ))}
      </div>
    );
  }

  if (isError) return <p>Something went wrong.</p>;

  if (!data?.length) return <p>No matching Toyota cars found.</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {data && data.map((car) => <CarCard key={car.id.carId} car={car} />)}
    </div>
  );
}
