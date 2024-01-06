import './login.css';

const Login = () => {
  const onRegisterClick = () => {
    const container = document.getElementById('container2');
    container.classList.add('active');


    
  };

  const onLoginClick = () => {
    const container = document.getElementById('container2');
    container.classList.remove('active');


  };

  return (
    <>
      <div className="login-wrapper">
        <div className="container2" id="container2">
          <div className="form-container sign-up">
            <form action="" >
              <h2>Create Account</h2>
              <div className="social-icon">
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  facebook
                </a>
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  google
                </a>
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  instagram
                </a>
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  twitter
                </a>
              </div>
              <span> or use your email for registeration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>

          <div className="form-container sign-in">
            <form action="">
              <h2>Sign In</h2>
              <div className="social-icon">
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  facebook
                </a>
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  google
                </a>
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  instagram
                </a>
                <a
                  href="https://github.com/AmmelyStar"
                  className="icons-class"
                >
                  twitter
                </a>
              </div>
              <span> or use your email password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="https://github.com/AmmelyStar">Forgot Your Password</a>
              <button>Sign In</button>
            </form>
          </div>

          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h2>Welcome Back!</h2>
                <p>Enter your personal detail to use this site</p>
                <button className="hidden" id="login" onClick={onLoginClick}>
                  Sign In
                </button>
              </div>

              <div className="toggle-panel toggle-right">
                <h2>Hello Friend!</h2>
                <p>Register with your personal detail to use this site</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={onRegisterClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
