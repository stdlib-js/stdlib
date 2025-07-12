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

import removeAt = require( './index' );


// TESTS //

// The function returns an array...
{
	removeAt( [ 1, 2, 3 ], -1 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	removeAt( '5', -1 ); // $ExpectError
	removeAt( 5, -1 ); // $ExpectError
	removeAt( true, -1 ); // $ExpectError
	removeAt( false, -1 ); // $ExpectError
	removeAt( null, -1 ); // $ExpectError
	removeAt( void 0, -1 ); // $ExpectError
	removeAt( {}, -1 ); // $ExpectError
	removeAt( ( x: number ): number => x, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	removeAt( x, '5' ); // $ExpectError
	removeAt( x, true ); // $ExpectError
	removeAt( x, false ); // $ExpectError
	removeAt( x, null ); // $ExpectError
	removeAt( x, void 0 ); // $ExpectError
	removeAt( x, {} ); // $ExpectError
	removeAt( x, [] ); // $ExpectError
	removeAt( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	removeAt(); // $ExpectError
	removeAt( x ); // $ExpectError
	removeAt( x, -1, {} ); // $ExpectError
}
