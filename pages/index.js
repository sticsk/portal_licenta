import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const router = useRouter();
	const [bool, setBoolean] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault(); // prevent form from submitting normally

		// retrieve input values
		const enteredUsername = event.target.elements.nume.value;
		const enteredPassword = event.target.elements.password.value;

		// update state with input values
		setUsername(enteredUsername);
		setPassword(enteredPassword);
		console.log();
		if (
			event.target.elements.nume.value == "user1" &&
			event.target.elements.password.value == "admin"
		) {
			router.push("/user"); // replace "/dashboard" with the path of the page you want to redirect to
		}
		if (
			event.target.elements.nume.value == "user2" &&
			event.target.elements.password.value == "admin"
		) {
			router.push("/user2"); // replace "/dashboard" with the path of the page you want to redirect to
		}
		if (
			event.target.elements.nume.value == "admin" &&
			event.target.elements.password.value == "admin"
		) {
			router.push("/admin"); // replace "/dashboard" with the path of the page you want to redirect to
		} else {
			setTimeout(function () {
				setBoolean(true);
			}, 500);
			setTimeout(function () {
				setBoolean(false);
			}, 2000);
		}
		// do something with the data (e.g. send it to a server)
		console.log("Username:", enteredUsername);
		console.log("Password:", enteredPassword);
	};
	return (
		<div
			style={{ backdropFilter: "blur(8px)", backgroundImage: `url('/bg.jpg')` }}
			className="min-h-screen h-screen w-screen bg-cover bg-center bg-no-repeat bg-gray-100 flex flex-col justify-center"
		>
			<div
				style={{ backdropFilter: "blur(3px)" }}
				className="w-full h-full flex  justify-center items-center "
			>
				{" "}
				<div className="mt-8 sm:mx-auto   sm:w-full sm:max-w-md">
					<div className="bg-[#75a976] py-8 shadow rounded-lg px-10">
						<div>
							<form className="space-y-6" onSubmit={handleFormSubmit}>
								<div>
									<label htmlFor="nume" className="block text-sm font-medium text-gray-700">
										Nume utilizator
									</label>
									<div className="mt-1">
										<input
											id="nume"
											name="nume"
											type="name"
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="password" className="block text-sm font-medium text-gray-700">
										Parola
									</label>
									<div className="mt-1">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>
								{bool && (
									<div className="text-red-700 text-md font-bold">Nume sau parola incorecta !</div>
								)}
								<div>
									<button
										type="submit"
										className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#424756] hover:bg-[#4c515f] "
									>
										Login{" "}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
