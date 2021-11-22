"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var port = 3000;
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/objectives', function (req, res) {
    res.render('learningObjectives');
});
app.get('/tutorial', function (req, res) {
    res.render('tutorial');
});
app.get('/history', function (req, res) {
    res.render('history');
});
app.get('/analytical', function (req, res) {
    res.render('analytical');
});
app.get('/demo', function (req, res) {
    res.render('demo');
});
app.get('/resource', function (req, res) {
    res.render('resource');
});
app.listen(port, function () {
    console.log("The application is listening on port ".concat(port, "!"));
});
