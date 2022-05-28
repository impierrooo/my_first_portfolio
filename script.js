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
	document.getElementById('page_créations').style.display = 'flex';
	document.getElementById('page_contact').style.display = 'none';
}

function Page_contact(){

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#0197ee");

	document.getElementById('page_introduction').style.display = 'none';	
	document.getElementById('page_créations').style.display = 'none';
	document.getElementById('page_contact').style.display = 'flex';
}

/*Système de traduction*/

function langage_france(){
	document.getElementById("sidebar_top_text2").innerHTML = "Contact";
	document.getElementById("sidebar_top_text3").innerHTML = "Créations";
	document.getElementById("sidebar_top_text4").innerHTML = "Introduction";

	document.getElementById("title_text0").innerHTML = "Je suis";
	document.getElementById("title_text1").innerHTML = "&nbsp;D";
	document.getElementById("title_text2").innerHTML = "é";
	document.getElementById("title_text3").innerHTML = "v";
	document.getElementById("title_text4").innerHTML = "e";
	document.getElementById("title_text5").innerHTML = "l";
	document.getElementById("title_text6").innerHTML = "o";
	document.getElementById("title_text7").innerHTML = "p";
	document.getElementById("title_text8").innerHTML = "p";
	document.getElementById("title_text9").innerHTML = "e";
	document.getElementById("title_text10").innerHTML = "u";
	document.getElementById("title_text11").innerHTML = "r";
	document.getElementById("title_text12").innerHTML = "&nbsp;W";
	document.getElementById("title_text13").innerHTML = "e";
	document.getElementById("title_text14").innerHTML = "b";

	document.getElementById("typing_slider_text1").innerHTML = "Je maîtrise le langage";

	document.getElementById("paragraphe").innerHTML = "La perfection du codage de site web !";
}

function langage_angleterre(){
	document.getElementById("sidebar_top_text2").innerHTML = "Contact";
	document.getElementById("sidebar_top_text3").innerHTML = "Créations";
	document.getElementById("sidebar_top_text4").innerHTML = "Introduction";

	document.getElementById("title_text0").innerHTML = "I'm a";
	document.getElementById("title_text1").innerHTML = "&nbsp;W";
	document.getElementById("title_text2").innerHTML = "e";
	document.getElementById("title_text3").innerHTML = "b";
	document.getElementById("title_text4").innerHTML = "&nbsp;";
	document.getElementById("title_text5").innerHTML = "D";
	document.getElementById("title_text6").innerHTML = "e";
	document.getElementById("title_text7").innerHTML = "v";
	document.getElementById("title_text8").innerHTML = "e";
	document.getElementById("title_text9").innerHTML = "l";
	document.getElementById("title_text10").innerHTML = "o";
	document.getElementById("title_text11").innerHTML = "p";
	document.getElementById("title_text12").innerHTML = "e";
	document.getElementById("title_text13").innerHTML = "r";
	document.getElementById("title_text14").innerHTML = "";

	document.getElementById("typing_slider_text1").innerHTML = "I'm fluent in language";

	document.getElementById("paragraphe").innerHTML = "The perfection of website coding!";
}

function langage_espagne(){
	document.getElementById("sidebar_top_text2").innerHTML = "Contactar";
	document.getElementById("sidebar_top_text3").innerHTML = "Creaciones";
	document.getElementById("sidebar_top_text4").innerHTML = "Introducción";

	document.getElementById("title_text0").innerHTML = "Soy un";
	document.getElementById("title_text1").innerHTML = "&nbsp;D";
	document.getElementById("title_text2").innerHTML = "e";
	document.getElementById("title_text3").innerHTML = "s";
	document.getElementById("title_text4").innerHTML = "a";
	document.getElementById("title_text5").innerHTML = "rr";
	document.getElementById("title_text6").innerHTML = "o";
	document.getElementById("title_text7").innerHTML = "ll";
	document.getElementById("title_text8").innerHTML = "a";
	document.getElementById("title_text9").innerHTML = "d";
	document.getElementById("title_text10").innerHTML = "o";
	document.getElementById("title_text11").innerHTML = "r";
	document.getElementById("title_text12").innerHTML = "&nbsp;W";
	document.getElementById("title_text13").innerHTML = "e";
	document.getElementById("title_text14").innerHTML = "b";

	document.getElementById("typing_slider_text1").innerHTML = "Yo domino el lenguaje";

	document.getElementById("paragraphe").innerHTML = "¡Perfección de codificación de sitios web!";
}

/*Fonction changement de création*/

function création1(){
	document.getElementById('box_créations_part1').src = 'création1.jpg';
	document.getElementById("box_créations_title").innerHTML = "Vue des buldings";

	document.getElementById("round_text1").style.color = "#e12645";
	document.getElementById("round_text2").style.color = "#3c0848";
	document.getElementById("round_text3").style.color = "#3c0848";
	document.getElementById("round_text4").style.color = "#3c0848";
}

function création2(){
	document.getElementById('box_créations_part1').src = 'création2.jpg';
	document.getElementById("box_créations_title").innerHTML = "Japon de l'intérieur";

	document.getElementById("round_text1").style.color = "#3c0848";
	document.getElementById("round_text2").style.color = "#e12645";
	document.getElementById("round_text3").style.color = "#3c0848";
	document.getElementById("round_text4").style.color = "#3c0848";
}

function création3(){
	document.getElementById('box_créations_part1').src = 'création3.jpg';
	document.getElementById("box_créations_title").innerHTML = "Ville sur la côte";

	document.getElementById("round_text1").style.color = "#3c0848";
	document.getElementById("round_text2").style.color = "#3c0848";
	document.getElementById("round_text3").style.color = "#e12645";
	document.getElementById("round_text4").style.color = "#3c0848";
}

function création4(){
	document.getElementById('box_créations_part1').src = 'création4.jpg';
	document.getElementById("box_créations_title").innerHTML = "Ville futuriste";

	document.getElementById("round_text1").style.color = "#3c0848";
	document.getElementById("round_text2").style.color = "#3c0848";
	document.getElementById("round_text3").style.color = "#3c0848";
	document.getElementById("round_text4").style.color = "#e12645";
}

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