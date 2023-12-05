import { useEffect, useState } from "react";

// Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/api/workouts')
      const data = await response.json()

      if (response.ok) {
        setWorkouts(data)
      } else {
        console.log('error')
      }
    }

    fetchWorkouts()
  }, [])

  return ( 
    <div className="home grid grid-cols-4 gap-24">
      <div className="workouts col-span-3">
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
   );
}
 
export default Home;