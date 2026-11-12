/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import ArrayBuffer = require( '@stdlib/array/buffer' );
import factory = require( './index' );

/**
* Tests whether a value is a number.
*
* @param value - value to test
* @returns boolean indicating whether a value is a number
*/
function isNumber( value: unknown ): boolean {
	return ( typeof value === 'number' );
}


// TESTS //

// The function returns a function...
{
	factory( 'float64', 0.0, isNumber ); // $ExpectType Tensor0D
}

// The compiler throws an error if the function is provided a first argument which is not a supported data type...
{
	factory( '5', 1.0, isNumber ); // $ExpectError
	factory( true, 1.0, isNumber ); // $ExpectError
	factory( false, 1.0, isNumber ); // $ExpectError
	factory( null, 1.0, isNumber ); // $ExpectError
	factory( void 0, 1.0, isNumber ); // $ExpectError
	factory( [], 1.0, isNumber ); // $ExpectError
	factory( {}, 1.0, isNumber ); // $ExpectError
	factory( ( x: number ): number => x, 1.0, isNumber ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	factory( 'float64', 1.0, '5' ); // $ExpectError
	factory( 'float64', 1.0, true ); // $ExpectError
	factory( 'float64', 1.0, false ); // $ExpectError
	factory( 'float64', 1.0, null ); // $ExpectError
	factory( 'float64', 1.0, void 0 ); // $ExpectError
	factory( 'float64', 1.0, [] ); // $ExpectError
	factory( 'float64', 1.0, {} ); // $ExpectError
}

// The function returns a function which returns an ndarray...
{
	const Float64Tensor0D = factory( 'float64', 0.0, isNumber );

	new Float64Tensor0D(); // $ExpectType ndarray
	new Float64Tensor0D( {} ); // $ExpectType ndarray

	new Float64Tensor0D( 10 ); // $ExpectType ndarray
	new Float64Tensor0D( 10, {} ); // $ExpectType ndarray

	new Float64Tensor0D( new ArrayBuffer( 64 ) ); // $ExpectType ndarray
	new Float64Tensor0D( new ArrayBuffer( 64 ), {} ); // $ExpectType ndarray

	new Float64Tensor0D( new ArrayBuffer( 64 ), 8 ); // $ExpectType ndarray
	new Float64Tensor0D( new ArrayBuffer( 64 ), 8, {} ); // $ExpectType ndarray

	const tensor0d = Float64Tensor0D;
	tensor0d(); // $ExpectType ndarray
	tensor0d( {} ); // $ExpectType ndarray

	tensor0d( 10 ); // $ExpectType ndarray
	tensor0d( 10, {} ); // $ExpectType ndarray

	tensor0d( new ArrayBuffer( 64 ) ); // $ExpectType ndarray
	tensor0d( new ArrayBuffer( 64 ), {} ); // $ExpectType ndarray

	tensor0d( new ArrayBuffer( 64 ), 8 ); // $ExpectType ndarray
	tensor0d( new ArrayBuffer( 64 ), 8, {} ); // $ExpectType ndarray
}

// The compiler throws an error if the returned function is provided a second argument which is not a number or options object...
{
	const Float64Tensor0D = factory( 'float64', 0.0, isNumber );

	new Float64Tensor0D( new ArrayBuffer( 64 ), true ); // $ExpectError
	new Float64Tensor0D( new ArrayBuffer( 64 ), false ); // $ExpectError
	new Float64Tensor0D( new ArrayBuffer( 64 ), null ); // $ExpectError
	new Float64Tensor0D( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError

	const tensor0d = Float64Tensor0D;
	tensor0d( new ArrayBuffer( 64 ), true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an options object...
{
	const Float64Tensor0D = factory( 'float64', 0.0, isNumber );

	new Float64Tensor0D( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	new Float64Tensor0D( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	new Float64Tensor0D( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	new Float64Tensor0D( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError

	const tensor0d = Float64Tensor0D;
	tensor0d( new ArrayBuffer( 64 ), 8, true ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, false ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, null ); // $ExpectError
	tensor0d( new ArrayBuffer( 64 ), 8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const Float64Tensor0D = factory( 'float64', 0.0, isNumber );

	const buf = new ArrayBuffer( 32 );
	new Float64Tensor0D( buf, 8, {}, {} ); // $ExpectError

	const tensor0d = Float64Tensor0D;
	tensor0d( buf, 8, {}, {} ); // $ExpectError
}
