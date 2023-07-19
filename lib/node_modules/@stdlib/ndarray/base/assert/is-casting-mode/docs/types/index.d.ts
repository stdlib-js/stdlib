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
* Tests whether an input value is a supported ndarray casting mode.
*
* @param v - value to test
* @returns boolean indicating whether an input value is a supported ndarray casting mode
*
* @example
* var bool = isCastingMode( 'none' );
* // returns true
*
* bool = isCastingMode( 'equiv' );
* // returns true
*
* bool = isCastingMode( 'safe' );
* // returns true
*
* bool = isCastingMode( 'same-kind' );
* // returns true
*
* bool = isCastingMode( 'unsafe' );
* // returns true
*
* bool = isCastingMode( 'foo' );
* // returns false
*/
declare function isCastingMode( v: any ): boolean;


// EXPORTS //

export = isCastingMode;
