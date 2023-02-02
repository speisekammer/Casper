(function (window, document) {
  let rangePerson = document.getElementById("range-person");
  let rangeWochen = document.getElementById("range-wochen");
  let anzahlPersonen = document.getElementById("anzahl-personen");
  let anzahlWochen = document.getElementById("anzahl-Wochen");
  let ergebnisWochen = document.getElementById("ergebnis-wochen");
  let ergebnisPersonen = document.getElementById("ergebnis-personen");
  let vollkornbrot =  document.getElementById("vollkornbrot");
  let zwieback =  document.getElementById("zwieback");
  let nudeln =  document.getElementById("nudeln");
  let kartoffeln =  document.getElementById("kartoffeln");
  let kalorienTotal =  document.getElementById("kalorien-total");
  let rotKohl= document.getElementById("rotkohl");
  let sauerKraut = document.getElementById("sauerkraut");
  let zwiebeln = document.getElementById("zwiebeln");
  let erbsen = document.getElementById("erbsen");
  let birnen = document.getElementById("birnen");
  let kirschen = document.getElementById("kirschen");
  let aprikosen = document.getElementById("aprikosen");
  let haselNusskerne = document.getElementById("haselnusskerne");
  let thunfisch = document.getElementById("thunfisch");
  let eier = document.getElementById("eier");
  let salami = document.getElementById("salami");
  let wurst = document.getElementById("wurst");
  let gemuese = document.getElementById("gemuese");
  let getreide=  document.getElementById("getreide");
  let fleisch = document.querySelector("#fleisch");
  let wasser = document.getElementById("wasser");
  let zitronenSaft = document.getElementById("zitronensaft");
  let milch = document.getElementById("milch");
  let getraenke = document.getElementById("getraenke");
  let zuGetreide=  document.getElementById("zugetreide");
  let zuObst=  document.getElementById("zuobst");
  let zuFleisch=  document.getElementById("zufleisch");
  let prozentGetreide=  document.getElementById("prozentgetreide");
  let prozentObst=  document.getElementById("prozentobst");
  let prozentFleisch=  document.getElementById("prozentfleisch");
  let vorratPro = document.getElementById("vorratpro");
  let wave = document.getElementById("wave");
  anzahlWochen.innerHTML=rangeWochen.value;
  anzahlPersonen.innerHTML=rangePerson.value;
  prozentGetreide.innerHTML=zuGetreide.value;
  prozentObst.innerHTML= zuObst.value;
  prozentFleisch.innerHTML = zuFleisch.value;
  vorratPro.innerHTML= Number(zuFleisch.value) + Number(zuObst.value) + Number(zuGetreide.value);
  
  function kalorien () {
      kalorienTotal.innerHTML = 2200 * rangePerson.value * (rangeWochen.value*7);
      let getreideKal= (kalorienTotal.innerHTML * (zuGetreide.value/100))/4;
      let obstKal = (kalorienTotal.innerHTML * (zuObst.value/100))/8;
      let fleischKal = (kalorienTotal.innerHTML * (zuFleisch.value/100))/4;
      getraenke.innerHTML = 2 * rangePerson.value * (rangeWochen.value*7);
      wasser.innerHTML = 1.5 * rangePerson.value * (rangeWochen.value*7);
      milch.innerHTML = 0.25 * rangePerson.value * (rangeWochen.value*7);
      zitronenSaft.innerHTML = 0.25 * rangePerson.value * (rangeWochen.value*7);
     vollkornbrot.innerHTML =Math.round((getreideKal /1980)*100)/100;
     zwieback.innerHTML =Math.round((getreideKal /3750)*100)/100;
     nudeln.innerHTML =Math.round((getreideKal /3620)*100)/100;
     kartoffeln.innerHTML =Math.round((getreideKal /730)*100)/100;
     getreide.innerHTML = Math.round((Number(vollkornbrot.innerHTML)+ Number(zwieback.innerHTML) + Number(nudeln.innerHTML) + Number(kartoffeln.innerHTML))*10)/10;
     thunfisch.innerHTML =Math.round((fleischKal /1000)*100)/100;
     eier.innerHTML =Math.round((fleischKal /1370)*100)/100;
     salami.innerHTML =Math.round((fleischKal /3750)*100)/100;
     wurst.innerHTML =Math.round((fleischKal /2670)*100)/100;
     fleisch.innerHTML = Math.round((Number(thunfisch.innerHTML)+ Number(eier.innerHTML) + Number(salami.innerHTML) + Number(wurst.innerHTML))*10)/10;
     rotKohl.innerHTML =Math.round((obstKal /190)*100)/100;
     sauerKraut.innerHTML =Math.round((obstKal /160)*100)/100;
     zwiebeln.innerHTML =Math.round((obstKal /280)*100)/100;
     erbsen.innerHTML =Math.round((obstKal /480)*100)/100;
     birnen.innerHTML =Math.round((obstKal /640)*100)/100;
     kirschen.innerHTML =Math.round((obstKal /860)*100)/100;
     aprikosen.innerHTML =Math.round((obstKal /680)*100)/100;
     haselNusskerne.innerHTML =Math.round((obstKal /6500)*100)/100;
     gemuese.innerHTML = Math.round((Number(rotKohl.innerHTML)+ Number(sauerKraut.innerHTML) + Number(zwiebeln.innerHTML) + Number(erbsen.innerHTML)+ Number(birnen.innerHTML)+ Number(kirschen.innerHTML)+ Number(aprikosen.innerHTML)+ Number(haselNusskerne.innerHTML) )*10)/10;
    wave.style.height=250 - vorratPro.innerHTML *2.25 + "px";
     
  
  
  } 
  kalorien();
  
  rangePerson.oninput = () => {
      anzahlPersonen.innerHTML = rangePerson.value;
      ergebnisPersonen.innerHTML =  rangePerson.value;
      prozentGetreide.innerHTML=zuGetreide.value;
      prozentObst.innerHTML= zuObst.value;
  prozentFleisch.innerHTML = zuFleisch.value;
  vorratPro.innerHTML= Number(zuFleisch.value) + Number(zuObst.value) + Number(zuGetreide.value);
      kalorien ();
  }
  rangeWochen.oninput = () => {
      anzahlWochen.innerHTML= rangeWochen.value;
      ergebnisWochen.innerHTML = rangeWochen.value;
      prozentGetreide.innerHTML=zuGetreide.value;
      prozentObst.innerHTML= zuObst.value;
      prozentFleisch.innerHTML = zuFleisch.value;
      vorratPro.innerHTML= Number(zuFleisch.value) + Number(zuObst.value) + Number(zuGetreide.value);
      kalorien ();
  }
  zuGetreide.oninput = () =>{
      anzahlWochen.innerHTML= rangeWochen.value;
      ergebnisWochen.innerHTML = rangeWochen.value;
      prozentGetreide.innerHTML=zuGetreide.value;
      prozentObst.innerHTML= zuObst.value;
      prozentFleisch.innerHTML = zuFleisch.value;
      vorratPro.innerHTML= Number(zuFleisch.value) + Number(zuObst.value) + Number(zuGetreide.value);
      kalorien ();
     
  }
  zuObst.oninput = () =>{
      anzahlWochen.innerHTML= rangeWochen.value;
      ergebnisWochen.innerHTML = rangeWochen.value;
      prozentGetreide.innerHTML=zuGetreide.value;
      prozentObst.innerHTML= zuObst.value;
      prozentFleisch.innerHTML = zuFleisch.value;
      vorratPro.innerHTML= Number(zuFleisch.value) + Number(zuObst.value) + Number(zuGetreide.value);
      kalorien ()
  }
  zuFleisch.oninput = () =>{
      anzahlWochen.innerHTML= rangeWochen.value;
      ergebnisWochen.innerHTML = rangeWochen.value;
      prozentGetreide.innerHTML=zuGetreide.value;
      prozentObst.innerHTML= zuObst.value;
      prozentFleisch.innerHTML = zuFleisch.value;
      vorratPro.innerHTML= Number(zuFleisch.value) + Number(zuObst.value) + Number(zuGetreide.value);
      kalorien ()
  }
})(window, document);