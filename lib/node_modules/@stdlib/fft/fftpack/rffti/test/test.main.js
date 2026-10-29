/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var rffti = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rffti, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		0,
		3.14,
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
			rffti( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a positive integer (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		0,
		3.14,
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
			rffti( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			rffti( 4, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bool',
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
			rffti( 4, {
				'dtype': value
			});
		};
	}
});

tape( 'the function supports specifying an output data type', function test( t ) {
	var ws = rffti( 4, {
		'dtype': 'float32'
	});

	t.strictEqual( String( getDType( ws ) ), 'float32', 'returns expected value' );
	t.deepEqual( getShape( ws ), [ 42 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns a workspace of correct size', function test( t ) {
	var ws;

	ws = rffti( 1 );
	t.deepEqual( getShape( ws ), [ 36 ], 'returns expected value' ); // 2*n + 34

	ws = rffti( 8 );
	t.deepEqual( getShape( ws ), [ 50 ], 'returns expected value' ); // 2*n + 34

	ws = rffti( 16 );
	t.deepEqual( getShape( ws ), [ 66 ], 'returns expected value' ); // 2*n + 34

	t.end();
});

tape( 'the function returns a float64 workspace ndarray', function test( t ) {
	var expectedTwiddles;
	var expectedFactors;
	var ulps;
	var buf;
	var ws;
	var N;
	var y;
	var e;
	var i;

	N = 8;
	ws = rffti( N );
	buf = getData( ws );

	expectedTwiddles = new Float64Array( [ 0.7071067811865476, 0.7071067811865475, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expectedFactors = new Float64Array( [ 8.0, 2.0, 2.0, 4.0 ] );

	ulps = 1;
	for ( i = 0; i < expectedTwiddles.length; i++ ) {
		y = buf[ N+i ];
		e = expectedTwiddles[ i ];
		t.strictEqual( isAlmostSameValue( y, e, ulps ), true, 'within ' + ulps + ' ULPs. N: ' + N + '. y: ' + y + '. E: ' + e );
	}
	for ( i = 0; i < expectedFactors.length; i++ ) {
		y = buf[ ( 2*N ) + i ];
		e = expectedFactors[ i ];
		t.strictEqual( isAlmostSameValue( y, e, ulps ), true, 'within ' + ulps + ' ULPs. N: ' + N + '. y: ' + y + '. E: ' + e );
	}
	for ( i = 0; i < N; i++ ) {
		y = buf[ i ];
		e = 0.0;
		t.strictEqual( y, e, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a float32 workspace ndarray', function test( t ) {
	var expectedTwiddles;
	var expectedFactors;
	var fview;
	var ulps;
	var buf;
	var ws;
	var N;
	var y;
	var e;
	var i;

	N = 8;
	ws = rffti( N, {
		'dtype': 'float32'
	});
	buf = getData( ws );

	expectedTwiddles = new Float32Array( [ 0.7071067690849304, 0.7071067690849304, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expectedFactors = new Uint32Array( [ 8, 2, 2, 4 ] );

	ulps = 1;
	for ( i = 0; i < expectedTwiddles.length; i++ ) {
		y = buf[ N+i ];
		e = expectedTwiddles[ i ];
		t.strictEqual( isAlmostSameValue( y, e, ulps ), true, 'within ' + ulps + ' ULPs. N: ' + N + '. y: ' + y + '. E: ' + e );
	}
	fview = new Uint32Array( buf.buffer, buf.byteOffset, buf.length );
	for ( i = 0; i < expectedFactors.length; i++ ) {
		y = fview[ ( 2*N ) + i ];
		e = expectedFactors[ i ];
		t.strictEqual( y, e, 'returns expected integer factor. N: ' + N + '. y: ' + y + '. E: ' + e );
	}
	for ( i = 0; i < N; i++ ) {
		y = buf[ i ];
		e = 0.0;
		t.strictEqual( y, e, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a generic workspace ndarray', function test( t ) {
	var expectedTwiddles;
	var expectedFactors;
	var buf;
	var ws;
	var N;
	var i;

	N = 8;
	ws = rffti( N, {
		'dtype': 'generic'
	});
	buf = getData( ws );

	expectedTwiddles = [ 0.7071067811865476, 0.7071067811865475, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expectedFactors = [ 8, 2, 2, 4 ];

	for ( i = 0; i < N; i++ ) {
		t.strictEqual( buf[ N+i ], expectedTwiddles[ i ], 'returns expected twiddle factor at index ' + i );
	}
	for ( i = 0; i < expectedFactors.length; i++ ) {
		t.strictEqual( buf[ (2*N)+i ], expectedFactors[ i ], 'returns expected integer factor at index ' + i );
	}
	for ( i = 0; i < N; i++ ) {
		t.strictEqual( buf[ i ], 0, 'returns expected scratch space value at index ' + i );
	}
	t.end();
});
