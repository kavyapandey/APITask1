/*
Function to load default movie details
*/

(function () {
    getMovieData("the dark knight");
})();

/*
Function to fetch the data from the API.
*/
async function getMovieData(movieName){
    try{ let data = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=7638646c`,{
            method : "GET"
        }
    );  
let details = await data.json();
loadMovieDetails(details);
      }
    catch(error){
        document.querySelector("#error-msg").innerText="The movie you requested was not found!";
       }
      
}

/*
Function to load the movie details in specified div.
*/
function loadMovieDetails(movieDetails){
   if(movieDetails.hasOwnProperty("Error"))
   {document.querySelector("#error-msg").innerText="The movie you requested was not found!";
   var id=document.getElementById("viewTop");
   $('html, body').animate({scrollTop: $(id).offset().top}, 200);
}
   else{
    const movieInfo = document.getElementById("movie-info");
    const movieImage = document.getElementById("movie-image");
    movieInfo.innerHTML = `
    <div>
    <p class="blue-text"><span class="col-sm-2">Title </span> ${movieDetails.Title}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Actors </span> ${movieDetails.Actors}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Awards </span> ${movieDetails.Awards}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Box Office </span> ${movieDetails.BoxOffice}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Director </span> ${movieDetails.Director}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Genre </span> ${movieDetails.Genre}</p><hr>
   <span class="col-sm-2">Plot </span> <p class="blue-text"> ${movieDetails.Plot}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Released </span> ${movieDetails.Released}</p><hr>
    <p class="blue-text"><span class="col-sm-2">Writer </span> ${movieDetails.Writer}</p><hr>
    <p class="blue-text"><span class="col-sm-2">IMDB Rating </span> ${movieDetails.imdbRating}</p><hr>
    <p class="blue-text"><span class="col-sm-2">IMDB votes </span> ${movieDetails.imdbVotes}</p>
    </div>

    `;
        movieImage.innerHTML = `
        
        <div class="image"><img class="anime-image"  src=${movieDetails.Poster}> </img></div>
    
        `;}
        
}
/*
Function called on click of search button
*/
function onSearchClick(){
    document.querySelector("#error-msg").innerText="";
    const name= document.getElementById("search-title").value;
    if(name!=="")
    getMovieData(name);
    //document.getElementById("movieData").scrollIntoView(true);
    var id=document.getElementById("movieData");
    $('html, body').animate({scrollTop: $(id).offset().top}, 200);
}