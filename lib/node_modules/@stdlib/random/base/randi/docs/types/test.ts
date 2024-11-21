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

import randi = require( './index' );


// TESTS //

// The function returns a number...
{
	randi(); // $ExpectType number
}

// The compiler throws an error if the function is provided any arguments...
{
	randi( true ); // $ExpectError
	randi( 2, 3 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	randi.factory(); // $ExpectType NullaryFunction
	randi.factory( { 'copy': false } ); // $ExpectType NullaryFunction
}

// The `factory` method returns a function which returns a number...
{
	const fcn = randi.factory();
	fcn(); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided any number of arguments...
{
	const fcn = randi.factory();
	fcn( 1 ); // $ExpectError
	fcn( 2, 1 ); // $ExpectError
	fcn( 2, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an options argument which is not an object...
{
	randi.factory( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `name` option not matching the name of a supported PRNG...
{
	randi.factory( { 'name': 123 } ); // $ExpectError
	randi.factory( { 'name': 'abc' } ); // $ExpectError
	randi.factory( { 'name': null } ); // $ExpectError
	randi.factory( { 'name': [] } ); // $ExpectError
	randi.factory( { 'name': {} } ); // $ExpectError
	randi.factory( { 'name': true ); // $ExpectError
	randi.factory( { 'name': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	randi.factory( { 'seed': true } ); // $ExpectError
	randi.factory( { 'seed': 'abc' } ); // $ExpectError
	randi.factory( { 'seed': null } ); // $ExpectError
	randi.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	randi.factory( { 'seed': {} } ); // $ExpectError
	randi.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	randi.factory( { 'state': 123 } ); // $ExpectError
	randi.factory( { 'state': 'abc' } ); // $ExpectError
	randi.factory( { 'state': null } ); // $ExpectError
	randi.factory( { 'state': [] } ); // $ExpectError
	randi.factory( { 'state': {} } ); // $ExpectError
	randi.factory( { 'state': true ); // $ExpectError
	randi.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	randi.factory( { 'copy': 123 } ); // $ExpectError
	randi.factory( { 'copy': 'abc' } ); // $ExpectError
	randi.factory( { 'copy': null } ); // $ExpectError
	randi.factory( { 'copy': [] } ); // $ExpectError
	randi.factory( { 'copy': {} } ); // $ExpectError
	randi.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	randi.factory( {}, 2 ); // $ExpectError
}
