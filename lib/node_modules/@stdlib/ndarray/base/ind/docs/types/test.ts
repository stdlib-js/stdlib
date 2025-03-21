/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import ind = require( './index' );


// TESTS //

// The function returns a number...
{
	ind( 2, 9, 'clamp' ); // $ExpectType number
	ind( 2, 9, 'wrap' ); // $ExpectType number
	ind( 2, 9, 'throw' ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	ind( 'abc', 9, 'clamp' ); // $ExpectError
	ind( true, 9, 'clamp' ); // $ExpectError
	ind( false, 9, 'clamp' ); // $ExpectError
	ind( null, 9, 'clamp' ); // $ExpectError
	ind( undefined, 9, 'clamp' ); // $ExpectError
	ind( [ '1', '2' ], 9, 'clamp' ); // $ExpectError
	ind( {}, 9, 'clamp' ); // $ExpectError
	ind( ( x: number ): number => x, 9, 'clamp' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	ind( 2, 'abc', 'clamp' ); // $ExpectError
	ind( 2, true, 'clamp' ); // $ExpectError
	ind( 2, false, 'clamp' ); // $ExpectError
	ind( 2, null, 'clamp' ); // $ExpectError
	ind( 2, undefined, 'clamp' ); // $ExpectError
	ind( 2, [ '1', '2' ], 'clamp' ); // $ExpectError
	ind( 2, {}, 'clamp' ); // $ExpectError
	ind( 2, ( x: number ): number => x, 'clamp' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a known index mode...
{
	ind( 2, 9, 123 ); // $ExpectError
	ind( 2, 9, 'abc' ); // $ExpectError
	ind( 2, 9, true ); // $ExpectError
	ind( 2, 9, false ); // $ExpectError
	ind( 2, 9, null ); // $ExpectError
	ind( 2, 9, undefined ); // $ExpectError
	ind( 2, 9, [ '1', '2' ] ); // $ExpectError
	ind( 2, 9, {} ); // $ExpectError
	ind( 2, 9, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	ind(); // $ExpectError
	ind( 2 ); // $ExpectError
	ind( 2, 9 ); // $ExpectError
	ind( 2, 9, 'clamp', {} ); // $ExpectError
}

// Attached to the main export is a `factory` method which returns a function...
{
	ind.factory( 'clamp' ); // $ExpectType IndexFcn
}

// The compiler throws an error if the `factory` method is provided an argument which is not a known index mode...
{
	ind.factory( 123 ); // $ExpectError
	ind.factory( 'abc' ); // $ExpectError
	ind.factory( true ); // $ExpectError
	ind.factory( false ); // $ExpectError
	ind.factory( null ); // $ExpectError
	ind.factory( undefined ); // $ExpectError
	ind.factory( [ '1', '2' ] ); // $ExpectError
	ind.factory( {} ); // $ExpectError
	ind.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	ind.factory(); // $ExpectError
	ind.factory( 'clamp', {} ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a first argument which is not a number...
{
	const fcn = ind.factory( 'clamp' );

	fcn( 'abc', 9 ); // $ExpectError
	fcn( true, 9 ); // $ExpectError
	fcn( false, 9 ); // $ExpectError
	fcn( null, 9 ); // $ExpectError
	fcn( undefined, 9 ); // $ExpectError
	fcn( [ '1', '2' ], 9 ); // $ExpectError
	fcn( {}, 9 ); // $ExpectError
	fcn( ( x: number ): number => x, 9 ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided a second argument which is not a number...
{
	const fcn = ind.factory( 'clamp' );

	fcn( 2, 'abc' ); // $ExpectError
	fcn( 2, true ); // $ExpectError
	fcn( 2, false ); // $ExpectError
	fcn( 2, null ); // $ExpectError
	fcn( 2, undefined ); // $ExpectError
	fcn( 2, [ '1', '2' ] ); // $ExpectError
	fcn( 2, {} ); // $ExpectError
	fcn( 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const fcn = ind.factory( 'clamp' );

	fcn(); // $ExpectError
	fcn( 2 ); // $ExpectError
	fcn( 2, 9, {} ); // $ExpectError
}
