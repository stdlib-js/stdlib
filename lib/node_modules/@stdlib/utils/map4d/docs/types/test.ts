/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import map4d = require( './index' );

/**
* Callback function.
*
* @param v - argument
* @returns result
*/
function clbk( v: number ): number {
	return v;
}


// TESTS //

// The function returns a four-dimensional nested array...
{
	const arr = [
		[ [ [ 1, 2, 3 ] ] ],
		[ [ [ 4, 5, 6 ] ] ]
	];

	map4d( arr, clbk ); // $ExpectType number[][][][]
	map4d( arr, clbk, {} ); // $ExpectType number[][][][]
}

// The compiler throws an error if the function is provided a first argument other than a four-dimensional nested array...
{
	map4d( true, clbk ); // $ExpectError
	map4d( false, clbk ); // $ExpectError
	map4d( 5, clbk ); // $ExpectError
	map4d( {}, clbk ); // $ExpectError

	map4d( true, clbk, {} ); // $ExpectError
	map4d( false, clbk, {} ); // $ExpectError
	map4d( 5, clbk, {} ); // $ExpectError
	map4d( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function...
{
	const arr = [
		[ [ [ 1, 2, 3 ] ] ],
		[ [ [ 4, 5, 6 ] ] ]
	];

	map4d( arr, '5' ); // $ExpectError
	map4d( arr, true ); // $ExpectError
	map4d( arr, false ); // $ExpectError
	map4d( arr, 123 ); // $ExpectError
	map4d( arr, null ); // $ExpectError
	map4d( arr, {} ); // $ExpectError
	map4d( arr, [] ); // $ExpectError

	map4d( arr, '5', {} ); // $ExpectError
	map4d( arr, true, {} ); // $ExpectError
	map4d( arr, false, {} ); // $ExpectError
	map4d( arr, 123, {} ); // $ExpectError
	map4d( arr, null, {} ); // $ExpectError
	map4d( arr, {}, {} ); // $ExpectError
	map4d( arr, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr = [
		[ [ [ 1, 2, 3 ] ] ],
		[ [ [ 4, 5, 6 ] ] ]
	];

	map4d(); // $ExpectError
	map4d( arr ); // $ExpectError
	map4d( arr, clbk, {}, 4 ); // $ExpectError
}
