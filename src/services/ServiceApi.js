import axios from 'axios';
import APIS from '../../src/APIs';

class ApiService {
  constructor() {
    if (!ApiService.instance) {
      ApiService.instance = this;
    }
    // Initialize object
    return ApiService.instance;
  }

  static getInstance() {
    if (!ApiService.myInstance) {
      ApiService.myInstance = new ApiService();
    }
    return this.myInstance;
  }

  getData = async () => {
    try {
      const res = await axios.get(APIS.mocky_io, {});
      return res.data.dataList;
    } catch (error) {
      return error;
    }
  };
}
const ServiceCApi = new ApiService();

export default ServiceCApi;
