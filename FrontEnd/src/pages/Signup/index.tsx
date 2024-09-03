import Logo from "@Components/Logo";
import Titles from "@Components/Titles";
import {
  faGoogle,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginForm } from "@Hooks/useForm";
import { Input, Button } from "@nextui-org/react";
import { UserLogin } from "@Schemas/userLogin";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
} from "@Services/firebaseLogins";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useLoginForm();

  const onSubmit = async (data: UserLogin) => {
    try {
      await registerWithEmailAndPassword(data.email, data.password);
      toast.success("Account created!", {
        position: "top-center",
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(`An ${error} occurred. Please try again.`, {
        position: "bottom-center",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google successfully!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(`An ${error} occurred. Please try again.`, {
        position: "bottom-center",
      });
    }
  };
  const handleFacebookLogin = async () => {
    try {
      await signInWithFacebook();
      toast.success("Signed in with Facebook successfully!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(`An ${error} occurred. Please try again.`, {
        position: "bottom-center",
      });
    }
  };
  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      toast.success("Signed in with GitHub successfully!", {
        position: "top-center",
        autoClose: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      toast.error(`An ${error} occurred. Please try again.`, {
        position: "bottom-center",
      });
    }
  };
  useEffect(() => {
    document.title = "Signup - 3 Challenge Compass";
  }, []);
  return (
    <section>
      <ToastContainer />
      <div className="container mx-auto">
        <section className="flex justify-center items-center w-full h-screen gap-5">
          <main className="w-1/2">
            <figure className="w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2FTrip-pana.svg?alt=media&token=da535afa-f130-4c58-bad8-92f477ad2d83"
                alt="Image of a Traveler"
                className="w-full h-[500px]"
              />
            </figure>
          </main>
          <aside className="flex flex-col w-1/3 h-[400px] justify-between gap-5">
            <Link to="/">
              <Logo />
            </Link>
            <h6>
              Connect to the future with Trisog: Where your ideas come to life.
            </h6>
            <form
              action="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email">E-mail</label>
              <Input
                placeholder="Enter your e-mail"
                type="email"
                {...register("email")}
              />
              {errors.email && <small>{errors.email.message}</small>}
              <label htmlFor="email">Password</label>
              <Input
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              {errors.password && <small>{errors.password.message}</small>}
              <div className="text-right mt-5">
                <Link to="/login" className="text-primary">
                  Already have an account?{" "}
                  <span className="hover:text-secondary hover:font-bold">
                    Login
                  </span>
                </Link>
              </div>
              <Button
                color="secondary"
                className="w-full mt-5"
                onClick={handleSubmit(onSubmit)}
              >
                Create Account
              </Button>
            </form>
            <Titles position="center" title="or continue with" />
            <div className="flex flex-row w-full gap-2">
              <Button
                color="secondary"
                className="w-1/3"
                onClick={handleGoogleLogin}
              >
                <FontAwesomeIcon icon={faGoogle} />
                Google
              </Button>
              <Button
                color="secondary"
                className="w-1/3"
                onClick={handleFacebookLogin}
              >
                <FontAwesomeIcon icon={faFacebookF} />
                Facebook
              </Button>
              <Button
                color="secondary"
                className="w-1/3"
                onClick={handleGithubLogin}
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </Button>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}

export default SignUp;
