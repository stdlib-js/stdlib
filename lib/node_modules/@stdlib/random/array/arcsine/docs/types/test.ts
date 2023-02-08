/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// The function returns an array...
{
	arcsine( 10, 2, 3 ); // $ExpectType RandomArray
	arcsine( 10, 1, 2 ); // $ExpectType RandomArray
	arcsine( 10, 1, 2, {} ); // $ExpectType RandomArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	arcsine( '5', 2.0, 5.0 ); // $ExpectError
	arcsine( true, 2.0, 5.0 ); // $ExpectError
	arcsine( false, 2.0, 5.0 ); // $ExpectError
	arcsine( null, 2.0, 5.0 ); // $ExpectError
	arcsine( [], 2.0, 5.0 ); // $ExpectError
	arcsine( {}, 2.0, 5.0 ); // $ExpectError
	arcsine( ( x: number ): number => x, 2.0, 5.0 ); // $ExpectError

	arcsine( '5', 2.0, 5.0, {} ); // $ExpectError
	arcsine( true, 2.0, 5.0, {} ); // $ExpectError
	arcsine( false, 2.0, 5.0, {} ); // $ExpectError
	arcsine( null, 2.0, 5.0, {} ); // $ExpectError
	arcsine( [], 2.0, 5.0, {} ); // $ExpectError
	arcsine( {}, 2.0, 5.0, {} ); // $ExpectError
	arcsine( ( x: number ): number => x, 2.0, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	arcsine( 10, '5', 5.0 ); // $ExpectError
	arcsine( 10, true, 5.0 ); // $ExpectError
	arcsine( 10, false, 5.0 ); // $ExpectError
	arcsine( 10, null, 5.0 ); // $ExpectError
	arcsine( 10, [], 5.0 ); // $ExpectError
	arcsine( 10, {}, 5.0 ); // $ExpectError
	arcsine( 10, ( x: number ): number => x, 5.0 ); // $ExpectError

	arcsine( 10, '5', 5.0, {} ); // $ExpectError
	arcsine( 10, true, 5.0, {} ); // $ExpectError
	arcsine( 10, false, 5.0, {} ); // $ExpectError
	arcsine( 10, null, 5.0, {} ); // $ExpectError
	arcsine( 10, [], 5.0, {} ); // $ExpectError
	arcsine( 10, {}, 5.0, {} ); // $ExpectError
	arcsine( 10, ( x: number ): number => x, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	arcsine( 10, 2.0, '5' ); // $ExpectError
	arcsine( 10, 2.0, true ); // $ExpectError
	arcsine( 10, 2.0, false ); // $ExpectError
	arcsine( 10, 2.0, null ); // $ExpectError
	arcsine( 10, 2.0, [] ); // $ExpectError
	arcsine( 10, 2.0, {} ); // $ExpectError
	arcsine( 10, 2.0, ( x: number ): number => x ); // $ExpectError

	arcsine( 10, 2.0, '5', {} ); // $ExpectError
	arcsine( 10, 2.0, true, {} ); // $ExpectError
	arcsine( 10, 2.0, false, {} ); // $ExpectError
	arcsine( 10, 2.0, null, {} ); // $ExpectError
	arcsine( 10, 2.0, [], {} ); // $ExpectError
	arcsine( 10, 2.0, {}, {} ); // $ExpectError
	arcsine( 10, 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not a valid object...
{
	arcsine( 10, 2.0, 5.0, '5' ); // $ExpectError
	arcsine( 10, 2.0, 5.0, 5 ); // $ExpectError
	arcsine( 10, 2.0, 5.0, true ); // $ExpectError
	arcsine( 10, 2.0, 5.0, false ); // $ExpectError
	arcsine( 10, 2.0, 5.0, [] ); // $ExpectError
	arcsine( 10, 2.0, 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a supported data type...
{
	arcsine( 10, 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	arcsine( 10, 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	arcsine( 10, 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	arcsine( 10, 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	arcsine( 10, 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	arcsine( 10, 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	arcsine(); // $ExpectError
	arcsine( 10 ); // $ExpectError
	arcsine( 10, 2.0 ); // $ExpectError
	arcsine( 10, 2.0, 5.0, {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	arcsine.factory( 2.0, 5.0 ); // $ExpectType UnaryFunction
	arcsine.factory( 2.0, 5.0, { 'copy': false } ); // $ExpectType UnaryFunction

	arcsine.factory(); // $ExpectType TernaryFunction
	arcsine.factory( { 'copy': false } ); // $ExpectType TernaryFunction
}

// The `factory` method returns a function which returns an array...
{
	const fcn1 = arcsine.factory( 2.0, 5.0 );
	fcn1( 10, ); // $ExpectType RandomArray

	const fcn2 = arcsine.factory();
	fcn2( 10, 2.0, 5.0 ); // $ExpectType RandomArray
}

// The compiler throws an error if the `factory` method is provided invalid arguments...
{
	arcsine.factory( '5', 5.0 ); // $ExpectError
	arcsine.factory( true, 5.0 ); // $ExpectError
	arcsine.factory( false, 5.0 ); // $ExpectError
	arcsine.factory( [], 5.0 ); // $ExpectError
	arcsine.factory( {}, 5.0 ); // $ExpectError
	arcsine.factory( ( x: number ): number => x, 5.0 ); // $ExpectError

	arcsine.factory( '5', 5.0, {} ); // $ExpectError
	arcsine.factory( true, 5.0, {} ); // $ExpectError
	arcsine.factory( false, 5.0, {} ); // $ExpectError
	arcsine.factory( [], 5.0, {} ); // $ExpectError
	arcsine.factory( {}, 5.0, {} ); // $ExpectError
	arcsine.factory( ( x: number ): number => x, 5.0, {} ); // $ExpectError

	arcsine.factory( 2.0, '5' ); // $ExpectError
	arcsine.factory( 2.0, true ); // $ExpectError
	arcsine.factory( 2.0, false ); // $ExpectError
	arcsine.factory( 2.0, [] ); // $ExpectError
	arcsine.factory( 2.0, {} ); // $ExpectError
	arcsine.factory( 2.0, ( x: number ): number => x ); // $ExpectError

	arcsine.factory( 2.0, '5', {} ); // $ExpectError
	arcsine.factory( 2.0, true, {} ); // $ExpectError
	arcsine.factory( 2.0, false, {} ); // $ExpectError
	arcsine.factory( 2.0, [], {} ); // $ExpectError
	arcsine.factory( 2.0, {}, {} ); // $ExpectError
	arcsine.factory( 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not a valid object...
{
	arcsine.factory( null ); // $ExpectError
	arcsine.factory( 2.0, 5.0, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	arcsine.factory( 2.0, 5.0, { 'prng': 123 } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'prng': 'abc' } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'prng': null } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'prng': [] } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'prng': {} } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'prng': true ); // $ExpectError

	arcsine.factory( { 'prng': 123 } ); // $ExpectError
	arcsine.factory( { 'prng': 'abc' } ); // $ExpectError
	arcsine.factory( { 'prng': null } ); // $ExpectError
	arcsine.factory( { 'prng': [] } ); // $ExpectError
	arcsine.factory( { 'prng': {} } ); // $ExpectError
	arcsine.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	arcsine.factory( 2.0, 5.0, { 'seed': true } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'seed': 'abc' } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'seed': null } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'seed': [ 'a' ] } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'seed': {} } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'seed': ( x: number ): number => x } ); // $ExpectError

	arcsine.factory( { 'seed': true } ); // $ExpectError
	arcsine.factory( { 'seed': 'abc' } ); // $ExpectError
	arcsine.factory( { 'seed': null } ); // $ExpectError
	arcsine.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	arcsine.factory( { 'seed': {} } ); // $ExpectError
	arcsine.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	arcsine.factory( 2.0, 5.0, { 'state': 123 } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'state': 'abc' } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'state': null } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'state': [] } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'state': {} } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'state': true ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'state': ( x: number ): number => x } ); // $ExpectError

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
	arcsine.factory( 2.0, 5.0, { 'copy': 123 } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'copy': 'abc' } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'copy': null } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'copy': [] } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'copy': {} } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'copy': ( x: number ): number => x } ); // $ExpectError

	arcsine.factory( { 'copy': 123 } ); // $ExpectError
	arcsine.factory( { 'copy': 'abc' } ); // $ExpectError
	arcsine.factory( { 'copy': null } ); // $ExpectError
	arcsine.factory( { 'copy': [] } ); // $ExpectError
	arcsine.factory( { 'copy': {} } ); // $ExpectError
	arcsine.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `dtype` option which is not a supported data type...
{
	arcsine.factory( 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	arcsine.factory( 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	arcsine.factory( { 'dtype': 123 } ); // $ExpectError
	arcsine.factory( { 'dtype': 'abc' } ); // $ExpectError
	arcsine.factory( { 'dtype': null } ); // $ExpectError
	arcsine.factory( { 'dtype': [] } ); // $ExpectError
	arcsine.factory( { 'dtype': {} } ); // $ExpectError
	arcsine.factory( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	arcsine.factory( 2.0, 5.0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = arcsine.factory( 2.0, 5.0 );
	fcn1( '5' ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( null ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	fcn1( '5', {} ); // $ExpectError
	fcn1( true, {} ); // $ExpectError
	fcn1( false, {} ); // $ExpectError
	fcn1( null, {} ); // $ExpectError
	fcn1( [], {} ); // $ExpectError
	fcn1( {}, {} ); // $ExpectError
	fcn1( ( x: number ): number => x, {} ); // $ExpectError

	const fcn2 = arcsine.factory();
	fcn2( true, 2.0, 5.0 ); // $ExpectError
	fcn2( false, 2.0, 5.0 ); // $ExpectError
	fcn2( '5', 2.0, 5.0 ); // $ExpectError
	fcn2( [], 2.0, 5.0 ); // $ExpectError
	fcn2( {}, 2.0, 5.0 ); // $ExpectError
	fcn2( ( x: number ): number => x, 2.0, 5.0 ); // $ExpectError

	fcn2( true, 2.0, 5.0, {} ); // $ExpectError
	fcn2( false, 2.0, 5.0, {} ); // $ExpectError
	fcn2( '5', 2.0, 5.0, {} ); // $ExpectError
	fcn2( [], 2.0, 5.0, {} ); // $ExpectError
	fcn2( {}, 2.0, 5.0, {} ); // $ExpectError
	fcn2( ( x: number ): number => x, 2.0, 5.0, {} ); // $ExpectError

	fcn2( 10, true, 5.0 ); // $ExpectError
	fcn2( 10, false, 5.0 ); // $ExpectError
	fcn2( 10, '5', 5.0 ); // $ExpectError
	fcn2( 10, [], 5.0 ); // $ExpectError
	fcn2( 10, {}, 5.0 ); // $ExpectError
	fcn2( 10, ( x: number ): number => x, 5.0 ); // $ExpectError

	fcn2( 10, true, 5.0, {} ); // $ExpectError
	fcn2( 10, false, 5.0, {} ); // $ExpectError
	fcn2( 10, '5', 5.0, {} ); // $ExpectError
	fcn2( 10, [], 5.0, {} ); // $ExpectError
	fcn2( 10, {}, 5.0, {} ); // $ExpectError
	fcn2( 10, ( x: number ): number => x, 5.0, {} ); // $ExpectError

	fcn2( 10, 2.0, true ); // $ExpectError
	fcn2( 10, 2.0, false ); // $ExpectError
	fcn2( 10, 2.0, '5' ); // $ExpectError
	fcn2( 10, 2.0, [] ); // $ExpectError
	fcn2( 10, 2.0, {} ); // $ExpectError
	fcn2( 10, 2.0, ( x: number ): number => x ); // $ExpectError

	fcn2( 10, 2.0, true, {} ); // $ExpectError
	fcn2( 10, 2.0, false, {} ); // $ExpectError
	fcn2( 10, 2.0, '5', {} ); // $ExpectError
	fcn2( 10, 2.0, [], {} ); // $ExpectError
	fcn2( 10, 2.0, {}, {} ); // $ExpectError
	fcn2( 10, 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `dtype` option which is not a supported data type...
{
	const fcn1 = arcsine.factory();
	fcn1( 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	const fcn2 = arcsine.factory( 2.0, 5.0 );
	fcn2( { 'dtype': 123 } ); // $ExpectError
	fcn2( { 'dtype': 'abc' } ); // $ExpectError
	fcn2( { 'dtype': null } ); // $ExpectError
	fcn2( { 'dtype': [] } ); // $ExpectError
	fcn2( { 'dtype': {} } ); // $ExpectError
	fcn2( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = arcsine.factory( 2.0, 5.0 );
	fcn1(); // $ExpectError
	fcn1( 1, 1, 1 ); // $ExpectError

	const fcn2 = arcsine.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 1, 1, 1, 1 ); // $ExpectError
}
