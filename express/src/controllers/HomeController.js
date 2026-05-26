const home = (req, res) => {
  res.render("index");
};

const submit = (req, res) => {
  res.send("<p>Recebido com sucesso</p>");
};

export { submit, home };
