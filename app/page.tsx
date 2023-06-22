import { CustomFilter, Hero, SearchBar } from "@/components";



export default function Home() {
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
    </main>
  )
}
