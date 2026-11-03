const app = require("./app");
const porta = Number(process.env.PORT) || 3000;
app.listen(porta, () => {
  console.log(`API disponível em http://localhost:${porta}`);
});
