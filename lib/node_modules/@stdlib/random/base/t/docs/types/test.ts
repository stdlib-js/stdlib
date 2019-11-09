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

import t = require( './index' );


// TESTS //

// The function returns a number...
{
	t( 2.3 ); // $ExpectType number
	t( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	t( true ); // $ExpectError
	t( false ); // $ExpectError
	t( '5' ); // $ExpectError
	t( [] ); // $ExpectError
	t( {} ); // $ExpectError
	t( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	t(); // $ExpectError
	t( 2.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	t.factory( 2.3 ); // $ExpectType NullaryFunction
	t.factory(); // $ExpectType BinaryFunction
	t.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = t.factory( 2.3 );
	fcn1(); // $ExpectType number

	const fcn2 = t.factory();
	fcn2( 2.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = t.factory( 2.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = t.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = t.factory( 2.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = t.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	t.factory( true, {} ); // $ExpectError
	t.factory( false, {} ); // $ExpectError
	t.factory( '5', {} ); // $ExpectError
	t.factory( [], {} ); // $ExpectError
	t.factory( {}, {} ); // $ExpectError
	t.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	t.factory( null ); // $ExpectError
	t.factory( 2.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	t.factory( 2.3, { 'prng': 123 } ); // $ExpectError
	t.factory( 2.3, { 'prng': 'abc' } ); // $ExpectError
	t.factory( 2.3, { 'prng': null } ); // $ExpectError
	t.factory( 2.3, { 'prng': [] } ); // $ExpectError
	t.factory( 2.3, { 'prng': {} } ); // $ExpectError
	t.factory( 2.3, { 'prng': true ); // $ExpectError

	t.factory( { 'prng': 123 } ); // $ExpectError
	t.factory( { 'prng': 'abc' } ); // $ExpectError
	t.factory( { 'prng': null } ); // $ExpectError
	t.factory( { 'prng': [] } ); // $ExpectError
	t.factory( { 'prng': {} } ); // $ExpectError
	t.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	t.factory( 2.3, { 'seed': true } ); // $ExpectError
	t.factory( 2.3, { 'seed': 'abc' } ); // $ExpectError
	t.factory( 2.3, { 'seed': null } ); // $ExpectError
	t.factory( 2.3, { 'seed': [ 'a' ] } ); // $ExpectError
	t.factory( 2.3, { 'seed': {} } ); // $ExpectError
	t.factory( 2.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	t.factory( { 'seed': true } ); // $ExpectError
	t.factory( { 'seed': 'abc' } ); // $ExpectError
	t.factory( { 'seed': null } ); // $ExpectError
	t.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	t.factory( { 'seed': {} } ); // $ExpectError
	t.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	t.factory( 2.3, { 'state': 123 } ); // $ExpectError
	t.factory( 2.3, { 'state': 'abc' } ); // $ExpectError
	t.factory( 2.3, { 'state': null } ); // $ExpectError
	t.factory( 2.3, { 'state': [] } ); // $ExpectError
	t.factory( 2.3, { 'state': {} } ); // $ExpectError
	t.factory( 2.3, { 'state': true ); // $ExpectError
	t.factory( 2.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	t.factory( { 'state': 123 } ); // $ExpectError
	t.factory( { 'state': 'abc' } ); // $ExpectError
	t.factory( { 'state': null } ); // $ExpectError
	t.factory( { 'state': [] } ); // $ExpectError
	t.factory( { 'state': {} } ); // $ExpectError
	t.factory( { 'state': true ); // $ExpectError
	t.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	t.factory( 2.3, { 'copy': 123 } ); // $ExpectError
	t.factory( 2.3, { 'copy': 'abc' } ); // $ExpectError
	t.factory( 2.3, { 'copy': null } ); // $ExpectError
	t.factory( 2.3, { 'copy': [] } ); // $ExpectError
	t.factory( 2.3, { 'copy': {} } ); // $ExpectError
	t.factory( 2.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	t.factory( { 'copy': 123 } ); // $ExpectError
	t.factory( { 'copy': 'abc' } ); // $ExpectError
	t.factory( { 'copy': null } ); // $ExpectError
	t.factory( { 'copy': [] } ); // $ExpectError
	t.factory( { 'copy': {} } ); // $ExpectError
	t.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	t.factory( 2, {}, 2 ); // $ExpectError
}
