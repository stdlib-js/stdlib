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

// MODULES //

var defineProperty = require( '@stdlib/utils/define-property' );


// MAIN //

/**
* List node constructor.
*
* @private
* @constructor
* @param {*} value - node value
* @returns {Node} Node instance
*
* @example
* var node = new Node( 'foo' );
* // returns <Node>
*/
function Node( value ) { // eslint-disable-line stdlib/no-redeclare
	// Why getters? Because some of the list APIs will return the list "node", not the value. In which case, the node API is no longer private and we have to guard against users mucking about (deleting, updating, etc) with property values (in particular, the `next` and `prev` properties).
	defineProperty( this, 'next', {
		'configurable': false,
		'enumerable': true,
		'get': function get() { // eslint-disable-line no-restricted-syntax
			return this._next;
		}
	});
	defineProperty( this, 'prev', {
		'configurable': false,
		'enumerable': true,
		'get': function get() { // eslint-disable-line no-restricted-syntax
			return this._prev;
		}
	});
	this.value = value;

	defineProperty( this, '_next', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': null
	});
	defineProperty( this, '_prev', {
		'configurable': false,
		'enumerable': false,
		'writable': true,
		'value': null
	});

	return this;
}


// EXPORTS //

module.exports = Node;
