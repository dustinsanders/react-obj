require('babel-register');
require('./_testdom.js');
var init = require('../src').init;
var React = require('react');

init(React);
