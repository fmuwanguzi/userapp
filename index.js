//Add all models
const db = require('./models');

//create a user inside of user table
// db.user.create({
//     firstName: 'Billy',
//     lastName: 'Bob',
//     age: 40
// }).then(createdUser => {
//     console.log(createdUser.get());
// })

//read from the user's table
// db.user.findOne({
//     where: { firstName: 'Felix' }
// }).then(foundUser => {
//     console.log(foundUser.get());
// })

//Find all users

// db.user.findAll().then(allUsers => {
//     console.log(allUsers);
//     console.log(allUsers[0].get());//first index 
// });


//update a user

// db.user.update({
//     lastName: 'Bobby' 
// },{
//     where: { firstName: 'Billy' }
// }).then(numbRowsChnaged => {
//     console.log(numbRowsChnaged);
// });

//delete a user

db.user.destroy({
    where: { lastName: 'Bobby' }
}).then(numRowsDeleted => {
    console.log(numRowsDeleted);
});


