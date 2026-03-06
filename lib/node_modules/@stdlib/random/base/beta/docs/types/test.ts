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

import beta = require( './index' );


// TESTS //

// The function returns a number...
{
	beta( 2, 3 ); // $ExpectType number
	beta( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	beta( true, 3 ); // $ExpectError
	beta( false, 2 ); // $ExpectError
	beta( '5', 1 ); // $ExpectError
	beta( [], 1 ); // $ExpectError
	beta( {}, 2 ); // $ExpectError
	beta( ( x: number ): number => x, 2 ); // $ExpectError

	beta( 9, true ); // $ExpectError
	beta( 9, false ); // $ExpectError
	beta( 5, '5' ); // $ExpectError
	beta( 8, [] ); // $ExpectError
	beta( 9, {} ); // $ExpectError
	beta( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	beta(); // $ExpectError
	beta( 2 ); // $ExpectError
	beta( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	beta.factory( 2, 2 ); // $ExpectType NullaryFunction
	beta.factory(); // $ExpectType BinaryFunction
	beta.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = beta.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = beta.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = beta.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = beta.factory();
	fcn2( true, 2 ); // $ExpectError
	fcn2( false, 2 ); // $ExpectError
	fcn2( '5', 2 ); // $ExpectError
	fcn2( [], 2 ); // $ExpectError
	fcn2( {}, 2 ); // $ExpectError
	fcn2( ( x: number ): number => x, 2 ); // $ExpectError

	fcn2( 1, true ); // $ExpectError
	fcn2( 1, false ); // $ExpectError
	fcn2( 1, '5' ); // $ExpectError
	fcn2( 1, [] ); // $ExpectError
	fcn2( 1, {} ); // $ExpectError
	fcn2( 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = beta.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = beta.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	beta.factory( true, 3 ); // $ExpectError
	beta.factory( false, 2 ); // $ExpectError
	beta.factory( '5', 1 ); // $ExpectError
	beta.factory( [], 1 ); // $ExpectError
	beta.factory( {}, 2 ); // $ExpectError
	beta.factory( ( x: number ): number => x, 2 ); // $ExpectError

	beta.factory( 9, true ); // $ExpectError
	beta.factory( 9, false ); // $ExpectError
	beta.factory( 5, '5' ); // $ExpectError
	beta.factory( 8, [] ); // $ExpectError
	beta.factory( 9, {} ); // $ExpectError
	beta.factory( 8, ( x: number ): number => x ); // $ExpectError

	beta.factory( true, 3, {} ); // $ExpectError
	beta.factory( false, 2, {} ); // $ExpectError
	beta.factory( '5', 1, {} ); // $ExpectError
	beta.factory( [], 1, {} ); // $ExpectError
	beta.factory( {}, 2, {} ); // $ExpectError
	beta.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	beta.factory( 9, true, {} ); // $ExpectError
	beta.factory( 9, false, {} ); // $ExpectError
	beta.factory( 5, '5', {} ); // $ExpectError
	beta.factory( 8, [], {} ); // $ExpectError
	beta.factory( 9, {}, {} ); // $ExpectError
	beta.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	beta.factory( null ); // $ExpectError
	beta.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	beta.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	beta.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	beta.factory( 2, 2, { 'prng': null } ); // $ExpectError
	beta.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	beta.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	beta.factory( 2, 2, { 'prng': true ); // $ExpectError

	beta.factory( { 'prng': 123 } ); // $ExpectError
	beta.factory( { 'prng': 'abc' } ); // $ExpectError
	beta.factory( { 'prng': null } ); // $ExpectError
	beta.factory( { 'prng': [] } ); // $ExpectError
	beta.factory( { 'prng': {} } ); // $ExpectError
	beta.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	beta.factory( 2, 2, { 'seed': true } ); // $ExpectError
	beta.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	beta.factory( 2, 2, { 'seed': null } ); // $ExpectError
	beta.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	beta.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	beta.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	beta.factory( { 'seed': true } ); // $ExpectError
	beta.factory( { 'seed': 'abc' } ); // $ExpectError
	beta.factory( { 'seed': null } ); // $ExpectError
	beta.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	beta.factory( { 'seed': {} } ); // $ExpectError
	beta.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	beta.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	beta.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	beta.factory( 2, 2, { 'state': null } ); // $ExpectError
	beta.factory( 2, 2, { 'state': [] } ); // $ExpectError
	beta.factory( 2, 2, { 'state': {} } ); // $ExpectError
	beta.factory( 2, 2, { 'state': true ); // $ExpectError
	beta.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	beta.factory( { 'state': 123 } ); // $ExpectError
	beta.factory( { 'state': 'abc' } ); // $ExpectError
	beta.factory( { 'state': null } ); // $ExpectError
	beta.factory( { 'state': [] } ); // $ExpectError
	beta.factory( { 'state': {} } ); // $ExpectError
	beta.factory( { 'state': true ); // $ExpectError
	beta.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	beta.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	beta.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	beta.factory( 2, 2, { 'copy': null } ); // $ExpectError
	beta.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	beta.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	beta.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	beta.factory( { 'copy': 123 } ); // $ExpectError
	beta.factory( { 'copy': 'abc' } ); // $ExpectError
	beta.factory( { 'copy': null } ); // $ExpectError
	beta.factory( { 'copy': [] } ); // $ExpectError
	beta.factory( { 'copy': {} } ); // $ExpectError
	beta.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	beta.factory( 2, 4, {}, 2 ); // $ExpectError
}
