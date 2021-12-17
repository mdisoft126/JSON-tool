var jsonResult = [];

for (let i = 0; i < 64; i++) {
fetch('./ratings/response (' + i + ').json')
    .then(response => response.text())
    .then(data => myResult(data))

function myResult(data) {
    var ourData = JSON.parse(data);
    var rated = ourData.ratings.worker.rated;
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
      console.log(ourResult);
      console.log(typeof ourResult);
      var singleRow = JSON.stringify(ourResult);
      jsonResult.push(singleRow);
      console.log(jsonResult);
      document.getElementById("api").innerHTML = jsonResult;
};
};
