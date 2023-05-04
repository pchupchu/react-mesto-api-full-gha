const router = require('express').Router();
const { validationSignup, validationSignin } = require('../utils/validation');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/not-found-err');

const userRouter = require('./users');
const cardRouter = require('./cards');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
router.use('/users', auth, userRouter);
router.use('/cards', auth, cardRouter);
router.post('/signin', validationSignin, login);
router.post('/signup', validationSignup, createUser);
router.use('*', auth, (req, res, next) => next(new NotFoundError('Запрашиваемый адрес не найден')));

module.exports = router;
