//To make the navigations component that shows the buttons
"use client";
import { BtnList } from "@/app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 }, //initially opacity zero and when it shows it will have 1
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, //means the children inside the div it will have stagger animation and after 0.3 sec each will appear
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;

  return (
    <div className=" z-20 w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container} //to use container inside a div we can use variants
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-centre relative hover:pause animate-spin-slow group"
            >
              {BtnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180;
                const radius = isLarge
                  ? "calc(20vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)"; //This will be the radius of the circle, we're going to use this directly inside the style of button...

                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container} //to use container inside a div we can use variants
                initial="hidden"
                animate="show" 
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative  group xs:hidden"
              >
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div
                variants={container} //to use container inside a div we can use variants
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group xs:hidden"
              >
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;

/**
 * The logic behind the buttons positioning is:
 * we have centre of the screen where the model is there and then we have 8 buttons which we have to spread around the centre in exual angle.
 * Total angle is 360 and that equal angle will be 360/8 which is 45 degree.
 * Now we have to convert this angle in the radient format so for that we can use the formaula to conver:
 * const angleRad = (index*angleIncrement*Math.PI)/180
 * This will give us the angle value in radient format, since we will need different value for each of these buttons so we multiply index
 *
 * So first we have divided the circle by the total length of button list and then we get how much angle to increment per button, then we converted the angle in radian
 * and multiply the index value so that we get different value for different buttons.
 * Then we are using calc function to calculate the radius, we are using these calc functions because we are going to use these values inside the styles, in the css.
 * Then we calculate the radius and we are using the vm and rem because we want to dynamically adjust the radius based on the screen size. Then we calculate the x and y
 * coordinates by multiplying the radius and the sin/cos. Then we use the transform translate and we're setting up the position for these buttons.
 *
 *
 *
 * For motion and animation I have used framer motion
 */
