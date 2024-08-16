import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importar el archivo de estilos

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica de autenticación
    if (username && password) {
      // Redirigir al Dashboard
      navigate('/dashboard');
    } else {
      alert('Por favor, ingresa tu nombre de usuario y contraseña.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Iniciar sesión</h1>
        <p>Ingresa tus credenciales para acceder a tu cuenta.</p>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            placeholder="usuario@ejemplo.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
