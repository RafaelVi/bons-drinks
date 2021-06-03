import React from "react";
import history from "../../history";
import "./Contact.css";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    console.log({
      name: form.name.value,
      email: form.email.value,
      comment: form.comment.value,
    });

    alert("Comentário enviado com sucesso!");

    history.push("/");
  };
  return (
    <main className="animeLeft">
      <section className="grid-content">
        <h1 className="title-contact-us">Contato</h1>
        <img
          src="https://albanypoets.com/wp-content/uploads/2019/09/typewriter.jpg"
          alt="contact us"
          className="img-contact-us"
        />
        <form onSubmit={handleSubmit} className="form-contact-us">
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" required className="input-contact" /> <br />
          <br></br>
          <label htmlFor="email" >Email:</label>
          <input type="email" name="email" className="input-contact" required /> <br />
          <label htmlFor="comment">Sua mensagem</label> <br />
          <textarea name="comment" cols="30" rows="10" required></textarea><br />
          <input type="submit" placeholder="Enviar" className="btn-contact"></input>
        </form>
      </section>
    </main>
  );
};

export default Contact;
