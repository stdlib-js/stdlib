/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable stdlib/capitalized-comments */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var base = require( '@stdlib/math/base/special/abs' );


// VARIABLES //

var abs = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( abs instanceof Error )
};
var rand = uniform( -10.0, 10.0 );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an argument having an unsupported data type', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		void 0,
		true,
		false,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( value );
		};
	}
});

tape( 'the function computes the absolute value (number)', opts, function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = rand();
		t.strictEqual( abs( v ), base( v ), 'returns expected value when provided ' + v );
	}
	t.end();
});

tape( 'the function computes the absolute value for each element in an array-like object', opts, function test( t ) {
	var expected;
	var x;
	var v;
	var i;

	// dtype: float64
	x = new Float64Array( 10 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		v = rand();
		x[ i ] = v;
		expected[ i ] = base( v );
	}
	t.deepEqual( abs( x ), expected, 'returns expected value' );

	// dtype: float32
	x = new Float32Array( 10 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		v = rand();
		x[ i ] = v;
		expected[ i ] = base( v );
	}
	t.deepEqual( abs( x ), expected, 'returns expected value' );

	// dtype: generic
	x = [];
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		v = rand();
		x.push( v );
		expected.push( base( v ) );
	}
	t.deepEqual( abs( x ), expected, 'returns expected value' );

	// dtype: generic (array-like object)
	x = {
		'length': 10
	};
	expected = [];
	for ( i = 0; i < x.length; i++ ) {
		v = rand();
		x[ i ] = v;
		expected.push( base( v ) );
	}
	t.deepEqual( abs( x ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the absolute value for each element in an ndarray', opts, function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ebuf;
	var sh;
	var st;
	var x;
	var i;

	// dtype: float64
	xbuf = new Float64Array( 100 );
	for ( i = 0; i < xbuf.length; i++ ) {
		xbuf[ i ] = rand();
	}
	sh = [ 25, 1, 4 ];
	st = shape2strides( sh, 'row-major' );
	x = ndarray( 'float64', xbuf, sh, st, 0, 'row-major' );

	ebuf = new Float64Array( x.length );
	for ( i = 0; i < ebuf.length; i++ ) {
		ebuf[ i ] = base( xbuf[ i ] );
	}
	expected = ndarray( 'float64', ebuf, sh, st, 0, 'row-major' );
	actual = abs( x );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.deepEqual( actual.data, expected.data, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	// dtype: float32
	xbuf = new Float32Array( 100 );
	for ( i = 0; i < xbuf.length; i++ ) {
		xbuf[ i ] = rand();
	}
	sh = [ 25, 1, 4 ];
	st = shape2strides( sh, 'row-major' );
	x = ndarray( 'float32', xbuf, sh, st, 0, 'row-major' );

	ebuf = new Float32Array( x.length );
	for ( i = 0; i < ebuf.length; i++ ) {
		ebuf[ i ] = base( xbuf[ i ] );
	}
	expected = ndarray( 'float32', ebuf, sh, st, 0, 'row-major' );
	actual = abs( x );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.deepEqual( actual.data, expected.data, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	// dtype: generic
	xbuf = [];
	for ( i = 0; i < 100; i++ ) {
		xbuf.push( rand() );
	}
	sh = [ 25, 1, 4 ];
	st = shape2strides( sh, 'row-major' );
	x = ndarray( 'generic', xbuf, sh, st, 0, 'row-major' );

	ebuf = [];
	for ( i = 0; i < xbuf.length; i++ ) {
		ebuf.push( base( xbuf[ i ] ) );
	}
	expected = ndarray( 'generic', ebuf, sh, st, 0, 'row-major' );
	actual = abs( x );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.deepEqual( actual.data, expected.data, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	t.end();
});

tape( 'the function has an `assign` method which throws an error if provided a first argument having an unsupported data type', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		void 0,
		true,
		false,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( value, new Float64Array( 10 ) );
		};
	}
});

tape( 'the function has an `assign` method which throws an error if provided a second argument having an unsupported data type', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		void 0,
		true,
		false,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( new Float64Array( 10 ), value );
		};
	}
});

tape( 'the function has an `assign` method which computes the absolute value for each element in an array-like object and assigns results to a provided output array-like object', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var v;
	var i;

	// dtype: float64
	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		v = rand();
		x[ i ] = v;
		expected[ i ] = base( v );
	}
	z = abs.assign( x, y );
	t.strictEqual( z, y, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );

	// dtype: float32
	x = new Float32Array( 10 );
	y = new Float32Array( x.length );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		v = rand();
		x[ i ] = v;
		expected[ i ] = base( v );
	}
	z = abs.assign( x, y );
	t.strictEqual( z, y, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );

	// dtype: generic
	x = [];
	y = [];
	expected = [];
	for ( i = 0; i < 10; i++ ) {
		v = rand();
		x.push( v );
		y.push( 0.0 );
		expected.push( base( v ) );
	}
	z = abs.assign( x, y );
	t.strictEqual( z, y, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );

	// dtype: generic (array-like object)
	x = {
		'length': 10
	};
	y = {
		'length': x.length
	};
	expected = {
		'length': y.length
	};
	for ( i = 0; i < x.length; i++ ) {
		v = rand();
		x[ i ] = v;
		y[ i ] = 0.0;
		expected[ i ] = base( v );
	}
	z = abs.assign( x, y );
	t.strictEqual( z, y, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function has an `assign` method which computes the absolute value for each element in an ndarray and assigns the results to a provided output ndarray', opts, function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var ebuf;
	var sh;
	var st;
	var x;
	var y;
	var i;

	// dtype: float64
	xbuf = new Float64Array( 100 );
	ybuf = new Float64Array( xbuf.length );
	for ( i = 0; i < xbuf.length; i++ ) {
		xbuf[ i ] = rand();
	}
	sh = [ 25, 1, 4 ];
	st = shape2strides( sh, 'row-major' );
	x = ndarray( 'float64', xbuf, sh, st, 0, 'row-major' );
	y = ndarray( x.dtype, ybuf, x.shape, x.strides, x.offset, x.order );

	ebuf = new Float64Array( x.length );
	for ( i = 0; i < ebuf.length; i++ ) {
		ebuf[ i ] = base( xbuf[ i ] );
	}
	expected = ndarray( 'float64', ebuf, sh, st, 0, 'row-major' );
	actual = abs.assign( x, y );
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.deepEqual( actual.data, expected.data, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	// dtype: float32
	xbuf = new Float32Array( 100 );
	ybuf = new Float32Array( xbuf.length );
	for ( i = 0; i < xbuf.length; i++ ) {
		xbuf[ i ] = rand();
	}
	sh = [ 25, 1, 4 ];
	st = shape2strides( sh, 'row-major' );
	x = ndarray( 'float32', xbuf, sh, st, 0, 'row-major' );
	y = ndarray( x.dtype, ybuf, x.shape, x.strides, x.offset, x.order );

	ebuf = new Float32Array( x.length );
	for ( i = 0; i < ebuf.length; i++ ) {
		ebuf[ i ] = base( xbuf[ i ] );
	}
	expected = ndarray( 'float32', ebuf, sh, st, 0, 'row-major' );
	actual = abs.assign( x, y );
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.deepEqual( actual.data, expected.data, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	// dtype: generic
	xbuf = [];
	ybuf = [];
	for ( i = 0; i < 100; i++ ) {
		xbuf.push( rand() );
		ybuf.push( 0.0 );
	}
	sh = [ 25, 1, 4 ];
	st = shape2strides( sh, 'row-major' );
	x = ndarray( 'generic', xbuf, sh, st, 0, 'row-major' );
	y = ndarray( x.dtype, ybuf, x.shape, x.strides, x.offset, x.order );

	ebuf = [];
	for ( i = 0; i < xbuf.length; i++ ) {
		ebuf.push( base( xbuf[ i ] ) );
	}
	expected = ndarray( 'generic', ebuf, sh, st, 0, 'row-major' );
	actual = abs.assign( x, y );
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( actual.dtype, expected.dtype, 'returns expected value' );
	t.deepEqual( actual.data, expected.data, 'returns expected value' );
	t.deepEqual( actual.shape, expected.shape, 'returns expected value' );
	t.deepEqual( actual.strides, expected.strides, 'returns expected value' );
	t.strictEqual( actual.offset, expected.offset, 'returns expected value' );
	t.strictEqual( actual.order, expected.order, 'returns expected value' );

	t.end();
});
