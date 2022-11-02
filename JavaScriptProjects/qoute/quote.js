const quotes=[
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall",
        person:"Nelson Mandela"

    },
    {
        quote:"The way to get started is to quit talking and begin doing",
        person:"Walt Disney"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person:"Steve Jobs"
    },
    {
        quote:'"If life were predictable it would cease to be life, and be without flavor"',
        person:"Eleanor Roosevelt"
    },
    {
        quote:'"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
        person:"Mother Teresa"
    },
    {
        quote:'"Tell me and I forget. Teach me and I remember. Involve me and I learn"',
        person:"Benjamin Franklin"
    },
    {
        quote:'"Your time is limited, so do not waste it living someone else s life. Dont be trapped by dogma — which is living with the results of other people"s thinking."',
        person:"Steve Jobs"
    },
    {
        quote:'"If you really look closely, most overnight successes took a long time."',
        person:"Steve Jobs"
    },
    {
        quote:'"The way to get started is to quit talking and begin doing"',
        person:"Walt Disney"
    },
    {
        quote:'"I failed my way to success"',
        person:"Thomas Edison"
    },
    {
        quote:'"If you really look closely, most overnight successes took a long time."',
        person:"Steve Jobs"
    },
    {
        quote:'"You become what you believe"',
        person:"Oprah Winfrey"
    }

]
const btn=document.querySelector("#new-quote");
const quote=document.querySelector(".quote");
const person=document.querySelector(".person");

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})
