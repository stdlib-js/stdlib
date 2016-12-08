'use strict';

var isValid = require( './../lib' );

var pkg = require( './../package.json' );

var bool = isValid( pkg );
console.log( bool );

var errs = isValid.errors;
console.log( errs );
