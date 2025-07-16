const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");


const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { text: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "We may encounter many defeats, but we must not be defeated.", author: "Maya Angelou" },
  { text: "Your limitation—it’s only your imagination.", author: "Anonymous" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Anonymous" },
  { text: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Anonymous" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Anonymous" },
  { text: "Dream it. Wish it. Do it.", author: "Anonymous" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Kamir Khan" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Anonymous" },
  { text: "Dream it. Believe it. Build it.", author: "Anonymous" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "There is no passion to be found playing small – in settling for a life that is less than the one you are capable of living.", author: "Nelson Mandela" },
  { text: "If you don’t build your dream, someone else will hire you to help them build theirs.", author: "Tony Gaskins" },
  { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "To live a creative life, we must lose our fear of being wrong.", author: "Joseph Chilton Pearce" },
  { text: "Life is short, and it is up to you to make it sweet.", author: "Sarah Louise Delany" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Good things come to those who wait, but better things come to those who go out and get them.", author: "Anonymous" },
  { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
  { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
  { text: "It’s not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
  
];

function displayRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[random].text}"`;
  quoteAuthor.textContent = `– ${quotes[random].author}`;
}

newQuoteBtn.addEventListener("click", displayRandomQuote);


displayRandomQuote();
