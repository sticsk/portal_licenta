/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const User2 = () => {
	return (
		<div
			style={{ backdropFilter: "blur(8px)", backgroundImage: `url('/bg.jpg')` }}
			className="min-h-screen h-screen w-screen bg-cover bg-center bg-no-repeat bg-gray-100 flex flex-col justify-center"
		>
			{" "}
			<div className="flex  bg-[#d4d4d447] ">
				{" "}
				<h1 className="mx-auto text-center text-3xl font-medium  ">
					Bun venit, <span className="text-red-700">USER 2 !</span>
				</h1>
			</div>
			<a
				href="/"
				className=" text-3xl text-red-600 ml-auto font-medium m-5 bg-[#0105029a] rounded-lg px-2 py-1"
			>
				Logout
			</a>
			<div
				style={{ backdropFilter: "blur(3px)" }}
				className="w-full h-full flex  justify-center items-center "
			>
				<div class="grid grid-cols-1 opacity-75 -mt-40 grid-rows-2 xl:w-[20%] md:w-[30%] w-[40%] gap-4 h-[50%]">
					<a target="_blank" href="http://nextcloud.home.lan">
						<div class=" rounded-xl border-4 border-green-800 hover:bg-[#a3a3a347] bg-[#d4d4d447] ">
							<p className="text-center font-medium text-2xl bg-gray-300 rounded-t-md text-red-600">
								Nextcloud
							</p>

							<img class=" w-40 mt-2 m-auto" alt="..." src="/3.svg"></img>
						</div>{" "}
					</a>

					
				</div>
			</div>
		</div>
	);
};

export default User2;
