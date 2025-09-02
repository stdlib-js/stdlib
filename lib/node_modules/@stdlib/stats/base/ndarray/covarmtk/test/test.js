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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var covarmtk = require( './../lib' );


// VARIABLES //

var options = {
	'dtype': 'generic'
};


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float64Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'generic', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof covarmtk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( covarmtk.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the population covariance of two one-dimensional ndarrays provided known means', function test( t ) {
	var correction;
	var meanx;
	var meany;
	var x;
	var y;
	var v;

	correction = scalar2ndarray( 0.0, options );

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	y = [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ];
	meanx = scalar2ndarray( 0.5, options );
	meany = scalar2ndarray( 0.5, options );
	v = covarmtk( [ vector( x, 6, 1, 0 ), vector( y, 6, 1, 0 ), correction, meanx, meany ] ); // eslint-disable-line max-len
	t.strictEqual( v, -45.5/x.length, 'returns expected value' );

	x = [ -4.0, -4.0 ];
	meanx = scalar2ndarray( -4.0, options );
	v = covarmtk( [ vector( x, 2, 1, 0 ), vector( x, 2, 1, 0 ), correction, meanx, meanx ] ); // eslint-disable-line max-len
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	meanx = scalar2ndarray( 4.0, options );
	v = covarmtk( [ vector( x, 2, 1, 0 ), vector( x, 2, 1, 0 ), correction, meanx, meanx ] ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample covariance of two one-dimensional ndarrays provided known means', function test( t ) {
	var correction;
	var meanx;
	var meany;
	var x;
	var y;
	var v;

	correction = scalar2ndarray( 1.0, options );

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	y = [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ];
	meanx = scalar2ndarray( 0.5, options );
	meany = scalar2ndarray( 0.5, options );
	v = covarmtk( [ vector( x, 6, 1, 0 ), vector( y, 6, 1, 0 ), correction, meanx, meany ] ); // eslint-disable-line max-len
	t.strictEqual( v, -45.5/(x.length-1), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	meanx = scalar2ndarray( -4.0, options );
	v = covarmtk( [ vector( x, 2, 1, 0 ), vector( x, 2, 1, 0 ), correction, meanx, meanx ] ); // eslint-disable-line max-len
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	meanx = scalar2ndarray( 4.0, options );
	v = covarmtk( [ vector( x, 2, 1, 0 ), vector( x, 2, 1, 0 ), correction, meanx, meanx ] ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty vector, the function returns `NaN`', function test( t ) {
	var correction;
	var meanx;
	var x;
	var v;

	x = [];
	meanx = scalar2ndarray( 0.5, options );
	correction = scalar2ndarray( 1.0, options );

	v = covarmtk( [ vector( x, 0, 1, 0 ), vector( x, 0, 1, 0 ), correction, meanx, meanx ] ); // eslint-disable-line max-len
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var correction;
	var meanx;
	var meany;
	var x;
	var y;
	var v;

	correction = scalar2ndarray( 1.0, options );

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];
	meanx = scalar2ndarray( 1.25, options );

	y = [
		2.0,  // 0
		2.0,
		1.0,  // 1
		-7.0,
		4.0,  // 2
		3.0,
		-2.0, // 3
		2.0
	];
	meany = scalar2ndarray( 1.25, options );

	v = covarmtk( [ vector( x, 4, 2, 0 ), vector( y, 4, 2, 0 ), correction, meanx, meany ] ); // eslint-disable-line max-len

	t.strictEqual( v, -18.25/3, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var correction;
	var meanx;
	var meany;
	var x;
	var y;
	var v;

	correction = scalar2ndarray( 1.0, options );

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];
	meanx = scalar2ndarray( 1.25, options );

	y = [
		2.0,  // 3
		2.0,
		1.0,  // 2
		-7.0,
		4.0,  // 1
		3.0,
		-2.0, // 0
		2.0
	];
	meany = scalar2ndarray( 1.25, options );

	v = covarmtk( [ vector( x, 4, -2, 6 ), vector( y, 4, -2, 6 ), correction, meanx, meany ] ); // eslint-disable-line max-len

	t.strictEqual( v, -18.25/3, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var correction;
	var meanx;
	var meany;
	var x;
	var y;
	var v;

	correction = scalar2ndarray( 1.0, options );

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];
	meanx = scalar2ndarray( 1.25, options );

	y = [
		2.0,
		-2.0, // 0
		2.0,
		1.0,  // 1
		-2.0,
		4.0,  // 2
		3.0,
		2.0   // 3
	];
	meany = scalar2ndarray( 1.25, options );

	v = covarmtk( [ vector( x, 4, 2, 1 ), vector( y, 4, 2, 1 ), correction, meanx, meany ] ); // eslint-disable-line max-len
	t.strictEqual( v, 5.75/3, 'returns expected value' );

	t.end();
});
