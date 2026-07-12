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

import someInBy = require( './index' );

const hasUpperCase = ( v: string, key: string ): boolean => {
	return ( key.toUpperCase() === key );
};

// TESTS //

// The function returns a boolean...
{
	someInBy( { 'a': 0, 'B': 1, 'C': 1 }, 2, hasUpperCase ); // $ExpectType boolean
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, 3, hasUpperCase, {} ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an object...
{
	someInBy( 2, 2, hasUpperCase ); // $ExpectError
	someInBy( false, 2, hasUpperCase ); // $ExpectError
	someInBy( true, 2, hasUpperCase ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, ( x: number ): number => x, hasUpperCase ); // $ExpectError
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, false, hasUpperCase ); // $ExpectError
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, true, hasUpperCase ); // $ExpectError
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, 'abc', hasUpperCase ); // $ExpectError
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, {}, hasUpperCase ); // $ExpectError
	someInBy( { 'a': -1, 'B': 1, 'c': 2 }, [], hasUpperCase ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, 2 ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, false ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, true ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, 'abc' ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, {} ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	someInBy(); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 } ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1 ); // $ExpectError
	someInBy( { 'a': 1, 'B': 2, 'c': 3 }, 1, hasUpperCase, {}, 3 ); // $ExpectError
}
