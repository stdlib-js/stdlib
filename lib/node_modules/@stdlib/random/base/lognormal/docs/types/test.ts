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

import lognormal = require( './index' );


// TESTS //

// The function returns a number...
{
	lognormal( 2, 3 ); // $ExpectType number
	lognormal( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	lognormal( true, 3 ); // $ExpectError
	lognormal( false, 2 ); // $ExpectError
	lognormal( '5', 1 ); // $ExpectError
	lognormal( [], 1 ); // $ExpectError
	lognormal( {}, 2 ); // $ExpectError
	lognormal( ( x: number ): number => x, 2 ); // $ExpectError

	lognormal( 9, true ); // $ExpectError
	lognormal( 9, false ); // $ExpectError
	lognormal( 5, '5' ); // $ExpectError
	lognormal( 8, [] ); // $ExpectError
	lognormal( 9, {} ); // $ExpectError
	lognormal( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	lognormal(); // $ExpectError
	lognormal( 2 ); // $ExpectError
	lognormal( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	lognormal.factory( -2, 2 ); // $ExpectType NullaryFunction
	lognormal.factory(); // $ExpectType BinaryFunction
	lognormal.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = lognormal.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = lognormal.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = lognormal.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = lognormal.factory();
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
	const fcn1 = lognormal.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = lognormal.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	lognormal.factory( true, 3 ); // $ExpectError
	lognormal.factory( false, 2 ); // $ExpectError
	lognormal.factory( '5', 1 ); // $ExpectError
	lognormal.factory( [], 1 ); // $ExpectError
	lognormal.factory( {}, 2 ); // $ExpectError
	lognormal.factory( ( x: number ): number => x, 2 ); // $ExpectError

	lognormal.factory( 9, true ); // $ExpectError
	lognormal.factory( 9, false ); // $ExpectError
	lognormal.factory( 5, '5' ); // $ExpectError
	lognormal.factory( 8, [] ); // $ExpectError
	lognormal.factory( 9, {} ); // $ExpectError
	lognormal.factory( 8, ( x: number ): number => x ); // $ExpectError

	lognormal.factory( true, 3, {} ); // $ExpectError
	lognormal.factory( false, 2, {} ); // $ExpectError
	lognormal.factory( '5', 1, {} ); // $ExpectError
	lognormal.factory( [], 1, {} ); // $ExpectError
	lognormal.factory( {}, 2, {} ); // $ExpectError
	lognormal.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	lognormal.factory( 9, true, {} ); // $ExpectError
	lognormal.factory( 9, false, {} ); // $ExpectError
	lognormal.factory( 5, '5', {} ); // $ExpectError
	lognormal.factory( 8, [], {} ); // $ExpectError
	lognormal.factory( 9, {}, {} ); // $ExpectError
	lognormal.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	lognormal.factory( null ); // $ExpectError
	lognormal.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	lognormal.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	lognormal.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	lognormal.factory( -2, 2, { 'prng': null } ); // $ExpectError
	lognormal.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	lognormal.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	lognormal.factory( -2, 2, { 'prng': true ); // $ExpectError

	lognormal.factory( { 'prng': 123 } ); // $ExpectError
	lognormal.factory( { 'prng': 'abc' } ); // $ExpectError
	lognormal.factory( { 'prng': null } ); // $ExpectError
	lognormal.factory( { 'prng': [] } ); // $ExpectError
	lognormal.factory( { 'prng': {} } ); // $ExpectError
	lognormal.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	lognormal.factory( -2, 2, { 'seed': true } ); // $ExpectError
	lognormal.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	lognormal.factory( -2, 2, { 'seed': null } ); // $ExpectError
	lognormal.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	lognormal.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	lognormal.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	lognormal.factory( { 'seed': true } ); // $ExpectError
	lognormal.factory( { 'seed': 'abc' } ); // $ExpectError
	lognormal.factory( { 'seed': null } ); // $ExpectError
	lognormal.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	lognormal.factory( { 'seed': {} } ); // $ExpectError
	lognormal.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	lognormal.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	lognormal.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	lognormal.factory( -2, 2, { 'state': null } ); // $ExpectError
	lognormal.factory( -2, 2, { 'state': [] } ); // $ExpectError
	lognormal.factory( -2, 2, { 'state': {} } ); // $ExpectError
	lognormal.factory( -2, 2, { 'state': true ); // $ExpectError
	lognormal.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	lognormal.factory( { 'state': 123 } ); // $ExpectError
	lognormal.factory( { 'state': 'abc' } ); // $ExpectError
	lognormal.factory( { 'state': null } ); // $ExpectError
	lognormal.factory( { 'state': [] } ); // $ExpectError
	lognormal.factory( { 'state': {} } ); // $ExpectError
	lognormal.factory( { 'state': true ); // $ExpectError
	lognormal.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	lognormal.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	lognormal.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	lognormal.factory( -2, 2, { 'copy': null } ); // $ExpectError
	lognormal.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	lognormal.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	lognormal.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	lognormal.factory( { 'copy': 123 } ); // $ExpectError
	lognormal.factory( { 'copy': 'abc' } ); // $ExpectError
	lognormal.factory( { 'copy': null } ); // $ExpectError
	lognormal.factory( { 'copy': [] } ); // $ExpectError
	lognormal.factory( { 'copy': {} } ); // $ExpectError
	lognormal.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	lognormal.factory( 2, 4, {}, 2 ); // $ExpectError
}
