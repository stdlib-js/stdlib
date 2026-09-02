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

// TypeScript Version: 4.1

/**
* Tests if a value is an ndarray descriptor.
*
* ## Notes
*
* -   An ndarray descriptor is an object with the following properties:
*
*     -   dtype: data type.
*     -   data: underlying data buffer.
*     -   shape: array shape.
*     -   strides: array strides.
*     -   offset: starting index of the first indexed element in the data buffer.
*     -   order: storage layout.
*
* @param v - value to test
* @returns boolean indicating if a value is an ndarray descriptor
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var bool = isndarrayDescriptor( zeros( [ 2, 2 ] ) );
* // returns true
*
* bool = isndarrayDescriptor( [] );
* // returns false
*/
declare function isndarrayDescriptor( v: any ): boolean;


// EXPORTS //

export = isndarrayDescriptor;
