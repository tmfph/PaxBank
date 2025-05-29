import express from 'express';

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur PaxBank !');
});

// Route de connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'admin' && password === 'password') {
    res.send({ message: 'Connexion réussie !' });
  } else {
    res.status(401).send({ message: 'Identifiants incorrects.' });
  }
});

// Tableau de bord
app.get('/dashboard', (req, res) => {
  res.send('<h1>Tableau de bord</h1><p>Bienvenue dans votre espace personnel.</p>');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
