/*
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

import someOwnBy = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns a boolean...
{
	someOwnBy( { 'a': 0, 'b': 1, 'c': 1 }, 2, isPositive ); // $ExpectType boolean
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, 3, isPositive, {} ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	someOwnBy( 2, 2, isPositive ); // $ExpectError
	someOwnBy( false, 2, isPositive ); // $ExpectError
	someOwnBy( true, 2, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, ( x: number ): number => x, isPositive ); // $ExpectError
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, false, isPositive ); // $ExpectError
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, true, isPositive ); // $ExpectError
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, 'abc', isPositive ); // $ExpectError
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, {}, isPositive ); // $ExpectError
	someOwnBy( { 'a': -1, 'b': 1, 'c': 2 }, [], isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, 2 ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, false ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, true ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, 'abc' ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, {} ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	someOwnBy(); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 } ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1 ); // $ExpectError
	someOwnBy( { 'a': 1, 'b': 2, 'c': 3 }, 1, isPositive, {}, 3 ); // $ExpectError
}
