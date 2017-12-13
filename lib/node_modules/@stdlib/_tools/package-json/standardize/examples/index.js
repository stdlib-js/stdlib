'use strict';

var pkg = require( './../package.json' );
var standardize = require( './../lib' );

var out = standardize( pkg );
console.dir( out );
