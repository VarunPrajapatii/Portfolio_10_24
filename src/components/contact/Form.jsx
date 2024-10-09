"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 }, //initially opacity zero and when it shows it will have 1
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, //means the children inside the div it will have stagger animation and after 0.3 sec each will appear
      delayChildren:0.2
    },
  },
};

const item= {
  hidden: {scale: 0},
  show: {scale: 1}
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  
  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...")
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,  //you cannot send more than 1 email per 5 seconds
          }
        }
      )
      .then(
        () => {
          toast.success("I have recieved you message, I will get back to you soon!", {
            id: toastId
          })
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("There was an error sending your message, please try again later!", {
            id: toastId
          })
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Varun Prajapati",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    }
    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container} //to use container inside a div we can use variants
        initial="hidden"
        animate="show"
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="name"
          {...register("name", { required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long."
            }  
          })}
        />
        {
          errors.name && <span className="inline-block self-start text-accent">{errors.name.message}</span>
        }
        <motion.input
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
        />
        {
          errors.email && <span className="inline-block self-start text-accent">{errors.email.message}</span>
        }
        <motion.textarea
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          placeholder="message"
          {...register("message", { required: "This field is required!", maxLength: {
            value: 500,
            message: "Message should be less than 500 characters"
          }, minLength: {
            value: 50,
            message: "Message should be more than 50 characters"
          } })}
        />
        {
          errors.message && <span className="inline-block self-start text-accent">{errors.message.message}</span>
        }
        <motion.input
          variants={item}
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accenent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
          value="Cast Your Message!"
        />
      </motion.form>
    </>
  );
}



/**
 * I have used the react-hook-form to make our contact form.
 * Then I used emailjs to manage the form data sends to my mail address
 * Then I made toast message that shows success or failure of the message sent. For that Sonner is used.
 */