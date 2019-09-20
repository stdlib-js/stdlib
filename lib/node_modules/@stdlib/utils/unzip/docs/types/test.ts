/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import unzip = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	const arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
	unzip( arr, [ 0, 2 ] ); // $ExpectType any[][]
	unzip( arr, [ 0, 2 ] ); // $ExpectType any[][]
}

// The compiler throws an error if the function is provided a first argument which is not an array of arrays...
{
	unzip( true ); // $ExpectError
	unzip( false ); // $ExpectError
	unzip( 'abc' ); // $ExpectError
	unzip( 3.12 ); // $ExpectError
	unzip( ( x: number ): number => x ); // $ExpectError
	unzip( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
	unzip( arr, true ); // $ExpectError
	unzip( arr, false ); // $ExpectError
	unzip( arr, 'abc' ); // $ExpectError
	unzip( arr, 3.12 ); // $ExpectError
	unzip( arr, {} ); // $ExpectError
	unzip( arr, [ 'a', 'b', 'c' ] ); // $ExpectError
	unzip( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
	unzip(); // $ExpectError
	unzip( arr, [ 1 ], 1 ); // $ExpectError
}
