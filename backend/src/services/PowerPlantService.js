const BaseService = require('./BaseService')
const PowerPlantRepository = require('../data/PowerPlantRepository')
const logger = require('../util/logger')
const CalculationService = require('../services/CalculationService');
module.exports = class PowerPlantService extends BaseService {
  constructor() {
    super();
    this.ppRepo = new PowerPlantRepository();
    this.calculationService = new CalculationService();
  }
  async getWithIncludes( page) {
    console.log("PPSERVICE");
    let collection = await this.ppRepo.getWithIncludes(page);
    let filteredCollection = JSON.parse(JSON.stringify(collection));
    
    return filteredCollection;
  }
  async getRefValues(){
    console.log("CALLING getRefValues")
    let out=await this.ppRepo.getRefValues()
    console.log('CALLed getRefValues')
    return out    
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
