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

import pluck = require( './index' );


// TESTS //

// The function returns an array...
{
	const arr = [
		{ 'a': 1, 'b': 2 },
		{ 'a': 0.5, 'b': 3 }
	];
	pluck( arr, 'a' ); // $ExpectType any[]
	pluck( arr, 'a', { 'copy': false } ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	pluck( 'abc', 'a' ); // $ExpectError
	pluck( 123, 'a' ); // $ExpectError
	pluck( null, 'a' ); // $ExpectError
	pluck( {}, 'a' ); // $ExpectError
	pluck( ( x: number ): number => x, 'a' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid property name...
{
	const arr = [
		{ 'a': 1, 'b': 2 },
		{ 'a': 0.5, 'b': 3 }
	];
	pluck( arr, true ); // $ExpectError
	pluck( arr, false ); // $ExpectError
	pluck( arr, [] ); // $ExpectError
	pluck( arr, {} ); // $ExpectError
	pluck( arr, ( x: number ): number => ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	const arr = [
		{ 'a': 1, 'b': 2 },
		{ 'a': 0.5, 'b': 3 }
	];
	pluck( arr, 'a', { 'copy': '5' } ); // $ExpectError
	pluck( arr, 'a', { 'copy': 123 } ); // $ExpectError
	pluck( arr, 'a', { 'copy': null } ); // $ExpectError
	pluck( arr, 'a', { 'copy': [] } ); // $ExpectError
	pluck( arr, 'a', { 'copy': {} } ); // $ExpectError
	pluck( arr, 'a', { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const arr = [
		{ 'a': 1, 'b': 2 },
		{ 'a': 0.5, 'b': 3 }
	];
	pluck(); // $ExpectError
	pluck( arr ); // $ExpectError
	pluck( arr, 'a', { 'copy': true }, 2 ); // $ExpectError
}
