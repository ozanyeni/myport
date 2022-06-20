import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Search Engine Marketing (SEM)",
          "Search Engine Optimization(SEO)",
          "Web Development",
          "Social Media Management ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
