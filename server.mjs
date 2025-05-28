
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('✅ PaxBank est en ligne sur le port 3000 !');
});

const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Pour toute requête à la racine, envoyer `index.html`
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(\`✅ PaxBank est opérationnel sur le port \${port}\`));

