

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1K6k624N0xLeu0Q4pPbQLtWg5T8fL7JP5bTLIm_qr_X0/edit?usp=sharing';
  
function init() {
  Tabletop.init( {
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true 
  } )
}

function showInfo(data, tabletop) {
  //alert('Successfully processed!')
  //console.log(data);

  for(var i = 0; i < data.length; i++){
      //console.log(data[i]);
      var event = data[i];
      var dateList = event["date"].split('/');
      var timeList = event["time"].split(':');


      var date = new Date(dateList[2], dateList[1]-1, dateList[0], timeList[0], timeList[1]);
      dateList = date.toString().split(" ");

      //console.log(dateList.toString());

      var dateContent = '<div class="pt-3 row row-striped"> \
        <div class="col-2 text-right"> \
            <h2 class="display-4"><span class="badge badge-secondary">' + dateList[2] +'</span></h2> \
            <h3>' + dateList[1] + '</h3> \
            <h3>' + dateList[3] + '</h3> \
        </div> \
        <div class="col-10 text-light px-5"> \
            <a href="' + event["link"] + '" target="_blank" ><h3 class="text-uppercase"><strong>' 
                + event["name"] +  '</strong></h3></a> \
            <ul class="list-inline"> \
                <li class="list-inline-item"><i class="far fa-calendar-alt" aria-hidden="true"></i> ' + dateList[0] + " " + dateList[1] + " " + dateList[2] + '</li> \
                <li class="list-inline-item"><i class="far fa-clock" aria-hidden="true"></i> ' + dateList[4]+ '</li> \
                <li class="list-inline-item"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ' + event["location"] + '</li> \
            </ul> \
            <p>' + event["description"] + '</p> \
        </div> \
    </div> '

    $("#date-container").append(dateContent);
  }
}

window.addEventListener('DOMContentLoaded', init);