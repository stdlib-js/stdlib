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

import zeroTo = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	zeroTo( 10 ); // $ExpectType Float64Array
	zeroTo( 10, 'float64' ); // $ExpectType Float64Array
	zeroTo( 10, 'float32' ); // $ExpectType Float32Array
	zeroTo( 10, 'complex128' ); // $ExpectType Complex128Array
	zeroTo( 10, 'complex64' ); // $ExpectType Complex64Array
	zeroTo( 10, 'int32' ); // $ExpectType Int32Array
	zeroTo( 10, 'int16' ); // $ExpectType Int16Array
	zeroTo( 10, 'int8' ); // $ExpectType Int8Array
	zeroTo( 10, 'uint32' ); // $ExpectType Uint32Array
	zeroTo( 10, 'uint16' ); // $ExpectType Uint16Array
	zeroTo( 10, 'uint8' ); // $ExpectType Uint8Array
	zeroTo( 10, 'uint8c' ); // $ExpectType Uint8ClampedArray
	zeroTo( 10, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	zeroTo( '5' ); // $ExpectError
	zeroTo( false ); // $ExpectError
	zeroTo( true ); // $ExpectError
	zeroTo( null ); // $ExpectError
	zeroTo( undefined ); // $ExpectError
	zeroTo( [] ); // $ExpectError
	zeroTo( {} ); // $ExpectError
	zeroTo( ( x: number ): number => x ); // $ExpectError

	zeroTo( '5', 'float32' ); // $ExpectError
	zeroTo( false, 'float32' ); // $ExpectError
	zeroTo( true, 'float32' ); // $ExpectError
	zeroTo( null, 'float32' ); // $ExpectError
	zeroTo( undefined, 'float32' ); // $ExpectError
	zeroTo( [], 'float32' ); // $ExpectError
	zeroTo( {}, 'float32' ); // $ExpectError
	zeroTo( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	zeroTo( 10, '10' ); // $ExpectError
	zeroTo( 10, 10 ); // $ExpectError
	zeroTo( 10, false ); // $ExpectError
	zeroTo( 10, true ); // $ExpectError
	zeroTo( 10, null ); // $ExpectError
	zeroTo( 10, [] ); // $ExpectError
	zeroTo( 10, {} ); // $ExpectError
	zeroTo( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeroTo( 10, 'float64', 1 ); // $ExpectError
}
