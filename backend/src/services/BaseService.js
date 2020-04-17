const BaseRepository = require('../data/BaseRepository')
const PowerPlantRepository = require('../data/PowerPlantRepository')

module.exports = class BaseService {
  constructor() {
    this.baseRepo = new BaseRepository();
  }
  async get(modelName, page) {
    console.log("BASESERVICE");
    return this.baseRepo.get(modelName, page);
  }
}


// let pp = new PowerPlantRepository();
// console.log(pp.get(1));


// let get = async function (modelName, page) {
//   let baseRepo = new BaseRepository(modelName);
//   const response = await baseRepo.get(page);
//   return response;
// };

// let getById = function(req, res) {
//   const response = BaseRepository.getById(req, res);
//   return response;
// };

// let create = function(req, res) {
//   const response = BaseRepository.create(req, res);
//   return response;
// };

// let update = function(req, res) {
//   const response = BaseRepository.update(req, res);
//   return response;
// };

// let remove = function(req, res) {
//   const response = BaseRepository.remove(req, res);
//   return response;
// };

// module.exports = {
//   //   create: create,
//   get: get,
//   //   getById: getById,
//   //   update: update,
//   //   remove: remove
// };
