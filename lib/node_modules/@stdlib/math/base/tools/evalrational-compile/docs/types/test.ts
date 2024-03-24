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

import compile = require( './index' );


// TESTS //

// The function returns a string...
{
	compile( [ -6.0, -5.0 ], [ 3.0, 0.5 ] ); // $ExpectType string
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': 'float32' } ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	const Q = [ 3.0, 0.5 ];

	compile( true, Q ); // $ExpectError
	compile( false, Q ); // $ExpectError
	compile( 'abc', Q ); // $ExpectError
	compile( 123, Q ); // $ExpectError
	compile( {}, Q ); // $ExpectError
	compile( ( x: number ): number => x, Q ); // $ExpectError

	compile( true, Q, {} ); // $ExpectError
	compile( false, Q, {} ); // $ExpectError
	compile( 'abc', Q, {} ); // $ExpectError
	compile( 123, Q, {} ); // $ExpectError
	compile( {}, Q, {} ); // $ExpectError
	compile( ( x: number ): number => x, Q, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const P = [ -6.0, -5.0 ];

	compile( P, true ); // $ExpectError
	compile( P, false ); // $ExpectError
	compile( P, 'abc' ); // $ExpectError
	compile( P, 123 ); // $ExpectError
	compile( P, {} ); // $ExpectError
	compile( P, ( x: number ): number => x ); // $ExpectError

	compile( P, true, {} ); // $ExpectError
	compile( P, false, {} ); // $ExpectError
	compile( P, 'abc', {} ); // $ExpectError
	compile( P, 123, {} ); // $ExpectError
	compile( P, {}, {} ); // $ExpectError
	compile( P, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	compile( P, Q, true ); // $ExpectError
	compile( P, Q, false ); // $ExpectError
	compile( P, Q, 'abc' ); // $ExpectError
	compile( P, Q, 123 ); // $ExpectError
	compile( P, Q, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const P = [ -6.0, -5.0 ];
	const Q = [ 3.0, 0.5 ];

	compile( P, Q, { 'dtype': true } ); // $ExpectError
	compile( P, Q, { 'dtype': false } ); // $ExpectError
	compile( P, Q, { 'dtype': [] } ); // $ExpectError
	compile( P, Q, { 'dtype': 123 } ); // $ExpectError
	compile( P, Q, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	const P = [ -6.0, -5.0 ];

	compile(); // $ExpectError
	compile( P ); // $ExpectError
}
