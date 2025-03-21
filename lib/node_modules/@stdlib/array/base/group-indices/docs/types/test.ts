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

import groupIndices = require( './index' );


// TESTS //

// The function returns group results...
{
	const x = [ 1, 2, 3 ];
	const g = [ 0, 0, 0 ];

	groupIndices( x, g ); // $ExpectType IndicesResults<Key, number>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	const g = [ 0, 0, 0 ];

	groupIndices( 5, g ); // $ExpectError
	groupIndices( true, g ); // $ExpectError
	groupIndices( false, g ); // $ExpectError
	groupIndices( null, g ); // $ExpectError
	groupIndices( void 0, g ); // $ExpectError
	groupIndices( {}, g ); // $ExpectError
	groupIndices( ( x: number ): number => x, g ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array...
{
	const x = [ 1, 2, 3 ];

	groupIndices( x, 5 ); // $ExpectError
	groupIndices( x, true ); // $ExpectError
	groupIndices( x, false ); // $ExpectError
	groupIndices( x, null ); // $ExpectError
	groupIndices( x, void 0 ); // $ExpectError
	groupIndices( x, {} ); // $ExpectError
	groupIndices( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];
	const g = [ 0, 0, 0 ];

	groupIndices(); // $ExpectError
	groupIndices( x ); // $ExpectError
	groupIndices( x, g, {} ); // $ExpectError
}
