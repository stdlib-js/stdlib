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
	compile( [ 3.0, 2.0, 1.0 ] ); // $ExpectType string
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': 'float32' } ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	compile( true ); // $ExpectError
	compile( false ); // $ExpectError
	compile( 'abc' ); // $ExpectError
	compile( 123 ); // $ExpectError
	compile( {} ); // $ExpectError
	compile( ( x: number ): number => x ); // $ExpectError

	compile( true, {} ); // $ExpectError
	compile( false, {} ); // $ExpectError
	compile( 'abc', {} ); // $ExpectError
	compile( 123, {} ); // $ExpectError
	compile( {}, {} ); // $ExpectError
	compile( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	compile( [ 3.0, 2.0, 1.0 ], true ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], false ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], 'abc' ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], 123 ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': true } ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': false } ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': [] } ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': 123 } ); // $ExpectError
	compile( [ 3.0, 2.0, 1.0 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an insufficient number of arguments...
{
	compile(); // $ExpectError
}
