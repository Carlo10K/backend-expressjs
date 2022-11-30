const express = require('express');
const routerApi = require('./routes');

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

app.listen(port, () => {
  console.log('My port' + port);
});
