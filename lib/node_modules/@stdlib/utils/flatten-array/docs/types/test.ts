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

import flattenArray = require( './index' );


// TESTS //

// The function returns an array...
{
	const arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
	flattenArray( arr ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	flattenArray( 'abc' ); // $ExpectError
	flattenArray( 123 ); // $ExpectError
	flattenArray( null ); // $ExpectError
	flattenArray( {} ); // $ExpectError
	flattenArray( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
	flattenArray( arr, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	const arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
	flattenArray( arr, { 'copy': '5' } ); // $ExpectError
	flattenArray( arr, { 'copy': 123 } ); // $ExpectError
	flattenArray( arr, { 'copy': null } ); // $ExpectError
	flattenArray( arr, { 'copy': [] } ); // $ExpectError
	flattenArray( arr, { 'copy': {} } ); // $ExpectError
	flattenArray( arr, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `depth` option which is not a number...
{
	const arr = [ 1, [2, [3, [4, [ 5 ], 6], 7], 8], 9 ];
	flattenArray( arr, { 'depth': true } ); // $ExpectError
	flattenArray( arr, { 'depth': false } ); // $ExpectError
	flattenArray( arr, { 'depth': 'abc' } ); // $ExpectError
	flattenArray( arr, { 'depth': null } ); // $ExpectError
	flattenArray( arr, { 'depth': [] } ); // $ExpectError
	flattenArray( arr, { 'depth': {} } ); // $ExpectError
	flattenArray( arr, { 'depth': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided no arguments...
{
	flattenArray(); // $ExpectError
}

// Attached to main export is a `factory` method which returns a function...
{
	flattenArray.factory( [ 2, 2 ] ); // $ExpectType Unary
}

// The `factory` method returns a function which returns an array...
{
	const fcn = flattenArray.factory( [ 2, 2 ] );
	fcn( [ [ 1, 2 ], [ 3, 4 ] ] ); // $ExpectType any[]
}

// The compiler throws an error if the `factory` method is provided a first argument that is not a number array...
{
	flattenArray.factory( 'abc' ); // $ExpectError
	flattenArray.factory( 123 ); // $ExpectError
	flattenArray.factory( null ); // $ExpectError
	flattenArray.factory( {} ); // $ExpectError
	flattenArray.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an object...
{
	flattenArray.factory( [ 2, 2 ], null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `copy` option which is not a boolean...
{
	const dims = [ 2, 2 ];
	flattenArray.factory( dims, { 'copy': '5' } ); // $ExpectError
	flattenArray.factory( dims, { 'copy': 123 } ); // $ExpectError
	flattenArray.factory( dims, { 'copy': null } ); // $ExpectError
	flattenArray.factory( dims, { 'copy': [] } ); // $ExpectError
	flattenArray.factory( dims, { 'copy': {} } ); // $ExpectError
	flattenArray.factory( dims, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid arguments...
{
	const fcn = flattenArray.factory( [ 2, 2 ] );
	fcn( true ); // $ExpectError
	fcn( false ); // $ExpectError
	fcn( '5' ); // $ExpectError
	fcn( 123 ); // $ExpectError
	fcn( {} ); // $ExpectError
	fcn( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an unsupported number of arguments...
{
	const arr = [ [ 1, 2 ], [ 3, 4 ] ];
	const fcn = flattenArray.factory( [ 2, 2 ] );
	fcn(); // $ExpectError
	fcn( arr, 0 ); // $ExpectError
}
