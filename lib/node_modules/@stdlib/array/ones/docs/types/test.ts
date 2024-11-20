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

import ones = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	ones( 10 ); // $ExpectType Float64Array
	ones( 10, 'float64' ); // $ExpectType Float64Array
	ones( 10, 'float32' ); // $ExpectType Float32Array
	ones( 10, 'complex128' ); // $ExpectType Complex128Array
	ones( 10, 'complex64' ); // $ExpectType Complex64Array
	ones( 10, 'int32' ); // $ExpectType Int32Array
	ones( 10, 'int16' ); // $ExpectType Int16Array
	ones( 10, 'int8' ); // $ExpectType Int8Array
	ones( 10, 'uint32' ); // $ExpectType Uint32Array
	ones( 10, 'uint16' ); // $ExpectType Uint16Array
	ones( 10, 'uint8' ); // $ExpectType Uint8Array
	ones( 10, 'uint8c' ); // $ExpectType Uint8ClampedArray
	ones( 10, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	ones( '5' ); // $ExpectError
	ones( false ); // $ExpectError
	ones( true ); // $ExpectError
	ones( null ); // $ExpectError
	ones( undefined ); // $ExpectError
	ones( [] ); // $ExpectError
	ones( {} ); // $ExpectError
	ones( ( x: number ): number => x ); // $ExpectError

	ones( '5', 'float32' ); // $ExpectError
	ones( false, 'float32' ); // $ExpectError
	ones( true, 'float32' ); // $ExpectError
	ones( null, 'float32' ); // $ExpectError
	ones( undefined, 'float32' ); // $ExpectError
	ones( [], 'float32' ); // $ExpectError
	ones( {}, 'float32' ); // $ExpectError
	ones( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	ones( 10, '10' ); // $ExpectError
	ones( 10, 10 ); // $ExpectError
	ones( 10, false ); // $ExpectError
	ones( 10, true ); // $ExpectError
	ones( 10, null ); // $ExpectError
	ones( 10, [] ); // $ExpectError
	ones( 10, {} ); // $ExpectError
	ones( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ones( 10, 'float64', 1 ); // $ExpectError
}
