// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignup = (e) => {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       setError('Enter a valid 10-digit phone number starting with 6-9');
//       return;
//     }

//     if (password.length < 6 || password.length > 12) {
//       setError('Password must be between 6 and 12 characters');
//       return;
//     }

//     setError('');
//     console.log('User signed up with:', { name, phone, email, password });

   
//   };

//   return (
//     <div className='signup-container'>
//       <h2>Signup</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />
//         <input
//           type="text"
//           value={phone}
//           onChange={e => setPhone(e.target.value)}
//           placeholder="Enter your phone number"
//           required
//         />
//         <input
//           type="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           placeholder="Enter your password"
//           required
//           minLength={6}
//           maxLength={12}
//         />

//        <button type="submit">Signup</button>

//          <p className="switch-auth">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [resendTimer, setResendTimer] = useState(0);

  const handleGetOtp = (e) => {
    e.preventDefault();
    setSuccessMsg('');

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Enter a valid 10-digit phone number starting with 6-9');
      return;
    }

    setError('');
    setShowOtpInput(true);
    console.log('OTP sent to:', phone);

    // Start timer for resend cooldown
    setResendTimer(30);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setError('');
    setSuccessMsg('Signup successful!');
    console.log('User signed up with:', { name, phone, email });
  };

  const handleResendOtp = () => {
    if (resendTimer === 0) {
      console.log('Resending OTP to:', phone);
      setResendTimer(30); // reset timer
      // Trigger actual resend OTP API here
    }
  };

  // Countdown for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  return (
    <div className='signup-container'>
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      {successMsg && <p className="success">{successMsg}</p>}
      <form onSubmit={showOtpInput ? handleVerifyOtp : handleGetOtp}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          maxLength={10}
          required
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email (optional)"
        />
        {showOtpInput && (
          <>
            <input
              type="text"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              placeholder="Enter OTP"
              maxLength={6}
              required
            />
            <div className="resend-container">
              {resendTimer > 0 ? (
                <p className="resend-timer">Resend OTP in {resendTimer}s</p>
              ) : (
                <button type="button" className="resend-btn" onClick={handleResendOtp}>
                  Resend OTP
                </button>
              )}
            </div>
          </>
        )}
        <button type="submit">
          {showOtpInput ? 'Verify OTP' : 'Get OTP'}
        </button>
        <p className="switch-auth">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

