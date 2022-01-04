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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Returns an array element.
*
* @param data - array data
* @param idx - element index
* @returns element value
*/
type Getter = ( data: Collection, idx: number ) => any;

/**
* Sets an array element.
*
* @param data - array data
* @param idx - element index
* @param value - value to set
*/
type Setter = ( data: Collection, idx: number, value: any ) => void;

/**
* Interface describing the output object.
*/
interface ArrayObject {
	/**
	* Data buffer.
	*/
	data: Collection;

	/**
	* Boolean indicating whether the data buffer uses accessors for getting and setting elements.
	*/
	accessors: boolean;

	/**
	* Accessor for retrieving a data buffer element.
	*/
	getter: Getter;

	/**
	* Accessor for setting a data buffer element.
	*/
	setter: Setter;
}

/**
* Converts a one-dimensional array-like object to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding array data to ensure that internal functions operating on arrays are provided consistent argument "shapes".
*
* @param x - input array
* @returns object containing array data
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var obj = arraylike2object( x );
* // returns {...}
*/
declare function arraylike2object( x: Collection ): ArrayObject;


// EXPORTS //

export = arraylike2object;
