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

import binomial = require( './index' );


// TESTS //

// The function returns a number...
{
	binomial( 2, 0.3 ); // $ExpectType number
	binomial( 10, 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	binomial( true, 0.3 ); // $ExpectError
	binomial( false, 0.2 ); // $ExpectError
	binomial( '5', 0.1 ); // $ExpectError
	binomial( [], 0.1 ); // $ExpectError
	binomial( {}, 0.2 ); // $ExpectError
	binomial( ( x: number ): number => x, 0.2 ); // $ExpectError

	binomial( 9, true ); // $ExpectError
	binomial( 9, false ); // $ExpectError
	binomial( 5, '5' ); // $ExpectError
	binomial( 8, [] ); // $ExpectError
	binomial( 9, {} ); // $ExpectError
	binomial( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	binomial(); // $ExpectError
	binomial( 2 ); // $ExpectError
	binomial( 2, 0.2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	binomial.factory( 20, 0.2 ); // $ExpectType NullaryFunction
	binomial.factory(); // $ExpectType BinaryFunction
	binomial.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = binomial.factory( 20, 0.2 );
	fcn1(); // $ExpectType number

	const fcn2 = binomial.factory();
	fcn2( 20, 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = binomial.factory( 2, 0.4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = binomial.factory();
	fcn2( true, 0.2 ); // $ExpectError
	fcn2( false, 0.2 ); // $ExpectError
	fcn2( '5', 0.2 ); // $ExpectError
	fcn2( [], 0.2 ); // $ExpectError
	fcn2( {}, 0.2 ); // $ExpectError
	fcn2( ( x: number ): number => x, 0.2 ); // $ExpectError

	fcn2( 1, true ); // $ExpectError
	fcn2( 1, false ); // $ExpectError
	fcn2( 1, '5' ); // $ExpectError
	fcn2( 1, [] ); // $ExpectError
	fcn2( 1, {} ); // $ExpectError
	fcn2( 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = binomial.factory( 2, 0.2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = binomial.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 0.1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	binomial.factory( true, 0.3 ); // $ExpectError
	binomial.factory( false, 0.2 ); // $ExpectError
	binomial.factory( '5', 0.1 ); // $ExpectError
	binomial.factory( [], 0.1 ); // $ExpectError
	binomial.factory( {}, 0.2 ); // $ExpectError
	binomial.factory( ( x: number ): number => x, 0.2 ); // $ExpectError

	binomial.factory( 9, true ); // $ExpectError
	binomial.factory( 9, false ); // $ExpectError
	binomial.factory( 5, '5' ); // $ExpectError
	binomial.factory( 8, [] ); // $ExpectError
	binomial.factory( 9, {} ); // $ExpectError
	binomial.factory( 8, ( x: number ): number => x ); // $ExpectError

	binomial.factory( true, 0.3, {} ); // $ExpectError
	binomial.factory( false, 0.2, {} ); // $ExpectError
	binomial.factory( '5', 0.1, {} ); // $ExpectError
	binomial.factory( [], 0.1, {} ); // $ExpectError
	binomial.factory( {}, 0.2, {} ); // $ExpectError
	binomial.factory( ( x: number ): number => x, 0.2, {} ); // $ExpectError

	binomial.factory( 9, true, {} ); // $ExpectError
	binomial.factory( 9, false, {} ); // $ExpectError
	binomial.factory( 5, '5', {} ); // $ExpectError
	binomial.factory( 8, [], {} ); // $ExpectError
	binomial.factory( 9, {}, {} ); // $ExpectError
	binomial.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	binomial.factory( null ); // $ExpectError
	binomial.factory( 20, 0.2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	binomial.factory( 20, 0.3, { 'prng': 123 } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'prng': 'abc' } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'prng': null } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'prng': [] } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'prng': {} } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'prng': true ); // $ExpectError

	binomial.factory( { 'prng': 123 } ); // $ExpectError
	binomial.factory( { 'prng': 'abc' } ); // $ExpectError
	binomial.factory( { 'prng': null } ); // $ExpectError
	binomial.factory( { 'prng': [] } ); // $ExpectError
	binomial.factory( { 'prng': {} } ); // $ExpectError
	binomial.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	binomial.factory( 20, 0.3, { 'seed': true } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'seed': 'abc' } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'seed': null } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'seed': [ 'a' ] } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'seed': {} } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	binomial.factory( { 'seed': true } ); // $ExpectError
	binomial.factory( { 'seed': 'abc' } ); // $ExpectError
	binomial.factory( { 'seed': null } ); // $ExpectError
	binomial.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	binomial.factory( { 'seed': {} } ); // $ExpectError
	binomial.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	binomial.factory( 20, 0.3, { 'state': 123 } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'state': 'abc' } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'state': null } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'state': [] } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'state': {} } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'state': true ); // $ExpectError
	binomial.factory( 20, 0.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	binomial.factory( { 'state': 123 } ); // $ExpectError
	binomial.factory( { 'state': 'abc' } ); // $ExpectError
	binomial.factory( { 'state': null } ); // $ExpectError
	binomial.factory( { 'state': [] } ); // $ExpectError
	binomial.factory( { 'state': {} } ); // $ExpectError
	binomial.factory( { 'state': true ); // $ExpectError
	binomial.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	binomial.factory( 20, 0.3, { 'copy': 123 } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'copy': 'abc' } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'copy': null } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'copy': [] } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'copy': {} } ); // $ExpectError
	binomial.factory( 20, 0.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	binomial.factory( { 'copy': 123 } ); // $ExpectError
	binomial.factory( { 'copy': 'abc' } ); // $ExpectError
	binomial.factory( { 'copy': null } ); // $ExpectError
	binomial.factory( { 'copy': [] } ); // $ExpectError
	binomial.factory( { 'copy': {} } ); // $ExpectError
	binomial.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	binomial.factory( 20, 0.4, {}, 2 ); // $ExpectError
}
