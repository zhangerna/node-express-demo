var Mock = require("mockjs");
var express = require("express");
var router = express.Router()

router.use("/profile", function (req, res) {
   console.log(req.body);
   var data = Mock.mock({
       'list|1-10': [{
           'id|+1': 1
       }]
   })
    return res.json(data)
});

router.use("/object", function (req, res) {
   var Random = Mock.Random;
   var template = {
       "list|1-10": [{}],
       "number1|1-100.1-10": 1,

   }
   var data = Mock.toJSONSchema(template)
   return res.json(data)
});

module.exports = router;