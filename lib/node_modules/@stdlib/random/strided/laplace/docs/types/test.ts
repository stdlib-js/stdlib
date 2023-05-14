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

import laplace = require( './index' );


// TESTS //

// The function returns a number...
{
	laplace( 2, 3 ); // $ExpectType number
	laplace( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	laplace( true, 3 ); // $ExpectError
	laplace( false, 2 ); // $ExpectError
	laplace( '5', 1 ); // $ExpectError
	laplace( [], 1 ); // $ExpectError
	laplace( {}, 2 ); // $ExpectError
	laplace( ( x: number ): number => x, 2 ); // $ExpectError

	laplace( 9, true ); // $ExpectError
	laplace( 9, false ); // $ExpectError
	laplace( 5, '5' ); // $ExpectError
	laplace( 8, [] ); // $ExpectError
	laplace( 9, {} ); // $ExpectError
	laplace( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	laplace(); // $ExpectError
	laplace( 2 ); // $ExpectError
	laplace( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	laplace.factory( -2, 2 ); // $ExpectType NullaryFunction
	laplace.factory(); // $ExpectType BinaryFunction
	laplace.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = laplace.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = laplace.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = laplace.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = laplace.factory();
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
	const fcn1 = laplace.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = laplace.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	laplace.factory( true, 3 ); // $ExpectError
	laplace.factory( false, 2 ); // $ExpectError
	laplace.factory( '5', 1 ); // $ExpectError
	laplace.factory( [], 1 ); // $ExpectError
	laplace.factory( {}, 2 ); // $ExpectError
	laplace.factory( ( x: number ): number => x, 2 ); // $ExpectError

	laplace.factory( 9, true ); // $ExpectError
	laplace.factory( 9, false ); // $ExpectError
	laplace.factory( 5, '5' ); // $ExpectError
	laplace.factory( 8, [] ); // $ExpectError
	laplace.factory( 9, {} ); // $ExpectError
	laplace.factory( 8, ( x: number ): number => x ); // $ExpectError

	laplace.factory( true, 3, {} ); // $ExpectError
	laplace.factory( false, 2, {} ); // $ExpectError
	laplace.factory( '5', 1, {} ); // $ExpectError
	laplace.factory( [], 1, {} ); // $ExpectError
	laplace.factory( {}, 2, {} ); // $ExpectError
	laplace.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	laplace.factory( 9, true, {} ); // $ExpectError
	laplace.factory( 9, false, {} ); // $ExpectError
	laplace.factory( 5, '5', {} ); // $ExpectError
	laplace.factory( 8, [], {} ); // $ExpectError
	laplace.factory( 9, {}, {} ); // $ExpectError
	laplace.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	laplace.factory( null ); // $ExpectError
	laplace.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	laplace.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	laplace.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	laplace.factory( -2, 2, { 'prng': null } ); // $ExpectError
	laplace.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	laplace.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	laplace.factory( -2, 2, { 'prng': true ); // $ExpectError

	laplace.factory( { 'prng': 123 } ); // $ExpectError
	laplace.factory( { 'prng': 'abc' } ); // $ExpectError
	laplace.factory( { 'prng': null } ); // $ExpectError
	laplace.factory( { 'prng': [] } ); // $ExpectError
	laplace.factory( { 'prng': {} } ); // $ExpectError
	laplace.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	laplace.factory( -2, 2, { 'seed': true } ); // $ExpectError
	laplace.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	laplace.factory( -2, 2, { 'seed': null } ); // $ExpectError
	laplace.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	laplace.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	laplace.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	laplace.factory( { 'seed': true } ); // $ExpectError
	laplace.factory( { 'seed': 'abc' } ); // $ExpectError
	laplace.factory( { 'seed': null } ); // $ExpectError
	laplace.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	laplace.factory( { 'seed': {} } ); // $ExpectError
	laplace.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	laplace.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	laplace.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	laplace.factory( -2, 2, { 'state': null } ); // $ExpectError
	laplace.factory( -2, 2, { 'state': [] } ); // $ExpectError
	laplace.factory( -2, 2, { 'state': {} } ); // $ExpectError
	laplace.factory( -2, 2, { 'state': true ); // $ExpectError
	laplace.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	laplace.factory( { 'state': 123 } ); // $ExpectError
	laplace.factory( { 'state': 'abc' } ); // $ExpectError
	laplace.factory( { 'state': null } ); // $ExpectError
	laplace.factory( { 'state': [] } ); // $ExpectError
	laplace.factory( { 'state': {} } ); // $ExpectError
	laplace.factory( { 'state': true ); // $ExpectError
	laplace.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	laplace.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	laplace.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	laplace.factory( -2, 2, { 'copy': null } ); // $ExpectError
	laplace.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	laplace.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	laplace.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	laplace.factory( { 'copy': 123 } ); // $ExpectError
	laplace.factory( { 'copy': 'abc' } ); // $ExpectError
	laplace.factory( { 'copy': null } ); // $ExpectError
	laplace.factory( { 'copy': [] } ); // $ExpectError
	laplace.factory( { 'copy': {} } ); // $ExpectError
	laplace.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	laplace.factory( 2, 4, {}, 2 ); // $ExpectError
}
