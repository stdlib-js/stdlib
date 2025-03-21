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

import triangular = require( './index' );


// TESTS //

// The function returns a number...
{
	triangular( 2.0, 5.0, 3.33 ); // $ExpectType number
	triangular( 1.0, 2.0, 1.8 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than three numbers...
{
	triangular( true, 3, 0.8 ); // $ExpectError
	triangular( false, 2, 0.8 ); // $ExpectError
	triangular( '5', 1, 0.8 ); // $ExpectError
	triangular( [], 1, 0.8 ); // $ExpectError
	triangular( {}, 2, 0.8 ); // $ExpectError
	triangular( ( x: number ): number => x, 2, 0.8 ); // $ExpectError

	triangular( 0.2, true, 0.8 ); // $ExpectError
	triangular( 0.2, false, 0.8 ); // $ExpectError
	triangular( 0.5, '5', 0.8 ); // $ExpectError
	triangular( 0.2, [], 0.8 ); // $ExpectError
	triangular( 0.4, {}, 0.8 ); // $ExpectError
	triangular( 0.4, ( x: number ): number => x, 0.8 ); // $ExpectError

	triangular( 0.9, 3, true ); // $ExpectError
	triangular( 0.9, 3, false ); // $ExpectError
	triangular( 0.5, 5, '5' ); // $ExpectError
	triangular( 0.8, 8, [] ); // $ExpectError
	triangular( 0.9, 3, {} ); // $ExpectError
	triangular( 0.8, 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	triangular(); // $ExpectError
	triangular( 2 ); // $ExpectError
	triangular( 2, 4 ); // $ExpectError
	triangular( 2, 4, 3.5, 4, 8 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	triangular.factory( 2, 4, 2.7 ); // $ExpectType NullaryFunction
	triangular.factory(); // $ExpectType BinaryFunction
	triangular.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = triangular.factory( 2, 4, 2.7 );
	fcn1(); // $ExpectType number

	const fcn2 = triangular.factory();
	fcn2( 2, 2, 0.7 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = triangular.factory( 2, 4, 2.8 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = triangular.factory();
	fcn2( true, 2, 0.8 ); // $ExpectError
	fcn2( false, 2, 0.8 ); // $ExpectError
	fcn2( '5', 2, 0.8 ); // $ExpectError
	fcn2( [], 2, 0.8 ); // $ExpectError
	fcn2( {}, 2, 0.8 ); // $ExpectError
	fcn2( ( x: number ): number => x, 2, 0.8 ); // $ExpectError

	fcn2( 0.1, true, 0.8 ); // $ExpectError
	fcn2( 0.1, false, 0.8 ); // $ExpectError
	fcn2( 0.1, '5', 0.8 ); // $ExpectError
	fcn2( 0.1, [], 0.8 ); // $ExpectError
	fcn2( 0.1, {}, 0.8 ); // $ExpectError
	fcn2( 0.1, ( x: number ): number => x, 0.8 ); // $ExpectError

	fcn2( 0.1, 1, true ); // $ExpectError
	fcn2( 0.1, 1, false ); // $ExpectError
	fcn2( 0.1, 1, '5' ); // $ExpectError
	fcn2( 0.1, 1, [] ); // $ExpectError
	fcn2( 0.1, 1, {} ); // $ExpectError
	fcn2( 0.1, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = triangular.factory( 2, 4, 2.8 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = triangular.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than three numbers aside from an options object...
{
	triangular.factory( true, 3, 0.7 ); // $ExpectError
	triangular.factory( false, 2, 0.7 ); // $ExpectError
	triangular.factory( '5', 1, 0.7 ); // $ExpectError
	triangular.factory( [], 1, 0.7 ); // $ExpectError
	triangular.factory( {}, 2, 0.7 ); // $ExpectError
	triangular.factory( ( x: number ): number => x, 2, 0.7 ); // $ExpectError

	triangular.factory( 0.2, true, 0.7 ); // $ExpectError
	triangular.factory( 0.2, false, 0.7 ); // $ExpectError
	triangular.factory( 0.2, '5', 0.7 ); // $ExpectError
	triangular.factory( 0.2, [], 0.7 ); // $ExpectError
	triangular.factory( 0.2, {}, 0.7 ); // $ExpectError
	triangular.factory( 0.2, ( x: number ): number => x, 0.7 ); // $ExpectError

	triangular.factory( 0.2, 3, true ); // $ExpectError
	triangular.factory( 0.2, 3, false ); // $ExpectError
	triangular.factory( 0.3, 3, '5' ); // $ExpectError
	triangular.factory( 0.3, 3, [] ); // $ExpectError
	triangular.factory( 0.3, 3, {} ); // $ExpectError
	triangular.factory( 0.3, 8, ( x: number ): number => x ); // $ExpectError

	triangular.factory( true, 3, 0.7, {} ); // $ExpectError
	triangular.factory( false, 2, 0.7, {} ); // $ExpectError
	triangular.factory( '5', 1, 0.7, {} ); // $ExpectError
	triangular.factory( [], 1, 0.7, {} ); // $ExpectError
	triangular.factory( {}, 2, 0.7, {} ); // $ExpectError
	triangular.factory( ( x: number ): number => x, 2, 0.7, {} ); // $ExpectError

	triangular.factory( 0.3, true, 0.7, {} ); // $ExpectError
	triangular.factory( 0.3, false, 0.7, {} ); // $ExpectError
	triangular.factory( 0.3, '5', 0.7, {} ); // $ExpectError
	triangular.factory( 0.3, [], 0.7, {} ); // $ExpectError
	triangular.factory( 0.3, {}, 0.7, {} ); // $ExpectError
	triangular.factory( 0.3, ( x: number ): number => x, 0.7, {} ); // $ExpectError

	triangular.factory( 0.3, 3, true, {} ); // $ExpectError
	triangular.factory( 0.3, 3, false, {} ); // $ExpectError
	triangular.factory( 0.3, 3, '5', {} ); // $ExpectError
	triangular.factory( 0.3, 3, [], {} ); // $ExpectError
	triangular.factory( 0.3, 3, {}, {} ); // $ExpectError
	triangular.factory( 0.3, 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	triangular.factory( null ); // $ExpectError
	triangular.factory( 0.5, 2, 1, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	triangular.factory( 2, 4, 2.5, { 'prng': 123 } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'prng': 'abc' } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'prng': null } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'prng': [] } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'prng': {} } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'prng': true ); // $ExpectError

	triangular.factory( { 'prng': 123 } ); // $ExpectError
	triangular.factory( { 'prng': 'abc' } ); // $ExpectError
	triangular.factory( { 'prng': null } ); // $ExpectError
	triangular.factory( { 'prng': [] } ); // $ExpectError
	triangular.factory( { 'prng': {} } ); // $ExpectError
	triangular.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	triangular.factory( 2, 4, 2.5, { 'seed': true } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'seed': 'abc' } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'seed': null } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'seed': [ 'a' ] } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'seed': {} } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'seed': ( x: number ): number => x } ); // $ExpectError

	triangular.factory( { 'seed': true } ); // $ExpectError
	triangular.factory( { 'seed': 'abc' } ); // $ExpectError
	triangular.factory( { 'seed': null } ); // $ExpectError
	triangular.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	triangular.factory( { 'seed': {} } ); // $ExpectError
	triangular.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	triangular.factory( 2, 4, 2.5, { 'state': 123 } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'state': 'abc' } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'state': null } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'state': [] } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'state': {} } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'state': true ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'state': ( x: number ): number => x } ); // $ExpectError

	triangular.factory( { 'state': 123 } ); // $ExpectError
	triangular.factory( { 'state': 'abc' } ); // $ExpectError
	triangular.factory( { 'state': null } ); // $ExpectError
	triangular.factory( { 'state': [] } ); // $ExpectError
	triangular.factory( { 'state': {} } ); // $ExpectError
	triangular.factory( { 'state': true ); // $ExpectError
	triangular.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	triangular.factory( 2, 4, 2.5, { 'copy': 123 } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'copy': 'abc' } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'copy': null } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'copy': [] } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'copy': {} } ); // $ExpectError
	triangular.factory( 2, 4, 2.5, { 'copy': ( x: number ): number => x } ); // $ExpectError

	triangular.factory( { 'copy': 123 } ); // $ExpectError
	triangular.factory( { 'copy': 'abc' } ); // $ExpectError
	triangular.factory( { 'copy': null } ); // $ExpectError
	triangular.factory( { 'copy': [] } ); // $ExpectError
	triangular.factory( { 'copy': {} } ); // $ExpectError
	triangular.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than four arguments...
{
	triangular.factory( 2, 4, 2.8, {}, 2 ); // $ExpectError
}
