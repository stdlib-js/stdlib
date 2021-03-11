/*
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

// tslint:disable:max-file-line-count

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import { ArrayLike } from '@stdlib/types/array';
import dispatch = require( './index' );


// FUNCTIONS //

/**
* Nullary callback.
*
* @return input value
*/
function nullary(): any {
	return 5.0;
}

/**
* Unary callback.
*
* @param x - input value
* @return input value
*/
function unary( x: any ): any {
	return x;
}

/**
* Binary callback.
*
* @param x - input value
* @param y - input value
* @return output value
*/
function binary( x: number, y: number ): number {
	return x + y;
}

/**
* Ternary callback.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @return output value
*/
function ternary( x: number, y: number, z: number ): number {
	return x + y + z;
}

/**
* Quaternary callback.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @return output value
*/
function quaternary( x: number, y: number, z: number, w: number ): number {
	return x + y + z + w;
}

/**
* Mock `ind2sub` function.
*
* @param shape - dimensions
* @param idx - linear index
* @param opts - options
* @return subscripts
*/
function ind2sub( shape: ArrayLike<number>, idx: number, opts?: any ): Array<number> { // tslint:disable-line:max-line-length
	let out;
	let i;

	out = [];
	if ( typeof opts === 'object' && opts !== null && opts.order === 'row-major' ) { // tslint:disable-line:max-line-length no-unsafe-any
		for ( i = 0; i < shape.length; i += 1 ) {
			out.push( idx % shape[ i ] );
		}
	} else {
		for ( i = 0; i < shape.length; i += 1 ) {
			out.push( idx % shape[ i ] );
		}
	}
	return out;
}

/**
* Mock ndarray function.
*
* @param arrays - ndarrays
* @param fcn - callback
*/
function ndarrayFcn( arrays: Array<ndarray>, fcn: ( x: any ) => any ): void {
	let xord;
	let yord;
	let opts;
	let sub;
	let sh;
	let N;
	let x;
	let y;
	let v;
	let i;

	x = arrays[ 0 ];
	y = arrays[ 1 ];
	sh = x.shape;
	if ( sh.length === 0 ) {
		return;
	}
	N = 1;
	for ( i = 0; i < sh.length; i += 1 ) {
		N *= sh[ i ];
	}
	xord = x.order;
	yord = y.order;
	opts = {
		'order': ''
	};
	opts.order = xord;
	for ( i = 0; i < N; i += 1 ) {
		// Convert a linear index to subscripts:
		opts.order = xord;
		sub = ind2sub( sh, i, opts );

		// Retrieve an element from `x`:
		v = x.get.apply( x, sub );

		// Convert a linear index to subscripts:
		opts.order = yord;
		sub = ind2sub( sh, i, opts );

		// Append the result of applying the callback:
		sub[ sub.length ] = fcn( v ) as number;

		// Assign the result to an element in `y`:
		y.set.apply( y, sub );
	}
}

/**
* Mock function to create an ndarray-like object.
*
* @return ndarray-like object
*/
function array(): ndarray {
	const obj: ndarray = {
		'byteLength': 80,
		'BYTES_PER_ELEMENT': 8,
		'data': new Float64Array( 10 ),
		'dtype': 'float64',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 10,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 10 ],
		'strides': [ 1 ],
		'get': (): number => 0,
		'set': (): ndarray => obj
	};
	return obj;
}


// TESTS //

// The function returns a dispatch function...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( ndarrayFcn, types, data, 2, 1, 1 ); // $ExpectType Dispatcher
	dispatch( [ ndarrayFcn ], types, data, 2, 1, 1 ); // $ExpectType Dispatcher
}

// The compiler throws an error if the function is provided a first argument which is not either an ndarray function or an array-like object containing ndarray functions...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( '10', types, data, 2, 1, 1 ); // $ExpectError
	dispatch( 10, types, data, 2, 1, 1 ); // $ExpectError
	dispatch( true, types, data, 2, 1, 1 ); // $ExpectError
	dispatch( false, types, data, 2, 1, 1 ); // $ExpectError
	dispatch( null, types, data, 2, 1, 1 ); // $ExpectError
	dispatch( undefined, types, data, 2, 1, 1 ); // $ExpectError
	dispatch( [ '1' ], types, data, 2, 1, 1 ); // $ExpectError
	dispatch( {}, types, data, 2, 1, 1 ); // $ExpectError
	dispatch( ( x: number ): number => x, types, data, 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of strings...
{
	const data = [ unary ];

	dispatch( ndarrayFcn, 10, data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, true, data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, false, data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, null, data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, undefined, data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, [ 1 ], data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, {}, data, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, ( x: number ): number => x, data, 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object or null...
{
	const types = [ 'float64', 'float64' ];

	dispatch( ndarrayFcn, types, 10, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, true, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, false, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, undefined, 2, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, {}, 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( ndarrayFcn, types, data, '10', 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, true, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, false, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, null, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, undefined, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, [ '1' ], 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, {}, 1, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, ( x: number ): number => x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( ndarrayFcn, types, data, 2, '10', 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, true, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, false, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, null, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, undefined, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, [ '1' ], 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, {}, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( ndarrayFcn, types, data, 2, 1, '10' ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, true ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, false ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, null ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, undefined ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, [ '1' ] ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, {} ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch(); // $ExpectError
	dispatch( ndarrayFcn ); // $ExpectError
	dispatch( ndarrayFcn, types ); // $ExpectError
	dispatch( ndarrayFcn, types, data ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1 ); // $ExpectError
	dispatch( ndarrayFcn, types, data, 2, 1, 1, 0 ); // $ExpectError
}

// The function returns a dispatch function...
{
	const x = array();
	const y = array();
	const z = array();
	const w = array();
	const u = array();

	const t1 = [ 'float64' ];
	const d1 = [ nullary ];
	const f1 = dispatch( ndarrayFcn, t1, d1, 1, 1, 0 );
	f1( x ); // $ExpectType void | ndarray

	const t2 = [ 'float64', 'float64' ];
	const d2 = [ unary ];
	const f2 = dispatch( ndarrayFcn, t2, d2, 2, 1, 1 );
	f2( x, y ); // $ExpectType void | ndarray

	const t3 = [ 'float64', 'float64', 'float64' ];
	const d3 = [ binary ];
	const f3 = dispatch( ndarrayFcn, t3, d3, 3, 2, 1 );
	f3( x, y, z ); // $ExpectType void | ndarray

	const t4 = [ 'float64', 'float64', 'float64', 'float64' ];
	const d4 = [ ternary ];
	const f4 = dispatch( ndarrayFcn, t4, d4, 4, 3, 1 );
	f4( x, y, z, w ); // $ExpectType void | ndarray

	const t5 = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const d5 = [ quaternary ];
	const f5 = dispatch( ndarrayFcn, t5, d5, 5, 4, 1 );
	f5( x, y, z, w, u ); // $ExpectType void | ndarray
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray (1 ndarray)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const f = dispatch( ndarrayFcn, types, data, 1, 0, 1 );
	f( '10' ); // $ExpectError
	f( 10 ); // $ExpectError
	f( true ); // $ExpectError
	f( false ); // $ExpectError
	f( null ); // $ExpectError
	f( undefined ); // $ExpectError
	f( [ '1' ] ); // $ExpectError
	f( {} ); // $ExpectError
	f( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray (2 ndarrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const y = array();

	const f = dispatch( ndarrayFcn, types, data, 2, 1, 1 );
	f( 10, y ); // $ExpectError
	f( '10', y ); // $ExpectError
	f( true, y ); // $ExpectError
	f( false, y ); // $ExpectError
	f( null, y ); // $ExpectError
	f( undefined, y ); // $ExpectError
	f( [ '1' ], y ); // $ExpectError
	f( {}, y ); // $ExpectError
	f( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an ndarray (2 ndarrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = array();

	const f = dispatch( ndarrayFcn, types, data, 2, 1, 1 );
	f( x, 10 ); // $ExpectError
	f( x, '10' ); // $ExpectError
	f( x, true ); // $ExpectError
	f( x, false ); // $ExpectError
	f( x, null ); // $ExpectError
	f( x, undefined ); // $ExpectError
	f( x, [ '1' ] ); // $ExpectError
	f( x, {} ); // $ExpectError
	f( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray (3 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const y = array();
	const z = array();

	const f = dispatch( ndarrayFcn, types, data, 3, 2, 1 );
	f( 10, y, z ); // $ExpectError
	f( '10', y, z ); // $ExpectError
	f( true, y, z ); // $ExpectError
	f( false, y, z ); // $ExpectError
	f( null, y, z ); // $ExpectError
	f( undefined, y, z ); // $ExpectError
	f( [ '1' ], y, z ); // $ExpectError
	f( {}, y, z ); // $ExpectError
	f( ( x: number ): number => x, y, z ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an ndarray (3 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = array();
	const z = array();

	const f = dispatch( ndarrayFcn, types, data, 3, 2, 1 );
	f( x, 10, z ); // $ExpectError
	f( x, '10', z ); // $ExpectError
	f( x, true, z ); // $ExpectError
	f( x, false, z ); // $ExpectError
	f( x, null, z ); // $ExpectError
	f( x, undefined, z ); // $ExpectError
	f( x, [ '1' ], z ); // $ExpectError
	f( x, {}, z ); // $ExpectError
	f( x, ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an ndarray (3 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = array();
	const y = array();

	const f = dispatch( ndarrayFcn, types, data, 3, 2, 1 );
	f( x, y, '10' ); // $ExpectError
	f( x, y, true ); // $ExpectError
	f( x, y, false ); // $ExpectError
	f( x, y, null ); // $ExpectError
	f( x, y, undefined ); // $ExpectError
	f( x, y, [ '1' ] ); // $ExpectError
	f( x, y, {} ); // $ExpectError
	f( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray (4 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const y = array();
	const z = array();
	const w = array();

	const f = dispatch( ndarrayFcn, types, data, 4, 3, 1 );
	f( 10, y, z, w ); // $ExpectError
	f( '10', y, z, w ); // $ExpectError
	f( true, y, z, w ); // $ExpectError
	f( false, y, z, w ); // $ExpectError
	f( null, y, z, w ); // $ExpectError
	f( undefined, y, z, w ); // $ExpectError
	f( [ '1' ], y, z, w ); // $ExpectError
	f( {}, y, z, w ); // $ExpectError
	f( ( x: number ): number => x, y, z, w ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an ndarray (4 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = array();
	const z = array();
	const w = array();

	const f = dispatch( ndarrayFcn, types, data, 4, 3, 1 );
	f( x, 10, z, w ); // $ExpectError
	f( x, '10', z, w ); // $ExpectError
	f( x, true, z, w ); // $ExpectError
	f( x, false, z, w ); // $ExpectError
	f( x, null, z, w ); // $ExpectError
	f( x, undefined, z, w ); // $ExpectError
	f( x, [ '1' ], z, w ); // $ExpectError
	f( x, {}, z, w ); // $ExpectError
	f( x, ( x: number ): number => x, z, w ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an ndarray (4 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = array();
	const y = array();
	const w = array();

	const f = dispatch( ndarrayFcn, types, data, 4, 3, 1 );
	f( x, y, 10, w ); // $ExpectError
	f( x, y, '10', w ); // $ExpectError
	f( x, y, true, w ); // $ExpectError
	f( x, y, false, w ); // $ExpectError
	f( x, y, null, w ); // $ExpectError
	f( x, y, undefined, w ); // $ExpectError
	f( x, y, [ '1' ], w ); // $ExpectError
	f( x, y, {}, w ); // $ExpectError
	f( x, y, ( x: number ): number => x, w ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not an ndarray (4 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = array();
	const y = array();
	const z = array();

	const f = dispatch( ndarrayFcn, types, data, 4, 3, 1 );
	f( x, y, z, 10 ); // $ExpectError
	f( x, y, z, '10' ); // $ExpectError
	f( x, y, z, true ); // $ExpectError
	f( x, y, z, false ); // $ExpectError
	f( x, y, z, null ); // $ExpectError
	f( x, y, z, undefined ); // $ExpectError
	f( x, y, z, [ '1' ] ); // $ExpectError
	f( x, y, z, {} ); // $ExpectError
	f( x, y, z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not an ndarray (5 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const y = array();
	const z = array();
	const w = array();
	const u = array();

	const f = dispatch( ndarrayFcn, types, data, 5, 4, 1 );
	f( 10, y, z, w, u ); // $ExpectError
	f( '10', y, z, w, u ); // $ExpectError
	f( true, y, z, w, u ); // $ExpectError
	f( false, y, z, w, u ); // $ExpectError
	f( null, y, z, w, u ); // $ExpectError
	f( undefined, y, z, w, u ); // $ExpectError
	f( [ '1' ], y, z, w, u ); // $ExpectError
	f( {}, y, z, w, u ); // $ExpectError
	f( ( x: number ): number => x, y, z, w, u ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not an ndarray (5 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = array();
	const z = array();
	const w = array();
	const u = array();

	const f = dispatch( ndarrayFcn, types, data, 5, 4, 1 );
	f( x, 10, z, w, u ); // $ExpectError
	f( x, '10', z, w, u ); // $ExpectError
	f( x, true, z, w, u ); // $ExpectError
	f( x, false, z, w, u ); // $ExpectError
	f( x, null, z, w, u ); // $ExpectError
	f( x, undefined, z, w, u ); // $ExpectError
	f( x, [ '1' ], z, w, u ); // $ExpectError
	f( x, {}, z, w, u ); // $ExpectError
	f( x, ( x: number ): number => x, z, w, u ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an ndarray (5 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = array();
	const y = array();
	const w = array();
	const u = array();

	const f = dispatch( ndarrayFcn, types, data, 5, 4, 1 );
	f( x, y, 10, w, u ); // $ExpectError
	f( x, y, '10', w, u ); // $ExpectError
	f( x, y, true, w, u ); // $ExpectError
	f( x, y, false, w, u ); // $ExpectError
	f( x, y, null, w, u ); // $ExpectError
	f( x, y, undefined, w, u ); // $ExpectError
	f( x, y, [ '1' ], w, u ); // $ExpectError
	f( x, y, {}, w, u ); // $ExpectError
	f( x, y, ( x: number ): number => x, w, u ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not an ndarray (5 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = array();
	const y = array();
	const z = array();
	const u = array();

	const f = dispatch( ndarrayFcn, types, data, 5, 4, 1 );
	f( x, y, z, 10, u ); // $ExpectError
	f( x, y, z, '10', u ); // $ExpectError
	f( x, y, z, true, u ); // $ExpectError
	f( x, y, z, false, u ); // $ExpectError
	f( x, y, z, null, u ); // $ExpectError
	f( x, y, z, undefined, u ); // $ExpectError
	f( x, y, z, [ '1' ], u ); // $ExpectError
	f( x, y, z, {}, u ); // $ExpectError
	f( x, y, z, ( x: number ): number => x, u ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fifth argument which is not an ndarray (5 ndarrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = array();
	const y = array();
	const z = array();
	const w = array();

	const f = dispatch( ndarrayFcn, types, data, 5, 4, 1 );
	f( x, y, z, w, 10 ); // $ExpectError
	f( x, y, z, w, '10' ); // $ExpectError
	f( x, y, z, w, true ); // $ExpectError
	f( x, y, z, w, false ); // $ExpectError
	f( x, y, z, w, null ); // $ExpectError
	f( x, y, z, w, undefined ); // $ExpectError
	f( x, y, z, w, [ '1' ] ); // $ExpectError
	f( x, y, z, w, {} ); // $ExpectError
	f( x, y, z, w, ( x: number ): number => x ); // $ExpectError
}
