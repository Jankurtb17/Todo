const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet')
const app = express();


//Middleware
app.use(bodyParser.json());
app.use(cors());

// app.use(
//   // [
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       connectSrc: ["'self'", 'https://checkout.stripe.com'],
//       frameSrc: ["'self'", 'https://checkout.stripe.com'],
//       childSrc: ["'self'", 'https://checkout.stripe.com'],
//       scriptSrc: ["'self'", 'https://checkout.stripe.com'],
//       styleSrc: [
//         "'self'",
//         'https://fonts.googleapis.com',
//         'https://checkout.stripe.com',
//       ],
//       fontSrc: ["'self'", 'https://fonts.gstatic.com'],
//       imgSrc: ["'self'", 'https://*.stripe.com', 'https://res.cloudinary.com'],
//       baseUri: ["'self'"],
//     },
//   })
//   // ]
// )

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle production 

if(process.env.NODE_ENV === 'production') {
  // Statice folder
  app.use(express.static(__dirname + '/public/'))
  // Handle SPA something
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
