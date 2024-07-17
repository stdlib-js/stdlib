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
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );
var ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method which throws an error if not provided an integer value (1d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	values = [
		'5',
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

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget( value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.iget( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var v;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	v = arr.iget( 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	v = arr.iget( 1 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.iget( 0 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var v;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	v = arr.iget( 0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	v = arr.iget( 1 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.iget( 0 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var v;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	v = arr.iget( 0 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	v = arr.iget( 1 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	t.strictEqual( arr.iget( 0 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 1 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 2 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;
	var v;

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	v = arr.iget( 0 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	v = arr.iget( 1 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=wrap)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 3.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=wrap; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 3 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	v = arr.iget( -2 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=wrap)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=wrap; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 3 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	v = arr.iget( -2 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=wrap)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 3.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=wrap; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 3 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	v = arr.iget( -2 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=wrap)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 2.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=wrap; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'wrap'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 3 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	v = arr.iget( -2 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=clamp)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=clamp; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 2 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	v = arr.iget( -1 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=clamp)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=clamp; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 2 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	v = arr.iget( -1 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=clamp)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 1.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=clamp; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 2 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	v = arr.iget( -1 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=clamp)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 5 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( 6 ), 1.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=clamp; complex typed)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var v;

	opts = {
		'mode': 'clamp'
	};

	dtype = 'complex64';
	buffer = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 2 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	v = arr.iget( 2 );
	t.strictEqual( realf( v ), 1.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 2.0, 'returns expected value' );

	v = arr.iget( -1 );
	t.strictEqual( realf( v ), 3.0, 'returns expected value' );
	t.strictEqual( imagf( v ), 4.0, 'returns expected value' );

	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=throw)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=throw)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=throw)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=throw)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'throw'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=normalize)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'normalize'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	t.strictEqual( arr.iget( 2 ), 3.0, 'returns expected value' );
	t.strictEqual( arr.iget( 3 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -1 ), 4.0, 'returns expected value' );
	t.strictEqual( arr.iget( -2 ), 3.0, 'returns expected value' );

	values = [
		[ 5 ],
		[ 6 ],
		[ -10 ],
		[ -20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=normalize)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'normalize'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -10 ],
		[ -20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=normalize)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'normalize'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -10 ],
		[ -20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=normalize)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var opts;
	var arr;
	var i;

	opts = {
		'mode': 'normalize'
	};

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order, opts );

	values = [
		[ 5 ],
		[ 6 ],
		[ -10 ],
		[ -20 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; row-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'row-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ 1 ];
	offset = 0;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});

tape( 'an ndarray constructor returns an instance which has an `iget` method for retrieving an array element using a linear index (1d; column-major; mode=default)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var values;
	var dtype;
	var order;
	var shape;
	var arr;
	var i;

	dtype = 'float64';
	buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	shape = [ 4 ];
	order = 'column-major';
	strides = [ -1 ];
	offset = 3;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	values = [
		[ 5 ],
		[ 6 ],
		[ -1 ],
		[ -2 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			arr.iget.apply( arr, value );
		};
	}
});
