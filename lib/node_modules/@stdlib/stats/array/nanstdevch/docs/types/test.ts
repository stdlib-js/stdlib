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
import nanstdevch = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanstdevch( x ); // $ExpectType number
	nanstdevch( new AccessorArray( x ) ); // $ExpectType number

	nanstdevch( x, 1.0 ); // $ExpectType number
	nanstdevch( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanstdevch( 10 ); // $ExpectError
	nanstdevch( '10' ); // $ExpectError
	nanstdevch( true ); // $ExpectError
	nanstdevch( false ); // $ExpectError
	nanstdevch( null ); // $ExpectError
	nanstdevch( undefined ); // $ExpectError
	nanstdevch( {} ); // $ExpectError
	nanstdevch( ( x: number ): number => x ); // $ExpectError

	nanstdevch( 10, 1.0 ); // $ExpectError
	nanstdevch( '10', 1.0 ); // $ExpectError
	nanstdevch( true, 1.0 ); // $ExpectError
	nanstdevch( false, 1.0 ); // $ExpectError
	nanstdevch( null, 1.0 ); // $ExpectError
	nanstdevch( undefined, 1.0 ); // $ExpectError
	nanstdevch( {}, 1.0 ); // $ExpectError
	nanstdevch( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanstdevch( x, '10' ); // $ExpectError
	nanstdevch( x, true ); // $ExpectError
	nanstdevch( x, false ); // $ExpectError
	nanstdevch( x, null ); // $ExpectError
	nanstdevch( x, [] ); // $ExpectError
	nanstdevch( x, {} ); // $ExpectError
	nanstdevch( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanstdevch(); // $ExpectError
	nanstdevch( x, 1.0, {} ); // $ExpectError
}
