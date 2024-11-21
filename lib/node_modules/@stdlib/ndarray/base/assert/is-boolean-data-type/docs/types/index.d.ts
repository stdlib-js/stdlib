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

/**
* Tests whether an input value is a supported ndarray boolean data type.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported ndarray boolean data type
*
* @example
* var bool = isBooleanDataType( 'binary' );
* // returns false
*
* bool = isBooleanDataType( 'bool' );
* // returns true
*
* bool = isBooleanDataType( 'float32' );
* // returns false
*
* bool = isBooleanDataType( 'float64' );
* // returns false
*
* bool = isBooleanDataType( 'generic' );
* // returns false
*
* bool = isBooleanDataType( 'int16' );
* // returns false
*
* bool = isBooleanDataType( 'int32' );
* // returns false
*
* bool = isBooleanDataType( 'int8' );
* // returns false
*
* bool = isBooleanDataType( 'uint16' );
* // returns false
*
* bool = isBooleanDataType( 'uint32' );
* // returns false
*
* bool = isBooleanDataType( 'uint8' );
* // returns false
*
* bool = isBooleanDataType( 'uint8c' );
* // returns false
*
* bool = isBooleanDataType( 'foo' );
* // returns false
*/
declare function isBooleanDataType( v: any ): boolean;


// EXPORTS //

export = isBooleanDataType;
