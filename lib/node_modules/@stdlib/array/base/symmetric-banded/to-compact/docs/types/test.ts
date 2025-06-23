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

import toCompact = require( './index' );


// TESTS //

// The function returns an array...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( 'upper', x, 1, true ); // $ExpectType Array2D<number>
}

// The compiler throws an error if the function is provided an invalid first argument...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( 'abc', x, 1, true ); // $ExpectError
	toCompact( true, x, 1, true ); // $ExpectError
	toCompact( false, x, 1, true ); // $ExpectError
	toCompact( null, x, 1, true ); // $ExpectError
	toCompact( [], x, 1, true ); // $ExpectError
	toCompact( {}, x, 1, true ); // $ExpectError
	toCompact( ( x: number ): number => x, x, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a nested array...
{
	toCompact( 'upper', 'abc', 1, true ); // $ExpectError
	toCompact( 'upper', true, 1, true ); // $ExpectError
	toCompact( 'upper', false, 1, true ); // $ExpectError
	toCompact( 'upper', null, 1, true ); // $ExpectError
	toCompact( 'upper', [ '1', 1 ], 1, true ); // $ExpectError
	toCompact( 'upper', {}, 1, true ); // $ExpectError
	toCompact( 'upper', ( x: number ): number => x, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( 'upper', x, 'abc', true ); // $ExpectError
	toCompact( 'upper', x, true, true ); // $ExpectError
	toCompact( 'upper', x, false, true ); // $ExpectError
	toCompact( 'upper', x, null, true ); // $ExpectError
	toCompact( 'upper', x, [ '1', 1 ], true ); // $ExpectError
	toCompact( 'upper', x, {}, true ); // $ExpectError
	toCompact( 'upper', x, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( 'upper', x, 1, 'abc' ); // $ExpectError
	toCompact( 'upper', x, 1, 5 ); // $ExpectError
	toCompact( 'upper', x, 1, null ); // $ExpectError
	toCompact( 'upper', x, 1, [ '1', 1 ] ); // $ExpectError
	toCompact( 'upper', x, 1, {} ); // $ExpectError
	toCompact( 'upper', x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact(); // $ExpectError
	toCompact( 'upper' ); // $ExpectError
	toCompact( 'upper', x ); // $ExpectError
	toCompact( 'upper', x, 1 ); // $ExpectError
	toCompact( 'upper', x, 1, true, {} ); // $ExpectError
}
