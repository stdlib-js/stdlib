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

import binomialTest = require( './index' );


// TESTS //

// The function returns a test result object...
{
	binomialTest( 682, 925 ); // $ExpectType Results
	binomialTest( [ 682, 243 ] ); // $ExpectType Results
	binomialTest( 682, 925, { 'alpha': 0.1 } ); // $ExpectType Results
	binomialTest( [ 682, 243 ], { 'p': 0.75 } ); // $ExpectType Results
}

// The function does not compile if provided a first argument that is neither a number nor a two-element number array...
{
	binomialTest( 'abc' ); // $ExpectError
	binomialTest( true ); // $ExpectError
	binomialTest( false ); // $ExpectError
	binomialTest( null ); // $ExpectError
	binomialTest( undefined ); // $ExpectError
	binomialTest( {} ); // $ExpectError
	binomialTest( [] ); // $ExpectError
	binomialTest( [ 100, 150, 100 ] ); // $ExpectError
	binomialTest( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a first argument that is a number and a second argument that is not a number...
{
	binomialTest( 682, 'abc' ); // $ExpectError
	binomialTest( 682, true ); // $ExpectError
	binomialTest( 682, false ); // $ExpectError
	binomialTest( 682, null ); // $ExpectError
	binomialTest( 682, undefined ); // $ExpectError
	binomialTest( 682, [] ); // $ExpectError
	binomialTest( 682, {} ); // $ExpectError
	binomialTest( 682, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not an options object...
{
	binomialTest( 682, 925, true ); // $ExpectError
	binomialTest( 682, 925, false ); // $ExpectError
	binomialTest( 682, 925, null ); // $ExpectError
	binomialTest( 682, 925, 5 ); // $ExpectError
	binomialTest( 682, 925, 'abc' ); // $ExpectError
	binomialTest( 682, 925, [] ); // $ExpectError
	binomialTest( 682, 925, ( x: number ): number => x ); // $ExpectError

	binomialTest( [ 682, 243 ], true ); // $ExpectError
	binomialTest( [ 682, 243 ], false ); // $ExpectError
	binomialTest( [ 682, 243 ], null ); // $ExpectError
	binomialTest( [ 682, 243 ], 5 ); // $ExpectError
	binomialTest( [ 682, 243 ], 'abc' ); // $ExpectError
	binomialTest( [ 682, 243 ], [] ); // $ExpectError
	binomialTest( [ 682, 243 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `alpha` option which is not a number...
{
	binomialTest( 682, 925, { 'alpha': 'abc' } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': '123' } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': true } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': false } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': null } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': [] } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': {} } ); // $ExpectError
	binomialTest( 682, 925, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	binomialTest( 682, 925, { 'alternative': 'abc' } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': 123 } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': true } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': false } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': null } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': [] } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': {} } ); // $ExpectError
	binomialTest( 682, 925, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `p` option which is not a number...
{
	binomialTest( 682, 925, { 'p': 'abc' } ); // $ExpectError
	binomialTest( 682, 925, { 'p': '123' } ); // $ExpectError
	binomialTest( 682, 925, { 'p': true } ); // $ExpectError
	binomialTest( 682, 925, { 'p': false } ); // $ExpectError
	binomialTest( 682, 925, { 'p': null } ); // $ExpectError
	binomialTest( 682, 925, { 'p': [] } ); // $ExpectError
	binomialTest( 682, 925, { 'p': {} } ); // $ExpectError
	binomialTest( 682, 925, { 'p': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	binomialTest(); // $ExpectError
	binomialTest( 682, 925, {}, {} ); // $ExpectError
}
