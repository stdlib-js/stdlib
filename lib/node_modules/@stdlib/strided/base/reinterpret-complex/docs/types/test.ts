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
import reinterpret = require( './index' );


// TESTS //

// The function returns a real-valued floating-point array...
{
	reinterpret( new Complex128Array( 10 ), 0 ); // $ExpectType Float64Array
	reinterpret( new Complex64Array( 10 ), 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if not provided a first argument which is a complex-valued floating-point array...
{
	reinterpret( '10', 0 ); // $ExpectError
	reinterpret( 10, 0 ); // $ExpectError
	reinterpret( true, 0 ); // $ExpectError
	reinterpret( false, 0 ); // $ExpectError
	reinterpret( null, 0 ); // $ExpectError
	reinterpret( undefined, 0 ); // $ExpectError
	reinterpret( [], 0 ); // $ExpectError
	reinterpret( {}, 0 ); // $ExpectError
	reinterpret( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a number...
{
	const x = new Complex128Array( 10 );

	reinterpret( x, '10' ); // $ExpectError
	reinterpret( x, true ); // $ExpectError
	reinterpret( x, false ); // $ExpectError
	reinterpret( x, null ); // $ExpectError
	reinterpret( x, undefined ); // $ExpectError
	reinterpret( x, [] ); // $ExpectError
	reinterpret( x, {} ); // $ExpectError
	reinterpret( x, ( x: number ): number => x ); // $ExpectError

	const y = new Complex64Array( 10 );

	reinterpret( y, '10' ); // $ExpectError
	reinterpret( y, true ); // $ExpectError
	reinterpret( y, false ); // $ExpectError
	reinterpret( y, null ); // $ExpectError
	reinterpret( y, undefined ); // $ExpectError
	reinterpret( y, [] ); // $ExpectError
	reinterpret( y, {} ); // $ExpectError
	reinterpret( y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );

	reinterpret(); // $ExpectError
	reinterpret( x ); // $ExpectError
	reinterpret( x, 1, {} ); // $ExpectError

	const y = new Complex128Array( 10 );

	reinterpret(); // $ExpectError
	reinterpret( y ); // $ExpectError
	reinterpret( y, 1, {} ); // $ExpectError
}
