import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
import Hat from "@/components/models/Hat";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />


      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-8xl text-accent ">Varun Prajapati</h1>
          <p className="font-light text-foreground text-2xl mt-8">Welcome to my page folk! Now, SCROLL DOWN...</p>
        </div>
      </div>
      
      <AboutDetails />
    </>
  );
}
