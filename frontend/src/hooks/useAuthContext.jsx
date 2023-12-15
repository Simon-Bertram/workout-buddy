import { AuthContext } from "../context/WorkoutContext"
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within a WorkoutContextProvider')
  }

  return context
}