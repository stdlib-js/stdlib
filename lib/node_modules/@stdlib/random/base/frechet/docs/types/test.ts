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

import frechet = require( './index' );


// TESTS //

// The function returns a number...
{
	frechet( 2.0, 5.0, 3.33 ); // $ExpectType number
	frechet( 1.0, 1.0, 0.8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	frechet( true, 3, 0.8 ); // $ExpectError
	frechet( false, 2, 0.8 ); // $ExpectError
	frechet( '5', 1, 0.8 ); // $ExpectError
	frechet( [], 1, 0.8 ); // $ExpectError
	frechet( {}, 2, 0.8 ); // $ExpectError
	frechet( ( x: number ): number => x, 2, 0.8 ); // $ExpectError

	frechet( 9, true, 0.8 ); // $ExpectError
	frechet( 9, false, 0.8 ); // $ExpectError
	frechet( 5, '5', 0.8 ); // $ExpectError
	frechet( 8, [], 0.8 ); // $ExpectError
	frechet( 9, {}, 0.8 ); // $ExpectError
	frechet( 8, ( x: number ): number => x, 0.8 ); // $ExpectError

	frechet( 9, 3, true ); // $ExpectError
	frechet( 9, 3, false ); // $ExpectError
	frechet( 5, 5, '5' ); // $ExpectError
	frechet( 8, 8, [] ); // $ExpectError
	frechet( 9, 3, {} ); // $ExpectError
	frechet( 8, 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	frechet(); // $ExpectError
	frechet( 2 ); // $ExpectError
	frechet( 2, 2 ); // $ExpectError
	frechet( 2, 2, 0.5, 4, 8 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	frechet.factory( 2, 2, 0.7 ); // $ExpectType NullaryFunction
	frechet.factory(); // $ExpectType BinaryFunction
	frechet.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = frechet.factory( 2, 2, 0.7 );
	fcn1(); // $ExpectType number

	const fcn2 = frechet.factory();
	fcn2( 2, 2, 0.7 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = frechet.factory( 2, 2, 0.8 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = frechet.factory();
	fcn2( true, 2, 0.8 ); // $ExpectError
	fcn2( false, 2, 0.8 ); // $ExpectError
	fcn2( '5', 2, 0.8 ); // $ExpectError
	fcn2( [], 2, 0.8 ); // $ExpectError
	fcn2( {}, 2, 0.8 ); // $ExpectError
	fcn2( ( x: number ): number => x, 2, 0.8 ); // $ExpectError

	fcn2( 1, true, 0.8 ); // $ExpectError
	fcn2( 1, false, 0.8 ); // $ExpectError
	fcn2( 1, '5', 0.8 ); // $ExpectError
	fcn2( 1, [], 0.8 ); // $ExpectError
	fcn2( 1, {}, 0.8 ); // $ExpectError
	fcn2( 1, ( x: number ): number => x, 0.8 ); // $ExpectError

	fcn2( 1, 1, true ); // $ExpectError
	fcn2( 1, 1, false ); // $ExpectError
	fcn2( 1, 1, '5' ); // $ExpectError
	fcn2( 1, 1, [] ); // $ExpectError
	fcn2( 1, 1, {} ); // $ExpectError
	fcn2( 1, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = frechet.factory( 2, 2, 0.8 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = frechet.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers aside from an options object...
{
	frechet.factory( true, 3, 0.7 ); // $ExpectError
	frechet.factory( false, 2, 0.7 ); // $ExpectError
	frechet.factory( '5', 1, 0.7 ); // $ExpectError
	frechet.factory( [], 1, 0.7 ); // $ExpectError
	frechet.factory( {}, 2, 0.7 ); // $ExpectError
	frechet.factory( ( x: number ): number => x, 2, 0.7 ); // $ExpectError

	frechet.factory( 9, true, 0.7 ); // $ExpectError
	frechet.factory( 9, false, 0.7 ); // $ExpectError
	frechet.factory( 5, '5', 0.7 ); // $ExpectError
	frechet.factory( 8, [], 0.7 ); // $ExpectError
	frechet.factory( 9, {}, 0.7 ); // $ExpectError
	frechet.factory( 8, ( x: number ): number => x, 0.7 ); // $ExpectError

	frechet.factory( 9, 3, true ); // $ExpectError
	frechet.factory( 9, 3, false ); // $ExpectError
	frechet.factory( 5, 3, '5' ); // $ExpectError
	frechet.factory( 8, 3, [] ); // $ExpectError
	frechet.factory( 9, 3, {} ); // $ExpectError
	frechet.factory( 8, 8, ( x: number ): number => x ); // $ExpectError

	frechet.factory( true, 3, 0.7, {} ); // $ExpectError
	frechet.factory( false, 2, 0.7, {} ); // $ExpectError
	frechet.factory( '5', 1, 0.7, {} ); // $ExpectError
	frechet.factory( [], 1, 0.7, {} ); // $ExpectError
	frechet.factory( {}, 2, 0.7, {} ); // $ExpectError
	frechet.factory( ( x: number ): number => x, 2, 0.7, {} ); // $ExpectError

	frechet.factory( 9, true, 0.7, {} ); // $ExpectError
	frechet.factory( 9, false, 0.7, {} ); // $ExpectError
	frechet.factory( 5, '5', 0.7, {} ); // $ExpectError
	frechet.factory( 8, [], 0.7, {} ); // $ExpectError
	frechet.factory( 9, {}, 0.7, {} ); // $ExpectError
	frechet.factory( 8, ( x: number ): number => x, 0.7, {} ); // $ExpectError

	frechet.factory( 9, 3, true, {} ); // $ExpectError
	frechet.factory( 9, 3, false, {} ); // $ExpectError
	frechet.factory( 5, 3, '5', {} ); // $ExpectError
	frechet.factory( 8, 3, [], {} ); // $ExpectError
	frechet.factory( 9, 3, {}, {} ); // $ExpectError
	frechet.factory( 8, 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	frechet.factory( null ); // $ExpectError
	frechet.factory( 2, 2, 1, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	frechet.factory( 2, 2, 0.5, { 'prng': 123 } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'prng': 'abc' } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'prng': null } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'prng': [] } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'prng': {} } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'prng': true ); // $ExpectError

	frechet.factory( { 'prng': 123 } ); // $ExpectError
	frechet.factory( { 'prng': 'abc' } ); // $ExpectError
	frechet.factory( { 'prng': null } ); // $ExpectError
	frechet.factory( { 'prng': [] } ); // $ExpectError
	frechet.factory( { 'prng': {} } ); // $ExpectError
	frechet.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	frechet.factory( 2, 2, 0.5, { 'seed': true } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'seed': 'abc' } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'seed': null } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'seed': [ 'a' ] } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'seed': {} } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'seed': ( x: number ): number => x } ); // $ExpectError

	frechet.factory( { 'seed': true } ); // $ExpectError
	frechet.factory( { 'seed': 'abc' } ); // $ExpectError
	frechet.factory( { 'seed': null } ); // $ExpectError
	frechet.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	frechet.factory( { 'seed': {} } ); // $ExpectError
	frechet.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	frechet.factory( 2, 2, 0.5, { 'state': 123 } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'state': 'abc' } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'state': null } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'state': [] } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'state': {} } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'state': true ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'state': ( x: number ): number => x } ); // $ExpectError

	frechet.factory( { 'state': 123 } ); // $ExpectError
	frechet.factory( { 'state': 'abc' } ); // $ExpectError
	frechet.factory( { 'state': null } ); // $ExpectError
	frechet.factory( { 'state': [] } ); // $ExpectError
	frechet.factory( { 'state': {} } ); // $ExpectError
	frechet.factory( { 'state': true ); // $ExpectError
	frechet.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	frechet.factory( 2, 2, 0.5, { 'copy': 123 } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'copy': 'abc' } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'copy': null } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'copy': [] } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'copy': {} } ); // $ExpectError
	frechet.factory( 2, 2, 0.5, { 'copy': ( x: number ): number => x } ); // $ExpectError

	frechet.factory( { 'copy': 123 } ); // $ExpectError
	frechet.factory( { 'copy': 'abc' } ); // $ExpectError
	frechet.factory( { 'copy': null } ); // $ExpectError
	frechet.factory( { 'copy': [] } ); // $ExpectError
	frechet.factory( { 'copy': {} } ); // $ExpectError
	frechet.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than four arguments...
{
	frechet.factory( 2, 2, 0.8, {}, 2 ); // $ExpectError
}
