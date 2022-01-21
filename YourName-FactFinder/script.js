document.querySelector('#menu').a.addEventListener("click",fact1);

document.querySelector('#menu').b.addEventListener("click",fact2);


document.querySelector('#menu').c.addEventListener("click",fact3);


document.querySelector('#menu').d.addEventListener("click",fact4);


document.querySelector('#menu').e.addEventListener("click",fact5);

function palp(){
	document.querySelector('body').style.backgroundImage = "url('images/palpatine.gif')";	
}

function fact1(){
	document.querySelector('#facts').innerHTML = "The number 349 almost cost Pepsi 32 Billion dollars and destroyed their reputation in the Phillapines.";
	document.querySelector('#image').style.backgroundImage = "url('images/349.jpg')";
	document.querySelector('#image').style.backgroundSize= "1000px";
}

function fact2(){
	document.querySelector('#facts').innerHTML = "An estimated 10.5% and a diagnosed 8.2% of people in the US have diabetes.";
	document.querySelector('#image').style.backgroundImage = "url('images/fatPerson.png')";	
	document.querySelector('#image').style.backgroundSize= "700px";
}

function fact3(){
	document.querySelector('#facts').innerHTML = "The Chinese One Child Policy will have irreverible effects on the Chinese population, resulting in a greatly reduced labor force in the future, and more older people than young.";
	document.querySelector('#image').style.backgroundImage = "url('images/oneChildPolicy.png')";	
	document.querySelector('#image').style.backgroundSize= "1300px";
}

function fact4(){
	document.querySelector('#facts').innerHTML = "The most common name in the world is Muhammad.";
	document.querySelector('#image').style.backgroundImage = "url('images/asok.jpg')";	
	document.querySelector('#image').style.backgroundSize= "1200px";
}

function fact5(){
	document.querySelector('#facts').innerHTML = "Israeli Iron Dome missile interception missiles cost $100,000 - $150,000 to manufactor, while the Hamas short range missiles used to fire at Israel cost nearly $300-800.";
	document.querySelector('#image').style.backgroundImage = "url('images/ironDome.jpg')";	
	document.querySelector('#facts').style.backgroundSize= "500px";
}

function darkMode(){
	document.querySelector('body').style.backgroundColor = "#2C2F33";
	document.querySelector('body').style.backgroundImage = '';
	document.querySelector('#facts').style.backgroundColor = "#C0C0C0";
	document.querySelector('#image').style.backgroundColor = "#C0C0C0";
}

function lightMode(){
	document.querySelector('body').style.backgroundColor = "beige";
	document.querySelector('body').style.backgroundImage = '';
	document.querySelector('#facts').style.backgroundColor = "#FFFFFF";
	document.querySelector('#image').style.backgroundColor = "#FFFFFF";
}

