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

import erlang = require( './index' );


// TESTS //

// The function returns a number...
{
	erlang( 2, 3 ); // $ExpectType number
	erlang( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	erlang( true, 3 ); // $ExpectError
	erlang( false, 2 ); // $ExpectError
	erlang( '5', 1 ); // $ExpectError
	erlang( [], 1 ); // $ExpectError
	erlang( {}, 2 ); // $ExpectError
	erlang( ( x: number ): number => x, 2 ); // $ExpectError

	erlang( 9, true ); // $ExpectError
	erlang( 9, false ); // $ExpectError
	erlang( 5, '5' ); // $ExpectError
	erlang( 8, [] ); // $ExpectError
	erlang( 9, {} ); // $ExpectError
	erlang( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	erlang(); // $ExpectError
	erlang( 2 ); // $ExpectError
	erlang( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	erlang.factory( 2, 2 ); // $ExpectType NullaryFunction
	erlang.factory(); // $ExpectType BinaryFunction
	erlang.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = erlang.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = erlang.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = erlang.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = erlang.factory();
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
	const fcn1 = erlang.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = erlang.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	erlang.factory( true, 3 ); // $ExpectError
	erlang.factory( false, 2 ); // $ExpectError
	erlang.factory( '5', 1 ); // $ExpectError
	erlang.factory( [], 1 ); // $ExpectError
	erlang.factory( {}, 2 ); // $ExpectError
	erlang.factory( ( x: number ): number => x, 2 ); // $ExpectError

	erlang.factory( 9, true ); // $ExpectError
	erlang.factory( 9, false ); // $ExpectError
	erlang.factory( 5, '5' ); // $ExpectError
	erlang.factory( 8, [] ); // $ExpectError
	erlang.factory( 9, {} ); // $ExpectError
	erlang.factory( 8, ( x: number ): number => x ); // $ExpectError

	erlang.factory( true, 3, {} ); // $ExpectError
	erlang.factory( false, 2, {} ); // $ExpectError
	erlang.factory( '5', 1, {} ); // $ExpectError
	erlang.factory( [], 1, {} ); // $ExpectError
	erlang.factory( {}, 2, {} ); // $ExpectError
	erlang.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	erlang.factory( 9, true, {} ); // $ExpectError
	erlang.factory( 9, false, {} ); // $ExpectError
	erlang.factory( 5, '5', {} ); // $ExpectError
	erlang.factory( 8, [], {} ); // $ExpectError
	erlang.factory( 9, {}, {} ); // $ExpectError
	erlang.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	erlang.factory( null ); // $ExpectError
	erlang.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	erlang.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	erlang.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	erlang.factory( 2, 2, { 'prng': null } ); // $ExpectError
	erlang.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	erlang.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	erlang.factory( 2, 2, { 'prng': true ); // $ExpectError

	erlang.factory( { 'prng': 123 } ); // $ExpectError
	erlang.factory( { 'prng': 'abc' } ); // $ExpectError
	erlang.factory( { 'prng': null } ); // $ExpectError
	erlang.factory( { 'prng': [] } ); // $ExpectError
	erlang.factory( { 'prng': {} } ); // $ExpectError
	erlang.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	erlang.factory( 2, 2, { 'seed': true } ); // $ExpectError
	erlang.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	erlang.factory( 2, 2, { 'seed': null } ); // $ExpectError
	erlang.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	erlang.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	erlang.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	erlang.factory( { 'seed': true } ); // $ExpectError
	erlang.factory( { 'seed': 'abc' } ); // $ExpectError
	erlang.factory( { 'seed': null } ); // $ExpectError
	erlang.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	erlang.factory( { 'seed': {} } ); // $ExpectError
	erlang.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	erlang.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	erlang.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	erlang.factory( 2, 2, { 'state': null } ); // $ExpectError
	erlang.factory( 2, 2, { 'state': [] } ); // $ExpectError
	erlang.factory( 2, 2, { 'state': {} } ); // $ExpectError
	erlang.factory( 2, 2, { 'state': true ); // $ExpectError
	erlang.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	erlang.factory( { 'state': 123 } ); // $ExpectError
	erlang.factory( { 'state': 'abc' } ); // $ExpectError
	erlang.factory( { 'state': null } ); // $ExpectError
	erlang.factory( { 'state': [] } ); // $ExpectError
	erlang.factory( { 'state': {} } ); // $ExpectError
	erlang.factory( { 'state': true ); // $ExpectError
	erlang.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	erlang.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	erlang.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	erlang.factory( 2, 2, { 'copy': null } ); // $ExpectError
	erlang.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	erlang.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	erlang.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	erlang.factory( { 'copy': 123 } ); // $ExpectError
	erlang.factory( { 'copy': 'abc' } ); // $ExpectError
	erlang.factory( { 'copy': null } ); // $ExpectError
	erlang.factory( { 'copy': [] } ); // $ExpectError
	erlang.factory( { 'copy': {} } ); // $ExpectError
	erlang.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	erlang.factory( 2, 4, {}, 2 ); // $ExpectError
}
