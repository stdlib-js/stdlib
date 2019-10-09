/**
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

'use strict';

/**
* Return an array of an object's own enumerable property names which are not integer indices.
*
* @module @stdlib/utils/nonindex-keys
*
* @example
* var nonIndexKeys = require( '@stdlib/utils/nonindex-keys' );
*
* function Foo() {
*     this[ 0 ] = 3.14;
*     this.beep = 'boop';
*     return this;
* }
*
* Foo.prototype.foo = 'bar';
*
* var obj = new Foo();
*
* var keys = nonIndexKeys( obj );
* // e.g., returns [ 'beep' ]
*/

// MODULES //

var nonIndexKeys = require( './main.js' );


// EXPORTS //

module.exports = nonIndexKeys;
