/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import sotu = require( './index' );


// TESTS //

// The function returns an object array...
{
	sotu(); // $ExpectType Object[]
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	sotu( 'abc' ); // $ExpectError
	sotu( false ); // $ExpectError
	sotu( true ); // $ExpectError
	sotu( null ); // $ExpectError
	sotu( 123 ); // $ExpectError
	sotu( [] ); // $ExpectError
	sotu( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `name` option which is not a string or string array...
{
	sotu( { 'name': 123 } ); // $ExpectError
	sotu( { 'name': true } ); // $ExpectError
	sotu( { 'name': false } ); // $ExpectError
	sotu( { 'name': {} } ); // $ExpectError
	sotu( { 'name': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `year` option which is not a number or number array...
{
	sotu( { 'year': 'abc' } ); // $ExpectError
	sotu( { 'year': true } ); // $ExpectError
	sotu( { 'year': false } ); // $ExpectError
	sotu( { 'year': {} } ); // $ExpectError
	sotu( { 'year': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `range` option which is not a two-element number array...
{
	sotu( { 'range': 'abc' } ); // $ExpectError
	sotu( { 'range': true } ); // $ExpectError
	sotu( { 'range': false } ); // $ExpectError
	sotu( { 'range': {} } ); // $ExpectError
	sotu( { 'range': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `party` option which is not a recognized political party or array of parties..
{
	sotu( { 'party': 123 } ); // $ExpectError
	sotu( { 'party': 'abc' } ); // $ExpectError
	sotu( { 'party': true } ); // $ExpectError
	sotu( { 'party': false } ); // $ExpectError
	sotu( { 'party': {} } ); // $ExpectError
	sotu( { 'party': ( x: number ): number => x } ); // $ExpectError
}
