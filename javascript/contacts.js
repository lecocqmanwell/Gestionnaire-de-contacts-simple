console.log("Bienvenue dans le gestionnaire de contact !");

var contact = {

	init: function (nom, prenom) {
		
		this.nom = nom;
		this.prenom = prenom;
	},
	decrire: function () {
		
		console.log("Nom : " + this.nom + ", prénom : " + this.prenom);
	}
};

var tabContact = [];

//Création des deux contacts à insérer directement
var contact1 = Object.create(contact);
contact1.init("Lévisse", "Carole");
tabContact.push(contact1);

var contact2 = Object.create(contact);
contact2.init("Nelsonne", "Mélodie");
tabContact.push(contact2);


do {

	console.log("\n1 : Lister les contacts");
	
	console.log("2 : Ajouter un contact");
	
	console.log("0 : Quitter");

	var choix = prompt("Choisissez un option : ");
	
	//Afficher les contacts
	if (choix === "1") {

		console.log("\nVoici la liste de tous vos contacts :");
		
		for (var i = 0 ; i < tabContact.length ; i++) {

			tabContact[i].decrire();
		}	
	}
	
	//Ajouter un contact
	if (choix === "2") {

		var nom = prompt("Entrez le nom du nouveau contact :");
		var prenom = prompt("Entrez le prénom du nouveau contact :");
		
		var nouveauContact = Object.create(contact);

		nouveauContact.init(nom,prenom);
		
		tabContact.push(nouveauContact);
		
		console.log("\nLe nouveau contact a été ajouté");
	}

	if(choix !== "0" && choix !== "1" && choix !== "2"){

		console.log("\nChoix invalide");
	}

}while(choix !== "0");

console.log("\nAu revoir ! ");

