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

import countBy = require( './index' );

const indicator = ( v: string ): string => v[ 0 ];


// TESTS //

// The function returns an object...
{
	countBy( [ 'beep', 'boop', 'foo', 'bar' ], indicator ); // $ExpectType any
	countBy( [], indicator ); // $ExpectType any
	const opts = {
		'thisArg': {}
	};
	countBy( [ 'beep', 'boop', 'foo', 'bar' ], opts, indicator ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	countBy( true, indicator ); // $ExpectError
	countBy( false, indicator ); // $ExpectError
	countBy( 5, indicator ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	countBy( arr, false ); // $ExpectError
	countBy( arr, true ); // $ExpectError
	countBy( arr, 32 ); // $ExpectError
	countBy( arr, 'abc' ); // $ExpectError
	countBy( arr, [] ); // $ExpectError
	countBy( arr, {} ); // $ExpectError

	countBy( arr, {}, false ); // $ExpectError
	countBy( arr, {}, true ); // $ExpectError
	countBy( arr, {}, 32 ); // $ExpectError
	countBy( arr, {}, 'abc' ); // $ExpectError
	countBy( arr, {}, [] ); // $ExpectError
	countBy( arr, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	countBy( arr, null, indicator ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	countBy(); // $ExpectError
	countBy( arr ); // $ExpectError
	countBy( arr, {}, indicator, 16 ); // $ExpectError
}
