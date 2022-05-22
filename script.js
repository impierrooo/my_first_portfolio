/*Fonction changement de page*/

function Page_introduction(){
	document.getElementById('index_body').style.background = "url(Fond1.jpg) no-repeat center fixed";

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#ff903e");

	document.getElementById('page_introduction').style.visibility = 'visible';	
	document.getElementById('page_créations').style.visibility = 'hidden';
	document.getElementById('page_contact').style.visibility = 'hidden';
}

function Page_créations(){
	document.getElementById('index_body').style.background = "url(Fond2.jpg) no-repeat center fixed";

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#e12645");

	document.getElementById('page_introduction').style.visibility = 'hidden';	
	document.getElementById('page_créations').style.visibility = 'visible';
	document.getElementById('page_contact').style.visibility = 'hidden';
}

function Page_contact(){
	document.getElementById('index_body').style.background = "url(Fond3.jpg) no-repeat center fixed";

	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#0197ee");

	document.getElementById('page_introduction').style.visibility = 'hidden';	
	document.getElementById('page_créations').style.visibility = 'hidden';
	document.getElementById('page_contact').style.visibility = 'visible';
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

	document.getElementById("paragraphe").innerHTML = "Aucune barrière n'est infranchissable !";
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

	document.getElementById("paragraphe").innerHTML = "No barrier is insurmountable !";
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

	document.getElementById("paragraphe").innerHTML = "¡Ninguna barrera es insuperable!";
}