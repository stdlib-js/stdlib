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

import bifurcateBy = require( './index' );

const predicate = ( v: Array<any> ): boolean => v[ 0 ] === 'b';


// TESTS //

// The function returns an array of arrays...
{
	bifurcateBy( [ 'beep', 'boop', 'foo', 'bar' ], predicate ); // $ExpectType any[][]
	bifurcateBy( [], predicate ); // $ExpectType any[][]
	const opts = {
		'returns': 'indices' as 'indices'
	};
	bifurcateBy( [ 'beep', 'boop', 'foo', 'bar' ], opts, predicate ); // $ExpectType any[][]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	bifurcateBy( true, predicate ); // $ExpectError
	bifurcateBy( false, predicate ); // $ExpectError
	bifurcateBy( 5, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	bifurcateBy( arr, false ); // $ExpectError
	bifurcateBy( arr, true ); // $ExpectError
	bifurcateBy( arr, 32 ); // $ExpectError
	bifurcateBy( arr, 'abc' ); // $ExpectError
	bifurcateBy( arr, [] ); // $ExpectError
	bifurcateBy( arr, {} ); // $ExpectError

	bifurcateBy( arr, {}, false ); // $ExpectError
	bifurcateBy( arr, {}, true ); // $ExpectError
	bifurcateBy( arr, {}, 32 ); // $ExpectError
	bifurcateBy( arr, {}, 'abc' ); // $ExpectError
	bifurcateBy( arr, {}, [] ); // $ExpectError
	bifurcateBy( arr, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	bifurcateBy( arr, null, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not one of 'indices', 'values', or '*'...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	bifurcateBy( arr, { 'returns': '5' }, predicate ); // $ExpectError
	bifurcateBy( arr, { 'returns': 123 }, predicate ); // $ExpectError
	bifurcateBy( arr, { 'returns': [] }, predicate ); // $ExpectError
	bifurcateBy( arr, { 'returns': {} }, predicate ); // $ExpectError
	bifurcateBy( arr, { 'returns': ( x: number ): number => x }, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ 'beep', 'boop', 'foo', 'bar' ];
	bifurcateBy(); // $ExpectError
	bifurcateBy( arr ); // $ExpectError
	bifurcateBy( arr, {}, predicate, 16 ); // $ExpectError
}
