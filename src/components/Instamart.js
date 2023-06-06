import React, { useState } from "react";

const sectionData = [
  {
    title: "science",
    description: "this is science subject",
  },
  {
    title: "maths",
    description: "this is maths subject",
  },
  {
    title: "hindi",
    description: "this is hindi subject",
  },
];

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-3 p-3 border border-gray-300">
      <h1 className="text-lg font-semibold">{title}</h1>
      {isVisible ? (
        <>
          <button onClick={() => setIsVisible(false)}>Hide</button>
          <p className="border text-gray-700">{description}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [setConfig, setIsConfig] = useState(null);
  return (
    <>
      <div>Instamart Page</div>
      {sectionData.map((item, index) => (
        <Section
          key={index}
          title={item.title}
          description={item.description}
          isVisible={setConfig === index ? true : false}
          setIsVisible={(buttonStatus) => {
            buttonStatus ? setIsConfig(index) : setIsConfig(null);
          }}
        />
      ))}
    </>
  );
};

/*
const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="m-3 p-3 border border-gray-300">
      <h1 className="text-lg font-semibold">{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}
      {isVisible && <p className="border text-gray-700">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  return (
    <>
      <div>Instamart Page</div>
      <Section title={"science "} description={"this is science"}></Section>
      <Section title={"maths "} description={"this is science"}></Section>
      <Section title={"physics "} description={"this is science"}></Section>
    </>
  );
};
*/

export default Instamart;
