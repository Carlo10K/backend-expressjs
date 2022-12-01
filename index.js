const express = require('express');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//const { categoryId, productId } = req.params;
//res.json({
//    app.get('/categories/:categoryId/products/:productId', (req, res) => {
//    categoryId,
//    productId,
//  });
// });

routerApi(app);

//el orden en que estos middleware se ejecutan es importante ya que logErrors ejecuta la funcion next y deja continuar
//la ejecucion, mientras que errorHandler la finaliza.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port);
});
