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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ndarray } from '@stdlib/types/ndarray';

// FIXME: we can improve specificity here by retaining type information from the wrapped ndarray. See `@stdlib/array/base/arraylike2object` which types specialized objects depending on the input array data type.

/**
* Returns an ndarray buffer element.
*
* @param buf - ndarray data buffer
* @param idx - element index
* @returns element value
*/
type Getter = ( buf: ndarray['data'], idx: number ) => any;

/**
* Sets an ndarray buffer element.
*
* @param buf - ndarray data buffer
* @param idx - element index
* @param value - value to set
*/
type Setter = ( buf: ndarray['data'], idx: number, value: any ) => void;

/**
* Interface describing the output object.
*/
interface ndarrayObject {
	/**
	* Reference to the original ndarray-like object.
	*/
	ref: ndarray;

	/**
	* Underlying data type.
	*/
	dtype: ndarray['dtype'];

	/**
	* Data buffer.
	*/
	data: ndarray['data'];

	/**
	* Number of elements.
	*/
	length: number;

	/**
	* Array dimensions.
	*/
	shape: ndarray['shape'];

	/**
	* Array strides.
	*/
	strides: ndarray['strides'];

	/**
	* Index offset.
	*/
	offset: ndarray['offset'];

	/**
	* Order (e.g., 'row-major' or 'column-major').
	*/
	order: ndarray['order'];

	/**
	* Boolean indicating whether the data buffer supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: boolean;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ Getter, Setter ];
}

/**
* Converts an ndarray-like to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding ndarray meta data to ensure that internal functions operating on ndarrays are provided consistent argument "shapes".
*
* @param x - input ndarray
* @returns object containing ndarray data
*
* @example
* var array = require( `@stdlib/ndarray/array` );
*
* var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] );
*
* var obj = ndarraylike2object( x );
* // returns {...}
*/
declare function ndarraylike2object( x: ndarray ): ndarrayObject;


// EXPORTS //

export = ndarraylike2object;
