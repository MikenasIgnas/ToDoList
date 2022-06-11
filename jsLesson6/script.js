//Masyvo kurimas

const studentai = ["jonas", "petras", "ona"];

//masyvo nariu pasiekimas

console.log(studentai[0]);
console.log(studentai[1]);
console.log(studentai[2]);

//iteracijos(loopina) per masyva
console.log("----------------------------");
for (let i = 0; i < studentai.length; i++) {
  console.log("For ciklas:" + " " + studentai[i]);
}
console.log("----------------------------");
studentai.map((student) => {
  console.log("map Ciklas:" + " " + student);
});

console.log("----------------------------");
//for of ciklas

for (let student of studentai) {
  console.log("for of ciklas:" + " " + student);
}

console.log("-----------------------------");
// vardas pavarde amzius grupe miestas

//objektai

let studentObj = {
  vardas: "Jonas", //property key: value
  "antras vardas": "petras",
  pavarde: "Jonaitis",
  amzius: 25,
  grupe: "type25",
  miestas: "Vilnius",
  gautiPilnaVarda: function () {
    return `${this.vardas} ${this["antras vardas"]} ${this.pavarde}`;
  },
  makeActive() {
    this.aktyvus = true;
  },
  makeStudentInactive() {
    this.aktyvus = false;
  },
  perjungtiAktyvuma() {
    if (this.aktyvus) {
      this.aktyvus = false;
    } else {
      this.aktyvus = true;
    }
  },
  pridetiHobi(hobis) {
    console.log(this.hobiai);
    this.hobiai.push(hobis);
  },
};
console.log(studentObj.gautiPilnaVarda());
console.log(studentObj);

//Objekto property pasiekimas

console.log(studentObj["vardas"]);
console.log(studentObj.vardas);
console.log(studentObj.pavarde);
console.log(studentObj.grupe);
console.log(studentObj["antras vardas"]);

//Objekto property keitimas

console.log(studentObj.amzius);
studentObj.amzius = 26;
console.log(studentObj.amzius);

studentObj["miestas"] = "Kaunas";
console.log(studentObj["miestas"]);

//Objekto property sukurimas

studentObj.stipendija = 1000;
console.log(studentObj.stipendija);
studentObj.aktyvus = true;
console.log(studentObj.aktyvus);

studentObj["gimtasis miestas"] = "Klaipeda";
console.log(studentObj["gimtasis miestas"]);

delete studentObj.stipendija;
console.log(studentObj.stipendija);

let studentoHobiai = ["begimas", "krepsinins", "skaitymas"];
studentObj.hobiai = studentoHobiai;
console.log("-----------------------------------");
console.log(studentObj.hobiai[0]);
console.log(studentObj.hobiai[1]);
console.log(studentObj.hobiai[2]);
console.log("-----------------------------------");
studentObj.hobiai.push("yoga");
studentObj.hobiai.map((hobis) => console.log("map:" + hobis));
console.log("---------------------------------------------");
//Sukurti objekta objekte
/////Pirmas
let studenAdress = {
  miestas: "Vilnius",
  gatve: "Vilniaus g",
  namoNumer: 15,
  butoNumer: 10,
};
studentObj.adresas = studenAdress;
console.log(studentObj);
/////Antras
studentObj.studenAdress = {
  miestas: "Vilnius",
  gatve: "Vilniaus g",
  namoNumer: 15,
  butoNumer: 10,
};
console.log(studentObj);
/////Trecias
studentObj.adresas = new Object();

studentObj.adresas = {};
studentObj.adresas.miestas = "Vilnius";
studentObj.adresas.gatve = "Vilniaus g";
studentObj.adresas.namoNumeris = 15;
studentObj.adresas.butoNumeris = 10;
console.log(studentObj);

//Iteracijos (loopai) per objekta
let studentObj2 = {
  vardas: "Jonas", //property key: value
  "antras vardas": "petras",
  pavarde: "Jonaitis",
  amzius: 25,
  grupe: "type25",
  miestas: "Vilnius",
};

for (let key in studentObj2) {
  //   console.log(key);
  //   console.log(studentObj2[key]);
  let value = studentObj2[key];
  console.log(key + ":" + value);
}

let company1 = new Object();
company1.companyName = "UAB";
company1.opened = 2000;
company1.code = 111111;
company1.employees = 20;
company1.ceo = "Jonas Jonaukas";
company1.nvo = true;
company1.workingLocations = ["Lithuania", "Usa"];
company1.activityAreas = ["Cyber security", "Web design"];
company1.contacts = new Object();
company1.contacts.phone = +370370370370;
company1.contacts.email = "companyName@gmail.com";
company1.contacts.adress = new Object();
company1.contacts.adress.country = "Lithuania";
company1.contacts.adress.city = "Vilnnius";
company1.contacts.adress.street = "Vilniaus st";
company1.contacts.adress.apartament = 26;
company1.subsidiary = [];
console.log(company1);

let company2 = {
  companyName: "pow pow",
  opened: 2001,
  code: 22222,
  employees: 15,
  ceo: "Petras Petraukas",
  nvo: true,
  workingLocations: ["Latvia", "Lithuania"],
  activityAreas: ["customer support", "data storage"],
  contacts: {
    phone: +37770000,
    email: "email@gmail.com",
    adresas: {
      country: "Latvia",
      city: "Riga",
      street: "Riga st",
      apartament: 20,
    },
  },
};
company1.subsidiary.push(company2);
console.log(company1);

studentObj.makeActive();
console.log(studentObj.aktyvus);

studentObj.makeStudentInactive();
console.log(studentObj.aktyvus);

studentObj.perjungtiAktyvuma();
console.log(studentObj.aktyvus);

studentObj.pridetiHobi("tapyba");
console.log(studentObj.hobiai);

studentObj.pasalintiHobi = function (hobis) {
  console.log(this.hobiai);

  let naujiHobiai = this.hobiai.filter((senasHobis) => hobis !== senasHobis);
  console.log(naujiHobiai);
  this.hobiai = naujiHobiai;
};
console.log(studentObj.hobiai);
studentObj.pasalintiHobi("yoga");
console.log(studentObj.hobiai);

company2.stringFunc = function () {
  adress = this.contacts.adresas;
  adress.join(" ");
  console.log(adress);
};
company2.stringFunc();

company2.nvoFunction = function () {
  console.log((this.nvo = true));
};
company2.nvoFunction();

company1.nvoFunction = function () {
  console.log((this.nvo = false));
};
company1.nvoFunction();
