var xhttp1 = new XMLHttpRequest();
xhttp1.open("GET", "./highlight/highlight.json", true);
xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response1 = JSON.parse(xhttp1.responseText);
      var pubHighlight = response1.highlight;

      var out4 = '';
      for (var i = 0; i < pubHighlight.length; i++) {

        out4 += '<div class="slider-item swiper-slide">';
        out4 += '<div class="slider-img"> <img src="../figures/';
        out4 += pubHighlight[i].filenameFig+'"></div>';
        out4 += '<div class="content">';
        out4 += '<div class="title">';
        out4 += pubHighlight[i].titles+'</div>';
        out4 += '<div class="text">';
        out4 += pubHighlight[i].titles+'</div>';
        out4 += '<span class="time">';
        out4 += pubHighlight[i].pubDate+'</span>';
        out4 += '<a href="./highlight/';
        out4 += pubHighlight[i].fileHTML;
        out4 += '" class="Button">Read More</a></div></div>';

      }

      document.getElementById('pubHighlight').innerHTML = out4;
    }
};
xhttp1.send(null);
