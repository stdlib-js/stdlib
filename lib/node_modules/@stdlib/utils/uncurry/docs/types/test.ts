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

import uncurry = require( './index' );

/**
* Returns a function which adds a number to `x`.
*
* @param x - first summand
* @returns function
*/
function addX( x: number ): Function {
	return function addY( y: number ): number {
		return x + y;
	};
}

// TESTS //

// The function returns a function...
{
	uncurry( addX ); // $ExpectType Closure
	uncurry( addX, 2 ); // $ExpectType Closure
	uncurry( addX, {} ); // $ExpectType Closure
	uncurry( addX, 2, {} ); // $ExpectType Closure
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	uncurry( true ); // $ExpectError
	uncurry( false ); // $ExpectError
	uncurry( 5 ); // $ExpectError
	uncurry( [] ); // $ExpectError
	uncurry( {} ); // $ExpectError
	uncurry( 'abc' ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	uncurry( addX, 2, {}, 4 ); // $ExpectError
}
