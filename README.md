

---

# 📱 Le Petit Souk - Prototype Mobile React Native

Bienvenue dans le dépôt du projet **Le Petit Souk**. Ce projet consiste en la création d'un prototype d'application mobile pour un restaurant traditionnel marocain situé à Beni Mellal. Développé en 5 jours avec **React Native** et **Expo**, ce projet marque notre immersion dans le développement mobile.

---


---

## 🌟 Aperçu du Projet

Le but est de moderniser l'expérience client du restaurant "Le Petit Souk" en offrant une interface fluide pour consulter les spécialités locales (Tajines, Couscous, Pastilla, etc.).

**Objectifs principaux :**

* Navigation fluide entre l'accueil et le menu.
* Design inspiré de l'artisanat marocain (couleurs chaleureuses, lisibilité).
* Gestion dynamique des données avec les Hooks React.

---

## ✨ Fonctionnalités

1. **Écran d'Accueil (Home) :** Message de bienvenue personnalisé et bouton d'action vers le menu.
2. **Écran Menu du Jour :** Liste détaillée des plats avec catégories et prix en Dirhams (MAD).
3. **Compteur de Plats (Interactif) :** Utilisation de `useState` pour permettre aux utilisateurs de simuler une sélection.
4. **Initialisation Automatique :** Utilisation de `useEffect` pour charger les données ou afficher une alerte de bienvenue au lancement.

---

## 🛠 Technologies Utilisées

* **Framework :** [React Native](https://www.google.com/search?q=https://reactnative.dev/)
* **Outil de développement :** [Expo](https://www.google.com/search?q=https://expo.dev/)
* **Navigation :** [Expo Router](https://www.google.com/search?q=https://docs.expo.dev/router/introduction/) (basé sur le système de fichiers)
* **Langage :** JavaScript (ES6+)
* **Style :** StyleSheet (CSS-in-JS pour mobile)

---

## 🚀 Installation et Lancement

### Prérequis

* Node.js installé
* Application **Expo Go** installée sur votre smartphone (iOS ou Android)

### Étapes

1. **Cloner le projet :**
```bash
git clone https://github.com/votre-username/le-petit-souk.git
cd le-petit-souk

```


2. **Installer les dépendances :**
```bash
npm install

```


3. **Démarrer le serveur Expo :**
```bash
npx expo start

```


4. **Scanner le QR Code :** Utilisez l'application Expo Go pour voir le résultat en temps réel sur votre téléphone.

---

## 📂 Structure du Code

L'organisation du projet suit les standards d'Expo Router :

```text
/app
  ├── index.js          # Écran d'accueil (Accueil)
  ├── menu.js           # Écran du menu (Menu du Jour)
  └── _layout.js        # Configuration de la navigation
/components             # Composants réutilisables (Optionnel)
/assets                 # Images et icônes du restaurant

```

---

## 🧠 Apprentissages Clés

Au cours de cette semaine de développement, nous avons maîtrisé :

* **Vues & Textes :** Mise en page avec les composants `View`, `Text` et `ScrollView`.
* **Hooks :** * `useState` : Pour gérer l'interaction utilisateur.
* `useEffect` : Pour gérer le cycle de vie du composant.


* **Responsive Design :** Adapter l'interface aux différentes tailles d'écrans mobiles (Flexbox).
* **Workflow Git :** Collaboration en binôme et gestion des conflits de fusion.

---

## 👥 Auteurs

Projet réalisé en binôme dans le cadre de la formation Développeur Web et Web Mobile :

* **Prénom Nom** - [@votre-github](https://www.google.com/search?q=https://github.com/votre-github)
* **Prénom Nom** - [@partenaire-github](https://www.google.com/search?q=https://github.com/partenaire-github)

---

*Projet livré le 22 Mai 2026.*