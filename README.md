# ExpressJS

Ce repo contient une appli express.js de type « hello world » pour tester le déploiement.

## Installation en local

```bash
git clone https://github.com/jibundeyare/expressjs-p11
cd expressjs-p11
npm install
```

### Utilisation

```bash
node app.js
```

[http://localhost:3000](http://localhost:3000)

## Déploiement sur render.com

Prérequis : un compte Github.

- (optionnel) Forkez un repository ou créez-en un nouveau sur Github si nécessaire
- Créez un compte sur [https://render.com/](https://render.com/)
- Créez un nouveau web service en cliquant sur l'icône « + »
- Choisissez l'option « Build and deploy from a Git repository »
- Cliquez sur « Connect account » dans la section « Github » à droite
  Vous vous retrouvez sur le site de Github
- Tapez votre mot de passe Github
- Sélectionnez le repository que vous voulez publier
- Confirmez les permissions accordées
  Vous revenez sur le site de Render
- Cliquez sur le bouton « Connect » du repository que vous voulez publier
- Remplissez les champs avec les données suivantes :

  ```
  Name: [sous-domaine-de-votre-appli]
  Region: Frankfurt (EU Central)
  Branch: main
  Root Directory: <nc>
  Build Command: npm install
  Start Command: node app.js
  Instance Type: Free
  ```

  Remplacez `[sous-domaine-de-votre-appli]` par le sous-domaine souhaité. 
  Exemple : `foo` donnera `https://foo.onrender.com`

- validez la configuration puis visitez le lien quand le build est terminé

### Mise à jour sur render.com

- Mettez le code à jour en local
- Commitez votre code avec `git add` et `git commit`
- Poussez votre code sur Github avec `git push`
- Vérifiez que le code est à jour sur render.com
