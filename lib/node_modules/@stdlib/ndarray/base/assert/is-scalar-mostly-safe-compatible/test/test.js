/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isScalarMostlySafeCompatible = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isScalarMostlySafeCompatible, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is not a supported data type', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			isScalarMostlySafeCompatible( 3.14, value );
		};
	}
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (generic)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, true ],
		[ -5, true ],
		[ 3.14, true ],
		[ -3.14, true ],
		[ 127, true ],        // int8
		[ 255, true ],        // uint8
		[ 32767, true ],      // int16
		[ 65535, true ],      // uint16
		[ 2147483647, true ], // int32
		[ 4294967295, true ], // uint32
		[ '5', true ],
		[ true, true ],
		[ false, true ],
		[ null, true ],
		[ {}, true ],
		[ new Complex128( 3.0, 5.0 ), true ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'generic' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (binary)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, true ],
		[ -5, false ],
		[ 3.14, false ],
		[ -3.14, false ],
		[ 127, true ],         // int8
		[ 255, true ],         // uint8
		[ 32767, false ],      // int16
		[ 65535, false ],      // uint16
		[ 2147483647, false ], // int32
		[ 4294967295, false ], // uint32
		[ '5', false ],
		[ true, false ],
		[ false, false ],
		[ null, false ],
		[ {}, false ],
		[ new Complex128( 3.0, 5.0 ), false ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'binary' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (bool)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, false ],
		[ -5, false ],
		[ 3.14, false ],
		[ -3.14, false ],
		[ 127, false ],        // int8
		[ 255, false ],        // uint8
		[ 32767, false ],      // int16
		[ 65535, false ],      // uint16
		[ 2147483647, false ], // int32
		[ 4294967295, false ], // uint32
		[ '5', false ],
		[ true, true ],
		[ false, true ],
		[ null, false ],
		[ {}, false ],
		[ new Complex128( 3.0, 5.0 ), false ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'bool' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (float64)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, true ],
		[ -5, true ],
		[ 3.14, true ],
		[ -3.14, true ],
		[ 127, true ],        // int8
		[ 255, true ],        // uint8
		[ 32767, true ],      // int16
		[ 65535, true ],      // uint16
		[ 2147483647, true ], // int32
		[ 4294967295, true ], // uint32
		[ '5', false ],
		[ true, false ],
		[ false, false ],
		[ null, false ],
		[ {}, false ],
		[ new Complex128( 3.0, 5.0 ), false ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'float64' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (complex128)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, true ],
		[ -5, true ],
		[ 3.14, true ],
		[ -3.14, true ],
		[ 127, true ],        // int8
		[ 255, true ],        // uint8
		[ 32767, true ],      // int16
		[ 65535, true ],      // uint16
		[ 2147483647, true ], // int32
		[ 4294967295, true ], // uint32
		[ '5', false ],
		[ true, false ],
		[ false, false ],
		[ null, false ],
		[ {}, false ],
		[ new Complex128( 3.0, 5.0 ), true ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'complex128' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (int32)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, true ],
		[ -5, true ],
		[ 3.14, false ],
		[ -3.14, false ],
		[ 127, true ],         // int8
		[ 255, true ],         // uint8
		[ 32767, true ],       // int16
		[ 65535, true ],       // uint16
		[ 2147483647, true ],  // int32
		[ 4294967295, false ], // uint32
		[ '5', false ],
		[ true, false ],
		[ false, false ],
		[ null, false ],
		[ {}, false ],
		[ new Complex128( 3.0, 5.0 ), false ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'int32' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a boolean indicating if a value can be cast to an ndarray data type (uint32)', function test( t ) {
	var expected;
	var values;
	var actual;
	var v;
	var i;

	values = [
		[ 5, true ],
		[ -5, false ],
		[ 3.14, false ],
		[ -3.14, false ],
		[ 127, true ],        // int8
		[ 255, true ],        // uint8
		[ 32767, true ],      // int16
		[ 65535, true ],      // uint16
		[ 2147483647, true ], // int32
		[ 4294967295, true ], // uint32
		[ '5', false ],
		[ true, false ],
		[ false, false ],
		[ null, false ],
		[ {}, false ],
		[ new Complex128( 3.0, 5.0 ), false ]
	];

	for ( i = 0; i < values.length; i++ ) {
		v = values[ i ][ 0 ];
		expected = values[ i ][ 1 ];
		actual = isScalarMostlySafeCompatible( v, 'uint32' );
		t.strictEqual( actual, expected, 'returns expected value' );
	}
	t.end();
});
