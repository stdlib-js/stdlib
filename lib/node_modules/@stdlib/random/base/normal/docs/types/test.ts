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

import normal = require( './index' );


// TESTS //

// The function returns a number...
{
	normal( 2, 3 ); // $ExpectType number
	normal( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	normal( true, 3 ); // $ExpectError
	normal( false, 2 ); // $ExpectError
	normal( '5', 1 ); // $ExpectError
	normal( [], 1 ); // $ExpectError
	normal( {}, 2 ); // $ExpectError
	normal( ( x: number ): number => x, 2 ); // $ExpectError

	normal( 9, true ); // $ExpectError
	normal( 9, false ); // $ExpectError
	normal( 5, '5' ); // $ExpectError
	normal( 8, [] ); // $ExpectError
	normal( 9, {} ); // $ExpectError
	normal( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	normal(); // $ExpectError
	normal( 2 ); // $ExpectError
	normal( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	normal.factory( -2, 2 ); // $ExpectType NullaryFunction
	normal.factory(); // $ExpectType BinaryFunction
	normal.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = normal.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = normal.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = normal.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = normal.factory();
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
	const fcn1 = normal.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = normal.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	normal.factory( true, 3 ); // $ExpectError
	normal.factory( false, 2 ); // $ExpectError
	normal.factory( '5', 1 ); // $ExpectError
	normal.factory( [], 1 ); // $ExpectError
	normal.factory( {}, 2 ); // $ExpectError
	normal.factory( ( x: number ): number => x, 2 ); // $ExpectError

	normal.factory( 9, true ); // $ExpectError
	normal.factory( 9, false ); // $ExpectError
	normal.factory( 5, '5' ); // $ExpectError
	normal.factory( 8, [] ); // $ExpectError
	normal.factory( 9, {} ); // $ExpectError
	normal.factory( 8, ( x: number ): number => x ); // $ExpectError

	normal.factory( true, 3, {} ); // $ExpectError
	normal.factory( false, 2, {} ); // $ExpectError
	normal.factory( '5', 1, {} ); // $ExpectError
	normal.factory( [], 1, {} ); // $ExpectError
	normal.factory( {}, 2, {} ); // $ExpectError
	normal.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	normal.factory( 9, true, {} ); // $ExpectError
	normal.factory( 9, false, {} ); // $ExpectError
	normal.factory( 5, '5', {} ); // $ExpectError
	normal.factory( 8, [], {} ); // $ExpectError
	normal.factory( 9, {}, {} ); // $ExpectError
	normal.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	normal.factory( null ); // $ExpectError
	normal.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	normal.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	normal.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	normal.factory( -2, 2, { 'prng': null } ); // $ExpectError
	normal.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	normal.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	normal.factory( -2, 2, { 'prng': true ); // $ExpectError

	normal.factory( { 'prng': 123 } ); // $ExpectError
	normal.factory( { 'prng': 'abc' } ); // $ExpectError
	normal.factory( { 'prng': null } ); // $ExpectError
	normal.factory( { 'prng': [] } ); // $ExpectError
	normal.factory( { 'prng': {} } ); // $ExpectError
	normal.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	normal.factory( -2, 2, { 'seed': true } ); // $ExpectError
	normal.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	normal.factory( -2, 2, { 'seed': null } ); // $ExpectError
	normal.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	normal.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	normal.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'seed': true } ); // $ExpectError
	normal.factory( { 'seed': 'abc' } ); // $ExpectError
	normal.factory( { 'seed': null } ); // $ExpectError
	normal.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	normal.factory( { 'seed': {} } ); // $ExpectError
	normal.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	normal.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	normal.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	normal.factory( -2, 2, { 'state': null } ); // $ExpectError
	normal.factory( -2, 2, { 'state': [] } ); // $ExpectError
	normal.factory( -2, 2, { 'state': {} } ); // $ExpectError
	normal.factory( -2, 2, { 'state': true ); // $ExpectError
	normal.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'state': 123 } ); // $ExpectError
	normal.factory( { 'state': 'abc' } ); // $ExpectError
	normal.factory( { 'state': null } ); // $ExpectError
	normal.factory( { 'state': [] } ); // $ExpectError
	normal.factory( { 'state': {} } ); // $ExpectError
	normal.factory( { 'state': true ); // $ExpectError
	normal.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	normal.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	normal.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	normal.factory( -2, 2, { 'copy': null } ); // $ExpectError
	normal.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	normal.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	normal.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'copy': 123 } ); // $ExpectError
	normal.factory( { 'copy': 'abc' } ); // $ExpectError
	normal.factory( { 'copy': null } ); // $ExpectError
	normal.factory( { 'copy': [] } ); // $ExpectError
	normal.factory( { 'copy': {} } ); // $ExpectError
	normal.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	normal.factory( 2, 4, {}, 2 ); // $ExpectError
}
