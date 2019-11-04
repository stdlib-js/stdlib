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

import exponential = require( './index' );


// TESTS //

// The function returns a number...
{
	exponential( 2.3 ); // $ExpectType number
	exponential( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	exponential( true ); // $ExpectError
	exponential( false ); // $ExpectError
	exponential( '5' ); // $ExpectError
	exponential( [] ); // $ExpectError
	exponential( {} ); // $ExpectError
	exponential( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	exponential(); // $ExpectError
	exponential( 2.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	exponential.factory( 2.3 ); // $ExpectType NullaryFunction
	exponential.factory(); // $ExpectType BinaryFunction
	exponential.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = exponential.factory( 2.3 );
	fcn1(); // $ExpectType number

	const fcn2 = exponential.factory();
	fcn2( 2.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = exponential.factory( 2.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = exponential.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = exponential.factory( 2.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = exponential.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	exponential.factory( true, {} ); // $ExpectError
	exponential.factory( false, {} ); // $ExpectError
	exponential.factory( '5', {} ); // $ExpectError
	exponential.factory( [], {} ); // $ExpectError
	exponential.factory( {}, {} ); // $ExpectError
	exponential.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	exponential.factory( null ); // $ExpectError
	exponential.factory( 2.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	exponential.factory( 2.3, { 'prng': 123 } ); // $ExpectError
	exponential.factory( 2.3, { 'prng': 'abc' } ); // $ExpectError
	exponential.factory( 2.3, { 'prng': null } ); // $ExpectError
	exponential.factory( 2.3, { 'prng': [] } ); // $ExpectError
	exponential.factory( 2.3, { 'prng': {} } ); // $ExpectError
	exponential.factory( 2.3, { 'prng': true ); // $ExpectError

	exponential.factory( { 'prng': 123 } ); // $ExpectError
	exponential.factory( { 'prng': 'abc' } ); // $ExpectError
	exponential.factory( { 'prng': null } ); // $ExpectError
	exponential.factory( { 'prng': [] } ); // $ExpectError
	exponential.factory( { 'prng': {} } ); // $ExpectError
	exponential.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	exponential.factory( 2.3, { 'seed': true } ); // $ExpectError
	exponential.factory( 2.3, { 'seed': 'abc' } ); // $ExpectError
	exponential.factory( 2.3, { 'seed': null } ); // $ExpectError
	exponential.factory( 2.3, { 'seed': [ 'a' ] } ); // $ExpectError
	exponential.factory( 2.3, { 'seed': {} } ); // $ExpectError
	exponential.factory( 2.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	exponential.factory( { 'seed': true } ); // $ExpectError
	exponential.factory( { 'seed': 'abc' } ); // $ExpectError
	exponential.factory( { 'seed': null } ); // $ExpectError
	exponential.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	exponential.factory( { 'seed': {} } ); // $ExpectError
	exponential.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	exponential.factory( 2.3, { 'state': 123 } ); // $ExpectError
	exponential.factory( 2.3, { 'state': 'abc' } ); // $ExpectError
	exponential.factory( 2.3, { 'state': null } ); // $ExpectError
	exponential.factory( 2.3, { 'state': [] } ); // $ExpectError
	exponential.factory( 2.3, { 'state': {} } ); // $ExpectError
	exponential.factory( 2.3, { 'state': true ); // $ExpectError
	exponential.factory( 2.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	exponential.factory( { 'state': 123 } ); // $ExpectError
	exponential.factory( { 'state': 'abc' } ); // $ExpectError
	exponential.factory( { 'state': null } ); // $ExpectError
	exponential.factory( { 'state': [] } ); // $ExpectError
	exponential.factory( { 'state': {} } ); // $ExpectError
	exponential.factory( { 'state': true ); // $ExpectError
	exponential.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	exponential.factory( 2.3, { 'copy': 123 } ); // $ExpectError
	exponential.factory( 2.3, { 'copy': 'abc' } ); // $ExpectError
	exponential.factory( 2.3, { 'copy': null } ); // $ExpectError
	exponential.factory( 2.3, { 'copy': [] } ); // $ExpectError
	exponential.factory( 2.3, { 'copy': {} } ); // $ExpectError
	exponential.factory( 2.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	exponential.factory( { 'copy': 123 } ); // $ExpectError
	exponential.factory( { 'copy': 'abc' } ); // $ExpectError
	exponential.factory( { 'copy': null } ); // $ExpectError
	exponential.factory( { 'copy': [] } ); // $ExpectError
	exponential.factory( { 'copy': {} } ); // $ExpectError
	exponential.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	exponential.factory( 2, {}, 2 ); // $ExpectError
}
