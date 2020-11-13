const express = require('express');

const router = express.Router();

// 텍스트 안오면 그냥 메시지 뿌리기
router.get('/', function(req, res){
    res.send('Upper Case Router');
});

// 텍스트가 오면 upperCase화
router.use('/:text', function(req, res){
    res.send(req.params.text.toUpperCase());
});

module.exports =  router; // commonJS
// = export default router; // ES6

// export const router = a;
// module.exports = {
//  router ?????  
// }