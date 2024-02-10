/**
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

import { Collection, ArrayLike, AccessorArrayLike, Complex128Array, Complex64Array } from '@stdlib/types/array';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Boolean indicating whether to enforce strict bounds checking (default: false).
	*/
	strict?: boolean;
}

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var y = array2fancy( x );
* // returns <Float64Array>
*
* var v = y[ ':' ];
* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function array2fancy( x: Float64Array, options?: Options ): Float64Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var y = array2fancy( x );
* // returns <Float32Array>
*
* var v = y[ ':' ];
* // returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function array2fancy( x: Float32Array, options?: Options ): Float32Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var y = array2fancy( x );
* // returns <Complex128Array>
*
* var v = y[ ':' ];
* // returns <Complex128Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function array2fancy( x: Complex128Array, options?: Options ): Complex128Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var y = array2fancy( x );
* // returns <Complex64Array>
*
* var v = y[ ':' ];
* // returns <Complex64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*/
declare function array2fancy( x: Complex64Array, options?: Options ): Complex64Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Int32Array = require( '@stdlib/array/int32' );
*
* var x = new Int32Array( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Int32Array>
*
* var v = y[ ':' ];
* // returns <Int32Array>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Int32Array, options?: Options ): Int32Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Int16Array = require( '@stdlib/array/int16' );
*
* var x = new Int16Array( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Int16Array>
*
* var v = y[ ':' ];
* // returns <Int16Array>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Int16Array, options?: Options ): Int16Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Int8Array = require( '@stdlib/array/int8' );
*
* var x = new Int8Array( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Int8Array>
*
* var v = y[ ':' ];
* // returns <Int8Array>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Int8Array, options?: Options ): Int8Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Uint32Array = require( '@stdlib/array/uint32' );
*
* var x = new Uint32Array( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Uint32Array>
*
* var v = y[ ':' ];
* // returns <Uint32Array>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Uint32Array, options?: Options ): Uint32Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Uint16Array = require( '@stdlib/array/uint16' );
*
* var x = new Uint16Array( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Uint16Array>
*
* var v = y[ ':' ];
* // returns <Uint16Array>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Uint16Array, options?: Options ): Uint16Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Uint8Array>
*
* var v = y[ ':' ];
* // returns <Uint8Array>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Uint8Array, options?: Options ): Uint8Array;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
*
* var x = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* // returns <Uint8ClampedArray>
*
* var v = y[ ':' ];
* // returns <Uint8ClampedArray>[ 1, 2, 3, 4 ]
*/
declare function array2fancy( x: Uint8ClampedArray, options?: Options ): Uint8ClampedArray;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = array2fancy( x );
* // returns <Array>
*
* var v = y[ ':' ];
* // returns [ 1, 2, 3, 4 ]
*/
declare function array2fancy<T = unknown>( x: Array<T>, options?: Options ): Array<T>;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
*
* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
*
* var y = array2fancy( x );
* var v = y[ ':' ];
*/
declare function array2fancy<T = unknown>( x: AccessorArrayLike<T>, options?: Options ): AccessorArrayLike<T>;

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = array2fancy( x );
* // returns <Array>
*
* var v = y[ ':' ];
* // returns [ 1, 2, 3, 4 ]
*/
declare function array2fancy<T = unknown>( x: Collection<T>, options?: Options ): Collection<T>;

/**
* Converts an array-like value to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @returns fancy array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = array2fancy( x );
* // returns <Array>
*
* var v = y[ ':' ];
* // returns [ 1, 2, 3, 4 ]
*/
declare function array2fancy<T = unknown>( x: ArrayLike<T>, options?: Options ): ArrayLike<T>;


// EXPORTS //

export = array2fancy;
