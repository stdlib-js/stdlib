/* eslint-disable max-lines */

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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, Complex64Array, Complex128Array, AccessorArrayLike } from '@stdlib/types/array';
import { Complex64, Complex128, ComplexLike } from '@stdlib/types/complex';

/**
* Returns an element from a `Float64Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetFloat64 = ( arr: Float64Array, idx: number ) => number | void;

/**
* Returns an element from a `Float32Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetFloat32 = ( arr: Float32Array, idx: number ) => number | void;

/**
* Returns an element from an `Int32Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetInt32 = ( arr: Int32Array, idx: number ) => number | void;

/**
* Returns an element from an `Int16Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetInt16 = ( arr: Int16Array, idx: number ) => number | void;

/**
* Returns an element from an `Int8Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetInt8 = ( arr: Int8Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint32Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint32 = ( arr: Uint32Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint16Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint16 = ( arr: Uint16Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint8Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint8 = ( arr: Uint8Array, idx: number ) => number | void;

/**
* Returns an element from a `Uint8ClampedArray`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetUint8c = ( arr: Uint8ClampedArray, idx: number ) => number | void;

/**
* Returns an element from a `Complex128Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetComplex128 = ( arr: Complex128Array, idx: number ) => Complex128 | void;

/**
* Returns an element from a `Complex64Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetComplex64 = ( arr: Complex64Array, idx: number ) => Complex64 | void;

/**
* Returns an element from a generic `Array`.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetGeneric<T> = ( arr: Array<T>, idx: number ) => T | void;

/**
* Returns an element from an indexed array-like object.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetIndexedArrayLike<T> = ( arr: Collection<T>, idx: number ) => T | void;

/**
* Returns an element from an array-like object supporting the get/set protocol.
*
* @param arr - input array
* @param idx - element index
* @returns element value
*/
type GetAccessorArrayLike<T> = ( arr: AccessorArrayLike<T>, idx: number ) => T | void;

/**
* Sets an element in a `Float64Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetFloat64 = ( arr: Float64Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Float32Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetFloat32 = ( arr: Float32Array, idx: number, value: number ) => void;

/**
* Sets an element in an `Int32Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetInt32 = ( arr: Int32Array, idx: number, value: number ) => void;

/**
* Sets an element in an `Int16Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetInt16 = ( arr: Int16Array, idx: number, value: number ) => void;

/**
* Sets an element in an `Int8Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetInt8 = ( arr: Int8Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint32Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint32 = ( arr: Uint32Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint16Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint16 = ( arr: Uint16Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint8Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint8 = ( arr: Uint8Array, idx: number, value: number ) => void;

/**
* Sets an element in a `Uint8ClampedArray`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetUint8c = ( arr: Uint8ClampedArray, idx: number, value: number ) => void;

/**
* Sets an element in a `Complex128Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetComplex128 = ( arr: Complex128Array, idx: number, value: ComplexLike ) => void;

/**
* Sets an element in a `Complex64Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetComplex64 = ( arr: Complex64Array, idx: number, value: ComplexLike ) => void;

/**
* Sets an element in a generic `Array`.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetGeneric<T> = ( arr: Array<T>, idx: number, value: T ) => void;

/**
* Sets an element in an indexed array-like object.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetIndexedArrayLike<T> = ( arr: Collection<T>, idx: number, value: T ) => void;

/**
* Sets an element in an array-like object supporting the get/set protocol.
*
* @param arr - input array
* @param idx - element index
* @param value - value to set
*/
type SetAccessorArrayLike<T> = ( arr: AccessorArrayLike<T>, idx: number, value: T ) => void;

/**
* Interface describing properties common to allow output objects.
*/
interface OutputObject {
	/**
	* Number of indexed elements.
	*/
	length: number;

	/**
	* Index increment.
	*/
	stride: number;

	/**
	* Starting index.
	*/
	offset: number;
}

/**
* Interface describing the output object for a `Float64Array`.
*/
interface Float64AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Float64Array;

	/**
	* Data type.
	*/
	dtype: 'float64';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetFloat64, SetFloat64 ];
}

/**
* Interface describing the output object for a `Float32Array`.
*/
interface Float32AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Float32Array;

	/**
	* Data type.
	*/
	dtype: 'float32';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetFloat32, SetFloat32 ];
}

/**
* Interface describing the output object for an `Int32Array`.
*/
interface Int32AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Int32Array;

	/**
	* Data type.
	*/
	dtype: 'int32';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetInt32, SetInt32 ];
}

/**
* Interface describing the output object for an `Int16Array`.
*/
interface Int16AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Int16Array;

	/**
	* Data type.
	*/
	dtype: 'int16';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetInt16, SetInt16 ];
}

/**
* Interface describing the output object for an `Int8Array`.
*/
interface Int8AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Int8Array;

	/**
	* Data type.
	*/
	dtype: 'int8';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetInt8, SetInt8 ];
}

/**
* Interface describing the output object for a `Uint32Array`.
*/
interface Uint32AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Uint32Array;

	/**
	* Data type.
	*/
	dtype: 'uint32';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetUint32, SetUint32 ];
}

/**
* Interface describing the output object for a `Uint16Array`.
*/
interface Uint16AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Uint16Array;

	/**
	* Data type.
	*/
	dtype: 'uint16';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetUint16, SetUint16 ];
}

/**
* Interface describing the output object for a `Uint8Array`.
*/
interface Uint8AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Uint8Array;

	/**
	* Data type.
	*/
	dtype: 'uint8';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetUint8, SetUint8 ];
}

/**
* Interface describing the output object for a `Uint8ClampedArray`.
*/
interface Uint8cAccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Uint8ClampedArray;

	/**
	* Data type.
	*/
	dtype: 'uint8c';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetUint8c, SetUint8c ];
}

/**
* Interface describing the output object for a `Complex128Array`.
*/
interface Complex128AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Complex128Array;

	/**
	* Data type.
	*/
	dtype: 'complex128';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: true;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetComplex128, SetComplex128 ];
}

/**
* Interface describing the output object for a `Complex64Array`.
*/
interface Complex64AccessorObject extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Complex64Array;

	/**
	* Data type.
	*/
	dtype: 'complex64';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: true;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetComplex64, SetComplex64 ];
}

/**
* Interface describing the output object for a "generic" array not supporting the get/set protocol.
*/
interface GenericAccessorObject<T> extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Array<T>;

	/**
	* Data type.
	*/
	dtype: 'generic';

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetGeneric<T>, SetGeneric<T> ];
}

/**
* Interface describing the output object for an indexed array-like object.
*/
interface IndexedAccessorObject<T> extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: Collection<T>;

	/**
	* Data type.
	*/
	dtype: string | null;

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: false;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetIndexedArrayLike<T>, SetIndexedArrayLike<T> ];
}

/**
* Interface describing the output object for an array-like object supporting the get/set protocol.
*/
interface GetSetAccessorObject<T> extends OutputObject {
	/**
	* Reference to the original array-like object.
	*/
	data: AccessorArrayLike<T>;

	/**
	* Data type.
	*/
	dtype: string | null;

	/**
	* Boolean indicating whether the provided array-like object supports the get/set protocol (i.e., uses accessors for getting and setting elements).
	*/
	accessorProtocol: true;

	/**
	* Two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
	*/
	accessors: [ GetAccessorArrayLike<T>, SetAccessorArrayLike<T> ];
}

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Float64Array, stride: number, offset: number ): Float64AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Float32Array, stride: number, offset: number ): Float32AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Int32Array, stride: number, offset: number ): Int32AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Int16Array, stride: number, offset: number ): Int16AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Int8Array, stride: number, offset: number ): Int8AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Uint32Array, stride: number, offset: number ): Uint32AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Uint16Array, stride: number, offset: number ): Uint16AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Uint8Array, stride: number, offset: number ): Uint8AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object( N: number, x: Uint8ClampedArray, stride: number, offset: number ): Uint8cAccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 2, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns true
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x, 1 );
* // returns <Complex128>
*/
declare function strided2object( N: number, x: Complex128Array, stride: number, offset: number ): Complex128AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1, 2, 3, 4 ] );
* var obj = strided2object( 2, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns true
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x, 1 );
* // returns <Complex64>
*/
declare function strided2object( N: number, x: Complex64Array, stride: number, offset: number ): Complex64AccessorObject;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* function get( idx ) {
*     return x[ idx ];
* }
*
* function set( value, idx ) {
*     x[ idx ] = value;
* }
*
* x.get = get;
* x.set = set;
*
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns true
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object<T = unknown>( N: number, x: AccessorArrayLike<T>, stride: number, offset: number ): GetSetAccessorObject<T>;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object<T = unknown>( N: number, x: Array<T>, stride: number, offset: number ): GenericAccessorObject<T>;

/**
* Converts a strided array and associated metadata to an object likely to have the same "shape".
*
* ## Notes
*
* -   This function is intended as a potential performance optimization. In V8, for example, even if two objects share common properties, if those properties were added in different orders or if one object has additional properties not shared by the other object, then those objects will have different "hidden" classes. If a function is provided many objects having different "shapes", some JavaScript VMs (e.g., V8) will consider the function "megamorphic" and fail to perform various runtime optimizations. Accordingly, the intent of this function is to standardize the "shape" of the object holding strided array metadata to ensure that internal functions operating on strided arrays are provided consistent argument "shapes".
*
* -   The returned object has the following properties:
*
*     -   **data**: reference to the input array.
*     -   **dtype**: array data type.
*     -   **length**: number of indexed elements.
*     -   **stride**: index increment.
*     -   **offset**: starting index.
*     -   **accessorProtocol**: boolean indicating whether the input array uses accessors for getting and setting elements.
*     -   **accessors**: a two-element array whose first element is an accessor for retrieving an array element and whose second element is an accessor for setting an array element.
*
* @param N - number of indexed elements
* @param x - input array
* @param stride - index increment
* @param offset - index offset
* @returns object containing strided array data
*
* @example
* var x = {
*     '0': 1,
*     '1': 2,
*     '2': 3,
*     '4': 4,
*     'length': 4
* };
* var obj = strided2object( 4, x, 1, 0 );
* // returns {...}
*
* var bool = obj.accessorProtocol;
* // returns false
*
* var fcns = obj.accessors;
* // returns [ <Function>, <Function> ]
*
* var v = fcns[ 0 ]( x.data, 2 );
* // returns 3
*/
declare function strided2object<T = unknown>( N: number, x: Collection<T>, stride: number, offset: number ): IndexedAccessorObject<T>;


// EXPORTS //

export = strided2object;
