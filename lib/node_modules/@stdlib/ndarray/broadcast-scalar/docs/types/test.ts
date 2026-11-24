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

import broadcastScalar = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	broadcastScalar( 1.0, [ 2, 2 ] ); // $ExpectType typedndarray<number>

	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'float64' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'float32' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'complex128' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'complex64' } ); // $ExpectType typedndarray<number>
	broadcastScalar( true, [ 2, 2 ], { 'dtype': 'bool' } ); // $ExpectType genericndarray<boolean>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'int32' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'int16' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'int8' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'uint32' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'uint16' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'uint8' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'uint8c' } ); // $ExpectType typedndarray<number>
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 'generic' } ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a second argument which is not an array of integers...
{
	broadcastScalar( 1.0, '10' ); // $ExpectError
	broadcastScalar( 1.0, 5 ); // $ExpectError
	broadcastScalar( 1.0, false ); // $ExpectError
	broadcastScalar( 1.0, true ); // $ExpectError
	broadcastScalar( 1.0, null ); // $ExpectError
	broadcastScalar( 1.0, ( x: number ): number => x ); // $ExpectError

	broadcastScalar( 1.0, '10', {} ); // $ExpectError
	broadcastScalar( 1.0, 5, {} ); // $ExpectError
	broadcastScalar( 1.0, false, {} ); // $ExpectError
	broadcastScalar( 1.0, true, {} ); // $ExpectError
	broadcastScalar( 1.0, null, {} ); // $ExpectError
	broadcastScalar( 1.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	broadcastScalar( 1.0, [ 2, 2 ], '10' ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], 5 ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], false ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], true ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], null ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], [] ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `dtype` option which is not a recognized/supported data type...
{
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': '10' } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': 5 } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': false } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': true } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': null } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': [] } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': {} } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `order` option which is not a recognized/supported data order...
{
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': '10' } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': 5 } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': false } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': true } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': null } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': [] } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': {} } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `readonly` option which is not a boolean...
{
	broadcastScalar( 1.0, [ 2, 2 ], { 'readonly': '10' } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'readonly': 5 } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'readonly': null } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'readonly': [] } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'readonly': {} } ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], { 'readonly': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	broadcastScalar(); // $ExpectError
	broadcastScalar( [ 2, 2 ] ); // $ExpectError
	broadcastScalar( 1.0, [ 2, 2 ], {}, {} ); // $ExpectError
}
