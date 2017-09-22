var ObjectID = require('mongodb').ObjectID;
module.exports = function(app,db){
    app.post('/restaurant',(req,res)=> { 
        const restaurant = {
              address:req.body.address,
              borough:req.body.borough,
              cuisine:req.body.cuisine,
              grades:req.body.grades,
              name:req.body.name
              };
        db.collection('restaurants').insert(restaurant,(err,result) => {
            if(err){
                res.send({'error':'Hata oluştu...'});
            }
            else{
                res.send(result.ops[0]);
            }
            });
         }
    );
};