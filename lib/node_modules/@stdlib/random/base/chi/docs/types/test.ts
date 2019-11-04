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

import chi = require( './index' );


// TESTS //

// The function returns a number...
{
	chi( 2.3 ); // $ExpectType number
	chi( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	chi( true ); // $ExpectError
	chi( false ); // $ExpectError
	chi( '5' ); // $ExpectError
	chi( [] ); // $ExpectError
	chi( {} ); // $ExpectError
	chi( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	chi(); // $ExpectError
	chi( 2.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	chi.factory( 2.3 ); // $ExpectType NullaryFunction
	chi.factory(); // $ExpectType BinaryFunction
	chi.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = chi.factory( 2.3 );
	fcn1(); // $ExpectType number

	const fcn2 = chi.factory();
	fcn2( 2.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = chi.factory( 2.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = chi.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = chi.factory( 2.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = chi.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	chi.factory( true, {} ); // $ExpectError
	chi.factory( false, {} ); // $ExpectError
	chi.factory( '5', {} ); // $ExpectError
	chi.factory( [], {} ); // $ExpectError
	chi.factory( {}, {} ); // $ExpectError
	chi.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	chi.factory( null ); // $ExpectError
	chi.factory( 2.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	chi.factory( 2.3, { 'prng': 123 } ); // $ExpectError
	chi.factory( 2.3, { 'prng': 'abc' } ); // $ExpectError
	chi.factory( 2.3, { 'prng': null } ); // $ExpectError
	chi.factory( 2.3, { 'prng': [] } ); // $ExpectError
	chi.factory( 2.3, { 'prng': {} } ); // $ExpectError
	chi.factory( 2.3, { 'prng': true ); // $ExpectError

	chi.factory( { 'prng': 123 } ); // $ExpectError
	chi.factory( { 'prng': 'abc' } ); // $ExpectError
	chi.factory( { 'prng': null } ); // $ExpectError
	chi.factory( { 'prng': [] } ); // $ExpectError
	chi.factory( { 'prng': {} } ); // $ExpectError
	chi.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	chi.factory( 2.3, { 'seed': true } ); // $ExpectError
	chi.factory( 2.3, { 'seed': 'abc' } ); // $ExpectError
	chi.factory( 2.3, { 'seed': null } ); // $ExpectError
	chi.factory( 2.3, { 'seed': [ 'a' ] } ); // $ExpectError
	chi.factory( 2.3, { 'seed': {} } ); // $ExpectError
	chi.factory( 2.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	chi.factory( { 'seed': true } ); // $ExpectError
	chi.factory( { 'seed': 'abc' } ); // $ExpectError
	chi.factory( { 'seed': null } ); // $ExpectError
	chi.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	chi.factory( { 'seed': {} } ); // $ExpectError
	chi.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	chi.factory( 2.3, { 'state': 123 } ); // $ExpectError
	chi.factory( 2.3, { 'state': 'abc' } ); // $ExpectError
	chi.factory( 2.3, { 'state': null } ); // $ExpectError
	chi.factory( 2.3, { 'state': [] } ); // $ExpectError
	chi.factory( 2.3, { 'state': {} } ); // $ExpectError
	chi.factory( 2.3, { 'state': true ); // $ExpectError
	chi.factory( 2.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	chi.factory( { 'state': 123 } ); // $ExpectError
	chi.factory( { 'state': 'abc' } ); // $ExpectError
	chi.factory( { 'state': null } ); // $ExpectError
	chi.factory( { 'state': [] } ); // $ExpectError
	chi.factory( { 'state': {} } ); // $ExpectError
	chi.factory( { 'state': true ); // $ExpectError
	chi.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	chi.factory( 2.3, { 'copy': 123 } ); // $ExpectError
	chi.factory( 2.3, { 'copy': 'abc' } ); // $ExpectError
	chi.factory( 2.3, { 'copy': null } ); // $ExpectError
	chi.factory( 2.3, { 'copy': [] } ); // $ExpectError
	chi.factory( 2.3, { 'copy': {} } ); // $ExpectError
	chi.factory( 2.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	chi.factory( { 'copy': 123 } ); // $ExpectError
	chi.factory( { 'copy': 'abc' } ); // $ExpectError
	chi.factory( { 'copy': null } ); // $ExpectError
	chi.factory( { 'copy': [] } ); // $ExpectError
	chi.factory( { 'copy': {} } ); // $ExpectError
	chi.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	chi.factory( 2, {}, 2 ); // $ExpectError
}
