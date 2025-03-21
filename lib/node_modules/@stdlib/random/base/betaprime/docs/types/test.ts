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

import betaprime = require( './index' );


// TESTS //

// The function returns a number...
{
	betaprime( 2, 3 ); // $ExpectType number
	betaprime( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	betaprime( true, 3 ); // $ExpectError
	betaprime( false, 2 ); // $ExpectError
	betaprime( '5', 1 ); // $ExpectError
	betaprime( [], 1 ); // $ExpectError
	betaprime( {}, 2 ); // $ExpectError
	betaprime( ( x: number ): number => x, 2 ); // $ExpectError

	betaprime( 9, true ); // $ExpectError
	betaprime( 9, false ); // $ExpectError
	betaprime( 5, '5' ); // $ExpectError
	betaprime( 8, [] ); // $ExpectError
	betaprime( 9, {} ); // $ExpectError
	betaprime( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	betaprime(); // $ExpectError
	betaprime( 2 ); // $ExpectError
	betaprime( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	betaprime.factory( 2, 2 ); // $ExpectType NullaryFunction
	betaprime.factory(); // $ExpectType BinaryFunction
	betaprime.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = betaprime.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = betaprime.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = betaprime.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = betaprime.factory();
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
	const fcn1 = betaprime.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = betaprime.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	betaprime.factory( true, 3 ); // $ExpectError
	betaprime.factory( false, 2 ); // $ExpectError
	betaprime.factory( '5', 1 ); // $ExpectError
	betaprime.factory( [], 1 ); // $ExpectError
	betaprime.factory( {}, 2 ); // $ExpectError
	betaprime.factory( ( x: number ): number => x, 2 ); // $ExpectError

	betaprime.factory( 9, true ); // $ExpectError
	betaprime.factory( 9, false ); // $ExpectError
	betaprime.factory( 5, '5' ); // $ExpectError
	betaprime.factory( 8, [] ); // $ExpectError
	betaprime.factory( 9, {} ); // $ExpectError
	betaprime.factory( 8, ( x: number ): number => x ); // $ExpectError

	betaprime.factory( true, 3, {} ); // $ExpectError
	betaprime.factory( false, 2, {} ); // $ExpectError
	betaprime.factory( '5', 1, {} ); // $ExpectError
	betaprime.factory( [], 1, {} ); // $ExpectError
	betaprime.factory( {}, 2, {} ); // $ExpectError
	betaprime.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	betaprime.factory( 9, true, {} ); // $ExpectError
	betaprime.factory( 9, false, {} ); // $ExpectError
	betaprime.factory( 5, '5', {} ); // $ExpectError
	betaprime.factory( 8, [], {} ); // $ExpectError
	betaprime.factory( 9, {}, {} ); // $ExpectError
	betaprime.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	betaprime.factory( null ); // $ExpectError
	betaprime.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	betaprime.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	betaprime.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	betaprime.factory( 2, 2, { 'prng': null } ); // $ExpectError
	betaprime.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	betaprime.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	betaprime.factory( 2, 2, { 'prng': true ); // $ExpectError

	betaprime.factory( { 'prng': 123 } ); // $ExpectError
	betaprime.factory( { 'prng': 'abc' } ); // $ExpectError
	betaprime.factory( { 'prng': null } ); // $ExpectError
	betaprime.factory( { 'prng': [] } ); // $ExpectError
	betaprime.factory( { 'prng': {} } ); // $ExpectError
	betaprime.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	betaprime.factory( 2, 2, { 'seed': true } ); // $ExpectError
	betaprime.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	betaprime.factory( 2, 2, { 'seed': null } ); // $ExpectError
	betaprime.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	betaprime.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	betaprime.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	betaprime.factory( { 'seed': true } ); // $ExpectError
	betaprime.factory( { 'seed': 'abc' } ); // $ExpectError
	betaprime.factory( { 'seed': null } ); // $ExpectError
	betaprime.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	betaprime.factory( { 'seed': {} } ); // $ExpectError
	betaprime.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	betaprime.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	betaprime.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	betaprime.factory( 2, 2, { 'state': null } ); // $ExpectError
	betaprime.factory( 2, 2, { 'state': [] } ); // $ExpectError
	betaprime.factory( 2, 2, { 'state': {} } ); // $ExpectError
	betaprime.factory( 2, 2, { 'state': true ); // $ExpectError
	betaprime.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	betaprime.factory( { 'state': 123 } ); // $ExpectError
	betaprime.factory( { 'state': 'abc' } ); // $ExpectError
	betaprime.factory( { 'state': null } ); // $ExpectError
	betaprime.factory( { 'state': [] } ); // $ExpectError
	betaprime.factory( { 'state': {} } ); // $ExpectError
	betaprime.factory( { 'state': true ); // $ExpectError
	betaprime.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	betaprime.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	betaprime.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	betaprime.factory( 2, 2, { 'copy': null } ); // $ExpectError
	betaprime.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	betaprime.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	betaprime.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	betaprime.factory( { 'copy': 123 } ); // $ExpectError
	betaprime.factory( { 'copy': 'abc' } ); // $ExpectError
	betaprime.factory( { 'copy': null } ); // $ExpectError
	betaprime.factory( { 'copy': [] } ); // $ExpectError
	betaprime.factory( { 'copy': {} } ); // $ExpectError
	betaprime.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	betaprime.factory( 2, 4, {}, 2 ); // $ExpectError
}
