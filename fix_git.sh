#!/bin/bash

# Suppression de l'ancien remote problématique
git remote remove origin

# Ajout du bon remote
git remote add origin https://github.com/Tmfph/PaxBank.git

# Ajout et commit du fichier
git add privacy.html
git commit -m "Ajout de la politique de confidentialité"

# Authentification et push sécurisé
GIT_TOKEN="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"
git push -u https://${GIT_TOKEN}@github.com/Tmfph/PaxBank.git main

echo "🚀 Tout est en ligne ! Teste ton lien maintenant :"
echo "https://tmfph.github.io/PaxBank/privacy.html"
