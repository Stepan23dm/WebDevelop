const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render("indLayout/addlist", {
        viewTitle: "Расчет ИМТ"
    });
});


router.post('/', (req, res) => {
    let value1 = req.body.value1;
    let value2 = req.body.value2;
    let resIMT = (value2 / Math.pow( (value1/100), 2 )).toFixed(1);

    res.render("indLayout/addlist", {
        viewTitle: "Расчет ИМТ",
        result: resIMT,
        result2: getResult(resIMT),
    });
})

function getResult(resIMT){
    if(resIMT < 18.5){
        return "Underweight 😒";
    }else if(resIMT >= 18.5 && resIMT <= 24.9 ){
        return "Normal Weight 😍";
    }else if(resIMT >= 25 && resIMT <= 29.9 ){
        return "Overweight 😮";
    }else{
        return "Obese 😱";
    }
    
}

module.exports = router;