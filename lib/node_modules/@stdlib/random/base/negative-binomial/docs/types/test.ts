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

import negativeBinomial = require( './index' );


// TESTS //

// The function returns a number...
{
	negativeBinomial( 2.4, 0.3 ); // $ExpectType number
	negativeBinomial( 10, 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	negativeBinomial( true, 0.3 ); // $ExpectError
	negativeBinomial( false, 0.2 ); // $ExpectError
	negativeBinomial( '5', 0.1 ); // $ExpectError
	negativeBinomial( [], 0.1 ); // $ExpectError
	negativeBinomial( {}, 0.2 ); // $ExpectError
	negativeBinomial( ( x: number ): number => x, 0.2 ); // $ExpectError

	negativeBinomial( 9, true ); // $ExpectError
	negativeBinomial( 9, false ); // $ExpectError
	negativeBinomial( 5, '5' ); // $ExpectError
	negativeBinomial( 8, [] ); // $ExpectError
	negativeBinomial( 9, {} ); // $ExpectError
	negativeBinomial( 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	negativeBinomial(); // $ExpectError
	negativeBinomial( 2 ); // $ExpectError
	negativeBinomial( 2, 0.2, 4 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	negativeBinomial.factory( 20, 0.2 ); // $ExpectType NullaryFunction
	negativeBinomial.factory(); // $ExpectType BinaryFunction
	negativeBinomial.factory( { 'copy': false } ); // $ExpectType BinaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn1 = negativeBinomial.factory( 20, 0.2 );
	fcn1(); // $ExpectType number

	const fcn2 = negativeBinomial.factory();
	fcn2( 20, 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = negativeBinomial.factory( 2, 0.4 );
	fcn1( 12 ); // $ExpectError
	fcn1( true ); // $ExpectError
	fcn1( false ); // $ExpectError
	fcn1( '5' ); // $ExpectError
	fcn1( [] ); // $ExpectError
	fcn1( {} ); // $ExpectError
	fcn1( ( x: number ): number => x ); // $ExpectError

	const fcn2 = negativeBinomial.factory();
	fcn2( true, 0.2 ); // $ExpectError
	fcn2( false, 0.2 ); // $ExpectError
	fcn2( '5', 0.2 ); // $ExpectError
	fcn2( [], 0.2 ); // $ExpectError
	fcn2( {}, 0.2 ); // $ExpectError
	fcn2( ( x: number ): number => x, 0.2 ); // $ExpectError

	fcn2( 1, true ); // $ExpectError
	fcn2( 1, false ); // $ExpectError
	fcn2( 1, '5' ); // $ExpectError
	fcn2( 1, [] ); // $ExpectError
	fcn2( 1, {} ); // $ExpectError
	fcn2( 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn1 = negativeBinomial.factory( 2, 0.2 );
	fcn1( 1 ); // $ExpectError
	fcn1( 2, 1 ); // $ExpectError
	fcn1( 2, 1, 1 ); // $ExpectError

	const fcn2 = negativeBinomial.factory();
	fcn2(); // $ExpectError
	fcn2( 1 ); // $ExpectError
	fcn2( 2, 0.1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided values other than two numbers aside from an options object...
{
	negativeBinomial.factory( true, 0.3 ); // $ExpectError
	negativeBinomial.factory( false, 0.2 ); // $ExpectError
	negativeBinomial.factory( '5', 0.1 ); // $ExpectError
	negativeBinomial.factory( [], 0.1 ); // $ExpectError
	negativeBinomial.factory( {}, 0.2 ); // $ExpectError
	negativeBinomial.factory( ( x: number ): number => x, 0.2 ); // $ExpectError

	negativeBinomial.factory( 9, true ); // $ExpectError
	negativeBinomial.factory( 9, false ); // $ExpectError
	negativeBinomial.factory( 5, '5' ); // $ExpectError
	negativeBinomial.factory( 8, [] ); // $ExpectError
	negativeBinomial.factory( 9, {} ); // $ExpectError
	negativeBinomial.factory( 8, ( x: number ): number => x ); // $ExpectError

	negativeBinomial.factory( true, 0.3, {} ); // $ExpectError
	negativeBinomial.factory( false, 0.2, {} ); // $ExpectError
	negativeBinomial.factory( '5', 0.1, {} ); // $ExpectError
	negativeBinomial.factory( [], 0.1, {} ); // $ExpectError
	negativeBinomial.factory( {}, 0.2, {} ); // $ExpectError
	negativeBinomial.factory( ( x: number ): number => x, 0.2, {} ); // $ExpectError

	negativeBinomial.factory( 9, true, {} ); // $ExpectError
	negativeBinomial.factory( 9, false, {} ); // $ExpectError
	negativeBinomial.factory( 5, '5', {} ); // $ExpectError
	negativeBinomial.factory( 8, [], {} ); // $ExpectError
	negativeBinomial.factory( 9, {}, {} ); // $ExpectError
	negativeBinomial.factory( 8, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	negativeBinomial.factory( null ); // $ExpectError
	negativeBinomial.factory( 20, 0.2, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	negativeBinomial.factory( 20, 0.3, { 'prng': 123 } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'prng': 'abc' } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'prng': null } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'prng': [] } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'prng': {} } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'prng': true ); // $ExpectError

	negativeBinomial.factory( { 'prng': 123 } ); // $ExpectError
	negativeBinomial.factory( { 'prng': 'abc' } ); // $ExpectError
	negativeBinomial.factory( { 'prng': null } ); // $ExpectError
	negativeBinomial.factory( { 'prng': [] } ); // $ExpectError
	negativeBinomial.factory( { 'prng': {} } ); // $ExpectError
	negativeBinomial.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	negativeBinomial.factory( 20, 0.3, { 'seed': true } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'seed': 'abc' } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'seed': null } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'seed': [ 'a' ] } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'seed': {} } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'seed': ( x: number ): number => x } ); // $ExpectError

	negativeBinomial.factory( { 'seed': true } ); // $ExpectError
	negativeBinomial.factory( { 'seed': 'abc' } ); // $ExpectError
	negativeBinomial.factory( { 'seed': null } ); // $ExpectError
	negativeBinomial.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	negativeBinomial.factory( { 'seed': {} } ); // $ExpectError
	negativeBinomial.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	negativeBinomial.factory( 20, 0.3, { 'state': 123 } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'state': 'abc' } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'state': null } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'state': [] } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'state': {} } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'state': true ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'state': ( x: number ): number => x } ); // $ExpectError

	negativeBinomial.factory( { 'state': 123 } ); // $ExpectError
	negativeBinomial.factory( { 'state': 'abc' } ); // $ExpectError
	negativeBinomial.factory( { 'state': null } ); // $ExpectError
	negativeBinomial.factory( { 'state': [] } ); // $ExpectError
	negativeBinomial.factory( { 'state': {} } ); // $ExpectError
	negativeBinomial.factory( { 'state': true ); // $ExpectError
	negativeBinomial.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	negativeBinomial.factory( 20, 0.3, { 'copy': 123 } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'copy': 'abc' } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'copy': null } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'copy': [] } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'copy': {} } ); // $ExpectError
	negativeBinomial.factory( 20, 0.3, { 'copy': ( x: number ): number => x } ); // $ExpectError

	negativeBinomial.factory( { 'copy': 123 } ); // $ExpectError
	negativeBinomial.factory( { 'copy': 'abc' } ); // $ExpectError
	negativeBinomial.factory( { 'copy': null } ); // $ExpectError
	negativeBinomial.factory( { 'copy': [] } ); // $ExpectError
	negativeBinomial.factory( { 'copy': {} } ); // $ExpectError
	negativeBinomial.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than three arguments...
{
	negativeBinomial.factory( 20, 0.4, {}, 2 ); // $ExpectError
}
