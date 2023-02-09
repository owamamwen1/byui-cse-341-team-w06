const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');
const validation = require('../middleware/validate.js');

// GET All data
router.get('/', contactsController.getAllContact);

// GET by Id
router.get('/:id', contactsController.getSingleContact);
// POST
router.post('/', validation.saveContact,contactsController.createContact);
// PUT
router.put('/:id', validation.saveContact, contactsController.updateContact);
// DELETE
router.delete('/:id', contactsController.deleteContact);

module.exports = router;