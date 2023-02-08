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

import normal = require( './index' );


// TESTS //

// The function returns an array...
{
	normal( 10, 2, 3 ); // $ExpectType RandomArray
	normal( 10, 1, 2 ); // $ExpectType RandomArray
	normal( 10, 1, 2, {} ); // $ExpectType RandomArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	normal( '5', 2.0, 5.0 ); // $ExpectError
	normal( true, 2.0, 5.0 ); // $ExpectError
	normal( false, 2.0, 5.0 ); // $ExpectError
	normal( null, 2.0, 5.0 ); // $ExpectError
	normal( [], 2.0, 5.0 ); // $ExpectError
	normal( {}, 2.0, 5.0 ); // $ExpectError
	normal( ( x: number ): number => x, 2.0, 5.0 ); // $ExpectError

	normal( '5', 2.0, 5.0, {} ); // $ExpectError
	normal( true, 2.0, 5.0, {} ); // $ExpectError
	normal( false, 2.0, 5.0, {} ); // $ExpectError
	normal( null, 2.0, 5.0, {} ); // $ExpectError
	normal( [], 2.0, 5.0, {} ); // $ExpectError
	normal( {}, 2.0, 5.0, {} ); // $ExpectError
	normal( ( x: number ): number => x, 2.0, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	normal( 10, '5', 5.0 ); // $ExpectError
	normal( 10, true, 5.0 ); // $ExpectError
	normal( 10, false, 5.0 ); // $ExpectError
	normal( 10, null, 5.0 ); // $ExpectError
	normal( 10, [], 5.0 ); // $ExpectError
	normal( 10, {}, 5.0 ); // $ExpectError
	normal( 10, ( x: number ): number => x, 5.0 ); // $ExpectError

	normal( 10, '5', 5.0, {} ); // $ExpectError
	normal( 10, true, 5.0, {} ); // $ExpectError
	normal( 10, false, 5.0, {} ); // $ExpectError
	normal( 10, null, 5.0, {} ); // $ExpectError
	normal( 10, [], 5.0, {} ); // $ExpectError
	normal( 10, {}, 5.0, {} ); // $ExpectError
	normal( 10, ( x: number ): number => x, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	normal( 10, 2.0, '5' ); // $ExpectError
	normal( 10, 2.0, true ); // $ExpectError
	normal( 10, 2.0, false ); // $ExpectError
	normal( 10, 2.0, null ); // $ExpectError
	normal( 10, 2.0, [] ); // $ExpectError
	normal( 10, 2.0, {} ); // $ExpectError
	normal( 10, 2.0, ( x: number ): number => x ); // $ExpectError

	normal( 10, 2.0, '5', {} ); // $ExpectError
	normal( 10, 2.0, true, {} ); // $ExpectError
	normal( 10, 2.0, false, {} ); // $ExpectError
	normal( 10, 2.0, null, {} ); // $ExpectError
	normal( 10, 2.0, [], {} ); // $ExpectError
	normal( 10, 2.0, {}, {} ); // $ExpectError
	normal( 10, 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not a valid object...
{
	normal( 10, 2.0, 5.0, '5' ); // $ExpectError
	normal( 10, 2.0, 5.0, 5 ); // $ExpectError
	normal( 10, 2.0, 5.0, true ); // $ExpectError
	normal( 10, 2.0, 5.0, false ); // $ExpectError
	normal( 10, 2.0, 5.0, [] ); // $ExpectError
	normal( 10, 2.0, 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a supported data type...
{
	normal( 10, 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	normal( 10, 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	normal( 10, 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	normal( 10, 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	normal( 10, 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	normal( 10, 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	normal(); // $ExpectError
	normal( 10 ); // $ExpectError
	normal( 10, 2.0 ); // $ExpectError
	normal( 10, 2.0, 5.0, {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	normal.factory( 2.0, 5.0 ); // $ExpectType UnaryFunction
	normal.factory( 2.0, 5.0, { 'copy': false } ); // $ExpectType UnaryFunction

	normal.factory(); // $ExpectType TernaryFunction
	normal.factory( { 'copy': false } ); // $ExpectType TernaryFunction
}

// The `factory` method returns a function which returns an array...
{
	const fcn1 = normal.factory( 2.0, 5.0 );
	fcn1( 10, ); // $ExpectType RandomArray

	const fcn2 = normal.factory();
	fcn2( 10, 2.0, 5.0 ); // $ExpectType RandomArray
}

// The compiler throws an error if the `factory` method is provided invalid arguments...
{
	normal.factory( '5', 5.0 ); // $ExpectError
	normal.factory( true, 5.0 ); // $ExpectError
	normal.factory( false, 5.0 ); // $ExpectError
	normal.factory( [], 5.0 ); // $ExpectError
	normal.factory( {}, 5.0 ); // $ExpectError
	normal.factory( ( x: number ): number => x, 5.0 ); // $ExpectError

	normal.factory( '5', 5.0, {} ); // $ExpectError
	normal.factory( true, 5.0, {} ); // $ExpectError
	normal.factory( false, 5.0, {} ); // $ExpectError
	normal.factory( [], 5.0, {} ); // $ExpectError
	normal.factory( {}, 5.0, {} ); // $ExpectError
	normal.factory( ( x: number ): number => x, 5.0, {} ); // $ExpectError

	normal.factory( 2.0, '5' ); // $ExpectError
	normal.factory( 2.0, true ); // $ExpectError
	normal.factory( 2.0, false ); // $ExpectError
	normal.factory( 2.0, [] ); // $ExpectError
	normal.factory( 2.0, {} ); // $ExpectError
	normal.factory( 2.0, ( x: number ): number => x ); // $ExpectError

	normal.factory( 2.0, '5', {} ); // $ExpectError
	normal.factory( 2.0, true, {} ); // $ExpectError
	normal.factory( 2.0, false, {} ); // $ExpectError
	normal.factory( 2.0, [], {} ); // $ExpectError
	normal.factory( 2.0, {}, {} ); // $ExpectError
	normal.factory( 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not a valid object...
{
	normal.factory( null ); // $ExpectError
	normal.factory( 2.0, 5.0, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	normal.factory( 2.0, 5.0, { 'prng': 123 } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'prng': 'abc' } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'prng': null } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'prng': [] } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'prng': {} } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'prng': true ); // $ExpectError

	normal.factory( { 'prng': 123 } ); // $ExpectError
	normal.factory( { 'prng': 'abc' } ); // $ExpectError
	normal.factory( { 'prng': null } ); // $ExpectError
	normal.factory( { 'prng': [] } ); // $ExpectError
	normal.factory( { 'prng': {} } ); // $ExpectError
	normal.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	normal.factory( 2.0, 5.0, { 'seed': true } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'seed': 'abc' } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'seed': null } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'seed': [ 'a' ] } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'seed': {} } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'seed': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'seed': true } ); // $ExpectError
	normal.factory( { 'seed': 'abc' } ); // $ExpectError
	normal.factory( { 'seed': null } ); // $ExpectError
	normal.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	normal.factory( { 'seed': {} } ); // $ExpectError
	normal.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	normal.factory( 2.0, 5.0, { 'state': 123 } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'state': 'abc' } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'state': null } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'state': [] } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'state': {} } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'state': true ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'state': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'state': 123 } ); // $ExpectError
	normal.factory( { 'state': 'abc' } ); // $ExpectError
	normal.factory( { 'state': null } ); // $ExpectError
	normal.factory( { 'state': [] } ); // $ExpectError
	normal.factory( { 'state': {} } ); // $ExpectError
	normal.factory( { 'state': true ); // $ExpectError
	normal.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	normal.factory( 2.0, 5.0, { 'copy': 123 } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'copy': 'abc' } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'copy': null } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'copy': [] } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'copy': {} } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'copy': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'copy': 123 } ); // $ExpectError
	normal.factory( { 'copy': 'abc' } ); // $ExpectError
	normal.factory( { 'copy': null } ); // $ExpectError
	normal.factory( { 'copy': [] } ); // $ExpectError
	normal.factory( { 'copy': {} } ); // $ExpectError
	normal.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `dtype` option which is not a supported data type...
{
	normal.factory( 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	normal.factory( 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	normal.factory( { 'dtype': 123 } ); // $ExpectError
	normal.factory( { 'dtype': 'abc' } ); // $ExpectError
	normal.factory( { 'dtype': null } ); // $ExpectError
	normal.factory( { 'dtype': [] } ); // $ExpectError
	normal.factory( { 'dtype': {} } ); // $ExpectError
	normal.factory( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	normal.factory( 2.0, 5.0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = normal.factory( 2.0, 5.0 );
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

	const fcn2 = normal.factory();
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
	const fcn1 = normal.factory();
	fcn1( 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	const fcn2 = normal.factory( 2.0, 5.0 );
	fcn2( { 'dtype': 123 } ); // $ExpectError
	fcn2( { 'dtype': 'abc' } ); // $ExpectError
	fcn2( { 'dtype': null } ); // $ExpectError
	fcn2( { 'dtype': [] } ); // $ExpectError
	fcn2( { 'dtype': {} } ); // $ExpectError
	fcn2( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = normal.factory( 2.0, 5.0 );
	fcn1(); // $ExpectError
	fcn1( 1, 1, 1 ); // $ExpectError

	const fcn2 = normal.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 1, 1, 1, 1 ); // $ExpectError
}
