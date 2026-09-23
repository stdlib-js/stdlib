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
* Tests whether an input value is a supported ndarray binary data type.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported ndarray binary data type
*
* @example
* var bool = isBinaryDataType( 'binary' );
* // returns true
*
* bool = isBinaryDataType( 'bool' );
* // returns false
*
* bool = isBinaryDataType( 'float32' );
* // returns false
*
* bool = isBinaryDataType( 'float64' );
* // returns false
*
* bool = isBinaryDataType( 'generic' );
* // returns false
*
* bool = isBinaryDataType( 'int16' );
* // returns false
*
* bool = isBinaryDataType( 'int32' );
* // returns false
*
* bool = isBinaryDataType( 'int8' );
* // returns false
*
* bool = isBinaryDataType( 'uint16' );
* // returns false
*
* bool = isBinaryDataType( 'uint32' );
* // returns false
*
* bool = isBinaryDataType( 'uint8' );
* // returns false
*
* bool = isBinaryDataType( 'uint8c' );
* // returns false
*
* bool = isBinaryDataType( 'foo' );
* // returns false
*/
declare function isBinaryDataType( v: any ): boolean;


// EXPORTS //

export = isBinaryDataType;
