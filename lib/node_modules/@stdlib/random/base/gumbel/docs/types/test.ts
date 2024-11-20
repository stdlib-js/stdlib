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

import gumbel = require( './index' );


// TESTS //

// The function returns a number...
{
	gumbel( 2, 3 ); // $ExpectType number
	gumbel( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	gumbel( true, 3 ); // $ExpectError
	gumbel( false, 2 ); // $ExpectError
	gumbel( '5', 1 ); // $ExpectError
	gumbel( [], 1 ); // $ExpectError
	gumbel( {}, 2 ); // $ExpectError
	gumbel( ( x: number ): number => x, 2 ); // $ExpectError

	gumbel( 9, true ); // $ExpectError
	gumbel( 9, false ); // $ExpectError
	gumbel( 5, '5' ); // $ExpectError
	gumbel( 8, [] ); // $ExpectError
	gumbel( 9, {} ); // $ExpectError
	gumbel( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gumbel(); // $ExpectError
	gumbel( 2 ); // $ExpectError
	gumbel( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	gumbel.factory( -2, 2 ); // $ExpectType NullaryFunction
	gumbel.factory(); // $ExpectType BinaryFunction
	gumbel.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = gumbel.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = gumbel.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = gumbel.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = gumbel.factory();
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
	const fcn1 = gumbel.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = gumbel.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	gumbel.factory( true, 3 ); // $ExpectError
	gumbel.factory( false, 2 ); // $ExpectError
	gumbel.factory( '5', 1 ); // $ExpectError
	gumbel.factory( [], 1 ); // $ExpectError
	gumbel.factory( {}, 2 ); // $ExpectError
	gumbel.factory( ( x: number ): number => x, 2 ); // $ExpectError

	gumbel.factory( 9, true ); // $ExpectError
	gumbel.factory( 9, false ); // $ExpectError
	gumbel.factory( 5, '5' ); // $ExpectError
	gumbel.factory( 8, [] ); // $ExpectError
	gumbel.factory( 9, {} ); // $ExpectError
	gumbel.factory( 8, ( x: number ): number => x ); // $ExpectError

	gumbel.factory( true, 3, {} ); // $ExpectError
	gumbel.factory( false, 2, {} ); // $ExpectError
	gumbel.factory( '5', 1, {} ); // $ExpectError
	gumbel.factory( [], 1, {} ); // $ExpectError
	gumbel.factory( {}, 2, {} ); // $ExpectError
	gumbel.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	gumbel.factory( 9, true, {} ); // $ExpectError
	gumbel.factory( 9, false, {} ); // $ExpectError
	gumbel.factory( 5, '5', {} ); // $ExpectError
	gumbel.factory( 8, [], {} ); // $ExpectError
	gumbel.factory( 9, {}, {} ); // $ExpectError
	gumbel.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	gumbel.factory( null ); // $ExpectError
	gumbel.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	gumbel.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	gumbel.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	gumbel.factory( -2, 2, { 'prng': null } ); // $ExpectError
	gumbel.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	gumbel.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	gumbel.factory( -2, 2, { 'prng': true ); // $ExpectError

	gumbel.factory( { 'prng': 123 } ); // $ExpectError
	gumbel.factory( { 'prng': 'abc' } ); // $ExpectError
	gumbel.factory( { 'prng': null } ); // $ExpectError
	gumbel.factory( { 'prng': [] } ); // $ExpectError
	gumbel.factory( { 'prng': {} } ); // $ExpectError
	gumbel.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	gumbel.factory( -2, 2, { 'seed': true } ); // $ExpectError
	gumbel.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	gumbel.factory( -2, 2, { 'seed': null } ); // $ExpectError
	gumbel.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	gumbel.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	gumbel.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	gumbel.factory( { 'seed': true } ); // $ExpectError
	gumbel.factory( { 'seed': 'abc' } ); // $ExpectError
	gumbel.factory( { 'seed': null } ); // $ExpectError
	gumbel.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	gumbel.factory( { 'seed': {} } ); // $ExpectError
	gumbel.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	gumbel.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	gumbel.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	gumbel.factory( -2, 2, { 'state': null } ); // $ExpectError
	gumbel.factory( -2, 2, { 'state': [] } ); // $ExpectError
	gumbel.factory( -2, 2, { 'state': {} } ); // $ExpectError
	gumbel.factory( -2, 2, { 'state': true ); // $ExpectError
	gumbel.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	gumbel.factory( { 'state': 123 } ); // $ExpectError
	gumbel.factory( { 'state': 'abc' } ); // $ExpectError
	gumbel.factory( { 'state': null } ); // $ExpectError
	gumbel.factory( { 'state': [] } ); // $ExpectError
	gumbel.factory( { 'state': {} } ); // $ExpectError
	gumbel.factory( { 'state': true ); // $ExpectError
	gumbel.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	gumbel.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	gumbel.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	gumbel.factory( -2, 2, { 'copy': null } ); // $ExpectError
	gumbel.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	gumbel.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	gumbel.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	gumbel.factory( { 'copy': 123 } ); // $ExpectError
	gumbel.factory( { 'copy': 'abc' } ); // $ExpectError
	gumbel.factory( { 'copy': null } ); // $ExpectError
	gumbel.factory( { 'copy': [] } ); // $ExpectError
	gumbel.factory( { 'copy': {} } ); // $ExpectError
	gumbel.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	gumbel.factory( 2, 4, {}, 2 ); // $ExpectError
}
