// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError('Please enter a valid 10-digit phone number starting with 6-9');
//       return;
//     }

//     if (password.length < 6 || password.length > 12) {
//       setError('Password must be between 6 and 12 characters');
//       return;
//     }

//     setError('');
//     console.log('Login successful with:', phone, password);
    
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           value={phone}
//           onChange={e => setPhone(e.target.value)}
//           placeholder="Enter your Phone Number"
//           maxLength={10}
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="Enter your Password"
//           minLength={6}
//           maxLength={12}
//           required
//         />
//         <button type="submit">Login</button>
//         <p className="switch-auth">
//           Don’t have an account? <Link to="/signup">Signup</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleGetOtp = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Please enter a valid 10-digit phone number starting with 6-9');
      return;
    }

    setError('');
    setShowOtpInput(true);
    console.log('OTP sent to:', phone);
    // Simulate sending OTP (you can integrate an SMS API here)
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setError('');
    setSuccessMsg('Login successful!');
    console.log('OTP verified for:', phone);
    // You can redirect or set user state here
  };

  return (
    <div className="login-container">
      <h2>Login with OTP</h2>
      {error && <p className="error">{error}</p>}
      {successMsg && <p className="success">{successMsg}</p>}
      <form onSubmit={showOtpInput ? handleVerifyOtp : handleGetOtp}>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your Phone Number"
          maxLength={10}
          required
        />
        {showOtpInput && (
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
            required
          />
        )}
        <button type="submit">
          {showOtpInput ? 'Verify OTP' : 'Get OTP'}
        </button>
          <p>Don't have an account? <Link to='/signup' >Signup</Link></p>


      </form>
    </div>
  );
};

export default Login;
