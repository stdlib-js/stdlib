'use strict';

// MODULES //

var tape = require( 'tape' );
var path = require( 'path' );
var getRoot = require( './../lib/root.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof getRoot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', function test( t ) {
	t.equal( typeof getRoot( '' ), 'string', 'returns a string' );
	t.end();
});

tape( 'the function resolves a relative descendant directory', function test( t ) {
	var dpath;
	var root;
	var dir;

	dir = './@stdlib/math/base';

	root = getRoot( '' );
	dpath = getRoot( dir );

	t.equal( dpath, path.resolve( root, dir ), 'returns resolved descendant directory' );
	t.end();
});

tape( 'the function does not allow accessing parent directories', function test( t ) {
	var dpath;
	var root;
	var dir;

	dir = '../../../../';

	root = getRoot( '' );
	dpath = getRoot( dir );

	t.equal( dpath, root, 'does not return parent directory' );

	dir = '/proc';
	dpath = getRoot( dir );

	t.equal( dpath, root, 'does not return parent directory' );

	t.end();
});
