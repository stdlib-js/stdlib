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

import Complex128Array = require( '@stdlib/array/complex128' );
import Complex64Array = require( '@stdlib/array/complex64' );
import BooleanArray = require( '@stdlib/array/bool' );
import array2dtype = require( './index' );


// TESTS //

// The function returns a data type..
{
	array2dtype( new Float64Array( 10 ) ); // $ExpectType "float64"
	array2dtype( new Float32Array( 10 ) ); // $ExpectType "float32"
	array2dtype( new Complex128Array( 10 ) ); // $ExpectType "complex128"
	array2dtype( new Complex64Array( 10 ) ); // $ExpectType "complex64"
	array2dtype( new Int32Array( 10 ) ); // $ExpectType "int32"
	array2dtype( new Int16Array( 10 ) ); // $ExpectType "int16"
	array2dtype( new Int8Array( 10 ) ); // $ExpectType "int8"
	array2dtype( new Uint32Array( 10 ) ); // $ExpectType "uint32"
	array2dtype( new Uint16Array( 10 ) ); // $ExpectType "uint16"
	array2dtype( new Uint8Array( 10 ) ); // $ExpectType "uint8"
	array2dtype( new Uint8ClampedArray( 10 ) ); // $ExpectType "uint8"
	array2dtype( new BooleanArray( 10 ) ); // $ExpectType "uint8"
	array2dtype( [] ); // $ExpectType "float64"
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	array2dtype(); // $ExpectError
	array2dtype( [ 1, 2, 3 ], 3 ); // $ExpectError
}
