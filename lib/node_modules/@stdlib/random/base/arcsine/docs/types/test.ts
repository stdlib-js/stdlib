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

import arcsine = require( './index' );


// TESTS //

// The function returns a number...
{
	arcsine( 2, 3 ); // $ExpectType number
	arcsine( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	arcsine( true, 3 ); // $ExpectError
	arcsine( false, 2 ); // $ExpectError
	arcsine( '5', 1 ); // $ExpectError
	arcsine( [], 1 ); // $ExpectError
	arcsine( {}, 2 ); // $ExpectError
	arcsine( ( x: number ): number => x, 2 ); // $ExpectError

	arcsine( 9, true ); // $ExpectError
	arcsine( 9, false ); // $ExpectError
	arcsine( 5, '5' ); // $ExpectError
	arcsine( 8, [] ); // $ExpectError
	arcsine( 9, {} ); // $ExpectError
	arcsine( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	arcsine(); // $ExpectError
	arcsine( 2 ); // $ExpectError
	arcsine( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	arcsine.factory( 2, 2 ); // $ExpectType NullaryFunction
	arcsine.factory(); // $ExpectType BinaryFunction
	arcsine.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = arcsine.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = arcsine.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = arcsine.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = arcsine.factory();
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
	const fcn1 = arcsine.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = arcsine.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	arcsine.factory( true, 3 ); // $ExpectError
	arcsine.factory( false, 2 ); // $ExpectError
	arcsine.factory( '5', 1 ); // $ExpectError
	arcsine.factory( [], 1 ); // $ExpectError
	arcsine.factory( {}, 2 ); // $ExpectError
	arcsine.factory( ( x: number ): number => x, 2 ); // $ExpectError

	arcsine.factory( 9, true ); // $ExpectError
	arcsine.factory( 9, false ); // $ExpectError
	arcsine.factory( 5, '5' ); // $ExpectError
	arcsine.factory( 8, [] ); // $ExpectError
	arcsine.factory( 9, {} ); // $ExpectError
	arcsine.factory( 8, ( x: number ): number => x ); // $ExpectError

	arcsine.factory( true, 3, {} ); // $ExpectError
	arcsine.factory( false, 2, {} ); // $ExpectError
	arcsine.factory( '5', 1, {} ); // $ExpectError
	arcsine.factory( [], 1, {} ); // $ExpectError
	arcsine.factory( {}, 2, {} ); // $ExpectError
	arcsine.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	arcsine.factory( 9, true, {} ); // $ExpectError
	arcsine.factory( 9, false, {} ); // $ExpectError
	arcsine.factory( 5, '5', {} ); // $ExpectError
	arcsine.factory( 8, [], {} ); // $ExpectError
	arcsine.factory( 9, {}, {} ); // $ExpectError
	arcsine.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	arcsine.factory( null ); // $ExpectError
	arcsine.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	arcsine.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	arcsine.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	arcsine.factory( 2, 2, { 'prng': null } ); // $ExpectError
	arcsine.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	arcsine.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	arcsine.factory( 2, 2, { 'prng': true ); // $ExpectError

	arcsine.factory( { 'prng': 123 } ); // $ExpectError
	arcsine.factory( { 'prng': 'abc' } ); // $ExpectError
	arcsine.factory( { 'prng': null } ); // $ExpectError
	arcsine.factory( { 'prng': [] } ); // $ExpectError
	arcsine.factory( { 'prng': {} } ); // $ExpectError
	arcsine.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	arcsine.factory( 2, 2, { 'seed': true } ); // $ExpectError
	arcsine.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	arcsine.factory( 2, 2, { 'seed': null } ); // $ExpectError
	arcsine.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	arcsine.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	arcsine.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	arcsine.factory( { 'seed': true } ); // $ExpectError
	arcsine.factory( { 'seed': 'abc' } ); // $ExpectError
	arcsine.factory( { 'seed': null } ); // $ExpectError
	arcsine.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	arcsine.factory( { 'seed': {} } ); // $ExpectError
	arcsine.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	arcsine.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	arcsine.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	arcsine.factory( 2, 2, { 'state': null } ); // $ExpectError
	arcsine.factory( 2, 2, { 'state': [] } ); // $ExpectError
	arcsine.factory( 2, 2, { 'state': {} } ); // $ExpectError
	arcsine.factory( 2, 2, { 'state': true ); // $ExpectError
	arcsine.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	arcsine.factory( { 'state': 123 } ); // $ExpectError
	arcsine.factory( { 'state': 'abc' } ); // $ExpectError
	arcsine.factory( { 'state': null } ); // $ExpectError
	arcsine.factory( { 'state': [] } ); // $ExpectError
	arcsine.factory( { 'state': {} } ); // $ExpectError
	arcsine.factory( { 'state': true ); // $ExpectError
	arcsine.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	arcsine.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	arcsine.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	arcsine.factory( 2, 2, { 'copy': null } ); // $ExpectError
	arcsine.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	arcsine.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	arcsine.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	arcsine.factory( { 'copy': 123 } ); // $ExpectError
	arcsine.factory( { 'copy': 'abc' } ); // $ExpectError
	arcsine.factory( { 'copy': null } ); // $ExpectError
	arcsine.factory( { 'copy': [] } ); // $ExpectError
	arcsine.factory( { 'copy': {} } ); // $ExpectError
	arcsine.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	arcsine.factory( 2, 4, {}, 2 ); // $ExpectError
}
