import React from "react";
import {
  hand,
  jukebox,
  roll,
  chess,
  bulb,
  robot,
  robothand,
  openaiimg,
  laptop,
  face,
  ball,
  AiDef,
  RoboLearn,
  MIC,
  vision,
  deeplearning,
  robotics
} from "../assets";

const Overview = () => {
  const images = [
    bulb,
    robot,
    chess,
    hand,
    roll,
    jukebox,
    openaiimg,
    robothand,
    laptop,
  ];
  return (
    <section className="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 gap-4">
        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
          <img class="w-full" src={AiDef} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Artificial Intelligence</div>
              <p class="text-gray-700 text-base">
                AI, short for Artificial Intelligence, is a field within
                computer science that focuses on the development and deployment
                of systems and algorithms that exhibit human-like intelligence
                and perform tasks that would typically require human
                intelligence. AI involves the study, design, and creation of
                intelligent machines that can perceive, reason, learn, and make
                decisions to solve complex problems. AI encompasses a wide range
                of subfields including:
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Machine Learning.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Deep learning.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Neural Networks.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Cognitive Computing.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Natural Language Processing.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Computer Vision.
              </span>
            </div>
          </div>
        </div>

        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
          <img class="w-full" src={RoboLearn} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Machine Learning:</div>
              <p class="text-gray-700 text-base">
                A subset of AI that involves the development of algorithms and
                models that enable computers to learn from data and make
                predictions or take actions without being explicitly programmed.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Supervised learning
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Unsupervised learning
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Reinforcement learning
              </span>
            </div>
          </div>
        </div>

        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
          <img class="w-full" src={deeplearning} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Deep Learning:</div>
              <p class="text-gray-700 text-base">
                A specific approach to machine learning that uses artificial
                neural networks with multiple layers to learn and extract
                patterns from large amounts of data. Deep learning has achieved
                remarkable success in following areas.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #image recognition
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #natural language processing
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #speech recognition
              </span>
            </div>
          </div>
        </div>

        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 ">
          <img class="w-full" src={MIC} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                Natural Language Processing (NLP):
              </div>
              <p class="text-gray-700 text-base">
                The branch of AI concerned with the interaction between
                computers and human language. NLP focuses on enabling computers
                to understand, interpret, and generate human language, enabling
                applications like analysis.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #chatbots
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #language translation
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #sentiment
              </span>
            </div>
          </div>
        </div>

        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 ">
          <img class="w-full" src={vision} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Computer Vision:</div>
              <p class="text-gray-700 text-base">
                An area of AI that aims to enable computers to understand and
                interpret visual data, such as images and videos. Computer
                vision techniques are used in tasks like.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #object recognition
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #image classification
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #video analysisment
              </span>
            </div>
          </div>
        </div>

        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5 ">
          <img class="w-full" src={robotics} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Robotics:</div>
              <p class="text-gray-700 text-base">
                The intersection of AI and robotics, where intelligent machines
                are designed to interact with the physical world. AI-powered
                robots can perceive their environment, make decisions, and
                perform tasks autonomously or with minimal human intervention.
                They can do following
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #calculate with more perfection
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #do repeatitive task
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="grid grid-cols-2 gap-4">
        <div class="p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
          <img class="w-full" src={RoboLearn} alt="AI Image"></img>
          <div class="rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Machine Learning:</div>
              <p class="text-gray-700 text-base">
                A subset of AI that involves the development of algorithms and
                models that enable computers to learn from data and make
                predictions or take actions without being explicitly programmed.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Supervised learning
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Unsupervised learning
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Reinforcement learning
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* ================================== */}

      {/* <div className="mt-4">
        <h1 className="text-[#222328] text-[50px]">Artificial Intelligence</h1>
        <h4 className="text-[#666e75] text-[22px]">
          {" "}
          AI, short for Artificial Intelligence, is a field within computer
          science that focuses on the development and deployment of systems and
          algorithms that exhibit human-like intelligence and perform tasks that
          would typically require human intelligence. AI involves the study,
          design, and creation of intelligent machines that can perceive,
          reason, learn, and make decisions to solve complex problems. AI
          encompasses a wide range of subfields and techniques, including:{" "}
        </h4>
        <div className="mt-3">
          <ol style={{ lineHeight: "180%" }}>
            <li>
              <span className="font-extrabold">Machine Learning:</span> A subset
              of AI that involves the development of algorithms and models that
              enable computers to learn from data and make predictions or take
              actions without being explicitly programmed.
            </li>
            <li>
              <span className="font-extrabold">Deep Learning:</span> A specific
              approach to machine learning that uses artificial neural networks
              with multiple layers to learn and extract patterns from large
              amounts of data. Deep learning has achieved remarkable success in
              areas like image recognition, natural language processing, and
              speech recognition.
            </li>
            <li>
              <span className="font-extrabold">
                Natural Language Processing (NLP):
              </span>{" "}
              The branch of AI concerned with the interaction between computers
              and human language. NLP focuses on enabling computers to
              understand, interpret, and generate human language, enabling
              applications like chatbots, language translation, and sentiment
              analysis.
            </li>

            <li>
              <span className="font-extrabold">Computer Vision:</span> An area
              of AI that aims to enable computers to understand and interpret
              visual data, such as images and videos. Computer vision techniques
              are used in tasks like object recognition, image classification,
              and video analysis.
            </li>

            <li>
              <span className="font-extrabold">Robotics:</span> The intersection
              of AI and robotics, where intelligent machines are designed to
              interact with the physical world. AI-powered robots can perceive
              their environment, make decisions, and perform tasks autonomously
              or with minimal human intervention.
            </li>

            <li>
              <span className="font-extrabold">Expert Systems:</span> AI systems
              that emulate the knowledge and reasoning abilities of human
              experts in specific domains. These systems use rules and
              heuristics to solve complex problems and provide expert-level
              advice.
            </li>
            <p className="font-bold">
              AI has a wide range of applications across various industries,
              including healthcare, finance, transportation, gaming, and more.
              It continues to advance rapidly, driven by advancements in
              computational power, availability of large datasets, and
              breakthroughs in algorithms, paving the way for intelligent
              systems that can perform tasks that were once thought to be
              exclusive to human intelligence.
            </p>
          </ol>
        </div>
      </div> */}

      <div className="mt-10">
        <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
      </div>

      <div className="mt-12">
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Future is Artifical General Intelligence.{" "}
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px]">
          Artificial General Intelligence is a AI apporach to generate a
          diverse, imaginative and visually stunning images using Dall-E, a
          system that can solve human-level problems. Building safe and
          beneficial AGI. DALL-E advancements in the field of AI-driven image
          generation and understanding. They demonstrate the potential of AI to
          generate novel and creative visuals and to comprehend visual scenes in
          a more sophisticated way, bringing us closer to machines that can
          understand and interact with the visual world more like humans.
        </p>
        <a
          className="underline decoration-sky-500/30"
          href="https://en.wikipedia.org/wiki/Artificial_general_intelligence"
        >
          More About AGI
        </a>
      </div>

      <div className="mt-6">
        <h1 className="font-extrabold text-[#222328] text-[32px] text-center">
          {" "}
          What AGI can do?{" "}
        </h1>
        <h3 className="font-extrabold text-[#666e75] text-[22px] text-center">
          {" "}
          It can generate following images{" "}
        </h3>
      </div>

      <div className="image-container image-center">
        <div>
          <div className="text-center font-extrabold">Human Face</div>
          <img
            src={face}
            alt="face-gif"
            style={{ width: "500px", borderRadius: "20px" }}
          />
        </div>
        <div>
          <div className="text-center font-extrabold">Ball</div>
          <img
            src={ball}
            alt="ball-gif"
            style={{ width: "500px", borderRadius: "20px" }}
          />
        </div>
      </div>

      {/* <div className="App">
        <div className="image-container mt-3">
          {images.map((image) => (
            <div className="image">
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};
export default Overview;
