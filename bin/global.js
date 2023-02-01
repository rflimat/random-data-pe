#!/usr/bin/env node
const randomDataPe = require("../src/index.js");

console.log(`Numero de serie: ${randomDataPe.generateSerialNumber()}`);
console.log(`Codigo de producto: ${randomDataPe.generateProductCode()}`);
console.log(`RUC: ${randomDataPe.generateRUC()}`);
console.log(`DNI: ${randomDataPe.generateDNI()}`);
console.log(`Celular: ${randomDataPe.generateCellphoneNumber()}`);
console.log(`Telefono: ${randomDataPe.generatePhoneNumber()}`);