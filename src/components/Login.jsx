import {useContext} from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/Authindex";

const Login = () => {
    const [error, setError] = useState("");
                
    const { login } = useContext(AuthContext) || {}
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.form?.pathname || "/"
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value;
        // console.log(email, password);
        login(email, password).then((userCredential) => {
            // Signed In
            const user = userCredential.user;
            alert("Login successful!");
            navigate(from, {replace: true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
          });
      
        
    } 
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Log in form</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label htmlform="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlform="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                        {error ? <p className="text-red-600 text-base">Email or Password is not correct</p> : ""}
                        <p>If you have't an acount. please <Link to="/sign-up" className="text-blue-600 underline">Sign up</Link>Here</p>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Log in</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default Login