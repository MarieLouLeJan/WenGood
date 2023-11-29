import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import team from '../images/wenGood/team_landing.png'

function SignIn() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = async (e) => {

    e.preventDefault()

    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user._tokenResponse.expiresIn)
      dispatch(
        SET_USER({
          isLoggedIn: true,
        })
      )
      navigate('/home')

    } catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    };

  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-bg-200">

      <main className="grow">


        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-20 md:pb-20">

              <div className="max-w-6xl mx-auto text-center pb-12 md:pb-20">
                <img src={team} className='hidden md:flex w-8/12 md:w-7/12 lg:w-6/12 mx-auto pb-12' alt="wenGood" data-aos="fade-up" data-aos-delay="500"/>
                <h1 className="h2">Bienvenue sur Wen Good Project</h1>
              </div>

              <div className="max-w-sm mx-auto">

                <form onSubmit={(e) =>handleAuth(e)}>

                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3 mb-4 md:mb-0">
                    <label className="block text-base font-medium mb-1" htmlFor="first-name">Email</label>
                    <input 
                        type="text" 
                        name='user_name'
                        className="form-input w-full focus:border-blue-100" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                  </div>
                </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Mot de passe</label>
                      <input 
                        id="password" 
                        type="password" 
                        className="form-input w-full focus:border-blue-100" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button type='submit' className="btn text-lg text-bg-200 bg-blue-100 hover:bg-bg-200 hover:text-blue-100 hover:border-2 hover:border-blue-100 my-4 rounded-lg transition duration-700 w-full">Continuer</button>
                  </div>
                  </div>
                </form>

              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;