/*
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

import logEachMap = require( './index' );

/**
* Callback function.
*
* @returns result
*/
function nullaryFcn(): string {
	return 'foo';
}

/**
* Callback function.
*
* @param x - first value
* @returns result
*/
function unaryFcn( x: number ): number {
	return x;
}

/**
* Callback function.
*
* @param x - first value
* @param y - second value
* @returns result
*/
function binaryFcn( x: number, y: number ): number {
	return x + y;
}

/**
* Callback function.
*
* @param x - first value
* @param y - second value
* @param z - third value
* @returns result
*/
function ternaryFcn( x: number, y: number, z: number ): number {
	return x + y + z;
}

/**
* Callback function.
*
* @param x - first value
* @param y - second value
* @param z - third value
* @param w - fourth value
* @returns result
*/
function quaternaryFcn( x: number, y: number, z: number, w: number ): number {
	return x + y + z + w;
}


// TESTS //

// The function returns void...
{
	const x = [ 1, 2, 3 ];

	logEachMap( '%s', nullaryFcn ); // $ExpectType void

	logEachMap( '%d', x, unaryFcn ); // $ExpectType void

	logEachMap( '%d + %d = %d', x, x, binaryFcn ); // $ExpectType void
	logEachMap( '%d + %d = %d', x, 1, binaryFcn ); // $ExpectType void
	logEachMap( '%d + %d = %d', 1, x, binaryFcn ); // $ExpectType void
	logEachMap( '%d + %d = %d', 1, 1, binaryFcn ); // $ExpectType void

	logEachMap( '%d + %d + %d = %d', x, x, x, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', 1, x, x, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', x, 1, x, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', x, x, 1, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', 1, 1, x, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', 1, x, 1, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', x, 1, 1, ternaryFcn ); // $ExpectType void
	logEachMap( '%d + %d + %d = %d', 1, 1, 1, ternaryFcn ); // $ExpectType void

	logEachMap( '%d + %d + %d + %d = %d', x, x, x, x, quaternaryFcn ); // $ExpectType void
}

// The compiler throws an error if the first argument is not a string...
{
	const x = [ 1, 2, 3 ];

	logEachMap( 123 ); // $ExpectError
	logEachMap( true ); // $ExpectError
	logEachMap( false ); // $ExpectError
	logEachMap( null ); // $ExpectError
	logEachMap( undefined ); // $ExpectError
	logEachMap( [] ); // $ExpectError
	logEachMap( {} ); // $ExpectError
	logEachMap( ( x: number ): number => x ); // $ExpectError

	logEachMap( 123, x, unaryFcn ); // $ExpectError
	logEachMap( true, x, unaryFcn ); // $ExpectError
	logEachMap( false, x, unaryFcn ); // $ExpectError
	logEachMap( null, x, unaryFcn ); // $ExpectError
	logEachMap( undefined, x, unaryFcn ); // $ExpectError
	logEachMap( [], x, unaryFcn ); // $ExpectError
	logEachMap( {}, x, unaryFcn ); // $ExpectError
	logEachMap( ( x: number ): number => x, x, unaryFcn ); // $ExpectError

	logEachMap( 123, x, x, binaryFcn ); // $ExpectError
	logEachMap( true, x, x, binaryFcn ); // $ExpectError
	logEachMap( false, x, x, binaryFcn ); // $ExpectError
	logEachMap( null, x, x, binaryFcn ); // $ExpectError
	logEachMap( undefined, x, x, binaryFcn ); // $ExpectError
	logEachMap( [], x, x, binaryFcn ); // $ExpectError
	logEachMap( {}, x, x, binaryFcn ); // $ExpectError
	logEachMap( ( x: number ): number => x, x, x, binaryFcn ); // $ExpectError

	logEachMap( 123, x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( true, x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( false, x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( null, x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( undefined, x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( [], x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( {}, x, x, x, ternaryFcn ); // $ExpectError
	logEachMap( ( x: number ): number => x, x, x, x, ternaryFcn ); // $ExpectError
}
