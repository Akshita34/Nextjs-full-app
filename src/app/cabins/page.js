import CabinList from "@/Components/CabinList";
import Filter from "@/Components/Filter";
import Spinner from "@/Components/Spinner";
import { Suspense } from "react";

// export const revalidate = 15; ////i.e. the changes will be seen every 15s, the page will reload the complete data every 15s

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  // CHANGE

  console.log(searchParams);
  console.log("done");

  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="mb-4 flex justify-end">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
