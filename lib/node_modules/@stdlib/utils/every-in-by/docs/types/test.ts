/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import everyInBy = require( './index' );


// TESTS //

function isPositive( v: number ): boolean {
	if ( typeof v !== 'object' || v === null ) {
		throw new TypeError( 'Expected an object' );
	}

	return v > 0;
}

// The function returns a boolean...
{
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, isPositive ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a object...
{
	everyInBy( 2 ); // $ExpectError
	everyInBy( false ); // $ExpectError
	everyInBy( true ); // $ExpectError
	everyInBy( [1, 2, 3, 4] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, 2 ); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, false ); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, true ); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, 'abc' ); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, {} ); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	everyInBy(); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3} ); // $ExpectError
	everyInBy( { 'a': 1, 'b': 2, 'c': 3 }, {}, 3 ); // $ExpectError
}
