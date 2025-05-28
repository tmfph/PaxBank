
const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Pour toute requête à la racine, envoyer `index.html`
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Définir le port utilisé
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ PaxBank est opérationnel sur le port ${port}`));
