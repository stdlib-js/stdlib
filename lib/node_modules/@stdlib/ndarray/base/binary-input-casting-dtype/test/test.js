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
var resolve = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof resolve, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an unsupported/unrecognized casting policy', function test( t ) {
	var values;
	var i;

	values = [
		'float',
		'cmplx',
		'beep',
		'boop',
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			resolve( 'float64', 'float64', 'float64', value );
		};
	}
});

tape( 'the function throws an error if provided data types which do not promote when the casting policy is "promoted"', function test( t ) {
	var dt1;
	var dt2;
	var dt3;
	var i;

	dt1 = [
		'binary',
		'bool',
		'int32',
		'uint32',
		'binary'
	];
	dt2 = [
		'generic',
		'float32',
		'bool',
		'int8',
		'int32'
	];
	dt3 = [
		'float32',
		'int16',
		'float64',
		'bool',
		'float64'
	];
	for ( i = 0; i < dt1.length; i++ ) {
		t.throws( badValue( dt1[ i ], dt2[ i ], dt3[ i ] ), Error, 'throws an error when provided '+dt1[ i ]+' and '+dt2[ i ]+' and '+dt3[ i ] );
	}
	t.end();

	function badValue( v1, v2, v3 ) {
		return function badValue() {
			resolve( v1, v2, v3, 'promoted' );
		};
	}
});

tape( 'the function resolves a casting data type (policy=none)', function test( t ) {
	var expected;
	var dt1;
	var dt2;
	var dt3;
	var dt;
	var i;

	dt1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'complex64'
	];
	dt2 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'complex64'
	];
	dt3 = [
		'float64',
		'float64',
		'float64',
		'float64',
		'float64'
	];

	expected = dt1;
	for ( i = 0; i < dt1.length; i++ ) {
		dt = resolve( dt1[ i ], dt2[ i ], dt3[ i ], 'none' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves a casting data type (policy=output)', function test( t ) {
	var expected;
	var dt1;
	var dt2;
	var dt3;
	var dt;
	var i;

	dt1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'complex64'
	];
	dt2 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'complex64'
	];
	dt3 = [
		'complex128',
		'float64',
		'uint32',
		'int16',
		'generic'
	];

	expected = dt3;
	for ( i = 0; i < dt1.length; i++ ) {
		dt = resolve( dt1[ i ], dt2[ i ], dt3[ i ], 'output' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves a casting data type (policy=promoted)', function test( t ) {
	var expected;
	var dt1;
	var dt2;
	var dt3;
	var dt;
	var i;

	dt1 = [
		'float32',
		'int8',
		'uint16',
		'complex64',
		'complex64'
	];
	dt2 = [
		'float64',
		'int16',
		'int32',
		'float64',
		'float64'
	];
	dt3 = [
		'float32',
		'int8',
		'uint16',
		'complex64',
		'float32'
	];
	expected = [
		'float64',
		'int16',
		'int32',
		'complex128',
		'complex128'
	];

	for ( i = 0; i < dt1.length; i++ ) {
		dt = resolve( dt1[ i ], dt2[ i ], dt3[ i ], 'promoted' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves a casting data type (policy=accumulation)', function test( t ) {
	var expected;
	var dt1;
	var dt2;
	var dt3;
	var dt;
	var i;

	dt1 = [
		'float16',
		'float32',
		'float32',
		'float64',
		'int16',
		'generic',
		'complex64',
		'uint16',
		'bool'
	];
	dt2 = [
		'float16',
		'float64',
		'uint8c',
		'float64',
		'int32',
		'float32',
		'float32',
		'uint8',
		'bool'
	];
	dt3 = [
		'int8',
		'float64',
		'float16',
		'int16',
		'int32',
		'int32',
		'int16',
		'uint32',
		'bool'
	];
	expected = [
		'float16',
		'float32',
		'float32',
		'float64',
		'int32',
		'generic',
		'complex64',
		'uint32',
		'float64'
	];

	for ( i = 0; i < dt1.length; i++ ) {
		dt = resolve( dt1[ i ], dt2[ i ], dt3[ i ], 'accumulation' );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function resolves a casting data type (policy=<dtype>)', function test( t ) {
	var expected;
	var dt1;
	var dt2;
	var dt3;
	var dt;
	var i;

	dt1 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	dt2 = [
		'float64',
		'float32',
		'int32',
		'uint16',
		'generic',
		'int8',
		'complex64'
	];
	dt3 = [
		'float64',
		'float64',
		'float64',
		'float64',
		'float64',
		'float64',
		'int8'
	];

	expected = dt3;
	for ( i = 0; i < dt1.length; i++ ) {
		dt = resolve( dt1[ i ], dt2[ i ], dt3[ i ], dt3[ i ] );
		t.strictEqual( dt, expected[ i ], 'returns expected value' );
	}
	t.end();
});
