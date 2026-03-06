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

import nans = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	nans( 10 ); // $ExpectType Float64Array
	nans( 10, 'float64' ); // $ExpectType Float64Array
	nans( 10, 'float32' ); // $ExpectType Float32Array
	nans( 10, 'complex128' ); // $ExpectType Complex128Array
	nans( 10, 'complex64' ); // $ExpectType Complex64Array
	nans( 10, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	nans( '5' ); // $ExpectError
	nans( false ); // $ExpectError
	nans( true ); // $ExpectError
	nans( null ); // $ExpectError
	nans( undefined ); // $ExpectError
	nans( [] ); // $ExpectError
	nans( {} ); // $ExpectError
	nans( ( x: number ): number => x ); // $ExpectError

	nans( '5', 'float32' ); // $ExpectError
	nans( false, 'float32' ); // $ExpectError
	nans( true, 'float32' ); // $ExpectError
	nans( null, 'float32' ); // $ExpectError
	nans( undefined, 'float32' ); // $ExpectError
	nans( [], 'float32' ); // $ExpectError
	nans( {}, 'float32' ); // $ExpectError
	nans( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	nans( 10, '10' ); // $ExpectError
	nans( 10, 10 ); // $ExpectError
	nans( 10, false ); // $ExpectError
	nans( 10, true ); // $ExpectError
	nans( 10, null ); // $ExpectError
	nans( 10, [] ); // $ExpectError
	nans( 10, {} ); // $ExpectError
	nans( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nans( 10, 'float64', 1 ); // $ExpectError
}
