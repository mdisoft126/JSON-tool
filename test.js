var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', './ratings/response ' + '(5)' + '.json');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData.ratings.worker);
//rated unrated
    var rated = ourData.ratings.worker.rated;
    console.log("rated: " + rated);
    var unrated = ourData.ratings.worker.unrated;
    console.log("unrated: " + unrated);
//all
    var all_avg = ourData.ratings.worker.all.avg;
    console.log("all_ratings.avg: " + all_avg);
    var all_std = ourData.ratings.worker.all.std;
    // all = "all_ratings.std: " + all;
    console.log("all_ratings.std: " + all_std);
    // console.log(all_std);
//source
    var s_avg = ourData.ratings.worker.q[0].avg;
    console.log("src_ratings.avg: " + s_avg);
    var s_std = ourData.ratings.worker.q[0].std;
    console.log("src_ratings.std: " + s_std);
//translation
    var t_avg = ourData.ratings.worker.q[1].avg;
    console.log("tsnl_ratings.avg: " + t_avg);
    var t_std = ourData.ratings.worker.q[1].std;
    console.log("tsnl_ratings.std: " + t_std);
//object
    var ourResult = {"rated": rated, "unrated": unrated, "all_ratings.avg": all_avg, "all_ratings.std": all_std, "src_ratings.avg": s_avg, "src_ratings.std": s_std, "tsnl_ratings.avg": t_avg, "tsnl_ratings.std": t_std};
    console.log(ourResult);
//json
    var jsonResult = JSON.stringify(ourResult);
    console.log(jsonResult);
};
ourRequest.send();
