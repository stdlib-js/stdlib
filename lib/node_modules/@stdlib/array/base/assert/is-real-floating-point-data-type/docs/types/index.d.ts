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
* Tests whether an input value is a supported array real-valued floating-point data type.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported array real-valued floating-point data type
*
* @example
* var bool = isRealFloatingPointDataType( 'float32' );
* // returns true
*
* bool = isRealFloatingPointDataType( 'float64' );
* // returns true
*
* bool = isRealFloatingPointDataType( 'generic' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'int16' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'int32' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'int8' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'uint16' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'uint32' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'uint8' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'uint8c' );
* // returns false
*
* bool = isRealFloatingPointDataType( 'foo' );
* // returns false
*/
declare function isRealFloatingPointDataType( v: any ): boolean;


// EXPORTS //

export = isRealFloatingPointDataType;
