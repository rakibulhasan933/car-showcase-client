import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils";



export default async function Home() {
  const allCars = await fetchCars();

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className="mt-12 sm:px-16 px-6  py-4 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="flex flex-row items-center justify-between px-4">
          <div className="flex-wrap items-center w-full gap-5 mt-12 flex-between">
            <SearchBar />
          </div>
          <div className="flex flex-row items-center gap-2">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>
      <section>
        <div className="grid w-full grid-cols-1 gap-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 pt-14">
          {
            allCars.map((car: CarProps) => <CarCard key={car.model} car={car} />)
          }
        </div>
      </section>
    </main>
  )
}
