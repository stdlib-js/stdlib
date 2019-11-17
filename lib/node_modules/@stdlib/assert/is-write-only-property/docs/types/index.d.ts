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
* Tests if an object's own property is write-only.
*
* @param value - value to test
* @param property - property to test
* @returns boolean indicating if an object property is write-only
*
* @example
* var defineProperty = require( `@stdlib/utils/define-property` );
*
* var obj = {
*     'boop': true
* };
*
* function setter( v ) {
*     obj.boop = v;
* }
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': true,
*     'set': setter
* });
*
* var bool = isWriteOnlyProperty( obj, 'boop' );
* // returns false
*
* bool = isWriteOnlyProperty( obj, 'beep' );
* // returns true
*/
declare function isWriteOnlyProperty( value: any, property: any ): boolean;


// EXPORTS //

export = isWriteOnlyProperty;
