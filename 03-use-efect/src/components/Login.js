import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Validación de usuario y contraseña
    if (username === 'admin' && password === 'password') {
      // Inicio de sesión exitoso
      console.log('Inicio de sesión exitoso');
      setError('');
    } else {
      // Inicio de sesión fallido
      setError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div style={{ color: 'red' }}>{error}</div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};
