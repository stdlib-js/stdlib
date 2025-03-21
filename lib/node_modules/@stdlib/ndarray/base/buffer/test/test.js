/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var array2buffer = require( '@stdlib/buffer/from-array' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int16Array = require( '@stdlib/array/int16' );
var Int32Array = require( '@stdlib/array/int32' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var BooleanArray = require( '@stdlib/array/bool' );
var isBuffer = require( '@stdlib/assert/is-buffer' );
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
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var isComplex128Array = require( '@stdlib/assert/is-complex128array' );
var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );
var buffer = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof buffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns contiguous ndarray data buffers', function test( t ) {
	var expected;
	var dtypes;
	var vals;
	var buf;
	var i;
	var j;

	dtypes = [
		'binary',
		'bool',
		'complex64',
		'complex128',
		'float64',
		'float32',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	vals = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	expected = [
		[ array2buffer( vals ), isBuffer ],
		[ new BooleanArray( vals ), isBooleanArray ],
		[ new Complex64Array( vals ), isComplex64Array ],
		[ new Complex128Array( vals ), isComplex128Array ],
		[ new Float64Array( vals ), isFloat64Array ],
		[ new Float32Array( vals ), isFloat32Array ],
		[ vals, isArray ],
		[ new Int16Array( vals ), isInt16Array ],
		[ new Int32Array( vals ), isInt32Array ],
		[ new Int8Array( vals ), isInt8Array ],
		[ new Uint16Array( vals ), isUint16Array ],
		[ new Uint32Array( vals ), isUint32Array ],
		[ new Uint8Array( vals ), isUint8Array ],
		[ new Uint8ClampedArray( vals ), isUint8ClampedArray ]
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		buf = buffer( dtypes[ i ], vals.length );
		t.strictEqual( expected[ i ][ 1 ]( buf ), true, 'returns expected value type for ' + dtypes[ i ] );
		for ( j = 0; j < buf.length; j++ ) {
			t.strictEqual( buf[ j ], expected[ i ][ 0 ][ j ], 'returns expected element ' + j + ' for ' + dtypes[ i ] );
		}
	}
	t.end();
});

tape( 'the function returns ndarray data buffers (large allocations)', function test( t ) {
	var expected;
	var dtypes;
	var vals;
	var buf;
	var i;

	dtypes = [
		'binary',
		'bool',
		'complex64',
		'complex128',
		'float64',
		'float32',
		'generic',
		'int16',
		'int32',
		'int8',
		'uint16',
		'uint32',
		'uint8',
		'uint8c'
	];
	vals = [];
	for ( i = 0; i < 1e6; i++ ) {
		vals.push( 0 );
	}
	expected = [
		isBuffer,
		isBooleanArray,
		isComplex64Array,
		isComplex128Array,
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
	for ( i = 0; i < dtypes.length; i++ ) {
		buf = buffer( dtypes[ i ], vals.length );
		t.strictEqual( expected[ i ]( buf ), true, 'returns expected value type for ' + dtypes[ i ] );
	}
	t.end();
});

tape( 'if provided an unknown/unsupported data type, the function returns `null`', function test( t ) {
	var dtypes;
	var i;

	dtypes = [
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
		'bits'
	];
	for ( i = 0; i < dtypes.length; i++ ) {
		t.strictEqual( buffer( dtypes[ i ], 10 ), null, 'returns expected value for ' + dtypes[ i ] );
	}
	t.end();
});
