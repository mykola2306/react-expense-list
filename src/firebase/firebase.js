import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('Changed', snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('Added', snapshot.key, snapshot.val())
// })







// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });

//   console.log(expenses)
// }, (e) => {
//   console.log('Error getching data', e)
// }) 




// database.ref('expenses').once('value')  
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });

//     console.log(expenses)
//   })
//   .catch((e) => {
//     console.log('Error getching data', e)
//   })



// database.ref('expenses').push({
//   description: 'Buy food',
//   note: 'But bread, milk, eggs',
//   amount: 32,
//   createdAt: 512321312
// });







// database.ref('notes').push({
//   title: 'title 2',
//   body: 'note description 2'
// })


// database.ref('notes/-LbDc_yVugoVS777r03r').update({
//   title: 'Updated title'
// })





// ================================
// const firebaseNotes = {
//   notes: {
//     'someID': {
//       title: 'note 1'
//     }, 
//     'someID2': {
//       title: 'note 2'
//     }
//   }
// }

// const notes = [{
//   id: 1, 
//   title: 'note 1'
// }, {
//   id: 2, 
//   title: 'note 2'
// }];

// database.ref().set(notes)
// database.ref().set(firebaseNotes)

// ================================











// database.ref().on('value', (snapshot) => {
//   const {name, job} = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}.`)
// })

// setTimeout(() => {
//   database.ref().update({
//     name: 'Vlod Goral',
//     'job/title': 'Product Designer',
//     'job/company': 'Google'
//   }).then(() => {
//     console.log('Data was saved')
//   })
// }, 3000);


// ===================
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref().update({
//     age: '25'
//   })
// }, 2000);

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 4000);

// setTimeout(() => {
//   database.ref().update({
//     age: '30'
//   })
// }, 6000);
// ===================

// database.ref('job')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   })
//   .catch((e) => {
//     console.log('Error getching data', e)
//   })


// database.ref().set({
//   name: 'Mykola Goral',
//   age: 24,
//   stressLevel: 5,
//   job: {
//     title: 'Front-end Developer',
//     company: 'EPAM'
//   },
//   hobbies: {
//     read: 'ATG TDG',
//     active: 'Riding bicycle'
//   }
// }).then(() => {
//   console.log('Data was saved!');
// }).catch((e) => {
//   console.log('This Failed:', e);
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'hobbies/read': 'Novels'
// })

// database.ref().update({
//   name: 'Vlod',
//   age: 21,
//   job: 'FED',
//   isSingle: null
// })

// database.ref('isSingle').remove()
//   .then(() => {
//   console.log('Data was removed');
// }).catch((e) => {
//   console.log('Remove failed:', e)
// })



























// database.ref('age').set(21);
// database.ref('hobbies/read').set('ATG TDG OPM');
// console.log('Send Data')
// database.ref('attributes').set({
//   height: 192,
//   weight: 75
// }).then(() => {
//   console.log('Data was saved')
// }).catch((e) => {
//   console.log('This failed:', e)
// })