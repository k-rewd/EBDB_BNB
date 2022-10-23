// backend/routes/api/users.js
const express = require('express')
const router = express.Router();

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

//middleware that will check keys and validate them
const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a first name.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a last name.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

// Sign up
router.post('/', validateSignup, async (req, res) => {
  const { firstName, lastName, email, password, username } = req.body;

  const duplicateEmail = await User.findOne({
    where: {
      email: email
    }
  })
  const duplicateusername = await User.findOne({
    where: {
      username: username
    }
  })

  if (duplicateEmail) {
    res.status(403)
    return res.json({
      "message": "User already exists",
      "statusCode": 403,
      "errors": ["User with that email already exists"]
      
    })
  }
  if (duplicateusername) {
    res.status(403)
    return res.json({
      "message": "User already exists",
      "statusCode": 403,
      "errors": ["User with that username already exists"]
    })
  } 
    let user = await User.signup({ firstName, lastName, email, username, password });

    const token = await setTokenCookie(res, user);
    const userObj = user.toSafeObject()
    userObj.token = token

    return res.json(
      userObj
    );
  }
);

module.exports = router;