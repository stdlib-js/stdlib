/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Get a nested property value.
*
* @module @stdlib/object/deep-get
*
* @example
* var deepGet = require( '@stdlib/object/deep-get' );
*
* var obj = { 'a': { 'b': { 'c': 'd' } } };
*
* var val = deepGet( obj, 'a.b.c' );
* // returns 'd'
*
* var dget = factory( 'a/b/c', {
*     'sep': '/'
* });
*
* obj = { 'a': { 'b': { 'c': 'd' } } };
*
* val = dget( obj );
* // returns 'd'
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
