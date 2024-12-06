window.addEventListener("load", addlistener);
var gunattachment = null, maxprice = null, selectedgun = null, gundescription = null;
function addlistener() {
	document.getElementById("btnyesattach").addEventListener("click", yesattach);
	document.getElementById("btnnoattach").addEventListener("click", noattach);
	document.getElementById("btnshot").addEventListener("click", shotgun);
	document.getElementById("btnsnip").addEventListener("click", sniper);
	document.getElementById("btnar").addEventListener("click", assaultrifle);
	document.getElementById("btnsmg").addEventListener("click", smg);
	document.getElementById("btnlmg").addEventListener("click", lmg);
	document.getElementById("btngenerate").addEventListener("click", generate);
}
function yesattach() {
	document.getElementById("btnyesattach").name = "selected";
	document.getElementById("btnnoattach").name = "unselected";
	gunattachment = true
}
function noattach() {
	document.getElementById("btnnoattach").name = "selected";
	document.getElementById("btnyesattach").name = "unselected";
	gunattachment = false
}
function shotgun() {
	document.getElementById("lbldropselect").textContent = "Shotgun";
}
function sniper() {
	document.getElementById("lbldropselect").textContent = "Sniper";
}
function assaultrifle() {
	document.getElementById("lbldropselect").textContent = "Assault Rifle";
}
function smg() {
	document.getElementById("lbldropselect").textContent = "Submachine Gun";
}
function lmg() {
	document.getElementById("lbldropselect").textContent = "Light Machine Gun";
}
function generate() {
	var guntype = document.getElementById("lbldropselect").textContent;
	maxprice = parseFloat(document.getElementById("txtmaxprice").value);
	switch (true) {
		case (isNaN(maxprice) || parseFloat(maxprice) < 1 || maxprice == ""):
			alert("Enter a valid price");
			document.getElementById("txtmaxprice").value = null;
			document.getElementById("txtmaxprice").focus();
			break;
		case (guntype == ". . ."):
			alert("Select a gun type");
			break;
		case (gunattachment == null):
			alert("Select yes/no for attachment");
			break;
		default:
			if (gunattachment) {
				maxprice -= 400
			}
			switch (guntype) {
				case "Shotgun":
					switch (true) {
						case (maxprice >= 2000):
							selectedgun = "Benelli M4";
							gundescription = "The Benelli M4 is a semi-automatic shotgun known for its reliability, high accuracy, and tactical versatility, often used by military and law enforcement.";
							break;
						case (maxprice >= 1000):
							selectedgun = "Browning BPS";
							gundescription = "The Browning BPS is a pump-action shotgun with a solid design, known for its smooth operation and durability.";
							break;
						case (maxprice >= 750):
							selectedgun = "Remington 870";
							gundescription = "The Remington 870 is a versatile pump-action shotgun favored by hunters and tactical shooters for its reliability and ease of customization.";
							break;
						case (maxprice >= 500):
							selectedgun = "Mossberg 500";
							gundescription = "The Mossberg 500 is a popular pump-action shotgun known for its rugged construction and affordability, often used for home defense.";
							break;
						case (maxprice >= 400):
							selectedgun = "Winchester SXP";
							gundescription = "The Winchester SXP is a pump-action shotgun recognized for its fast cycling speed and solid construction, suitable for both hunting and sport shooting.";
							break;
						default:
							selectedgun = null;
							break;
					}
					break;
				case "Sniper":
					switch (true) {
						case (maxprice >= 15000):
							selectedgun = "CheyTac M200 Intervention";
							gundescription = "The CheyTac M200 Intervention is a long-range, precision bolt-action sniper rifle known for its extreme accuracy and use by military snipers.";
							break;
						case (maxprice >= 12000):
							selectedgun = "Barrett M82 (M107)";
							gundescription = "The Barrett M82 (M107) is a semi-automatic, anti-material sniper rifle chambered in .50 BMG, known for its power and long-range capabilities.";
							break;
						case (maxprice >= 10000):
							selectedgun = "Accuracy International AXMC";
							gundescription = "The Accuracy International AXMC is a modular bolt-action sniper rifle praised for its exceptional accuracy and adaptability in various calibers.";
							break;
						case (maxprice >= 7000):
							selectedgun = "Steyr HS .50";
							gundescription = "The Steyr HS .50 is a precision, bolt-action anti-material rifle that delivers high accuracy and is chambered in the powerful .50 BMG.";
							break;
						case (maxprice >= 2000):
							selectedgun = "Remington 700 PSS";
							gundescription = "The Remington 700 PSS is a popular bolt-action sniper rifle known for its reliability and precision, commonly used for tactical and law enforcement purposes.";
							break;
						default:
							selectedgun = null;
							break;
					}
					break;
				case "Assault Rifle":
					switch (true) {
						case (maxprice >= 2500):
							selectedgun = "Koch HK416";
							gundescription = "The Koch HK416 is a high-performance, modular assault rifle that offers exceptional reliability and is used by special forces around the world.";
							break;
						case (maxprice >= 1500):
							selectedgun = "FN SCAR 16S";
							gundescription = "The FN SCAR 16S is an advanced, modular, and versatile assault rifle designed for military use, known for its accuracy and adaptability.";
							break;
						case (maxprice >= 1200):
							selectedgun = "Steyr AUG";
							gundescription = "The Steyr AUG is an iconic bullpup assault rifle known for its compact design and high accuracy, favored by military forces globally.";
							break;
						case (maxprice >= 1000):
							selectedgun = "Colt M4 Carbine";
							gundescription = "The Colt M4 Carbine is a standard-issue, lightweight assault rifle known for its reliability, high rate of fire, and versatility in combat.";
							break;
						case (maxprice >= 300):
							selectedgun = "AK-47 (Classic Model)";
							gundescription = "The AK-47 is a legendary, reliable, and powerful assault rifle with a simple design, known for its ruggedness and use worldwide.";
							break;
						default:
							selectedgun = null;
							break;
					}
					break;
				case "Submachine Gun":
					switch (true) {
						case (maxprice >= 2500):
							selectedgun = "FN PS90";
							gundescription = "The FN PS90 is a compact, high-capacity submachine gun with a unique bullpup design, chambered in 5.7x28mm for high velocity and low recoil.";
							break;
						case (maxprice >= 2200):
							selectedgun = "MP7 (Heckler & Koch)";
							gundescription = "The MP7 is a compact submachine gun known for its exceptional firepower and high velocity, chambered in 4.6x30mm.";
							break;
						case (maxprice >= 2000):
							selectedgun = "FN P90";
							gundescription = "The FN P90 is a highly regarded, compact submachine gun with a high-capacity magazine and unique design, chambered in 5.7x28mm.";
							break;
						case (maxprice >= 1500):
							selectedgun = "Uzi Pro";
							gundescription = "The Uzi Pro is an updated version of the classic Uzi submachine gun, known for its compact design and reliability in close quarters combat.";
							break;
						case (maxprice >= 1200):
							selectedgun = "Beretta CX4 Storm";
							gundescription = "The Beretta CX4 Storm is a semi-automatic carbine/submachine gun known for its modular design and compatibility with various Beretta pistols.";
							break;
						default:
							selectedgun = null;
							break;
					}
					break;
				case "Light Machine Gun":
					switch (true) {
						case (maxprice >= 4000):
							selectedgun = "M249 SAW";
							gundescription = "The M249 SAW is a light machine gun designed for squad-level support, known for its high rate of fire and reliability in combat.";
							break;
						case (maxprice >= 3500):
							selectedgun = "FN Minimi";
							gundescription = "The FN Minimi is a lightweight, belt-fed light machine gun, known for its mobility and use in infantry support roles.";
							break;
						case (maxprice >= 3000):
							selectedgun = "M60 Machine Gun";
							gundescription = "The M60 is a belt-fed, gas-operated light machine gun used for sustained fire support, known for its powerful performance.";
							break;
						case (maxprice >= 2500):
							selectedgun = "MG42";
							gundescription = "The MG42 is a German-made, belt-fed machine gun known for its high rate of fire and reliability during World War II.";
			                break;
			            case (maxprice >= 2000):
							selectedgun = "RPK";
							gundescription = "The RPK is a light machine gun based on the AK-47 design, known for its reliability and use as a support weapon in infantry squads.";
			                break;
						default:
							selectedgun = null;
							break;
					}
					break;
			}
			if (selectedgun == null) {
				var text = "No " + guntype + " found around that price";
				document.getElementById("divdecisionoutput").style.display = "block";
				document.getElementById("lbldecisionoutput").textContent = text;
			} else {
				var text = "||| " + selectedgun + " |||" + "<br>" + gundescription
				document.getElementById("divdecisionoutput").style.display = "block";
				document.getElementById("lbldecisionoutput").innerHTML = text;
			}
			if (gunattachment && selectedgun != null) {
				document.getElementById("divgunattachment").style.display = "block";
			} else {
				document.getElementById("divgunattachment").style.display = "none";
			}
			break;
	}
}
