/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var readFile = require( '@stdlib/fs/read-file' ).sync;
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var compile = tryRequire( resolve( __dirname, '..', 'lib' ) );
var opts = {
	'skip': ( IS_BROWSER || (compile instanceof Error) )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof compile, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', opts, function test( t ) {
	var str;

	str = compile( [] );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( [ 1.0 ] );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( [ 1.0, 2.0, 3.0 ] );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( new Float64Array( 501 ) );
	t.equal( typeof str, 'string', 'returns a string' );

	t.end();
});

tape( 'the function returns a string (dtype=float64)', opts, function test( t ) {
	var options;
	var str;

	options = {
		'dtype': 'float64'
	};

	str = compile( [], options );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( [ 1.0 ], options );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( [ 1.0, 2.0, 3.0 ], options );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( new Float64Array( 501 ) );
	t.equal( typeof str, 'string', 'returns a string' );

	t.end();
});

tape( 'the function returns a string (dtype=float32)', opts, function test( t ) {
	var options;
	var str;

	options = {
		'dtype': 'float32'
	};

	str = compile( [], options );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( [ 1.0 ], options );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( [ 1.0, 2.0, 3.0 ], options );
	t.equal( typeof str, 'string', 'returns a string' );

	str = compile( new Float64Array( 501 ) );
	t.equal( typeof str, 'string', 'returns a string' );

	t.end();
});

tape( 'if provided an empty coefficient array, the function returns a module string containing an exported function which always returns `0`', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'empty.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [] );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty coefficient array, the function returns a module string containing an exported function which always returns `0` (dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'empty.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [], {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty coefficient array, the function returns a module string containing an exported function which always returns `0` (dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'empty.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [], {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a module string containing an exported function which always returns that coefficient', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'single_coefficient.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ 3.14 ] );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a module string containing an exported function which always returns that coefficient (dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'single_coefficient.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ 3.14 ], {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a module string containing an exported function which always returns that coefficient (dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'single_coefficient.float32.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( new Float32Array( [ 3.14 ] ), {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a module string containing an exported function which always returns that coefficient (integer value)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'single_coefficient_integer.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ -3.0 ] );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a module string containing an exported function which always returns that coefficient (integer value; dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'single_coefficient_integer.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ -3.0 ], {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a module string containing an exported function which always returns that coefficient (integer value; dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'single_coefficient_integer.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( new Float32Array( [ -3.0 ] ), {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly1.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ 1.0, 2.5, 3.14, -1.0 ] );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly1.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ 1.0, 2.5, 3.14, -1.0 ], {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly1.float32.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( new Float32Array( [ 1.0, 2.5, 3.14, -1.0 ] ), {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly2.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ -3.14, 0.0 ] );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly2.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ -3.14, 0.0 ], {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly2.float32.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( new Float32Array( [ -3.14, 0.0 ] ), {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly3.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ 1.0, 2.5, 3.14, -1.0, 5.0, 2.0, 3.5, 8.0, 4.2, 1.0 ] );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly3.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( [ 1.0, 2.5, 3.14, -1.0, 5.0, 2.0, 3.5, 8.0, 4.2, 1.0 ], {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;

	fpath = join( __dirname, 'fixtures', 'evalpoly3.float32.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	actual = compile( new Float32Array( [ 1.0, 2.5, 3.14, -1.0, 5.0, 2.0, 3.5, 8.0, 4.2, 1.0 ] ), { // eslint-disable-line max-len
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (large number of coefficients; integers)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var c;
	var i;

	fpath = join( __dirname, 'fixtures', 'loop1.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	c = [];
	for ( i = 0; i < 501; i++ ) {
		c.push( i );
	}
	actual = compile( c );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (large number of coefficients; integers; dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var c;
	var i;

	fpath = join( __dirname, 'fixtures', 'loop1.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	c = [];
	for ( i = 0; i < 501; i++ ) {
		c.push( i );
	}
	actual = compile( c, {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (large number of coefficients; integers; dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var c;
	var i;

	fpath = join( __dirname, 'fixtures', 'loop1.float32.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	c = [];
	for ( i = 0; i < 501; i++ ) {
		c.push( i );
	}
	actual = compile( new Float32Array( c ), {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (large number of coefficients; decimals)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var c;
	var i;

	fpath = join( __dirname, 'fixtures', 'loop2.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	c = [];
	for ( i = 0; i < 501; i++ ) {
		c.push( i + 0.1 );
	}
	actual = compile( c );
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (large number of coefficients; decimals; dtype=float64)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var c;
	var i;

	fpath = join( __dirname, 'fixtures', 'loop2.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	c = [];
	for ( i = 0; i < 501; i++ ) {
		c.push( i + 0.1 );
	}
	actual = compile( c, {
		'dtype': 'float64'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a module string containing an exported function which evaluates a polynomial (large number of coefficients; decimals; dtype=float32)', opts, function test( t ) {
	var expected;
	var actual;
	var fpath;
	var fopts;
	var c;
	var i;

	fpath = join( __dirname, 'fixtures', 'loop2.float32.js.txt' );
	fopts = {
		'encoding': 'utf8'
	};
	expected = readFile( fpath, fopts );

	c = [];
	for ( i = 0; i < 501; i++ ) {
		c.push( i + 0.5 );
	}
	actual = compile( new Float32Array( c ), {
		'dtype': 'float32'
	});
	t.equal( actual, expected, 'returns expected value' );

	t.end();
});
