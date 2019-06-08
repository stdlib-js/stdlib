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

import ifthen = require( './index' );

/**
* Returns the number one.
*
* @returns one
*/
function one(): number {
	return 1;
}

/**
* Returns the number zero.
*
* @returns zero
*/
function zero(): number {
	return 0;
}


// TESTS //

// The function returns the return value of either the `x` or `y` function...
{
	ifthen( true, zero, one ); // $ExpectType any
	ifthen( false, zero, one ); // $ExpectType any
}

// The compiler throws an error if the function is not provided a function as its first argument...
{
	ifthen( zero, zero, one ); // $ExpectError
	ifthen( 'abc', zero, one ); // $ExpectError
	ifthen( 3.12, zero, one ); // $ExpectError
	ifthen( [], zero, one ); // $ExpectError
	ifthen( {}, zero, one ); // $ExpectError
}

// The compiler throws an error if the function is not provided a function as its second argument...
{
	ifthen( true, 'abc', one ); // $ExpectError
	ifthen( true, 3.12, one ); // $ExpectError
	ifthen( true, false, one ); // $ExpectError
	ifthen( true, true, one ); // $ExpectError
	ifthen( true, [], one ); // $ExpectError
	ifthen( true, {}, one ); // $ExpectError
}

// The compiler throws an error if the function is not provided a function as its third argument...
{
	ifthen( true, zero, 'abc' ); // $ExpectError
	ifthen( true, zero, 3.12 ); // $ExpectError
	ifthen( true, zero, false ); // $ExpectError
	ifthen( true, zero, true ); // $ExpectError
	ifthen( true, zero, [] ); // $ExpectError
	ifthen( true, zero, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	ifthen(); // $ExpectError
	ifthen( true, zero ); // $ExpectError
	ifthen( true, zero, one, 'a' ); // $ExpectError
}
