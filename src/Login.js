import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Add your authentication logic here
  };

  return (
    <div style={{ backgroundImage: 'url(https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_653/https://uncountablestars.com/wp-content/uploads/2023/04/49250778982_104a167685_b.jpg)', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '350px', padding: '40px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', background: 'rgba(255, 255, 255, 0.8)', margin: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#333', marginBottom: '5px', display: 'block' }}>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#333', marginBottom: '5px', display: 'block' }}>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
            <label style={{ marginLeft: '5px', color: '#333' }}>Remember me</label>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#C52233', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;