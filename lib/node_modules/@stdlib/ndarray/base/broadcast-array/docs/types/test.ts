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

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';
import broadcastArray = require( './index' );

/**
* Mock function to create an ndarray-like object.
*
* @return ndarray-like object
*/
function array(): ndarray {
	const obj: ndarray = {
		'byteLength': 80,
		'BYTES_PER_ELEMENT': 8,
		'data': new Float64Array( 10 ),
		'dtype': 'float64',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 10,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 10 ],
		'strides': [ 1 ],
		'get': (): number => 0,
		'set': (): ndarray => obj
	};
	return obj;
}


// TESTS //

// The function returns an ndarray...
{
	const x = array();

	broadcastArray( x, [ 2, 2, 2 ] ); // $ExpectType ndarray
}

// The compiler throws an error if the function is not provided a first argument which is an ndarray...
{
	broadcastArray( '5', [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( 5, [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( true, [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( false, [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( null, [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( {}, [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( [ '5' ], [ 2, 2, 2 ] ); // $ExpectError
	broadcastArray( ( x: number ): number => x, [ 2, 2, 2 ] ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is an array-like object containing numbers...
{
	const x = array();

	broadcastArray( x, '5' ); // $ExpectError
	broadcastArray( x, 5 ); // $ExpectError
	broadcastArray( x, true ); // $ExpectError
	broadcastArray( x, false ); // $ExpectError
	broadcastArray( x, null ); // $ExpectError
	broadcastArray( x, {} ); // $ExpectError
	broadcastArray( x, [ '5' ] ); // $ExpectError
	broadcastArray( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array();

	broadcastArray(); // $ExpectError
	broadcastArray( x ); // $ExpectError
	broadcastArray( x, [ 1, 2, 3 ], [ 2, 3 ] ); // $ExpectError
}
