/////////////////////
////BURGER MENU/////
///////////////////



let burger = document.querySelector("#burger");
let line1 = document.querySelector("#line1");
let line2 = document.querySelector("#line2");
let line3 = document.querySelector("#line3");
let burgerMenu = document.querySelector("#burgerMenu");
var opened=0; 

burger.addEventListener("click",function(t){
    if(opened==1)
    {
        line1.classList.remove("line1-s");
        line2.classList.remove("line2-s");
        line3.classList.remove("line3-s");
        burgerMenu.style.transform="translateY(-100%)";
        opened=0;
    }
    else
    {
        line1.classList.add("line1-s");
        line2.classList.add("line2-s");
        line3.classList.add("line3-s");
        burgerMenu.style.transform="translateY(0%)";
        opened=1;
    }
    //closing menu without clicking on burger
    document.onclick = function(x){
    if(opened==1 && x.target.id!="burger" && x.target.parentNode.id!="burger")
    {
        line1.classList.remove("line1-s");
        line2.classList.remove("line2-s");
        line3.classList.remove("line3-s");
        burgerMenu.style.transform="translateY(-100%)";
        opened=0;
    }}
})



/////////////////////
///MINI DATABASE////
///////////////////



var pets = {
    Franco: {
        photos : "/assets/photo/dogs/franco/franco1.jpg",
        photoCount: 4,
        breed : "Mixed",
        location : "Chicago, Illinois",
        health : "Vaccinated, spayed / neutered, chipped",
        characteristics : "Modest and reserved, at first you might think I don't want to go home with you - just give me some time and you'll see that I really do! It's a slow crawl at first, but then you'll start to see my personality blossom! I hope there's lots of treats and play time in store for me when I'm ready. Now don't be shy, come say hi!",
        owner : "Maria Bullock, +1-202-555-0179"
    },
    Teddy: {
        photos : "/assets/photo/dogs/teddy/teddy1.jpg",
        photoCount: 3,
        breed : "Retriever",
        location : "Pittsburgh, Pennsylvania",
        health : "Vaccinated",
        characteristics : "Teddy is incredibly sweet, a little shy, and ready to learn all about the big wide world. He likes other dogs and would be happy to find a home with a friendly confident dog to show her the ropes! He may be compatible with dog savvy kids with the appropriate supervision - we don't have cats here so can't assess that factor, but he may be able to live with a cat in the right circumstances. If you are interested in a young dog like Teddy, and have the ability to commit to the time and training required by a puppy like him, inquire today to give us a call!",
        owner : "Sonia Miffin, +1-925-555-0123"
    },
    Tracy: {
        photos : "/assets/photo/dogs/tracy/tracy1.jpg",
        photoCount: 3,
        breed : "Maltese",
        location : "Missouri City, Texas",
        health : "Vaccinated, spayed / neutered",
        characteristics : "Friendly, Playful, Smart",
        owner : "Martha Louis, +1-832-555-0189"
    },
    Tex: {
        photos : "/assets/photo/dogs/tex/tex1.jpg",
        photoCount: 2,
        breed : "Mixed",
        location : "Milwaukee, Wisconsin",
        health : "Vaccinated",
        characteristics : "Hi, I'm Tex! I'm working hard on my house training and do very well at keeping my kennel clean. I'm still learning things, but I do know sit and am highly treat motivated and ready to learn more! I love toys and people, but dogs are my best friends! I love other dogs, and would love a home with a doggie sibling. If you are ready for a fun snuggle bug, I'm definitely your guy!",
        owner : "Alexander Martinez, +1-414-555-0139"
    },
    Macie: {
        photos : "/assets/photo/dogs/macie/macie1.jpg",
        photoCount: 2,
        breed : "Poodle mixed",
        location : "Bethel, Connecticut",
        health : "Vaccinated, chipped",
        characteristics : "Special needs, good with cats, needs regular grooming",
        owner : "Jeremiah Harlow, +1-475-555-0183"
    },
    Rex: {
        photos : "/assets/photo/dogs/rex/rex1.jpg",
        photoCount: 3,
        breed : "Jack Russel",
        location : "Baltimore, Maryland",
        health : "/",
        characteristics : "Goofy, friendly, full of life ",
        owner : "Iann Turner, +1-410-555-0106"
    },
    Margot: {
        photos : "/assets/photo/dogs/margot/margot1.jpg",
        photoCount: 3,
        breed : "Maltese",
        location : "Cleveland, Ohio",
        health : "Vaccinated, chipped, spayed / neutered, alergic",
        characteristics : "Margot is good with other dogs and children. She was given a Cytopoint injection due to allergies, and may need to continue getting this going forward. She is a fluffy ball of love, laughter and loyalty just waiting for the right family. Margot is spayed, microchipped, current on core vaccines and has tested negative for heartworms. Did we mention she is gorgeous? And sweet? And smart?",
        owner : "Sandra Ludwik, +1-216-555-0146"
    },
    Blake: {
        photos : "/assets/photo/dogs/blake/blake1.jpg",
        photoCount: 3,
        breed : "Golden retriever",
        location : "Sacramento, California",
        health : "Vaccinated",
        characteristics : "Eat, play, sleep, repeat!",
        owner : "Margot Frazier, +1-916-555-0124"
    },
}
//creating list of inner objects in "pets" object (each pet's name)
let allPets = [];
for(const p in pets)
{
    allPets.push(p);
}



////////////////////
///POPUP DISPLAY///
//////////////////



let popupCon = document.querySelector("#popupContainer"); //whole popup
let popupDetails = document.querySelector("#details") //used for scroll reset
let photo = document.querySelector("#s1"); //active image in popup
let activePhotoCount; //number of photos of the active pet available
let activePhotoNum; //current (showing) photo number
let activePhotoPath; //path to the current (showing) photo
var poping=0;

let body = document.querySelector("body");
let allCards = document.querySelectorAll(".card");

//popping
allCards.forEach(card => {
    card.addEventListener("click",function(){
    if(poping==0)
    {
        popupCon.style.display="block";
        popupDetails.scrollTop = 0;
        body.style.overflow="hidden";
        poping=1;

       for (let i = 0; i < allPets.length; i++) {
            if(card.getAttribute("name")==allPets[i]) //does name attribute of the card exists in the list of pets
            {
                document.querySelector("#name").innerHTML=allPets[i]; //setting the popup's name as the name of current object from the list
                document.querySelector("#breed").innerHTML=pets[allPets[i]].breed;//setting the popup's details with "pets" object instead of the list "allPets[]", because list containes the names of inner objects not their properites.
                document.querySelector("#location").innerHTML=pets[allPets[i]].location;
                document.querySelector("#health").innerHTML=pets[allPets[i]].health;
                document.querySelector("#character").innerHTML=pets[allPets[i]].characteristics;
                document.querySelector("#owner").innerHTML=pets[allPets[i]].owner;
                
                photo.style.backgroundImage = `url('${pets[allPets[i]].photos}')`; //setting the first photo path
                activePhotoCount = pets[allPets[i]].photoCount; //saving the current pet's number of available photos, so it can be used as a limit later
                activePhotoNum=1; //setting the current (showing) photo number to first for later edit when sliding
                activePhotoPath= pets[allPets[i]].photos; //saving the current photo's path for later edit when sliding
            }
        }
    }
})});

//hiding the popup
addEventListener("click",function(x)
{
    if(x.target.id=="popupContainer")
    {
        popupCon.style.display="none";
        body.style.overflow="auto";
        poping=0;
    }
})



///////////////////////
///SLIDER FUNCTIONS///
/////////////////////



//next photo
function next(){
    let path;  //variable for sawing photo path between edits
    if(activePhotoNum!=activePhotoCount) //checking if current photo isn't the last (limit)
    {
        activePhotoNum++; //adding up to the current photo index
        path = activePhotoPath.slice(0,activePhotoPath.length-5); //removing the last 5 chars of the path (1.jpg)
        path += activePhotoNum+".jpg"; //putting raised index number back in the path (2.jpg)
        photo.style.backgroundImage = `url('${path}')`; //setting the changed path as the photo's path
    }
    else //if current photo is the last (limit)
    {
        activePhotoNum=1; //setting the current photo index back to the first one
        path = activePhotoPath.slice(0,activePhotoPath.length-5);
        path += activePhotoNum+".jpg";
        photo.style.backgroundImage = `url('${path}')`;
    }
}

//previous photo
function previous(){
    let path;
    if(activePhotoNum!=1) //checking if current photo isn't the first (limit)
    {
        activePhotoNum--; //subtracting the current photo index
        path = activePhotoPath.slice(0,activePhotoPath.length-5);
        path += activePhotoNum+".jpg";
        photo.style.backgroundImage = `url('${path}')`;
    }
    else //if current photo is the first (limit)
    {
        activePhotoNum=activePhotoCount; //setting the current photo index back to the last one
        path = activePhotoPath.slice(0,activePhotoPath.length-5);
        path += activePhotoNum+".jpg";
        photo.style.backgroundImage = `url('${path}')`;
    }
}

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click",function(){
    next();
});

prevBtn.addEventListener("click",function(){
    previous();
});