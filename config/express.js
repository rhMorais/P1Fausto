var	express	=	require('express'); 
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var consign = require('consign');

module.exports = function()	{ 
    var app = express();

    app.set('port', 3000);
    app.set('ip', '127.0.0.1');

    //app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    consign({cwd: 'app'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};