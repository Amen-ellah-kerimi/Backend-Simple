# Simple Express Backend - Introduction aux Requêtes HTTP

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Ce projet est un backend Node.js simple construit avec Express.js, conçu pour illustrer les concepts fondamentaux des requêtes HTTP (GET et POST) et de la gestion des paramètres d'URL.

## ✨ Fonctionnalités

* **Endpoint Racine (`GET /`)**: Affiche un message de bienvenue et enregistre l'heure de la requête.
* **Endpoint Dynamique (`GET /salut/:nom`)**: Répond avec un message personnalisé en utilisant un paramètre d'URL.
* **Endpoint de Données (`POST /data`)**: Accepte des données JSON via une requête POST, les affiche dans la console et renvoie un message de confirmation avec les données reçues.
* **Timestamping**: Chaque requête GET et POST est loggée avec un horodatage précis.

## 🚀 Démarrage Rapide

Suivez ces étapes pour lancer l'application sur votre machine locale.

### Prérequis

* [Node.js](https://nodejs.org/) (version LTS recommandée)
* [npm](https://www.npmjs.com/) (généralement installé avec Node.js)

### Installation

1.  **Clonez ce dépôt** (ou copiez le fichier `server.js` dans un nouveau dossier vide).
    ```bash
    git clone [https://github.com/votre-utilisateur/votre-repo-simple-backend.git](https://github.com/votre-utilisateur/votre-repo-simple-backend.git)
    cd votre-repo-simple-backend # Remplacez par le nom de votre dossier
    ```
2.  **Initialisez un projet Node.js** et installez Express :
    ```bash
    npm init -y
    npm install express
    ```
3.  **Créez un fichier `server.js`** dans le dossier racine de votre projet et collez-y le code fourni.

### Exécution du Serveur

1.  **Dans votre terminal, naviguez jusqu'au dossier du projet.**
2.  **Lancez le serveur :**
    ```bash
    node server.js
    ```
3.  Vous devriez voir un message dans votre terminal indiquant que le serveur est en cours d'exécution :
    ```
    Server running at http://localhost:3000
    you can send GET http requests at following links:
     http://localhost:3000/
    http://localhost:3000/salut/your_name
    you can send POST http requests at http://localhost:3000/data
    ```

Le serveur sera accessible à l'adresse `http://localhost:3000`.

## 💡 Points de Terminaison API

Vous pouvez tester ces points de terminaison directement dans votre navigateur pour les requêtes GET, ou utiliser des outils comme [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), ou `curl` pour les requêtes POST.

### 1. `GET /`

* **Description**: Point d'entrée de l'API.
* **Méthode**: `GET`
* **Exemple dans le navigateur**: `http://localhost:3000/`
* **Réponse**: `<h1>Bienvenue sur votre Backend Express !</h1>`

### 2. `GET /salut/:nom`

* **Description**: Un exemple de route avec un paramètre d'URL. Remplacez `:nom` par n'importe quel nom.
* **Méthode**: `GET`
* **Exemple dans le navigateur**: `http://localhost:3000/salut/Amen`
* **Réponse**: `<h1>Salut Amen</h1>`

### 3. `POST /data`

* **Description**: Accepte des données au format JSON dans le corps de la requête.
* **Méthode**: `POST`
* **Exemple avec `curl`**:
    ```bash
    curl -X POST http://localhost:3000/data \
    -H "Content-Type: application/json" \
    -d '{"message": "Bonjour du client", "valeur": 123}'
    ```
* **Exemple de corps de requête (JSON)**:
    ```json
    {
        "clé": "valeur",
        "nombre": 42,
        "isActive": true
    }
    ```
* **Réponse (exemple)**:
    ```json
    {
        "message": "POST Request received Successfully at 28/07/2025 20:30:00",
        "dataReceived": {
            "clé": "valeur",
            "nombre": 42,
            "isActive": true
        }
    }
    ```
    (Notez que l'horodatage sera celui du moment de la requête.)

## 📚 Objectifs d'Apprentissage

Ce projet est excellent pour comprendre :

* La configuration de base d'un serveur Express.js.
* La définition de différentes routes HTTP (`GET`, `POST`).
* La gestion des paramètres d'URL (`req.params`).
* L'utilisation du middleware `express.json()` pour parser les corps de requêtes JSON (`req.body`).
* Le fonctionnement du cycle requête-réponse dans un backend simple.

## 📄 Licence

Ce projet est open-source et disponible sous la [Licence MIT](LICENSE).

---

**Bonne exploration de votre backend !**
