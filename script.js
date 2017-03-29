window.addEventListener("load", function() {
    var elementPlayer = document.getElementById("player");
    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = "test.mp3";
    sound.type = "audio/mpeg";


    var buttonLoadRSS = document.createElement("button");
    buttonLoadRSS.innerHTML = "Load RSS feed";
    buttonLoadRSS.addEventListener("click", request(readData));


    var inputRSS = document.createElement("input");
    inputRSS.id = "inputRSS";
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

    function chargeAudio() {
        sound.src = "test.mp3";

    }

    function request(callback) {
        var xhr = getXMLHttpRequest();
        var url = document.getElementById("inputRSS");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {
                callback(xhr.responseXML);
            }
        };
        xhr.open("GET", "http://radiofrance-podcast.net/podcast09/rss_15644.xml", true);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.send(null);
    }

    function readData(sData) {
      console.log("oui");
      /*
        var nodes = oData.getElementsByTagName("soft");
        var ol = document.createElement("ol"),
            li, cn;
        for (var i = 0, c = nodes.length; i < c; i++) {
            li = document.createElement("li");
            cn = document.createTextNode(nodes[i].getAttribute("name"));
            li.appendChild(cn);
            ol.appendChild(li);
        }
        document.getElementById("podcastList").appendChild(ol);
        */
        alert(sData);
    }


    function getXMLHttpRequest() {
        var xhr = null;

        if (window.XMLHttpRequest || window.ActiveXObject) {
            if (window.ActiveXObject) {
                try {
                    xhr = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
            } else {
                xhr = new XMLHttpRequest();
            }
        } else {
            alert("Get yourself a good browser");
            return null;
        }

        return xhr;
    }

});
