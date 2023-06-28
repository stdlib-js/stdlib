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

// TypeScript Version: 2.0

/**
* Tests if a value is a semantic version string.
*
* @param value - value to test
* @returns boolean indicating whether a provided value is a semantic version string
*
* @example
* var bool = isSemVer( '1.0.0' );
* // returns true
*
* @example
* var bool = isSemVer( '1.0.0-alpha.1' );
* // returns true
*
* @example
* var bool = isSemVer( '0.1' );
* // returns false
*
* @example
* var bool = isSemVer( null );
* // returns false
*/
declare function isSemVer( value: any ): value is string;


// EXPORTS //

export = isSemVer;
