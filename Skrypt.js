

function gaz(){
    let prysznicnaos = 10 * $('#showert').val();
    let osoby = (prysznicnaos + 50) * $('#lo').val();
    let zmywarka = 10 * $('#zmyd').val();
    let pralka = 60 * $('#prad').val();
    let lres = osoby + zmywarka + pralka;
    let kubik = lres / 1000
    let resd = Math.round((kubik * 10)).toString() + " Zł"
    let rest = Math.round((kubik * 10) * 7).toString() + " Zł"
    let resm = Math.round((kubik * 10) * 30).toString() + " Zł"
    let resr = Math.round((kubik * 10) * 365).toString() + " Zł"



    //var div = document.getElementById('dv');
    //div.innerHTML += "<li class = 'res'>" + res + "</li>";

    $("#sp").text("Dziennie: " + resd);
    $("#sp2").text("Tygodniowo: " + rest);
    $("#sp3").text("Miesięcznie: " + resm);
    $("#sp4").text("Rocznie: " + resr);
    return false;

}
