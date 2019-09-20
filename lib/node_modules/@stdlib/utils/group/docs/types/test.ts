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

import group = require( './index' );


// TESTS //

// The function returns an object...
{
	group( [ 'beep', 'boop', 'foo', 'bar' ], [ 'b', 'b', 'f', 'b' ] ); // $ExpectType any
	const opts = {
		'returns': 'indices' as 'indices'
	};
	group( [ 'beep', 'boop', 'foo', 'bar' ], opts, [ 'b', 'b', 'f', 'b' ] ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	group( true, [ 'b', 'b', 'f', 'b' ] ); // $ExpectError
	group( false, [ 'b', 'b', 'f', 'b' ] ); // $ExpectError
	group( 5, [ 'b', 'b', 'f', 'b' ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a collection...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	group( arr, false ); // $ExpectError
	group( arr, true ); // $ExpectError
	group( arr, 32 ); // $ExpectError
	group( arr, {} ); // $ExpectError

	group( arr, {}, false ); // $ExpectError
	group( arr, {}, true ); // $ExpectError
	group( arr, {}, 32 ); // $ExpectError
	group( arr, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	const groups = [ 'b', 'b', 'f', 'b' ];
	group( arr, null, groups ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not one of 'indices', 'values', or '*'...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	const groups = [ 'b', 'b', 'f', 'b' ];
	group( arr, { 'returns': '5' }, groups ); // $ExpectError
	group( arr, { 'returns': 123 }, groups ); // $ExpectError
	group( arr, { 'returns': [] }, groups ); // $ExpectError
	group( arr, { 'returns': {} }, groups ); // $ExpectError
	group( arr, { 'returns': ( x: number ): number => x }, groups ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	const groups = [ 'b', 'b', 'f', 'b' ];
	group(); // $ExpectError
	group( arr ); // $ExpectError
	group( arr, {}, groups, 16 ); // $ExpectError
}
