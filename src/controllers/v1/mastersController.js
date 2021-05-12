const models = require('../../models/index');

const handleListAllCuisines = async (req, res) => {
  const query = {
    order: ['name'],
    attributes: ['id','name']
  }

  let cuisines = await models.Cuisine.findAll(query)
  res.send(cuisines)
}

module.exports = {
  handleListAllCuisines
}