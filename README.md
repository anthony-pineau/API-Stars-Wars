## API Stars Wars
```
npm install
```

### Lancer le projet
```
npm run start
```

### Swagger
http://localhost:3000/api-docs/

### Documentation Swagger
`schemas/swagger.yaml`

### Modifier le .env
`.env`

## Le modèle de Richardson

Le modèle de Richardson, également connu sous le nom de modèle de maturité de Richardson ou modèle de maturité de l'API, est un modèle qui décrit les différentes étapes d'évolution d'une interface de programmation d'application (API) depuis sa conception initiale jusqu'à sa pleine maturité. Il a été proposé par Leonard Richardson en 2008 et comprend quatre niveaux :

____

**Niveau 0** - "Le service web" : À ce niveau, une API est simplement exposée via des méthodes HTTP conventionnelles telles que GET, POST, PUT et DELETE. Il n'y a pas d'utilisation appropriée des URI (Uniform Resource Identifiers) et les opérations sont souvent effectuées sur une seule ressource.

> Exemple : Une API qui expose une méthode HTTP GET pour récupérer des informations sur les films de Star Wars.
GET /film

___

**Niveau 1** - "Les ressources" : À ce niveau, les ressources de l'API sont identifiées par des URI spécifiques. Cela permet une meilleure organisation des différentes entités et leur manipulation via des opérations HTTP appropriées. 

> Exemple : 
Une API qui expose des URI spécifiques pour un film, tels que /films/{id}, pour récupérer les détails d'un film spécifique, Au lieu d'effectuer une opération sur une URL comme /getFilm.

___

**Niveau 2** - "Utilisation des verbes HTTP" : Au niveau 2, les opérations HTTP sont utilisées de manière appropriée pour exprimer différentes actions sur les ressources. Par exemple, au lieu d'utiliser uniquement le verbe GET pour récupérer les détails d'une ressource, on peux utiliser PUT pour mettre à jour une ressource existante, POST pour créer une nouvelle ressource, etc.

> Exemple : Une API qui utilise les verbes HTTP appropriés pour effectuer des actions sur les ressources films de Star Wars.<br>
GET /films/1 <br>
POST /films<br>
PUT /films/1<br>
DELETE /films/1<br>

___

**Niveau 3** - "Hypermedia" : Le niveau 3 est le niveau le plus évolué du modèle de Richardson. Il implique l'utilisation d'hyperliens pour permettre la navigation entre les ressources. Les réponses renvoyées par l'API contiennent des liens vers d'autres ressources connexes, permettant aux clients de découvrir dynamiquement les fonctionnalités disponibles et d'interagir avec elles.

> GET /films/1
> Réponse :
> ```
> {
>   "id": 1,
>   "title": "A New Hope",
>   "release_year": 1977,
>   "director": "George Lucas",
>   "characters": [
>     {
>       "name": "Luke Skywalker",
>       "link": "/characters/1"
>     }
>   ]
> }
> ```