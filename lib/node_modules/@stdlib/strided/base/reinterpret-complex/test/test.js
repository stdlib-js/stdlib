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
var Complex128Array = require( '@stdlib/array/complex128' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var isFloat32Array = require( '@stdlib/assert/is-float32array' );
var Float64Array = require( '@stdlib/array/float64' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var reinterpret = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reinterpret, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an array having an unsupported data type', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3, 4 ],
		new Float64Array( [ 1.0, 2.0 ] )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reinterpret( value, 0 );
		};
	}
});

tape( 'the function reinterprets a complex number array (complex128)', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex128Array( 5 ),
		new Complex128Array( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isFloat64Array( v ), true, 'returns a Float64Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length*2, 'has expected length' );
		t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a complex number array (complex64)', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Complex64Array( 10 ),
		new Complex64Array( 5 ),
		new Complex64Array( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isFloat32Array( v ), true, 'returns a Float32Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length*2, 'has expected length' );
		t.strictEqual( v.byteOffset, 0, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a complex number array (complex128, byte offset)', function test( t ) {
	var values;
	var buf;
	var v;
	var i;

	buf = new ArrayBuffer( 1000 );
	values = [
		new Complex128Array( buf, 320, 10 ),
		new Complex128Array( buf, 32, 5 ),
		new Complex128Array( buf, 112, 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isFloat64Array( v ), true, 'returns a Float64Array' );
		t.strictEqual( v.buffer, buf, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length*2, 'has expected length' );
		t.strictEqual( v.byteOffset, values[ i ].byteOffset, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a complex number array (complex64, byte offset)', function test( t ) {
	var values;
	var buf;
	var v;
	var i;

	buf = new ArrayBuffer( 1000 );
	values = [
		new Complex64Array( buf, 320, 10 ),
		new Complex64Array( buf, 32, 5 ),
		new Complex64Array( buf, 112, 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 0 );
		t.strictEqual( isFloat32Array( v ), true, 'returns a Float32Array' );
		t.strictEqual( v.buffer, buf, 'returns a view' );
		t.strictEqual( v.length, values[ i ].length*2, 'has expected length' );
		t.strictEqual( v.byteOffset, values[ i ].byteOffset, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a complex number array (complex128, index offset)', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex128Array( 5 ),
		new Complex128Array( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 2 );
		t.strictEqual( isFloat64Array( v ), true, 'returns a Float64Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, (values[ i ].length-2)*2, 'has expected length' );
		t.strictEqual( v.byteOffset, 32, 'has expected byte offset' );
	}
	t.end();
});

tape( 'the function reinterprets a complex number array (complex64, index offset)', function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Complex64Array( 10 ),
		new Complex64Array( 5 ),
		new Complex64Array( 20 )
	];

	for ( i = 0; i < values.length; i++ ) {
		v = reinterpret( values[ i ], 2 );
		t.strictEqual( isFloat32Array( v ), true, 'returns a Float32Array' );
		t.strictEqual( v.buffer, values[ i ].buffer, 'returns a view' );
		t.strictEqual( v.length, (values[ i ].length-2)*2, 'has expected length' );
		t.strictEqual( v.byteOffset, 16, 'has expected byte offset' );
	}
	t.end();
});
