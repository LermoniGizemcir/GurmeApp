const restroutes = require('./rest_routes');
module.exports = function(app,db)
{
    restroutes(app,db);
};