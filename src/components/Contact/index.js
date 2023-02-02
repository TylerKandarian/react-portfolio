import React from "react";
import { MDBContainer } from "mdbreact";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const initialValues = {
    senderName: "",
    email: "",
    message: "",
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <MDBContainer fluid className="vh-100 bkgrd">
      <h2>Please Contact Me!</h2>
      <div className="d-flex w-100 justify-content-center">
        <form className="w-25 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <p className="my-0">Name</p>
          <input
            placeholder="Full Name"
            defaultValue={initialValues.senderName}
            {...register("senderName", {
              required: true,
              minLength: 1,
              maxLength: 20,
            })}
            className="w-100"
          />
          {errors.senderName && (
            <p className="mw-100">You must enter a name!</p>
          )}
          <p className="my-0">email</p>
          <input
            placeholder="Your Email"
            defaultValue={initialValues.email}
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="w-100"
          />
          {errors.email && <p className="mw-100">A valid email is required</p>}
          <p className="my-0">Message</p>
          <input
            placeholder="Your Message Here"
            defaultValue={initialValues.message}
            {...register("message", {
              required: true,
            })}
            className="w-100"
          />
          {errors.message && <p className="mw-100">You must enter a message</p>}
          <input type="submit" className="my-3" />
        </form>
      </div>
    </MDBContainer>
  );
};

export default Contact;
