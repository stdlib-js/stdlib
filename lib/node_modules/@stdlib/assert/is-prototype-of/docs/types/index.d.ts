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
* Tests if an object's prototype chain contains a provided prototype.
*
* @param value - value to test
* @param proto - prototype
* @throws second argument must be an object and not null
* @returns boolean indicating if a provided prototype exists in a prototype chain
*
* @example
* var inherit = require( `@stdlib/utils/inherit` );
*
* function Foo() {
*     return this;
* }
*
* function Bar() {
*     return this;
* }
* inherit( Bar, Foo );
*
* var bar = new Bar();
*
* var bool = isPrototypeOf( bar, Foo.prototype );
* // returns true
*/
declare function isPrototypeOf( value: any, proto: any ): boolean;


// EXPORTS //

export = isPrototypeOf;
