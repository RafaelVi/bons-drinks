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
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required /> <br />
        <br></br>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required /> <br />
        <label htmlFor="comment">Sua mensagem</label> <br />
        <textarea name="comment" cols="30" rows="10" required></textarea>
        <input type="submit" placeholder="Enviar"></input>
      </form>
    </main>
  );
};

export default Contact;
