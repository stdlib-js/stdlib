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
import nanstdevyc = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanstdevyc( x ); // $ExpectType number
	nanstdevyc( new AccessorArray( x ) ); // $ExpectType number

	nanstdevyc( x, 1.0 ); // $ExpectType number
	nanstdevyc( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanstdevyc( 10 ); // $ExpectError
	nanstdevyc( '10' ); // $ExpectError
	nanstdevyc( true ); // $ExpectError
	nanstdevyc( false ); // $ExpectError
	nanstdevyc( null ); // $ExpectError
	nanstdevyc( undefined ); // $ExpectError
	nanstdevyc( {} ); // $ExpectError
	nanstdevyc( ( x: number ): number => x ); // $ExpectError

	nanstdevyc( 10, 1.0 ); // $ExpectError
	nanstdevyc( '10', 1.0 ); // $ExpectError
	nanstdevyc( true, 1.0 ); // $ExpectError
	nanstdevyc( false, 1.0 ); // $ExpectError
	nanstdevyc( null, 1.0 ); // $ExpectError
	nanstdevyc( undefined, 1.0 ); // $ExpectError
	nanstdevyc( {}, 1.0 ); // $ExpectError
	nanstdevyc( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanstdevyc( x, '10' ); // $ExpectError
	nanstdevyc( x, true ); // $ExpectError
	nanstdevyc( x, false ); // $ExpectError
	nanstdevyc( x, null ); // $ExpectError
	nanstdevyc( x, [] ); // $ExpectError
	nanstdevyc( x, {} ); // $ExpectError
	nanstdevyc( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanstdevyc(); // $ExpectError
	nanstdevyc( x, 1.0, {} ); // $ExpectError
}
