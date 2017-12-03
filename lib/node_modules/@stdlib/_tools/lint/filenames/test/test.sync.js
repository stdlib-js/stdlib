'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var isArray = require( '@stdlib/assert/is-array' );
var isObjectArray = require( '@stdlib/assert/is-plain-object' ).isPlainObjectArray;
var lint = require( './../lib/sync.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'pattern': null
		};
		lint( opts );
	}
});

tape( 'the function returns an empty array if all filenames are valid', function test( t ) {
	var names;
	var bool;
	var opts;

	opts = {
		'dir': join( __dirname, 'fixtures', 'good' )
	};
	names = lint( opts );

	bool = ( isArray( names ) && names.length === 0 );
	t.equal( bool, true, 'returns an empty array' );
	t.end();
});

tape( 'the function returns an object array if filenames are not valid', function test( t ) {
	var names;
	var opts;

	opts = {
		'dir': join( __dirname, 'fixtures', 'bad' )
	};
	names = lint( opts );

	t.equal( isObjectArray( names ), true, 'returns an object array' );

	t.end();
});



