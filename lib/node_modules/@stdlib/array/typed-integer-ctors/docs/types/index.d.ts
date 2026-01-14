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

/**
* Returns an `Int32Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'int32' );
* // returns <Function>
*/
declare function ctors( dtype: 'int32' ): typeof Int32Array;

/**
* Returns an `Int16Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'int16' );
* // returns <Function>
*/
declare function ctors( dtype: 'int16' ): typeof Int16Array;

/**
* Returns an `Int8Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'int8' );
* // returns <Function>
*/
declare function ctors( dtype: 'int8' ): typeof Int8Array;

/**
* Returns a `Uint32Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'uint32' );
* // returns <Function>
*/
declare function ctors( dtype: 'uint32' ): typeof Uint32Array;

/**
* Returns a `Uint16Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'uint16' );
* // returns <Function>
*/
declare function ctors( dtype: 'uint16' ): typeof Uint16Array;

/**
* Returns a `Uint8Array` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'uint8' );
* // returns <Function>
*/
declare function ctors( dtype: 'uint8' ): typeof Uint8Array;

/**
* Returns a `Uint8ClampedArray` constructor.
*
* @param dtype - data type
* @returns constructor
*
* @example
* var ctor = ctors( 'uint8c' );
* // returns <Function>
*/
declare function ctors( dtype: 'uint8c' ): typeof Uint8ClampedArray;

/**
* Returns an integer-valued typed array constructor.
*
* @param dtype - data type
* @returns constructor or null
*
* @example
* var ctor = ctors( 'int32' );
* // returns <Function>
*
* @example
* var ctor = ctors( 'int' );
* // returns null
*/
declare function ctors( dtype: string ): Function | null;


// EXPORTS //

export = ctors;
