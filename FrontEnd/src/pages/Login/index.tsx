import Logo from "@Components/Logo";
import Titles from "@Components/Titles";
import {
  faFacebookF,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import {
  loginWithEmailAndPassword,
  signInWithFacebook,
  signInWithGithub,
  signInWithGoogle,
} from "@Services/firebaseLogins";
import { Link, useNavigate } from "react-router-dom";
import { useLoginForm } from "@Hooks/useForm";
import { UserLogin } from "@Schemas/userLogin";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, errors } = useLoginForm();

  const onSubmit = async (data: UserLogin) => {
    try {
      await loginWithEmailAndPassword(data.email, data.password);
      toast.success("Logged in successfully!", {
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
    document.title = "Login - 3 Challenge Compass";
  }, []);
  return (
    <section>
      <ToastContainer />
      <div className="container mx-auto">
        <section className="flex justify-center items-center w-full h-screen gap-5">
          <main className="w-1/2">
            <figure className="w-full">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2FJourney-amico.svg?alt=media&token=8a7223a0-f681-4121-b8db-30b0e214f43d"
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
                <Link to="/signup" className="text-primary">
                  Doesn't have an account?{" "}
                  <span className="hover:text-secondary">Register</span>
                </Link>
              </div>
              <Button
                color="secondary"
                className="w-full mt-5"
                onClick={handleSubmit(onSubmit)}
              >
                Login
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

export default Login;
