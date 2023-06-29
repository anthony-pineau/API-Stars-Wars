const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
require('dotenv').config();

const schemaSwagger = YAML.load('schemas/swagger.yaml');

// Import des contrôleurs génériques
const genericController = require('./app/controllers/controller');

// Import des modèles
const Film = require('./app/models/film');
const People = require('./app/models/people');
const Planet = require('./app/models/planet');
const Starship = require('./app/models/starship');
const Vehicle = require('./app/models/vehicle');
const Specie = require('./app/models/specie');

// Configuration Express
const app = express();
app.use(express.json());
app.use(cors())
app.use('cors',cors);

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecté à la base de données MongoDB');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données:', err);
  });
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(schemaSwagger));
  
// Routes pour les films
app.get('/api/films', genericController.getAll(Film));
app.get('/api/films/:id', genericController.getById(Film));
app.post('/api/films', genericController.create(Film));
app.put('/api/films/:id', genericController.update(Film));
app.delete('/api/films/:id', genericController.remove(Film));


// Routes pour les People
app.get('/api/people', genericController.getAll(People));
app.get('/api/people/:id', genericController.getById(People));
app.post('/api/people', genericController.create(People));
app.put('/api/people/:id', genericController.update(People));
app.delete('/api/people/:id', genericController.remove(People));


// Routes pour les planètes
app.get('/api/planets', genericController.getAll(Planet));
app.get('/api/planets/:id', genericController.getById(Planet));
app.post('/api/planets', genericController.create(Planet));
app.put('/api/planets/:id', genericController.update(Planet));
app.delete('/api/planets/:id', genericController.remove(Planet));

// Routes pour les vaisseaux spatiaux
app.get('/api/starships', genericController.getAll(Starship));
app.get('/api/starships/:id', genericController.getById(Starship));
app.post('/api/starships', genericController.create(Starship));
app.put('/api/starships/:id', genericController.update(Starship));
app.delete('/api/starships/:id', genericController.remove(Starship));

// Routes pour les véhicules
app.get('/api/vehicles', genericController.getAll(Vehicle));
app.get('/api/vehicles/:id', genericController.getById(Vehicle));
app.post('/api/vehicles', genericController.create(Vehicle));
app.put('/api/vehicles/:id', genericController.update(Vehicle));
app.delete('/api/vehicles/:id', genericController.remove(Vehicle));

// Routes pour les espèces
app.get('/api/species', genericController.getAll(Specie));
app.get('/api/species/:id', genericController.getById(Specie));
app.post('/api/species', genericController.create(Specie));
app.put('/api/species/:id', genericController.update(Specie));
app.delete('/api/species/:id', genericController.remove(Specie));

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});