'use strict';

// MODULES //

var tape = require( 'tape' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isValid = require( './../../../pkg-json/validate' );
var create = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof create, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'name': null
		};
		create( opts );
	}
});

tape( 'the function returns an object', function test( t ) {
	var pkg = create();
	t.strictEqual( isObject( pkg ), true, 'returns an object' );
	t.end();
});

tape( 'the function returns a `package.json` (name)', function test( t ) {
	var opts;
	var pkg;

	opts = {
		'name': '@stdlib/math/base/special/erf'
	};
	pkg = create( opts );

	t.strictEqual( pkg.name, opts.name, 'sets the package name' );

	t.end();
});

tape( 'the function returns a `package.json` (desc)', function test( t ) {
	var opts;
	var pkg;

	opts = {
		'desc': 'Error function.'
	};
	pkg = create( opts );

	t.strictEqual( pkg.description, opts.desc, 'sets the package description' );

	t.end();
});

tape( 'the function returns a `package.json` (keywords)', function test( t ) {
	var opts;
	var pkg;

	opts = {
		'keywords': [
			'math',
			'mathematics',
			'error',
			'function',
			'erf'
		]
	};
	pkg = create( opts );

	t.deepEqual( pkg.keywords, [ 'stdlib' ].concat( opts.keywords ), 'sets the package keywords' );

	t.end();
});

tape( 'the function returns a `package.json` (cmd)', function test( t ) {
	var opts;
	var pkg;

	opts = {
		'cmd': 'erf'
	};
	pkg = create( opts );

	t.strictEqual( typeof pkg.bin.erf, 'string', 'sets the package cmd' );
	t.strictEqual( pkg.bin.erf, './bin/cli', 'provides a default executable path' );

	t.end();
});

tape( 'the function returns a `package.json` (browser)', function test( t ) {
	var opts;
	var pkg;

	opts = {
		'browser': './lib/browser/index.js'
	};
	pkg = create( opts );

	t.strictEqual( pkg.browser, opts.browser, 'sets a browser entry point' );

	t.end();
});

tape( 'in order to return a valid `package.json`, must provide `name`, `desc`, and `keywords`', function test( t ) {
	var opts;
	var pkg;

	opts = {
		'name': '@stdlib/math/base/special/erf',
		'desc': 'Error function.',
		'keywords': [
			'math',
			'mathematics',
			'error',
			'function',
			'erf'
		]
	};
	pkg = create( opts );

	t.strictEqual( isValid( pkg ), true, 'returns a valid `package.json`' );
	t.end();
});
