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

import invgamma = require( './index' );


// TESTS //

// The function returns a number...
{
	invgamma( 2, 3 ); // $ExpectType number
	invgamma( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	invgamma( true, 3 ); // $ExpectError
	invgamma( false, 2 ); // $ExpectError
	invgamma( '5', 1 ); // $ExpectError
	invgamma( [], 1 ); // $ExpectError
	invgamma( {}, 2 ); // $ExpectError
	invgamma( ( x: number ): number => x, 2 ); // $ExpectError

	invgamma( 9, true ); // $ExpectError
	invgamma( 9, false ); // $ExpectError
	invgamma( 5, '5' ); // $ExpectError
	invgamma( 8, [] ); // $ExpectError
	invgamma( 9, {} ); // $ExpectError
	invgamma( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	invgamma(); // $ExpectError
	invgamma( 2 ); // $ExpectError
	invgamma( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	invgamma.factory( 2, 2 ); // $ExpectType NullaryFunction
	invgamma.factory(); // $ExpectType BinaryFunction
	invgamma.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = invgamma.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = invgamma.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = invgamma.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = invgamma.factory();
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
	const fcn1 = invgamma.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = invgamma.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	invgamma.factory( true, 3 ); // $ExpectError
	invgamma.factory( false, 2 ); // $ExpectError
	invgamma.factory( '5', 1 ); // $ExpectError
	invgamma.factory( [], 1 ); // $ExpectError
	invgamma.factory( {}, 2 ); // $ExpectError
	invgamma.factory( ( x: number ): number => x, 2 ); // $ExpectError

	invgamma.factory( 9, true ); // $ExpectError
	invgamma.factory( 9, false ); // $ExpectError
	invgamma.factory( 5, '5' ); // $ExpectError
	invgamma.factory( 8, [] ); // $ExpectError
	invgamma.factory( 9, {} ); // $ExpectError
	invgamma.factory( 8, ( x: number ): number => x ); // $ExpectError

	invgamma.factory( true, 3, {} ); // $ExpectError
	invgamma.factory( false, 2, {} ); // $ExpectError
	invgamma.factory( '5', 1, {} ); // $ExpectError
	invgamma.factory( [], 1, {} ); // $ExpectError
	invgamma.factory( {}, 2, {} ); // $ExpectError
	invgamma.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	invgamma.factory( 9, true, {} ); // $ExpectError
	invgamma.factory( 9, false, {} ); // $ExpectError
	invgamma.factory( 5, '5', {} ); // $ExpectError
	invgamma.factory( 8, [], {} ); // $ExpectError
	invgamma.factory( 9, {}, {} ); // $ExpectError
	invgamma.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	invgamma.factory( null ); // $ExpectError
	invgamma.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	invgamma.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	invgamma.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	invgamma.factory( 2, 2, { 'prng': null } ); // $ExpectError
	invgamma.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	invgamma.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	invgamma.factory( 2, 2, { 'prng': true ); // $ExpectError

	invgamma.factory( { 'prng': 123 } ); // $ExpectError
	invgamma.factory( { 'prng': 'abc' } ); // $ExpectError
	invgamma.factory( { 'prng': null } ); // $ExpectError
	invgamma.factory( { 'prng': [] } ); // $ExpectError
	invgamma.factory( { 'prng': {} } ); // $ExpectError
	invgamma.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	invgamma.factory( 2, 2, { 'seed': true } ); // $ExpectError
	invgamma.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	invgamma.factory( 2, 2, { 'seed': null } ); // $ExpectError
	invgamma.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	invgamma.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	invgamma.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	invgamma.factory( { 'seed': true } ); // $ExpectError
	invgamma.factory( { 'seed': 'abc' } ); // $ExpectError
	invgamma.factory( { 'seed': null } ); // $ExpectError
	invgamma.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	invgamma.factory( { 'seed': {} } ); // $ExpectError
	invgamma.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	invgamma.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	invgamma.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	invgamma.factory( 2, 2, { 'state': null } ); // $ExpectError
	invgamma.factory( 2, 2, { 'state': [] } ); // $ExpectError
	invgamma.factory( 2, 2, { 'state': {} } ); // $ExpectError
	invgamma.factory( 2, 2, { 'state': true ); // $ExpectError
	invgamma.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	invgamma.factory( { 'state': 123 } ); // $ExpectError
	invgamma.factory( { 'state': 'abc' } ); // $ExpectError
	invgamma.factory( { 'state': null } ); // $ExpectError
	invgamma.factory( { 'state': [] } ); // $ExpectError
	invgamma.factory( { 'state': {} } ); // $ExpectError
	invgamma.factory( { 'state': true ); // $ExpectError
	invgamma.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	invgamma.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	invgamma.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	invgamma.factory( 2, 2, { 'copy': null } ); // $ExpectError
	invgamma.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	invgamma.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	invgamma.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	invgamma.factory( { 'copy': 123 } ); // $ExpectError
	invgamma.factory( { 'copy': 'abc' } ); // $ExpectError
	invgamma.factory( { 'copy': null } ); // $ExpectError
	invgamma.factory( { 'copy': [] } ); // $ExpectError
	invgamma.factory( { 'copy': {} } ); // $ExpectError
	invgamma.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	invgamma.factory( 2, 4, {}, 2 ); // $ExpectError
}
