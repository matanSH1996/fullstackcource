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

exports.updateBird = async (req,res)=>{
  try{
    const { id } = req.params.id
    const targetedBird = await Bird.findByIdAndUpdate( id, req.body)
    res.json({
      success:true,
      data: targetedBird
    }) 

  } catch(error) {
    res.json ({
      success:false,
      data: error.message
    })
  }
}

exports.deleteBird = async (req,res) =>{
  try{
    const targetedBird = await Bird.deleteOne( {_id : req.params.id} )
    res.json({
      success:true,
      data: "the bird has successfully deleted"
    }) 

  } catch(error) {
    res.json ({
      success:false,
      data: error.message
    })
  }
}