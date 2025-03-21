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

import at2d = require( './index' );


// TESTS //

// The function returns an array element...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	at2d( x, 0, 0 ); // $ExpectType number | void
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	at2d( 'abc', 0, 0 ); // $ExpectError
	at2d( 5, 0, 0 ); // $ExpectError
	at2d( true, 0, 0 ); // $ExpectError
	at2d( false, 0, 0 ); // $ExpectError
	at2d( null, 0, 0 ); // $ExpectError
	at2d( void 0, 0, 0 ); // $ExpectError
	at2d( {}, 0, 0 ); // $ExpectError
	at2d( ( x: number ): number => x, 0, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	at2d( x, 'abc', 0 ); // $ExpectError
	at2d( x, true, 0 ); // $ExpectError
	at2d( x, false, 0 ); // $ExpectError
	at2d( x, null, 0 ); // $ExpectError
	at2d( x, void 0, 0 ); // $ExpectError
	at2d( x, [ '1' ], 0 ); // $ExpectError
	at2d( x, {}, 0 ); // $ExpectError
	at2d( x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	at2d( x, 0, 'abc' ); // $ExpectError
	at2d( x, 0, true ); // $ExpectError
	at2d( x, 0, false ); // $ExpectError
	at2d( x, 0, null ); // $ExpectError
	at2d( x, 0, void 0 ); // $ExpectError
	at2d( x, 0, [ '1' ] ); // $ExpectError
	at2d( x, 0, {} ); // $ExpectError
	at2d( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	at2d(); // $ExpectError
	at2d( x ); // $ExpectError
	at2d( x, 0 ); // $ExpectError
	at2d( x, 0, 0, 0 ); // $ExpectError
}
