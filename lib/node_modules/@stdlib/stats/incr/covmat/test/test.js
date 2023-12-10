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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var incrcovmat = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrcovmat, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided either a positive integer or an output ndarray having equal dimensions for storing the covariance matrix for the first argument', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var mat;
	var i;

	buffer = new Float64Array( 6 );
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	values = [
		'5',
		3.14,
		0.0,
		-1,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrcovmat( value );
		};
	}
});

tape( 'the function throws an error if not provided either a positive integer or an output ndarray having equal dimensions for storing the covariance matrix for the first argument (means)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var mat;
	var vec;
	var i;

	buffer = new Float64Array( 6 );
	shape = [ 3, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	values = [
		'5',
		3.14,
		0.0,
		-1,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrcovmat( value, vec );
		};
	}
});

tape( 'the function throws an error if not provided a 1-dimensional ndarray as a second argument (order)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrcovmat( 2, value );
		};
	}
});

tape( 'the function throws an error if not provided a 1-dimensional ndarray as a second argument (covariance matrix)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var cov;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrcovmat( cov, value );
		};
	}
});

tape( 'the function throws an error if the number of known means does not match covariance matrix dimensions (order)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var vec;

	buffer = new Float64Array( 3 );
	shape = [ 3 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrcovmat( 2, value );
		};
	}
});

tape( 'the function throws an error if the number of known means does not match covariance matrix dimensions (covariance matrix)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var cov;
	var vec;

	buffer = new Float64Array( 9 );
	shape = [ 3, 3 ];
	strides = [ 3, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrcovmat( cov, value );
		};
	}
});

tape( 'the function returns an accumulator function (order)', function test( t ) {
	t.equal( typeof incrcovmat( 2 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (covariance matrix)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var cov;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.equal( typeof incrcovmat( cov ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (order; known means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;

	buffer = new Float64Array( 4 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.equal( typeof incrcovmat( 2, means ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (covariance matrix; known means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var cov;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 4 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	t.equal( typeof incrcovmat( cov, means ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (order)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var mat;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( 2 );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (order, means)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var means;
	var mat;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	mat = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( 2, means );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		mat
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (covariance matrix)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var cov;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( cov );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if not provided a 1-dimensional ndarray (covariance matrix, means)', function test( t ) {
	var strides;
	var values;
	var buffer;
	var shape;
	var means;
	var cov;
	var acc;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( cov, means );

	values = [
		'5',
		3.14,
		1.0,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match covariance matrix dimensions (order)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var vec;
	var acc;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( 3 );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match covariance matrix dimensions (order, means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var vec;
	var acc;

	buffer = new Float64Array( 3 );
	shape = [ 3 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( 3, means );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match covariance matrix dimensions (covariance matrix)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var cov;
	var vec;
	var acc;

	buffer = new Float64Array( 9 );
	shape = [ 3, 3 ];
	strides = [ 3, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( cov );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function throws an error if the number of elements in a provided data vector does not match covariance matrix dimensions (covariance matrix, means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var cov;
	var vec;
	var acc;

	buffer = new Float64Array( 9 );
	shape = [ 3, 3 ];
	strides = [ 3, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 3 );
	shape = [ 3 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( cov, means );

	t.throws( badValue( vec ), Error, 'throws an error' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			acc( value );
		};
	}
});

tape( 'the accumulator function incrementally computes an unbiased sample covariance matrix (order)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var shape;
	var delta;
	var order;
	var tol;
	var acc;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	// Test against Julia:
	expected = [
		[ 0.0, 0.0, 0.0, 0.0 ],
		[ 0.5, -1.05, -1.05, 2.205 ],
		[ 0.33333333333333337, -0.9733333333333334, -0.9733333333333334, 3.5145333333333335 ], // eslint-disable-line max-len
		[ 0.9166666666666666, 0.45666666666666667, 0.45666666666666667, 4.103066666666667 ], // eslint-disable-line max-len
		[ 0.7, 0.142, 0.142, 6.2933200000000005 ],
		[ 0.8, 1.8719999999999999, 1.8719999999999999, 17.917866666666665 ]
	];

	acc = incrcovmat( n );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes an unbiased sample covariance matrix (covariance matrix)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var shape;
	var delta;
	var order;
	var tol;
	var acc;
	var cov;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];

	cov = ndarray( 'float64', buffer, shape, strides, 0, order );

	// Test against Julia:
	expected = [
		[ 0.0, 0.0, 0.0, 0.0 ],
		[ 0.5, -1.05, -1.05, 2.205 ],
		[ 0.33333333333333337, -0.9733333333333334, -0.9733333333333334, 3.5145333333333335 ], // eslint-disable-line max-len
		[ 0.9166666666666666, 0.45666666666666667, 0.45666666666666667, 4.103066666666667 ], // eslint-disable-line max-len
		[ 0.7, 0.142, 0.142, 6.2933200000000005 ],
		[ 0.8, 1.8719999999999999, 1.8719999999999999, 17.917866666666665 ]
	];

	acc = incrcovmat( cov );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes an unbiased sample covariance matrix (order, means)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var means;
	var shape;
	var delta;
	var order;
	var tol;
	var acc;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( [ 3.0, 2.6733333333333333 ] );
	means = ndarray( 'float64', buffer, shape, strides, 0, order );

	// Test against Julia:
	expected = [
		[ 1.0, 1.1733333333333333, 1.1733333333333333, 1.3767111111111112 ],
		[ 0.5, 0.5866666666666667, 0.5866666666666667, 6.045711111111111 ],
		[ 0.6666666666666666, 0.23555555555555552, 0.23555555555555552, 4.103066666666667 ], // eslint-disable-line max-len
		[ 0.75, 0.5083333333333333, 0.5083333333333333, 3.5173111111111113 ],
		[ 0.6, 0.4066666666666666, 0.4066666666666666, 7.181857777777779 ],
		[ 0.6666666666666666, 1.5599999999999998, 1.5599999999999998, 14.931555555555557 ] // eslint-disable-line max-len
	];

	acc = incrcovmat( n, means );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes an unbiased sample covariance matrix (covariance matrix, means)', function test( t ) {
	var expected;
	var strides;
	var actual;
	var buffer;
	var means;
	var shape;
	var delta;
	var order;
	var tol;
	var acc;
	var cov;
	var n;
	var v;
	var e;
	var d;
	var i;
	var j;
	var k;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, order );

	buffer = new Float64Array( [ 3.0, 2.6733333333333333 ] );
	means = ndarray( 'float64', buffer, [ 2 ], [ 1 ], 0, order );

	// Test against Julia:
	expected = [
		[ 1.0, 1.1733333333333333, 1.1733333333333333, 1.3767111111111112 ],
		[ 0.5, 0.5866666666666667, 0.5866666666666667, 6.045711111111111 ],
		[ 0.6666666666666666, 0.23555555555555552, 0.23555555555555552, 4.103066666666667 ], // eslint-disable-line max-len
		[ 0.75, 0.5083333333333333, 0.5083333333333333, 3.5173111111111113 ],
		[ 0.6, 0.4066666666666666, 0.4066666666666666, 7.181857777777779 ],
		[ 0.6666666666666666, 1.5599999999999998, 1.5599999999999998, 14.931555555555557 ] // eslint-disable-line max-len
	];

	acc = incrcovmat( cov, means );

	for ( i = 0; i < d.length; i++ ) {
		actual = acc( d[ i ] );
		for ( j = 0; j < n; j++ ) {
			for ( k = 0; k < n; k++ ) {
				v = actual.get( j, k );
				e = expected[ i ][ (j*n)+k ];
				if ( v === e ) {
					t.strictEqual( v, e, 'returns expected result. i: '+i+'. j: '+j+'. k: '+k+'.' );
				} else {
					delta = abs( e - v );
					tol = 3.0 * EPS * abs( e );
					t.equal( delta <= tol, true, 'i: '+i+'. j: '+j+'. k: '+k+'. expected: '+e+'. actual: '+v+'. tol: '+tol+'. delta: '+delta+'.' );
				}
			}
		}
	}
	t.end();
});

tape( 'if not provided a data vector, the accumulator function returns the covariance matrix', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var order;
	var acc;
	var cov;
	var out;
	var n;
	var d;
	var i;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, order );

	acc = incrcovmat( cov );

	for ( i = 0; i < d.length; i++ ) {
		out = acc( d[ i ] );
		t.strictEqual( out, cov, 'returns expected value' );
	}
	t.strictEqual( acc(), cov, 'returns expected value' );
	t.end();
});

tape( 'if not provided a data vector, the accumulator function returns the covariance matrix (means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var order;
	var means;
	var acc;
	var cov;
	var out;
	var n;
	var d;
	var i;

	n = 2;

	shape = [ 2 ];
	strides = [ 1 ];
	order = 'row-major';

	d = [
		ndarray( 'float64', new Float64Array( [ 2.0, 1.5 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -0.6 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 2.0, 3.14 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 4.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 3.0, -2.0 ] ), shape, strides, 0, order ),
		ndarray( 'float64', new Float64Array( [ 4.0, 10.0 ] ), shape, strides, 0, order )
	];

	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];
	cov = ndarray( 'float64', buffer, shape, strides, 0, order );

	buffer = new Float64Array( n );
	shape = [ n ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, order );

	acc = incrcovmat( cov, means );

	for ( i = 0; i < d.length; i++ ) {
		out = acc( d[ i ] );
		t.strictEqual( out, cov, 'returns expected value' );
	}
	t.strictEqual( acc(), cov, 'returns expected value' );
	t.end();
});

tape( 'if the accumulator function has not been provided any data, the accumulator function returns `null`', function test( t ) {
	var acc = incrcovmat( 2 );
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'if the accumulator function has not been provided any data, the accumulator function returns `null` (means)', function test( t ) {
	var strides;
	var buffer;
	var shape;
	var means;
	var acc;

	buffer = new Float64Array( 2 );
	shape = [ 2 ];
	strides = [ 1 ];
	means = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrcovmat( 2, means );
	t.strictEqual( acc(), null, 'returns expected value' );

	t.end();
});
