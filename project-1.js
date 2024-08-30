// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The only true wisdom is in knowing you know nothing."`,
    person: `Socrates`
}, {
    quote: `"The only thing we have to fear is fear itself."`,
    person: `Franklin D. Roosevelt`
}, {
    quote: `"That which does not kill us makes us stronger."`,
    person: `Friedrich Nietzsche`
}, {
    quote: `"I think, therefore I am."`,
    person: `René Descartes`
}, {
    quote: `"Success usually comes to those who are too busy to be looking for it."`,
    person: `Henry David Thoreau`
}, {
    quote: `"The best way to predict your future is to create it."`,
    person: `Abraham Lincoln`
}, {
    quote: `"I came, I saw, I conquered."`,
    person: `Julius Caesar`
}, {
    quote: `"All men are created equal."`,
    person: `Declaration of Independence, USA`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
}, {
    quote: `"Well done is better than well said."`,
    person: `Benjamin Franklin`
}, {
    quote: `"I didn't fail the test. I just found 100 ways to do it wrong."`,
    person: `Benjamin Franklin`
}, {
    quote: `"I find that the harder I work, the more luck I seem to have."`,
    person: `Thomas Jefferson`
}, {
    quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    person: `Franklin D. Roosevelt`
}, {
    quote: `"You become what you believe."`,
    person: `Oprah Winfrey`
}, {
    quote: `"Only a life lived for others is a life worthwhile."`,
    person: `Albert Einstein`
}, {
    quote: `"Believe you can and you're halfway there."`,
    person: `Theodore Roosevelt`
}, {
    quote: `"Learning never exhausts the mind."`,
    person: `Leonardo da Vinci`
}, {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person: `Thomas Edison`
}, {
    quote: `"I failed my way to success."`,
    person: `Thomas Edison`
}, {
    quote: `"If life were predictable, it would cease to be life and be without flavor."`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"An unexamined life is not worth living."`,
    person: `Socrates`
}, {
    quote: `"The only thing necessary for the triumph of evil is for good men to do nothing."`,
    person: `Edmund Burke`
}, {
    quote: `"Everything has beauty, but not everyone sees it."`,
    person: `Confucius`
}, {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
}, {
    quote: `"Whether you think you can or you think you can't, you're right."`,
    person: `Henry Ford`
}, {
    quote: `"Love is composed of a single soul inhabiting two bodies."`,
    person: `Aristotle`
}, {
    quote: `"Be yourself; everyone else is already taken."`,
    person: `Oscar Wilde`
}, {
    quote: `"A room without books is like a body without a soul."`,
    person: `Marcus Tullius Cicero`
}, {
    quote: `"Be the change that you wish to see in the world."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    person: `Thomas Edison`
}, {
    quote: `"Knowledge is power."`,
    person: `Sir Francis Bacon`
}, {
    quote: `"Life is like a box of chocolates. You never know what you’re gonna get."`,
    person: `Forrest Gump`
}, {
    quote: `"Life is like riding a bicycle. To keep your balance, you must keep moving."`,
    person: `Albert Einstein`
}, {
    quote: `"May the Force be with you."`,
    person: `Star Wars`
}, {
    quote: `"No one can make you feel inferior without your consent."`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"Nothing is certain except for death and taxes."`,
    person: `Benjamin Franklin`
}, {
    quote: `"Whatever you are, be a good one."`,
    person: `Abraham Lincoln`
}, {
    quote: `"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."`,
    person: `Abraham Lincoln`
}, {
    quote: `"If you are going through hell, keep going."`,
    person: `Winston Churchill`
}, {
    quote: `"Success is only meaningful and enjoyable if it feels like your own."`,
    person: `Michelle Obama`
}, {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    person: `Eleanor Roosevelt`
}]

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})