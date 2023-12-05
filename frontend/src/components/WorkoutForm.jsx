import { set } from "mongoose";
import { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [weight, setWeight] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

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
    } 
    if (response.ok) {
      setTitle('')
      setWeight('')
      setReps('')
      console.log('New workout added', data)
    } 
  }

  return ( 
    <div className="workout-form">
      <form onSubmit={handleSubmit} className="">
        <h3 className="text-xl font-bold mb-3">Add a New Workout</h3>
        <label className="mb-3">Exercise Title:</label>
        <input 
          className="mb-2 px-2"
          type="text"
          onChange={e => setTitle(e.target.value)} 
          value={title}
        />
        <label className="mb-2">Weight (in kg):</label>
        <input 
          className="mb-2 px-2"
          type="text"
          onChange={e => setWeight(e.target.value)} 
          value={weight}
        />
        <label className="mb-2">Reps:</label>
        <input 
          className="mb-2 px-2"
          type="text"
          onChange={e => setReps(e.target.value)} 
          value={reps}
        />
        <button className="btn mb-3 bg-primary text-white">Add Workout</button>
        {error && <div className="text-error">{error}</div>}
      </form>
    </div>
   );
}
 
export default WorkoutForm;