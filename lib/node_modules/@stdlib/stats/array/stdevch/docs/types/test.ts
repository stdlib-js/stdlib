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
import stdevch = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	stdevch( x ); // $ExpectType number
	stdevch( new AccessorArray( x ) ); // $ExpectType number

	stdevch( x, 1.0 ); // $ExpectType number
	stdevch( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	stdevch( 10 ); // $ExpectError
	stdevch( '10' ); // $ExpectError
	stdevch( true ); // $ExpectError
	stdevch( false ); // $ExpectError
	stdevch( null ); // $ExpectError
	stdevch( undefined ); // $ExpectError
	stdevch( {} ); // $ExpectError
	stdevch( ( x: number ): number => x ); // $ExpectError

	stdevch( 10, 1.0 ); // $ExpectError
	stdevch( '10', 1.0 ); // $ExpectError
	stdevch( true, 1.0 ); // $ExpectError
	stdevch( false, 1.0 ); // $ExpectError
	stdevch( null, 1.0 ); // $ExpectError
	stdevch( undefined, 1.0 ); // $ExpectError
	stdevch( {}, 1.0 ); // $ExpectError
	stdevch( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	stdevch( x, '10' ); // $ExpectError
	stdevch( x, true ); // $ExpectError
	stdevch( x, false ); // $ExpectError
	stdevch( x, null ); // $ExpectError
	stdevch( x, [] ); // $ExpectError
	stdevch( x, {} ); // $ExpectError
	stdevch( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	stdevch(); // $ExpectError
	stdevch( x, 1.0, {} ); // $ExpectError
}
