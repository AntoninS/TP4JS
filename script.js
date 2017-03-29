window.addEventListener("load", function() {
    var elementPlayer = document.getElementById("player");
    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = "test.mp3";
    sound.type = "audio/mpeg";


    var buttonLoadRSS = document.createElement("button");
    buttonLoadRSS.innerHTML = "Load RSS feed";
    buttonLoadRSS.addEventListener("click", request)


    var inputRSS = document.createElement("input");
    inputRSS.id = "inputRSS";
    elementPlayer.appendChild(buttonLoadRSS);
    elementPlayer.appendChild(inputRSS);
    elementPlayer.appendChild(sound);

    function request() {
        var xhr = new XMLHttpRequest();
        var proxy = "https://crossorigin.me/"; //+ document.getElementById("inputRSS");
        var url = proxy.concat(document.getElementById("inputRSS").value);
        console.log(url);

        xhr.open("GET", url, true);
        //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");


        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {
                alert(xhr.responseText);
            }
        });
        xhr.send(null);
    }
/*
    function readData(sData) {

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

        alert(sData);
    }
    */

});
