/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import logcdf = require( './index' );


// TESTS //

// The function returns a number...
{
	logcdf( 2.0, 0.4 ); // $ExpectType number
	logcdf( 1.0, 0.2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	logcdf( true, 0.3 ); // $ExpectError
	logcdf( false, 0.2 ); // $ExpectError
	logcdf( '5', 0.1 ); // $ExpectError
	logcdf( [], 0.1 ); // $ExpectError
	logcdf( {}, 0.4 ); // $ExpectError
	logcdf( ( x: number ): number => x, 0.2 ); // $ExpectError

	logcdf( 9.0, true ); // $ExpectError
	logcdf( 9.0, false ); // $ExpectError
	logcdf( 5.0, '5' ); // $ExpectError
	logcdf( 8.0, [] ); // $ExpectError
	logcdf( 9.0, {} ); // $ExpectError
	logcdf( 8.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logcdf(); // $ExpectError
	logcdf( 2.0 ); // $ExpectError
	logcdf( 2.0, 0.8, 4.0 ); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	logcdf.factory( 0.4 ); // $ExpectType Unary
}

// The `factory` method returns a function which returns a number...
{
	const fcn = logcdf.factory( 0.4 );
	fcn( 2.0 ); // $ExpectType number
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid argument...
{
	const fcn = logcdf.factory( 0.4 );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( [] ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = logcdf.factory( 0.4 );
	fcn(); // $ExpectError
	fcn( 2.0, 0.0 ); // $ExpectError
	fcn( 2.0, 0.0, 1.0 ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a value other than a number...
{
	logcdf.factory( true ); // $ExpectError
	logcdf.factory( false ); // $ExpectError
	logcdf.factory( '5' ); // $ExpectError
	logcdf.factory( [] ); // $ExpectError
	logcdf.factory( {} ); // $ExpectError
	logcdf.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	logcdf.factory( 0.0, 0.2 ); // $ExpectError
	logcdf.factory( 0.0, 0.4, 8 ); // $ExpectError
}
