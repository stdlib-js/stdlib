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

	toCompact( x, 1, 1, true ); // $ExpectType Array2D<number>
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	toCompact( 'abc', 1, 1, true ); // $ExpectError
	toCompact( true, 1, 1, true ); // $ExpectError
	toCompact( false, 1, 1, true ); // $ExpectError
	toCompact( null, 1, 1, true ); // $ExpectError
	toCompact( [ '1', 1 ], 1, 1, true ); // $ExpectError
	toCompact( {}, 1, 1, true ); // $ExpectError
	toCompact( ( x: number ): number => x, 1, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( x, 'abc', 1, true ); // $ExpectError
	toCompact( x, true, 1, true ); // $ExpectError
	toCompact( x, false, 1, true ); // $ExpectError
	toCompact( x, null, 1, true ); // $ExpectError
	toCompact( x, [ '1', 1 ], 1, true ); // $ExpectError
	toCompact( x, {}, 1, true ); // $ExpectError
	toCompact( x, ( x: number ): number => x, 1, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( x, 1, 'abc', true ); // $ExpectError
	toCompact( x, 1, true, true ); // $ExpectError
	toCompact( x, 1, false, true ); // $ExpectError
	toCompact( x, 1, null, true ); // $ExpectError
	toCompact( x, 1, [ '1', 1 ], true ); // $ExpectError
	toCompact( x, 1, {}, true ); // $ExpectError
	toCompact( x, 1, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact( x, 1, 1, 'abc' ); // $ExpectError
	toCompact( x, 1, 1, 5 ); // $ExpectError
	toCompact( x, 1, 1, null ); // $ExpectError
	toCompact( x, 1, 1, [ '1', 1 ] ); // $ExpectError
	toCompact( x, 1, 1, {} ); // $ExpectError
	toCompact( x, 1, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 2, 1 ] ];

	toCompact(); // $ExpectError
	toCompact( x ); // $ExpectError
	toCompact( x, 1 ); // $ExpectError
	toCompact( x, 1, 1 ); // $ExpectError
	toCompact( x, 1, 1, true, {} ); // $ExpectError
}
