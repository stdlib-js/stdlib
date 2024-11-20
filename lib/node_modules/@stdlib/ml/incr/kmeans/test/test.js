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
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var incrkmeans = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrkmeans, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is neither a positive integer nor a matrix', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
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
			incrkmeans( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is neither a positive integer nor a matrix (ndims)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
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
			incrkmeans( value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is neither a positive integer nor a matrix (ndims, options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
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
			incrkmeans( value, 2, {} );
		};
	}
});

tape( 'the function throws an error if provided an argument specifying the number of dimensions which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
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
			incrkmeans( 2, value );
		};
	}
});

tape( 'the function throws an error if provided an argument specifying the number of dimensions which is not a positive integer (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
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
			incrkmeans( 2, value, {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (k, ndims)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrkmeans( 2, 2, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object (centroids)', function test( t ) {
	var values;
	var c;
	var i;

	c = ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrkmeans( c, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option (k, ndims)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			var opts = {
				'metric': value
			};
			incrkmeans( 2, 2, opts );
		};
	}
});

tape( 'the function throws an error if provided an invalid option (centroids)', function test( t ) {
	var values;
	var c;
	var i;

	c = ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			var opts = {
				'metric': value
			};
			incrkmeans( c, opts );
		};
	}
});

tape( 'the function throws an error if provided centroid initialization data buffer size which is smaller than the number of clusters', function test( t ) {
	var values;
	var i;

	values = [
		1,
		2,
		3,
		4
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'init': [ 'kmeans++', value ]
			};
			incrkmeans( 5, 2, opts );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var acc = incrkmeans( 2, 2 );
	t.strictEqual( typeof acc, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (options)', function test( t ) {
	var acc = incrkmeans( 2, 2, {} );
	t.strictEqual( typeof acc, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (centroids)', function test( t ) {
	var centroids;
	var strides;
	var buffer;
	var shape;
	var acc;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	centroids = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( centroids );
	t.strictEqual( typeof acc, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function (centroids, options)', function test( t ) {
	var centroids;
	var strides;
	var buffer;
	var shape;
	var acc;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	centroids = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	acc = incrkmeans( centroids, {} );
	t.strictEqual( typeof acc, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which throws if not provided a vector', function test( t ) {
	var values;
	var kmeans;
	var i;

	kmeans = incrkmeans( 2, 2 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			kmeans( value );
		};
	}
});

tape( 'the function returns a function which throws if not provided a vector having a length equal to the expected number of features/dimensions', function test( t ) {
	var values;
	var kmeans;
	var i;

	kmeans = incrkmeans( 2, 2 );

	values = [
		ndarray( 'float64', new Float64Array( 1 ), [ 1 ], [ 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 10 ), [ 1 ], [ 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans( value );
		};
	}
});

tape( 'the function returns a function which throws if not provided a vector having a length equal to the expected number of features/dimensions (centroids)', function test( t ) {
	var strides;
	var values;
	var kmeans;
	var buffer;
	var shape;
	var c;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	c = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	kmeans = incrkmeans( c );

	values = [
		ndarray( 'float64', new Float64Array( 1 ), [ 1 ], [ 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 10 ), [ 1 ], [ 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans( value );
		};
	}
});

// TODO: add behavior tests here

tape( 'attached to the returned function is a `predict` method for predicting data point cluster assignment', function test( t ) {
	var acc = incrkmeans( 2, 2 );
	t.strictEqual( typeof acc.predict, 'function', 'returns a function' );
	t.end();
});

tape( 'the `predict` method throws if not provided a matrix', function test( t ) {
	var values;
	var kmeans;
	var i;

	kmeans = incrkmeans( 2, 2 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			kmeans.predict( value );
		};
	}
});

tape( 'the `predict` method throws if not provided a matrix (output vector)', function test( t ) {
	var values;
	var kmeans;
	var out;
	var i;

	out = ndarray( 'float64', new Float64Array( 2 ), [ 1 ], [ 1 ], 0, 'row-major' );
	kmeans = incrkmeans( 2, 2 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			kmeans.predict( out, value );
		};
	}
});

tape( 'the `predict` method throws if provided an output argument which is not a vector', function test( t ) {
	var strides;
	var values;
	var kmeans;
	var buffer;
	var shape;
	var X;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	X = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	kmeans = incrkmeans( 2, 2 );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
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
			kmeans.predict( value, X );
		};
	}
});

tape( 'the `predict` method throws if provided a data point matrix which does not match the expected number of features/dimensions', function test( t ) {
	var values;
	var kmeans;
	var i;

	kmeans = incrkmeans( 2, 2 );

	values = [
		ndarray( 'float64', new Float64Array( 2 ), [ 2, 1 ], [ 1, 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 6 ), [ 2, 3 ], [ 3, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans.predict( value );
		};
	}
});

tape( 'the `predict` method throws if provided a data point matrix which does not match the expected number of features/dimensions (centroids)', function test( t ) {
	var strides;
	var values;
	var kmeans;
	var buffer;
	var shape;
	var c;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	c = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	kmeans = incrkmeans( c );

	values = [
		ndarray( 'float64', new Float64Array( 2 ), [ 2, 1 ], [ 1, 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 6 ), [ 2, 3 ], [ 3, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans.predict( value );
		};
	}
});

tape( 'the `predict` method throws if provided a data point matrix which does not match the expected number of features/dimensions (output vector)', function test( t ) {
	var values;
	var kmeans;
	var out;
	var i;

	out = ndarray( 'float64', new Float64Array( 2 ), [ 1 ], [ 1 ], 0, 'row-major' );
	kmeans = incrkmeans( 2, 2 );

	values = [
		ndarray( 'float64', new Float64Array( 2 ), [ 2, 1 ], [ 1, 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 6 ), [ 2, 3 ], [ 3, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans.predict( out, value );
		};
	}
});

tape( 'the `predict` method throws if provided a data point matrix which does not match the expected number of features/dimensions (centroids, output vector)', function test( t ) {
	var strides;
	var values;
	var kmeans;
	var buffer;
	var shape;
	var out;
	var c;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	c = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	out = ndarray( 'float64', new Float64Array( 2 ), [ 1 ], [ 1 ], 0, 'row-major' );
	kmeans = incrkmeans( c );

	values = [
		ndarray( 'float64', new Float64Array( 2 ), [ 2, 1 ], [ 1, 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 6 ), [ 2, 3 ], [ 3, 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans.predict( out, value );
		};
	}
});

tape( 'the `predict` method throws if provided an output vector whose length does not match the expected number of features/dimensions', function test( t ) {
	var values;
	var kmeans;
	var X;
	var i;

	X = ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	kmeans = incrkmeans( 2, 2 );

	values = [
		ndarray( 'float64', new Float64Array( 1 ), [ 1 ], [ 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 6 ), [ 1 ], [ 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans.predict( value, X );
		};
	}
});

tape( 'the `predict` method throws if provided an output vector whose length does not match the expected number of features/dimensions (centroids)', function test( t ) {
	var strides;
	var values;
	var kmeans;
	var buffer;
	var shape;
	var X;
	var c;
	var i;

	buffer = new Float64Array( 4 );
	shape = [ 2, 2 ];
	strides = [ 2, 1 ];
	c = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

	X = ndarray( 'float64', new Float64Array( 4 ), [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
	kmeans = incrkmeans( c );

	values = [
		ndarray( 'float64', new Float64Array( 1 ), [ 1 ], [ 1 ], 0, 'row-major' ),
		ndarray( 'float64', new Float64Array( 6 ), [ 1 ], [ 1 ], 0, 'row-major' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			kmeans.predict( value, X );
		};
	}
});

// TODO: add tests for `predict` behavior
