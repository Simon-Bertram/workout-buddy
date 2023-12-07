import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, weight, reps }

    const response = await fetch('http://localhost:3000/api/workouts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workout)
    })
    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
      setEmptyFields(data.emptyFields)
    } 
    if (response.ok) {
      setTitle('')
      setWeight('')
      setReps('')
      setError(null)
      setEmptyFields([])
      console.log('New workout added', data)
      dispatch({ type: 'CREATE_WORKOUT', payload: data })
    } 
  }

  return ( 
    <div className="workout-form">
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold mb-3">Add a New Workout</h3>
        
        <div className="space-y-2 mb-3">
          <label className="pb-2">Exercise Title:</label>
          <input 
          className={`px-2 ${emptyFields.includes('title') ? 'border border-red-500' : ''}`}
            type="text"
            onChange={e => setTitle(e.target.value)} 
            value={title}
          />
        </div>
        
        <div className="space-y-2 mb-3">
          <label className="pt-2">Weight (in kg):</label>
          <input 
            className={`px-2 ${emptyFields.includes('weight') ? 'border border-red-500' : ''}`}
            type="text"
            onChange={e => setWeight(e.target.value)} 
            value={weight}
          />
        </div>
        
        <div className="space-y-2 mb-5">
          <label className="mb-2">Reps:</label>
          <input 
            className={`px-2 ${emptyFields.includes('reps') ? 'border border-red-500' : ''}`}
            type="text"
            onChange={e => setReps(e.target.value)} 
            value={reps}
          />
        </div>

        <button className="btn bg-primary text-white">
          Add Workout
        </button>
        {error && <div className="mt-5 p-2 border border-error text-error bg-red-50 rounded">{error}</div>}
      </form>
    </div>
   );
}
 
export default WorkoutForm;