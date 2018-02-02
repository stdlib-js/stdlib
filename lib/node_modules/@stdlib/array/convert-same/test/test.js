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
var dtype = require( '@stdlib/array/dtype' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var isArray = require( '@stdlib/assert/is-array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var isInt16Array = require( '@stdlib/assert/is-int16array' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var isInt8Array = require( '@stdlib/assert/is-int8array' );
var isUint16Array = require( '@stdlib/assert/is-uint16array' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );
var convertArraySame = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof convertArraySame, 'function', 'main export is a function' );
	t.end();
});

tape( 'if not provided an array-like object as its first argument, the function throws an error', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertArraySame( value, 'float64' );
		};
	}
});

tape( 'if provided an argument having an unknown/unsupported data type, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'binary',
		'buffer',
		'buf',
		'float',
		'double',
		'single',
		'int',
		'integer',
		'uint',
		'uinteger',
		'byte',
		'bits',
		'float64',
		'float32',
		'int32',
		'int16',
		'int8',
		'uint32',
		'uint16',
		'uint8',
		'uint8c',
		'generic',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			convertArraySame( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function converts an array to the same data type as a second input array', function test( t ) {
	var expected;
	var out;
	var dt;
	var x;
	var y;
	var i;
	var j;

	y = [
		new Float64Array( 0 ),
		new Float32Array( 0 ),
		[],
		new Int16Array( 0 ),
		new Int32Array( 0 ),
		new Int8Array( 0 ),
		new Uint16Array( 0 ),
		new Uint32Array( 0 ),
		new Uint8Array( 0 ),
		new Uint8ClampedArray( 0 )
	];
	x = [ -1, 0, 1 ];
	expected = [
		[ new Float64Array( [ -1.0, 0.0, 1.0 ] ), isFloat64Array ],
		[ new Float32Array( [ -1.0, 0.0, 1.0 ] ), isFloat32Array ],
		[ x, isArray ],
		[ new Int16Array( [ -1, 0, 1 ] ), isInt16Array ],
		[ new Int32Array( [ -1, 0, 1 ] ), isInt32Array ],
		[ new Int8Array( [ -1, 0, 1 ] ), isInt8Array ],
		[ new Uint16Array( [ 65535, 0, 1 ] ), isUint16Array ],
		[ new Uint32Array( [ 4294967295, 0, 1 ] ), isUint32Array ],
		[ new Uint8Array( [ 255, 0, 1 ] ), isUint8Array ],
		[ new Uint8ClampedArray( [ 0, 0, 1 ] ), isUint8ClampedArray ]
	];
	for ( i = 0; i < y.length; i++ ) {
		dt = dtype( y[ i ] );
		out = convertArraySame( x, y[ i ] );
		t.strictEqual( expected[ i ][ 1 ]( out ), true, 'returns expected value type for ' + dt );
		for ( j = 0; j < x.length; j++ ) {
			t.strictEqual( out[ j ], expected[ i ][ 0 ][ j ], 'returns expected element ' + j + ' for ' + dt );
		}
	}
	t.end();
});

tape( 'the function converts an array to the same data type as a second input array (large allocations)', function test( t ) {
	var expected;
	var out;
	var dt;
	var x;
	var y;
	var i;

	y = [
		new Float64Array( 0 ),
		new Float32Array( 0 ),
		[],
		new Int16Array( 0 ),
		new Int32Array( 0 ),
		new Int8Array( 0 ),
		new Uint16Array( 0 ),
		new Uint32Array( 0 ),
		new Uint8Array( 0 ),
		new Uint8ClampedArray( 0 )
	];
	x = [];
	for ( i = 0; i < 1e6; i++ ) {
		x.push( 0 );
	}
	expected = [
		isFloat64Array,
		isFloat32Array,
		isArray,
		isInt16Array,
		isInt32Array,
		isInt8Array,
		isUint16Array,
		isUint32Array,
		isUint8Array,
		isUint8ClampedArray
	];
	for ( i = 0; i < y.length; i++ ) {
		dt = dtype( y[ i ] );
		out = convertArraySame( x, y[ i ] );
		t.strictEqual( expected[ i ]( out ), true, 'returns expected value type for ' + dt );
	}
	t.end();
});
