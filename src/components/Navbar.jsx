import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/kodev.png";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function Navbar() {

	const [show, setShow] = useState(null);

	return (
		<div className="bg-gray-200 h-full w-full">
			{/* Code block starts */}
			<nav className="bg-white shadow xl:block hidden">
				<div className="mx-auto container px-6 py-2 xl:py-0">
					<div className="flex items-center justify-between">
						<div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
							<div className="flex items-center py-4">
								<Link href="/">
									<Image 
										src={Logo}
										width={175}
										height={60} 
										alt="logo"
										loading="lazy" 
									/>
								</Link>
							</div>
						</div>
						<div className="flex">
							<div className="hidden xl:flex md:mr-6 xl:mr-16">
								<a href="#" className="flex px-5 items-center py-6 text-sm 2xl:text-lg leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									HTML
								</a>
								<a href="#" className="flex px-5 items-center py-6 text-sm 2xl:text-lg leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									CSS
								</a>
								<a href="#" className="flex px-5 items-center py-6 text-sm 2xl:text-lg leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									TypeScript
								</a>
								<a href="#" className="flex px-5 items-center py-6 text-sm 2xl:text-lg leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out">
									JavaScript
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<nav>
				<div className="py-4 px-6 mt-3 w-full flex xl:hidden justify-between items-center bg-white absolute top-0 z-40">
					<div className="w-24">
						<Image src={Logo} alt="logo" />
					</div>
					<div className="flex items-center">
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
										<div className="flex items-center justify-end w-full">
											<div id="cross" className="text-gray-800 text-2xl" onClick={() => setShow(!show)}>
												<RxCross2 />
											</div>
										</div>
									</div>
									<ul className="f-m-m">
										<a className="cursor-pointer">
											<li className="text-gray-800 pt-10">
												<div className="flex items-center">
													<p className="xl:text-base text-base ml-3">HTML</p>
												</div>
											</li>
										</a>
										<a className="cursor-pointer">
											<li className="text-gray-800 pt-8">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">CSS</p>
													</div>
												</div>
											</li>
										</a>
										<a className="cursor-pointer">
											<li className="text-gray-800 pt-8">
												<div className="flex items-center">
													<p className="text-gray-800 xl:text-base md:text-2xl text-base ml-3">TypeScript</p>
												</div>
											</li>
										</a>
										<li className="text-gray-800 pt-8 cursor-pointer">
											<div className="flex items-center justify-between">
												<div className="flex items-center">
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
