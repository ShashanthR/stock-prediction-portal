import {useContext, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import axiosInstance from '../axiosInstance'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) =>{
    e.preventDefault();
    setLoading(true);

    const userData = {username, password}

    try{
      const response = await axiosInstance.post('/token/', userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setIsLoggedIn(true)
      navigate('/dashboard')
    }catch{
      console.error('Invalid credentials')
      setError('Invalid credentials')
    }finally{
      setLoading(false)
    }
  }
  

  return (
    <>
    <div className='container mt-0'>
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-3 rounded">
                <h3 className='text-light text-center mb-4'>Login to our Portal</h3>
                <form onSubmit={handleLogin}>
                  <div className='mb-3'>
                    <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                    
                    <div className='mb-3'>
                    <input type="password" className='form-control ' placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                    {error && <div className='text-danger'>{error}</div> }

                    <div className='d-flex justify-content-center'>
                      <button type='submit' className='btn btn-info' disabled={loading}>
                        {loading ? <><FontAwesomeIcon icon={faSpinner} spin /> Logging in...</> : 'Login'}
                      </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login