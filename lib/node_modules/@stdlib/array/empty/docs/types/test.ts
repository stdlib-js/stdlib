/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import empty = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	empty( 10 ); // $ExpectType Float64Array
	empty( 10, 'float64' ); // $ExpectType Float64Array
	empty( 10, 'float32' ); // $ExpectType Float32Array
	empty( 10, 'complex128' ); // $ExpectType Complex128Array
	empty( 10, 'complex64' ); // $ExpectType Complex64Array
	empty( 10, 'int32' ); // $ExpectType Int32Array
	empty( 10, 'int16' ); // $ExpectType Int16Array
	empty( 10, 'int8' ); // $ExpectType Int8Array
	empty( 10, 'uint32' ); // $ExpectType Uint32Array
	empty( 10, 'uint16' ); // $ExpectType Uint16Array
	empty( 10, 'uint8' ); // $ExpectType Uint8Array
	empty( 10, 'uint8c' ); // $ExpectType Uint8ClampedArray
	empty( 10, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	empty( '5' ); // $ExpectError
	empty( false ); // $ExpectError
	empty( true ); // $ExpectError
	empty( null ); // $ExpectError
	empty( undefined ); // $ExpectError
	empty( [] ); // $ExpectError
	empty( {} ); // $ExpectError
	empty( ( x: number ): number => x ); // $ExpectError

	empty( '5', 'float32' ); // $ExpectError
	empty( false, 'float32' ); // $ExpectError
	empty( true, 'float32' ); // $ExpectError
	empty( null, 'float32' ); // $ExpectError
	empty( undefined, 'float32' ); // $ExpectError
	empty( [], 'float32' ); // $ExpectError
	empty( {}, 'float32' ); // $ExpectError
	empty( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	empty( 10, '10' ); // $ExpectError
	empty( 10, 10 ); // $ExpectError
	empty( 10, false ); // $ExpectError
	empty( 10, true ); // $ExpectError
	empty( 10, null ); // $ExpectError
	empty( 10, [] ); // $ExpectError
	empty( 10, {} ); // $ExpectError
	empty( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	empty( 10, 'float64', 1 ); // $ExpectError
}
