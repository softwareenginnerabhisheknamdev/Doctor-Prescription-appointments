// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
// import { auth} from '../componenets/firebase';
//  import { toast } from "react-toastify";
// // import { Toast } from 'bootstrap';
// // import { setDoc,doc } from 'firebase/firestore';
// // import { Navigate } from 'react-router-dom';

// const Login = () => {
//   const navigate=useNavigate('')

//  const [state,setState]= useState('Sign Up ')

//  const [name,setName]=useState('')
//  const [email,setEmail]=useState('')
//  const [password,setPassword]=useState('')
//  const submitHandler = async (event)=>{
//   event.preventDefault();
//   try{
//      await createUserWithEmailAndPassword(auth,email,password)
//      const user=auth.currentUser
//      console.log(user)
//       toast.success("User signup Successfully", {
//         position: "top-center",
//       });
//        setName("");
//        setEmail("");
//        setPassword("");
//   }
//   catch(e){
//     console.log(e);
//     toast.success("successfull login", {
//       position: "bottom-center",

//     });

//   }
//  };

//   return (
//     <div>
//       <form onSubmit={submitHandler} className="min-h-[80vh] flex items-center">
//         <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
//           <p className="text-2xl font-semibold">
//             {state === "Sign Up" ? "Create Account" : "Login"}
//           </p>
//           <p>
//             Please {state === "Sign Up" ? "sign up" : "log in"} to book
//             appointment
//           </p>
//           {state === "Sign Up" && (
//             <div className="w-full">
//               <p>Full Name</p>
//               <input
//                 className="border border-zinc-300 rounded w-full p-2 mt-1 "
//                 type="text"
//                 // onChange={(e) => setName(e.target.name)}
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                 required
//               />
//             </div>
//           )}

//           <div className="w-full">
//             <p>Email</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="email"
//               // onChange={(e) => setEmail(e.target.name)}
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               required
//             />
//           </div>
//           <div className="w-full">
//             <p>Password</p>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="password"
//               // onChange={(e) => setPassword(e.target.name)}
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               required
//             />
//           </div>
//           <button className="bg-primary text-white w-full py-2 rounded-md text-base">

//             {state === "Sign Up" ? "Create Account" : "Login" }f
//           </button>
//           {/* <button className="bg-primary text-white w-full py-2 rounded-md text-base">
//             Login
//           </button> */}
//           {state === "Sign Up" ? (
//             <p>
//               Already have an account?
//               <span
//                 onClick={() => setState("Login")}
//                 // onClick={() => navigate("/UserData")}
//                 className="text-primary underline cursor-pointer"
//               >
//                 Login here
//               </span>
//             </p>
//           ) : (
//             <p>
//               Create an account ?
//               <span
//                 onClick={() => setState("Sign Up")}
//                 className="text-primary underline cursor-pointer"
//               >
//                 Click here
//               </span>
//             </p>
//           )}
//         </div>
//       </form>
//       {/* <h1 className=" flex flex-col gap-1 mt-1 items-center p-2 text-red-600 ">
//         For login Click This
//       </h1> */}
//       {/* <div onClick={()=> navigate('/userdata')} className=" flex flex-col gap-1 mt-1 items-center p-2 text-red-600 ">
//         <button className="bg-primary rounded-full px-5  py-2">Login</button>
//       </div> */}
//     </div>
//   );
// }

// export default Login
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../componenets/firebase";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("login successfull !!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.getItem("user", JSON.stringify("result"));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("wrong email or password");
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      {/* {loading && <Loader />} */}
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={login}
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
