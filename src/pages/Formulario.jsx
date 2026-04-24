import { useState } from "react";


const Formulario = () => {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        confEmail: "",
        cpf: "",
        dataNascimento: "",
        senha: ""
    });

    function formChange(e) {
        const {name, value} = e.target;
        setForm(
            {
                ...form, [name]: value
            });
        }

    function formSubmit(e) {
        e.preventDefault();



        console.log(form);

    }

  return (
    <form onSubmit={formSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
         type="text"
         id="nome"
         name="nome"
            value={form.nome}
            onChange={formChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
         type="text"
         id="email"
         name="email"
            value={form.email}
            onChange={formChange}
        />
      </div>
      <div>
        <label htmlFor="confEmail">Confirmar E-mail:</label>
        <input
         type="text"
         id="confEmail"
         name="confEmail"
         value={form.confEmail}
         onChange={formChange}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
         type="text"
         id="cpf"
         name="cpf"
         value={form.cpf}
         onChange={formChange}
        />
      </div>
      <div>
        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <input
         type="date"
         id="dataNascimento"
         name="dataNascimento"
         value={form.dataNascimento}
         onChange={formChange}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
         type="password"
         id="senha"
         name="senha"
         value={form.senha}
         onChange={formChange}
        />
      </div>

      <button>Cadastrar</button>
    </form>
    
  );
};

export default Formulario;
