'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
var findCLIs = require( './../lib/async.js' );


// VARIABLES //

var dir = resolve( __dirname, '..' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof findCLIs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		findCLIs( opts, noop );
	}
});

tape( 'if provided a callback argument which is not a function, the function throws an error (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findCLIs( value );
		};
	}
});

tape( 'if provided a callback argument which is not a function, the function throws an error (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findCLIs( {}, value );
		};
	}
});

tape( 'the function returns an error to a provided callback if an error is encountered while searching a directory', function test( t ) {
	var findCLIs = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	findCLIs( clbk );

	function glob() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( new Error( 'beep' ) );
		}
	}

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if an error is encountered while reading `package.json` files', function test( t ) {
	var findCLIs;
	var opts;

	findCLIs = proxyquire( './../lib/async.js', {
		'./read_pkgs.js': readPkgs
	});
	opts = {
		'dir': dir
	};

	findCLIs( opts, clbk );

	function readPkgs() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( new Error( 'beep' ) );
		}
	}

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to resolve any packages', function test( t ) {
	var findCLIs = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	findCLIs( clbk );

	function glob() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( null, [] );
		}
	}

	function clbk( error, files ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( files ), true, 'returns an array' );
		t.strictEqual( files.length, 0, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns a string array (if at least one `package.json` references a CLI; otherwise, returns an empty array)', function test( t ) {
	var opts = {
		'dir': dir
	};
	findCLIs( opts, clbk );
	function clbk( error, files ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isStringArray( files ), true, 'returns a string array' );
		t.end();
	}
});
