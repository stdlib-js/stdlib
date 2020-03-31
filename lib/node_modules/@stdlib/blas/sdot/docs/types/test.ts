/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
import sdot = require( './index' );

/**
* Returns an ndarray object.
*
* @returns ndarray object
*/
function createArray(): ndarray {
	const arr: ndarray = {
		'byteLength': null,
		'BYTES_PER_ELEMENT': null,
		'data': new Float64Array( [ 1, 2, 3 ] ),
		'dtype': 'float64',
		'flags': {
			'ROW_MAJOR_CONTIGUOUS': true,
			'COLUMN_MAJOR_CONTIGUOUS': false
		},
		'length': 3,
		'ndims': 1,
		'offset': 0,
		'order': 'row-major',
		'shape': [ 3 ],
		'strides': [ 1 ],
		'get': ( i: number ): any => {
			return arr.data[ i ];
		},
		'set': ( i: number, v: any ): ndarray => {
			arr.data[ i ] = v;
			return arr;
		}
	};
	return arr;
}


// TESTS //

// The function returns a number...
{
	sdot( createArray(), createArray() ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y: ndarray = createArray();

	sdot( 10, y ); // $ExpectError
	sdot( '10', y ); // $ExpectError
	sdot( true, y ); // $ExpectError
	sdot( false, y ); // $ExpectError
	sdot( null, y ); // $ExpectError
	sdot( undefined, y ); // $ExpectError
	sdot( {}, y ); // $ExpectError
	sdot( [], y ); // $ExpectError
	sdot( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x: ndarray = createArray();

	sdot( x, 10 ); // $ExpectError
	sdot( x, '10' ); // $ExpectError
	sdot( x, true ); // $ExpectError
	sdot( x, false ); // $ExpectError
	sdot( x, null ); // $ExpectError
	sdot( x, undefined ); // $ExpectError
	sdot( x, {} ); // $ExpectError
	sdot( x, [] ); // $ExpectError
	sdot( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x: ndarray = createArray();
	const y: ndarray = createArray();

	sdot(); // $ExpectError
	sdot( x ); // $ExpectError
	sdot( x, y, {} ); // $ExpectError
}
