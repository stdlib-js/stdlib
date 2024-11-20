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

import deepPluck = require( './index' );


// TESTS //

// The function returns an array...
{
	const arr1 = [
		{ 'a': { 'b': { 'c': 1 } } },
		{ 'a': { 'b': { 'c': 2 } } }
	];
	deepPluck( arr1, 'a.b.c' ); // $ExpectType any[]

	const arr2 = [
		{ 'a': [ 0, 1, 2 ] },
		{ 'a': [ 3, 4, 5 ] }
	];
	deepPluck( arr2, [ 'a', 1 ] ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a second argument which is not a string or an array...
{
	const arr = [
		{ 'a': { 'b': { 'c': 1 } } },
		{ 'a': { 'b': { 'c': 2 } } }
	];
	deepPluck( arr, 3.12 ); // $ExpectError
	deepPluck( arr, {} ); // $ExpectError
	deepPluck( arr, false ); // $ExpectError
	deepPluck( arr, true ); // $ExpectError
	deepPluck( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const arr = [
		{ 'a': { 'b': { 'c': 1 } } },
		{ 'a': { 'b': { 'c': 2 } } }
	];
	deepPluck( arr, 'a.b.c', null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	const arr = [
		{ 'a': { 'b': { 'c': 1 } } },
		{ 'a': { 'b': { 'c': 2 } } }
	];
	deepPluck( arr, 'a.b.c', { 'copy': '5' } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'copy': 123 } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'copy': null } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'copy': [] } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'copy': {} } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `sep` option which is not a string...
{
	const arr = [
		{ 'a': { 'b': { 'c': 1 } } },
		{ 'a': { 'b': { 'c': 2 } } }
	];
	deepPluck( arr, 'a.b.c', { 'sep': true } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'sep': false } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'sep': 123 } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'sep': null } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'sep': [] } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'sep': {} } ); // $ExpectError
	deepPluck( arr, 'a.b.c', { 'sep': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	deepPluck(); // $ExpectError
	deepPluck( [] ); // $ExpectError
}
