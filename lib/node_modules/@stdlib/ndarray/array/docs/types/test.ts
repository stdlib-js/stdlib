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

import array = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	array( ( [ [ 1, 2 ], [ 3, 4 ] ] ) ); // $ExpectType ndarray
	array( new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ), { 'shape': [ 2, 2 ] } ); // $ExpectType ndarray
}

// The function does not compile if provided a first argument which is not an array, buffer, or options object...
{
	array( true ); // $ExpectError
	array( false ); // $ExpectError
	array( undefined ); // $ExpectError
	array( '5' ); // $ExpectError
	array( ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a second argument which is not an options object...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, 'abc' ); // $ExpectError
	array( buffer, true ); // $ExpectError
	array( buffer, false ); // $ExpectError
	array( buffer, null ); // $ExpectError
	array( buffer, [] ); // $ExpectError
	array( buffer, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a recognized data type...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'dtype': 'abc' } ); // $ExpectError
	array( buffer, { 'dtype': 123 } ); // $ExpectError
	array( buffer, { 'dtype': true } ); // $ExpectError
	array( buffer, { 'dtype': false } ); // $ExpectError
	array( buffer, { 'dtype': null } ); // $ExpectError
	array( buffer, { 'dtype': [] } ); // $ExpectError
	array( buffer, { 'dtype': {} } ); // $ExpectError
	array( buffer, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	array( { 'dtype': 'abc' } ); // $ExpectError
	array( { 'dtype': 123 } ); // $ExpectError
	array( { 'dtype': true } ); // $ExpectError
	array( { 'dtype': false } ); // $ExpectError
	array( { 'dtype': null } ); // $ExpectError
	array( { 'dtype': [] } ); // $ExpectError
	array( { 'dtype': {} } ); // $ExpectError
	array( { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a recognized order...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'order': 'abc' } ); // $ExpectError
	array( buffer, { 'order': 123 } ); // $ExpectError
	array( buffer, { 'order': true } ); // $ExpectError
	array( buffer, { 'order': false } ); // $ExpectError
	array( buffer, { 'order': null } ); // $ExpectError
	array( buffer, { 'order': [] } ); // $ExpectError
	array( buffer, { 'order': {} } ); // $ExpectError
	array( buffer, { 'order': ( x: number ): number => x } ); // $ExpectError

	array( { 'order': 'abc' } ); // $ExpectError
	array( { 'order': 123 } ); // $ExpectError
	array( { 'order': true } ); // $ExpectError
	array( { 'order': false } ); // $ExpectError
	array( { 'order': null } ); // $ExpectError
	array( { 'order': [] } ); // $ExpectError
	array( { 'order': {} } ); // $ExpectError
	array( { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `shape` option which is not an array-like object containing numbers...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'shape': 'abc' } ); // $ExpectError
	array( buffer, { 'shape': 123 } ); // $ExpectError
	array( buffer, { 'shape': true } ); // $ExpectError
	array( buffer, { 'shape': false } ); // $ExpectError
	array( buffer, { 'shape': null } ); // $ExpectError
	array( buffer, { 'shape': {} } ); // $ExpectError
	array( buffer, { 'shape': ( x: number ): number => x } ); // $ExpectError

	array( { 'shape': 'abc' } ); // $ExpectError
	array( { 'shape': 123 } ); // $ExpectError
	array( { 'shape': true } ); // $ExpectError
	array( { 'shape': false } ); // $ExpectError
	array( { 'shape': null } ); // $ExpectError
	array( { 'shape': {} } ); // $ExpectError
	array( { 'shape': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a recognized mode...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'mode': 'abc' } ); // $ExpectError
	array( buffer, { 'mode': 123 } ); // $ExpectError
	array( buffer, { 'mode': true } ); // $ExpectError
	array( buffer, { 'mode': false } ); // $ExpectError
	array( buffer, { 'mode': null } ); // $ExpectError
	array( buffer, { 'mode': [] } ); // $ExpectError
	array( buffer, { 'mode': {} } ); // $ExpectError
	array( buffer, { 'mode': ( x: number ): number => x } ); // $ExpectError

	array( { 'mode': 'abc' } ); // $ExpectError
	array( { 'mode': 123 } ); // $ExpectError
	array( { 'mode': true } ); // $ExpectError
	array( { 'mode': false } ); // $ExpectError
	array( { 'mode': null } ); // $ExpectError
	array( { 'mode': [] } ); // $ExpectError
	array( { 'mode': {} } ); // $ExpectError
	array( { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `submode` option which is not an array of strings...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'submode': 'abc' } ); // $ExpectError
	array( buffer, { 'submode': 123 } ); // $ExpectError
	array( buffer, { 'submode': true } ); // $ExpectError
	array( buffer, { 'submode': false } ); // $ExpectError
	array( buffer, { 'submode': null } ); // $ExpectError
	array( buffer, { 'submode': {} } ); // $ExpectError
	array( buffer, { 'submode': ( x: number ): number => x } ); // $ExpectError

	array( { 'submode': 'abc' } ); // $ExpectError
	array( { 'submode': 123 } ); // $ExpectError
	array( { 'submode': true } ); // $ExpectError
	array( { 'submode': false } ); // $ExpectError
	array( { 'submode': null } ); // $ExpectError
	array( { 'submode': {} } ); // $ExpectError
	array( { 'submode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `copy` option which is not a boolean...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'copy': 'abc' } ); // $ExpectError
	array( buffer, { 'copy': 123 } ); // $ExpectError
	array( buffer, { 'copy': null } ); // $ExpectError
	array( buffer, { 'copy': [] } ); // $ExpectError
	array( buffer, { 'copy': {} } ); // $ExpectError
	array( buffer, { 'copy': ( x: number ): number => x } ); // $ExpectError

	array( { 'copy': 'abc' } ); // $ExpectError
	array( { 'copy': 123 } ); // $ExpectError
	array( { 'copy': null } ); // $ExpectError
	array( { 'copy': [] } ); // $ExpectError
	array( { 'copy': {} } ); // $ExpectError
	array( { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `flatten` option which is not a boolean...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'flatten': 'abc' } ); // $ExpectError
	array( buffer, { 'flatten': 123 } ); // $ExpectError
	array( buffer, { 'flatten': null } ); // $ExpectError
	array( buffer, { 'flatten': [] } ); // $ExpectError
	array( buffer, { 'flatten': {} } ); // $ExpectError
	array( buffer, { 'flatten': ( x: number ): number => x } ); // $ExpectError

	array( { 'flatten': 'abc' } ); // $ExpectError
	array( { 'flatten': 123 } ); // $ExpectError
	array( { 'flatten': null } ); // $ExpectError
	array( { 'flatten': [] } ); // $ExpectError
	array( { 'flatten': {} } ); // $ExpectError
	array( { 'flatten': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `ndmin` option which is not a number...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'ndmin': 'abc' } ); // $ExpectError
	array( buffer, { 'ndmin': false } ); // $ExpectError
	array( buffer, { 'ndmin': true } ); // $ExpectError
	array( buffer, { 'ndmin': null } ); // $ExpectError
	array( buffer, { 'ndmin': [] } ); // $ExpectError
	array( buffer, { 'ndmin': {} } ); // $ExpectError
	array( buffer, { 'ndmin': ( x: number ): number => x } ); // $ExpectError

	array( { 'ndmin': 'abc' } ); // $ExpectError
	array( { 'ndmin': false } ); // $ExpectError
	array( { 'ndmin': true } ); // $ExpectError
	array( { 'ndmin': null } ); // $ExpectError
	array( { 'ndmin': [] } ); // $ExpectError
	array( { 'ndmin': {} } ); // $ExpectError
	array( { 'ndmin': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `casting` option which is not a string...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array( buffer, { 'casting': 123 } ); // $ExpectError
	array( buffer, { 'casting': false } ); // $ExpectError
	array( buffer, { 'casting': true } ); // $ExpectError
	array( buffer, { 'casting': null } ); // $ExpectError
	array( buffer, { 'casting': [] } ); // $ExpectError
	array( buffer, { 'casting': {} } ); // $ExpectError
	array( buffer, { 'casting': ( x: number ): number => x } ); // $ExpectError

	array( { 'casting': 123 } ); // $ExpectError
	array( { 'casting': false } ); // $ExpectError
	array( { 'casting': true } ); // $ExpectError
	array( { 'casting': null } ); // $ExpectError
	array( { 'casting': [] } ); // $ExpectError
	array( { 'casting': {} } ); // $ExpectError
	array( { 'casting': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	array(); // $ExpectError
	array( buffer, {}, {} ); // $ExpectError
}
