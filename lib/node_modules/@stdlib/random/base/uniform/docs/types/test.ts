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

import uniform = require( './index' );


// TESTS //

// The function returns a number...
{
	uniform( 2, 3 ); // $ExpectType number
	uniform( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	uniform( true, 3 ); // $ExpectError
	uniform( false, 2 ); // $ExpectError
	uniform( '5', 1 ); // $ExpectError
	uniform( [], 1 ); // $ExpectError
	uniform( {}, 2 ); // $ExpectError
	uniform( ( x: number ): number => x, 2 ); // $ExpectError

	uniform( 9, true ); // $ExpectError
	uniform( 9, false ); // $ExpectError
	uniform( 5, '5' ); // $ExpectError
	uniform( 8, [] ); // $ExpectError
	uniform( 9, {} ); // $ExpectError
	uniform( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	uniform(); // $ExpectError
	uniform( 2 ); // $ExpectError
	uniform( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	uniform.factory( -2, 2 ); // $ExpectType NullaryFunction
	uniform.factory(); // $ExpectType BinaryFunction
	uniform.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = uniform.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = uniform.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = uniform.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = uniform.factory();
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
	const fcn1 = uniform.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = uniform.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	uniform.factory( true, 3 ); // $ExpectError
	uniform.factory( false, 2 ); // $ExpectError
	uniform.factory( '5', 1 ); // $ExpectError
	uniform.factory( [], 1 ); // $ExpectError
	uniform.factory( {}, 2 ); // $ExpectError
	uniform.factory( ( x: number ): number => x, 2 ); // $ExpectError

	uniform.factory( 9, true ); // $ExpectError
	uniform.factory( 9, false ); // $ExpectError
	uniform.factory( 5, '5' ); // $ExpectError
	uniform.factory( 8, [] ); // $ExpectError
	uniform.factory( 9, {} ); // $ExpectError
	uniform.factory( 8, ( x: number ): number => x ); // $ExpectError

	uniform.factory( true, 3, {} ); // $ExpectError
	uniform.factory( false, 2, {} ); // $ExpectError
	uniform.factory( '5', 1, {} ); // $ExpectError
	uniform.factory( [], 1, {} ); // $ExpectError
	uniform.factory( {}, 2, {} ); // $ExpectError
	uniform.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	uniform.factory( 9, true, {} ); // $ExpectError
	uniform.factory( 9, false, {} ); // $ExpectError
	uniform.factory( 5, '5', {} ); // $ExpectError
	uniform.factory( 8, [], {} ); // $ExpectError
	uniform.factory( 9, {}, {} ); // $ExpectError
	uniform.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	uniform.factory( null ); // $ExpectError
	uniform.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	uniform.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	uniform.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	uniform.factory( -2, 2, { 'prng': null } ); // $ExpectError
	uniform.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	uniform.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	uniform.factory( -2, 2, { 'prng': true ); // $ExpectError

	uniform.factory( { 'prng': 123 } ); // $ExpectError
	uniform.factory( { 'prng': 'abc' } ); // $ExpectError
	uniform.factory( { 'prng': null } ); // $ExpectError
	uniform.factory( { 'prng': [] } ); // $ExpectError
	uniform.factory( { 'prng': {} } ); // $ExpectError
	uniform.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	uniform.factory( -2, 2, { 'seed': true } ); // $ExpectError
	uniform.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	uniform.factory( -2, 2, { 'seed': null } ); // $ExpectError
	uniform.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	uniform.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	uniform.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'seed': true } ); // $ExpectError
	uniform.factory( { 'seed': 'abc' } ); // $ExpectError
	uniform.factory( { 'seed': null } ); // $ExpectError
	uniform.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	uniform.factory( { 'seed': {} } ); // $ExpectError
	uniform.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	uniform.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	uniform.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	uniform.factory( -2, 2, { 'state': null } ); // $ExpectError
	uniform.factory( -2, 2, { 'state': [] } ); // $ExpectError
	uniform.factory( -2, 2, { 'state': {} } ); // $ExpectError
	uniform.factory( -2, 2, { 'state': true ); // $ExpectError
	uniform.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'state': 123 } ); // $ExpectError
	uniform.factory( { 'state': 'abc' } ); // $ExpectError
	uniform.factory( { 'state': null } ); // $ExpectError
	uniform.factory( { 'state': [] } ); // $ExpectError
	uniform.factory( { 'state': {} } ); // $ExpectError
	uniform.factory( { 'state': true ); // $ExpectError
	uniform.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	uniform.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	uniform.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	uniform.factory( -2, 2, { 'copy': null } ); // $ExpectError
	uniform.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	uniform.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	uniform.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'copy': 123 } ); // $ExpectError
	uniform.factory( { 'copy': 'abc' } ); // $ExpectError
	uniform.factory( { 'copy': null } ); // $ExpectError
	uniform.factory( { 'copy': [] } ); // $ExpectError
	uniform.factory( { 'copy': {} } ); // $ExpectError
	uniform.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	uniform.factory( 2, 4, {}, 2 ); // $ExpectError
}
