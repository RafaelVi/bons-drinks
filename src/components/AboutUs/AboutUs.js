import React from "react";
import './AboutUs.css'
const AboutUs = () => {
  return (
    <main className="animeLeft">
      <section className="grid-content">
      <h1 className="title-about-us">Sobre Nós</h1>
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          alt="about us" className="img-about-us"
        />
        <p className="text-about-us">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
          temporibus nesciunt at doloremque accusantium reiciendis. Sint,
          necessitatibus veniam. Earum similique officiis cumque ad beatae
          dolores amet excepturi expedita impedit.
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
