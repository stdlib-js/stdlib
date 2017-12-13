'use strict';

// MODULES //

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var isValid = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isValid, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a valid `package.json`', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './../package.json' );
	bool = isValid( pkg );

	t.strictEqual( bool, true, 'returns true' );
	t.strictEqual( isValid.errors, null, 'errors property is `null`' );
	t.end();
});

tape( 'the function returns `false` if provided an invalid `package.json`', function test( t ) {
	var bool;
	var pkg;

	pkg = {
		'beep': 'boop'
	};
	bool = isValid( pkg );

	t.strictEqual( bool, false, 'returns false' );
	t.strictEqual( isArray( isValid.errors ), true, 'errors property is an array' );
	t.end();
});
