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

import bernoulli = require( './index' );


// TESTS //

// The function returns a number...
{
	bernoulli( 0.3 ); // $ExpectType number
	bernoulli( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	bernoulli( true ); // $ExpectError
	bernoulli( false ); // $ExpectError
	bernoulli( '5' ); // $ExpectError
	bernoulli( [] ); // $ExpectError
	bernoulli( {} ); // $ExpectError
	bernoulli( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	bernoulli(); // $ExpectError
	bernoulli( 0.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	bernoulli.factory( 0.3 ); // $ExpectType NullaryFunction
	bernoulli.factory(); // $ExpectType BinaryFunction
	bernoulli.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = bernoulli.factory( 0.3 );
	fcn1(); // $ExpectType number

	const fcn2 = bernoulli.factory();
	fcn2( 0.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = bernoulli.factory( 0.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = bernoulli.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = bernoulli.factory( 0.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = bernoulli.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	bernoulli.factory( true, {} ); // $ExpectError
	bernoulli.factory( false, {} ); // $ExpectError
	bernoulli.factory( '5', {} ); // $ExpectError
	bernoulli.factory( [], {} ); // $ExpectError
	bernoulli.factory( {}, {} ); // $ExpectError
	bernoulli.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	bernoulli.factory( null ); // $ExpectError
	bernoulli.factory( 0.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	bernoulli.factory( 0.3, { 'prng': 123 } ); // $ExpectError
	bernoulli.factory( 0.3, { 'prng': 'abc' } ); // $ExpectError
	bernoulli.factory( 0.3, { 'prng': null } ); // $ExpectError
	bernoulli.factory( 0.3, { 'prng': [] } ); // $ExpectError
	bernoulli.factory( 0.3, { 'prng': {} } ); // $ExpectError
	bernoulli.factory( 0.3, { 'prng': true ); // $ExpectError

	bernoulli.factory( { 'prng': 123 } ); // $ExpectError
	bernoulli.factory( { 'prng': 'abc' } ); // $ExpectError
	bernoulli.factory( { 'prng': null } ); // $ExpectError
	bernoulli.factory( { 'prng': [] } ); // $ExpectError
	bernoulli.factory( { 'prng': {} } ); // $ExpectError
	bernoulli.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	bernoulli.factory( 0.3, { 'seed': true } ); // $ExpectError
	bernoulli.factory( 0.3, { 'seed': 'abc' } ); // $ExpectError
	bernoulli.factory( 0.3, { 'seed': null } ); // $ExpectError
	bernoulli.factory( 0.3, { 'seed': [ 'a' ] } ); // $ExpectError
	bernoulli.factory( 0.3, { 'seed': {} } ); // $ExpectError
	bernoulli.factory( 0.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	bernoulli.factory( { 'seed': true } ); // $ExpectError
	bernoulli.factory( { 'seed': 'abc' } ); // $ExpectError
	bernoulli.factory( { 'seed': null } ); // $ExpectError
	bernoulli.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	bernoulli.factory( { 'seed': {} } ); // $ExpectError
	bernoulli.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	bernoulli.factory( 0.3, { 'state': 123 } ); // $ExpectError
	bernoulli.factory( 0.3, { 'state': 'abc' } ); // $ExpectError
	bernoulli.factory( 0.3, { 'state': null } ); // $ExpectError
	bernoulli.factory( 0.3, { 'state': [] } ); // $ExpectError
	bernoulli.factory( 0.3, { 'state': {} } ); // $ExpectError
	bernoulli.factory( 0.3, { 'state': true ); // $ExpectError
	bernoulli.factory( 0.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	bernoulli.factory( { 'state': 123 } ); // $ExpectError
	bernoulli.factory( { 'state': 'abc' } ); // $ExpectError
	bernoulli.factory( { 'state': null } ); // $ExpectError
	bernoulli.factory( { 'state': [] } ); // $ExpectError
	bernoulli.factory( { 'state': {} } ); // $ExpectError
	bernoulli.factory( { 'state': true ); // $ExpectError
	bernoulli.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	bernoulli.factory( 0.3, { 'copy': 123 } ); // $ExpectError
	bernoulli.factory( 0.3, { 'copy': 'abc' } ); // $ExpectError
	bernoulli.factory( 0.3, { 'copy': null } ); // $ExpectError
	bernoulli.factory( 0.3, { 'copy': [] } ); // $ExpectError
	bernoulli.factory( 0.3, { 'copy': {} } ); // $ExpectError
	bernoulli.factory( 0.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	bernoulli.factory( { 'copy': 123 } ); // $ExpectError
	bernoulli.factory( { 'copy': 'abc' } ); // $ExpectError
	bernoulli.factory( { 'copy': null } ); // $ExpectError
	bernoulli.factory( { 'copy': [] } ); // $ExpectError
	bernoulli.factory( { 'copy': {} } ); // $ExpectError
	bernoulli.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	bernoulli.factory( 0.2, {}, 2 ); // $ExpectError
}
