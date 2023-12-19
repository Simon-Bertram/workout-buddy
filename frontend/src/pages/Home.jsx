import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:3000/api/workouts', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      })
      const data = await response.json()

      if (response.ok) {
       dispatch({ type: 'SET_WORKOUTS', payload: data }) 
      } else {
        console.log('error')
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

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