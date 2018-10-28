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
* Test whether an object contains a nested key path.
*
* @module @stdlib/assert/deep-has-own-property
*
* @example
* var deepHasOwnProp = require( '@stdlib/assert/deep-has-own-property' );
*
* var obj = {
*     'a': {
*         'b': {
*             'c': 'd'
*         }
*     }
* };
*
* var bool = deepHasOwnProp( obj, 'a.b.c' );
* // returns true
*
* bool = deepHasOwnProp( obj, [ 'a', 'b', 'c' ] );
* // returns true
*
* @example
* var factory = require( '@stdlib/assert/deep-has-own-property' ).factory;
*
* var has = factory( 'a/b/c', {
*     'sep': '/'
* });
*
* var obj = {
*     'a': {
*         'b': {
*             'c': 'd'
*         }
*     }
* };
*
* var bool = has( obj );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var deepHasOwnProp = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( deepHasOwnProp, 'factory', factory );


// EXPORTS //

module.exports = deepHasOwnProp;
