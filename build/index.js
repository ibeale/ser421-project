"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
    res.render('home');
});
app.listen(3000, function () {
    console.log('The application is listening on port 3000!');
});
