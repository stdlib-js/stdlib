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

var tape = require( 'tape' );
var umask = require( './../lib/browser.js' );


// FIXTURES //

var BINARY_SYMBOLIC = require( './fixtures/binary_to_symbolic.json' );


// VARIABLES //

var INT_TO_SYMBOLIC = int2symbolic();
var MASK = umask();


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


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof umask, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided only one argument, the function throws an error if not provided either a string, nonnegative integer, or options object', function test( t ) {
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

tape( 'if provided only one argument, the function throws an error if provided a `symbolic` option which is not a boolean', function test( t ) {
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

tape( 'if provided more than one argument, the function throws an error if the first argument is neither a string nor nonnegative integer', function test( t ) {
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

tape( 'if provided more than one argument, the function throws an error if the second argument is not an object', function test( t ) {
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

tape( 'if provided more than one argument, the function throws an error if provided a `symbolic` option which is not a boolean', function test( t ) {
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

tape( 'if provided an expression mask, the function throws an error if unable to parse the value', function test( t ) {
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

tape( 'if provided an expression mask, the function throws an error if unable to parse the value (options)', function test( t ) {
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

tape( 'if not provided any arguments, the function returns the process mask', function test( t ) {
	var expected = 0;
	t.equal( typeof expected, 'number', 'returns a number' );
	t.equal( umask(), expected, 'returns expected value' );
	t.end();
});

tape( 'the function ignores unrecognized/unsupported options and returns the process mask', function test( t ) {
	var expected = 0;
	t.equal( typeof expected, 'number', 'returns a number' );
	t.equal( umask( {} ), expected, 'returns expected value' );
	restore();
	t.end();
});

tape( 'the function supports returning the process mask in symbolic notation', function test( t ) {
	var expected;
	var actual;
	var opts;

	opts = {
		'symbolic': true
	};
	actual = umask( opts );
	expected = 'u=rwx,g=rwx,o=rwx';

	t.equal( actual, expected, 'returns expected value' );

	restore();
	t.end();
});

tape( 'if the `symbolic` option is `false`, the function returns the process mask as an integer value', function test( t ) {
	var opts;
	var mask;

	opts = {
		'symbolic': false
	};
	mask = umask( opts );

	t.equal( typeof mask, 'number', 'returns a number' );
	t.equal( mask, 0, 'returns expected value' );

	restore();
	t.end();
});

tape( 'if provided a nonnegative integer, the function sets the process mask and returns the previous mask', function test( t ) {
	var old;
	var i;

	for ( i = 0; i < 100; i++ ) {
		old = umask();
		t.equal( umask( i ), old, 'returns previous mask' );
		t.equal( umask(), 0, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided a nonnegative integer and the `symbolic` option is `false`, the function sets the process mask and returns the previous mask as an integer value', function test( t ) {
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
		t.equal( umask( opts ), 0, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided a nonnegative integer and the `symbolic` option is `true`, the function sets the process mask and returns the previous mask in symbolic notation', function test( t ) {
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

		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided an expression mask, the function sets the process mask and returns the previous mask', function test( t ) {
	var mask;
	var old;
	var i;

	for ( i = 0; i < BINARY_SYMBOLIC.length; i++ ) {
		old = umask();
		t.equal( typeof old, 'number', 'returns a number' );

		mask = INT_TO_SYMBOLIC[ i ];
		t.equal( umask( mask ), old, 'returns previous mask' );

		t.equal( umask(), 0, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided an expression mask and the `symbolic` option is `false`, the function sets the process mask and returns the previous mask as an integer value', function test( t ) {
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

		t.equal( umask(), 0, 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'if provided an expression mask, the function supports setting the process mask and returns the previous mask in symbolic notation', function test( t ) {
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

		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports mask expressions containing an "all" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'a+',
		'a+r',
		'a+w',
		'a+x',
		'a+rw',
		'a+rx',
		'a+wx',
		'a+rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 0, 'returns expected value' );

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports mask expressions containing an "all" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'a-',
		'a-r',
		'a-w',
		'a-x',
		'a-rw',
		'a-rx',
		'a-wx',
		'a-rwx'
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
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports mask expressions without a user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'+',
		'+r',
		'+w',
		'+x',
		'+rw',
		'+rx',
		'+wx',
		'+rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 0, 'returns expected value' );

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports mask expressions specifying a user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'-',
		'-r',
		'-w',
		'-x',
		'-rw',
		'-rx',
		'-wx',
		'-rwx'
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
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports providing a mask expression enabling permissions for the "user" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'u+',
		'u+r',
		'u+w',
		'u+x',
		'u+rw',
		'u+rx',
		'u+wx',
		'u+rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 0, 'returns expected value' );

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports providing a mask expression enabling permissions for the "group" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'g+',
		'g+r',
		'g+w',
		'g+x',
		'g+rw',
		'g+rx',
		'g+wx',
		'g+rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 0, 'returns expected value' );

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports providing a mask expression enabling permissions for the "non-group" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'o+',
		'o+r',
		'o+w',
		'o+x',
		'o+rw',
		'o+rx',
		'o+wx',
		'o+rwx'
	];

	opts = {
		'symbolic': true
	};

	for ( i = 0; i < values.length; i++ ) {
		// Clear all bits:
		umask( 'u=,g=,o=' );
		t.equal( umask(), 0, 'returns expected value' );

		// Enable permissions:
		umask( values[ i ] );
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports providing a mask expression disabling permissions for the "user" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'u-',
		'u-r',
		'u-w',
		'u-x',
		'u-rw',
		'u-rx',
		'u-wx',
		'u-rwx'
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
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports providing a mask expression disabling permissions for the "group" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'g-',
		'g-r',
		'g-w',
		'g-x',
		'g-rw',
		'g-rx',
		'g-wx',
		'g-rwx'
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
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'the function supports providing a mask expression disabling permissions for the "non-group" user class', function test( t ) {
	var values;
	var opts;
	var i;

	values = [
		'o-',
		'o-r',
		'o-w',
		'o-x',
		'o-rw',
		'o-rx',
		'o-wx',
		'o-rwx'
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
		t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );
	}
	restore();
	t.end();
});

tape( 'while not encouraged, the function allows for providing mask expressions overriding permission settings in the same expression mask', function test( t ) {
	var opts = {
		'symbolic': true
	};

	umask( 'a-rwx,u+r,g+w,o+x' );
	t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );

	umask( 'a+rwx,u-r,g-w,o-x' );
	t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );

	umask( 'ugo=rwx,a=w' );
	t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );

	umask( 'a=rwx,u=r,g=rw,o=x' );
	t.equal( umask( opts ), 'u=rwx,g=rwx,o=rwx', 'returns expected value' );

	restore();
	t.end();
});
