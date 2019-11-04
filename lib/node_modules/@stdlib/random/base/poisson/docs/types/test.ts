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

import poisson = require( './index' );


// TESTS //

// The function returns a number...
{
	poisson( 2.3 ); // $ExpectType number
	poisson( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	poisson( true ); // $ExpectError
	poisson( false ); // $ExpectError
	poisson( '5' ); // $ExpectError
	poisson( [] ); // $ExpectError
	poisson( {} ); // $ExpectError
	poisson( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	poisson(); // $ExpectError
	poisson( 2.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	poisson.factory( 2.3 ); // $ExpectType NullaryFunction
	poisson.factory(); // $ExpectType BinaryFunction
	poisson.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = poisson.factory( 2.3 );
	fcn1(); // $ExpectType number

	const fcn2 = poisson.factory();
	fcn2( 2.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = poisson.factory( 2.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = poisson.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = poisson.factory( 2.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = poisson.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	poisson.factory( true, {} ); // $ExpectError
	poisson.factory( false, {} ); // $ExpectError
	poisson.factory( '5', {} ); // $ExpectError
	poisson.factory( [], {} ); // $ExpectError
	poisson.factory( {}, {} ); // $ExpectError
	poisson.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	poisson.factory( null ); // $ExpectError
	poisson.factory( 2.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	poisson.factory( 2.3, { 'prng': 123 } ); // $ExpectError
	poisson.factory( 2.3, { 'prng': 'abc' } ); // $ExpectError
	poisson.factory( 2.3, { 'prng': null } ); // $ExpectError
	poisson.factory( 2.3, { 'prng': [] } ); // $ExpectError
	poisson.factory( 2.3, { 'prng': {} } ); // $ExpectError
	poisson.factory( 2.3, { 'prng': true ); // $ExpectError

	poisson.factory( { 'prng': 123 } ); // $ExpectError
	poisson.factory( { 'prng': 'abc' } ); // $ExpectError
	poisson.factory( { 'prng': null } ); // $ExpectError
	poisson.factory( { 'prng': [] } ); // $ExpectError
	poisson.factory( { 'prng': {} } ); // $ExpectError
	poisson.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	poisson.factory( 2.3, { 'seed': true } ); // $ExpectError
	poisson.factory( 2.3, { 'seed': 'abc' } ); // $ExpectError
	poisson.factory( 2.3, { 'seed': null } ); // $ExpectError
	poisson.factory( 2.3, { 'seed': [ 'a' ] } ); // $ExpectError
	poisson.factory( 2.3, { 'seed': {} } ); // $ExpectError
	poisson.factory( 2.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	poisson.factory( { 'seed': true } ); // $ExpectError
	poisson.factory( { 'seed': 'abc' } ); // $ExpectError
	poisson.factory( { 'seed': null } ); // $ExpectError
	poisson.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	poisson.factory( { 'seed': {} } ); // $ExpectError
	poisson.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	poisson.factory( 2.3, { 'state': 123 } ); // $ExpectError
	poisson.factory( 2.3, { 'state': 'abc' } ); // $ExpectError
	poisson.factory( 2.3, { 'state': null } ); // $ExpectError
	poisson.factory( 2.3, { 'state': [] } ); // $ExpectError
	poisson.factory( 2.3, { 'state': {} } ); // $ExpectError
	poisson.factory( 2.3, { 'state': true ); // $ExpectError
	poisson.factory( 2.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	poisson.factory( { 'state': 123 } ); // $ExpectError
	poisson.factory( { 'state': 'abc' } ); // $ExpectError
	poisson.factory( { 'state': null } ); // $ExpectError
	poisson.factory( { 'state': [] } ); // $ExpectError
	poisson.factory( { 'state': {} } ); // $ExpectError
	poisson.factory( { 'state': true ); // $ExpectError
	poisson.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	poisson.factory( 2.3, { 'copy': 123 } ); // $ExpectError
	poisson.factory( 2.3, { 'copy': 'abc' } ); // $ExpectError
	poisson.factory( 2.3, { 'copy': null } ); // $ExpectError
	poisson.factory( 2.3, { 'copy': [] } ); // $ExpectError
	poisson.factory( 2.3, { 'copy': {} } ); // $ExpectError
	poisson.factory( 2.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	poisson.factory( { 'copy': 123 } ); // $ExpectError
	poisson.factory( { 'copy': 'abc' } ); // $ExpectError
	poisson.factory( { 'copy': null } ); // $ExpectError
	poisson.factory( { 'copy': [] } ); // $ExpectError
	poisson.factory( { 'copy': {} } ); // $ExpectError
	poisson.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	poisson.factory( 2, {}, 2 ); // $ExpectError
}
