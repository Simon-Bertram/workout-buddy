import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date fns
import { formatDistanceToNow, parseISO, parse } from 'date-fns'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleDelete = async () => {
    const response = await fetch('http://localhost:3000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const data = await response.json()

    if (response.ok) {
      console.log('Workout deleted', data)
      dispatch({ type: 'DELETE_WORKOUT', payload: data })
      dispatch({ type: 'WORKOUT_DELETED' })
    }
  }

  const parseDate = (date) => {
    return formatDistanceToNow(parseISO(date), { addSuffix: true })
  }


  return ( 
    <div className="workout-details relative m-5 mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h4 className="text-2xl mb-2 text-primary">{workout.title}</h4>
      <p className="text-gray-600"><strong>Load (kg): {workout.weight}</strong></p>
      <p className="text-gray-600"><strong>Reps: {workout.reps}</strong></p>
      <p className="text-gray-600">{parseDate(workout.createdAt)}</p>
      {/* <p className="text-gray-600">{parse(workout.createdAt)}</p> */}
      <button 
        onClick={handleDelete}
        className="btn absolute top-5 right-5 flex items-center py-3 cursor-pointer text-white bg-red-400"
      >
        <span class="material-symbols-outlined">
          delete
        </span>
      </button>
      
    </div>
   );
}
 
export default WorkoutDetails;