// make a class with attributes: artist, src (url in iframe) , id number for random selection, and whatever else you want to change with the random script

let everyMix = [];

// declare the Mix class
class Mix {
    constructor(artist, source, link) {
        this._artist = artist;
        this._source = source;
        this._link = link;
//        this.isSelected = false;
    }
    
    get artist() { return this._artist; }
    get source() { return this._source; }
    get link() { return this._link; }
//    get isSelected() { return this.isSelected; }
//    set isSelected(select) { this.isSelected = select; }
    
//    toggleSelection() {
//        this.isSelected === false
//            ? this.isSelected = true
//            : this.isSelected = false;
//    }
};


// add sommelier mix and add to array of all mixes
const sommelierMix = new Mix('sommelier', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/963429076&color=%23747679&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', 'https://sommelier.bandcamp.com/');
everyMix.push(sommelierMix);

const axineMix = new Mix('axine m', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/952535953&color=%23ff5500&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', 'https://axine.bandcamp.com/');
everyMix.push(axineMix);

const deflector1Mix = new Mix('deflector', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/542155974&color=%23ff5500&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', 'https://deflector.bandcamp.com/');
everyMix.push(deflector1Mix);

const treasureTeeth1Mix = new Mix('treasure teeth', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/791158561&color=%23ff5500&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', 'https://treasureteeth.bandcamp.com/');
everyMix.push(treasureTeeth1Mix);

const pahsMix = new Mix('pamela and her sons', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280920777&color=%236d574c&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', 'https://pamelaandhersons.bandcamp.com/');
everyMix.push(pahsMix);

const isabellaMix = new Mix('isabella', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/968495794&color=%236d574c&auto_play=true&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true', 'https://networkerror.bandcamp.com/');
everyMix.push(isabellaMix);

// add new mixes here::

let randomIndex = Math.floor(Math.random() * everyMix.length);
document.getElementById("sc").setAttribute("src", everyMix[randomIndex].source);
document.getElementById("artistLink").innerHTML = everyMix[randomIndex].artist;
document.getElementById("artistLink").setAttribute("href", everyMix[randomIndex].link);
// select a mix randomly 

function randomizeMix() { 
    let newRandomIndex = Math.floor(Math.random() * everyMix.length);
    console.log(newRandomIndex)
    if (newRandomIndex == randomIndex) {
        newRandomIndex = randomIndex + 1;
    } 
    document.getElementById("sc").setAttribute("src", everyMix[newRandomIndex].source);
    document.getElementById("artistLink").innerHTML = everyMix[newRandomIndex].artist;
    document.getElementById("artistLink").setAttribute("href", everyMix[newRandomIndex].link);
    // change the source of the iframe, name display, and link, and toggle is Slected
    randomIndex = newRandomIndex;
}


// change attributes if link is a youtube or soundcloud ++++ mix, add a tag to the class


// select new mix on dice click, prevent from repeating 
//everyMix[randomIndex].toggleSelection();
//
//
//
//document.getElementById("rollDice").onclick = function changeContent(everyMix, randomIndex) {    
//    let newRandomIndex = Math.floor(Math.random() * everyMix.length);
//    if ((newRandomIndex === randomIndex) && (newRandomIndex < everyMix.length - 1)) {
//        newRandomIndex =+ 1;
//    };
//    
//    document.getElementById("sc").setAttribute("src", everyMix[newRandomIndex].source);
//
//    document.getElementById("artistLink").innerHTML = everyMix[newRandomIndex].artist;
//
//    document.getElementById("artistLink").setAttribute("href", everyMix[newRandomIndex].link);
//};

