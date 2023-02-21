# Web API pour l'exo Recap de React

## Utilisation
```
npm i
npm start
```

## Endpoints

### Obtenir les différentes categories
```
GET /api/subject/category
```

### Obtenir les messages d'une categorie
```
GET /api/subject/{CategoryId}/message
```

### Envoyer un message
```
POST /api/subject/2/message
 
{
	"author": "Zaza",
	"content" : "Exemple de message"
}
```