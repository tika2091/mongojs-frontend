/* MongoDB Zoo Site (18.2.4)
 * Front-End
 * ========================= */
/* TODO:
  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.
  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.
  Good luck!
  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?
*/
// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body


function displayResults(data) {
  // Add to the table here...

  for(var i=0; i < data.length; i++){
    $("tbody").append("<tr><td>"+data[i].name+"</td>"+
                          "<td>"+data[i].numlegs+"</td>"+
                          "<td>"+data[i].class+"</td>"+
                          "<td>"+data[i].weight+"</td>"+
                          "<td>"+data[i].whatIWouldReallyCallIt+"</td></tr>");
    }
}

// step 1--On load
// this will ask the backend for json file ........
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});
// step 2--
// button interactions

// when user clicks the weight-sort button display the table sorted by weight
$("#weight-sort").on("click", function(){
// first empty results table
  $("tbody").empty();
  // then remove and apply class to distinguish which column we sorted by
  $("th").removeClass("active");
  $("#animals-weight").addClass("active");

  // now do an api call to the back end for json with all animals sorted by weight
$.getJSON("/weight", function(data){
  displayResults(data);
});
});

// when user clicks the weight-sort button display the table sorted by name
$("#name-sort").on("click", function(){
// first empty results table
  $("tbody").empty();
  // then remove and apply class to distinguish which column we sorted by
  $("th").removeClass("active");
  $("#animals-name").addClass("active");

  // now do an api call to the back end for json with all animals sorted by weight
$.getJSON("/name", function(data){
  displayResults(data);
});
});
