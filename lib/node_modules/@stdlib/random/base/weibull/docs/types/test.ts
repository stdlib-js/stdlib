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

import weibull = require( './index' );


// TESTS //

// The function returns a number...
{
	weibull( 2, 3 ); // $ExpectType number
	weibull( 1, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	weibull( true, 3 ); // $ExpectError
	weibull( false, 2 ); // $ExpectError
	weibull( '5', 1 ); // $ExpectError
	weibull( [], 1 ); // $ExpectError
	weibull( {}, 2 ); // $ExpectError
	weibull( ( x: number ): number => x, 2 ); // $ExpectError

	weibull( 9, true ); // $ExpectError
	weibull( 9, false ); // $ExpectError
	weibull( 5, '5' ); // $ExpectError
	weibull( 8, [] ); // $ExpectError
	weibull( 9, {} ); // $ExpectError
	weibull( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	weibull(); // $ExpectError
	weibull( 2 ); // $ExpectError
	weibull( 2, 2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	weibull.factory( 2, 2 ); // $ExpectType NullaryFunction
	weibull.factory(); // $ExpectType BinaryFunction
	weibull.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = weibull.factory( 2, 2 );
	fcn1(); // $ExpectType number

	const fcn2 = weibull.factory();
	fcn2( 2, 2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = weibull.factory( 2, 4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = weibull.factory();
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
	const fcn1 = weibull.factory( 2, 2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = weibull.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	weibull.factory( true, 3 ); // $ExpectError
	weibull.factory( false, 2 ); // $ExpectError
	weibull.factory( '5', 1 ); // $ExpectError
	weibull.factory( [], 1 ); // $ExpectError
	weibull.factory( {}, 2 ); // $ExpectError
	weibull.factory( ( x: number ): number => x, 2 ); // $ExpectError

	weibull.factory( 9, true ); // $ExpectError
	weibull.factory( 9, false ); // $ExpectError
	weibull.factory( 5, '5' ); // $ExpectError
	weibull.factory( 8, [] ); // $ExpectError
	weibull.factory( 9, {} ); // $ExpectError
	weibull.factory( 8, ( x: number ): number => x ); // $ExpectError

	weibull.factory( true, 3, {} ); // $ExpectError
	weibull.factory( false, 2, {} ); // $ExpectError
	weibull.factory( '5', 1, {} ); // $ExpectError
	weibull.factory( [], 1, {} ); // $ExpectError
	weibull.factory( {}, 2, {} ); // $ExpectError
	weibull.factory( ( x: number ): number => x, 2, {} ); // $ExpectError

	weibull.factory( 9, true, {} ); // $ExpectError
	weibull.factory( 9, false, {} ); // $ExpectError
	weibull.factory( 5, '5', {} ); // $ExpectError
	weibull.factory( 8, [], {} ); // $ExpectError
	weibull.factory( 9, {}, {} ); // $ExpectError
	weibull.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	weibull.factory( null ); // $ExpectError
	weibull.factory( 2, 2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	weibull.factory( 2, 2, { 'prng': 123 } ); // $ExpectError
	weibull.factory( 2, 2, { 'prng': 'abc' } ); // $ExpectError
	weibull.factory( 2, 2, { 'prng': null } ); // $ExpectError
	weibull.factory( 2, 2, { 'prng': [] } ); // $ExpectError
	weibull.factory( 2, 2, { 'prng': {} } ); // $ExpectError
	weibull.factory( 2, 2, { 'prng': true ); // $ExpectError

	weibull.factory( { 'prng': 123 } ); // $ExpectError
	weibull.factory( { 'prng': 'abc' } ); // $ExpectError
	weibull.factory( { 'prng': null } ); // $ExpectError
	weibull.factory( { 'prng': [] } ); // $ExpectError
	weibull.factory( { 'prng': {} } ); // $ExpectError
	weibull.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	weibull.factory( 2, 2, { 'seed': true } ); // $ExpectError
	weibull.factory( 2, 2, { 'seed': 'abc' } ); // $ExpectError
	weibull.factory( 2, 2, { 'seed': null } ); // $ExpectError
	weibull.factory( 2, 2, { 'seed': [ 'a' ] } ); // $ExpectError
	weibull.factory( 2, 2, { 'seed': {} } ); // $ExpectError
	weibull.factory( 2, 2, { 'seed': ( x: number ): number => x } ); // $ExpectError

	weibull.factory( { 'seed': true } ); // $ExpectError
	weibull.factory( { 'seed': 'abc' } ); // $ExpectError
	weibull.factory( { 'seed': null } ); // $ExpectError
	weibull.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	weibull.factory( { 'seed': {} } ); // $ExpectError
	weibull.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	weibull.factory( 2, 2, { 'state': 123 } ); // $ExpectError
	weibull.factory( 2, 2, { 'state': 'abc' } ); // $ExpectError
	weibull.factory( 2, 2, { 'state': null } ); // $ExpectError
	weibull.factory( 2, 2, { 'state': [] } ); // $ExpectError
	weibull.factory( 2, 2, { 'state': {} } ); // $ExpectError
	weibull.factory( 2, 2, { 'state': true ); // $ExpectError
	weibull.factory( 2, 2, { 'state': ( x: number ): number => x } ); // $ExpectError

	weibull.factory( { 'state': 123 } ); // $ExpectError
	weibull.factory( { 'state': 'abc' } ); // $ExpectError
	weibull.factory( { 'state': null } ); // $ExpectError
	weibull.factory( { 'state': [] } ); // $ExpectError
	weibull.factory( { 'state': {} } ); // $ExpectError
	weibull.factory( { 'state': true ); // $ExpectError
	weibull.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	weibull.factory( 2, 2, { 'copy': 123 } ); // $ExpectError
	weibull.factory( 2, 2, { 'copy': 'abc' } ); // $ExpectError
	weibull.factory( 2, 2, { 'copy': null } ); // $ExpectError
	weibull.factory( 2, 2, { 'copy': [] } ); // $ExpectError
	weibull.factory( 2, 2, { 'copy': {} } ); // $ExpectError
	weibull.factory( 2, 2, { 'copy': ( x: number ): number => x } ); // $ExpectError

	weibull.factory( { 'copy': 123 } ); // $ExpectError
	weibull.factory( { 'copy': 'abc' } ); // $ExpectError
	weibull.factory( { 'copy': null } ); // $ExpectError
	weibull.factory( { 'copy': [] } ); // $ExpectError
	weibull.factory( { 'copy': {} } ); // $ExpectError
	weibull.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	weibull.factory( 2, 4, {}, 2 ); // $ExpectError
}
