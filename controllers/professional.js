const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().collection('user').find();
    const lists = await result.toArray();

    res.setHeader('Content-Type', 'application/json');
    if (lists.length > 0) {
      res.status(200).json(lists[0]);
    } else {
      res.status(404).json({ message: 'No user found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getData };