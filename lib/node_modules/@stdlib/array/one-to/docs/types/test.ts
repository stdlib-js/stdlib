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

import oneTo = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	oneTo( 10 ); // $ExpectType Float64Array
	oneTo( 10, 'float64' ); // $ExpectType Float64Array
	oneTo( 10, 'float32' ); // $ExpectType Float32Array
	oneTo( 10, 'complex128' ); // $ExpectType Complex128Array
	oneTo( 10, 'complex64' ); // $ExpectType Complex64Array
	oneTo( 10, 'int32' ); // $ExpectType Int32Array
	oneTo( 10, 'int16' ); // $ExpectType Int16Array
	oneTo( 10, 'int8' ); // $ExpectType Int8Array
	oneTo( 10, 'uint32' ); // $ExpectType Uint32Array
	oneTo( 10, 'uint16' ); // $ExpectType Uint16Array
	oneTo( 10, 'uint8' ); // $ExpectType Uint8Array
	oneTo( 10, 'uint8c' ); // $ExpectType Uint8ClampedArray
	oneTo( 10, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	oneTo( '5' ); // $ExpectError
	oneTo( false ); // $ExpectError
	oneTo( true ); // $ExpectError
	oneTo( null ); // $ExpectError
	oneTo( undefined ); // $ExpectError
	oneTo( [] ); // $ExpectError
	oneTo( {} ); // $ExpectError
	oneTo( ( x: number ): number => x ); // $ExpectError

	oneTo( '5', 'float32' ); // $ExpectError
	oneTo( false, 'float32' ); // $ExpectError
	oneTo( true, 'float32' ); // $ExpectError
	oneTo( null, 'float32' ); // $ExpectError
	oneTo( undefined, 'float32' ); // $ExpectError
	oneTo( [], 'float32' ); // $ExpectError
	oneTo( {}, 'float32' ); // $ExpectError
	oneTo( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	oneTo( 10, '10' ); // $ExpectError
	oneTo( 10, 10 ); // $ExpectError
	oneTo( 10, false ); // $ExpectError
	oneTo( 10, true ); // $ExpectError
	oneTo( 10, null ); // $ExpectError
	oneTo( 10, [] ); // $ExpectError
	oneTo( 10, {} ); // $ExpectError
	oneTo( 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	oneTo( 10, 'float64', 1 ); // $ExpectError
}
