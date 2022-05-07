Le contexte
========
Nous construisons une méthode qui permettra aux entreprises (plombiers, ascenseurs, etc.) de gérer leurs interventions dans leur calendrier. Nous avons déjà des classes pour l'intervention et nous devons construire une méthode qui nous permettra de calculer toutes les fenêtres disponibles.

Des classes
========
Les cours sont fournis mais ce n'est qu'une indication. Vous pouvez librement implémenter vos propres classes si le comportement souhaité est le même.

## Événement

* Un événement est soit une fenêtre qui s'ouvre, soit une fenêtre occupée. Une fenêtre occupée signifie que l'entreprise a déjà une intervention prévue ou ne peut pas intervenir dans cette fenêtre spécifique.
* Un événement d'ouverture peut être récurrent, c'est-à-dire qu'il se répète chaque semaine.


Exemple
========
Voici ce qui se passe dans le fichier main.js :

Prenons une société qui s'appelle "Plomberie FAURE", elle met dans la plateforme qu'elle est habituellement disponible chaque semaine le vendredi de 10h30 à 14h00. Un habitant a programmé une intervention le vendredi 8 juillet de 11h30 à 12h30 avec elle. Un autre habitant souhaite savoir quand l'entreprise est disponible du 4 au 10 juillet. La réponse devrait être que l'entreprise est disponible le vendredi 8 juillet de 10h30 à 11h30 et de 12h30 à 14h00. Pour le test, nous supposerons que l'algorithme renvoie un tableau avec les fenêtres/emplacements disponibles dans le calendrier, comme décrit dans le fichier main.js.

Critère d'évaluation
==========
Nous analyserons particulièrement les critères suivants pour l'évaluation :
* La lisibilité du code (peut-on comprendre facilement ce que vous avez fait)
* Essais !!!
* Performance
* La beauté de ce que vous faites

Des détails
=======
S'il n'y a pas d'ouverture ou d'événement occupé pour une certaine fenêtre, cela signifie que l'entreprise n'est pas disponible.