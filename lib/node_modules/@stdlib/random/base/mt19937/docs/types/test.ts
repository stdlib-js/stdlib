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

import mt19937 = require( './index' );


// TESTS //

// The function returns a number...
{
	mt19937(); // $ExpectType number
}

// The compiler throws an error if the function is provided any arguments...
{
	mt19937( true ); // $ExpectError
	mt19937( 2, 3 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	mt19937.factory(); // $ExpectType NullaryFunction
	mt19937.factory( { 'copy': false } ); // $ExpectType NullaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn = mt19937.factory();
	fcn(); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided any number of arguments...
{
	const fcn = mt19937.factory();
	fcn( 1 ); // $ExpectError
	fcn( 2, 1 ); // $ExpectError
	fcn( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	mt19937.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	mt19937.factory( { 'seed': true } ); // $ExpectError
	mt19937.factory( { 'seed': 'abc' } ); // $ExpectError
	mt19937.factory( { 'seed': null } ); // $ExpectError
	mt19937.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	mt19937.factory( { 'seed': {} } ); // $ExpectError
	mt19937.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	mt19937.factory( { 'state': 123 } ); // $ExpectError
	mt19937.factory( { 'state': 'abc' } ); // $ExpectError
	mt19937.factory( { 'state': null } ); // $ExpectError
	mt19937.factory( { 'state': [] } ); // $ExpectError
	mt19937.factory( { 'state': {} } ); // $ExpectError
	mt19937.factory( { 'state': true ); // $ExpectError
	mt19937.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	mt19937.factory( { 'copy': 123 } ); // $ExpectError
	mt19937.factory( { 'copy': 'abc' } ); // $ExpectError
	mt19937.factory( { 'copy': null } ); // $ExpectError
	mt19937.factory( { 'copy': [] } ); // $ExpectError
	mt19937.factory( { 'copy': {} } ); // $ExpectError
	mt19937.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	mt19937.factory( {}, 2 ); // $ExpectError
}
