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

import uniform = require( './index' );


// TESTS //

// The function returns an array...
{
	uniform( 10, 2, 3 ); // $ExpectType RandomArray
	uniform( 10, 1, 2 ); // $ExpectType RandomArray
	uniform( 10, 1, 2, {} ); // $ExpectType RandomArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	uniform( '5', 2.0, 5.0 ); // $ExpectError
	uniform( true, 2.0, 5.0 ); // $ExpectError
	uniform( false, 2.0, 5.0 ); // $ExpectError
	uniform( null, 2.0, 5.0 ); // $ExpectError
	uniform( [], 2.0, 5.0 ); // $ExpectError
	uniform( {}, 2.0, 5.0 ); // $ExpectError
	uniform( ( x: number ): number => x, 2.0, 5.0 ); // $ExpectError

	uniform( '5', 2.0, 5.0, {} ); // $ExpectError
	uniform( true, 2.0, 5.0, {} ); // $ExpectError
	uniform( false, 2.0, 5.0, {} ); // $ExpectError
	uniform( null, 2.0, 5.0, {} ); // $ExpectError
	uniform( [], 2.0, 5.0, {} ); // $ExpectError
	uniform( {}, 2.0, 5.0, {} ); // $ExpectError
	uniform( ( x: number ): number => x, 2.0, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	uniform( 10, '5', 5.0 ); // $ExpectError
	uniform( 10, true, 5.0 ); // $ExpectError
	uniform( 10, false, 5.0 ); // $ExpectError
	uniform( 10, null, 5.0 ); // $ExpectError
	uniform( 10, [], 5.0 ); // $ExpectError
	uniform( 10, {}, 5.0 ); // $ExpectError
	uniform( 10, ( x: number ): number => x, 5.0 ); // $ExpectError

	uniform( 10, '5', 5.0, {} ); // $ExpectError
	uniform( 10, true, 5.0, {} ); // $ExpectError
	uniform( 10, false, 5.0, {} ); // $ExpectError
	uniform( 10, null, 5.0, {} ); // $ExpectError
	uniform( 10, [], 5.0, {} ); // $ExpectError
	uniform( 10, {}, 5.0, {} ); // $ExpectError
	uniform( 10, ( x: number ): number => x, 5.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	uniform( 10, 2.0, '5' ); // $ExpectError
	uniform( 10, 2.0, true ); // $ExpectError
	uniform( 10, 2.0, false ); // $ExpectError
	uniform( 10, 2.0, null ); // $ExpectError
	uniform( 10, 2.0, [] ); // $ExpectError
	uniform( 10, 2.0, {} ); // $ExpectError
	uniform( 10, 2.0, ( x: number ): number => x ); // $ExpectError

	uniform( 10, 2.0, '5', {} ); // $ExpectError
	uniform( 10, 2.0, true, {} ); // $ExpectError
	uniform( 10, 2.0, false, {} ); // $ExpectError
	uniform( 10, 2.0, null, {} ); // $ExpectError
	uniform( 10, 2.0, [], {} ); // $ExpectError
	uniform( 10, 2.0, {}, {} ); // $ExpectError
	uniform( 10, 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not a valid object...
{
	uniform( 10, 2.0, 5.0, '5' ); // $ExpectError
	uniform( 10, 2.0, 5.0, 5 ); // $ExpectError
	uniform( 10, 2.0, 5.0, true ); // $ExpectError
	uniform( 10, 2.0, 5.0, false ); // $ExpectError
	uniform( 10, 2.0, 5.0, [] ); // $ExpectError
	uniform( 10, 2.0, 5.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a supported data type...
{
	uniform( 10, 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	uniform( 10, 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	uniform( 10, 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	uniform( 10, 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	uniform( 10, 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	uniform( 10, 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	uniform(); // $ExpectError
	uniform( 10 ); // $ExpectError
	uniform( 10, 2.0 ); // $ExpectError
	uniform( 10, 2.0, 5.0, {}, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	uniform.factory( 2.0, 5.0 ); // $ExpectType UnaryFunction
	uniform.factory( 2.0, 5.0, { 'copy': false } ); // $ExpectType UnaryFunction

	uniform.factory(); // $ExpectType TernaryFunction
	uniform.factory( { 'copy': false } ); // $ExpectType TernaryFunction
}

// The `factory` method returns a function which returns an array...
{
	const fcn1 = uniform.factory( 2.0, 5.0 );
	fcn1( 10, ); // $ExpectType RandomArray

	const fcn2 = uniform.factory();
	fcn2( 10, 2.0, 5.0 ); // $ExpectType RandomArray
}

// The compiler throws an error if the `factory` method is provided invalid arguments...
{
	uniform.factory( '5', 5.0 ); // $ExpectError
	uniform.factory( true, 5.0 ); // $ExpectError
	uniform.factory( false, 5.0 ); // $ExpectError
	uniform.factory( [], 5.0 ); // $ExpectError
	uniform.factory( {}, 5.0 ); // $ExpectError
	uniform.factory( ( x: number ): number => x, 5.0 ); // $ExpectError

	uniform.factory( '5', 5.0, {} ); // $ExpectError
	uniform.factory( true, 5.0, {} ); // $ExpectError
	uniform.factory( false, 5.0, {} ); // $ExpectError
	uniform.factory( [], 5.0, {} ); // $ExpectError
	uniform.factory( {}, 5.0, {} ); // $ExpectError
	uniform.factory( ( x: number ): number => x, 5.0, {} ); // $ExpectError

	uniform.factory( 2.0, '5' ); // $ExpectError
	uniform.factory( 2.0, true ); // $ExpectError
	uniform.factory( 2.0, false ); // $ExpectError
	uniform.factory( 2.0, [] ); // $ExpectError
	uniform.factory( 2.0, {} ); // $ExpectError
	uniform.factory( 2.0, ( x: number ): number => x ); // $ExpectError

	uniform.factory( 2.0, '5', {} ); // $ExpectError
	uniform.factory( 2.0, true, {} ); // $ExpectError
	uniform.factory( 2.0, false, {} ); // $ExpectError
	uniform.factory( 2.0, [], {} ); // $ExpectError
	uniform.factory( 2.0, {}, {} ); // $ExpectError
	uniform.factory( 2.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not a valid object...
{
	uniform.factory( null ); // $ExpectError
	uniform.factory( 2.0, 5.0, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	uniform.factory( 2.0, 5.0, { 'prng': 123 } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'prng': 'abc' } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'prng': null } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'prng': [] } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'prng': {} } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'prng': true ); // $ExpectError

	uniform.factory( { 'prng': 123 } ); // $ExpectError
	uniform.factory( { 'prng': 'abc' } ); // $ExpectError
	uniform.factory( { 'prng': null } ); // $ExpectError
	uniform.factory( { 'prng': [] } ); // $ExpectError
	uniform.factory( { 'prng': {} } ); // $ExpectError
	uniform.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	uniform.factory( 2.0, 5.0, { 'seed': true } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'seed': 'abc' } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'seed': null } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'seed': [ 'a' ] } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'seed': {} } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'seed': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'seed': true } ); // $ExpectError
	uniform.factory( { 'seed': 'abc' } ); // $ExpectError
	uniform.factory( { 'seed': null } ); // $ExpectError
	uniform.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	uniform.factory( { 'seed': {} } ); // $ExpectError
	uniform.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	uniform.factory( 2.0, 5.0, { 'state': 123 } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'state': 'abc' } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'state': null } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'state': [] } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'state': {} } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'state': true ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'state': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'state': 123 } ); // $ExpectError
	uniform.factory( { 'state': 'abc' } ); // $ExpectError
	uniform.factory( { 'state': null } ); // $ExpectError
	uniform.factory( { 'state': [] } ); // $ExpectError
	uniform.factory( { 'state': {} } ); // $ExpectError
	uniform.factory( { 'state': true ); // $ExpectError
	uniform.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	uniform.factory( 2.0, 5.0, { 'copy': 123 } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'copy': 'abc' } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'copy': null } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'copy': [] } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'copy': {} } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'copy': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'copy': 123 } ); // $ExpectError
	uniform.factory( { 'copy': 'abc' } ); // $ExpectError
	uniform.factory( { 'copy': null } ); // $ExpectError
	uniform.factory( { 'copy': [] } ); // $ExpectError
	uniform.factory( { 'copy': {} } ); // $ExpectError
	uniform.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `dtype` option which is not a supported data type...
{
	uniform.factory( 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	uniform.factory( 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	uniform.factory( { 'dtype': 123 } ); // $ExpectError
	uniform.factory( { 'dtype': 'abc' } ); // $ExpectError
	uniform.factory( { 'dtype': null } ); // $ExpectError
	uniform.factory( { 'dtype': [] } ); // $ExpectError
	uniform.factory( { 'dtype': {} } ); // $ExpectError
	uniform.factory( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	uniform.factory( 2.0, 5.0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = uniform.factory( 2.0, 5.0 );
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

	const fcn2 = uniform.factory();
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
	const fcn1 = uniform.factory();
	fcn1( 2.0, 5.0, { 'dtype': 123 } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': 'abc' } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': null } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': [] } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': {} } ); // $ExpectError
	fcn1( 2.0, 5.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	const fcn2 = uniform.factory( 2.0, 5.0 );
	fcn2( { 'dtype': 123 } ); // $ExpectError
	fcn2( { 'dtype': 'abc' } ); // $ExpectError
	fcn2( { 'dtype': null } ); // $ExpectError
	fcn2( { 'dtype': [] } ); // $ExpectError
	fcn2( { 'dtype': {} } ); // $ExpectError
	fcn2( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = uniform.factory( 2.0, 5.0 );
	fcn1(); // $ExpectError
	fcn1( 1, 1, 1 ); // $ExpectError

	const fcn2 = uniform.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 1, 1, 1, 1 ); // $ExpectError
}
