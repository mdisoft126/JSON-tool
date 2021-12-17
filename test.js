var ourRequest = new XMLHttpRequest();
var jsonResult = [];
for (let i = 0; i < 6; i++) {
  ourRequest.open("GET", "./ratings/response " + "(" + i + ")" + ".json");
  ourRequest.onload = function () {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);
    console.log(typeof ourData);
    var rated = ourData.ratings.worker.rated;
    console.log(rated);
    var unrated = ourData.ratings.worker.unrated;
    var all_avg = ourData.ratings.worker.all.avg;
    var all_std = ourData.ratings.worker.all.std;
    var s_avg = ourData.ratings.worker.q[0].avg;
    var s_std = ourData.ratings.worker.q[0].std;
    var t_avg = ourData.ratings.worker.q[1].avg;
    var t_std = ourData.ratings.worker.q[1].std;
    var ourResult = {
      "rated": rated,
      "unrated": unrated,
      "all_ratings.avg": all_avg,
      "all_ratings.std": all_std,
      "src_ratings.avg": s_avg,
      "src_ratings.std": s_std,
      "tsnl_ratings.avg": t_avg,
      "tsnl_ratings.std": t_std,
    };
    var singleRow = JSON.stringify(ourResult);
    jsonResult.push(singleRow);
    console.log(jsonResult);
    document.getElementById("api").innerHTML = jsonResult;
  };
};
ourRequest.send();


