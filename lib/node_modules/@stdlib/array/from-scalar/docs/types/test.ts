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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import array2scalar = require( './index' );


// TESTS //

// The function returns an array...
{
	array2scalar( 1.0 ); // $ExpectType Float64Array
	array2scalar( new Complex128( 3.0, 4.0 ) ); // $ExpectType Complex128Array
	array2scalar( new Complex64( 3.0, 4.0 ) ); // $ExpectType Complex64Array
	array2scalar( { 're': 3.0, 'im': 4.0 } ); // $ExpectType Complex128Array
	array2scalar( true ); // $ExpectType BooleanArray
	array2scalar( null ); // $ExpectType null[]

	array2scalar( 1.0, 'float64' ); // $ExpectType Float64Array
	array2scalar( 1.0, 'float32' ); // $ExpectType Float32Array
	array2scalar( 1.0, 'complex128' ); // $ExpectType Complex128Array
	array2scalar( 1.0, 'complex64' ); // $ExpectType Complex64Array
	array2scalar( true, 'bool' ); // $ExpectType BooleanArray
	array2scalar( 1.0, 'int32' ); // $ExpectType Int32Array
	array2scalar( 1.0, 'int16' ); // $ExpectType Int16Array
	array2scalar( 1.0, 'int8' ); // $ExpectType Int8Array
	array2scalar( 1.0, 'uint32' ); // $ExpectType Uint32Array
	array2scalar( 1.0, 'uint16' ); // $ExpectType Uint16Array
	array2scalar( 1.0, 'uint8' ); // $ExpectType Uint8Array
	array2scalar( 1.0, 'uint8c' ); // $ExpectType Uint8ClampedArray
	array2scalar( 1.0, 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a second argument which is not a recognized/supported data type...
{
	array2scalar( 1.0, '10' ); // $ExpectError
	array2scalar( 1.0, 5 ); // $ExpectError
	array2scalar( 1.0, false ); // $ExpectError
	array2scalar( 1.0, true ); // $ExpectError
	array2scalar( 1.0, null ); // $ExpectError
	array2scalar( 1.0, [] ); // $ExpectError
	array2scalar( 1.0, {} ); // $ExpectError
	array2scalar( 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	array2scalar(); // $ExpectError
	array2scalar( 1.0, 'float64', 1 ); // $ExpectError
}
