// seed.js will run by script "npm run seed"
// seed test data to the database

const mongoose = require('mongoose')
const Application = require('./applications')
const db = require('../../config/db')

const testApps = [
    { company: 'Boeing', role: 'Software Engineer', submitted: true, interview: false }
]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Application.deleteMany()
            .then(deletedApplications => {
                console.log('the deleted apps: ', deletedApplications)
                // Add apps to db
                Application.create(testApps)
                    .then(newApps => {
                        console.log('Here are the new Apps:', newApps)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })