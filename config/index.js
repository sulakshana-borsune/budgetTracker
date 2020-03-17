const {connect} = require('mongoose')

module.exports = connect( process.env.MONGODB_URL || process.env.LOCAL_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})