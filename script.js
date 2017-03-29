window.addEventListener("load", function() {
    var elementPlayer = document.getElementById("player");
    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = "test.mp3";
    sound.type = "audio/mpeg";

    var buttonLoadRSS = document.createElement("button");
    buttonLoadRSS.innerHTML = "Load RSS feed";
    buttonLoadRSS.addEventListener("click", getRSS)

    var inputRSS = document.createElement("input");
    inputRSS.id = "inputRSS";
    inputRSS.value = "http://radiofrance-podcast.net/podcast09/rss_15644.xml" //With that we don't have to enter our url everytime
    elementPlayer.appendChild(buttonLoadRSS);
    elementPlayer.appendChild(inputRSS);
    elementPlayer.appendChild(sound);

    function getRSS() { // It could be nice to use a callback function, but it's bugging when I try to use it whith an event listener
        var xhr = new XMLHttpRequest();
        var proxy = "https://crossorigin.me/"; // We need to use a proxy to fix the CORS problem
        var url = proxy.concat(document.getElementById("inputRSS").value); //We add our proxy just before the RSS url

        xhr.open("GET", url, true);
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {
                displayListRSS(xhr);
            }
        });
        xhr.send(null);
    }

    function displayListRSS(rss) {
        var doc = rss.responseXML;

        var nodes = doc.getElementsByTagName("item");
        console.log(nodes.length);

        for (var i = 0, c = nodes.length; i < c; i++) {
          var tr = document.createElement("tr");
          var title = nodes[i].getElementsByTagName("title")[0].innerHTML;
          var descr = nodes[i].getElementsByTagName("description")[0].innerHTML;
          var podcastTable = document.getElementById('playlist-table');
          var tdTitle = document.createElement("td");
          tdTitle.innerHTML = title;
          var tdDescription = document.createElement("td");
          tdDescription.innerHTML = descr;

          podcastTable.appendChild(tr);
          tr.appendChild(tdTitle);
          tr.appendChild(tdDescription);
        }
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
