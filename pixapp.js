const synth = window.speechSynthesis;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["are you genius", "are you nerd", "are you intelligent"],
  ["i hate you", "i don't like you"],
  ["how are you", "how is life", "how are things", "how are you doing"],
  ["how is corona", "how is covid 19", "how is covid19 situation"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who made you", "who is your creator"],
  ["your name please", "your name", "may i know your name", "what is your name", "what do you call yourself"],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i don't know"],
  ["boring"],
  ["i'm tired"],
  ["who are the team members"],
  ["hi", "hello", "hey"],
  ["bel products", "bel product categories", "bel product range"],
  ["bel services", "what services does bel provide", "bel support services"],
  ["bel latest products", "latest bel products", "new bel products"],
  ["bel manufacturing", "bel manufacturing units", "bel factories"],
  ["bel history", "when was bel founded", "about bel"],
  ["bel leadership", "bel ceo", "who is the ceo of bel", "bel management"],
  ["bel vision", "what is bel's vision", "bel mission statement"],
  ["bel awards", "bel recognitions", "bel achievements"],
  ["bel locations", "where are bel offices", "bel offices in india"],
  ["bel clients", "bel customers", "who are bel's clients"],
  ["bel revenue", "bel annual revenue", "bel turnover"],
  ["bel radars", "what radars does bel provide", "bel radar systems"],
  ["bel electronic warfare", "bel ew systems", "bel electronic warfare systems"],
  ["bel communication systems", "bel communication products", "bel communication"],
  ["bel naval systems", "bel naval products", "bel's naval systems"],
  ["bel optoelectronics", "bel optoelectronic products", "bel optics"],
  ["bel partnerships", "bel collaborations", "bel joint ventures"],
  ["bel stock", "bel shares", "bel stock price", "bel listed on stock exchange"],
  ["bel r&d", "bel research and development", "bel innovations"],
  ["bel csr", "bel corporate social responsibility", "bel social initiatives"],
  ["bel careers", "jobs at bel", "bel recruitment", "bel hiring"],
  ["bel training", "bel training programs", "does bel provide training"],
  ["bel internships", "bel internships opportunities", "bel student programs"],
  ["bel maintenance", "bel maintenance services", "bel maintenance and support"],
  ["bel system integration", "bel integration services", "bel system solutions"],
  ["bel export", "bel export products", "bel international clients"],
  ["bel media", "bel news", "latest bel news"],
  ["bel defense systems", "bel defense products", "bel defense electronics"],
  ["bel environment", "bel environmental efforts", "bel sustainability"],
  ["bel security", "bel cybersecurity", "bel security solutions"],
  ["who created you", "who made you"],
  ["what's your name", "your name"],
  ["what is the time now", "time please"],
  ["date today", "what is today's date"],
];

const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["Yes I am!"],
  ["I'm sorry about that. But I like you."],
  ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
  ["Getting better. How about you?", "Somewhat okay!", "Yeah, fine. Better stay home!"],
  ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
  ["I am always young."],
  ["I am just a bot", "I am a bot. What about you?"],
  ["PixelPunksTeam"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Biryani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
  ["harivenkat,barath,kaniskha,gopal,sheba,tamilarasu"],
  ["buy a new watch to see time"],
  ["BEL provides products such as Radars, Electronic Warfare Systems, Communication Systems, Naval Systems, Optoelectronics, and defense-related devices."],
  ["BEL offers services including system integration, product training, maintenance, upgrades, and customer support."],
  ["BEL's latest products include state-of-the-art radar systems, secure communication solutions, and advanced electronic warfare devices."],
  ["BEL has manufacturing units in Bangalore, Ghaziabad, Panchkula, Hyderabad, Navi Mumbai, Chennai, Machilipatnam, and Kotdwara, among others."],
  ["BEL was founded in 1954 to meet the specialized electronic needs of the Indian defense services."],
  ["BEL's leadership is headed by Mr. Bhanu Prakash Srivastava, who serves as the Chairman & Managing Director of the company."],
  ["BEL's vision is to be a world-class enterprise in professional electronics with a strong focus on the defense sector."],
  ["BEL has received numerous awards, including the SCOPE Excellence Award, CII Industrial Innovation Award, and recognition from the Ministry of Defense."],
  ["BEL has offices and manufacturing units in various locations across India, including Bangalore, Ghaziabad, Hyderabad, Chennai, and more."],
  ["BEL's clients include the Indian Armed Forces, DRDO, ISRO, state police forces, and various international defense organizations."],
  ["BEL's annual revenue is over ₹13,000 crore, making it one of the largest defense electronics companies in India."],
  ["BEL offers a wide range of radar systems such as surveillance radars, fire control radars, and battlefield surveillance systems."],
  ["BEL's electronic warfare systems include jamming devices, signal intelligence systems, and threat detection systems."],
  ["BEL develops communication systems such as software-defined radios, satellite communication systems, and encrypted communication devices."],
  ["BEL provides naval systems including underwater sensors, sonars, fire control systems, and combat management systems."],
  ["BEL's optoelectronics include night vision devices, laser range finders, thermal imagers, and other advanced optical systems."],
  ["BEL collaborates with global defense manufacturers and has joint ventures with international companies to enhance its offerings."],
  ["BEL is listed on the NSE and BSE stock exchanges in India under the symbol 'BEL.' You can check the stock prices there."],
  ["BEL invests heavily in R&D, developing cutting-edge technologies in radar, electronic warfare, and missile defense systems."],
  ["BEL is committed to corporate social responsibility, focusing on education, healthcare, and environmental sustainability."],
  ["BEL provides career opportunities in various fields, including engineering, R&D, and management. Check BEL's career portal for updates."],
  ["Yes, BEL provides extensive training programs for its customers to ensure proper use and maintenance of its products."],
  ["BEL offers internship opportunities for students, especially in engineering and technology fields. Check their website for details."],
  ["BEL offers maintenance services, including repairs, upgrades, and long-term support for all its products."],
  ["BEL provides system integration services, ensuring compatibility between different defense systems and products."],
  ["BEL exports its products to over 50 countries, offering defense electronics, radars, and communication systems to global clients."],
  ["BEL is frequently in the news for its defense contracts and new technological developments. Check BEL's media section for the latest news."],
  ["BEL provides a wide range of defense systems, including missile systems, air defense systems, and battlefield management systems."],
  ["BEL is committed to environmental sustainability, with initiatives focused on reducing carbon emissions and promoting green energy."],
  ["BEL offers cybersecurity solutions for protecting critical infrastructure, including government and military networks."],
  ["I was created by the PixelPunksTeam to provide information and assistance regarding BEL."],
  ["I don’t have a specific name, but you can call me the PIXBOT Assistant!"],
  ["The current time is " + new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' })],
  ["Today's date is " + new Date().toLocaleDateString()],
];

const alternative = [
  "Same here, dude.",
  "That's cool! Go on...",
  "Dude...",
  "Ask something else...",
  "Hey, I'm listening...",
  "I'm sorry, I didn't get that. Can you ask something specific about BEL's products or services?",
  "Could you clarify that? I'm here to help with information about BEL.",
  "I'm not sure about that, but I know a lot about BEL's products and services. Ask me about those.",
  "Please ask about BEL's defense products, services, or something related."
];

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    synth.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon...");
    } else {
        speak("Good Evening...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing PIXELPUNK...");
    wishMe();
});

function getBotReply(input) {
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "").trim();
    let response = compare(userMessage, botReply, text);
    return response ? response : alternative[Math.floor(Math.random() * alternative.length)];
}

function compare(userMessageArray, botReplyArray, string) {
    for (let i = 0; i < userMessageArray.length; i++) {
        if (userMessageArray[i].includes(string)) {
            let replies = botReplyArray[i];
            return replies[Math.floor(Math.random() * replies.length)];
        }
    }
    return null;
}

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript.toLowerCase();
    content.textContent = transcript;
    takeCommand(transcript);
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://whatsapp.com", "_blank");
        speak("Opening Whatsapp...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open bel")) {
        window.open("https://bel-india.in", "_blank");
        speak("Opening bharath electronics limited...");
    } else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening Linkedin...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("This is what I found on the internet regarding " + message);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        speak("This is what I found on Wikipedia regarding " + message);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The current time is " + time);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak("Today's date is " + date);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///', "_blank");
        speak("Opening Calculator");
    } else if (message.includes('chrome')) {
        window.open('Google Chrome:///', "_blank");
        speak("Opening Chrome");
    } else if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes('bel products') || message.includes('bel services')) {
        const botResponse = getBotReply(message);
        speak(botResponse);
        content.textContent = botResponse;
    } else {
        const botResponse = getBotReply(message);
        speak(botResponse);
        content.textContent = botResponse;
    }
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const chatContainer = document.getElementById('chat-container');
        const userBubble = document.createElement('div');
        userBubble.className = 'chat-bubble blue';
        userBubble.textContent = messageText;
        chatContainer.appendChild(userBubble);
        messageInput.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        setTimeout(() => {
            const replyBubble = document.createElement('div');
            replyBubble.className = 'chat-bubble green';
            const botResponse = getBotReply(messageText);
            replyBubble.textContent = botResponse;
            chatContainer.appendChild(replyBubble);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            speak(botResponse);
        }, 1000);
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
