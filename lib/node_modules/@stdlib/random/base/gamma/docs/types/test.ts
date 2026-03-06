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

import gamma = require( './index' );


// TESTS //

// The function returns a number...
{
	gamma( 2, 3 ); // $ExpectType number
	gamma( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	gamma( true, 3 ); // $ExpectError
	gamma( false, 2 ); // $ExpectError
	gamma( '5', 1 ); // $ExpectError
	gamma( [], 1 ); // $ExpectError
	gamma( {}, 2 ); // $ExpectError
	gamma( ( x: number ): number => x, 2 ); // $ExpectError

	gamma( 9, true ); // $ExpectError
	gamma( 9, false ); // $ExpectError
	gamma( 5, '5' ); // $ExpectError
	gamma( 8, [] ); // $ExpectError
	gamma( 9, {} ); // $ExpectError
	gamma( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gamma(); // $ExpectError
	gamma( 2 ); // $ExpectError
	gamma( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	gamma.factory( 2, 2 ); // $ExpectType NullaryFunction
	gamma.factory(); // $ExpectType BinaryFunction
	gamma.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = gamma.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = gamma.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = gamma.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = gamma.factory();
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
	const fcn1 = gamma.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = gamma.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	gamma.factory( true, 3 ); // $ExpectError
	gamma.factory( false, 2 ); // $ExpectError
	gamma.factory( '5', 1 ); // $ExpectError
	gamma.factory( [], 1 ); // $ExpectError
	gamma.factory( {}, 2 ); // $ExpectError
	gamma.factory( ( x: number ): number => x, 2 ); // $ExpectError

	gamma.factory( 9, true ); // $ExpectError
	gamma.factory( 9, false ); // $ExpectError
	gamma.factory( 5, '5' ); // $ExpectError
	gamma.factory( 8, [] ); // $ExpectError
	gamma.factory( 9, {} ); // $ExpectError
	gamma.factory( 8, ( x: number ): number => x ); // $ExpectError

	gamma.factory( true, 3, {} ); // $ExpectError
	gamma.factory( false, 2, {} ); // $ExpectError
	gamma.factory( '5', 1, {} ); // $ExpectError
	gamma.factory( [], 1, {} ); // $ExpectError
	gamma.factory( {}, 2, {} ); // $ExpectError
	gamma.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	gamma.factory( 9, true, {} ); // $ExpectError
	gamma.factory( 9, false, {} ); // $ExpectError
	gamma.factory( 5, '5', {} ); // $ExpectError
	gamma.factory( 8, [], {} ); // $ExpectError
	gamma.factory( 9, {}, {} ); // $ExpectError
	gamma.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	gamma.factory( null ); // $ExpectError
	gamma.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	gamma.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	gamma.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	gamma.factory( 2, 2, { 'prng': null } ); // $ExpectError
	gamma.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	gamma.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	gamma.factory( 2, 2, { 'prng': true ); // $ExpectError

	gamma.factory( { 'prng': 123 } ); // $ExpectError
	gamma.factory( { 'prng': 'abc' } ); // $ExpectError
	gamma.factory( { 'prng': null } ); // $ExpectError
	gamma.factory( { 'prng': [] } ); // $ExpectError
	gamma.factory( { 'prng': {} } ); // $ExpectError
	gamma.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	gamma.factory( 2, 2, { 'seed': true } ); // $ExpectError
	gamma.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	gamma.factory( 2, 2, { 'seed': null } ); // $ExpectError
	gamma.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	gamma.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	gamma.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	gamma.factory( { 'seed': true } ); // $ExpectError
	gamma.factory( { 'seed': 'abc' } ); // $ExpectError
	gamma.factory( { 'seed': null } ); // $ExpectError
	gamma.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	gamma.factory( { 'seed': {} } ); // $ExpectError
	gamma.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	gamma.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	gamma.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	gamma.factory( 2, 2, { 'state': null } ); // $ExpectError
	gamma.factory( 2, 2, { 'state': [] } ); // $ExpectError
	gamma.factory( 2, 2, { 'state': {} } ); // $ExpectError
	gamma.factory( 2, 2, { 'state': true ); // $ExpectError
	gamma.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	gamma.factory( { 'state': 123 } ); // $ExpectError
	gamma.factory( { 'state': 'abc' } ); // $ExpectError
	gamma.factory( { 'state': null } ); // $ExpectError
	gamma.factory( { 'state': [] } ); // $ExpectError
	gamma.factory( { 'state': {} } ); // $ExpectError
	gamma.factory( { 'state': true ); // $ExpectError
	gamma.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	gamma.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	gamma.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	gamma.factory( 2, 2, { 'copy': null } ); // $ExpectError
	gamma.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	gamma.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	gamma.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	gamma.factory( { 'copy': 123 } ); // $ExpectError
	gamma.factory( { 'copy': 'abc' } ); // $ExpectError
	gamma.factory( { 'copy': null } ); // $ExpectError
	gamma.factory( { 'copy': [] } ); // $ExpectError
	gamma.factory( { 'copy': {} } ); // $ExpectError
	gamma.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	gamma.factory( 2, 4, {}, 2 ); // $ExpectError
}
