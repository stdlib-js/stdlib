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

import incrmgrubbs = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrmgrubbs( 20 ); // $ExpectType accumulator
	incrmgrubbs( 20, { 'alpha': 0.1 } ); // $ExpectType accumulator
	incrmgrubbs( 20, { 'alternative': 'max' } ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided a first argument that is not a number...
{
	incrmgrubbs( 'abc' ); // $ExpectError
	incrmgrubbs( true ); // $ExpectError
	incrmgrubbs( false ); // $ExpectError
	incrmgrubbs( null ); // $ExpectError
	incrmgrubbs( undefined ); // $ExpectError
	incrmgrubbs( [] ); // $ExpectError
	incrmgrubbs( {} ); // $ExpectError
	incrmgrubbs( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	incrmgrubbs( 20, '5' ); // $ExpectError
	incrmgrubbs( 20, 5 ); // $ExpectError
	incrmgrubbs( 20, true ); // $ExpectError
	incrmgrubbs( 20, false ); // $ExpectError
	incrmgrubbs( 20, null ); // $ExpectError
	incrmgrubbs( 20, [] ); // $ExpectError
	incrmgrubbs( 20, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	incrmgrubbs( 20, { 'alpha': 'abc' } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': '123' } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': true } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': false } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': null } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': [] } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': {} } ); // $ExpectError
	incrmgrubbs( 20, { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	incrmgrubbs( 20, { 'alternative': 'abc' } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': 123 } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': true } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': false } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': null } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': [] } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': {} } ); // $ExpectError
	incrmgrubbs( 20, { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	incrmgrubbs(); // $ExpectError
	incrmgrubbs( 3, {}, {} ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrmgrubbs( 5 );

	acc(); // $ExpectType Results | null
	acc( 3.14 ); // $ExpectType Results | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrmgrubbs( 5 );

	acc( 'abc' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
