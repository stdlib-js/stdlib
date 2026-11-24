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
import variance = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	variance( x ); // $ExpectType number
	variance( new AccessorArray( x ) ); // $ExpectType number

	variance( x, 1.0 ); // $ExpectType number
	variance( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	variance( 10 ); // $ExpectError
	variance( '10' ); // $ExpectError
	variance( true ); // $ExpectError
	variance( false ); // $ExpectError
	variance( null ); // $ExpectError
	variance( undefined ); // $ExpectError
	variance( {} ); // $ExpectError
	variance( ( x: number ): number => x ); // $ExpectError

	variance( 10, 1.0 ); // $ExpectError
	variance( '10', 1.0 ); // $ExpectError
	variance( true, 1.0 ); // $ExpectError
	variance( false, 1.0 ); // $ExpectError
	variance( null, 1.0 ); // $ExpectError
	variance( undefined, 1.0 ); // $ExpectError
	variance( {}, 1.0 ); // $ExpectError
	variance( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	variance( x, '10' ); // $ExpectError
	variance( x, true ); // $ExpectError
	variance( x, false ); // $ExpectError
	variance( x, null ); // $ExpectError
	variance( x, [] ); // $ExpectError
	variance( x, {} ); // $ExpectError
	variance( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	variance(); // $ExpectError
	variance( x, 1.0, {} ); // $ExpectError
}
