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

import cauchy = require( './index' );


// TESTS //

// The function returns a number...
{
	cauchy( 2, 3 ); // $ExpectType number
	cauchy( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	cauchy( true, 3 ); // $ExpectError
	cauchy( false, 2 ); // $ExpectError
	cauchy( '5', 1 ); // $ExpectError
	cauchy( [], 1 ); // $ExpectError
	cauchy( {}, 2 ); // $ExpectError
	cauchy( ( x: number ): number => x, 2 ); // $ExpectError

	cauchy( 9, true ); // $ExpectError
	cauchy( 9, false ); // $ExpectError
	cauchy( 5, '5' ); // $ExpectError
	cauchy( 8, [] ); // $ExpectError
	cauchy( 9, {} ); // $ExpectError
	cauchy( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cauchy(); // $ExpectError
	cauchy( 2 ); // $ExpectError
	cauchy( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	cauchy.factory( -2, 2 ); // $ExpectType NullaryFunction
	cauchy.factory(); // $ExpectType BinaryFunction
	cauchy.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = cauchy.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = cauchy.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = cauchy.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = cauchy.factory();
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
	const fcn1 = cauchy.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = cauchy.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	cauchy.factory( true, 3 ); // $ExpectError
	cauchy.factory( false, 2 ); // $ExpectError
	cauchy.factory( '5', 1 ); // $ExpectError
	cauchy.factory( [], 1 ); // $ExpectError
	cauchy.factory( {}, 2 ); // $ExpectError
	cauchy.factory( ( x: number ): number => x, 2 ); // $ExpectError

	cauchy.factory( 9, true ); // $ExpectError
	cauchy.factory( 9, false ); // $ExpectError
	cauchy.factory( 5, '5' ); // $ExpectError
	cauchy.factory( 8, [] ); // $ExpectError
	cauchy.factory( 9, {} ); // $ExpectError
	cauchy.factory( 8, ( x: number ): number => x ); // $ExpectError

	cauchy.factory( true, 3, {} ); // $ExpectError
	cauchy.factory( false, 2, {} ); // $ExpectError
	cauchy.factory( '5', 1, {} ); // $ExpectError
	cauchy.factory( [], 1, {} ); // $ExpectError
	cauchy.factory( {}, 2, {} ); // $ExpectError
	cauchy.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	cauchy.factory( 9, true, {} ); // $ExpectError
	cauchy.factory( 9, false, {} ); // $ExpectError
	cauchy.factory( 5, '5', {} ); // $ExpectError
	cauchy.factory( 8, [], {} ); // $ExpectError
	cauchy.factory( 9, {}, {} ); // $ExpectError
	cauchy.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	cauchy.factory( null ); // $ExpectError
	cauchy.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	cauchy.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	cauchy.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	cauchy.factory( -2, 2, { 'prng': null } ); // $ExpectError
	cauchy.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	cauchy.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	cauchy.factory( -2, 2, { 'prng': true ); // $ExpectError

	cauchy.factory( { 'prng': 123 } ); // $ExpectError
	cauchy.factory( { 'prng': 'abc' } ); // $ExpectError
	cauchy.factory( { 'prng': null } ); // $ExpectError
	cauchy.factory( { 'prng': [] } ); // $ExpectError
	cauchy.factory( { 'prng': {} } ); // $ExpectError
	cauchy.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	cauchy.factory( -2, 2, { 'seed': true } ); // $ExpectError
	cauchy.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	cauchy.factory( -2, 2, { 'seed': null } ); // $ExpectError
	cauchy.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	cauchy.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	cauchy.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	cauchy.factory( { 'seed': true } ); // $ExpectError
	cauchy.factory( { 'seed': 'abc' } ); // $ExpectError
	cauchy.factory( { 'seed': null } ); // $ExpectError
	cauchy.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	cauchy.factory( { 'seed': {} } ); // $ExpectError
	cauchy.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	cauchy.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	cauchy.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	cauchy.factory( -2, 2, { 'state': null } ); // $ExpectError
	cauchy.factory( -2, 2, { 'state': [] } ); // $ExpectError
	cauchy.factory( -2, 2, { 'state': {} } ); // $ExpectError
	cauchy.factory( -2, 2, { 'state': true ); // $ExpectError
	cauchy.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	cauchy.factory( { 'state': 123 } ); // $ExpectError
	cauchy.factory( { 'state': 'abc' } ); // $ExpectError
	cauchy.factory( { 'state': null } ); // $ExpectError
	cauchy.factory( { 'state': [] } ); // $ExpectError
	cauchy.factory( { 'state': {} } ); // $ExpectError
	cauchy.factory( { 'state': true ); // $ExpectError
	cauchy.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	cauchy.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	cauchy.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	cauchy.factory( -2, 2, { 'copy': null } ); // $ExpectError
	cauchy.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	cauchy.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	cauchy.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	cauchy.factory( { 'copy': 123 } ); // $ExpectError
	cauchy.factory( { 'copy': 'abc' } ); // $ExpectError
	cauchy.factory( { 'copy': null } ); // $ExpectError
	cauchy.factory( { 'copy': [] } ); // $ExpectError
	cauchy.factory( { 'copy': {} } ); // $ExpectError
	cauchy.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	cauchy.factory( 2, 4, {}, 2 ); // $ExpectError
}
