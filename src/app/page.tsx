"use client";

import HorCard from "@/components/card/hor_card";
import VerCard from "@/components/card/ver_card";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Percent from "@/components/percent_card";
import PricingTable from "@/components/pricing";
import Steps from "@/components/steps";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Navbar />
			{/* Top image */}
			<div className="bg-home-pic relative h-[849px] bg-cover bg-center">
				<div className="relative z-10 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center text-start p-10 pt-24">
					{/* Left Section */}
					<div className="space-y-4 lg:space-y-2 md:p-8">
						<div className="text-[32px] md:text-[48px] lg:text-[56px] font-bold leading-tight">
							Storage and share your files on{" "}
							<span className="text-ligblue">Web3</span>
						</div>
						<div className="text-sm md:text-base lg:text-lg leading-6 md:leading-8 font-thin">
							Veecert is a decentralized document verification service
							revolutionizing the way credentials and documents are
							authenticated. Built on ICP Blockchain, Veecert leverages the
							inherent security, transparency, and immutability of this
							technology to provide a seamless and trustworthy verification
							process.
						</div>
						<div>
							<Link
								href="/signin"
								className="border-2 rounded-xl px-6 p-1  border-white text-white"
							>
								Getting Started
							</Link>
						</div>
					</div>

					{/* Right Section */}
					<div className="flex justify-center">
						<Image
							src="/a.svg"
							width={750}
							height={675}
							alt="Picture"
							className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-none"
						/>
					</div>
				</div>
			</div>

			<div className="p-10 md:p-8 lg:p-28 space-y-4">
				{/* Why storage */}
				<span className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-[#0E0F10] leading-tight">
					Why Storage on Web3?
				</span>
				<p className="text-gray text-sm md:text-base lg:text-lg max-w-full md:max-w-[600px] lg:max-w-[887px] leading-loose md:leading-loose">
					Our platform aims to eliminate fraud, enhance trust, and streamline
					the validation of documents across various industries.
				</p>

				{/* Cards */}
				<div className="pt-8 flex flex-col gap-5 lg:flex-row ">
					<div className="w-full max-w-[681px] space-y-5 mx-auto">
						<VerCard
							title="Decentralization"
							imageSrc="/Frame.svg"
							content="ICP provides a platform that can build any online service such as Veecerts in this case, providing a more effective cloud computing service."
							width={232.89}
							imageAlt="Picture"
							height={220}
						/>
						<VerCard
							title="Tokenization"
							imageSrc="/Code typing-bro 1.svg"
							content="Hashing the metadata of documents to make it unique and converted into NFTs (making it authentic and reliable)."
							width={278.5}
							imageAlt="Picture"
							height={278.5}
						/>
					</div>
					<div className="w-full max-w-[417px] mx-auto">
						<HorCard
							title="Immutable"
							imageSrc="/Frame (1).svg"
							content="On the ICP Blockchain, this makes it immutable, tamper proof and a store of value for generations to come."
							width={358}
							imageAlt="Picture"
							height={339}
						/>
					</div>
				</div>
			</div>

			<div className="bg-liblue p-10 pt-28 flex flex-col items-center justify-center w-full">
				<div className="flex flex-col items-center text-center px-4 lg:px-0 space-y-4">
					<div className="text-2xl md:text-3xl lg:text-5xl font-bold">
						Get started in a <span className="text-blue">few steps</span>
					</div>
					<span className="text-sm md:text-base lg:text-lg leading-loose md:leading-loose max-w-[90%] md:max-w-[70%] lg:max-w-[844px] pt-2">
						Mauris ac pretium morbi mauris sed ornare in. Rhoncus morbi
						malesuada id risus bibendum ut tincidunt risus. Sit rhoncus ultrices
						congue semper pretium porttitor mi. Accumsan posuere risus sagittis
						tortor nibh quam. Egestas nec egestas nulla tortor.
					</span>
				</div>

				{/* Steps */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-24 pb-10 px-4 md:px-10">
					<div>
						<Steps
							title="Create an account"
							content="Urna pharetra fermentum magna eget. Ornare est viverra ut nisl."
							imageSrc="/user-pen 1.svg"
							imageAlt="user"
							width={41}
							height={32}
						/>
					</div>
					<div>
						<Steps
							title="Upload your files"
							content="Cursus semper ut nulla urna sed vitae ultrices nisi curabitur. Velit egestas dui leo sit non a. Semper non turpis in lacus lorem non."
							imageSrc="/upload 1.svg"
							imageAlt="user"
							width={41}
							height={32}
						/>
					</div>
					<div>
						<Steps
							title="Tokenize Document"
							content="Dignissim sagittis platea dolor neque viverra. Neque neque platea tortor gravida mus pellentesque dui."
							imageSrc="/link 2.svg"
							imageAlt="user"
							width={41}
							height={32}
						/>
					</div>
				</div>
			</div>

			<div className="pt-8 px-6 md:px-16 lg:px-28">
				{/* Vision */}
				<div className="flex flex-col md:flex-row items-center md:space-x-20 space-y-8 md:space-y-0 p-6 md:p-10">
					<div>
						<Image
							src="/Layer_1.svg"
							width={379.75}
							height={382.27}
							alt="Vision Illustration"
						/>
					</div>
					<div className="flex flex-col w-full md:w-[530px] text-center md:text-left">
						<h2 className="text-3xl md:text-5xl font-bold">Vision.</h2>
						<p className="text-gray leading-loose">
							To be a single point of truth and ensuring trust for reliable,
							authentic and verified documents.
						</p>
					</div>
				</div>

				{/* Mission */}
				<div className="flex flex-col-reverse md:flex-row items-center md:space-x-20 space-y-8 md:space-y-0 p-6 md:p-10">
					<div className="flex flex-col w-full md:w-[530px] text-center md:text-left">
						<h2 className="text-3xl md:text-5xl font-bold">Our mission.</h2>
						<p className="text-gray leading-loose">
							Veecert&apos;s aims to bring solution to storage and
							centralization by securing storing important documents on cloud
							and utilizing the power of the ICP blockchain.
						</p>
					</div>
					<div>
						<Image
							src="/illustration.svg"
							width={421.66}
							height={322.94}
							alt="Mission Illustration"
						/>
					</div>
				</div>
			</div>

			<div className="bg-liblue p-10 mb-32 pt-28 flex flex-col items-center justify-center w-full">
				<div className="flex justify-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-10">
						Current Market
					</h2>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 sm:p-10 lg:p-10 pt-4">
					{/* Image Section */}
					<div className="flex justify-center">
						<Image
							src="/Frame 662.svg"
							width={601.42}
							height={496}
							alt="Vision Illustration"
							className="max-w-full h-auto"
						/>
					</div>

					{/* Content Section */}
					<div className="space-y-8 flex flex-col mt-6 lg:mt-0">
						<Percent
							title="Organizations/Institution"
							market="400k"
							imageSrc={"/1 7225.svg"}
							imageAlt={""}
							width={16}
							height={32}
							content={
								"This is the estimated total number of organizations and institutions in Nigeria."
							}
						/>
						<Percent
							title="Central Organizations"
							market="99.7%"
							imageSrc={"/2 57.svg"}
							imageAlt={""}
							width={20}
							height={32}
							content={
								"This is the percentage number of organizations running on centralized servers in Nigeria."
							}
						/>
						<Percent
							title="Decentralized Organizations"
							market="0.3%"
							imageSrc={"/3 84.svg"}
							imageAlt={""}
							width={20}
							height={32}
							content={
								"Number of organizations having their records on a blockchain in Nigeria."
							}
						/>
					</div>
				</div>
			</div>

			<div>
				<div className="relative mb-48">
					{/* Pricing Table */}
					<div className="relative z-10">
						<PricingTable />
					</div>

					{/* Background Image */}
					<div className="absolute -bottom-20 right-0 z-0 hidden md:block">
						<Image
							src="/Ellipse 11.svg"
							width={565}
							height={565}
							alt="Picture"
							className="object-cover"
						/>
					</div>
				</div>

				<div className="bg-liblue p-10 pb-32 pt-28 flex flex-col items-center justify-center w-full relative">
					<FAQ />
					<img
						className="absolute -top-14 left-0"
						src="/faq-illustrations.png"
						alt="faq-illustration"
					/>
				</div>

				<div className="p-6 lg:p-20 flex flex-col lg:flex-row gap-20 items-center bg-[#FAFAFA]">
					{/* Text Section */}
					<div className="text-center lg:text-left basis-[40%]">
						<h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-5">
							Ready to get started?
						</h2>
						<span className="text-gray-700 dark:text-gray-300">
							Can’t find the answer you’re looking for? Reach out to us using
							the contact information.
						</span>
					</div>

					<ContactForm />
				</div>
			</div>

			<div>
				<Footer />
			</div>
		</>
	);
}
