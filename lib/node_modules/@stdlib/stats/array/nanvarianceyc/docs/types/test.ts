/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import nanvarianceyc = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( x ); // $ExpectType number
	nanvarianceyc( new AccessorArray( x ) ); // $ExpectType number

	nanvarianceyc( x, 1.0 ); // $ExpectType number
	nanvarianceyc( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanvarianceyc( 10 ); // $ExpectError
	nanvarianceyc( '10' ); // $ExpectError
	nanvarianceyc( true ); // $ExpectError
	nanvarianceyc( false ); // $ExpectError
	nanvarianceyc( null ); // $ExpectError
	nanvarianceyc( undefined ); // $ExpectError
	nanvarianceyc( {} ); // $ExpectError
	nanvarianceyc( ( x: number ): number => x ); // $ExpectError

	nanvarianceyc( 10, 1.0 ); // $ExpectError
	nanvarianceyc( '10', 1.0 ); // $ExpectError
	nanvarianceyc( true, 1.0 ); // $ExpectError
	nanvarianceyc( false, 1.0 ); // $ExpectError
	nanvarianceyc( null, 1.0 ); // $ExpectError
	nanvarianceyc( undefined, 1.0 ); // $ExpectError
	nanvarianceyc( {}, 1.0 ); // $ExpectError
	nanvarianceyc( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvarianceyc( x, '10' ); // $ExpectError
	nanvarianceyc( x, true ); // $ExpectError
	nanvarianceyc( x, false ); // $ExpectError
	nanvarianceyc( x, null ); // $ExpectError
	nanvarianceyc( x, [] ); // $ExpectError
	nanvarianceyc( x, {} ); // $ExpectError
	nanvarianceyc( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvarianceyc(); // $ExpectError
	nanvarianceyc( x, 1.0, {} ); // $ExpectError
}
