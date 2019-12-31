/* jshint esversion: 6 */
const Twilio = require("twilio");

const client = new Twilio("TWILIO_ACCOUNT_SID", "AUTH_TOKEN");

client.messages
.list()
    .then(messages => console.log(`The most recent message is ${messages[0].body}`)
    ).catch(err => console.error(err));

console.log('Gathering your message');