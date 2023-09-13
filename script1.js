
function callfun() {

    let morning = document.getElementById('morning');
    let afternoon = document.getElementById('afternoon');
    let evining = document.getElementById('evining');
    let night = document.getElementById('night');

    let wake = morning.options[document.getElementById('morning').selectedIndex];
    let lunch = afternoon.options[document.getElementById('afternoon').selectedIndex];
    let nap = evining.options[document.getElementById('evining').selectedIndex];
    let sleep = night.options[document.getElementById('night').selectedIndex];


    let wk = document.getElementById('wk');
        cont1.innerText = `wake up time :  ${wake.text}`;
        cont2.innerText = `lunch time   : ${lunch.text}`;
        cont3.innerText = `nap time     : ${nap.text}`;
        cont4.innerText = `nigth time   : ${sleep.text}`;

        var date = new Date();
        var hrs = date.getHours();


    let Good_Wishes = document.getElementById('Good_Wishes');
    let Wishes = document.getElementById('wishes');
    let text = document.getElementById('text');
    let timingfonction = document.getElementById('timingfonction');

    let alarm = document.getElementById('alarm-set');
    let img = document.querySelector('#img');
    // img.setAttribute('class',"jsimg")
    
        if (hrs === parseInt(morning.value)) {
            document.getElementById('wishes').innerHTML = " GOOD MORNING ...!";
            img.src = "gir.svg";
            console.log("mo");
        } else if (hrs === parseInt(afternoon.value)) {
            document.getElementById('wishes').innerHTML = " GOOD AFTERNOON ...!";
            img.src = "clunchImg.png";
        } else if (hrs === parseInt(evining.value)) {
            document.getElementById('wishes').innerHTML = " GOOD EVINING ...!";
            img.src = "AftarnoonImg.png";

        } else if (hrs === parseInt(night.value)) {
            document.getElementById('wishes').innerHTML = " GOOD NIGHT ...!";
            img.src = "sleeping time.jpg";
        }
        // else{
        //     console.log(" the value");
        //     document.getElementById('wishes').innerHTML = "GOOD MORNING!! WAKE UP!!";
        //     img.src = "sleeping time.jpg";
        // //  alert("Time is Not Set !!");
        //   }

        
      }
      setInterval(clock, 1000)

function clock() {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secn = date.getSeconds();
    var sese = "";
    var time = `${hrs} : ${mins} : ${secn} : ${sese}`;
    // time.classList.add("mystyle");
   
    let cont1 = document.getElementById('cont1');
    let cont2 = document.getElementById('cont2');
    let cont3 = document.getElementById('cont3');
    let cont4 = document.getElementById('cont4');

    if (hrs >= 6 && hrs < 11) {
        document.getElementById('Note')[0];
    }
    if (hrs >= 11 && hrs < 15) {
        document.getElementById('Note').innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    }
    if (hrs >= 15 && hrs < 21) {
        document.getElementById("Note").innerHTML = "LET'S HAVE SOME LUNCH !!";
    }
    if (hrs >= 21 && hrs < 24) {
        document.getElementById("Note").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    if (hrs >= 1 && hrs < 6) {
        document.getElementById("Note").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    }

    // clock time set 1 - 12 And AMPM set 
    if (hrs >= 12) {
        sese = "PM";
    }
    else {
        sese = "AM";
    }
// hrs+=5
    if (hrs>12){
        hrs-=12;  
        // PMAM=".PM";
      }

    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    } if (secn < 10) {
        secn = "0" + secn;
    }

    let hour = document.getElementById('hrs').innerHTML = `${hrs} hours` ;
    document.getElementById('min').innerHTML =` ${mins} mins`;
    document.getElementById('secn').innerHTML = `${secn}  secns`;
    document.getElementById('AMPM').innerHTML = sese;
      }
      


function up() {
    document.getElementById("alarm-set").innerHTML="Party Time !"
    console.log("ok");
   document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right, #CB52F8, #FC5EFF)"
  
  }
  
  function down() {
  
    document.getElementById("alarm-set").innerHTML="Set Alarm"
    document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right,  #FC5EFF ,#CB52F8)"
    
  }

  let wake = morning.options[document.getElementById('morning').selectedIndex];
    let lunch = afternoon.options[document.getElementById('afternoon').selectedIndex];
    let nap = evining.options[document.getElementById('evining').selectedIndex];
    let sleep = night.options[document.getElementById('night').selectedIndex];


  cont1.innerText = `wake up time :  ${wake.text}`;
  cont2.innerText = `lunch time   : ${lunch.text}`;
  cont3.innerText = `nap time     : ${nap.text}`;
  cont4.innerText = `nigth time   : ${sleep.text}`;
