/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import scalar2ndarray = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	scalar2ndarray( 1.0 ); // $ExpectType ndarray

	scalar2ndarray( 1.0, { 'dtype': 'float64' } ); // $ExpectType float64ndarray
	scalar2ndarray( 1.0, { 'dtype': 'float32' } ); // $ExpectType float32ndarray
	scalar2ndarray( 1.0, { 'dtype': 'complex128' } ); // $ExpectType complex128ndarray
	scalar2ndarray( 1.0, { 'dtype': 'complex64' } ); // $ExpectType complex64ndarray
	scalar2ndarray( 1.0, { 'dtype': 'int32' } ); // $ExpectType int32ndarray
	scalar2ndarray( 1.0, { 'dtype': 'int16' } ); // $ExpectType int16ndarray
	scalar2ndarray( 1.0, { 'dtype': 'int8' } ); // $ExpectType int8ndarray
	scalar2ndarray( 1.0, { 'dtype': 'uint32' } ); // $ExpectType uint32ndarray
	scalar2ndarray( 1.0, { 'dtype': 'uint16' } ); // $ExpectType uint16ndarray
	scalar2ndarray( 1.0, { 'dtype': 'uint8' } ); // $ExpectType uint8ndarray
	scalar2ndarray( 1.0, { 'dtype': 'uint8c' } ); // $ExpectType uint8cndarray
	scalar2ndarray( 1.0, { 'dtype': 'generic' } ); // $ExpectType ndarray
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	scalar2ndarray( 1.0, '10' ); // $ExpectError
	scalar2ndarray( 1.0, 5 ); // $ExpectError
	scalar2ndarray( 1.0, false ); // $ExpectError
	scalar2ndarray( 1.0, true ); // $ExpectError
	scalar2ndarray( 1.0, null ); // $ExpectError
	scalar2ndarray( 1.0, [] ); // $ExpectError
	scalar2ndarray( 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a recognized/supported data type...
{
	scalar2ndarray( 1.0, { 'dtype': '10' } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': 5 } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': false } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': true } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': null } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': [] } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': {} } ); // $ExpectError
	scalar2ndarray( 1.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a recognized/supported data order...
{
	scalar2ndarray( 1.0, { 'order': '10' } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': 5 } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': false } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': true } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': null } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': [] } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': {} } ); // $ExpectError
	scalar2ndarray( 1.0, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	scalar2ndarray( 1.0, { 'readonly': '10' } ); // $ExpectError
	scalar2ndarray( 1.0, { 'readonly': 5 } ); // $ExpectError
	scalar2ndarray( 1.0, { 'readonly': null } ); // $ExpectError
	scalar2ndarray( 1.0, { 'readonly': [] } ); // $ExpectError
	scalar2ndarray( 1.0, { 'readonly': {} } ); // $ExpectError
	scalar2ndarray( 1.0, { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	scalar2ndarray(); // $ExpectError
	scalar2ndarray( 1.0, {}, 1 ); // $ExpectError
}
