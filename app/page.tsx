import { CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";



export default async function Home() {
  const allCars = await fetchCars();

  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className="mt-12 sm:px-16 px-6  py-4 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="flex-wrap items-center w-full gap-5 mt-12 flex-between">
          <SearchBar />
        </div>
        <div className="flex flex-wrap items-center justify-start gap-2">
          <CustomFilter />
        </div>
      </div>
      {isDataEmpty ? (
        <section>
          <div className="grid w-full grid-cols-1 gap-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 pt-14">

          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 mt-16">
          <h2 className="text-xl font-bold text-black ">Oops, no Results</h2>
        </div>
      )
      }
    </main>
  )
}
