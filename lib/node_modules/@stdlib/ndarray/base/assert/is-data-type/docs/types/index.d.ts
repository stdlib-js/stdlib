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

/**
* Tests whether an input value is a supported ndarray data type.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported ndarray data type
*
* @example
* var bool = isDataType( 'binary' );
* // returns true
*
* bool = isDataType( 'float32' );
* // returns true
*
* bool = isDataType( 'float64' );
* // returns true
*
* bool = isDataType( 'generic' );
* // returns true
*
* bool = isDataType( 'int16' );
* // returns true
*
* bool = isDataType( 'int32' );
* // returns true
*
* bool = isDataType( 'int8' );
* // returns true
*
* bool = isDataType( 'uint16' );
* // returns true
*
* bool = isDataType( 'uint32' );
* // returns true
*
* bool = isDataType( 'uint8' );
* // returns true
*
* bool = isDataType( 'uint8c' );
* // returns true
*
* bool = isDataType( 'foo' );
* // returns false
*/
declare function isDataType( v: any ): boolean;


// EXPORTS //

export = isDataType;
