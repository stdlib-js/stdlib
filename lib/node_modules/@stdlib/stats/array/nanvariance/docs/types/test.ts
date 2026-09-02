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
import nanvariance = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvariance( x ); // $ExpectType number
	nanvariance( new AccessorArray( x ) ); // $ExpectType number

	nanvariance( x, 1.0 ); // $ExpectType number
	nanvariance( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanvariance( 10 ); // $ExpectError
	nanvariance( '10' ); // $ExpectError
	nanvariance( true ); // $ExpectError
	nanvariance( false ); // $ExpectError
	nanvariance( null ); // $ExpectError
	nanvariance( undefined ); // $ExpectError
	nanvariance( {} ); // $ExpectError
	nanvariance( ( x: number ): number => x ); // $ExpectError

	nanvariance( 10, 1.0 ); // $ExpectError
	nanvariance( '10', 1.0 ); // $ExpectError
	nanvariance( true, 1.0 ); // $ExpectError
	nanvariance( false, 1.0 ); // $ExpectError
	nanvariance( null, 1.0 ); // $ExpectError
	nanvariance( undefined, 1.0 ); // $ExpectError
	nanvariance( {}, 1.0 ); // $ExpectError
	nanvariance( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance( x, '10' ); // $ExpectError
	nanvariance( x, true ); // $ExpectError
	nanvariance( x, false ); // $ExpectError
	nanvariance( x, null ); // $ExpectError
	nanvariance( x, [] ); // $ExpectError
	nanvariance( x, {} ); // $ExpectError
	nanvariance( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariance(); // $ExpectError
	nanvariance( x, 1.0, {} ); // $ExpectError
}
