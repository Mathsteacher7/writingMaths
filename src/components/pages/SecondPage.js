import React from "react";

import Mathjax from "react-mathjax2";

const SecondPage = () => {
  const sequenceOne = [
    "",
    "\\frac{1}{2}",
    "\\frac{1}{4}",
    "\\frac{1}{8}",
    "\\frac{1}{16}",
  ];
  const sequenceTwo = ["", "1", "1", "2", "3", "5", "8", "13", "21", "34"];
  return (
    <section className="section">
      <div className="container home" data-testid="homeTitle">
        hello world
      </div>
      <Mathjax.Context input="tex">
        <div>
          a few sequences:{" "}
          <div>
            {sequenceOne.map((term, i) => {
              if (i === 0 || i === sequenceOne.length - 1) {
                return <Mathjax.Node inline>{term}</Mathjax.Node>;
              }
              return <Mathjax.Node inline>{`${term},`}</Mathjax.Node>;
            })}
          </div>
          <div>
            {sequenceTwo.map((term, i) => {
              if (i === 0 || i === sequenceOne.length - 1) {
                return <Mathjax.Node inline>{term}</Mathjax.Node>;
              }
              return <Mathjax.Node inline>{`${term},`}</Mathjax.Node>;
            })}
          </div>
        </div>
      </Mathjax.Context>
    </section>
  );
};

export default SecondPage;
