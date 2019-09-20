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

import find = require( './index' );

const condition = ( val: number ): boolean => val > 20;


// TESTS //

// The function returns an array of indices, element values, or arrays of index-value pairs...
{
	const arr = [ 30, 20, 50, 60, 10 ];
	find( arr, condition ); // $ExpectType any[] | [number, any][]
	const opts = {
		'returns': 'indices' as 'indices'
	};
	find( arr, opts, condition ); // $ExpectType any[] | [number, any][]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	find( true, condition ); // $ExpectError
	find( false, condition ); // $ExpectError
	find( 5, condition ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	const arr = [ 30, 20, 50, 60, 10 ];
	find( arr, false ); // $ExpectError
	find( arr, true ); // $ExpectError
	find( arr, 32 ); // $ExpectError
	find( arr, 'abc' ); // $ExpectError
	find( arr, [] ); // $ExpectError
	find( arr, {} ); // $ExpectError

	find( arr, {}, false ); // $ExpectError
	find( arr, {}, true ); // $ExpectError
	find( arr, {}, 32 ); // $ExpectError
	find( arr, {}, 'abc' ); // $ExpectError
	find( arr, {}, [] ); // $ExpectError
	find( arr, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const arr = [ 30, 20, 50, 60, 10 ];
	find( arr, null, condition ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not one of 'indices', 'values', or '*'...
{
	const arr = [ 30, 20, 50, 60, 10 ];
	find( arr, { 'returns': '5' }, condition ); // $ExpectError
	find( arr, { 'returns': 123 }, condition ); // $ExpectError
	find( arr, { 'returns': [] }, condition ); // $ExpectError
	find( arr, { 'returns': {} }, condition ); // $ExpectError
	find( arr, { 'returns': ( x: number ): number => x }, condition ); // $ExpectError
}

// The compiler throws an error if the function is provided a `k` option which is not a number...
{
	const arr = [ 30, 20, 50, 60, 10 ];
	find( arr, { 'k': '5' }, condition ); // $ExpectError
	find( arr, { 'k': false }, condition ); // $ExpectError
	find( arr, { 'k': true }, condition ); // $ExpectError
	find( arr, { 'k': [] }, condition ); // $ExpectError
	find( arr, { 'k': {} }, condition ); // $ExpectError
	find( arr, { 'k': ( x: number ): number => x }, condition ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [ 30, 20, 50, 60, 10 ];
	find(); // $ExpectError
	find( arr ); // $ExpectError
	find( arr, {}, condition, 16 ); // $ExpectError
}
