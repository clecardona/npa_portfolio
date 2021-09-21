import React from "react";

export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="wrapper">
        {/* tip use local files for your project you never know when the other site goes down */}
        <img alt="portrait" src="http://clecardona.com/img/portrait.jpg" />
        <h2>About me</h2>
        <p>
          Hi! I am Clement, a junior frontend developer from Nice , France. This
          is my Portfolio, which I use to showcase everything I develop. I
          specialize in React.js development with TypeScript with a intuitive
          design and attention to details. Why do I need intuitive design and
          attention to details, you might ask? Well, scroll down and let me
          convince you.
        </p>
      </div>
    </section>
  );
}
