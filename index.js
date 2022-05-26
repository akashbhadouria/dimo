let i = 0;

function sliedshow() {

const img1 = "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgxqjnme4H6h-erYLKWBMTh0jp2bdw-DbFQ&usqp=CAU";
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gTzC-54ry9EMHWXYvg_3tBttSfCD_uhT7w&usqp=CAU";
const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgBbnU0-6WjD3GLBxx66zy33Wa2NyVdyFaw&usqp=CAU";
const img5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIGZLJ_a5Dcey3gC0ZzEk4epnRUzT0yGK7Q&usqp=CAU";

let arr = [];

arr.push(img1);
arr.push(img2);
arr.push(img3);
arr.push(img4);
arr.push(img5);


localStorage.setItem('posters',JSON.stringify(arr));

let container = document.getElementById("container");


let img = document.createElement("img");
img.setAttribute("class","poster-img");

setInterval(function() {
if(i === arr.length-1) {
    i=0;
}
img.src = arr[i];
container.append(img);
i++;

},2000);

}
sliedshow();

// Movie Card Grid
function movies(name,release,imageUrl,rating) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.release = release;
    this.rating = rating;
}

let arrMovies = [];

function movieCards() {
    if(arrMovies.length === 0) {   
        let movie1 = new movies("Popeye","2021","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQsJRH73QaONwT-8buVcyBQ7p2jMsAMA4JQ&usqp=CAU",8);
        let movie2 = new movies("King Kong","2021","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvDmc9YMtYG6ITXz7pFmjOQk4aopvQ2L7sMA&usqp=CAU",9);
        let movie3 = new movies("KGF","2022","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47ypWSQ1m0d-8aWCdSKW-GQ_urVYzWGmrJw&usqp=CAU",7.8);
        let movie4 = new movies("Kashmir Files","2022","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1pEPzaimwv2Jg4yYQxBxznQu__R78rheLA&usqp=CAU",10);
        let movie5 = new movies("Outsiders","2007","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkTEGrDs5wUlePFH1YCDRSM31ujvbF_WmHA&usqp=CAU",8.6); 
        let movie6 = new movies("London","2009","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOshJI2djubPWTjKWAL_NXgOvCEVZ5vQwxg&usqp=CAU",5.9);
        let movie7 = new movies("Millers","2018","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdRTK-TP57tC8-Qkn-fLxEsfjDk7pkCtCZA&usqp=CAU",6.4);
        let movie8 = new movies("Shamg Chi","2010","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBRumYPK9LLgi1LxyxClBoKLddC8Y62M52g&usqp=CAU",6.2);
        let movie9 = new movies("Forest Gump","2001","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEiqyYpghImtU-TShMXX4pKc4vxKDV3M07g&usqp=CAU",7.2);
    
        arrMovies.push(movie1);
        arrMovies.push(movie2);
        arrMovies.push(movie3);
        arrMovies.push(movie4);
        arrMovies.push(movie5);
        arrMovies.push(movie6);
        arrMovies.push(movie7);
        arrMovies.push(movie8);
        arrMovies.push(movie9);
    }
    console.log(arrMovies)

    localStorage.setItem('movies',JSON.stringify(arrMovies));

    addMovies(arrMovies)
}
movieCards();

function addMovies(arrMovies) {
    // console.log(arrMovies)
    arrMovies.map(function(elem) {
    //    Main movie box
        let box =  document.createElement("div");
        box.setAttribute("class","box");

    //    Image
       let posterImg = document.createElement("img");
       posterImg.setAttribute("class","pos");
       posterImg.src = elem.imageUrl;

       
       let name = document.createElement("h2");
       name.textContent = elem.name;

       let release = document.createElement("p");
       release.textContent = elem.release;

       let rating = document.createElement("p");
       rating.textContent = elem.rating;

       box.append(posterImg,name,release,rating);
       
        document.querySelector(".cards").append(box);
    //    grid.append(box);
    // console.log(arrMovies.length)

    });
}

function sort() {
    const sortVal = document.getElementById("sort");
    // if(sortVal)
    if(sortVal.value === "LTH") {
        arrMovies.sort((a,b) => a.name > b.name);
        localStorage.setItem('movies',JSON.stringify(arrMovies));
        addMovies(arrMovies);
        console.log(arrMovies)
    } else {
        arrMovies.sort((b,a) => b.name > a.name);
        localStorage.setItem('movies',JSON.stringify(arrMovies));
        addMovies(arrMovies);
        console.log(arrMovies)
    }
    window.location.reload();
}

