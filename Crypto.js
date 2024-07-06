const crypto=require("crypto")
const secret="abcdefe";
const hash=crypto.createHmac('Sha256',secret).update('AITS').digest('hex');
console.log(hash);