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

import chisquare = require( './index' );


// TESTS //

// The function returns a number...
{
	chisquare( 2.3 ); // $ExpectType number
	chisquare( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	chisquare( true ); // $ExpectError
	chisquare( false ); // $ExpectError
	chisquare( '5' ); // $ExpectError
	chisquare( [] ); // $ExpectError
	chisquare( {} ); // $ExpectError
	chisquare( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	chisquare(); // $ExpectError
	chisquare( 2.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	chisquare.factory( 2.3 ); // $ExpectType NullaryFunction
	chisquare.factory(); // $ExpectType BinaryFunction
	chisquare.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = chisquare.factory( 2.3 );
	fcn1(); // $ExpectType number

	const fcn2 = chisquare.factory();
	fcn2( 2.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = chisquare.factory( 2.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = chisquare.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = chisquare.factory( 2.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = chisquare.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	chisquare.factory( true, {} ); // $ExpectError
	chisquare.factory( false, {} ); // $ExpectError
	chisquare.factory( '5', {} ); // $ExpectError
	chisquare.factory( [], {} ); // $ExpectError
	chisquare.factory( {}, {} ); // $ExpectError
	chisquare.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	chisquare.factory( null ); // $ExpectError
	chisquare.factory( 2.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	chisquare.factory( 2.3, { 'prng': 123 } ); // $ExpectError
	chisquare.factory( 2.3, { 'prng': 'abc' } ); // $ExpectError
	chisquare.factory( 2.3, { 'prng': null } ); // $ExpectError
	chisquare.factory( 2.3, { 'prng': [] } ); // $ExpectError
	chisquare.factory( 2.3, { 'prng': {} } ); // $ExpectError
	chisquare.factory( 2.3, { 'prng': true ); // $ExpectError

	chisquare.factory( { 'prng': 123 } ); // $ExpectError
	chisquare.factory( { 'prng': 'abc' } ); // $ExpectError
	chisquare.factory( { 'prng': null } ); // $ExpectError
	chisquare.factory( { 'prng': [] } ); // $ExpectError
	chisquare.factory( { 'prng': {} } ); // $ExpectError
	chisquare.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	chisquare.factory( 2.3, { 'seed': true } ); // $ExpectError
	chisquare.factory( 2.3, { 'seed': 'abc' } ); // $ExpectError
	chisquare.factory( 2.3, { 'seed': null } ); // $ExpectError
	chisquare.factory( 2.3, { 'seed': [ 'a' ] } ); // $ExpectError
	chisquare.factory( 2.3, { 'seed': {} } ); // $ExpectError
	chisquare.factory( 2.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	chisquare.factory( { 'seed': true } ); // $ExpectError
	chisquare.factory( { 'seed': 'abc' } ); // $ExpectError
	chisquare.factory( { 'seed': null } ); // $ExpectError
	chisquare.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	chisquare.factory( { 'seed': {} } ); // $ExpectError
	chisquare.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	chisquare.factory( 2.3, { 'state': 123 } ); // $ExpectError
	chisquare.factory( 2.3, { 'state': 'abc' } ); // $ExpectError
	chisquare.factory( 2.3, { 'state': null } ); // $ExpectError
	chisquare.factory( 2.3, { 'state': [] } ); // $ExpectError
	chisquare.factory( 2.3, { 'state': {} } ); // $ExpectError
	chisquare.factory( 2.3, { 'state': true ); // $ExpectError
	chisquare.factory( 2.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	chisquare.factory( { 'state': 123 } ); // $ExpectError
	chisquare.factory( { 'state': 'abc' } ); // $ExpectError
	chisquare.factory( { 'state': null } ); // $ExpectError
	chisquare.factory( { 'state': [] } ); // $ExpectError
	chisquare.factory( { 'state': {} } ); // $ExpectError
	chisquare.factory( { 'state': true ); // $ExpectError
	chisquare.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	chisquare.factory( 2.3, { 'copy': 123 } ); // $ExpectError
	chisquare.factory( 2.3, { 'copy': 'abc' } ); // $ExpectError
	chisquare.factory( 2.3, { 'copy': null } ); // $ExpectError
	chisquare.factory( 2.3, { 'copy': [] } ); // $ExpectError
	chisquare.factory( 2.3, { 'copy': {} } ); // $ExpectError
	chisquare.factory( 2.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	chisquare.factory( { 'copy': 123 } ); // $ExpectError
	chisquare.factory( { 'copy': 'abc' } ); // $ExpectError
	chisquare.factory( { 'copy': null } ); // $ExpectError
	chisquare.factory( { 'copy': [] } ); // $ExpectError
	chisquare.factory( { 'copy': {} } ); // $ExpectError
	chisquare.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	chisquare.factory( 2, {}, 2 ); // $ExpectError
}
