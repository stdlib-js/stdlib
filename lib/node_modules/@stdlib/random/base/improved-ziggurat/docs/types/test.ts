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

import randn = require( './index' );


// TESTS //

// The function returns a number...
{
	randn(); // $ExpectType number
}

// The compiler throws an error if the function is provided any arguments...
{
	randn( true ); // $ExpectError
	randn( 2, 3 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	randn.factory(); // $ExpectType NullaryFunction
	randn.factory( { 'copy': false } ); // $ExpectType NullaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn = randn.factory();
	fcn(); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided any number of arguments...
{
	const fcn = randn.factory();
	fcn( 1 ); // $ExpectError
	fcn( 2, 1 ); // $ExpectError
	fcn( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	randn.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	randn.factory( { 'prng': 123 } ); // $ExpectError
	randn.factory( { 'prng': 'abc' } ); // $ExpectError
	randn.factory( { 'prng': null } ); // $ExpectError
	randn.factory( { 'prng': [] } ); // $ExpectError
	randn.factory( { 'prng': {} } ); // $ExpectError
	randn.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	randn.factory( { 'seed': true } ); // $ExpectError
	randn.factory( { 'seed': 'abc' } ); // $ExpectError
	randn.factory( { 'seed': null } ); // $ExpectError
	randn.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	randn.factory( { 'seed': {} } ); // $ExpectError
	randn.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	randn.factory( { 'state': 123 } ); // $ExpectError
	randn.factory( { 'state': 'abc' } ); // $ExpectError
	randn.factory( { 'state': null } ); // $ExpectError
	randn.factory( { 'state': [] } ); // $ExpectError
	randn.factory( { 'state': {} } ); // $ExpectError
	randn.factory( { 'state': true ); // $ExpectError
	randn.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	randn.factory( { 'copy': 123 } ); // $ExpectError
	randn.factory( { 'copy': 'abc' } ); // $ExpectError
	randn.factory( { 'copy': null } ); // $ExpectError
	randn.factory( { 'copy': [] } ); // $ExpectError
	randn.factory( { 'copy': {} } ); // $ExpectError
	randn.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	randn.factory( {}, 2 ); // $ExpectError
}
