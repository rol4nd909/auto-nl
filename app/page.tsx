import { fetchAllValidCars } from "@/lib/api";
import HomeContent from "./home-content";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/query-client";
import { AppProviders } from "@/components/app-providers";

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cars"],
    queryFn: fetchAllValidCars,
    retry: 1,
  });

  return (
    <AppProviders>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeContent />
      </HydrationBoundary>
    </AppProviders>
  );
}
