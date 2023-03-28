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

import zeros = require( '@stdlib/ndarray/zeros' );
import random = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	random( [ 3, 3 ], 2.0 ); // $ExpectType RandomArray
	random( [ 3, 3 ], 2.0, {} ); // $ExpectType RandomArray
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	random( '5', 2.0 ); // $ExpectError
	random( true, 2.0 ); // $ExpectError
	random( false, 2.0 ); // $ExpectError
	random( null, 2.0 ); // $ExpectError
	random( [ '1' ], 2.0 ); // $ExpectError
	random( {}, 2.0 ); // $ExpectError
	random( ( x: number ): number => x, 2.0 ); // $ExpectError

	random( '5', 2.0, {} ); // $ExpectError
	random( true, 2.0, {} ); // $ExpectError
	random( false, 2.0, {} ); // $ExpectError
	random( null, 2.0, {} ); // $ExpectError
	random( [ '1' ], 2.0, {} ); // $ExpectError
	random( {}, 2.0, {} ); // $ExpectError
	random( ( x: number ): number => x, 2.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number or ndarray..
{
	random( [ 3, 3 ], '5' ); // $ExpectError
	random( [ 3, 3 ], true ); // $ExpectError
	random( [ 3, 3 ], false ); // $ExpectError
	random( [ 3, 3 ], null ); // $ExpectError
	random( [ 3, 3 ], [] ); // $ExpectError
	random( [ 3, 3 ], {} ); // $ExpectError
	random( [ 3, 3 ], ( x: number ): number => x ); // $ExpectError

	random( [ 3, 3 ], '5', {} ); // $ExpectError
	random( [ 3, 3 ], true, {} ); // $ExpectError
	random( [ 3, 3 ], false, {} ); // $ExpectError
	random( [ 3, 3 ], null, {} ); // $ExpectError
	random( [ 3, 3 ], [], {} ); // $ExpectError
	random( [ 3, 3 ], {}, {} ); // $ExpectError
	random( [ 3, 3 ], ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not a valid object...
{
	random( [ 3, 3 ], 2.0, '5' ); // $ExpectError
	random( [ 3, 3 ], 2.0, 5 ); // $ExpectError
	random( [ 3, 3 ], 2.0, true ); // $ExpectError
	random( [ 3, 3 ], 2.0, false ); // $ExpectError
	random( [ 3, 3 ], 2.0, [] ); // $ExpectError
	random( [ 3, 3 ], 2.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a supported data type...
{
	random( [ 3, 3 ], 2.0, { 'dtype': 123 } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'dtype': 'abc' } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'dtype': null } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'dtype': [] } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'dtype': {} } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `order` option...
{
	random( [ 3, 3 ], 2.0, { 'order': 123 } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'order': 'abc' } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'order': null } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'order': [] } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'order': {} } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `mode` option...
{
	random( [ 3, 3 ], 2.0, { 'mode': 123 } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'mode': 'abc' } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'mode': null } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'mode': [] } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'mode': {} } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `submode` option...
{
	random( [ 3, 3 ], 2.0, { 'submode': 123 } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'submode': 'abc' } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'submode': null } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'submode': [ '1' ] } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'submode': {} } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `readonly` option...
{
	random( [ 3, 3 ], 2.0, { 'readonly': 123 } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'readonly': 'abc' } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'readonly': null } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'readonly': [] } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'readonly': {} } ); // $ExpectError
	random( [ 3, 3 ], 2.0, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	random(); // $ExpectError
	random( [ 3, 3 ] ); // $ExpectError
	random( [ 3, 3 ], 2.0, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an ndarray...
{
	const arr = zeros( [ 3, 3 ] );

	random.assign( arr, 2.0 ); // $ExpectType ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	random.assign( '5', 2.0 ); // $ExpectError
	random.assign( true, 2.0 ); // $ExpectError
	random.assign( false, 2.0 ); // $ExpectError
	random.assign( null, 2.0 ); // $ExpectError
	random.assign( [ '1' ], 2.0 ); // $ExpectError
	random.assign( {}, 2.0 ); // $ExpectError
	random.assign( ( x: number ): number => x, 2.0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number or ndarray..
{
	const arr = zeros( [ 3, 3 ] );

	random.assign( arr, '5' ); // $ExpectError
	random.assign( arr, true ); // $ExpectError
	random.assign( arr, false ); // $ExpectError
	random.assign( arr, null ); // $ExpectError
	random.assign( arr, [] ); // $ExpectError
	random.assign( arr, {} ); // $ExpectError
	random.assign( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const arr = zeros( [ 3, 3 ] );

	random.assign(); // $ExpectError
	random.assign( arr ); // $ExpectError
	random.assign( arr, 2.0, {} ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	random.factory(); // $ExpectType RandomFunction
	random.factory( { 'copy': false } ); // $ExpectType RandomFunction
}

// The `factory` method returns a function which returns an ndarray...
{
	const fcn1 = random.factory();
	fcn1( [ 3, 3 ], 2.0 ); // $ExpectType RandomArray

	const fcn2 = random.factory( {} );
	fcn2( [ 3, 3 ], 2.0 ); // $ExpectType RandomArray
}

// The compiler throws an error if the `factory` method is provided an invalid argument...
{
	random.factory( '5' ); // $ExpectError
	random.factory( true ); // $ExpectError
	random.factory( false ); // $ExpectError
	random.factory( [] ); // $ExpectError
	random.factory( null ); // $ExpectError
	random.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `prng` option which is not a pseudorandom number generator...
{
	random.factory( { 'prng': 123 } ); // $ExpectError
	random.factory( { 'prng': 'abc' } ); // $ExpectError
	random.factory( { 'prng': null } ); // $ExpectError
	random.factory( { 'prng': [] } ); // $ExpectError
	random.factory( { 'prng': {} } ); // $ExpectError
	random.factory( { 'prng': true ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `seed` option which is not a valid seed...
{
	random.factory( { 'seed': true } ); // $ExpectError
	random.factory( { 'seed': 'abc' } ); // $ExpectError
	random.factory( { 'seed': null } ); // $ExpectError
	random.factory( { 'seed': [ 'a' ] } ); // $ExpectError
	random.factory( { 'seed': {} } ); // $ExpectError
	random.factory( { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `state` option which is not a valid state...
{
	random.factory( { 'state': 123 } ); // $ExpectError
	random.factory( { 'state': 'abc' } ); // $ExpectError
	random.factory( { 'state': null } ); // $ExpectError
	random.factory( { 'state': [] } ); // $ExpectError
	random.factory( { 'state': {} } ); // $ExpectError
	random.factory( { 'state': true ); // $ExpectError
	random.factory( { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	random.factory( { 'copy': 123 } ); // $ExpectError
	random.factory( { 'copy': 'abc' } ); // $ExpectError
	random.factory( { 'copy': null } ); // $ExpectError
	random.factory( { 'copy': [] } ); // $ExpectError
	random.factory( { 'copy': {} } ); // $ExpectError
	random.factory( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `dtype` option which is not a supported data type...
{
	random.factory( { 'dtype': 123 } ); // $ExpectError
	random.factory( { 'dtype': 'abc' } ); // $ExpectError
	random.factory( { 'dtype': null } ); // $ExpectError
	random.factory( { 'dtype': [] } ); // $ExpectError
	random.factory( { 'dtype': {} } ); // $ExpectError
	random.factory( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid `order` option...
{
	random.factory( { 'order': 123 } ); // $ExpectError
	random.factory( { 'order': 'abc' } ); // $ExpectError
	random.factory( { 'order': null } ); // $ExpectError
	random.factory( { 'order': [] } ); // $ExpectError
	random.factory( { 'order': {} } ); // $ExpectError
	random.factory( { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid `mode` option...
{
	random.factory( { 'mode': 123 } ); // $ExpectError
	random.factory( { 'mode': 'abc' } ); // $ExpectError
	random.factory( { 'mode': null } ); // $ExpectError
	random.factory( { 'mode': [] } ); // $ExpectError
	random.factory( { 'mode': {} } ); // $ExpectError
	random.factory( { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid `submode` option...
{
	random.factory( { 'submode': 123 } ); // $ExpectError
	random.factory( { 'submode': 'abc' } ); // $ExpectError
	random.factory( { 'submode': null } ); // $ExpectError
	random.factory( { 'submode': [ '1' ] } ); // $ExpectError
	random.factory( { 'submode': {} } ); // $ExpectError
	random.factory( { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an invalid `readonly` option...
{
	random.factory( { 'readonly': 123 } ); // $ExpectError
	random.factory( { 'readonly': 'abc' } ); // $ExpectError
	random.factory( { 'readonly': null } ); // $ExpectError
	random.factory( { 'readonly': [] } ); // $ExpectError
	random.factory( { 'readonly': {} } ); // $ExpectError
	random.factory( { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided more than one argument...
{
	random.factory( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn1 = random.factory();
	fcn1( true, 2.0 ); // $ExpectError
	fcn1( false, 2.0 ); // $ExpectError
	fcn1( '5', 2.0 ); // $ExpectError
	fcn1( [ '1' ], 2.0 ); // $ExpectError
	fcn1( {}, 2.0 ); // $ExpectError
	fcn1( ( x: number ): number => x, 2.0 ); // $ExpectError

	fcn1( true, 2.0, {} ); // $ExpectError
	fcn1( false, 2.0, {} ); // $ExpectError
	fcn1( '5', 2.0, {} ); // $ExpectError
	fcn1( [ '1' ], 2.0, {} ); // $ExpectError
	fcn1( {}, 2.0, {} ); // $ExpectError
	fcn1( ( x: number ): number => x, 2.0, {} ); // $ExpectError

	fcn1( [ 3, 3 ], true ); // $ExpectError
	fcn1( [ 3, 3 ], false ); // $ExpectError
	fcn1( [ 3, 3 ], '5' ); // $ExpectError
	fcn1( [ 3, 3 ], [] ); // $ExpectError
	fcn1( [ 3, 3 ], {} ); // $ExpectError
	fcn1( [ 3, 3 ], ( x: number ): number => x ); // $ExpectError

	fcn1( [ 3, 3 ], true, {} ); // $ExpectError
	fcn1( [ 3, 3 ], false, {} ); // $ExpectError
	fcn1( [ 3, 3 ], '5', {} ); // $ExpectError
	fcn1( [ 3, 3 ], [], {} ); // $ExpectError
	fcn1( [ 3, 3 ], {}, {} ); // $ExpectError
	fcn1( [ 3, 3 ], ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a `dtype` option which is not a supported data type...
{
	const fcn = random.factory();
	fcn( [ 3, 3 ], 2.0, { 'dtype': 123 } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'dtype': 'abc' } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'dtype': null } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'dtype': [] } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'dtype': {} } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid `order` option...
{
	const fcn = random.factory();
	fcn( [ 3, 3 ], 2.0, { 'order': 123 } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'order': 'abc' } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'order': null } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'order': [] } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'order': {} } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid `mode` option...
{
	const fcn = random.factory();
	fcn( [ 3, 3 ], 2.0, { 'mode': 123 } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'mode': 'abc' } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'mode': null } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'mode': [] } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'mode': {} } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid `submode` option...
{
	const fcn = random.factory();
	fcn( [ 3, 3 ], 2.0, { 'submode': 123 } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'submode': 'abc' } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'submode': null } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'submode': [ '1' ] } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'submode': {} } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid `readonly` option...
{
	const fcn = random.factory();
	fcn( [ 3, 3 ], 2.0, { 'readonly': 123 } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'readonly': 'abc' } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'readonly': null } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'readonly': [] } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'readonly': {} } ); // $ExpectError
	fcn( [ 3, 3 ], 2.0, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = random.factory();
	fcn(); // $ExpectError
	fcn( [ 3, 3 ] ); // $ExpectError
	fcn( [ 3, 3, ], 2.0, {}, {} ); // $ExpectError
}
