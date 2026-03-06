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

import zeros = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	zeros( 10 ); // $ExpectType Float64Array
	zeros( 10, 'float64' ); // $ExpectType Float64Array
	zeros( 10, 'float32' ); // $ExpectType Float32Array
	zeros( 10, 'complex128' ); // $ExpectType Complex128Array
	zeros( 10, 'complex64' ); // $ExpectType Complex64Array
	zeros( 10, 'int32' ); // $ExpectType Int32Array
	zeros( 10, 'int16' ); // $ExpectType Int16Array
	zeros( 10, 'int8' ); // $ExpectType Int8Array
	zeros( 10, 'uint32' ); // $ExpectType Uint32Array
	zeros( 10, 'uint16' ); // $ExpectType Uint16Array
	zeros( 10, 'uint8' ); // $ExpectType Uint8Array
	zeros( 10, 'uint8c' ); // $ExpectType Uint8ClampedArray
	zeros( 10, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	zeros( '5' ); // $ExpectError
	zeros( false ); // $ExpectError
	zeros( true ); // $ExpectError
	zeros( null ); // $ExpectError
	zeros( undefined ); // $ExpectError
	zeros( [] ); // $ExpectError
	zeros( {} ); // $ExpectError
	zeros( ( x: number ): number => x ); // $ExpectError

	zeros( '5', 'float32' ); // $ExpectError
	zeros( false, 'float32' ); // $ExpectError
	zeros( true, 'float32' ); // $ExpectError
	zeros( null, 'float32' ); // $ExpectError
	zeros( undefined, 'float32' ); // $ExpectError
	zeros( [], 'float32' ); // $ExpectError
	zeros( {}, 'float32' ); // $ExpectError
	zeros( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	zeros( 10, '10' ); // $ExpectError
	zeros( 10, 10 ); // $ExpectError
	zeros( 10, false ); // $ExpectError
	zeros( 10, true ); // $ExpectError
	zeros( 10, null ); // $ExpectError
	zeros( 10, [] ); // $ExpectError
	zeros( 10, {} ); // $ExpectError
	zeros( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeros( 10, 'float64', 1 ); // $ExpectError
}
