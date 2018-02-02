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

// MAIN //

/**
* Generates a source code body for synchronous execution.
*
* ## Notes
*
* -   Example output:
*
*     ```javascript
*     "use strict";
*
*     var ctx = this;
*     var t1, d1, i1;
*
*     // {{before}}
*
*     t1 = ctx.tic();
*     for ( i1 = 0; i1 < 1e6; i1++ ) {
*         // {{code}}
*     }
*     d1 = ctx.toc( t1 );
*
*     // {{after}}
*
*     ctx.done( null, d1 );
*
*     return 1;
*     ```
*
*
* @private
* @param {number} id - id
* @param {string} code - code to time
* @param {Options} opts - function options
* @param {string} opts.before - setup code
* @param {string} opts.after - cleanup code
* @param {PositiveInteger} opts.iterations - number of iterations
* @returns {string} source code body
*/
function generate( id, code, opts ) {
	var src;
	var ctx;
	var t;
	var d;
	var i;

	src = '"use strict";';

	// Declare variables:
	ctx = '__ctx$'+id+'__';
	i = '__i$'+id+'__';
	t = '__t$'+id+'__';
	d = '__d$'+id+'__';

	src += 'var '+ctx+' = this;';
	src += 'var '+t+','+d+','+i+';';

	// Insert the setup code:
	src += opts.before+';';

	// Start the timer:
	src += t+' = '+ctx+'.tic();';

	// Create the loop:
	src += 'for ( '+i+'= 0; '+i+' < '+opts.iterations+'; '+i+'++ ) {';

	// Insert the loop body:
	src += code+';';

	// Close the loop:
	src += '}';

	// Stop the timer:
	src += d+' = '+ctx+'.toc( '+t+' );';

	// Insert the cleanup code:
	src += opts.after+';';

	// Return results:
	src += ctx+'.done( null, '+d+' );';

	// Return a value:
	src += 'return '+id+';';

	return src;
}


// EXPORTS //

module.exports = generate;
