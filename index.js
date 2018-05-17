var days=15;

function assign(val)
{
	days = val;
};

function success()
{
	var pr = document.querySelector(".jumbotron");
	pr.style.display = "none";
	var p = document.querySelector("#id1");
	p.innerHTML = document.querySelector("#name").value;
	p = document.querySelector("#id2");
	p.innerHTML = document.querySelector("#rollno").value;
	p = document.querySelector("#id3");
	p.innerHTML = document.querySelector("#webmail").value;
	p = document.querySelector("#id4");
	p.innerHTML = document.querySelector("#hostelres").options[document.querySelector("#hostelres").selectedIndex].text;
	p = document.querySelector("#id5");
	p.innerHTML = document.querySelector("#room").value;
	p = document.querySelector("#id6");
	p.innerHTML = document.querySelector("#hostelsub").options[document.querySelector("#hostelsub").selectedIndex].text;
	p = document.querySelector("#id7");
	p.innerHTML = document.querySelector("#dol").value;
	p = document.querySelector("#id8");
	p.innerHTML = days + " days";
	p = document.querySelector("#id9");
	p.innerHTML = document.querySelector("#proof").value;
	var pr1 = document.querySelector("#tablediv");
	pr1.style.display = "";
	var pr2 = document.getElementById("refundmoney").innerHTML = "Total refund money = Rs " + days*72 + "/-";
};