/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import convert = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'float64' ); // $ExpectType Float64Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'float32' ); // $ExpectType Float32Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'int32' ); // $ExpectType Int32Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'int16' ); // $ExpectType Int16Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'int8' ); // $ExpectType Int8Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'uint32' ); // $ExpectType Uint32Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'uint16' ); // $ExpectType Uint16Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'uint8' ); // $ExpectType Uint8Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'uint8c' ); // $ExpectType Uint8ClampedArray
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'complex128' ); // $ExpectType Complex128Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'complex64' ); // $ExpectType Complex64Array
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'bool' ); // $ExpectType BooleanArray
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'generic' ); // $ExpectType number[]
	convert( [ 'a', 'b', 'c', 'd' ], 'generic' ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	convert( 123, 'float64' );  // $ExpectError
	convert( true, 'float64' ); // $ExpectError
	convert( false, 'float64' ); // $ExpectError
	convert( {}, 'float64' ); // $ExpectError
	convert( null, 'float64' ); // $ExpectError
	convert( undefined, 'float64' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a known data type...
{
	convert( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], 123 ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], {} ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], true ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], false ); // $ExpectError
	convert( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	convert(); // $ExpectError
	convert( [ 1.0, 2.0, 3.0, 4.0 ] ); // $ExpectError
	convert( [ 1.0, 2.0, 3.0, 4.0 ], 'float64', 2 ); // $ExpectError
}
