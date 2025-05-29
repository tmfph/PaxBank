#!/bin/bash

echo "🚀 Déploiement automatique de PaxBank"

# Étape 1 : Ajouter et pousser les fichiers sur GitHub
git add .
git commit -m "Déploiement automatique"
git push origin main

# Étape 2 : Déclencher le déploiement Render via API
curl -X POST -H "Authorization: Bearer rnd_83vfOW" "https://api.render.com/v1/services/VOTRE_PROJET_ID/deploys"

echo "🎯 Déploiement en cours... Vérification dans quelques instants"

# Étape 3 : Vérifier si PaxBank est bien en ligne
sleep 10
curl -I https://TON_URL_RENDER.com

echo "✅ PaxBank devrait être en ligne !"
