// Import contact model
Contact = require("./userModel");
// Handle index actions
exports.index = function (req, res) {
  Contact.get(function (err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};
// Handle create contact actions
exports.new = function (req, res) {
  var contact = new Contact({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    mobile_number: req.body.mobile_number,
  });
  // save the contact and check for errors
  JSON.stringify(contact);
  contact.save(function (err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New contact created!",
      data: contact,
    });
  });
};
// Handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if (err) res.send(err);
    res.json({
      message: "Contact details loading..",
      data: contact,
    });
  });
};
// Handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.id, function (err, contact) {
    if (err) res.send(err);
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.age = req.body.age;
    contact.mobile_number = req.body.mobile_number;
    // save the contact and check for errors
    contact.save(function (err) {
      if (err) res.json(err);
      res.json({
        message: "Contact Info updated",
        data: contact,
      });
    });
  });
};
// Handle delete contact
exports.delete = function (req, res) {
  Contact.remove(
    {
      _id: req.params.id,
    },
    function (err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Contact deleted",
      });
    }
  );
};
