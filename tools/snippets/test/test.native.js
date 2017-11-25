'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var TODO = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( TODO instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof TODO, 'function', 'main export is a function' );
	t.end();
});

// TODO: add tests
