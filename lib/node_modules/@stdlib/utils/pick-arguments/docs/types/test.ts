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

import pickArguments = require( './index' );

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
	pickArguments( foo, [ 0, 2 ] ); // $ExpectType Function
	pickArguments( foo, [ 0, 2 ], {} ); // $ExpectType Function
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	pickArguments( true, [ 0, 2 ] ); // $ExpectError
	pickArguments( false, [ 0, 2 ] ); // $ExpectError
	pickArguments( 5, [ 0, 2 ] ); // $ExpectError
	pickArguments( [], [ 0, 2 ] ); // $ExpectError
	pickArguments( {}, [ 0, 2 ] ); // $ExpectError
	pickArguments( 'abc', [ 0, 2 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than an array-like object containing numbers...
{
	pickArguments( foo, true ); // $ExpectError
	pickArguments( foo, false ); // $ExpectError
	pickArguments( foo, 123 ); // $ExpectError
	pickArguments( foo, {} ); // $ExpectError
	pickArguments( foo, [ '1' ] ); // $ExpectError
}

// The compiler throws an error if the function is provided more than three arguments...
{
	pickArguments( foo, [ 0, 2 ], {}, 4 ); // $ExpectError
}
