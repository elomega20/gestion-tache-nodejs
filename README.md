Cette application est une application de gestion des taches

-----------STRUCTURATUON DU PROJET-----------------------
1. Les fichiers app.js et server.js contiennent respectivement l'etablissement de la
  connection avec la base de donnee et l'execution de l'application express dans
  le serveur nodeJs

2. Le dossier models contient un fichier tache.js dans la quelle se trouve le schema
   de la base de donnee

3. Le dossier controller contient un fichier tache-controller.js dans la quelle se
   trouve les differents middlewares du CRUD

4. le dossier routes contient un fichier tache-route.js dans la quelle se trouve
   les routes des middlewares

5. pour la base de donnee nous avons utilisé mongodb avec la version cloud appeler
   Atlas(https://cloud.mongodb.com/) , j'ai mit des donnees et elles sont disponible en ligne
-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------

--------------INSTALLATION---------------------------
1. cloner le projet
2. deplacez vous dans le repertoire du projet
3. taper "npm install" pour installer les dependances
4. taper "nodemon server" et verifier si ce message "Connexion à MongoDB réussie !"
   s'affiche dans le console, si c'est le cas la connection avec la base de donnee
   est etablie et vous pouvez tester maintenant
   
