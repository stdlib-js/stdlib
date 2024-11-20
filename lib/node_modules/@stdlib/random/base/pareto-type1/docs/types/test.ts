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

import pareto1 = require( './index' );


// TESTS //

// The function returns a number...
{
	pareto1( 2, 3 ); // $ExpectType number
	pareto1( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	pareto1( true, 3 ); // $ExpectError
	pareto1( false, 2 ); // $ExpectError
	pareto1( '5', 1 ); // $ExpectError
	pareto1( [], 1 ); // $ExpectError
	pareto1( {}, 2 ); // $ExpectError
	pareto1( ( x: number ): number => x, 2 ); // $ExpectError

	pareto1( 9, true ); // $ExpectError
	pareto1( 9, false ); // $ExpectError
	pareto1( 5, '5' ); // $ExpectError
	pareto1( 8, [] ); // $ExpectError
	pareto1( 9, {} ); // $ExpectError
	pareto1( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	pareto1(); // $ExpectError
	pareto1( 2 ); // $ExpectError
	pareto1( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	pareto1.factory( 2, 2 ); // $ExpectType NullaryFunction
	pareto1.factory(); // $ExpectType BinaryFunction
	pareto1.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = pareto1.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = pareto1.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = pareto1.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = pareto1.factory();
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
	const fcn1 = pareto1.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = pareto1.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	pareto1.factory( true, 3 ); // $ExpectError
	pareto1.factory( false, 2 ); // $ExpectError
	pareto1.factory( '5', 1 ); // $ExpectError
	pareto1.factory( [], 1 ); // $ExpectError
	pareto1.factory( {}, 2 ); // $ExpectError
	pareto1.factory( ( x: number ): number => x, 2 ); // $ExpectError

	pareto1.factory( 9, true ); // $ExpectError
	pareto1.factory( 9, false ); // $ExpectError
	pareto1.factory( 5, '5' ); // $ExpectError
	pareto1.factory( 8, [] ); // $ExpectError
	pareto1.factory( 9, {} ); // $ExpectError
	pareto1.factory( 8, ( x: number ): number => x ); // $ExpectError

	pareto1.factory( true, 3, {} ); // $ExpectError
	pareto1.factory( false, 2, {} ); // $ExpectError
	pareto1.factory( '5', 1, {} ); // $ExpectError
	pareto1.factory( [], 1, {} ); // $ExpectError
	pareto1.factory( {}, 2, {} ); // $ExpectError
	pareto1.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	pareto1.factory( 9, true, {} ); // $ExpectError
	pareto1.factory( 9, false, {} ); // $ExpectError
	pareto1.factory( 5, '5', {} ); // $ExpectError
	pareto1.factory( 8, [], {} ); // $ExpectError
	pareto1.factory( 9, {}, {} ); // $ExpectError
	pareto1.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	pareto1.factory( null ); // $ExpectError
	pareto1.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	pareto1.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	pareto1.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	pareto1.factory( 2, 2, { 'prng': null } ); // $ExpectError
	pareto1.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	pareto1.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	pareto1.factory( 2, 2, { 'prng': true ); // $ExpectError

	pareto1.factory( { 'prng': 123 } ); // $ExpectError
	pareto1.factory( { 'prng': 'abc' } ); // $ExpectError
	pareto1.factory( { 'prng': null } ); // $ExpectError
	pareto1.factory( { 'prng': [] } ); // $ExpectError
	pareto1.factory( { 'prng': {} } ); // $ExpectError
	pareto1.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	pareto1.factory( 2, 2, { 'seed': true } ); // $ExpectError
	pareto1.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	pareto1.factory( 2, 2, { 'seed': null } ); // $ExpectError
	pareto1.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	pareto1.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	pareto1.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	pareto1.factory( { 'seed': true } ); // $ExpectError
	pareto1.factory( { 'seed': 'abc' } ); // $ExpectError
	pareto1.factory( { 'seed': null } ); // $ExpectError
	pareto1.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	pareto1.factory( { 'seed': {} } ); // $ExpectError
	pareto1.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	pareto1.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	pareto1.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	pareto1.factory( 2, 2, { 'state': null } ); // $ExpectError
	pareto1.factory( 2, 2, { 'state': [] } ); // $ExpectError
	pareto1.factory( 2, 2, { 'state': {} } ); // $ExpectError
	pareto1.factory( 2, 2, { 'state': true ); // $ExpectError
	pareto1.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	pareto1.factory( { 'state': 123 } ); // $ExpectError
	pareto1.factory( { 'state': 'abc' } ); // $ExpectError
	pareto1.factory( { 'state': null } ); // $ExpectError
	pareto1.factory( { 'state': [] } ); // $ExpectError
	pareto1.factory( { 'state': {} } ); // $ExpectError
	pareto1.factory( { 'state': true ); // $ExpectError
	pareto1.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	pareto1.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	pareto1.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	pareto1.factory( 2, 2, { 'copy': null } ); // $ExpectError
	pareto1.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	pareto1.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	pareto1.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	pareto1.factory( { 'copy': 123 } ); // $ExpectError
	pareto1.factory( { 'copy': 'abc' } ); // $ExpectError
	pareto1.factory( { 'copy': null } ); // $ExpectError
	pareto1.factory( { 'copy': [] } ); // $ExpectError
	pareto1.factory( { 'copy': {} } ); // $ExpectError
	pareto1.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	pareto1.factory( 2, 4, {}, 2 ); // $ExpectError
}
