require("../app");

const Celebrity = require("../models/celebrity.model");

const celebrities = [
    { name: "Brad Pitt", occupation: "Actor", catchPhrase: "What's in the Box?" },
    { name: "John Mayer", occupation: "Musician", catchPhrase: "Your Body is a Wonderland" },
    { name: "Che Guevara", occupation: "Revolutionary", catchPhrase: "Independencia ou muerte" },
  ];


//   Celebrity.insertMany(celebrities).then((celebFromDB) => {
//     console.log(`celebrities created ${celebFromDB.length}`)
// });