import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

// import { styles } from "../styles";

import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

import github from "../assets/github.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  companyProject,
}) => {
  const [showFullDisc, setShowFullDisc] = useState(false);
  const expandable = description.split(" ").length < 40;
  return (
    <motion.div
      style={
        {
          // width:'19rem'
          // ,
        }
      }
      variants={slideIn("up", "spring", index * 0.5, 2)}
    >
      <Tilt
        options={{
          max: 35,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl w-140 sm:w-96 mb-20"
      >
        <div style={{}} className="relative">
          <img
            src={image}
            alt="project_image"
            className="object-cover rounded-2xl"
          />
          {source_code_link ? (
            <div className="cursor-pointer absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-black w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={"/images/icons/external-link.svg"}
                  alt="link"
                  className="w-3/5 h-3/5 object-contain"
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="mt-5">
          <div className="flex">

          <h3 className="font-bold text-[24px]">{name}</h3>
          {companyProject ? (
            <span
              style={{
                marginLeft:'0.6rem',
                lineHeight:2.3,
                borderRadius: "0.2rem",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              {" (Company Project) "}
            </span>
          ) : null}
          </div>
          {!expandable ? (
            showFullDisc ? (
              <p
                onClick={() => {
                  setShowFullDisc(!showFullDisc);
                }}
                className="mt-2 text-secondary text-[14px]"
              >
                {description}
              </p>
            ) : (
              <p
                onClick={() => {
                  setShowFullDisc(!showFullDisc);
                }}
                className="mt-2 text-secondary text-[14px]"
              >
                {description.split(" ").slice(0, 38).join(" ")}
                <span className="font-bold cursor-pointer"> ...more</span>
              </p>
            )
          ) : (
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <header className="text-3xl font-bold pt-10 px-5">
          <h2>Mobile Projects</h2>
        </header>
      </motion.div>

      <div className="w-full flex px-5">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 px-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
