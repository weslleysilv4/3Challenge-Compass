import React from "react";

type LogoProps = {
  variant?: "primary" | "secondary";
};

function Logo({ variant = "primary" }: LogoProps) {
  return (
    <div>
      {variant === "primary" ? (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Flogo-black.svg?alt=media&token=1428e3cb-c5a7-4822-88dd-fdb1490a2358"
          alt="Logo"
          className="h-[31px]"
        />
      ) : (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Flogo-white.svg?alt=media&token=8b2a5d9b-4b8e-4d8e-9b1b-4f4e7c7e3b0d"
          alt="Logo"
          className="h-[31px]"
        />
      )}
    </div>
  );
}

export default Logo;
