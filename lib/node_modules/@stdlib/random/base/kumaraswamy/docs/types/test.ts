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

import kumaraswamy = require( './index' );


// TESTS //

// The function returns a number...
{
	kumaraswamy( 2, 3 ); // $ExpectType number
	kumaraswamy( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	kumaraswamy( true, 3 ); // $ExpectError
	kumaraswamy( false, 2 ); // $ExpectError
	kumaraswamy( '5', 1 ); // $ExpectError
	kumaraswamy( [], 1 ); // $ExpectError
	kumaraswamy( {}, 2 ); // $ExpectError
	kumaraswamy( ( x: number ): number => x, 2 ); // $ExpectError

	kumaraswamy( 9, true ); // $ExpectError
	kumaraswamy( 9, false ); // $ExpectError
	kumaraswamy( 5, '5' ); // $ExpectError
	kumaraswamy( 8, [] ); // $ExpectError
	kumaraswamy( 9, {} ); // $ExpectError
	kumaraswamy( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	kumaraswamy(); // $ExpectError
	kumaraswamy( 2 ); // $ExpectError
	kumaraswamy( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	kumaraswamy.factory( 2, 2 ); // $ExpectType NullaryFunction
	kumaraswamy.factory(); // $ExpectType BinaryFunction
	kumaraswamy.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = kumaraswamy.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = kumaraswamy.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = kumaraswamy.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = kumaraswamy.factory();
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
	const fcn1 = kumaraswamy.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = kumaraswamy.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	kumaraswamy.factory( true, 3 ); // $ExpectError
	kumaraswamy.factory( false, 2 ); // $ExpectError
	kumaraswamy.factory( '5', 1 ); // $ExpectError
	kumaraswamy.factory( [], 1 ); // $ExpectError
	kumaraswamy.factory( {}, 2 ); // $ExpectError
	kumaraswamy.factory( ( x: number ): number => x, 2 ); // $ExpectError

	kumaraswamy.factory( 9, true ); // $ExpectError
	kumaraswamy.factory( 9, false ); // $ExpectError
	kumaraswamy.factory( 5, '5' ); // $ExpectError
	kumaraswamy.factory( 8, [] ); // $ExpectError
	kumaraswamy.factory( 9, {} ); // $ExpectError
	kumaraswamy.factory( 8, ( x: number ): number => x ); // $ExpectError

	kumaraswamy.factory( true, 3, {} ); // $ExpectError
	kumaraswamy.factory( false, 2, {} ); // $ExpectError
	kumaraswamy.factory( '5', 1, {} ); // $ExpectError
	kumaraswamy.factory( [], 1, {} ); // $ExpectError
	kumaraswamy.factory( {}, 2, {} ); // $ExpectError
	kumaraswamy.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	kumaraswamy.factory( 9, true, {} ); // $ExpectError
	kumaraswamy.factory( 9, false, {} ); // $ExpectError
	kumaraswamy.factory( 5, '5', {} ); // $ExpectError
	kumaraswamy.factory( 8, [], {} ); // $ExpectError
	kumaraswamy.factory( 9, {}, {} ); // $ExpectError
	kumaraswamy.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	kumaraswamy.factory( null ); // $ExpectError
	kumaraswamy.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	kumaraswamy.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'prng': null } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'prng': true ); // $ExpectError

	kumaraswamy.factory( { 'prng': 123 } ); // $ExpectError
	kumaraswamy.factory( { 'prng': 'abc' } ); // $ExpectError
	kumaraswamy.factory( { 'prng': null } ); // $ExpectError
	kumaraswamy.factory( { 'prng': [] } ); // $ExpectError
	kumaraswamy.factory( { 'prng': {} } ); // $ExpectError
	kumaraswamy.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	kumaraswamy.factory( 2, 2, { 'seed': true } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'seed': null } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	kumaraswamy.factory( { 'seed': true } ); // $ExpectError
	kumaraswamy.factory( { 'seed': 'abc' } ); // $ExpectError
	kumaraswamy.factory( { 'seed': null } ); // $ExpectError
	kumaraswamy.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	kumaraswamy.factory( { 'seed': {} } ); // $ExpectError
	kumaraswamy.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	kumaraswamy.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'state': null } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'state': [] } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'state': {} } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'state': true ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	kumaraswamy.factory( { 'state': 123 } ); // $ExpectError
	kumaraswamy.factory( { 'state': 'abc' } ); // $ExpectError
	kumaraswamy.factory( { 'state': null } ); // $ExpectError
	kumaraswamy.factory( { 'state': [] } ); // $ExpectError
	kumaraswamy.factory( { 'state': {} } ); // $ExpectError
	kumaraswamy.factory( { 'state': true ); // $ExpectError
	kumaraswamy.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	kumaraswamy.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'copy': null } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	kumaraswamy.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	kumaraswamy.factory( { 'copy': 123 } ); // $ExpectError
	kumaraswamy.factory( { 'copy': 'abc' } ); // $ExpectError
	kumaraswamy.factory( { 'copy': null } ); // $ExpectError
	kumaraswamy.factory( { 'copy': [] } ); // $ExpectError
	kumaraswamy.factory( { 'copy': {} } ); // $ExpectError
	kumaraswamy.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	kumaraswamy.factory( 2, 4, {}, 2 ); // $ExpectError
}
