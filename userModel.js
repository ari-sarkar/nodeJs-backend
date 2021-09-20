var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: String,
    gender: String,
    mobile_number: String,
    create_date: {
        type: Date,
        default: Date.now
    }
},
{myJsonProperty: Object}
);
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}