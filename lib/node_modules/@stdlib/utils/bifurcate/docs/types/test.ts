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

import bifurcate = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	bifurcate( [ 'beep', 'boop', 'foo', 'bar' ], [ true, true, false, true ] ); // $ExpectType any[] | any[][]
	const opts = {
		'returns': 'indices' as 'indices'
	};
	bifurcate( [ 'beep', 'boop', 'foo', 'bar' ], opts, [ true, true, false, true ] ); // $ExpectType any[] | any[][]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	bifurcate( true, [ true, true, false, true ] ); // $ExpectError
	bifurcate( false, [ true, true, false, true ] ); // $ExpectError
	bifurcate( 5, [ true, true, false, true ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a collection...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	bifurcate( arr, false ); // $ExpectError
	bifurcate( arr, true ); // $ExpectError
	bifurcate( arr, 32 ); // $ExpectError
	bifurcate( arr, {} ); // $ExpectError

	bifurcate( arr, {}, false ); // $ExpectError
	bifurcate( arr, {}, true ); // $ExpectError
	bifurcate( arr, {}, 32 ); // $ExpectError
	bifurcate( arr, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	const filter = [ true, true, false, true ];
	bifurcate( arr, null, filter ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not one of 'indices', 'values', or '*'...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	const filter = [ true, true, false, true ];
	bifurcate( arr, { 'returns': '5' }, filter ); // $ExpectError
	bifurcate( arr, { 'returns': 123 }, filter ); // $ExpectError
	bifurcate( arr, { 'returns': [] }, filter ); // $ExpectError
	bifurcate( arr, { 'returns': {} }, filter ); // $ExpectError
	bifurcate( arr, { 'returns': ( x: number ): number => x }, filter ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	const filter = [ true, true, false, true ];
	bifurcate(); // $ExpectError
	bifurcate( arr ); // $ExpectError
	bifurcate( arr, {}, filter, 16 ); // $ExpectError
}
