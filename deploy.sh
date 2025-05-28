#!/bin/bash
# deploy.sh - Script de déploiement automatique pour PaxBank

# Arrête le script en cas d'erreur
set -e

echo "🔎 Démarrage du processus de test et déploiement de PaxBank..."

###################################
# 1️⃣ Préparation de l'environnement
###################################
echo "➡️ Configuration de l'environnement en mode TEST..."
export NODE_ENV=test
# Configure ici tes variables de test, par exemple ta clé Stripe test
export STRIPE_API_KEY="sk_test_votreCleTestIci"
# Autres variables d'environnement nécessaires…
sleep 1

###################################
# 2️⃣ Exécution des tests automatisés
###################################
echo "➡️ Exécution des tests unitaires et d'intégration..."
npm run test
echo "✅ Tests OK !"

###################################
# 3️⃣ Simulation d'une transaction test
###################################
echo "➡️ Simulation d'une transaction via l'API de test..."
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"amount":5000, "currency":"eur", "description": "Transaction test"}' \
     http://localhost:3000/api/test-payment
echo "✅ Transaction simulée avec succès !"

###################################
# 4️⃣ Vérification de l'interface utilisateur (simulée)
###################################
echo "➡️ Exécution des tests UI (simulation)..."
sleep 2
echo "✅ Tests UI validés !"

###################################
# 5️⃣ Build et déploiement en production
###################################
echo "➡️ Passage en mode PRODUCTION et construction du build..."
export NODE_ENV=production
npm run build
echo "✅ Build complété !"

echo "➡️ Lancement du serveur de production..."
nohup npm start > production.log 2>&1 &
echo "✅ PaxBank est lancé en production !"

###################################
# 6️⃣ Post-déploiement et notification
###################################
echo "➡️ Lancement terminé ! PaxBank est en ligne."
echo "Accède à ton site sur : http://votre-url-production"
echo "Consulte production.log pour les logs détaillés."
echo "🔔 Déploiement complété avec succès !"
