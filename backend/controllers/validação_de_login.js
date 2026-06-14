
import bcrypt from "bcryptjs";
import Usuario from "../models/Usuarios.js";
//pegar esse codigo conectar ao modal e refatorar ele pra tornalo mais legivel
export const ValidadorDeLogin = (req, res) => {

    var erros = [];
  if (!req.body.nome || typeof req.body.nome === "undefined"){
    erros.push({ texto: "Nome inválido" });
  }

 
  if ( !req.body.email || typeof req.body.email === "undefined"){
    erros.push({ texto: "Email inválido" });
}

  if ( !req.body.senha || typeof req.body.senha === "undefined"){
    erros.push({ texto: "Senha inválida" });
  }

  if (req.body.senha != req.body.senha2) {
    erros.push({ texto: "Senhas diferentes" });
  }

  if (erros.length > 0) {
    res.render("pomodoro/login", { erros: erros }); 
  } else {
    Usuario.findOne({ email: req.body.email }) 
      .then(function (usuario) {
       
        // procura o email no banco
        if (usuario) {
          erros.push({ texto: "usuario já existente" });
          res.render("pomodoro/login", { erros: erros });     
        } else {
            const novoUsuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
          });

          // hash da senha
          bcrypt.genSalt(10, (erro, salt) => {
            if (erro) {
              req.flash("error_msg", "Houve um erro ao gerar o salt");
              return res.redirect("/login");
            }

            bcrypt.hash(novoUsuario.senha, salt, (erro, hash) => {
              if (erro) {
                req.flash(
                  "error_msg",
                  "Houve um erro durante o salvamento do usuário"
                );
                return res.redirect("/");
              }

              // Substitui a senha original pelo hash
              novoUsuario.senha = hash;

              novoUsuario
                .save()
                .then(() => {
                  req.flash("success_msg", "Usuário cadastrado com sucesso");
                  res.redirect("/");
                })
                .catch((error) => {
                  req.flash(
                    "error_msg",
                    "Não foi possível cadastrar o usuário"
                  );
                  res.redirect("/login");
                });
            });
          });
        }
      })
      .catch(function (err) {
        req.flash("error_msg", "Houve um erro interno");
        res.redirect("/");
      });
  }
};

