var	express	=	require('express'); 
var consign = require('consign');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

module.exports = function()	{ 
    var app = express();

    app.set('port', 3000);
    app.set('ip', '127.0.0.1');

    //app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(cors());

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    consign({cwd: 'app'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};