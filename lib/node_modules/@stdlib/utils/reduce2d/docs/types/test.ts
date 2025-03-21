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

import reduce2d = require( './index' );

/**
* Callback function.
*
* @param acc - accumulated value
* @param v - array element
* @returns result
*/
function clbk( acc: number, v: number ): number {
	return acc + v;
}


// TESTS //

// The function returns an array...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];

	reduce2d( arr, [ 0, 0 ], clbk ); // $ExpectType number[]
	reduce2d( arr, [ 0, 0 ], clbk, {} ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument other than an array of arrays...
{
	reduce2d( true, [ 0, 0 ], clbk ); // $ExpectError
	reduce2d( false, [ 0, 0 ], clbk ); // $ExpectError
	reduce2d( 5, [ 0, 0 ], clbk ); // $ExpectError
	reduce2d( {}, [ 0, 0 ], clbk ); // $ExpectError

	reduce2d( true, [ 0, 0 ], clbk, {} ); // $ExpectError
	reduce2d( false, [ 0, 0 ], clbk, {} ); // $ExpectError
	reduce2d( 5, [ 0, 0 ], clbk, {} ); // $ExpectError
	reduce2d( {}, [ 0, 0 ], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than an array...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];

	reduce2d( arr, true, clbk ); // $ExpectError
	reduce2d( arr, false, clbk ); // $ExpectError
	reduce2d( arr, 5, clbk ); // $ExpectError
	reduce2d( arr, {}, clbk ); // $ExpectError

	reduce2d( arr, true, clbk, {} ); // $ExpectError
	reduce2d( arr, false, clbk, {} ); // $ExpectError
	reduce2d( arr, 5, clbk, {} ); // $ExpectError
	reduce2d( arr, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument other than a function...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];
	const initial = [ 0, 0 ];

	reduce2d( arr, initial, '5' ); // $ExpectError
	reduce2d( arr, initial, true ); // $ExpectError
	reduce2d( arr, initial, false ); // $ExpectError
	reduce2d( arr, initial, 123 ); // $ExpectError
	reduce2d( arr, initial, null ); // $ExpectError
	reduce2d( arr, initial, {} ); // $ExpectError
	reduce2d( arr, initial, [] ); // $ExpectError

	reduce2d( arr, initial, '5', {} ); // $ExpectError
	reduce2d( arr, initial, true, {} ); // $ExpectError
	reduce2d( arr, initial, false, {} ); // $ExpectError
	reduce2d( arr, initial, 123, {} ); // $ExpectError
	reduce2d( arr, initial, null, {} ); // $ExpectError
	reduce2d( arr, initial, {}, {} ); // $ExpectError
	reduce2d( arr, initial, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];
	const initial = [ 0, 0 ];

	reduce2d(); // $ExpectError
	reduce2d( arr ); // $ExpectError
	reduce2d( arr, initial ); // $ExpectError
	reduce2d( arr, initial, clbk, {}, 4 ); // $ExpectError
}
