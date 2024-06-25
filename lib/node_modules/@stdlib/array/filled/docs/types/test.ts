/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import { IterableIterator } from '@stdlib/types/iter';
import filledarray = require( './index' );

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next(): any {
	return {
		'value': 1.0,
		'done': false
	};
}

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator(): IterableIterator {
	const obj: IterableIterator = {
		[Symbol.iterator]: iterator,
		'next': next
	};
	return obj;
}


// TESTS //

// The function returns an array or typed array...
{
	filledarray(); // $ExpectType Float64Array
	filledarray( 'float32' ); // $ExpectType Float32Array

	filledarray( 1.0, 10 ); // $ExpectType Float64Array
	filledarray( 1.0, 10, 'int32' ); // $ExpectType Int32Array

	const x = new Float64Array( 10 );
	filledarray( 1.0, x ); // $ExpectType Float64Array
	filledarray( 1.0, x, 'uint8' ); // $ExpectType Uint8Array

	const y = [ 2.0, 2.0, 2.0 ];
	filledarray( 1.0, y ); // $ExpectType Float64Array
	filledarray( 1.0, y, 'float64' ); // $ExpectType Float64Array

	const it = iterator();
	filledarray( 1.0, it ); // $ExpectType Float64Array
	filledarray( 1.0, it, 'uint8c' ); // $ExpectType Uint8ClampedArray

	const buf = new ArrayBuffer( 32 );
	filledarray( 1.0, buf ); // $ExpectType Float64Array
	filledarray( 1.0, buf, 'uint32' ); // $ExpectType Uint32Array

	filledarray( 1.0, buf, 8 ); // $ExpectType Float64Array
	filledarray( 1.0, buf, 8, 'uint16' ); // $ExpectType Uint16Array

	filledarray( 1.0, buf, 8, 2 ); // $ExpectType Float64Array
	filledarray( 1.0, buf, 8, 2, 'int16' ); // $ExpectType Int16Array
}

// The compiler throws an error if the function is not provided a valid length, typed array, array-like object, `ArrayBuffer`, or iterable argument...
{
	filledarray( 1.0, false ); // $ExpectError
	filledarray( 1.0, true ); // $ExpectError
	filledarray( 1.0, null ); // $ExpectError
	filledarray( 1.0, {} ); // $ExpectError

	filledarray( 1.0, false, 'float64' ); // $ExpectError
	filledarray( 1.0, true, 'float64' ); // $ExpectError
	filledarray( 1.0, null, 'float64' ); // $ExpectError
	filledarray( 1.0, undefined, 'float64' ); // $ExpectError
	filledarray( 1.0, {}, 'float64' ); // $ExpectError

	filledarray( 1.0, '5', 8 ); // $ExpectError
	filledarray( 1.0, 1.0, 8 ); // $ExpectError
	filledarray( 1.0, false, 8 ); // $ExpectError
	filledarray( 1.0, true, 8 ); // $ExpectError
	filledarray( 1.0, null, 8 ); // $ExpectError
	filledarray( 1.0, undefined, 8 ); // $ExpectError
	filledarray( 1.0, [], 8 ); // $ExpectError
	filledarray( 1.0, {}, 8 ); // $ExpectError
	filledarray( 1.0, ( x: number ): number => x, 8 ); // $ExpectError

	filledarray( 1.0, '5', 8, 'float64' ); // $ExpectError
	filledarray( 1.0, 1.0, 8, 'float64' ); // $ExpectError
	filledarray( 1.0, false, 8, 'float64' ); // $ExpectError
	filledarray( 1.0, true, 8, 'float64' ); // $ExpectError
	filledarray( 1.0, null, 8, 'float64' ); // $ExpectError
	filledarray( 1.0, undefined, 8, 'float64' ); // $ExpectError
	filledarray( 1.0, [], 8, 'float64' ); // $ExpectError
	filledarray( 1.0, {}, 8, 'float64' ); // $ExpectError
	filledarray( 1.0, ( x: number ): number => x, 8, 'float64' ); // $ExpectError

	filledarray( 1.0, '5', 8, 2 ); // $ExpectError
	filledarray( 1.0, 1.0, 8, 2 ); // $ExpectError
	filledarray( 1.0, false, 8, 2 ); // $ExpectError
	filledarray( 1.0, true, 8, 2 ); // $ExpectError
	filledarray( 1.0, null, 8, 2 ); // $ExpectError
	filledarray( 1.0, undefined, 8, 2 ); // $ExpectError
	filledarray( 1.0, [], 8, 2 ); // $ExpectError
	filledarray( 1.0, {}, 8, 2 ); // $ExpectError
	filledarray( 1.0, ( x: number ): number => x, 8, 2 ); // $ExpectError

	filledarray( 1.0, '5', 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, 1.0, 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, false, 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, true, 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, null, 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, undefined, 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, [], 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, {}, 8, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, ( x: number ): number => x, 8, 2, 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided a byte offset argument which is not a number...
{
	const buf = new ArrayBuffer( 32 );

	filledarray( 1.0, buf, false ); // $ExpectError
	filledarray( 1.0, buf, true ); // $ExpectError
	filledarray( 1.0, buf, null ); // $ExpectError
	filledarray( 1.0, buf, [] ); // $ExpectError
	filledarray( 1.0, buf, {} ); // $ExpectError
	filledarray( 1.0, buf, ( x: number ): number => x ); // $ExpectError

	filledarray( 1.0, buf, false, 2 ); // $ExpectError
	filledarray( 1.0, buf, true, 2 ); // $ExpectError
	filledarray( 1.0, buf, null, 2 ); // $ExpectError
	filledarray( 1.0, buf, [], 2 ); // $ExpectError
	filledarray( 1.0, buf, {}, 2 ); // $ExpectError
	filledarray( 1.0, buf, ( x: number ): number => x, 2 ); // $ExpectError

	filledarray( 1.0, buf, '5', 'float64' ); // $ExpectError
	filledarray( 1.0, buf, false, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, true, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, null, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, undefined, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, [], 'float64' ); // $ExpectError
	filledarray( 1.0, buf, {}, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, ( x: number ): number => x, 'float64' ); // $ExpectError

	filledarray( 1.0, buf, '5', 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, false, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, true, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, null, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, undefined, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, [], 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, {}, 2, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, ( x: number ): number => x, 2, 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided a view length argument which is not a number...
{
	const buf = new ArrayBuffer( 32 );

	filledarray( 1.0, buf, 8, false ); // $ExpectError
	filledarray( 1.0, buf, 8, true ); // $ExpectError
	filledarray( 1.0, buf, 8, null ); // $ExpectError
	filledarray( 1.0, buf, 8, [] ); // $ExpectError
	filledarray( 1.0, buf, 8, {} ); // $ExpectError
	filledarray( 1.0, buf, 8, ( x: number ): number => x ); // $ExpectError

	filledarray( 1.0, buf, 8, '5', 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, false, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, true, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, null, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, undefined, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, [], 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, {}, 'float64' ); // $ExpectError
	filledarray( 1.0, buf, 8, ( x: number ): number => x, 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided too many arguments...
{
	const buf = new ArrayBuffer( 32 );

	filledarray( 1.0, buf, 8, 2, 'float64', 1 ); // $ExpectError
}
