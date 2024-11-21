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

import incrgrubbs = require( './index' );


// TESTS //

// The function returns an accumulator function...
{
	incrgrubbs(); // $ExpectType accumulator
	incrgrubbs( { 'alpha': 0.1 } ); // $ExpectType accumulator
	incrgrubbs( { 'alternative': 'max' } ); // $ExpectType accumulator
	incrgrubbs( { 'init': 50 } ); // $ExpectType accumulator
}

// The compiler throws an error if the function is provided an argument which is not an options object...
{
	incrgrubbs( '5' ); // $ExpectError
	incrgrubbs( 5 ); // $ExpectError
	incrgrubbs( true ); // $ExpectError
	incrgrubbs( false ); // $ExpectError
	incrgrubbs( null ); // $ExpectError
	incrgrubbs( [] ); // $ExpectError
	incrgrubbs( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alpha` option which is not a number...
{
	incrgrubbs( { 'alpha': 'abc' } ); // $ExpectError
	incrgrubbs( { 'alpha': '123' } ); // $ExpectError
	incrgrubbs( { 'alpha': true } ); // $ExpectError
	incrgrubbs( { 'alpha': false } ); // $ExpectError
	incrgrubbs( { 'alpha': null } ); // $ExpectError
	incrgrubbs( { 'alpha': [] } ); // $ExpectError
	incrgrubbs( { 'alpha': {} } ); // $ExpectError
	incrgrubbs( { 'alpha': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `alternative` option which is not a recognized alternative...
{
	incrgrubbs( { 'alternative': 'abc' } ); // $ExpectError
	incrgrubbs( { 'alternative': 123 } ); // $ExpectError
	incrgrubbs( { 'alternative': true } ); // $ExpectError
	incrgrubbs( { 'alternative': false } ); // $ExpectError
	incrgrubbs( { 'alternative': null } ); // $ExpectError
	incrgrubbs( { 'alternative': [] } ); // $ExpectError
	incrgrubbs( { 'alternative': {} } ); // $ExpectError
	incrgrubbs( { 'alternative': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `init` option which is not a number...
{
	incrgrubbs( { 'init': 'abc' } ); // $ExpectError
	incrgrubbs( { 'init': true } ); // $ExpectError
	incrgrubbs( { 'init': false } ); // $ExpectError
	incrgrubbs( { 'init': null } ); // $ExpectError
	incrgrubbs( { 'init': [] } ); // $ExpectError
	incrgrubbs( { 'init': {} } ); // $ExpectError
	incrgrubbs( { 'init': ( x: number ): number => x } ); // $ExpectError
}

// The function returns an accumulator function which returns an accumulated result...
{
	const acc = incrgrubbs();

	acc(); // $ExpectType Results | null
	acc( 3.14 ); // $ExpectType Results | null
}

// The compiler throws an error if the returned accumulator function is provided invalid arguments...
{
	const acc = incrgrubbs();

	acc( 'abc' ); // $ExpectError
	acc( true ); // $ExpectError
	acc( false ); // $ExpectError
	acc( null ); // $ExpectError
	acc( [] ); // $ExpectError
	acc( {} ); // $ExpectError
	acc( ( x: number ): number => x ); // $ExpectError
}
