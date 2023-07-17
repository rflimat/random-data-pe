/* Generate letter */
const generateLetter = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return characters.charAt(Math.trunc(Math.random() * characters.length));
}

/* Generate Serial Number "Numero de serie" */
const generateSerialNumber = () => {
    let serialNumber = generateLetter();
    for(let i = 1; i <= 16; i++) {
        let intRandom = Math.trunc(Math.random()*9);
        if (intRandom % 2 == 0) {
            serialNumber += generateLetter();
        } else {
            serialNumber += String(Math.trunc(Math.random()*9));
        }
    }
    return serialNumber;
}

/* Generate Product Code "Codigo de producto" */
const generateProductCode = () => {
    let productCode = "";
    for(let i = 1; i <= 13; i++) 
        productCode += String(Math.trunc(Math.random()*9));
    return productCode;
}

/* Generate RUC */
const generateRUC = () => {
    let ruc = String(Math.trunc(Math.random()*2) + 1) + "0";
    for(let i = 1; i <= 9; i++) 
        ruc += String(Math.trunc(Math.random()*9));
    return ruc;
}

/* Generate DNI */
const generateDNI = () => {
    let dni = "";
    for(let i = 1; i <= 8; i++) 
        dni += String(Math.trunc(Math.random()*9));
    return dni;
}

/* Generate CellphoneNumber "Celular" */
const generateCellphoneNumber = () => {
    let cellphoneNumber = "+519";
    for(let i = 1; i <= 8; i++) 
        cellphoneNumber += String(Math.trunc(Math.random()*9));
    return cellphoneNumber;
}

/* Generate PhoneNumber "Telefono" */
const generatePhoneNumber = () => {
    let phoneNumber = "";
    let regionalPrefixes = [1, 41, 43, 83, 54, 66, 76, 84, 67, 62, 56, 65, 64, 44, 74, 65, 73, 51, 42, 52, 72, 61];
    let intRandom = regionalPrefixes[Math.trunc(Math.random()*regionalPrefixes.length)];
    if (intRandom === 1) {
        phoneNumber += `(0${intRandom}) `;
        for(let i = 1; i <= 7; i++) 
            phoneNumber += String(Math.trunc(Math.random()*9));
    } else {
        phoneNumber += `(0${intRandom}) `;
        for(let i = 1; i <= 6; i++) 
            phoneNumber += String(Math.trunc(Math.random()*9));
    }
    return phoneNumber;
}

module.exports = {
    generateSerialNumber,
    generateProductCode,
    generateRUC,
    generateDNI,
    generateCellphoneNumber,
    generatePhoneNumber
}
