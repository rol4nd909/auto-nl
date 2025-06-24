"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAllValidCars } from "@/lib/api";
import { CarCard } from "@/components/car-card";

export default function HomeContent() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchAllValidCars,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Toyota Cars Matching Criteria</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {data?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </main>
  );
}
