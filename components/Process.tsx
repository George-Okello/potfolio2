"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";


const  Process =() =>{
  return (
    <section className="w-full py-20">
      <h1 className="text-4xl text-center text-pretty font-extrabold relative text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-amber-100 animate-pulse">
        My <span className="text-amber-100">Approach</span>
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
        <Card
          title="Planning & Data Preparation"
          description="Define objectives, collect, preprocess data, and outline strategy"
          icon={<AceternityIcon order="Phase 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        <Card
          title="Model Development & Evaluation"
          description="Build, train, tune models, assess performance, and validate results."
          icon={<AceternityIcon order="Phase 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
          />
          {/* Radial gradient for the cute fade */}
        </Card>
        <Card
          title="Deployment & Continuous Improvement"
          description="Deploy the model, monitor performance, retrain, and refine based on feedback"
          icon={<AceternityIcon order="Phase 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
    icon: React.ReactNode;
    description: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  
      max-w-sm w-full mx-auto p-4 relative lg:h-[40rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4  absolute top-[50%]
        left-[50%] translate-x-[-50%]  translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>

        <p className="text-lg text-gray-500 dark:text-gray-300 opacity-0 group-hover/canvas-card:opacity-100 mt-2 transition duration-300 transform group-hover/canvas-card:translate-y-2 group-hover/canvas-card:scale-105">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-m font-bold text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Process;