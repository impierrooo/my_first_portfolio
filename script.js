function Page_introduction(){
	document.getElementById('page_introduction').style.visibility = 'visible';
	document.getElementById('page_créations').style.visibility = 'hidden';
	document.getElementById('page_contact').style.visibility = 'hidden';
	window.scrollTo(0,0);
}

function Page_créations(){
	document.getElementById('page_introduction').style.visibility = 'hidden';
	document.getElementById('page_créations').style.visibility = 'visible';
	document.getElementById('page_contact').style.visibility = 'hidden';
	window.scrollTo(0,0);
}

function Page_contact(){
	document.getElementById('page_introduction').style.visibility = 'hidden';
	document.getElementById('page_créations').style.visibility = 'hidden';
	document.getElementById('page_contact').style.visibility = 'visible';
	window.scrollTo(0,0);
}