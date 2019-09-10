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

import trythen = require( './index' );

/**
* First function.
*/
function x(): number {
	if ( Math.random() < 0.5 ) {
		throw new Error( 'beep' );
	}
	return 1.0;
}

/**
* Second function.
*/
function y(): number {
	return Math.random();
}

// TESTS //

// The function returns a value...
{
	trythen( x, y ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument other than a function...
{
	trythen( 'abc', y ); // $ExpectError
	trythen( 5, y ); // $ExpectError
	trythen( [], y ); // $ExpectError
	trythen( {}, y ); // $ExpectError
	trythen( true, y ); // $ExpectError
	trythen( false, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function...
{
	trythen( x, 'abc' ); // $ExpectError
	trythen( x, 5 ); // $ExpectError
	trythen( x, [] ); // $ExpectError
	trythen( x, {} ); // $ExpectError
	trythen( x, true ); // $ExpectError
	trythen( x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	trythen(); // $ExpectError
	trythen( x ); // $ExpectError
	trythen( x, y, 2 ); // $ExpectError
}
