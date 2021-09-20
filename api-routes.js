// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome to this Assignment, crafted with love!',
    });
});
// Import contact controller
var contactController = require('./userController');
// Contact routes
router.route('/person')
    .get(contactController.index)
    .post(contactController.new);
router.route('/person/:id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;