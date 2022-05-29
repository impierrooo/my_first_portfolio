/*Fonction changement de page*/

function Page_introduction(){

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#ff903e");

	document.getElementById('page_introduction').style.display = 'block';	
	document.getElementById('page_créations').style.display = 'none';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_créations(){

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#e12645");
	
	document.getElementById('page_introduction').style.display = 'none';	
	document.getElementById('page_créations').style.display = 'block';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_contact(){

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#0197ee");

	document.getElementById('page_introduction').style.display = 'none';	
	document.getElementById('page_créations').style.display = 'none';
	document.getElementById('page_contact').style.display = 'block';
}

/*Fonction changement de création*/

function création1(){
	document.getElementById('box_créations_part1').src = 'soon.jpg';

	var texte_création = document.getElementById("box_créations_title").innerHTML;

	if ((texte_création == "Premier exemple de création") || (texte_création == "Deuxième exemple de création") || (texte_création == "Troisième exemple de création") || (texte_création == "Quatrième exemple de création")) {
		document.getElementById("box_créations_title").innerHTML = "Premier exemple de création";
		
	} else if ((texte_création == "First example of creation") || (texte_création == "Second example of creation") || (texte_création == "Third example of creation") || (texte_création == "Fourth example of creation")) {
		document.getElementById("box_créations_title").innerHTML = "First example of creation";

	} else {
		document.getElementById("box_créations_title").innerHTML = "Primer ejemplo de creación";
	}

	document.getElementById("round_text1").style.color = "#e12645";
	document.getElementById("round_text2").style.color = "#3c0848";
	document.getElementById("round_text3").style.color = "#3c0848";
	document.getElementById("round_text4").style.color = "#3c0848";
}

function création2(){
	document.getElementById('box_créations_part1').src = 'soon.jpg';

	var texte_création = document.getElementById("box_créations_title").innerHTML;

	if ((texte_création == "Premier exemple de création") || (texte_création == "Deuxième exemple de création") || (texte_création == "Troisième exemple de création") || (texte_création == "Quatrième exemple de création")) {
		document.getElementById("box_créations_title").innerHTML = "Deuxième exemple de création";
		
	} else if ((texte_création == "First example of creation") || (texte_création == "Second example of creation") || (texte_création == "Third example of creation") || (texte_création == "Fourth example of creation")) {
		document.getElementById("box_créations_title").innerHTML = "Second example of creation";

	} else {
		document.getElementById("box_créations_title").innerHTML = "Segundo ejemplo de creación";
	}

	document.getElementById("round_text1").style.color = "#3c0848";
	document.getElementById("round_text2").style.color = "#e12645";
	document.getElementById("round_text3").style.color = "#3c0848";
	document.getElementById("round_text4").style.color = "#3c0848";
}

function création3(){
	document.getElementById('box_créations_part1').src = 'soon.jpg';

	var texte_création = document.getElementById("box_créations_title").innerHTML;

	if ((texte_création == "Premier exemple de création") || (texte_création == "Deuxième exemple de création") || (texte_création == "Troisième exemple de création") || (texte_création == "Quatrième exemple de création")) {
		document.getElementById("box_créations_title").innerHTML = "Troisième exemple de création";
		
	} else if ((texte_création == "First example of creation") || (texte_création == "Second example of creation") || (texte_création == "Third example of creation") || (texte_création == "Fourth example of creation")) {
		document.getElementById("box_créations_title").innerHTML = "Third example of creation";

	} else {
		document.getElementById("box_créations_title").innerHTML = "Tercer ejemplo de creación";
	}

	document.getElementById("round_text1").style.color = "#3c0848";
	document.getElementById("round_text2").style.color = "#3c0848";
	document.getElementById("round_text3").style.color = "#e12645";
	document.getElementById("round_text4").style.color = "#3c0848";
}

function création4(){
	document.getElementById('box_créations_part1').src = 'soon.jpg';

	var texte_création = document.getElementById("box_créations_title").innerHTML;

	if ((texte_création == "Premier exemple de création") || (texte_création == "Deuxième exemple de création") || (texte_création == "Troisième exemple de création") || (texte_création == "Quatrième exemple de création")) {
		document.getElementById("box_créations_title").innerHTML = "Quatrième exemple de création";
		
	} else if ((texte_création == "First example of creation") || (texte_création == "Second example of creation") || (texte_création == "Third example of creation") || (texte_création == "Fourth example of creation")) {
		document.getElementById("box_créations_title").innerHTML = "Fourth example of creation";

	} else {
		document.getElementById("box_créations_title").innerHTML = "Cuarto ejemplo de creación";
	}

	document.getElementById("round_text1").style.color = "#3c0848";
	document.getElementById("round_text2").style.color = "#3c0848";
	document.getElementById("round_text3").style.color = "#3c0848";
	document.getElementById("round_text4").style.color = "#e12645";
}

/*Fonction envoie du formulaire*/

function Formulaire() {
	var nom = document.getElementById("nom").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (nom == '') {
		document.getElementById('nom').style.backgroundColor = '#3a80bb';
		document.getElementById('nom_label').style.backgroundColor = '#3a80bb';
		setTimeout(fonctionAExecuter, 1000);
		
	} else if (email == '') {
		document.getElementById('email').style.backgroundColor = '#3a80bb';
		document.getElementById('email_label').style.backgroundColor = '#3a80bb';
		setTimeout(fonctionAExecuter, 1000);
		
	} else if (message == '') {
		document.getElementById('message').style.backgroundColor = '#3a80bb';
		document.getElementById('message_label').style.backgroundColor = '#3a80bb';
		setTimeout(fonctionAExecuter, 1000);
	
	} else {
		document.getElementById("form_bouton").id = "form_bouton_active";
		document.getElementById("form_bouton_active").value = "✔";
		document.getElementById('form_bouton_active').setAttribute('onclick','');

		var url = "https://discord.com/api/webhooks/979850810282369125/VhZBXXttwyiLEuwDSFxzJwg-ZFKaBNd9D2Nw-di4w-J2dE-TkTQ2FgCynWMALKc8Aha4";
		var request = new XMLHttpRequest();
		request.open("POST", url);
		request.setRequestHeader('Content-type', 'application/json');

		var myEmbed2 = {
			"title": "Réponse du formulaire de contact",
			"color": 0xDA7426,
			"fields": [
				{
					"name": "Nom et Prénom :",
					"value": nom,
				},
				{
					"name": "Email :",
					"value": email,
				},
				{
					"name": "Message :",
					"value": message
				}
			],
		}
		
		var params = {
        username: "Site Web ᴬᴵStudio",
        embeds: [ myEmbed2 ]
		}
		
		var params = {
        username: "Site Web ᴬᴵStudio",
        embeds: [ myEmbed2 ]
		}
    
		request.send(JSON.stringify(params)); 
		
		document.getElementById("nom").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
		
		document.getElementById('nom').style.backgroundColor = '#FFFFFF';
		document.getElementById('nom_label').style.backgroundColor = '#FFFFFF';

		document.getElementById('email').style.backgroundColor = '#FFFFFF';
		document.getElementById('email_label').style.backgroundColor = '#FFFFFF';

		document.getElementById('message').style.backgroundColor = '#FFFFFF';
		document.getElementById('message_label').style.backgroundColor = '#FFFFFF';
	}
}

function fonctionAExecuter(){
	document.getElementById('nom').style.backgroundColor = '#FFFFFF';
	document.getElementById('nom_label').style.backgroundColor = '#FFFFFF';

	document.getElementById('email').style.backgroundColor = '#FFFFFF';
	document.getElementById('email_label').style.backgroundColor = '#FFFFFF';

	document.getElementById('message').style.backgroundColor = '#FFFFFF';
	document.getElementById('message_label').style.backgroundColor = '#FFFFFF';
}

/*Fonction changement de langue*/

function Langue(){
	var couleur_fond = document.getElementById('box_langage_fond1').style.backgroundColor;

	if (couleur_fond  == "var(--hover)") {
		document.getElementById('box_langage_fond1').style.backgroundColor = "rgb(211,211,211)";
		document.getElementById('box_langage_fond2').style.backgroundColor = "rgb(211,211,211)";
		document.getElementById('box_langage_fond3').style.backgroundColor = "rgb(211,211,211)";
		document.getElementById("box_langage_round11").id = "box_langage_round1";
		document.getElementById("box_langage_round22").id = "box_langage_round2";
		document.getElementById("box_langage_round33").id = "box_langage_round3";

		document.getElementById("langage_img11").id = "langage_img1";
		document.getElementById("langage_img22").id = "langage_img2";
		document.getElementById("langage_img33").id = "langage_img3";
		document.getElementById("langage_img44").id = "langage_img4";
		document.getElementById("langage_img55").id = "langage_img5";
		document.getElementById("langage_img66").id = "langage_img6";
		document.getElementById("langage_img77").id = "langage_img7";
		document.getElementById("langage_img88").id = "langage_img8";
		document.getElementById("langage_img99").id = "langage_img9";

		setTimeout(Visibility(), 500);
	} else {
		document.getElementById('box_langage_fond1').style.backgroundColor = "var(--hover)";
		document.getElementById('box_langage_fond2').style.backgroundColor = "var(--hover)";
		document.getElementById('box_langage_fond3').style.backgroundColor = "var(--hover)";
		document.getElementById("box_langage_round1").id = "box_langage_round11";
		document.getElementById("box_langage_round2").id = "box_langage_round22";
		document.getElementById("box_langage_round3").id = "box_langage_round33";

		document.getElementById('langage_img1').style.visibility = "visible";
		document.getElementById('langage_img2').style.visibility = "visible";
		document.getElementById('langage_img3').style.visibility = "visible";
		document.getElementById('langage_img4').style.visibility = "visible";
		document.getElementById('langage_img5').style.visibility = "visible";
		document.getElementById('langage_img6').style.visibility = "visible";
		document.getElementById('langage_img7').style.visibility = "visible";
		document.getElementById('langage_img8').style.visibility = "visible";
		document.getElementById('langage_img9').style.visibility = "visible";

		document.getElementById("langage_img1").id = "langage_img11";
		document.getElementById("langage_img2").id = "langage_img22";
		document.getElementById("langage_img3").id = "langage_img33";
		document.getElementById("langage_img4").id = "langage_img44";
		document.getElementById("langage_img5").id = "langage_img55";
		document.getElementById("langage_img6").id = "langage_img66";
		document.getElementById("langage_img7").id = "langage_img77";
		document.getElementById("langage_img8").id = "langage_img88";
		document.getElementById("langage_img9").id = "langage_img99";
	}
}

function Visibility(){
	document.getElementById('langage_img1').style.visibility = "hidden";
	document.getElementById('langage_img2').style.visibility = "hidden";
	document.getElementById('langage_img3').style.visibility = "hidden";
	document.getElementById('langage_img4').style.visibility = "hidden";
	document.getElementById('langage_img5').style.visibility = "hidden";
	document.getElementById('langage_img6').style.visibility = "hidden";
	document.getElementById('langage_img7').style.visibility = "hidden";
	document.getElementById('langage_img8').style.visibility = "hidden";
	document.getElementById('langage_img9').style.visibility = "hidden";
}