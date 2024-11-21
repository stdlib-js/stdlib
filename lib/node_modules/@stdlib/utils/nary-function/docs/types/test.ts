/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import naryFunction = require( './index' );

/**
* Input function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns array of input values
*/
function foo( x: any, y: any, z: any ): Array<any> {
	return [ x, y, z ];
}


// TESTS //

// The function returns a function...
{
	naryFunction( foo, 3 ); // $ExpectType Function
	naryFunction( foo, 3, {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	naryFunction( true, 3 ); // $ExpectError
	naryFunction( false, 3 ); // $ExpectError
	naryFunction( 5, 3 ); // $ExpectError
	naryFunction( [], 3 ); // $ExpectError
	naryFunction( {}, 3 ); // $ExpectError
	naryFunction( 'abc', 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a number...
{
	naryFunction( foo, true ); // $ExpectError
	naryFunction( foo, false ); // $ExpectError
	naryFunction( foo, null ); // $ExpectError
	naryFunction( foo, '123' ); // $ExpectError
	naryFunction( foo, {} ); // $ExpectError
	naryFunction( foo, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	naryFunction( foo, 3, {}, 4 ); // $ExpectError
}
