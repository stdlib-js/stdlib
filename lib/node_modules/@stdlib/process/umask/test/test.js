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

var proc = require( 'process' );
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var check = require( './fixtures/check_umask.js' );
var umask = require( './../lib' );


// FIXTURES //

var BINARY_SYMBOLIC = require( './fixtures/binary_to_symbolic.json' );


// VARIABLES //

var INT_TO_SYMBOLIC = int2symbolic();
var SYMBOLIC_TO_INT = symbolic2int();
var MASK = umask();
var opts = {
	'skip': IS_BROWSER || !check()
};


// FUNCTIONS //

/**
* Restores the process mask.
*
* @private
*/
function restore() {
	umask( MASK );
}

/**
* Generates a dictionary mapping integer values to symbolic notation.
*
* @private
* @returns {Object} dictionary
*/
function int2symbolic() {
	var out;
	var i;

	out = {};
	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		out[ BINARY_SYMBOLIC[i][0] ] = BINARY_SYMBOLIC[ i ][ 3 ];
	}
	return out;
}

/**
* Generates a dictionary mapping symbolic notation to integer values.
*
* @private
* @returns {Object} dictionary
*/
function symbolic2int() {
	var octal;
	var out;
	var i;

	out = {};
	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		octal = BINARY_SYMBOLIC[ i ][ 1 ];
		octal = parseInt( octal.toString().substring( 1 ), 8 );
		out[ BINARY_SYMBOLIC[i][3] ] = octal;
	}
	return out;
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof umask, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided only one argument, the function throws an error if not provided either a string, nonnegative integer, or options object', opts, function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			umask( value );
		};
	}
});

tape( 'if provided only one argument, the function throws an error if provided a `symbolic` option which is not a boolean', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'symbolic': value
			};
			umask( opts );
		};
	}
});

tape( 'if provided more than one argument, the function throws an error if the first argument is neither a string nor nonnegative integer', opts, function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			umask( value, {} );
		};
	}
});

tape( 'if provided more than one argument, the function throws an error if the second argument is not an object', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	restore();
	t.end();

	function badValue( value ) {
		return function badValue() {
			umask( MASK, value );
		};
	}
});

tape( 'if provided more than one argument, the function throws an error if provided a `symbolic` option which is not a boolean', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	restore();
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'symbolic': value
			};
			umask( MASK, opts );
		};
	}
});

tape( 'if provided an expression mask, the function throws an error if unable to parse the value', opts, function test( t ) {
	var values;
	var i;

	values = [
		'u=rwx,,g=',
		'b=rwx',
		'u^rwx',
		'u=rwx,g=rx,o=rx,t=rx',
		'u=rwx,g=rx;o=rx',
		'u=rwxvz',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	restore();
	t.end();

	function badValue( value ) {
		return function badValue() {
			umask( value );
		};
	}
});

tape( 'if provided an expression mask, the function throws an error if unable to parse the value (options)', opts, function test( t ) {
	var values;
	var i;

	values = [
		'u=rwx,,g=',
		'b=rwx',
		'u^rwx',
		'u=rwx,g=rx,o=rx,t=rx',
		'u=rwx,g=rx;o=rx',
		'u=rwxvz',
		'beep',
		'boop'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ' + values[ i ] );
	}
	restore();
	t.end();

	function badValue( value ) {
		return function badValue() {
			umask( value, {} );
		};
	}
});

tape( 'if not provided any arguments, the function returns the process mask', opts, function test( t ) {
	var expected = proc.umask();
	t.equal( typeof expected, 'number', 'returns a number' );
	t.equal( umask(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function ignores unrecognized/unsupported options and returns the process mask', opts, function test( t ) {
	var expected = proc.umask();
	t.equal( typeof expected, 'number', 'returns a number' );
	t.equal( umask( {} ), expected, 'returns expected value' );
	restore();
	t.end();
});

tape( 'the function supports returning the process mask in symbolic notation', opts, function test( t ) {
	var expected;
	var actual;
	var mask;
	var opts;

	opts = {
		'symbolic': true
	};
	mask = proc.umask();

	actual = umask( opts );
	expected = INT_TO_SYMBOLIC[ mask ];

	t.equal( actual, expected, 'returns expected value' );

	restore();
	t.end();
});

tape( 'if the `symbolic` option is `false`, the function returns the process mask as an integer value', opts, function test( t ) {
	var opts;
	var mask;

	opts = {
		'symbolic': false
	};
	mask = umask( opts );

	t.equal( typeof mask, 'number', 'returns a number' );
	t.equal( mask, proc.umask(), 'returns expected value' );

	restore();
	t.end();
});

tape( 'if provided a nonnegative integer, the function sets the process mask and returns the previous mask', opts, function test( t ) {
	var old;
	var i;

	for ( i = 0; i < 100; i++ ) {
		old = umask();
		t.equal( umask( i ), old, 'returns previous mask' );
		t.equal( umask(), i, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided a nonnegative integer and the `symbolic` option is `false`, the function sets the process mask and returns the previous mask as an integer value', opts, function test( t ) {
	var opts;
	var old;
	var i;

	opts = {
		'symbolic': false
	};
	for ( i = 100; i < 200; i++ ) {
		old = umask( opts );
		t.equal( typeof old, 'number', 'returns a number' );
		t.equal( umask( i, opts ), old, 'returns previous mask' );
		t.equal( umask( opts ), i, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided a nonnegative integer and the `symbolic` option is `true`, the function sets the process mask and returns the previous mask in symbolic notation', opts, function test( t ) {
	var opts;
	var mask;
	var old;
	var i;

	opts = {
		'symbolic': true
	};
	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		old = umask( opts );
		t.equal( typeof old, 'string', 'returns a string' );

		mask = umask( i, opts );
		t.equal( mask, old, 'returns previous mask' );

		t.equal( umask( opts ), INT_TO_SYMBOLIC[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided an expression mask, the function sets the process mask and returns the previous mask', opts, function test( t ) {
	var mask;
	var old;
	var i;

	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		old = umask();
		t.equal( typeof old, 'number', 'returns a number' );

		mask = INT_TO_SYMBOLIC[ i ];
		t.equal( umask( mask ), old, 'returns previous mask' );

		t.equal( umask(), SYMBOLIC_TO_INT[ mask ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided an expression mask and the `symbolic` option is `false`, the function sets the process mask and returns the previous mask as an integer value', opts, function test( t ) {
	var mask;
	var opts;
	var old;
	var i;

	opts = {
		'symbolic': false
	};
	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		old = umask( opts );
		t.equal( typeof old, 'number', 'returns a number' );

		mask = INT_TO_SYMBOLIC[ i ];
		t.equal( umask( mask, opts ), old, 'returns previous mask' );

		t.equal( umask(), SYMBOLIC_TO_INT[ mask ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided an expression mask, the function supports setting the process mask and returns the previous mask in symbolic notation', opts, function test( t ) {
	var mask;
	var opts;
	var old;
	var i;

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		old = umask( opts );
		t.equal( typeof old, 'string', 'returns a string' );

		mask = INT_TO_SYMBOLIC[ i ];
		t.equal( umask( mask, opts ), old, 'returns previous mask' );

		t.equal( umask( opts ), mask, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports enabling permissions using the "all" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'a+', // no effect
		'a+r',
		'a+w',
		'a+x',
		'a+rw',
		'a+rx',
		'a+wx',
		'a+rwx'
	];
	expected = [
		'u=,g=,o=', // no effect
		'u=r,g=r,o=r',
		'u=w,g=w,o=w',
		'u=x,g=x,o=x',
		'u=rw,g=rw,o=rw',
		'u=rx,g=rx,o=rx',
		'u=wx,g=wx,o=wx',
		'u=rwx,g=rwx,o=rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 511, 'returns expected value' ); // 511 == 0o0777

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports disabling permissions using the "all" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'a-', // no effect
		'a-r',
		'a-w',
		'a-x',
		'a-rw',
		'a-rx',
		'a-wx',
		'a-rwx'
	];
	expected = [
		'u=rwx,g=rwx,o=rwx', // no effect
		'u=wx,g=wx,o=wx',
		'u=rx,g=rx,o=rx',
		'u=rw,g=rw,o=rw',
		'u=x,g=x,o=x',
		'u=w,g=w,o=w',
		'u=r,g=r,o=r',
		'u=,g=,o='
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Set all bits:
		umask( 'u=rwx,g=rwx,o=rwx' );
		t.equal( umask(), 0, 'returns expected value' ); // 0 == 0o0000

		// Disable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports enabling permissions without specifying a user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'+', // no effect
		'+r',
		'+w',
		'+x',
		'+rw',
		'+rx',
		'+wx',
		'+rwx'
	];
	expected = [
		'u=,g=,o=', // no effect
		'u=r,g=r,o=r',
		'u=w,g=w,o=w',
		'u=x,g=x,o=x',
		'u=rw,g=rw,o=rw',
		'u=rx,g=rx,o=rx',
		'u=wx,g=wx,o=wx',
		'u=rwx,g=rwx,o=rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 511, 'returns expected value' ); // 511 == 0o0777

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports disabling permissions without specifying a user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'-', // no effect
		'-r',
		'-w',
		'-x',
		'-rw',
		'-rx',
		'-wx',
		'-rwx'
	];
	expected = [
		'u=rwx,g=rwx,o=rwx', // no effect
		'u=wx,g=wx,o=wx',
		'u=rx,g=rx,o=rx',
		'u=rw,g=rw,o=rw',
		'u=x,g=x,o=x',
		'u=w,g=w,o=w',
		'u=r,g=r,o=r',
		'u=,g=,o='
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Set all bits:
		umask( 'u=rwx,g=rwx,o=rwx' );
		t.equal( umask(), 0, 'returns expected value' ); // 0 == 0o0000

		// Disable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports enabling permissions for the "user" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'u+', // no effect
		'u+r',
		'u+w',
		'u+x',
		'u+rw',
		'u+rx',
		'u+wx',
		'u+rwx'
	];
	expected = [
		'u=,g=,o=', // no effect
		'u=r,g=,o=',
		'u=w,g=,o=',
		'u=x,g=,o=',
		'u=rw,g=,o=',
		'u=rx,g=,o=',
		'u=wx,g=,o=',
		'u=rwx,g=,o='
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 511, 'returns expected value' ); // 511 == 0o0777

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports enabling permissions for the "group" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'g+', // no effect
		'g+r',
		'g+w',
		'g+x',
		'g+rw',
		'g+rx',
		'g+wx',
		'g+rwx'
	];
	expected = [
		'u=,g=,o=', // no effect
		'u=,g=r,o=',
		'u=,g=w,o=',
		'u=,g=x,o=',
		'u=,g=rw,o=',
		'u=,g=rx,o=',
		'u=,g=wx,o=',
		'u=,g=rwx,o='
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 511, 'returns expected value' ); // 511 == 0o0777

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports enabling permissions for the "non-group" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'o+', // no effect
		'o+r',
		'o+w',
		'o+x',
		'o+rw',
		'o+rx',
		'o+wx',
		'o+rwx'
	];
	expected = [
		'u=,g=,o=', // no effect
		'u=,g=,o=r',
		'u=,g=,o=w',
		'u=,g=,o=x',
		'u=,g=,o=rw',
		'u=,g=,o=rx',
		'u=,g=,o=wx',
		'u=,g=,o=rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 511, 'returns expected value' ); // 511 == 0o0777

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports disabling permissions for the "user" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'u-', // no effect
		'u-r',
		'u-w',
		'u-x',
		'u-rw',
		'u-rx',
		'u-wx',
		'u-rwx'
	];
	expected = [
		'u=rwx,g=rwx,o=rwx', // no effect
		'u=wx,g=rwx,o=rwx',
		'u=rx,g=rwx,o=rwx',
		'u=rw,g=rwx,o=rwx',
		'u=x,g=rwx,o=rwx',
		'u=w,g=rwx,o=rwx',
		'u=r,g=rwx,o=rwx',
		'u=,g=rwx,o=rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Set all bits:
		umask( 'u=rwx,g=rwx,o=rwx' );
		t.equal( umask(), 0, 'returns expected value' ); // 0 == 0o0000

		// Disable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports disabling permissions for the "group" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'g-', // no effect
		'g-r',
		'g-w',
		'g-x',
		'g-rw',
		'g-rx',
		'g-wx',
		'g-rwx'
	];
	expected = [
		'u=rwx,g=rwx,o=rwx', // no effect
		'u=rwx,g=wx,o=rwx',
		'u=rwx,g=rx,o=rwx',
		'u=rwx,g=rw,o=rwx',
		'u=rwx,g=x,o=rwx',
		'u=rwx,g=w,o=rwx',
		'u=rwx,g=r,o=rwx',
		'u=rwx,g=,o=rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Set all bits:
		umask( 'u=rwx,g=rwx,o=rwx' );
		t.equal( umask(), 0, 'returns expected value' ); // 0 == 0o0000

		// Disable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports disabling permissions for the "non-group" user class', opts, function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'o-', // no effect
		'o-r',
		'o-w',
		'o-x',
		'o-rw',
		'o-rx',
		'o-wx',
		'o-rwx'
	];
	expected = [
		'u=rwx,g=rwx,o=rwx', // no effect
		'u=rwx,g=rwx,o=wx',
		'u=rwx,g=rwx,o=rx',
		'u=rwx,g=rwx,o=rw',
		'u=rwx,g=rwx,o=x',
		'u=rwx,g=rwx,o=w',
		'u=rwx,g=rwx,o=r',
		'u=rwx,g=rwx,o='
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Set all bits:
		umask( 'u=rwx,g=rwx,o=rwx' );
		t.equal( umask(), 0, 'returns expected value' ); // 0 == 0o0000

		// Disable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), expected[ i ], 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'while not encouraged, the function allows for overriding permission settings in the same expression mask', opts, function test( t ) {
	var opts = {
		'symbolic': true
	};

	umask( 'a-rwx,u+r,g+w,o+x' );
	t.equal( umask( opts ), 'u=r,g=w,o=x', 'returns expected value' );

	umask( 'a+rwx,u-r,g-w,o-x' );
	t.equal( umask( opts ), 'u=wx,g=rx,o=rw', 'returns expected value' );

	umask( 'ugo=rwx,a=w' );
	t.equal( umask( opts ), 'u=w,g=w,o=w', 'returns expected value' );

	umask( 'a=rwx,u=r,g=rw,o=x' );
	t.equal( umask( opts ), 'u=r,g=rw,o=x', 'returns expected value' );

	restore();
	t.end();
});
