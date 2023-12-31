import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:3000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    const userData = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(error)
      return
    } 
    
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(userData))
      
      // update auth context
      dispatch({type: 'LOGIN', payload: userData})

      setIsLoading(false)
      setError(null)
    }
  }

  return { login, error, isLoading }
}
 
export default useLogin;