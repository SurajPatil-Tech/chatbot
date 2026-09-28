import { Bot } from "../model/bot.model.js";
import { User } from "../model/user.model.js";

const botResponses = {
    // GENERAL CONVERSATION
    "hello": "Hi! How can I help you today?",
    "hi": "Hello! Welcome to BotSpoof.",
    "hey": "Hey! What would you like to know?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm BotSpoof, your virtual assistant.",
    "who made you": "I was created by developers to help answer your questions.",
    "what can you do": "I can answer questions about programming, web development, MERN stack, and interview preparation.",
    "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs!",
    "thank you": "You're welcome! Happy to help.",
    "bye": "Goodbye! Have a great day.",
    "i love you": "That's sweet! I'm here to help you anytime.",
    "what is the time": "I can't see a clock, but your device can tell you the current time.",

    // PROGRAMMING LANGUAGES
    "what is python": "Python is a high-level, interpreted programming language known for its simple and readable syntax.\n\n• Easy to learn and use.\n• Supports object-oriented and functional programming.\n• Used in AI, machine learning, automation, and web development.\n• Popular libraries include NumPy, Pandas, and TensorFlow.",

    "what is java": "Java is a high-level, object-oriented programming language.\n\n• Platform-independent through the Java Virtual Machine (JVM).\n• Follows the principle Write Once, Run Anywhere.\n• Supports multithreading and automatic memory management.\n• Commonly used in enterprise applications, backend systems, and Android development.",

    "what is javascript": "JavaScript is a high-level programming language primarily used to make web pages interactive.\n\n• Runs in web browsers and on servers using Node.js.\n• Supports asynchronous programming.\n• Used in frontend and backend development.\n• Popular frameworks and libraries include React, Angular, and Vue.js.",

    "what is typescript": "TypeScript is a programming language developed by Microsoft. It is a superset of JavaScript that adds static typing.\n\n• Helps detect errors during development.\n• Supports interfaces, types, and generics.\n• Compiles into JavaScript.\n• Commonly used in large web applications.",

    // HTML AND CSS
    "what is html": "HTML stands for HyperText Markup Language. It is used to structure content on web pages.\n\n• Defines headings, paragraphs, images, links, and forms.\n• Uses elements and tags.\n• Works with CSS for styling and JavaScript for interactivity.\n• HTML5 is the modern version of HTML.",

    "what is css": "CSS stands for Cascading Style Sheets. It is used to style and design web pages.\n\n• Controls colors, fonts, spacing, and layouts.\n• Supports responsive design.\n• Provides Flexbox and Grid for layouts.\n• Works with HTML to create attractive websites.",

    "what is responsive design": "Responsive web design makes websites adapt to different screen sizes.\n\n• Uses flexible layouts.\n• Uses CSS media queries.\n• Supports mobile, tablet, and desktop screens.\n• Improves usability across devices.",

    // REACT
    "what is react": "React is a JavaScript library used to build interactive user interfaces.\n\n• Developed and maintained by Meta.\n• Uses reusable components.\n• Uses a Virtual DOM to efficiently update the UI.\n• Supports Hooks such as useState and useEffect.\n• Commonly used to build single-page applications.",

    "what are react components": "React components are reusable building blocks of a React application.\n\n• They help divide the UI into smaller parts.\n• Components can accept data through props.\n• They can manage state.\n• They are commonly written as JavaScript functions.",

    "what are props in react": "Props are used to pass data from a parent component to a child component in React.\n\n• Props are read-only.\n• They help make components reusable.\n• They can pass strings, numbers, objects, arrays, and functions.",

    "what is usestate": "useState is a React Hook that allows functional components to manage state.\n\n• It returns the current state and a setter function.\n• Updating state triggers a re-render.\n• It is commonly used for forms, counters, and UI interactions.",

    "what is useeffect": "useEffect is a React Hook used to synchronize a component with external systems.\n\n• It can run after rendering.\n• It can fetch data from APIs.\n• It supports cleanup functions.\n• Its dependency array controls when the effect runs.",

    "what is virtual dom": "The Virtual DOM is a lightweight representation of the UI maintained by React.\n\n• React uses it to determine what changed in the UI.\n• It helps update the actual DOM efficiently.\n• It is one part of React's rendering process.",

    "what is react router": "React Router is a library for handling navigation in React applications.\n\n• Supports client-side routing.\n• Allows navigation without full-page reloads.\n• Supports dynamic routes and nested routes.\n• Commonly used in single-page applications.",

    // NODE.JS
    "what is node": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.\n\n• Allows JavaScript to run outside the browser.\n• Commonly used to build backend applications and APIs.\n• Uses an event-driven, non-blocking I/O model.\n• Has a large package ecosystem through npm.",

    "what is node js": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.\n\n• Allows JavaScript to run on the server.\n• Commonly used to create REST APIs.\n• Uses an event-driven, non-blocking I/O model.\n• Supports packages through npm.",

    "what is npm": "npm stands for Node Package Manager.\n\n• It is used to install and manage JavaScript packages.\n• It comes with Node.js.\n• The package.json file stores project dependencies and scripts.\n• Commands include npm install, npm start, and npm run dev.",

    "what is express": "Express.js is a lightweight web framework for Node.js.\n\n• Used to build REST APIs and web servers.\n• Supports middleware.\n• Provides routing for HTTP requests.\n• Commonly used with MongoDB and React.",

    "what is middleware": "Middleware is a function that runs during the request-response cycle.\n\n• It can access the request and response objects.\n• It can modify requests and responses.\n• It can perform authentication, logging, and validation.\n• In Express, middleware commonly uses req, res, and next.",

    "what is rest api": "A REST API is an interface that follows the principles of Representational State Transfer.\n\n• Uses HTTP methods such as GET, POST, PUT, PATCH, and DELETE.\n• Often exchanges data in JSON format.\n• Commonly uses resource-based URLs.\n• Helps frontend and backend applications communicate.",

    "what is cors": "CORS stands for Cross-Origin Resource Sharing.\n\n• It is a browser security mechanism.\n• It controls which origins can access resources.\n• It is commonly configured in Express applications using the cors package.\n• It helps frontend applications communicate with backend APIs.",

    // MONGODB
    "what is mongodb": "MongoDB is a NoSQL document-oriented database.\n\n• Stores data in flexible BSON documents.\n• Does not require fixed relational tables.\n• Supports indexing and aggregation.\n• Commonly used in MERN stack applications.",

    "what is mongoose": "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.\n\n• Provides schemas and models.\n• Supports validation.\n• Helps perform database operations.\n• Supports middleware and relationships through references.",

    "what is schema": "A schema defines the structure and rules for data.\n\n• In Mongoose, schemas define document fields and their types.\n• They can include validation rules.\n• Models are created from schemas.\n• Schemas help maintain consistent data.",

    "what is mongodb atlas": "MongoDB Atlas is a cloud-based database service for MongoDB.\n\n• Provides managed database hosting.\n• Supports backups and monitoring.\n• Offers database access controls.\n• Can be connected to Node.js applications using a connection string.",

    // MERN STACK
    "what is mern": "MERN is a full-stack JavaScript technology stack used to build web applications.\n\n• MongoDB: NoSQL database.\n• Express.js: Backend web framework.\n• React: Frontend library.\n• Node.js: JavaScript runtime.\n\nThese technologies work together to build modern web applications.",

    "what is mern stack": "MERN is a full-stack JavaScript technology stack used to build web applications.\n\n• MongoDB stores application data.\n• Express.js handles backend routes and APIs.\n• React builds the user interface.\n• Node.js runs the backend JavaScript code.\n\nIt allows developers to use JavaScript across the application.",

    "why use mern stack": "The MERN stack is commonly used to build full-stack web applications.\n\n• JavaScript can be used on both frontend and backend.\n• React supports reusable UI components.\n• MongoDB provides flexible document storage.\n• Express and Node.js support API development.\n• The ecosystem has many open-source tools.",

    "how does mern stack work": "A typical MERN application works like this:\n\n1. The user interacts with the React frontend.\n2. React sends an HTTP request to the Express backend.\n3. Express processes the request using Node.js.\n4. The backend reads or writes data in MongoDB.\n5. The backend sends a response, often in JSON.\n6. React updates the user interface using the response.",

    "what is full stack development": "Full-stack development involves building both the frontend and backend of an application.\n\n• Frontend handles the user interface.\n• Backend handles business logic and APIs.\n• Database stores application data.\n• Full-stack developers work across these layers.",

    // HTTP AND AUTHENTICATION
    "what is http": "HTTP stands for HyperText Transfer Protocol. It is used for communication between clients and servers.\n\n• GET retrieves data.\n• POST submits data.\n• PUT replaces a resource.\n• PATCH partially updates a resource.\n• DELETE removes a resource.",

    "what is jwt": "JWT stands for JSON Web Token. It is a compact format for securely transmitting claims between parties.\n\n• Commonly used for authentication.\n• Contains a header, payload, and signature.\n• Can be signed using a secret or private key.\n• A server can verify the token before granting access.",

    "what is authentication": "Authentication is the process of verifying a user's identity.\n\n• Commonly uses passwords or other credentials.\n• Can use tokens such as JWT.\n• Login systems commonly authenticate users before granting access.",

    "what is authorization": "Authorization determines what an authenticated user is allowed to access.\n\n• Authentication verifies identity.\n• Authorization checks permissions.\n• Role-based access control is a common approach.",

    // JAVASCRIPT CONCEPTS
    "what is a variable": "A variable is a named storage location used to hold a value.\n\n• JavaScript supports let, const, and var.\n• let allows reassignment.\n• const prevents reassignment of the variable binding.\n• var has function scope.",

    "what is an array": "An array is a data structure used to store multiple values in an ordered list.\n\n• JavaScript arrays are zero-indexed.\n• They can contain different data types.\n• Common methods include map(), filter(), and reduce().",

    "what is an object": "An object in JavaScript is a collection of properties represented as key-value pairs.\n\n• Properties can store values or functions.\n• Objects are commonly used to represent structured data.\n• Properties can be accessed using dot or bracket notation.",

    "what is a function": "A function is a reusable block of code designed to perform a task.\n\n• Functions can accept parameters.\n• They can return values.\n• JavaScript supports declarations, expressions, and arrow functions.",

    "what is promise": "A Promise is a JavaScript object representing the eventual completion or failure of an asynchronous operation.\n\n• It can be pending, fulfilled, or rejected.\n• It supports then(), catch(), and finally().\n• It is commonly used for API requests.",

    "what is async await": "async and await are JavaScript keywords used to write asynchronous code in a more readable way.\n\n• An async function always returns a Promise.\n• await pauses execution inside an async function until a Promise settles.\n• try/catch can handle errors.",

    "what is es6": "ES6, also known as ECMAScript 2015, introduced important JavaScript features.\n\n• let and const.\n• Arrow functions.\n• Classes.\n• Template literals.\n• Destructuring.\n• Promises and modules.",

    // INTERVIEW PREPARATION
    "tell me about yourself": "A good interview introduction should be clear and concise.\n\n1. Introduce yourself and your education.\n2. Mention your technical skills.\n3. Explain one or two relevant projects.\n4. Describe your career goals.\n\nKeep your answer honest and relevant to the role.",

    "why should we hire you": "This question gives you an opportunity to explain how your skills match the role.\n\n• Highlight relevant technical skills.\n• Discuss projects or practical experience.\n• Mention your willingness to learn.\n• Give specific examples that support your answer.",

    "what is your strength": "When discussing your strengths in an interview, choose qualities that you can support with real examples.\n\nExamples include problem-solving, teamwork, communication, adaptability, and willingness to learn.",

    "what is your weakness": "When answering this interview question, mention a genuine area you are improving and explain what you are doing to improve it.\n\nChoose an example that is honest and relevant without undermining your ability to perform the job.",

    "what is leadership": "Leadership is the ability to guide and support people toward a shared goal.\n\n• Communication.\n• Accountability.\n• Decision-making.\n• Teamwork.\n• Problem-solving.",

    // GENERAL KNOWLEDGE
    "what is g20": "The G20 is an international forum for cooperation on major economic and financial issues.\n\n• It was established in 1999.\n• It includes 19 countries and the European Union and African Union.\n• It discusses issues such as economic growth, trade, and sustainable development.\n• India hosted the G20 Leaders' Summit in 2023.",

    "who is prime minister of india": "Narendra Modi has served as India's Prime Minister since May 2014.",

    "who is virat kohli": "Virat Kohli is an Indian international cricketer known for his batting.\n\n• He has represented India in international cricket.\n• He has captained the Indian team.\n• He is known for his performances in run chases.",

    "what is ipl": "The Indian Premier League (IPL) is a professional Twenty20 cricket league in India.\n\n• It began in 2008.\n• It features franchise-based teams.\n• Matches are played in the T20 format.\n• It combines cricket with sports entertainment."
};

// Topics that support different question formats
const topics = {
    python: "what is python",
    java: "what is java",
    javascript: "what is javascript",
    typescript: "what is typescript",
    html: "what is html",
    css: "what is css",
    "responsive design": "what is responsive design",
    react: "what is react",
    "react components": "what are react components",
    props: "what are props in react",
    usestate: "what is usestate",
    useeffect: "what is useeffect",
    "virtual dom": "what is virtual dom",
    "react router": "what is react router",
    "node.js": "what is node js",
    node: "what is node",
    npm: "what is npm",
    express: "what is express",
    middleware: "what is middleware",
    "rest api": "what is rest api",
    cors: "what is cors",
    mongodb: "what is mongodb",
    mongoose: "what is mongoose",
    schema: "what is schema",
    "mongodb atlas": "what is mongodb atlas",
    mern: "what is mern stack",
    "mern stack": "what is mern stack",
    "full stack development": "what is full stack development",
    http: "what is http",
    jwt: "what is jwt",
    authentication: "what is authentication",
    authorization: "what is authorization",
    variable: "what is a variable",
    array: "what is an array",
    object: "what is an object",
    function: "what is a function",
    promise: "what is promise",
    "async await": "what is async await",
    es6: "what is es6"
};

const questionTypes = [
    "what is",
    "what are",
    "explain",
    "tell me about",
    "define",
    "describe",
    "what do you mean by"
];

export const Message = async (req, res) => {
    try {
        const { text } = req.body;

        if (typeof text !== "string" || !text.trim()) {
            return res.status(400).json({
                error: "Text cannot be empty"
            });
        }

        const normalizedText = text
            .toLowerCase()
            .trim()
            .replace(/[?!.,]/g, "")
            .replace(/\s+/g, " ");

        const user = await User.create({
            sender: "user",
            text: text.trim()
        });

        let botResponse = botResponses[normalizedText];

        if (!botResponse) {
            const isQuestion = questionTypes.some(
                phrase =>
                    normalizedText === phrase ||
                    normalizedText.startsWith(phrase + " ")
            );

            if (isQuestion) {
                const sortedTopics = Object.entries(topics)
                    .sort((a, b) => b[0].length - a[0].length);

                for (const [keyword, responseKey] of sortedTopics) {
                    const escapedKeyword = keyword.replace(
                        /[.*+?^${}()|[\]\\]/g,
                        "\\$&"
                    );

                    const keywordPattern = new RegExp(
                        `(^|\\s)${escapedKeyword}(\\s|$)`
                    );

                    if (keywordPattern.test(normalizedText)) {
                        botResponse = botResponses[responseKey];
                        if (botResponse) break;
                    }
                }
            }
        }

        botResponse =
            botResponse ||
            "Sorry, I don't understand that yet. Please try asking about JavaScript, React, Node.js, Express, MongoDB, or the MERN stack.";

        const bot = await Bot.create({
            text: botResponse
        });

        return res.status(200).json({
            userMessage: user.text,
            botMessage: bot.text
        });
    } catch (error) {
        console.error("Error in Message Controller:", error);

        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};