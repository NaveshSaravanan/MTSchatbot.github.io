// DOM Elements
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatInput = document.querySelector(".chat-input textarea");
const sendBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

// FAQ Responses (Key-Value Pairs)
const faqResponses = {
    "I": "O",
    "hello": "Hi there! How can I help you today? 😊",
    "hi": "Hello! Ask me anything about FAQs.",
    "what is your name": "I'm FAQ Bot, your virtual assistant!",
    "how are you": "I'm just a bot, but I'm functioning well! 😄",
    "bye": "Goodbye! Feel free to return if you have more questions!",
    "thanks": "You're welcome! Happy to help.",
    "what can you do": "I answer frequently asked questions. Try asking me anything!",
    "where are you located": "We are located in Kulim, Kedah, Malaysia.",
    "location": "We are located in Kulim, Kedah, Malaysia.",

    // RORO Bin-related queries
    "price of roro bin": "The price of the bin is RM 180-250.",
    "roro bin": "The price of the bin is RM 180-250.",

    // Scrap-related queries
    "scrap": "yes we do buy scrap items",
    "harga scrap": "Please key in the item you want to know the price for. EX : Besi, Plastic, Paper, Aluminium, Copper, Iron",
    "how to recycle": "You can recycle by bringing your items to us or contacting us for pickup.",
    "recycle": "You can recycle by bringing your items to us or contacting us for pickup.",
    "pickup": "We offer pickup services for large quantities. Please contact us for details.",
    "pickup service": "We offer pickup services for large quantities. Please contact us for details.",
    "pickup service available": "We offer pickup services for large quantities. Please contact us for details.",
    "how to contact": "You can contact us at <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "how to order": "You can order by calling us at <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "how to buy": "You can buy by calling us at <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "how to sell": "You can sell by calling us at <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "how to get roro bin": "You can get a RORO bin by contacting us at <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "how to get roro bin price": "You can get a RORO bin by contacting us at <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    
    // Scrap Prices
    "besi": "RM0.80-RM1.00 per kg",
    "plastic": "RM0.50 per kg",
    "paper": "RM0.10 per kg",
    "aluminium": "RM5.00 per kg",
    "copper": "RM25.00 per kg",
    "iron": "RM0.80-RM1.00 per kg",
    "kotak": "RM0.10 per kg",
    "carton": "RM0.10 per kg",
    "kertas": "RM0.10 per kg",
    "plastic": "RM0.50 per kg",
    "can": "RM4.00 per kg",
    "steel": "RM3.00 per kg",
    
    // Spare Parts
    "spare parts": "Yes we do sell spare parts. Please enter contact us for more details.Contact: <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "spare parts available": "Yes we do sell spare parts. Please enter contact us for more details.Contact: <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",
    "spare parts price": "Yes we do sell spare parts. Please enter contact us for more details.Contact: <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>.",

    // Conatct and Payment
    "how to pay": "You can pay via bank transfer or cash on delivery.",
    "contact": `Chat with us on <a href="https://wa.me/600165417743" target="_blank" style="color: #724ae8; text-decoration: underline;">WhatsApp</a>!`,
    "whatsapp": `Need help? <a href="https://wa.me/600165417743" target="_blank" style="color: #724ae8; font-weight: bold;">Click here to message us on WhatsApp</a>.`,
    "default": "Sorry, I didn’t understand. Contact us via <a href='https://wa.me/600165417743' target='_blank'>WhatsApp</a>."
};

// Toggle chatbot visibility
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
    chatInput.focus(); // Auto-focus input when opened
});

closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

// Create a chat <li> element
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    chatLi.innerHTML = className === "outgoing" 
        ? `<p>${message}</p>` 
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    return chatLi;
};

// Handle user input
const handleChat = () => {
    const userMessage = chatInput.value.trim().toLowerCase();
    if (!userMessage) return;

    // Add user message to chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;

    setTimeout(() => {
        // Generate bot response
        let botResponse = faqResponses["default"];
        for (const key in faqResponses) {
            if (userMessage.includes(key)) {
                botResponse = faqResponses[key];
                break;
            }
        }
        // Add bot response
        chatbox.appendChild(createChatLi(botResponse, "incoming"));
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 600);
};

// Event listeners
sendBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault(); // Prevents new line on Enter
        handleChat();
    }
});

// Auto-open chatbot for testing (optional)
// document.body.classList.add("show-chatbot");