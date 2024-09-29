/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { AccessorArrayLike, ArrayLike } from '@stdlib/types/array';
import Complex128Array = require( '@stdlib/array/complex128' );
import Complex64Array = require( '@stdlib/array/complex64' );
import strided2object = require( './index' );

/**
* Returns an array-like object supporting the get/set protocol.
*
* @returns array-like object
*/
function accessorArray(): AccessorArrayLike<number> {
	const arr: AccessorArrayLike<number> = {
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4,
		'4': 5,
		'5': 6,
		'length': 6,
		'get': ( idx: number ): number => {
			return arr[ idx ];
		},
		'set': ( value: number, idx: number ): void => {
			arr[ idx ] = value;
		}
	};
	return arr;
}

/**
* Returns an array-like object.
*
* @returns array-like object
*/
function arrayLike(): ArrayLike<number> {
	const arr: ArrayLike<number> = {
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4,
		'4': 5,
		'5': 6,
		'length': 6
	};
	return arr;
}


// TESTS //

// The function returns an array object...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	strided2object( 6, x1, 1, 0 ); // $ExpectType GenericAccessorObject<number>

	const x2 = new Float64Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x2, 1, 0 ); // $ExpectType Float64AccessorObject

	const x3 = new Float32Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x3, 1, 0 ); // $ExpectType Float32AccessorObject

	const x4 = new Int32Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x4, 1, 0 ); // $ExpectType Int32AccessorObject

	const x5 = new Int16Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x5, 1, 0 ); // $ExpectType Int16AccessorObject

	const x6 = new Int8Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x6, 1, 0 ); // $ExpectType Int8AccessorObject

	const x7 = new Uint32Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x7, 1, 0 ); // $ExpectType Uint32AccessorObject

	const x8 = new Uint16Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x8, 1, 0 ); // $ExpectType Uint16AccessorObject

	const x9 = new Uint8Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x9, 1, 0 ); // $ExpectType Uint8AccessorObject

	const x10 = new Uint8ClampedArray( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x10, 1, 0 ); // $ExpectType Uint8cAccessorObject

	const x11 = new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x11, 1, 0 ); // $ExpectType Complex128AccessorObject

	const x12 = new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] );
	strided2object( 6, x12, 1, 0 ); // $ExpectType Complex64AccessorObject

	const x13 = accessorArray();
	strided2object( 6, x13, 1, 0 ); // $ExpectType GetSetAccessorObject<number>

	const x14 = arrayLike();
	strided2object( 6, x14, 1, 0 ); // $ExpectType IndexedAccessorObject<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	strided2object( '123', x, 1, 0 ); // $ExpectError
	strided2object( true, x, 1, 0 ); // $ExpectError
	strided2object( false, x, 1, 0 ); // $ExpectError
	strided2object( null, x, 1, 0 ); // $ExpectError
	strided2object( {}, x, 1, 0 ); // $ExpectError
	strided2object( [], x, 1, 0 ); // $ExpectError
	strided2object( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	strided2object( x.length, 123, 1, 0 ); // $ExpectError
	strided2object( x.length, true, 1, 0 ); // $ExpectError
	strided2object( x.length, false, 1, 0 ); // $ExpectError
	strided2object( x.length, null, 1, 0 ); // $ExpectError
	strided2object( x.length, {}, 1, 0 ); // $ExpectError
	strided2object( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	strided2object( x.length, x, '123', 0 ); // $ExpectError
	strided2object( x.length, x, true, 0 ); // $ExpectError
	strided2object( x.length, x, false, 0 ); // $ExpectError
	strided2object( x.length, x, null, 0 ); // $ExpectError
	strided2object( x.length, x, {}, 0 ); // $ExpectError
	strided2object( x.length, x, [], 0 ); // $ExpectError
	strided2object( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	strided2object( x.length, x, 1, '123' ); // $ExpectError
	strided2object( x.length, x, 1, true ); // $ExpectError
	strided2object( x.length, x, 1, false ); // $ExpectError
	strided2object( x.length, x, 1, null ); // $ExpectError
	strided2object( x.length, x, 1, {} ); // $ExpectError
	strided2object( x.length, x, 1, [] ); // $ExpectError
	strided2object( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	strided2object(); // $ExpectError
	strided2object( x.length ); // $ExpectError
	strided2object( x.length, x ); // $ExpectError
	strided2object( x.length, x, 1 ); // $ExpectError
	strided2object( x.length, x, 1, 0, {} ); // $ExpectError
}
