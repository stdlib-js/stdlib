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
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var find = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof find, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			find( value, {}, function noop() {} );
		};
	}
});

tape( 'the function throws an error if the `callback` value is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			find( [], value );
		};
	}
});

tape( 'the function throws an error if the `options` value is not a simple object', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			find( [], value, function noop() {} );
		};
	}
});

tape( 'the function throws an error if the option to limit the number of found values is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		2.4,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			find( [], {
				'k': value
			}, function noop() {} );
		};
	}
});

tape( 'the function throws an error if the option to specify the return values is not a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			find( [], {
				'returns': value
			}, function noop() {} );
		};
	}
});

tape( 'the function throws an error if the option to specify the return values is not recognized', function test( t ) {
	t.throws( foo, TypeError, 'throws an error when provided unrecognized value' );

	function foo() {
		find( [], {
			'returns': 'unknown_values_beep'
		}, function noop() {} );
	}
	t.end();
});

tape( 'the function returns indices of elements which satisfy a test condition', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ 3, 2, 5, 3, 2 ];
	expected = [ 0, 1, 3, 4 ];

	actual = find( data, {
		'returns': 'indices'
	}, condition );
	t.deepEqual( actual, expected, 'returns correct indices for array' );

	data = new Int32Array( [ 3, 2, 5, 3, 2 ] );
	expected = [ 0, 1, 3, 4 ];

	actual = find( data, {
		'returns': 'indices'
	}, condition );
	t.deepEqual( actual, expected, 'returns correct indices for a typed array' );

	data = 'Ceterum censeo';
	expected = [ 1, 3, 9, 12 ];

	actual = find( data, {
		'returns': 'indices'
	}, condition2 );
	t.deepEqual( actual, expected, 'returns correct indices for a string' );

	t.end();

	function condition( val ) {
		return val < 5;
	}

	function condition2( val ) {
		return val === 'e';
	}
});

tape( 'the function returns values of elements which satisfy a test condition', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [ 3, 2, 5, 3, 2 ];
	expected = [ 3, 2, 3, 2 ];
	actual = find( data, {
		'returns': 'values'
	}, condition );
	t.deepEqual( actual, expected, 'returns correct values for an array' );

	data = new Float64Array( [ 3, 2, 5, 3, 2 ] );
	expected = [ 3, 2, 3, 2 ];
	actual = find( data, {
		'returns': 'values'
	}, condition );
	t.deepEqual( actual, expected, 'returns correct values for a typed array' );

	data = 'Ceterum censeo';
	expected = [ 'e', 'e', 'e', 'e' ];
	actual = find( data, {
		'returns': 'values'
	}, condition2 );
	t.deepEqual( actual, expected, 'returns correct values for a string' );

	t.end();

	function condition( val ) {
		return val < 5;
	}

	function condition2( val ) {
		return val === 'e';
	}
});

tape( 'the function returns a limited number of indices or values', function test( t ) {
	var expected;
	var actual;
	var data;

	function condition( val ) {
		return val < 5;
	}

	data = [ 3, 2, 5, 3, 2 ];

	// Indices:
	expected = [ 0, 1 ];
	actual = find( data, {
		'returns': 'indices',
		'k': 2
	}, condition );

	t.deepEqual( actual, expected, 'returns limited number of indices' );

	// Values:
	expected = [ 3, 2 ];
	actual = find( data, {
		'returns': 'values',
		'k': 2
	}, condition );

	t.deepEqual( actual, expected, 'returns limited number of values' );
	t.end();
});

tape( 'the function returns indices/values in reverse order', function test( t ) {
	var expected;
	var actual;
	var data;

	function condition( val ) {
		return val < 5;
	}

	data = [ 3, 2, 5, 3, 2 ];

	// Indices:
	expected = [ 4, 3, 1, 0 ];
	actual = find( data, {
		'returns': 'indices',
		'k': -4
	}, condition );

	t.deepEqual( actual, expected, 'returns indices in reverse order' );

	// Values:
	expected = [ 2, 3, 2, 3 ];
	actual = find( data, {
		'returns': 'values',
		'k': -4
	}, condition );

	t.deepEqual( actual, expected, 'returns values in reverse order' );
	t.end();
});

tape( 'the function returns a limited number of indices or values when searching in reverse order', function test( t ) {
	var expected;
	var actual;
	var data;

	function condition( val ) {
		return val < 5;
	}

	data = [ 3, 2, 5, 3, 2 ];

	// Indices:
	expected = [ 4, 3 ];
	actual = find( data, {
		'returns': 'indices',
		'k': -2
	}, condition );

	t.deepEqual( actual, expected, 'returns limited number of indices in reverse order' );

	// Values:
	expected = [ 2, 3 ];
	actual = find( data, {
		'returns': 'values',
		'k': -2
	}, condition );

	t.deepEqual( actual, expected, 'returns limited number of values in reverse order' );
	t.end();
});

tape( 'the function returns an empty array if no elements satisfy the condition', function test( t ) {
	var expected;
	var actual;
	var data;

	function condition( val ) {
		return val > 5;
	}

	data = [ 3, 2, 5, 3, 2 ];

	expected = [];
	actual = find( data, condition );

	t.deepEqual( actual, expected, 'returns empty array' );
	t.end();
});

tape( 'the function returns an empty array if the options to limit results is 0', function test( t ) {
	var expected;
	var actual;
	var data;

	function condition( val ) {
		return val < 5;
	}

	data = [ 3, 2, 5, 3, 2 ];

	expected = [];
	actual = find( data, {
		'k': 0
	}, condition );

	t.deepEqual( actual, expected, 'returns empty array' );
	t.end();
});

tape( 'the function returns both indices and values of array elements which satisfy a test condition', function test( t ) {
	var expected;
	var actual;
	var data;

	function condition( val ) {
		return val < 5;
	}

	data = [ 3, 2, 5, 3, 2 ];

	// Begin-to-end:
	expected = [ [ 0, 3 ], [ 1, 2 ], [ 3, 3 ], [ 4, 2 ] ];
	actual = find( data, {
		'returns': '*'
	}, condition );

	t.deepEqual( actual, expected, 'returns both indices and values' );

	// End-to-begin:
	expected = [ [ 4, 2 ], [ 3, 3 ] ];
	actual = find( data, {
		'k': -2,
		'returns': '*'
	}, condition );

	t.deepEqual( actual, expected, 'returns both indices and values in reverse order' );
	t.end();
});
