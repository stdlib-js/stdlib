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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import dispatch = require( './index' );

/**
* Identity function.
*
* @param x - input value
* @returns return value
*/
function identity( x: number ): number {
	return x;
}

/**
* Function which operates on a strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y`
*/
function stridedArrayFunction( N: number, x: ArrayLike<number>, strideX: number, y: ArrayLike<number>, strideY: number ): ArrayLike<number> { // tslint:disable-line:max-line-length
	let ix;
	let iy;
	if ( N <= 0 ) {
		return y;
	}
	if ( strideX < 0 ) {
		ix = ( 1 - N ) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = ( 1 - N ) * strideY;
	} else {
		iy = 0;
	}
	if ( x[ ix ] !== x[ ix ] ) {
		return y;
	}
	if ( y[ iy ] !== y[ iy ] ) {
		return y;
	}
	return y;
}

/**
* Function which operates on a strided array using alternative indexing semantics.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param offsetX - starting index for `x`
* @param y - destination array
* @param strideY - `y` stride length
* @param offsetY - starting index for `y`
* @returns `y`
*/
function stridedArrayFunctionWithOffsets( N: number, x: ArrayLike<number>, strideX: number, offsetX: number, y: ArrayLike<number>, strideY: number, offsetY: number ): ArrayLike<number> { // tslint:disable-line:max-line-length
	let ix;
	let iy;
	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;
	if ( x[ ix + strideX ] !== x[ ix + strideX ] ) {
		return y;
	}
	if ( y[ iy + strideY ] !== y[ iy + strideY ] ) {
		return y;
	}
	return y;
}


// TESTS //

// The function returns a dispatch function...
{
	const t1 = {};
	dispatch( t1 ); // $ExpectType DispatchFunction

	const t2 = {
		'scalar': [ 'number', identity ]
	};
	dispatch( t2 ); // $ExpectType DispatchFunction

	const t3 = {
		'array': [ 'generic', stridedArrayFunction ]
	};
	dispatch( t3 ); // $ExpectType DispatchFunction

	const t4 = {
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	dispatch( t4 ); // $ExpectType DispatchFunction

	const t5 = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ]
	};
	dispatch( t5 ); // $ExpectType DispatchFunction

	const t6 = {
		'scalar': [ 'number', identity ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	dispatch( t6 ); // $ExpectType DispatchFunction

	const t7 = {
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	dispatch( t7 ); // $ExpectType DispatchFunction

	const t8 = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	dispatch( t8 ); // $ExpectType DispatchFunction
}

// The function does not compile if not provided a table resolution object...
{
	dispatch( '5' ); // $ExpectError
	dispatch( 5 ); // $ExpectError
	dispatch( true ); // $ExpectError
	dispatch( false ); // $ExpectError
	dispatch( null ); // $ExpectError
	dispatch( undefined ); // $ExpectError
	dispatch( [ '5' ] ); // $ExpectError
	dispatch( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a table resolution object having an invalid `scalar` field...
{
	dispatch( { 'scalar': 5 } ); // $ExpectError
	dispatch( { 'scalar': true } ); // $ExpectError
	dispatch( { 'scalar': false } ); // $ExpectError
	dispatch( { 'scalar': null } ); // $ExpectError
	dispatch( { 'scalar': [ 5 ] } ); // $ExpectError
	dispatch( { 'scalar': [ '5', 5 ] } ); // $ExpectError
	dispatch( { 'scalar': ( x: number ): number => x } ); // $ExpectError
	dispatch( { 'scalar': [ '5', ( x: string ): string => x ] } ); // $ExpectError
}

// The function does not compile if provided a table resolution object having an invalid `array` field...
{
	dispatch( { 'array': 5 } ); // $ExpectError
	dispatch( { 'array': true } ); // $ExpectError
	dispatch( { 'array': false } ); // $ExpectError
	dispatch( { 'array': null } ); // $ExpectError
	dispatch( { 'array': [ 5 ] } ); // $ExpectError
	dispatch( { 'array': [ '5', 5 ] } ); // $ExpectError
	dispatch( { 'array': ( x: number ): number => x } ); // $ExpectError
	dispatch( { 'array': [ '5', ( x: string ): string => x ] } ); // $ExpectError
}

// The function does not compile if provided a table resolution object having an invalid `ndarray` field...
{
	dispatch( { 'ndarray': 5 } ); // $ExpectError
	dispatch( { 'ndarray': true } ); // $ExpectError
	dispatch( { 'ndarray': false } ); // $ExpectError
	dispatch( { 'ndarray': null } ); // $ExpectError
	dispatch( { 'ndarray': [ 5 ] } ); // $ExpectError
	dispatch( { 'ndarray': [ '5', 5 ] } ); // $ExpectError
	dispatch( { 'ndarray': ( x: number ): number => x } ); // $ExpectError
	dispatch( { 'ndarray': [ '5', ( x: string ): string => x ] } ); // $ExpectError
}

// The function returns a function which returns a number if provided a number...
{
	const t = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	const abs = dispatch( t ); // $ExpectType DispatchFunction

	abs( 8 ); // $ExpectType number
}

// The function returns a function which returns an array-like object if provided an array-like object...
{
	const t = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	const abs = dispatch( t ); // $ExpectType DispatchFunction

	const x = new Float64Array( 10 );

	abs( x ); // $ExpectType ArrayLike<number>
}

// The function returns a function which returns an ndarray if provided an ndarray...
{
	const t = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	const abs = dispatch( t ); // $ExpectType DispatchFunction

	const buf = [ 1, 2, 3, 4 ];

	const x: ndarray = {
		'byteLength': null,
		'BYTES_PER_ELEMENT': null,
		'data': buf,
		'dtype': 'generic',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 4,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 4 ],
		'strides': [ 1 ],
		'get': ( i: number ): number => {
			return buf[ i ];
		},
		'set': ( i: number, v: number ): ndarray => {
			buf[ i ] = v;
			return x;
		}
	};

	abs( x ); // $ExpectType ndarray
}

// The function returns a function which does not compile if provided a value other than an ndarray, array-like object, or number...
{
	const t = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	const abs = dispatch( t ); // $ExpectType DispatchFunction

	abs( '5' ); // $ExpectError
	abs( true ); // $ExpectError
	abs( false ); // $ExpectError
	abs( null ); // $ExpectError
	abs( undefined ); // $ExpectError
	abs( {} ); // $ExpectError
	abs( [ '5' ] ); // $ExpectError
	abs( ( x: number ): number => x ); // $ExpectError
}

// The function returns a function which does not compile if provided insufficient arguments...
{
	const t = {
		'scalar': [ 'number', identity ],
		'array': [ 'generic', stridedArrayFunction ],
		'ndarray': [ 'generic', stridedArrayFunctionWithOffsets ]
	};
	const abs = dispatch( t ); // $ExpectType DispatchFunction

	abs(); // $ExpectError
}
