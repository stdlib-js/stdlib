/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable max-lines */

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import dispatchBy = require( './index' );


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
* Identity function.
*
* @param values - input values
* @return input values
*/
function identity( ...values: Array<any> ): Array<any> {
	return values;
}

/**
* Mock strided array function.
*
* @param arrays - strided arrays
* @param shape - array shape
* @param strides - strides
* @param fcn - callback
* @param clbk - callback
* @param thisArg - callback execution context
*/
function strided( arrays: Array<ArrayLike<any>>, shape: Array<number>, strides: Array<number>, fcn: ( x: any ) => any, clbk: ( ...args: Array<any> ) => any, thisArg?: any ): void {
	let sx;
	let sy;
	let ix;
	let iy;
	let x;
	let y;
	let N;
	let v;
	let i;

	N = shape[ 0 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	ix = 0;
	iy = 0;
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
		if ( v !== void 0 ) {
			y[ iy ] = fcn( v );
		}
		ix += sx;
		iy += sy;
	}
}

/**
* Mock strided array function with offsets.
*
* @param arrays - strided arrays
* @param shape - array shape
* @param strides - strides
* @param offsets - offsets
* @param fcn - callback
* @param clbk - callback
* @param thisArg - callback execution context
*/
function stridedWithOffsets( arrays: Array<ArrayLike<any>>, shape: Array<number>, strides: Array<number>, offsets: Array<number>, fcn: ( x: any ) => any, clbk: ( ...args: Array<any> ) => any, thisArg?: any ): void {
	let sx;
	let sy;
	let ix;
	let iy;
	let x;
	let y;
	let N;
	let v;
	let i;

	N = shape[ 0 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	ix = offsets[ 0 ];
	iy = offsets[ 1 ];
	for ( i = 0; i < N; i++ ) {
		v = clbk.call( thisArg, x[ ix ], i, [ ix, iy ], [ x, y ] );
		if ( v !== void 0 ) {
			y[ iy ] = fcn( v );
		}
		ix += sx;
		iy += sy;
	}
}


// TESTS //

// The function returns a dispatch function...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatchBy( strided, types, data, 8, 1, 1 ); // $ExpectType Dispatcher
	dispatchBy( [ strided ], types, data, 8, 1, 1 ); // $ExpectType Dispatcher

	dispatchBy( stridedWithOffsets, types, data, 10, 1, 1 ); // $ExpectType Dispatcher
	dispatchBy( [ stridedWithOffsets ], types, data, 10, 1, 1 ); // $ExpectType Dispatcher
}

// The compiler throws an error if the function is provided a first argument which is not either a strided array function or an array-like object containing strided array functions...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatchBy( '10', types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( 10, types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( true, types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( false, types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( null, types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( undefined, types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( [ '1' ], types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( {}, types, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( ( x: number ): number => x, types, data, 8, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	const data = [ unary ];

	dispatchBy( strided, 10, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, true, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, false, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, null, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, undefined, data, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, {}, data, 8, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object or null...
{
	const types = [ 'float64', 'float64' ];

	dispatchBy( strided, types, 10, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, true, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, false, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, undefined, 8, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, {}, 8, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatchBy( strided, types, data, '10', 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, true, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, false, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, null, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, undefined, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, [ '1' ], 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, {}, 1, 1 ); // $ExpectError
	dispatchBy( strided, types, data, ( x: number ): number => x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatchBy( strided, types, data, 8, '10', 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, true, 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, false, 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, null, 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, undefined, 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, [ '1' ], 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, {}, 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatchBy( strided, types, data, 8, 1, '10' ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, true ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, false ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, null ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, undefined ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, [ '1' ] ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, {} ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatchBy(); // $ExpectError
	dispatchBy( strided ); // $ExpectError
	dispatchBy( strided, types ); // $ExpectError
	dispatchBy( strided, types, data ); // $ExpectError
	dispatchBy( strided, types, data, 8 ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1 ); // $ExpectError
	dispatchBy( strided, types, data, 8, 1, 1, 0 ); // $ExpectError
}

// The function returns a dispatch function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );
	const w = new Float64Array( x.length );
	const u = new Float64Array( x.length );

	const t1 = [ 'float64' ];
	const d1 = [ nullary ];
	const f1 = dispatchBy( strided, t1, d1, 5, 1, 0 );
	f1( x.length, 'float64', x, 1, identity ); // $ExpectType void | ArrayLike<any>
	f1( x.length, 'float64', x, 1, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t2 = [ 'float64', 'float64' ];
	const d2 = [ unary ];
	const f2 = dispatchBy( strided, t2, d2, 8, 1, 1 );
	f2( x.length, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectType void | ArrayLike<any>
	f2( x.length, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t3 = [ 'float64', 'float64', 'float64' ];
	const d3 = [ binary ];
	const f3 = dispatchBy( strided, t3, d3, 11, 2, 1 );
	f3( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectType void | ArrayLike<any>
	f3( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t4 = [ 'float64', 'float64', 'float64', 'float64' ];
	const d4 = [ ternary ];
	const f4 = dispatchBy( strided, t4, d4, 14, 3, 1 );
	f4( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectType void | ArrayLike<any>
	f4( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t5 = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const d5 = [ quaternary ];
	const f5 = dispatchBy( strided, t5, d5, 17, 4, 1 );
	f5( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64',  w, 1, 'float64', u, 1, identity ); // $ExpectType void | ArrayLike<any>
	f5( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64',  w, 1, 'float64', u, 1, identity, {} ); // $ExpectType void | ArrayLike<any>
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 5, 0, 1 );
	f( '10', 'float64', x, 1, identity ); // $ExpectError
	f( true, 'float64', x, 1, identity ); // $ExpectError
	f( false, 'float64', x, 1, identity ); // $ExpectError
	f( null, 'float64', x, 1, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, identity ); // $ExpectError
	f( {}, 'float64', x, 1, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, identity ); // $ExpectError

	f( '10', 'float64', x, 1, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 5, 0, 1 );
	f( x.length, 'float64', 10, 1, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 5, 0, 1 );
	f( x.length, 'float64', x, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, true, identity ); // $ExpectError
	f( x.length, 'float64', x, false, identity ); // $ExpectError
	f( x.length, 'float64', x, null, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fifth argument which is not a function (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 5, 0, 1 );
	f( x.length, 'float64', x, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 8, 1, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 8, 1, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 8, 1, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 8, 1, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 'float64', 10, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 8, 1, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an eighth argument which is not a function (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 8, 1, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a ninth argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1, identity ); // $ExpectError

	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a tenth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an eleventh argument which is not a function (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 11, 2, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, 'float64', w, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a ninth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1, 'float64', w, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1, 'float64', w, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1, 'float64', w, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1, 'float64', w, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1, 'float64', w, 1, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1, 'float64', w, 1, identity ); // $ExpectError

	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1, 'float64', w, 1, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a tenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, 'float64', w, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, 'float64', w, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, 'float64', w, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, 'float64', w, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a twelfth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', 10, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', true, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', false, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', null, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', undefined, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', {}, 1, identity ); // $ExpectError

	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', 10, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', true, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', false, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', null, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', undefined, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', {}, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a thirteenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourteenth argument which is not a function (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 14, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a ninth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( z.length, x, 1, 'float64', y, 1, 'float64', 10, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', true, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', false, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', null, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', undefined, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', {}, 1, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError

	f( z.length, x, 1, 'float64', y, 1, 'float64', 10, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', true, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', false, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', null, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', undefined, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', {}, 1, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a tenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, 'float64', w, 1, 'float64', u, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, 'float64', w, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a twelfth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', 10, 1, 'float64', u, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', true, 1, 'float64', u, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', false, 1, 'float64', u, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', null, 1, 'float64', u, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', undefined, 1, 'float64', u, 1, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', {}, 1, 'float64', u, 1, identity ); // $ExpectError

	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', 10, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', true, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', false, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', null, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', undefined, 1, 'float64', u, 1, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', {}, 1, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a thirteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, '10', 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, true, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, false, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, null, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 'float64', undefined, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, [ '1' ], 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, {}, 'float64', u, 1, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, ( x: number ): number => x, 'float64', u, 1, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, '10', 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, true, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, false, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, null, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 'float64', undefined, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, [ '1' ], 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, {}, 'float64', u, 1, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, ( x: number ): number => x, 'float64', u, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fifteenth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', true, 1, identity ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', false, 1, identity ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', null, 1, identity ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', undefined, 1, identity ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', {}, 1, identity ); // $ExpectError

	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', true, 1, identity, {} ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', false, 1, identity, {} ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', null, 1, identity, {} ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', undefined, 1, identity, {} ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', {}, 1, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 17, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, {}, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, {}, identity, {} ); // $ExpectError
}

// The function supports returning a dispatch function which supports offsets...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );
	const w = new Float64Array( x.length );
	const u = new Float64Array( x.length );

	const t1 = [ 'float64' ];
	const d1 = [ nullary ];
	const f1 = dispatchBy( strided, t1, d1, 6, 1, 0 );
	f1( x.length, 'float64', x, 1, 0, identity ); // $ExpectType void | ArrayLike<any>
	f1( x.length, 'float64', x, 1, 0, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t2 = [ 'float64', 'float64' ];
	const d2 = [ unary ];
	const f2 = dispatchBy( strided, t2, d2, 10, 1, 1 );
	f2( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectType void | ArrayLike<any>
	f2( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t3 = [ 'float64', 'float64', 'float64' ];
	const d3 = [ binary ];
	const f3 = dispatchBy( strided, t3, d3, 14, 2, 1 );
	f3( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectType void | ArrayLike<any>
	f3( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t4 = [ 'float64', 'float64', 'float64', 'float64' ];
	const d4 = [ ternary ];
	const f4 = dispatchBy( strided, t4, d4, 18, 3, 1 );
	f4( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectType void | ArrayLike<any>
	f4( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectType void | ArrayLike<any>

	const t5 = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const d5 = [ quaternary ];
	const f5 = dispatchBy( strided, t5, d5, 22, 4, 1 );
	f5( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectType void | ArrayLike<any>
	f5( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectType void | ArrayLike<any>
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 6, 0, 1 );
	f( '10', 'float64', x, 1, 0, identity ); // $ExpectError
	f( true, 'float64', x, 1, 0, identity ); // $ExpectError
	f( false, 'float64', x, 1, 0, identity ); // $ExpectError
	f( null, 'float64', x, 1, 0, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 0, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 0, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 6, 0, 1 );
	f( x.length, 'float64', 10, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 6, 0, 1 );
	f( x.length, 'float64', x, '10', 0, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 6, 0, 1 );
	f( x.length, 'float64', x, 1, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a sixth argument which is not a function (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatchBy( strided, types, data, 6, 0, 1 );
	f( x.length, 'float64', x, 1, 0, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a tenth argument which is not a function (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatchBy( strided, types, data, 10, 1, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eleventh argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, identity ); // $ExpectError

	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twelfth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a thirteenth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourteenth argument which is not a function (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatchBy( strided, types, data, 14, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eleventh argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twelfth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a thirteenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, 'float64', w, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, 'float64', w, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, 'float64', w, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, 'float64', w, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifteenth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', 10, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', true, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', false, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', null, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', undefined, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', {}, 1, 0, identity ); // $ExpectError

	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', 10, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', true, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', false, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', null, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', undefined, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a sixteenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, '10', 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, true, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, false, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, null, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, undefined, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, [ '1' ], 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, {}, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, ( x: number ): number => x, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, '10', 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, true, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, false, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, null, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, undefined, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, [ '1' ], 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, {}, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, ( x: number ): number => x, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventeenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, '10', identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, [ '1' ], identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, {}, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, ( x: number ): number => x, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, '10', identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, [ '1' ], identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, {}, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, ( x: number ): number => x, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighteenth argument which is not a function (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatchBy( strided, types, data, 18, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, {} ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, '10', {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, true, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, false, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, null, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, undefined, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, [ '1' ], {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eleventh argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twelfth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a thirteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, 'float64', w, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, 'float64', w, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifteenth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', 10, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', true, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', false, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', null, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', undefined, 1, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', {}, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError

	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', 10, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', true, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', false, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', null, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', undefined, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', {}, 1, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a sixteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, '10', 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, true, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, false, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, null, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, undefined, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, [ '1' ], 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, {}, 0, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, ( x: number ): number => x, 0, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, '10', 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, true, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, false, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, null, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, undefined, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, [ '1' ], 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, {}, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, ( x: number ): number => x, 0, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventeenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, '10', 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, true, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, false, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, null, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, undefined, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, [ '1' ], 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, {}, 'float64', u, 1, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, ( x: number ): number => x, 'float64', u, 1, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, '10', 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, true, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, false, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, null, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, undefined, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, [ '1' ], 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, {}, 'float64', u, 1, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, ( x: number ): number => x, 'float64', u, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a nineteenth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', true, 1, 0, identity ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', false, 1, 0, identity ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', null, 1, 0, identity ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', undefined, 1, 0, identity ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', {}, 1, 0, identity ); // $ExpectError

	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', true, 1, 0, identity, {} ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', false, 1, 0, identity, {} ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', null, 1, 0, identity, {} ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', undefined, 1, 0, identity, {} ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', {}, 1, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twentieth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, true, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, false, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, null, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, undefined, 0, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, {}, 0, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, true, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, false, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, null, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, undefined, 0, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, {}, 0, identity, {} ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twenty-first argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatchBy( strided, types, data, 22, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, true, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, false, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, null, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, undefined, identity ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, {}, identity ); // $ExpectError

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, true, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, false, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, null, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, undefined, identity, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, {}, identity, {} ); // $ExpectError
}
