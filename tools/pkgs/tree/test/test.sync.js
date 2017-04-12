'use strict';

// MODULES //

var tape = require( 'tape' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var pkgTree = require( './../lib/sync.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof pkgTree, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		pkgTree( opts );
	}
});

tape( 'the function returns an object', function test( t ) {
	var tree = pkgTree();
	t.equal( isObject( tree ), true, 'returns an object' );
	t.end();
});

tape( 'the function returns an object (dir option)', function test( t ) {
	var tree;
	var opts;

	opts = {
		'dir': './@stdlib/math/base'
	};
	tree = pkgTree( opts );
	t.equal( isObject( tree ), true, 'returns an object' );
	t.end();
});



