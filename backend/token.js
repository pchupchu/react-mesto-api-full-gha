const jwt = require('jsonwebtoken');

const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU2OGQ0N2ExNDliZmU3ZjBkYWMwOTQiLCJpYXQiOjE2ODMzOTM4NjksImV4cCI6MTY4Mzk5ODY2OX0.7-T1jLvF33gVKPF9WBc47jakRVgIN5HiwfGJZsQG2YM';
const SECRET_KEY_DEV = 'super-strong-secret';

try {
  const payload = jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  console.log('\x1b[31m%s\x1b[0m', `
  Надо исправить. В продакшне используется тот же
  секретный ключ, что и в режиме разработки.
  `);
  console.log('\x1b[31m%s\x1b[0m', process.env);
  console.log('\x1b[31m%s\x1b[0m', process.env.NODE_ENV);
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',

      process.env.NODE_ENV,
    );
  } else {
    console.log(
      '\x1b[33m%s\x1b[0m',
      'Что-то не так',

      process.env.NODE_ENV,
      err,
    );
  }
}
