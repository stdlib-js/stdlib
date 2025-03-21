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

import groupIndicesBy = require( './index' );

/**
* Indicator function.
*
* @param v - value
* @returns result
*/
function indicator( v: string ): string {
	return v[ 0 ];
}


// TESTS //

// The function returns group results...
{
	const x = [ 'foo', 'bar' ];

	groupIndicesBy( x, indicator ); // $ExpectType IndicesResults<Key, number>
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	groupIndicesBy( 5, indicator ); // $ExpectError
	groupIndicesBy( true, indicator ); // $ExpectError
	groupIndicesBy( false, indicator ); // $ExpectError
	groupIndicesBy( null, indicator ); // $ExpectError
	groupIndicesBy( void 0, indicator ); // $ExpectError
	groupIndicesBy( {}, indicator ); // $ExpectError
	groupIndicesBy( ( x: number ): number => x, indicator ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid function...
{
	const x = [ 'foo', 'bar' ];

	groupIndicesBy( x, '5' ); // $ExpectError
	groupIndicesBy( x, 5 ); // $ExpectError
	groupIndicesBy( x, true ); // $ExpectError
	groupIndicesBy( x, false ); // $ExpectError
	groupIndicesBy( x, null ); // $ExpectError
	groupIndicesBy( x, void 0 ); // $ExpectError
	groupIndicesBy( x, {} ); // $ExpectError
	groupIndicesBy( x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 'foo', 'bar' ];

	groupIndicesBy(); // $ExpectError
	groupIndicesBy( x ); // $ExpectError
	groupIndicesBy( x, indicator, {}, {} ); // $ExpectError
}
