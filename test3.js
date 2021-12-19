var rating = [];
var person = [];

//fetching rating
for (let i = 0; i < 63; i++) {
  fetch("./ratings/response (" + i + ").json")
    .then((response) => response.text())
    .then((data) => myResult(data));

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
    //   console.log(ourResult);
    //   console.log(typeof ourResult);
    rating.push(ourResult);
    // console.log(jsonResult);
    document.getElementById("api1").innerHTML = JSON.stringify(rating);
  }
}

//fetching person
fetch("./person/person.txt")
  .then((response) => response.text())
  .then((data) => myPerson(data));

function myPerson(data) {
  // console.log(data);
  var lines = data.split("\n");
  // console.log(lines);
  // var person = [];
  for (var i = 1; i < lines.length; i++) {
    var values = lines[i].split("\t");
    // console.log(values);
    person[i - 1] = { no: values[0], userid: values[1], companyid: values[2] };
    // console.log(person);
    personString = JSON.stringify(person);
  }
  document.getElementById("api").innerHTML = JSON.stringify(person);
}
// console.log(rating[0]);
//combine
combineFunction(rating, person);

// function getRating() {
//   var rat = myResult(data);
//   console.log(rat);
// }

function combineFunction(rat, per) {
  var rat1 = rat;
  var r = [...rat1];
  var per1 = per;
  var p = per1.slice();
  console.log(r);
  console.log(p);
  var ratings = {
    "no": p.no,
    "userid": p.userid,
    "companyid": p.companyid,
    "rated": r.rated,
    "unrated": r.unrated,
    "all_ratings.avg": r['all_ratings.avg'],
    "all_ratings.std": r['all_ratings.std'],
    "src_ratings.avg": r['src_ratings.avg'],
    "src_ratings.std": r['src_ratings.std'],
    "tsnl_ratings.avg": r['tsnl_ratings.avg'],
    "tsnl_ratings.std": r['tsnl_ratings.std'],
  }
}