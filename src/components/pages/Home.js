import React from "react";

import Mathjax from "react-mathjax2";

const ascii = "U = 1/(R_si)";
const tex = 'f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi'
const array = '\\begin{array}{cc} a & b \\\\ c & d \\end{array}';
var math = '\\frac{1}{\\sqrt{x^2 + 1}}';



const Home = () => {
  return (
    <section className="section">
      <div className="container home" data-testid="homeTitle">
        hello world
      </div>
      <Mathjax.Context input="ascii">
        <div>
          This is an inline formula written in AsciiMath:{" "}
          <Mathjax.Node inline>{ascii}</Mathjax.Node>
        </div>
      </Mathjax.Context>
      <br/>
      <Mathjax.Context input="tex">
        <div>
          This is an inline formula written in AsciiMath:{" "}
          <Mathjax.Node inline>{tex}</Mathjax.Node>
        </div>
      </Mathjax.Context>
      <br/>
      <Mathjax.Context input="tex">
        <div>
          This is an inline formula written in AsciiMath:{" "}
          <Mathjax.Node inline>{array}</Mathjax.Node>
        </div>
      </Mathjax.Context>
      <br/>
      <Mathjax.Context input="tex">
        <div>
          This is an inline formula written in AsciiMath:{" "}
          <Mathjax.Node inline>{math}</Mathjax.Node>
        </div>
      </Mathjax.Context>
      <br/>
      <Mathjax.Context input="tex">
        <div>
          This is an inline formula written in AsciiMath:{" "}
          <Mathjax.Node inline>{math}</Mathjax.Node>
        </div>
      </Mathjax.Context>
    </section>
  );
};

export default Home;
