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
* Tests whether a JSON Pointer reference token is safe.
*
* @param token - reference token
* @returns boolean indicating whether a token is safe
*
* @example
* var bool = isSafeToken( 'foo' );
* // returns true
*
* @example
* var bool = isSafeToken( '__proto__' );
* // returns false
*
* @example
* var bool = isSafeToken( 'constructor' );
* // returns false
*
* @example
* var bool = isSafeToken( 'prototype' );
* // returns false
*/
declare function isSafeToken( token: string ): boolean;


// EXPORTS //

export = isSafeToken;
