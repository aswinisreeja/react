const express = require('express');
const app = express();
const router = express.Router();

const checkPass = (req, res, next) => {
  const hasPass = false;

  if (hasPass) {
    console.log('Pass verified');
    next(); 
  } else {
    console.log('Entry Forbidden');
    res.status(403).send('Entry Forbidden'); 
  }
};




router.get('/', (req, res) => {
  res.send('Welcome to the airport!');
});
router.use(checkPass);


router.get('/can-go', (req, res) => {
  res.send('Welcome to the destination!');
});


// Mount the router at /airport
app.use('/airport', router);

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

