const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());

const usersController = require('./controllers/users');

app.get('/users', usersController.listUsers);
app.get('/users/:id', usersController.showUser);
app.post('/users', usersController.createUser);
app.put('/users/:id', usersController.updateUser);
app.delete('/users/:id', usersController.deleteUser);

app.get('/', (req, res) => res.send('default route'));


app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log('app is listening on:', port);
});
