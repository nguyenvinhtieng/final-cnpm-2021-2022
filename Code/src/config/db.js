const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(process.env.CONECTION_STRING_MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully')
    }
    catch (e) { console.log('connect failure') }
}
function close() { return mongoose.disconnect(); }

module.exports = { connect, close };