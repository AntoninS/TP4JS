window.addEventListener("load", function() {
    var elementPlayer = document.getElementById("player");
    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = "test.mp3";
    sound.type = "audio/mpeg";


    var buttonLoadRSS = document.createElement("button");

    buttonLoadRSS.innerHTML = "Load RSS feed";
    buttonLoadRSS.addEventListener("click", sendData)


    var inputRSS = document.createElement("input");
    elementPlayer.appendChild(buttonLoadRSS);
    elementPlayer.appendChild(inputRSS);
    elementPlayer.appendChild(sound);

    function getXDomainRequest() {
            var xdr = null;
            if (window.XDomainRequest) {
                    xdr = new XDomainRequest();
            } else if (window.XMLHttpRequest) {
                    xdr = new XMLHttpRequest();
            } else {
                    alert("Votre navigateur ne gère pas l'AJAX cross-domain !");
            }
            return xdr;
    }

    function sendData() {
            var xdr = getXDomainRequest();
            xdr.onload = function() {
                    alert(xdr.responseText);
            }
            xdr.open("GET", "http://radiofrance-podcast.net/podcast09/rss_15644.xml");
            xdr.send();
            console.log(xdr.responseXML);

    }
/*

    getRSS();

    function getRSS() {
        var url = inputRSS.value;


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };

        xhttp.open("GET", url, true);

        xhttp.send(); //Cause an error       https://openclassrooms.com/courses/ajax-et-l-echange-de-donnees-en-javascript/l-xmlhttprequest-cross-domain
        debugger;


        chargeAudio();
    }

    function myFunction(xml) {
        var i;
        var xmlDoc = xml.responseXML;
        var table = "<tr><th>Title</th><th>Description</th></tr>";
        var x = xmlDoc.getElementsByTagName("CD");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
                "</td></tr>";
        }
        document.getElementById("podcastList").innerHTML = table;
    }

    function chargeAudio() {
        sound.src = "test.mp3";

    }

    */
});
