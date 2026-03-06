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

import cosine = require( './index' );


// TESTS //

// The function returns a number...
{
	cosine( 2, 3 ); // $ExpectType number
	cosine( -1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	cosine( true, 3 ); // $ExpectError
	cosine( false, 2 ); // $ExpectError
	cosine( '5', 1 ); // $ExpectError
	cosine( [], 1 ); // $ExpectError
	cosine( {}, 2 ); // $ExpectError
	cosine( ( x: number ): number => x, 2 ); // $ExpectError

	cosine( 9, true ); // $ExpectError
	cosine( 9, false ); // $ExpectError
	cosine( 5, '5' ); // $ExpectError
	cosine( 8, [] ); // $ExpectError
	cosine( 9, {} ); // $ExpectError
	cosine( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cosine(); // $ExpectError
	cosine( 2 ); // $ExpectError
	cosine( -2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	cosine.factory( -2, 2 ); // $ExpectType NullaryFunction
	cosine.factory(); // $ExpectType BinaryFunction
	cosine.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = cosine.factory( -2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = cosine.factory();
	fcn2( -2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = cosine.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = cosine.factory();
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
	const fcn1 = cosine.factory( -2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = cosine.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	cosine.factory( true, 3 ); // $ExpectError
	cosine.factory( false, 2 ); // $ExpectError
	cosine.factory( '5', 1 ); // $ExpectError
	cosine.factory( [], 1 ); // $ExpectError
	cosine.factory( {}, 2 ); // $ExpectError
	cosine.factory( ( x: number ): number => x, 2 ); // $ExpectError

	cosine.factory( 9, true ); // $ExpectError
	cosine.factory( 9, false ); // $ExpectError
	cosine.factory( 5, '5' ); // $ExpectError
	cosine.factory( 8, [] ); // $ExpectError
	cosine.factory( 9, {} ); // $ExpectError
	cosine.factory( 8, ( x: number ): number => x ); // $ExpectError

	cosine.factory( true, 3, {} ); // $ExpectError
	cosine.factory( false, 2, {} ); // $ExpectError
	cosine.factory( '5', 1, {} ); // $ExpectError
	cosine.factory( [], 1, {} ); // $ExpectError
	cosine.factory( {}, 2, {} ); // $ExpectError
	cosine.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	cosine.factory( 9, true, {} ); // $ExpectError
	cosine.factory( 9, false, {} ); // $ExpectError
	cosine.factory( 5, '5', {} ); // $ExpectError
	cosine.factory( 8, [], {} ); // $ExpectError
	cosine.factory( 9, {}, {} ); // $ExpectError
	cosine.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	cosine.factory( null ); // $ExpectError
	cosine.factory( -2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	cosine.factory( -2, 2, { 'prng': 123 } ); // $ExpectError
	cosine.factory( -2, 2, { 'prng': 'abc' } ); // $ExpectError
	cosine.factory( -2, 2, { 'prng': null } ); // $ExpectError
	cosine.factory( -2, 2, { 'prng': [] } ); // $ExpectError
	cosine.factory( -2, 2, { 'prng': {} } ); // $ExpectError
	cosine.factory( -2, 2, { 'prng': true ); // $ExpectError

	cosine.factory( { 'prng': 123 } ); // $ExpectError
	cosine.factory( { 'prng': 'abc' } ); // $ExpectError
	cosine.factory( { 'prng': null } ); // $ExpectError
	cosine.factory( { 'prng': [] } ); // $ExpectError
	cosine.factory( { 'prng': {} } ); // $ExpectError
	cosine.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	cosine.factory( -2, 2, { 'seed': true } ); // $ExpectError
	cosine.factory( -2, 2, { 'seed': 'abc' } ); // $ExpectError
	cosine.factory( -2, 2, { 'seed': null } ); // $ExpectError
	cosine.factory( -2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	cosine.factory( -2, 2, { 'seed': {} } ); // $ExpectError
	cosine.factory( -2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	cosine.factory( { 'seed': true } ); // $ExpectError
	cosine.factory( { 'seed': 'abc' } ); // $ExpectError
	cosine.factory( { 'seed': null } ); // $ExpectError
	cosine.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	cosine.factory( { 'seed': {} } ); // $ExpectError
	cosine.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	cosine.factory( -2, 2, { 'state': 123 } ); // $ExpectError
	cosine.factory( -2, 2, { 'state': 'abc' } ); // $ExpectError
	cosine.factory( -2, 2, { 'state': null } ); // $ExpectError
	cosine.factory( -2, 2, { 'state': [] } ); // $ExpectError
	cosine.factory( -2, 2, { 'state': {} } ); // $ExpectError
	cosine.factory( -2, 2, { 'state': true ); // $ExpectError
	cosine.factory( -2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	cosine.factory( { 'state': 123 } ); // $ExpectError
	cosine.factory( { 'state': 'abc' } ); // $ExpectError
	cosine.factory( { 'state': null } ); // $ExpectError
	cosine.factory( { 'state': [] } ); // $ExpectError
	cosine.factory( { 'state': {} } ); // $ExpectError
	cosine.factory( { 'state': true ); // $ExpectError
	cosine.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	cosine.factory( -2, 2, { 'copy': 123 } ); // $ExpectError
	cosine.factory( -2, 2, { 'copy': 'abc' } ); // $ExpectError
	cosine.factory( -2, 2, { 'copy': null } ); // $ExpectError
	cosine.factory( -2, 2, { 'copy': [] } ); // $ExpectError
	cosine.factory( -2, 2, { 'copy': {} } ); // $ExpectError
	cosine.factory( -2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	cosine.factory( { 'copy': 123 } ); // $ExpectError
	cosine.factory( { 'copy': 'abc' } ); // $ExpectError
	cosine.factory( { 'copy': null } ); // $ExpectError
	cosine.factory( { 'copy': [] } ); // $ExpectError
	cosine.factory( { 'copy': {} } ); // $ExpectError
	cosine.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	cosine.factory( 2, 4, {}, 2 ); // $ExpectError
}
