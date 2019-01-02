const mongoose = require('mongoose');
const mongoSettings = require('../settings/mongo');

let URI = `${mongoSettings.PROTOCOL}://`;
if (mongoSettings.USERNAME && mongoSettings.PASSWORD) {
  URI += `${mongoSettings.USERNAME}:${mongoSettings.PASSWORD}@`;
}
URI += `${mongoSettings.HOST}`;
if (mongoSettings.PORT) {
  URI += `:${mongoSettings.PORT}`;
}
URI += `/${mongoSettings.DB}`;

mongoose.connect(URI, {useNewUrlParser: true}).catch((err) => {
  console.error(err);
});

module.exports = mongoose;