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

import Complex128 = require( '@stdlib/complex/float64' );
import full = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	const z = new Complex128( 1.0, 2.0 );

	full( 10, 1 ); // $ExpectType Float64Array
	full( 10, 1, 'float64' ); // $ExpectType Float64Array
	full( 10, 1, 'float32' ); // $ExpectType Float32Array
	full( 10, z, 'complex128' ); // $ExpectType Complex128Array
	full( 10, z, 'complex64' ); // $ExpectType Complex64Array
	full( 10, 1, 'int32' ); // $ExpectType Int32Array
	full( 10, 1, 'int16' ); // $ExpectType Int16Array
	full( 10, 1, 'int8' ); // $ExpectType Int8Array
	full( 10, 1, 'uint32' ); // $ExpectType Uint32Array
	full( 10, 1, 'uint16' ); // $ExpectType Uint16Array
	full( 10, 1, 'uint8' ); // $ExpectType Uint8Array
	full( 10, 1, 'uint8c' ); // $ExpectType Uint8ClampedArray
	full( 10, 1, 'generic' ); // $ExpectType number[]
	full( 10, 'abc', 'generic' ); // $ExpectType string[]
}

// The compiler throws an error if the function is not provided a number for the first argument...
{
	full( '5', 1 ); // $ExpectError
	full( false, 1 ); // $ExpectError
	full( true, 1 ); // $ExpectError
	full( null, 1 ); // $ExpectError
	full( undefined, 1 ); // $ExpectError
	full( [], 1 ); // $ExpectError
	full( {}, 1 ); // $ExpectError
	full( ( x: number ): number => x, 1 ); // $ExpectError

	full( '5', 1, 'float32' ); // $ExpectError
	full( false, 1, 'float32' ); // $ExpectError
	full( true, 1, 'float32' ); // $ExpectError
	full( null, 1, 'float32' ); // $ExpectError
	full( undefined, 1, 'float32' ); // $ExpectError
	full( [], 1, 'float32' ); // $ExpectError
	full( {}, 1, 'float32' ); // $ExpectError
	full( ( x: number ): number => x, 1, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is an unrecognized/unsupported data type...
{
	full( 10, 1, '10' ); // $ExpectError
	full( 10, 1, 10 ); // $ExpectError
	full( 10, 1, false ); // $ExpectError
	full( 10, 1, true ); // $ExpectError
	full( 10, 1, null ); // $ExpectError
	full( 10, 1, [] ); // $ExpectError
	full( 10, 1, {} ); // $ExpectError
	full( 10, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	full( 10, 1, 'float64', 1 ); // $ExpectError
}
