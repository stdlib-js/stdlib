/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import flatten2d = require( './index' );


// TESTS //

// The function returns an array...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d( x, [ 2, 2 ], false ); // $ExpectType number[]
	flatten2d( x, [ 2, 2 ], true ); // $ExpectType number[]

	flatten2d<number>( x, [ 2, 2 ], false ); // $ExpectType number[]
	flatten2d<number>( x, [ 2, 2 ], true ); // $ExpectType number[]

	flatten2d<string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false ); // $ExpectType string[]
	flatten2d<string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	flatten2d( 1, [ 2, 2 ], false ); // $ExpectError
	flatten2d( true, [ 2, 2 ], false ); // $ExpectError
	flatten2d( false, [ 2, 2 ], false ); // $ExpectError
	flatten2d( null, [ 2, 2 ], false ); // $ExpectError
	flatten2d( void 0, [ 2, 2 ], false ); // $ExpectError
	flatten2d( {}, [ 2, 2 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d( x, '', false ); // $ExpectError
	flatten2d( x, 1, false ); // $ExpectError
	flatten2d( x, true, false ); // $ExpectError
	flatten2d( x, false, false ); // $ExpectError
	flatten2d( x, null, false ); // $ExpectError
	flatten2d( x, void 0, false ); // $ExpectError
	flatten2d( x, {}, false ); // $ExpectError
	flatten2d( x, [ 1, '2', 3 ], false ); // $ExpectError
	flatten2d( x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d( x, [ 2, 2 ], '' ); // $ExpectError
	flatten2d( x, [ 2, 2 ], 1 ); // $ExpectError
	flatten2d( x, [ 2, 2 ], null ); // $ExpectError
	flatten2d( x, [ 2, 2 ], void 0 ); // $ExpectError
	flatten2d( x, [ 2, 2 ], {} ); // $ExpectError
	flatten2d( x, [ 2, 2 ], [] ); // $ExpectError
	flatten2d( x, [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d(); // $ExpectError
	flatten2d( x ); // $ExpectError
	flatten2d( x, [ 2, 2 ] ); // $ExpectError
	flatten2d( x, [ 2, 2 ], false, {} ); // $ExpectError
}
