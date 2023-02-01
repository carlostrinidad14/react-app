import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const RegisterScreen = () => {
    const { user, loading, register } = useLoginContext()
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.password !== values.password2  ){
            MySwal.fire({
                title: <strong>Error</strong>,
                html: <i>Las contraseñas no coinciden</i>,
                icon: 'error'
              })
        }else{register(values)}

        
    }

    return (
        <div className='login-screen'>
            <div className='login'> 
                <h2>Register</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                <input 
                        className='form-control my-2' 
                        type='text'
                        value={values.name}
                        onChange={handleInputChange}
                        name="name"
                        placeholder='Nombre'
                    />
                   
                                  
                                  <input 
                        className='form-control my-2' 
                        type='email'
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                        placeholder='Email'
                    />
                    <input 
                        className='form-control my-2' 
                        type='password'
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                        placeholder='Contraseña'
                    />
                    <input 
                        className='form-control my-2' 
                        type='password'
                        value={values.password2}
                        onChange={handleInputChange}
                        name="password2"
                        placeholder='Contraseña'
                    />

                    
                    <button className='btn btn-primary' disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>
                    {user.error && <p className='error'>{user.error}</p>}
                </form>
                <Link to="/login">Ya estoy registrado</Link>
            </div>
        </div>
    )
}

export default RegisterScreen