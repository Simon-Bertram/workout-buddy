import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('email: ', email, 'password: ', password)
  }

  return ( 
    <form onSubmit={handleSubmit} className="w-96 m-6 p-5 flex flex-col mx-auto bg-white">
      <h2 className="mb-5 text-center font-bold">Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        className="border border-gray-400 rounded-lg p-2 mb-4"
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
      className="border border-gray-400 rounded-lg p-2 mb-4"
        type="password"
        id="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn bg-primary text-white mt-4" type="submit">Login</button>
    </form>
   );
}
 
export default Login;