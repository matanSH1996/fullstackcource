const Bird = require("../models/bird");

exports.createBird = async (req, res) => {
  try {
    const newBird = new Bird(req.body);
    await newBird.save();
    res.json({
      success: true,
      data: newBird,
    });
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.getAllBirds = async (req, res) => {
  const birds = await Bird.find();
  res.json({
    success: true,
    data: birds,
  });
};
