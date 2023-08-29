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

// TypeScript Version: 2.0

/**
* Tests whether an input value is a supported ndarray signed integer data type.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported ndarray signed integer data type
*
* @example
* var bool = isSignedIntegerDataType( 'binary' );
* // returns false
*
* bool = isSignedIntegerDataType( 'float32' );
* // returns false
*
* bool = isSignedIntegerDataType( 'float64' );
* // returns false
*
* bool = isSignedIntegerDataType( 'generic' );
* // returns false
*
* bool = isSignedIntegerDataType( 'int16' );
* // returns true
*
* bool = isSignedIntegerDataType( 'int32' );
* // returns true
*
* bool = isSignedIntegerDataType( 'int8' );
* // returns true
*
* bool = isSignedIntegerDataType( 'uint16' );
* // returns false
*
* bool = isSignedIntegerDataType( 'uint32' );
* // returns false
*
* bool = isSignedIntegerDataType( 'uint8' );
* // returns false
*
* bool = isSignedIntegerDataType( 'uint8c' );
* // returns false
*
* bool = isSignedIntegerDataType( 'foo' );
* // returns false
*/
declare function isSignedIntegerDataType( v: any ): boolean;


// EXPORTS //

export = isSignedIntegerDataType;
