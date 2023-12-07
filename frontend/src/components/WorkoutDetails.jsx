import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

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
    }
  }

  return ( 
    <div className="workout-details relative m-5 mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h4 className="text-2xl mb-2 text-primary">{workout.title}</h4>
      <p className="text-gray-600"><strong>Load (kg): {workout.weight}</strong></p>
      <p className="text-gray-600"><strong>Reps: {workout.reps}</strong></p>
      <p className="text-gray-600">{workout.createdAt}</p>
      <button 
        onClick={handleDelete}
        className="btn absolute top-5 right-5 cursor-pointer text-white bg-red-400"
      >
        Delete
      </button>
    </div>
   );
}
 
export default WorkoutDetails;