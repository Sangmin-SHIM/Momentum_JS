const quotes =[
    {
        quote : "Life's a game made for everyone, and love is the prize.",
        song : "Wake Me Up" 
    },
    {
        quote : "I can't tell where the journey will end, but I know where to start",
        song : "Wake Me Up" 
    },
    {
        quote : "I tried carrying the weight of the world. But I only have two hands.",
        song : "Wake Me Up" 
    },
    {
        quote : "For every tyrant a tear for the vulnerable; in every lost soul the bones of a miracle.",
        song : "Waiting For Love" 
    },
    {
        quote : "If there’s love in this life, we’re unstoppable.",
        song : "Waiting For Love" 
    },
    {
        quote : "Oh, if the sky comes falling down for you, There’s nothing in this world I wouldn’t do.",
        song : "Hey Brother" 
    },
    {
        quote : "One day you’ll leave this world behind, so live a life you will remember.",
        song : "The Nights" 
    },
    {
        quote : "Go venture far beyond the shores; don’t forsake this life of yours. I’ll guide you home no matter where you are.",
        song : "The Nights" 
    },
    {
        quote : "When thunderclouds start pouring down, light a fire they can’t put out, carve your name into those shining stars.",
        song : "The Nights" 
    },
    {
        quote : "I could be the one to set you free",
        song : "I Could Be The One" 
    },
]

const quote = document.querySelector("#quote span:first-child");
const song = document.querySelector("#quote span:last-child");

function getQuoteRandomly(max){
    const i = Math.floor(Math.random() * (max+ 1))
    return i;
}

const number = getQuoteRandomly(quotes.length-1);
const todayQuote = quotes[number].quote;
const todaySong = quotes[number].song;

quote.innerHTML = "🎵  "+todayQuote;
song.innerHTML = "-" + todaySong;