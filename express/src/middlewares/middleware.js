const middlewareGlobal = (request, response, next) => {
  response.locals.localVariable = "Variável local";
  next();
};

export { middlewareGlobal };
