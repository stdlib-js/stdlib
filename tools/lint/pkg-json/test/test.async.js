'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var isObjectArray = require( '@stdlib/assert/is-object-array' );
var lint = require( './../lib/async.js' );


// VARIABLES //

var dir = resolve( __dirname, '..' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		lint( opts, noop );
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
			lint( value );
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
			lint( {}, value );
		};
	}
});

tape( 'the function returns an error to a provided callback if an error is encountered while searching a directory', function test( t ) {
	var lint = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	lint( clbk );

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

tape( 'the function returns an error to a provided callback if a fatal error is encountered while reading `package.json` files', function test( t ) {
	var lint;
	var opts;

	lint = proxyquire( './../lib/async.js', {
		'./lint.js': mock
	});
	opts = {
		'dir': dir
	};

	lint( opts, clbk );

	function mock() {
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

tape( 'the function returns `null` if unable to resolve any packages', function test( t ) {
	var lint = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	lint( clbk );

	function glob() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( null, [] );
		}
	}

	function clbk( error, errs ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( errs, null, 'returns `null`' );
		}
		t.end();
	}
});

tape( 'the function returns `null` if all `package.json` files are valid', function test( t ) {
	var opts = {
		'dir': dir
	};
	lint( opts, clbk );

	function clbk( error, errs ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( errs, null, 'returns `null`' );
		}
		t.end();
	}
});

tape( 'the function returns an array of lint errors to a provided callback if one or more `package.json` files are invalid', function test( t ) {
	var lint;
	var opts;

	lint = proxyquire( './../lib/async.js', {
		'./lint.js': mock
	});
	opts = {
		'dir': dir
	};

	lint( opts, clbk );

	function mock() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( null, [{'file':'beep','message':'boop'}] );
		}
	}

	function clbk( error, errs ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( isObjectArray( errs ), true, 'returns an object array' );
		}
		t.end();
	}
});
