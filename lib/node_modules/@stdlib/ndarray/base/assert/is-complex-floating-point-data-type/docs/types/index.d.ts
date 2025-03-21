/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Tests whether an input value is a supported ndarray complex-valued floating-point data type.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported ndarray complex-valued floating-point data type
*
* @example
* var bool = isComplexFloatingPointDataType( 'binary' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'complex64' );
* // returns true
*
* bool = isComplexFloatingPointDataType( 'complex128' );
* // returns true
*
* bool = isComplexFloatingPointDataType( 'float32' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'float64' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'generic' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'int16' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'int32' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'int8' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'uint16' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'uint32' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'uint8' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'uint8c' );
* // returns false
*
* bool = isComplexFloatingPointDataType( 'foo' );
* // returns false
*/
declare function isComplexFloatingPointDataType( v: any ): boolean;


// EXPORTS //

export = isComplexFloatingPointDataType;
