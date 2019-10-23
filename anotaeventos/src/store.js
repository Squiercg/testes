import { seedData } from './seed.js';

export const store = {
  state: {
    seedData 
  },
  setNota (nota) {
    this.state.seedData.push({"item": nota, "data": new Date().toLocaleString()})
  },
  getContagem() {
    return this.state.seedData.length ;
  }
}
