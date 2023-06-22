"use client"
import CustomButton from "./CustomButton"


function Hero() {
	const handleScroll = () => {
		console.log('On click working');
	}
	return (
		<div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
			<div className="flex-1 px-6 pt-36 sm:px-16">
				<h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
					Find , Book or rent a Car Quickly and easily!
				</h1>
				<p className="text-[27px] text-black-100 font-light mt-5">
					Streamline Your car rental experience with our Effortless Booking Process.
				</p>
				<CustomButton
					tittle="Explore Cars"
					containerStyles=" bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>
		</div>
	)
}

export default Hero