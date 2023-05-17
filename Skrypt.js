

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
    if(Math.round((kubik * 10) * 30) > 200) {
        $("#res").text("Zużywasz dużo wody! Staraj się zaoszczędzić więcej wody.");
    } else {
        $("#res").text("Brawo! Najpewniej starasz się zaoszczędzić wodę");
    }


   // var div = document.getElementById('dv');
    //div.innerHTML += "<div class = 'res'>" + res + "</div>";

    $("#sp").text("Dziennie: " + resd);
    $("#sp2").text("Tygodniowo: " + rest);
    $("#sp3").text("Miesięcznie: " + resm);
    $("#sp4").text("Rocznie: " + resr);
    return false;

}

