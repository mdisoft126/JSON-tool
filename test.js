var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', './person.json');
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData.ratings.worker);
    //rated unrated
    var rated = ourData.ratings.worker.rated;
    console.log("rated: " + rated);
    var unrated = ourData.ratings.worker.unrated;
    console.log("unrated: " + unrated);
    //all
    var all = ourData.ratings.worker.all.avg;
    console.log("all_ratings.avg: " + all);
    var all = "all_ratings.std: " + ourData.ratings.worker.all.std;
    // all = "all_ratings.std: " + all;
    // console.log("all_ratings.std: " + all);
    console.log(all);
    //source
    var s = ourData.ratings.worker.q[0].avg;
    console.log("src_ratings.avg: " + s);
    var s = ourData.ratings.worker.q[0].std;
    console.log("src_ratings.std: " + s);
    //translation
    var t = ourData.ratings.worker.q[1].avg;
    console.log("tsnl_ratings.avg: " + t);
    var t = ourData.ratings.worker.q[1].std;
    console.log("tsnl_ratings.std: " + t);
};
ourRequest.send();