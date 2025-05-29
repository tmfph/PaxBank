#!/bin/bash

echo "🚀 Déploiement automatique de PaxBank"

# Étape 1 : Ajouter et pousser les fichiers sur GitHub
git add .
git commit -m "Déploiement automatique"
git push origin main

# Étape 2 : Déclencher le déploiement Render via API (si ton compte le permet)
curl -X POST -H "Authorization: Bearer TON_API_KEY" "https://api.render.com/deploy/TON_PROJET"

echo "🎯 Déploiement en cours... Vérification dans quelques instants"

# Étape 3 : Vérifier si PaxBank est en ligne
sleep 10
curl -I https://TON_URL_RENDER.com

echo "✅ PaxBank devrait être en ligne !"

