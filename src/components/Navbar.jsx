import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/kodev.png";
import { BsCodeSlash, BsSearch } from "react-icons/bs";
import { RiCss3Line } from "react-icons/ri";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { SiTypescript, SiJavascript } from "react-icons/si"

export default function Navbar() {

	const [show, setShow] = useState(null);

	return (
		<div className="bg-gray-200 h-full w-full">
			{/* Code block starts */}
			<nav className="bg-white shadow xl:block hidden">
				<div className="mx-auto container px-6 py-2 xl:py-0">
					<div className="flex items-center justify-between">
						<div className="inset-y-0 left-0 flex items-center xl:hidden">
							<div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
								<div className="visible xl:hidden">
									<ul className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
										<li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
											<div className="flex items-center">
												<BsCodeSlash />
												<span className="ml-2 font-bold">HTML</span>
											</div>
										</li>
										<li className="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
											<div className="flex items-center">
												<RiCss3Line />
												<span className="ml-2 font-bold">CSS</span>
											</div>
										</li>
										<li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
											<SiTypescript />
											<span className="ml-2 font-bold">TypeScript</span>
										</li>
										<li className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
											<SiJavascript />
											<span className="ml-2 font-bold">JavaScript</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
							<div className="flex items-center py-4">
								<Image 
									src={Logo}
									width={180}
									height={60} 
									alt="logo" 
								/>
							</div>
						</div>
						<div className="flex">
							<div className="hidden xl:flex md:mr-6 xl:mr-16">
								<a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									<span className="mr-2 text-xl">
										<BsCodeSlash />
									</span>
									HTML
								</a>
								<a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									<span className="mr-2">
										<RiCss3Line />
									</span>
									CSS
								</a>
								<a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									<span className="mr-2 text-xl">
										<SiTypescript />
									</span>
									TypeScript
								</a>
								<a href="javascript: void(0)" className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									<span className="mr-2">
										<SiJavascript />
									</span>
									JavaScript
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<nav>
				<div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
					<div className="w-24">
						<Image src={Logo} alt="logo" />
					</div>
					<div className="flex items-center">
						<div className="relative mr-6 ">
							<button className="focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs">Boton</button>
						</div>
						<div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
							{show ? (
								""
							) : (
								<RxHamburgerMenu className="text-2xl" />
							)}
						</div>
					</div>
				</div>
				{/* Mobile responsive sidebar */}
				<div className={show ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 " : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"}>
					<div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
					<div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
						<div className="px-6 h-full">
							<div className="flex flex-col justify-between h-full w-full">
								<div>
									<div className="mt-6 flex w-full items-center justify-between">
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center">
												<Image src={Logo} alt="logo" />
											</div>
											<div id="cross" className="text-gray-800" onClick={() => setShow(!show)}>
												<RxCross2 />
											</div>
										</div>
									</div>
									<ul className="f-m-m">
										<a className="cursor-pointer">
											<li className="text-gray-800 pt-10">
												<div className="flex items-center">
													<div className="w-6 h-6 md:w-8 md:h-8">
														<BsCodeSlash />
													</div>
													<p className="xl:text-base text-base ml-3">HTML</p>
												</div>
											</li>
										</a>
										<a className="cursor-pointer">
											<li className="text-gray-800 pt-8">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
															<RiCss3Line />
														</div>
														<p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">CSS</p>
													</div>
												</div>
											</li>
										</a>
										<a className="cursor-pointer">
											<li className="text-gray-800 pt-8">
												<div className="flex items-center">
													<div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
														<SiTypescript />
													</div>
													<p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">TypeScript</p>
												</div>
											</li>
										</a>
										<li className="text-gray-800 pt-8 cursor-pointer">
											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
														<SiJavascript />
													</div>
													<p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">JavaScript</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="w-full pt-4">
									<div className="flex justify-center mb-4 w-full">
										<div className="relative w-full">
											<div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
												<BsSearch />
											</div>
											<input className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2" type="text" placeholder="Buscar" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			{/* Code block ends */}
		</div>
	);
}
