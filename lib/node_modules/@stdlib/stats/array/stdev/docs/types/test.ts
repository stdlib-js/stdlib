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
import stdev = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	stdev( x ); // $ExpectType number
	stdev( new AccessorArray( x ) ); // $ExpectType number

	stdev( x, 1.0 ); // $ExpectType number
	stdev( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	stdev( 10 ); // $ExpectError
	stdev( '10' ); // $ExpectError
	stdev( true ); // $ExpectError
	stdev( false ); // $ExpectError
	stdev( null ); // $ExpectError
	stdev( undefined ); // $ExpectError
	stdev( {} ); // $ExpectError
	stdev( ( x: number ): number => x ); // $ExpectError

	stdev( 10, 1.0 ); // $ExpectError
	stdev( '10', 1.0 ); // $ExpectError
	stdev( true, 1.0 ); // $ExpectError
	stdev( false, 1.0 ); // $ExpectError
	stdev( null, 1.0 ); // $ExpectError
	stdev( undefined, 1.0 ); // $ExpectError
	stdev( {}, 1.0 ); // $ExpectError
	stdev( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	stdev( x, '10' ); // $ExpectError
	stdev( x, true ); // $ExpectError
	stdev( x, false ); // $ExpectError
	stdev( x, null ); // $ExpectError
	stdev( x, [] ); // $ExpectError
	stdev( x, {} ); // $ExpectError
	stdev( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	stdev(); // $ExpectError
	stdev( x, 1.0, {} ); // $ExpectError
}
