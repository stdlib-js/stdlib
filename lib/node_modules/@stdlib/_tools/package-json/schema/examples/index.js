'use strict';

var Ajv = require( 'ajv' );
var schema = require( './../lib' );

var pkg = require( './../package.json' );
var ajv = new Ajv();

var bool = ajv.validate( schema(), pkg );
console.log( bool );

var errs = ajv.errors;
console.log( errs );
