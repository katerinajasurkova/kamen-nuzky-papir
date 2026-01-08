document.addEventListener('DOMContentLoaded', function () {

  var obr1 = document.getElementById('obr1');
  var obr2 = document.getElementById('obr2');
  var vitez1 = document.getElementById('vitez1');
  var vitez2 = document.getElementById('vitez2');

  var skoreHrac = document.getElementById('skoreHrac');
  var skorePc = document.getElementById('skorePc');

  var bodyHrac = 0;
  var bodyPc = 0;

  document.getElementById('kamen').onclick = function () { hraj(0); };
  document.getElementById('nuzky').onclick = function () { hraj(1); };
  document.getElementById('papir').onclick = function () { hraj(2); };
  document.getElementById('tapir').onclick = function () { hraj(3); };
  document.getElementById('spock').onclick = function () { hraj(4); };

  function hraj(hrac) {

    var pc = Math.floor(Math.random() * 5);

    obr1.src = hrac + ".png";
    obr2.src = pc + ".png";


    // remíza
    if (hrac === pc) {
      vitez1.innerHTML = "Remíza";
      vitez2.innerHTML = "Remíza";
    }

    // výhry hráče
    else if (
      (hrac === 0 && (pc === 1 || pc === 3)) ||
      (hrac === 1 && (pc === 2 || pc === 3)) ||
      (hrac === 2 && (pc === 0 || pc === 4)) ||
      (hrac === 3 && (pc === 2 || pc === 4)) ||
      (hrac === 4 && (pc === 0 || pc === 1))
    ) {
      vitez1.innerHTML = "Vyhrál";
      vitez2.innerHTML = "Prohrál";
      bodyHrac++;
    }

    // výhra počítače
    else {
      vitez1.innerHTML = "Prohrál";
      vitez2.innerHTML = "Vyhrál";
      bodyPc++;
    }

    skoreHrac.innerHTML = bodyHrac;
    skorePc.innerHTML = bodyPc;
  }
});