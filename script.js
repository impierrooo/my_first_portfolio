/*Fonction changement de page*/

function Page_introduction(){
	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#ff903e");

	document.getElementById('page_introduction').style.visibility = 'visible';	
	document.getElementById('page_créations').style.visibility = 'hidden';
	document.getElementById('page_contact').style.visibility = 'hidden';
}

function Page_créations(){
	root = document.documentElement;
	root.style.setProperty('--color',"#FFFFFF");

	root = document.documentElement;
	root.style.setProperty('--hover',"#e12645");

	document.getElementById('page_introduction').style.visibility = 'hidden';	
	document.getElementById('page_créations').style.visibility = 'visible';
	document.getElementById('page_contact').style.visibility = 'hidden';
}

function Page_contact(){
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

	document.getElementById("sidebar_top_text5").innerHTML = "Contact";
	document.getElementById("sidebar_top_text6").innerHTML = "Créations";
	document.getElementById("sidebar_top_text7").innerHTML = "Introduction";

	document.getElementById("sidebar_top_text8").innerHTML = "Contact";
	document.getElementById("sidebar_top_text9").innerHTML = "Créations";
	document.getElementById("sidebar_top_text10").innerHTML = "Introduction";

	document.getElementById("title_text1").innerHTML = "Je suis";
	document.getElementById("title_text2").innerHTML = "&nbsp;D";
	document.getElementById("title_text3").innerHTML = "é";
	document.getElementById("title_text4").innerHTML = "v";
	document.getElementById("title_text5").innerHTML = "e";
	document.getElementById("title_text6").innerHTML = "l";
	document.getElementById("title_text7").innerHTML = "o";
	document.getElementById("title_text8").innerHTML = "p";
	document.getElementById("title_text9").innerHTML = "p";
	document.getElementById("title_text10").innerHTML = "e";
	document.getElementById("title_text11").innerHTML = "u";
	document.getElementById("title_text12").innerHTML = "r";
	document.getElementById("title_text13").innerHTML = "&nbsp;W";
	document.getElementById("title_text14").innerHTML = "e";
	document.getElementById("title_text15").innerHTML = "b";

	document.getElementById("paragraphe_text1").innerHTML = "Aucune barrière n'est infranchissable !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

	document.getElementById("typing_slider_text1").innerHTML = "Je maîtrise le langage";
}

function langage_angleterre(){
	document.getElementById("sidebar_top_text2").innerHTML = "Contact";
	document.getElementById("sidebar_top_text3").innerHTML = "Créations";
	document.getElementById("sidebar_top_text4").innerHTML = "Introduction";

	document.getElementById("sidebar_top_text5").innerHTML = "Contact";
	document.getElementById("sidebar_top_text6").innerHTML = "Créations";
	document.getElementById("sidebar_top_text7").innerHTML = "Introduction";

	document.getElementById("sidebar_top_text8").innerHTML = "Contact";
	document.getElementById("sidebar_top_text9").innerHTML = "Créations";
	document.getElementById("sidebar_top_text10").innerHTML = "Introduction";

	document.getElementById("title_text1").innerHTML = "I am a";
	document.getElementById("title_text2").innerHTML = "&nbsp;W";
	document.getElementById("title_text3").innerHTML = "e";
	document.getElementById("title_text4").innerHTML = "b";
	document.getElementById("title_text5").innerHTML = "&nbsp;";
	document.getElementById("title_text6").innerHTML = "D";
	document.getElementById("title_text7").innerHTML = "e";
	document.getElementById("title_text8").innerHTML = "v";
	document.getElementById("title_text9").innerHTML = "e";
	document.getElementById("title_text10").innerHTML = "l";
	document.getElementById("title_text11").innerHTML = "o";
	document.getElementById("title_text12").innerHTML = "p";
	document.getElementById("title_text13").innerHTML = "e";
	document.getElementById("title_text14").innerHTML = "r";
	document.getElementById("title_text15").innerHTML = "";

	document.getElementById("paragraphe_text1").innerHTML = "No barrier is insurmountable !&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

	document.getElementById("typing_slider_text1").innerHTML = "I'm fluent in language";
}

function langage_espagne(){
	document.getElementById("sidebar_top_text2").innerHTML = "Contactar";
	document.getElementById("sidebar_top_text3").innerHTML = "Creaciones";
	document.getElementById("sidebar_top_text4").innerHTML = "Introducción";

	document.getElementById("sidebar_top_text5").innerHTML = "Contactar";
	document.getElementById("sidebar_top_text6").innerHTML = "Creaciones";
	document.getElementById("sidebar_top_text7").innerHTML = "Introducción";

	document.getElementById("sidebar_top_text8").innerHTML = "Contactar";
	document.getElementById("sidebar_top_text9").innerHTML = "Creaciones";
	document.getElementById("sidebar_top_text10").innerHTML = "Introducción";

	document.getElementById("title_text1").innerHTML = "Soy un";
	document.getElementById("title_text2").innerHTML = "&nbsp;D";
	document.getElementById("title_text3").innerHTML = "e";
	document.getElementById("title_text4").innerHTML = "s";
	document.getElementById("title_text5").innerHTML = "a";
	document.getElementById("title_text6").innerHTML = "rr";
	document.getElementById("title_text7").innerHTML = "o";
	document.getElementById("title_text8").innerHTML = "ll";
	document.getElementById("title_text9").innerHTML = "a";
	document.getElementById("title_text10").innerHTML = "d";
	document.getElementById("title_text11").innerHTML = "o";
	document.getElementById("title_text12").innerHTML = "r";
	document.getElementById("title_text13").innerHTML = "&nbsp;W";
	document.getElementById("title_text14").innerHTML = "e";
	document.getElementById("title_text15").innerHTML = "b";

	document.getElementById("paragraphe_text1").innerHTML = "¡Ninguna barrera es insuperable!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

	document.getElementById("typing_slider_text1").innerHTML = "Yo domino el lenguaje";
}