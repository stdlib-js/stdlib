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
import nanstdevtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanstdevtk( x ); // $ExpectType number
	nanstdevtk( new AccessorArray( x ) ); // $ExpectType number

	nanstdevtk( x, 1.0 ); // $ExpectType number
	nanstdevtk( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanstdevtk( 10 ); // $ExpectError
	nanstdevtk( '10' ); // $ExpectError
	nanstdevtk( true ); // $ExpectError
	nanstdevtk( false ); // $ExpectError
	nanstdevtk( null ); // $ExpectError
	nanstdevtk( undefined ); // $ExpectError
	nanstdevtk( {} ); // $ExpectError
	nanstdevtk( ( x: number ): number => x ); // $ExpectError

	nanstdevtk( 10, 1.0 ); // $ExpectError
	nanstdevtk( '10', 1.0 ); // $ExpectError
	nanstdevtk( true, 1.0 ); // $ExpectError
	nanstdevtk( false, 1.0 ); // $ExpectError
	nanstdevtk( null, 1.0 ); // $ExpectError
	nanstdevtk( undefined, 1.0 ); // $ExpectError
	nanstdevtk( {}, 1.0 ); // $ExpectError
	nanstdevtk( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanstdevtk( x, '10' ); // $ExpectError
	nanstdevtk( x, true ); // $ExpectError
	nanstdevtk( x, false ); // $ExpectError
	nanstdevtk( x, null ); // $ExpectError
	nanstdevtk( x, [] ); // $ExpectError
	nanstdevtk( x, {} ); // $ExpectError
	nanstdevtk( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanstdevtk(); // $ExpectError
	nanstdevtk( x, 1.0, {} ); // $ExpectError
}
