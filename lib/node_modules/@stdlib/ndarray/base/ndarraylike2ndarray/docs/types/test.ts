/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { typedndarray } from '@stdlib/types/ndarray';
import ndarraylike2ndarray = require( './index' );

/**
* Mock function to create an ndarray-like object.
*
* @returns ndarray-like object
*/
function array(): typedndarray<number> {
	const obj: typedndarray<number> = {
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
		'set': (): typedndarray<number> => obj
	};
	return obj;
}


// TESTS //

// The function returns an ndarray...
{
	const x = array();
	ndarraylike2ndarray( x ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is not provided an ndarray...
{
	ndarraylike2ndarray( '5' ); // $ExpectError
	ndarraylike2ndarray( 123 ); // $ExpectError
	ndarraylike2ndarray( true ); // $ExpectError
	ndarraylike2ndarray( false ); // $ExpectError
	ndarraylike2ndarray( null ); // $ExpectError
	ndarraylike2ndarray( [] ); // $ExpectError
	ndarraylike2ndarray( {} ); // $ExpectError
	ndarraylike2ndarray( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = array();
	ndarraylike2ndarray(); // $ExpectError
	ndarraylike2ndarray( x, 5 ); // $ExpectError
}
