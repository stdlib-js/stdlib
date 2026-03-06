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

import logistic = require( './index' );


// TESTS //

// The function returns a number...
{
	logistic( 2, 3 ); // $ExpectType number
	logistic( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	logistic( true, 3 ); // $ExpectError
	logistic( false, 2 ); // $ExpectError
	logistic( '5', 1 ); // $ExpectError
	logistic( [], 1 ); // $ExpectError
	logistic( {}, 2 ); // $ExpectError
	logistic( ( x: number ): number => x, 2 ); // $ExpectError

	logistic( 9, true ); // $ExpectError
	logistic( 9, false ); // $ExpectError
	logistic( 5, '5' ); // $ExpectError
	logistic( 8, [] ); // $ExpectError
	logistic( 9, {} ); // $ExpectError
	logistic( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logistic(); // $ExpectError
	logistic( 2 ); // $ExpectError
	logistic( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	logistic.factory( -2, 2 ); // $ExpectType NullaryFunction
	logistic.factory(); // $ExpectType BinaryFunction
	logistic.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = logistic.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = logistic.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = logistic.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = logistic.factory();
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
	const fcn1 = logistic.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = logistic.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	logistic.factory( true, 3 ); // $ExpectError
	logistic.factory( false, 2 ); // $ExpectError
	logistic.factory( '5', 1 ); // $ExpectError
	logistic.factory( [], 1 ); // $ExpectError
	logistic.factory( {}, 2 ); // $ExpectError
	logistic.factory( ( x: number ): number => x, 2 ); // $ExpectError

	logistic.factory( 9, true ); // $ExpectError
	logistic.factory( 9, false ); // $ExpectError
	logistic.factory( 5, '5' ); // $ExpectError
	logistic.factory( 8, [] ); // $ExpectError
	logistic.factory( 9, {} ); // $ExpectError
	logistic.factory( 8, ( x: number ): number => x ); // $ExpectError

	logistic.factory( true, 3, {} ); // $ExpectError
	logistic.factory( false, 2, {} ); // $ExpectError
	logistic.factory( '5', 1, {} ); // $ExpectError
	logistic.factory( [], 1, {} ); // $ExpectError
	logistic.factory( {}, 2, {} ); // $ExpectError
	logistic.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	logistic.factory( 9, true, {} ); // $ExpectError
	logistic.factory( 9, false, {} ); // $ExpectError
	logistic.factory( 5, '5', {} ); // $ExpectError
	logistic.factory( 8, [], {} ); // $ExpectError
	logistic.factory( 9, {}, {} ); // $ExpectError
	logistic.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	logistic.factory( null ); // $ExpectError
	logistic.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	logistic.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	logistic.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	logistic.factory( -2, 2, { 'prng': null } ); // $ExpectError
	logistic.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	logistic.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	logistic.factory( -2, 2, { 'prng': true ); // $ExpectError

	logistic.factory( { 'prng': 123 } ); // $ExpectError
	logistic.factory( { 'prng': 'abc' } ); // $ExpectError
	logistic.factory( { 'prng': null } ); // $ExpectError
	logistic.factory( { 'prng': [] } ); // $ExpectError
	logistic.factory( { 'prng': {} } ); // $ExpectError
	logistic.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	logistic.factory( -2, 2, { 'seed': true } ); // $ExpectError
	logistic.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	logistic.factory( -2, 2, { 'seed': null } ); // $ExpectError
	logistic.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	logistic.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	logistic.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	logistic.factory( { 'seed': true } ); // $ExpectError
	logistic.factory( { 'seed': 'abc' } ); // $ExpectError
	logistic.factory( { 'seed': null } ); // $ExpectError
	logistic.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	logistic.factory( { 'seed': {} } ); // $ExpectError
	logistic.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	logistic.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	logistic.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	logistic.factory( -2, 2, { 'state': null } ); // $ExpectError
	logistic.factory( -2, 2, { 'state': [] } ); // $ExpectError
	logistic.factory( -2, 2, { 'state': {} } ); // $ExpectError
	logistic.factory( -2, 2, { 'state': true ); // $ExpectError
	logistic.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	logistic.factory( { 'state': 123 } ); // $ExpectError
	logistic.factory( { 'state': 'abc' } ); // $ExpectError
	logistic.factory( { 'state': null } ); // $ExpectError
	logistic.factory( { 'state': [] } ); // $ExpectError
	logistic.factory( { 'state': {} } ); // $ExpectError
	logistic.factory( { 'state': true ); // $ExpectError
	logistic.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	logistic.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	logistic.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	logistic.factory( -2, 2, { 'copy': null } ); // $ExpectError
	logistic.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	logistic.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	logistic.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	logistic.factory( { 'copy': 123 } ); // $ExpectError
	logistic.factory( { 'copy': 'abc' } ); // $ExpectError
	logistic.factory( { 'copy': null } ); // $ExpectError
	logistic.factory( { 'copy': [] } ); // $ExpectError
	logistic.factory( { 'copy': {} } ); // $ExpectError
	logistic.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	logistic.factory( 2, 4, {}, 2 ); // $ExpectError
}
