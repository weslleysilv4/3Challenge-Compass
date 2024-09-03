import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface IFormInput {
  email: string;
}

const EmailSubscription: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Subscribed with email:", data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <Input
          type="text"
          isClearable
          placeholder="Enter Email..."
          size="lg"
          variant="flat"
          className={`outline-none text-tertiary mb-2 ${
            errors.email ? "border-red-500" : ""
          }`}
          startContent={<FontAwesomeIcon icon={faPaperPlane} />}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <small className="text-red-500">{errors.email.message}</small>
        )}
        <Button type="submit" color="secondary" radius="sm" className="w-1/2">
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default EmailSubscription;
