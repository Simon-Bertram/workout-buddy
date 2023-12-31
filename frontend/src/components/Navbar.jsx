import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return ( 
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-8">
        <Link to="/" className="text-gray-700 text-4xl font-bold">
          <h1>Workout Buddy</h1>
        </Link>
        <nav className="flex items-center">
          {user && (
            <div className="mr-3">
              <span className="mr-3">{user.email}</span>
              <button 
                onClick={handleLogout} 
                className="text-primary border border-primary px-3 py-2 rounded-lg cursor-pointer"
              >Logout</button>
            </div>
          )}
          {!user && (
            <div className="container">
              <Link to="/login" className="m-3">Login</Link>
              <Link to="/register" className="m-3">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
   );
}
 
export default Navbar;