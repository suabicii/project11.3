function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}
Telefon.prototype.RateModel = function() {
	if (this.marka == "Samsung") {
		console.log("Telefon " + this.marka + " jest fajny");
	} else {
		console.log("Telefon " + this.marka + " jest słaby");
	}
}

var SamsungGalaxyS6 = new Telefon("Samsung", 1550, "czarny");
var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var OnePlusOne = new Telefon("OnePlus", 1050, "czarny");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

SamsungGalaxyS6.RateModel();
iPhone6S.RateModel();
OnePlusOne.RateModel();