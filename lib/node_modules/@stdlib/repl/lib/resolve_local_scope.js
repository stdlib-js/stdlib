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

// MODULES //

var walk = require( 'acorn-walk' ).ancestor;
var appendUnique = require( './append_unique.js' );


// MAIN //

/**
* Given an abstract syntax tree (AST) containing resolved local scopes, returns the local scope for a provided AST node.
*
* @private
* @param {AST} ast - abstract syntax tree (AST)
* @param {Node} node - AST node
* @returns {Array} local scope
*/
function resolveScope( ast, node ) {
	var visitors;
	var scope;

	visitors = {};
	visitors[ node.type ] = onVisit;

	scope = [];
	walk( ast, visitors );

	return scope;

	/**
	* Callback invoked upon encountering an AST node.
	*
	* @private
	* @param {Node} n - AST node
	* @param {Array} parents - array of parent AST nodes
	*/
	function onVisit( n, parents ) {
		var locals;
		var i;
		var j;
		if ( n === node ) {
			// Note: the direction in which we traverse the list of parents does not matter, as we only care about identifier names, not where they were declared and to what value they are assigned. Meaning, we don't need to concern ourselves with whether a local scope redeclares a variable in a higher scope, as we are only concerned with a general list of identifier names available at the location of the provided AST node.
			for ( i = 0; i < parents.length-1; i++ ) {
				locals = parents[ i ].locals;
				if ( locals ) {
					for ( j = 0; j < locals.length; j++ ) {
						appendUnique( scope, locals[ j ] );
					}
				}
			}
		}
	}
}


// EXPORTS //

module.exports = resolveScope;
