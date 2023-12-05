import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between py-8">
        <Link to="/" className="text-gray-700 text-4xl font-bold">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
   );
}
 
export default Navbar;