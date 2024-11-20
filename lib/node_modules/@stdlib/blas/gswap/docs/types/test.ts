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
import gswap = require( './index' );

/**
* Returns an ndarray object.
*
* @returns ndarray object
*/
function createArray(): ndarray {
	const arr: ndarray = {
		'byteLength': null,
		'BYTES_PER_ELEMENT': null,
		'data': [ 1, 2, 3 ],
		'dtype': 'generic',
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

// The function returns an ndarray or array-like object...
{
	gswap( [ 1, 2, 3 ], [ 4, 5, 6 ] ); // $ExpectType ndarray | ArrayLike<any>
	gswap( createArray(), createArray() ); // $ExpectType ndarray | ArrayLike<any>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray or array-like object...
{
	const y: ndarray = createArray();

	gswap( 10, y ); // $ExpectError
	gswap( true, y ); // $ExpectError
	gswap( false, y ); // $ExpectError
	gswap( null, y ); // $ExpectError
	gswap( undefined, y ); // $ExpectError
	gswap( {}, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray or array-like object...
{
	const x: ndarray = createArray();

	gswap( x, 10 ); // $ExpectError
	gswap( x, true ); // $ExpectError
	gswap( x, false ); // $ExpectError
	gswap( x, null ); // $ExpectError
	gswap( x, undefined ); // $ExpectError
	gswap( x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x: ndarray = createArray();
	const y: ndarray = createArray();

	gswap(); // $ExpectError

	gswap( x ); // $ExpectError
	gswap( [ 1, 2, 3 ] ); // $ExpectError

	gswap( x, y, {} ); // $ExpectError
	gswap( [ 1, 2, 3 ], [ 4, 5, 6 ], {} ); // $ExpectError
}
