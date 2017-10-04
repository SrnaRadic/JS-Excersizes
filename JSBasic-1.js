  var today = new Date();
  var day = today.getDay();
  var daylist = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"];

  //console.log("Danas je " + daylist[day-1]);

  if (day==0) {
    document.getElementById("dan").innerHTML = ("Danas je " + daylist[day+6]);
  }

  else {
    document.getElementById("dan").innerHTML = ("Danas je " + daylist[day-1]);
  }

  var today3 = new Date();
  var day = today3.getDate();
  var month = today3.getMonth()+1;
  var year = today3.getFullYear();

  if (day<10) {
    day = "0" + day;
  }

  if (month<10) {
    month= "0" + month;
  }

  today3 = day + "." + month + "." + year;
  //console.log(today3);

  document.getElementById("datum").innerHTML = ("Datum je " + day + "." + month + "." + year);

  function time() {

    var today2 = new Date();
    var hour = today2.getHours();
    var minutes = today2.getMinutes();
    var seconds = today2.getSeconds();

    if (hour<10) {
  hour= "0" + hour;
}

    if (minutes<10) {
      minutes = "0" + minutes;
      }

    if (seconds<10) {
      seconds = "0" + seconds;
      }

      //  console.log("Sati je " +hour+ ":" +minutes+ ":" +seconds);

      document.getElementById("vreme").innerHTML = ("Sati je "+hour+ ":" +minutes+ ":" +seconds);
    }

    time();

    var loop = setInterval(time,1000);
