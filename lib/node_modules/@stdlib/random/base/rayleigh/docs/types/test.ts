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

import rayleigh = require( './index' );


// TESTS //

// The function returns a number...
{
	rayleigh( 2.3 ); // $ExpectType number
	rayleigh( 0.5 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number...
{
	rayleigh( true ); // $ExpectError
	rayleigh( false ); // $ExpectError
	rayleigh( '5' ); // $ExpectError
	rayleigh( [] ); // $ExpectError
	rayleigh( {} ); // $ExpectError
	rayleigh( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	rayleigh(); // $ExpectError
	rayleigh( 2.3, 3.1 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	rayleigh.factory( 2.3 ); // $ExpectType NullaryFunction
	rayleigh.factory(); // $ExpectType BinaryFunction
	rayleigh.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = rayleigh.factory( 2.3 );
	fcn1(); // $ExpectType number

	const fcn2 = rayleigh.factory();
	fcn2( 2.3 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = rayleigh.factory( 2.3 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = rayleigh.factory();
	fcn2( true ); // $ExpectError
	fcn2( false ); // $ExpectError
	fcn2( '5' ); // $ExpectError
	fcn2( [] ); // $ExpectError
	fcn2( {} ); // $ExpectError
	fcn2( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = rayleigh.factory( 2.3 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = rayleigh.factory();
	fcn2(); // $ExpectError
	fcn2( 1, 2 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument other than a number aside from an options object...
{
	rayleigh.factory( true, {} ); // $ExpectError
	rayleigh.factory( false, {} ); // $ExpectError
	rayleigh.factory( '5', {} ); // $ExpectError
	rayleigh.factory( [], {} ); // $ExpectError
	rayleigh.factory( {}, {} ); // $ExpectError
	rayleigh.factory( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	rayleigh.factory( null ); // $ExpectError
	rayleigh.factory( 2.3, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	rayleigh.factory( 2.3, { 'prng': 123 } ); // $ExpectError
	rayleigh.factory( 2.3, { 'prng': 'abc' } ); // $ExpectError
	rayleigh.factory( 2.3, { 'prng': null } ); // $ExpectError
	rayleigh.factory( 2.3, { 'prng': [] } ); // $ExpectError
	rayleigh.factory( 2.3, { 'prng': {} } ); // $ExpectError
	rayleigh.factory( 2.3, { 'prng': true ); // $ExpectError

	rayleigh.factory( { 'prng': 123 } ); // $ExpectError
	rayleigh.factory( { 'prng': 'abc' } ); // $ExpectError
	rayleigh.factory( { 'prng': null } ); // $ExpectError
	rayleigh.factory( { 'prng': [] } ); // $ExpectError
	rayleigh.factory( { 'prng': {} } ); // $ExpectError
	rayleigh.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	rayleigh.factory( 2.3, { 'seed': true } ); // $ExpectError
	rayleigh.factory( 2.3, { 'seed': 'abc' } ); // $ExpectError
	rayleigh.factory( 2.3, { 'seed': null } ); // $ExpectError
	rayleigh.factory( 2.3, { 'seed': [ 'a' ] } ); // $ExpectError
	rayleigh.factory( 2.3, { 'seed': {} } ); // $ExpectError
	rayleigh.factory( 2.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	rayleigh.factory( { 'seed': true } ); // $ExpectError
	rayleigh.factory( { 'seed': 'abc' } ); // $ExpectError
	rayleigh.factory( { 'seed': null } ); // $ExpectError
	rayleigh.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	rayleigh.factory( { 'seed': {} } ); // $ExpectError
	rayleigh.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	rayleigh.factory( 2.3, { 'state': 123 } ); // $ExpectError
	rayleigh.factory( 2.3, { 'state': 'abc' } ); // $ExpectError
	rayleigh.factory( 2.3, { 'state': null } ); // $ExpectError
	rayleigh.factory( 2.3, { 'state': [] } ); // $ExpectError
	rayleigh.factory( 2.3, { 'state': {} } ); // $ExpectError
	rayleigh.factory( 2.3, { 'state': true ); // $ExpectError
	rayleigh.factory( 2.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	rayleigh.factory( { 'state': 123 } ); // $ExpectError
	rayleigh.factory( { 'state': 'abc' } ); // $ExpectError
	rayleigh.factory( { 'state': null } ); // $ExpectError
	rayleigh.factory( { 'state': [] } ); // $ExpectError
	rayleigh.factory( { 'state': {} } ); // $ExpectError
	rayleigh.factory( { 'state': true ); // $ExpectError
	rayleigh.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	rayleigh.factory( 2.3, { 'copy': 123 } ); // $ExpectError
	rayleigh.factory( 2.3, { 'copy': 'abc' } ); // $ExpectError
	rayleigh.factory( 2.3, { 'copy': null } ); // $ExpectError
	rayleigh.factory( 2.3, { 'copy': [] } ); // $ExpectError
	rayleigh.factory( 2.3, { 'copy': {} } ); // $ExpectError
	rayleigh.factory( 2.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	rayleigh.factory( { 'copy': 123 } ); // $ExpectError
	rayleigh.factory( { 'copy': 'abc' } ); // $ExpectError
	rayleigh.factory( { 'copy': null } ); // $ExpectError
	rayleigh.factory( { 'copy': [] } ); // $ExpectError
	rayleigh.factory( { 'copy': {} } ); // $ExpectError
	rayleigh.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than two arguments...
{
	rayleigh.factory( 2, {}, 2 ); // $ExpectError
}
