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

import atnd = require( './index' );


// TESTS //

// The function returns an array element...
{
	const x1 = [ 1, 2 ];
	atnd( x1, 0 ); // $ExpectType number | void

	const x2 = [ [ 1, 2 ], [ 3, 4 ] ];
	atnd( x2, 0, 0 ); // $ExpectType number | void

	const x3 = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	atnd( x3, 0, 0, 0 ); // $ExpectType number | void

	const x4 = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	atnd( x4, 0, 0, 0, 0 ); // $ExpectType number | void

	const x5 = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	atnd( x5, 0, 0, 0, 0, 0 ); // $ExpectType number | void
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	atnd( 5, 0 ); // $ExpectError
	atnd( true, 0 ); // $ExpectError
	atnd( false, 0 ); // $ExpectError
	atnd( null, 0 ); // $ExpectError
	atnd( void 0, 0 ); // $ExpectError
	atnd( {}, 0 ); // $ExpectError
	atnd( ( x: number ): number => x, 0 ); // $ExpectError

	atnd( 5, 0, 0 ); // $ExpectError
	atnd( true, 0, 0 ); // $ExpectError
	atnd( false, 0, 0 ); // $ExpectError
	atnd( null, 0, 0 ); // $ExpectError
	atnd( void 0, 0, 0 ); // $ExpectError
	atnd( {}, 0, 0 ); // $ExpectError
	atnd( ( x: number ): number => x, 0, 0 ); // $ExpectError

	atnd( 5, 0, 0, 0 ); // $ExpectError
	atnd( true, 0, 0, 0 ); // $ExpectError
	atnd( false, 0, 0, 0 ); // $ExpectError
	atnd( null, 0, 0, 0 ); // $ExpectError
	atnd( void 0, 0, 0, 0 ); // $ExpectError
	atnd( {}, 0, 0, 0 ); // $ExpectError
	atnd( ( x: number ): number => x, 0, 0, 0 ); // $ExpectError

	atnd( 5, 0, 0, 0, 0 ); // $ExpectError
	atnd( true, 0, 0, 0, 0 ); // $ExpectError
	atnd( false, 0, 0, 0, 0 ); // $ExpectError
	atnd( null, 0, 0, 0, 0 ); // $ExpectError
	atnd( void 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( {}, 0, 0, 0, 0 ); // $ExpectError
	atnd( ( x: number ): number => x, 0, 0, 0, 0 ); // $ExpectError

	atnd( 'abc', 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( 5, 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( true, 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( false, 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( null, 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( void 0, 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( {}, 0, 0, 0, 0, 0 ); // $ExpectError
	atnd( ( x: number ): number => x, 0, 0, 0, 0, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an index argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	atnd( x, 'abc', 0 ); // $ExpectError
	atnd( x, true, 0 ); // $ExpectError
	atnd( x, false, 0 ); // $ExpectError
	atnd( x, null, 0 ); // $ExpectError
	atnd( x, void 0, 0 ); // $ExpectError
	atnd( x, [ '1' ], 0 ); // $ExpectError
	atnd( x, {}, 0 ); // $ExpectError
	atnd( x, ( x: number ): number => x, 0 ); // $ExpectError

	atnd( x, 0, 'abc' ); // $ExpectError
	atnd( x, 0, true ); // $ExpectError
	atnd( x, 0, false ); // $ExpectError
	atnd( x, 0, null ); // $ExpectError
	atnd( x, 0, void 0 ); // $ExpectError
	atnd( x, 0, [ '1' ] ); // $ExpectError
	atnd( x, 0, {} ); // $ExpectError
	atnd( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	atnd(); // $ExpectError
	atnd( x ); // $ExpectError
}
