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

import discreteUniform = require( './index' );


// TESTS //

// The function returns a number...
{
	discreteUniform( 2, 3 ); // $ExpectType number
	discreteUniform( 0, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	discreteUniform( true, 3 ); // $ExpectError
	discreteUniform( false, 2 ); // $ExpectError
	discreteUniform( '5', 1 ); // $ExpectError
	discreteUniform( [], 1 ); // $ExpectError
	discreteUniform( {}, 2 ); // $ExpectError
	discreteUniform( ( x: number ): number => x, 2 ); // $ExpectError

	discreteUniform( 9, true ); // $ExpectError
	discreteUniform( 9, false ); // $ExpectError
	discreteUniform( 5, '5' ); // $ExpectError
	discreteUniform( 8, [] ); // $ExpectError
	discreteUniform( 9, {} ); // $ExpectError
	discreteUniform( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	discreteUniform(); // $ExpectError
	discreteUniform( 2 ); // $ExpectError
	discreteUniform( 0, 4, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	discreteUniform.factory( 0, 2 ); // $ExpectType NullaryFunction
	discreteUniform.factory(); // $ExpectType BinaryFunction
	discreteUniform.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = discreteUniform.factory( 0, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = discreteUniform.factory();
	fcn2( 0, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = discreteUniform.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = discreteUniform.factory();
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
	const fcn1 = discreteUniform.factory( 0, 4 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = discreteUniform.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	discreteUniform.factory( true, 3 ); // $ExpectError
	discreteUniform.factory( false, 2 ); // $ExpectError
	discreteUniform.factory( '5', 1 ); // $ExpectError
	discreteUniform.factory( [], 1 ); // $ExpectError
	discreteUniform.factory( {}, 2 ); // $ExpectError
	discreteUniform.factory( ( x: number ): number => x, 2 ); // $ExpectError

	discreteUniform.factory( 9, true ); // $ExpectError
	discreteUniform.factory( 9, false ); // $ExpectError
	discreteUniform.factory( 5, '5' ); // $ExpectError
	discreteUniform.factory( 8, [] ); // $ExpectError
	discreteUniform.factory( 9, {} ); // $ExpectError
	discreteUniform.factory( 8, ( x: number ): number => x ); // $ExpectError

	discreteUniform.factory( true, 3, {} ); // $ExpectError
	discreteUniform.factory( false, 2, {} ); // $ExpectError
	discreteUniform.factory( '5', 1, {} ); // $ExpectError
	discreteUniform.factory( [], 1, {} ); // $ExpectError
	discreteUniform.factory( {}, 2, {} ); // $ExpectError
	discreteUniform.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	discreteUniform.factory( 9, true, {} ); // $ExpectError
	discreteUniform.factory( 9, false, {} ); // $ExpectError
	discreteUniform.factory( 5, '5', {} ); // $ExpectError
	discreteUniform.factory( 8, [], {} ); // $ExpectError
	discreteUniform.factory( 9, {}, {} ); // $ExpectError
	discreteUniform.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	discreteUniform.factory( null ); // $ExpectError
	discreteUniform.factory( 0, 4, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	discreteUniform.factory( 0, 4, { 'prng': 123 } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'prng': 'abc' } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'prng': null } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'prng': [] } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'prng': {} } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'prng': true ); // $ExpectError

	discreteUniform.factory( { 'prng': 123 } ); // $ExpectError
	discreteUniform.factory( { 'prng': 'abc' } ); // $ExpectError
	discreteUniform.factory( { 'prng': null } ); // $ExpectError
	discreteUniform.factory( { 'prng': [] } ); // $ExpectError
	discreteUniform.factory( { 'prng': {} } ); // $ExpectError
	discreteUniform.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	discreteUniform.factory( 0, 4, { 'seed': true } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'seed': 'abc' } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'seed': null } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'seed': [ 'a' ] } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'seed': {} } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'seed': ( x: number ): number => x } ); // $ExpectError

	discreteUniform.factory( { 'seed': true } ); // $ExpectError
	discreteUniform.factory( { 'seed': 'abc' } ); // $ExpectError
	discreteUniform.factory( { 'seed': null } ); // $ExpectError
	discreteUniform.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	discreteUniform.factory( { 'seed': {} } ); // $ExpectError
	discreteUniform.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	discreteUniform.factory( 0, 4, { 'state': 123 } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'state': 'abc' } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'state': null } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'state': [] } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'state': {} } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'state': true ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'state': ( x: number ): number => x } ); // $ExpectError

	discreteUniform.factory( { 'state': 123 } ); // $ExpectError
	discreteUniform.factory( { 'state': 'abc' } ); // $ExpectError
	discreteUniform.factory( { 'state': null } ); // $ExpectError
	discreteUniform.factory( { 'state': [] } ); // $ExpectError
	discreteUniform.factory( { 'state': {} } ); // $ExpectError
	discreteUniform.factory( { 'state': true ); // $ExpectError
	discreteUniform.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	discreteUniform.factory( 0, 4, { 'copy': 123 } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'copy': 'abc' } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'copy': null } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'copy': [] } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'copy': {} } ); // $ExpectError
	discreteUniform.factory( 0, 4, { 'copy': ( x: number ): number => x } ); // $ExpectError

	discreteUniform.factory( { 'copy': 123 } ); // $ExpectError
	discreteUniform.factory( { 'copy': 'abc' } ); // $ExpectError
	discreteUniform.factory( { 'copy': null } ); // $ExpectError
	discreteUniform.factory( { 'copy': [] } ); // $ExpectError
	discreteUniform.factory( { 'copy': {} } ); // $ExpectError
	discreteUniform.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	discreteUniform.factory( 2, 4, {}, 2 ); // $ExpectError
}
