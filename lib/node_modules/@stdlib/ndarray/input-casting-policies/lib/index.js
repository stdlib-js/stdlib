/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Return a list of input ndarray casting policies.
*
* @module @stdlib/ndarray/input-casting-policies
*
* @example
* var policies = require( '@stdlib/ndarray/input-casting-policies' );
*
* var list = policies();
* // returns [...]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var enumeration = require( './enum.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'enum', enumeration );
assign( main, enumeration() );


// EXPORTS //

module.exports = main;
