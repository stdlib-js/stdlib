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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { TypedArray } from '@stdlib/types/array';

/**
* JSON representation of typed array.
*/
interface JSONRepresentation {
	/**
	* Typed array type.
	*/
	type: 'Float64Array' | 'Float32Array' | 'Int32Array' | 'Uint32Array' | 'Int16Array' | 'Uint16Array' | 'Int8Array' | 'Uint8Array' | 'Uint8ClampedArray'; // tslint:disable-line:max-line-length

	/**
	* Typed array data as a generic array.
	*/
	data: Array<number>;
}

/**
* Returns a JSON representation of a typed array.
*
* ## Notes
*
* -   We build a JSON object representing a typed array similar to how Node.js `Buffer` objects are represented. See [Buffer][1].
*
* [1]: https://nodejs.org/api/buffer.html#buffer_buf_tojson
*
* @param arr - typed array to serialize
* @returns JSON representation
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var arr = new Float64Array( [ 5.0, 3.0 ] );
* var json = toJSON( arr );
* // returns { 'type': 'Float64Array', 'data': [ 5.0, 3.0 ] }
*/
declare function toJSON( arr: TypedArray ): JSONRepresentation;


// EXPORTS //

export = toJSON;
