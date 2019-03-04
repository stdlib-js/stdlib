/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
* Tests if a value is a valid(ish) email address.
*
* @param value - value to test
* @returns boolean indicating whether a value is a valid(ish) email address
*
* @example
* var bool = isEmail( 'beep@boop.com' );
* // returns true
*
* @example
* var bool = isEmail( 'beep' );
* // returns false
*
* @example
* var bool = isEmail( 'beep.com' );
* // returns false
*
* @example
* var bool = isEmail( null );
* // returns false
*/
declare function isEmail( value: any ): boolean;


// EXPORTS //

export = isEmail;
