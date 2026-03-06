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

import levy = require( './index' );


// TESTS //

// The function returns a number...
{
	levy( 2, 3 ); // $ExpectType number
	levy( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	levy( true, 3 ); // $ExpectError
	levy( false, 2 ); // $ExpectError
	levy( '5', 1 ); // $ExpectError
	levy( [], 1 ); // $ExpectError
	levy( {}, 2 ); // $ExpectError
	levy( ( x: number ): number => x, 2 ); // $ExpectError

	levy( 9, true ); // $ExpectError
	levy( 9, false ); // $ExpectError
	levy( 5, '5' ); // $ExpectError
	levy( 8, [] ); // $ExpectError
	levy( 9, {} ); // $ExpectError
	levy( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	levy(); // $ExpectError
	levy( 2 ); // $ExpectError
	levy( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	levy.factory( -2, 2 ); // $ExpectType NullaryFunction
	levy.factory(); // $ExpectType BinaryFunction
	levy.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = levy.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = levy.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = levy.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = levy.factory();
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
	const fcn1 = levy.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = levy.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	levy.factory( true, 3 ); // $ExpectError
	levy.factory( false, 2 ); // $ExpectError
	levy.factory( '5', 1 ); // $ExpectError
	levy.factory( [], 1 ); // $ExpectError
	levy.factory( {}, 2 ); // $ExpectError
	levy.factory( ( x: number ): number => x, 2 ); // $ExpectError

	levy.factory( 9, true ); // $ExpectError
	levy.factory( 9, false ); // $ExpectError
	levy.factory( 5, '5' ); // $ExpectError
	levy.factory( 8, [] ); // $ExpectError
	levy.factory( 9, {} ); // $ExpectError
	levy.factory( 8, ( x: number ): number => x ); // $ExpectError

	levy.factory( true, 3, {} ); // $ExpectError
	levy.factory( false, 2, {} ); // $ExpectError
	levy.factory( '5', 1, {} ); // $ExpectError
	levy.factory( [], 1, {} ); // $ExpectError
	levy.factory( {}, 2, {} ); // $ExpectError
	levy.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	levy.factory( 9, true, {} ); // $ExpectError
	levy.factory( 9, false, {} ); // $ExpectError
	levy.factory( 5, '5', {} ); // $ExpectError
	levy.factory( 8, [], {} ); // $ExpectError
	levy.factory( 9, {}, {} ); // $ExpectError
	levy.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	levy.factory( null ); // $ExpectError
	levy.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	levy.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	levy.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	levy.factory( -2, 2, { 'prng': null } ); // $ExpectError
	levy.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	levy.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	levy.factory( -2, 2, { 'prng': true ); // $ExpectError

	levy.factory( { 'prng': 123 } ); // $ExpectError
	levy.factory( { 'prng': 'abc' } ); // $ExpectError
	levy.factory( { 'prng': null } ); // $ExpectError
	levy.factory( { 'prng': [] } ); // $ExpectError
	levy.factory( { 'prng': {} } ); // $ExpectError
	levy.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	levy.factory( -2, 2, { 'seed': true } ); // $ExpectError
	levy.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	levy.factory( -2, 2, { 'seed': null } ); // $ExpectError
	levy.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	levy.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	levy.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	levy.factory( { 'seed': true } ); // $ExpectError
	levy.factory( { 'seed': 'abc' } ); // $ExpectError
	levy.factory( { 'seed': null } ); // $ExpectError
	levy.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	levy.factory( { 'seed': {} } ); // $ExpectError
	levy.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	levy.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	levy.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	levy.factory( -2, 2, { 'state': null } ); // $ExpectError
	levy.factory( -2, 2, { 'state': [] } ); // $ExpectError
	levy.factory( -2, 2, { 'state': {} } ); // $ExpectError
	levy.factory( -2, 2, { 'state': true ); // $ExpectError
	levy.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	levy.factory( { 'state': 123 } ); // $ExpectError
	levy.factory( { 'state': 'abc' } ); // $ExpectError
	levy.factory( { 'state': null } ); // $ExpectError
	levy.factory( { 'state': [] } ); // $ExpectError
	levy.factory( { 'state': {} } ); // $ExpectError
	levy.factory( { 'state': true ); // $ExpectError
	levy.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	levy.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	levy.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	levy.factory( -2, 2, { 'copy': null } ); // $ExpectError
	levy.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	levy.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	levy.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	levy.factory( { 'copy': 123 } ); // $ExpectError
	levy.factory( { 'copy': 'abc' } ); // $ExpectError
	levy.factory( { 'copy': null } ); // $ExpectError
	levy.factory( { 'copy': [] } ); // $ExpectError
	levy.factory( { 'copy': {} } ); // $ExpectError
	levy.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	levy.factory( 2, 4, {}, 2 ); // $ExpectError
}
