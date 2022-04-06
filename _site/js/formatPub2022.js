var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var pubJournals = response.listJournals;
      var pubLocalPub = response.listLocalPub;
      var pubProceeds = response.listProceeds;
      var pubPreprint = response.listPreprint;

      var staffId = [
        "ahma080", "choi002", "eddw001", "edis008", "fere001",
        "gagu001", "msho001", "muha207", "muza002", "nady003",
        "roni012", "sasf001", "wahy050", "wili001", "yano001"
      ]

      var fullname = [
        "A. R. T. Nugraha", "C. N. Rangkuti", "E. H. Hasdeo",
        "E. Suprayoga", "F. Oemry", "G. K. Sunnardianto",
        "M. S. Ukhtary", "M. Y. Hanna", "M. P. M. Akhir",
        "N. Amalia", "R. Muslim", "S. A. Wella",
        "W. D. Saputri", "W. J. Sari", "Y. P. Sarwono"
      ]

      var out1 = '';
      var authors;
      for (var i = 0; i < pubJournals.length; i++) {

        var temp = [];

        for (var j = 0; j < pubJournals[i].author.length; j++) {
          temp[j] = pubJournals[i].author[j];
          for (var k = 0; k < fullname.length; k++) {
            if (pubJournals[i].author[j]==fullname[k]) {
              temp[j] = "<a href=../team/staff/"+staffId[k]+".html> "+fullname[k]+"</a>";
              break;
            }
          }
        }

        authors = '';
        if (temp.length==1) {
          authors += temp[0];
        } else if (temp.length==2) {
          authors += temp[0]+' and '+temp[1];
        } else {
          for (var j = 0; j < temp.length-1; j++) {
            authors += temp[j]+', ';
          }
          authors += 'and '+ temp[temp.length-1];
        }

        out1 += '<li>';
        out1 += authors+', ';
        out1 += '<i>"'+pubJournals[i].title+'"</i>'+', ';
        out1 += '<a href='+pubJournals[i].doi+'>';
        out1 += pubJournals[i].journal+' ';
        out1 += '<b>'+pubJournals[i].volume+'</b>';

        if (pubJournals[i].pages!=="") {
          out1 += ', '+pubJournals[i].pages+',';
        }

        out1 += ' ('+pubJournals[i].year+').'
        out1 += '</a>';

        if (pubJournals[i].preprint!=="") {
          out1 += '<a href="'+pubJournals[i].preprint+'">[Preprint version]</a>';
        }

        out1 += '</li>';

      }

      document.getElementById('pubJournals').innerHTML = out1;

      var out2 = '';
      for (var i = 0; i < pubProceeds.length; i++) {

        var temp = [];

        for (var j = 0; j < pubProceeds[i].author.length; j++) {
          temp[j] = pubProceeds[i].author[j];
          for (var k = 0; k < fullname.length; k++) {
            if (pubProceeds[i].author[j]==fullname[k]) {
              temp[j] = "<a href=../team/staff/"+staffId[k]+".html> "+fullname[k]+"</a>";
              break;
            }
          }
        }

        authors = '';
        if (temp.length==1) {
          authors += temp[0];
        } else if (temp.length==2) {
          authors += temp[0]+' and '+temp[1];
        } else {
          for (var j = 0; j < temp.length-1; j++) {
            authors += temp[j]+', ';
          }
          authors += 'and '+ temp[temp.length-1];
        }

        out2 += '<li>';
        out2 += authors+', ';
        out2 += '<i>"'+pubProceeds[i].title+'"</i>'+', ';
        out2 += '<a href='+pubProceeds[i].doi+'>';
        out2 += pubProceeds[i].journal+' ';
        out2 += '<b>'+pubProceeds[i].volume+'</b>'+', ';
        out2 += pubProceeds[i].pages+', ';
        out2 += '('+pubProceeds[i].year+').'
        out2 += '</a></li>';

      }

      document.getElementById('pubProceeds').innerHTML = out2;

      var out3 = '';
      for (var i = 0; i < pubPreprint.length; i++) {

        var temp = [];

        for (var j = 0; j < pubPreprint[i].author.length; j++) {
          temp[j] = pubPreprint[i].author[j];
          for (var k = 0; k < fullname.length; k++) {
            if (pubPreprint[i].author[j]==fullname[k]) {
              temp[j] = "<a href=../team/staff/"+staffId[k]+".html> "+fullname[k]+"</a>";
              break;
            }
          }
        }

        authors = '';
        if (temp.length==1) {
          authors += temp[0];
        } else if (temp.length==2) {
          authors += temp[0]+' and '+temp[1];
        } else {
          for (var j = 0; j < temp.length-1; j++) {
            authors += temp[j]+', ';
          }
          authors += 'and '+ temp[temp.length-1];
        }

        out3 += '<li>';
        out3 += authors+', ';
        out3 += '<i>"'+pubPreprint[i].title+'"</i>'+', ';
        out3 += '<a href='+pubPreprint[i].doi+'>';
        out3 += pubPreprint[i].journal+' ';
        out3 += '<b>'+pubPreprint[i].volume+'</b>';

        if (pubPreprint[i].pages!=="") {
          out3 += ', '+pubPreprint[i].pages+',';
        }

        out3 += ' ('+pubPreprint[i].year+').'
        out3 += '</a></li>';

      }

      document.getElementById('pubPreprint').innerHTML = out3;

      var out4 = '';
      for (var i = 0; i < pubLocalPub.length; i++) {

        var temp = [];

        for (var j = 0; j < pubLocalPub[i].author.length; j++) {
          temp[j] = pubLocalPub[i].author[j];
          for (var k = 0; k < fullname.length; k++) {
            if (pubLocalPub[i].author[j]==fullname[k]) {
              temp[j] = "<a href=../team/staff/"+staffId[k]+".html> "+fullname[k]+"</a>";
              break;
            }
          }
        }

        authors = '';
        if (temp.length==1) {
          authors += temp[0];
        } else if (temp.length==2) {
          authors += temp[0]+' and '+temp[1];
        } else {
          for (var j = 0; j < temp.length-1; j++) {
            authors += temp[j]+', ';
          }
          authors += 'and '+ temp[temp.length-1];
        }

        out4 += '<li>';
        out4 += authors+', ';
        out4 += '<i>"'+pubLocalPub[i].title+'"</i>'+', ';
        out4 += '<a href='+pubLocalPub[i].doi+'>';
        out4 += pubLocalPub[i].journal+' ';
        out4 += '<b>'+pubLocalPub[i].volume+'</b>'+', ';
        out4 += pubLocalPub[i].pages+', ';
        out4 += '('+pubLocalPub[i].year+').'
        out4 += '</a></li>';

      }

      document.getElementById('pubLocalPub').innerHTML = out4;

    }
};
xhttp.open("GET", "./pub/pub2022.json", true);
xhttp.send();
