// express에서 미들웨어 순서도 중요!

const express = require('express');
const uppercaseRouter = require('./routers/uppercase');

//필수
//const cors = require('cors');
//app 서버랑 거의 같음
const app = express();

// origin이 다른 요청에 대해서도 허용하겠다는 말임.
// 전처리 같은 거..
// cors() => function(req, res, next) { next (); return (() => {})}
//app.use(cors());
//app.use('/public', cors()) // public에 허용해놓은 오리진들은 허용해줌.
// app.use([path, url들어간다는듯?, 삭제가능], function(req, res, next){})

// 모든 리퀘스트에 대해 다 json화 해줌.
app.use(express.json());

// app.use(function (req, res, next){
//     console.log('미들웨어 1 호출');
//     next();
// })

// get: http protocol의 get에만 반응
// url로 필요한거 다 보낼 수 있을 때 get 사용
// cf. 변수가 많을 때, post 사용
app.get('/', function(req, res){
    //EXPRESS는 메시지 타입이 뭔지 알아서 처리함.
    // cf. res.setHeader('Content-Type', 'text/plain'); 해줄필요없음
    res.send('Hello world!');
});

// '/uppercase' 로 요청이 오면 uppercaseRouter 미들웨어 호출
app.use('/uppercase', uppercaseRouter);

// app.use(function (req, res, next){
//     console.log('미들웨어 2 호출');
//     res.end();
// })

app.listen(8000, function(){
    console.log('app listening to port 8000');
});

