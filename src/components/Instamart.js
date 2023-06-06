import React, { useState } from "react";

const Section = ({
  title,
  description,
  isVisible,
  setIsVisible,
  setIsVisibleAll,
}) => {
  return (
    <div className="m-3 p-3 border border-gray-300">
      <h1 className="text-lg font-semibold">{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisibleAll()}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible()}>Show</button>
      )}
      {isVisible && <p className="border text-gray-700">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [setConfig, setIsConfig] = useState({
    science: false,
    maths: false,
    physics: false,
  });
  return (
    <>
      <div>Instamart Page</div>
      <Section
        title={"science "}
        description={"this is science"}
        isVisible={setConfig.science}
        setIsVisible={() =>
          setIsConfig({ science: true, maths: false, physics: false })
        }
        setIsVisibleAll={() => setIsConfig({ science: false })}
      ></Section>
      <Section
        title={"maths "}
        description={"this is maths"}
        isVisible={setConfig.maths}
        setIsVisible={() =>
          setIsConfig({ science: false, maths: true, physics: false })
        }
        setIsVisibleAll={() => setIsConfig({ maths: false })}
      ></Section>
      <Section
        title={"physics "}
        description={"this is physics"}
        isVisible={setConfig.physics}
        setIsVisible={() =>
          setIsConfig({ science: false, maths: false, physics: true })
        }
        setIsVisibleAll={() => setIsConfig({ physics: false })}
      ></Section>
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
