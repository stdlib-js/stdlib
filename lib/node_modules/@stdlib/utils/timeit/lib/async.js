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

// VARIABLES //

var noop = 'next();';


// MAIN //

/**
* Generates a source code body for asynchronous execution.
*
* ## Notes
*
* -   Example output:
*
*     ```javascript
*     "use strict";
*
*     var ctx = this;
*     var state1 = {};
*     var t1, d1, i1;
*
*     function before( state, next ) {
*         // {{before}}
*     }
*
*     function cb1( error ) {
*         if ( error ) {
*             return ctx.done( error );
*         }
*         i1 = 0;
*         t1 = ctx.tic();
*         main( state1, cb2 );
*     }
*
*     function main( state, next ) {
*         // {{code}}
*     }
*
*     function cb2( error ) {
*         if ( error ) {
*             return ctx.done( error );
*         }
*         i1 += 1;
*         if ( i1 < 1e6 ) {
*             return main( state1, cb2 );
*         }
*         d1 = ctx.toc( t1 );
*         after( state1, cb3 );
*     }
*
*     function after( state, next ) {
*         // {{after}}
*     }
*
*     function cb3( error ) {
*         if ( error ) {
*             return ctx.done( error );
*         }
*         ctx.done( null, d1 );
*     }
*
*     before( state1, cb1 );
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
function body( id, code, opts ) {
	var before;
	var after;
	var state;
	var main;
	var src;
	var cb1;
	var cb2;
	var cb3;
	var ctx;
	var t;
	var d;
	var i;

	src = '"use strict";';

	// Define identifiers:
	before = '__before$'+id+'__';
	after = '__after$'+id+'__';
	state = '__state$'+id+'__';
	main = '__main$'+id+'__';
	cb1 = '__cb1$'+id+'__';
	cb2 = '__cb2$'+id+'__';
	cb3 = '__cb3$'+id+'__';
	ctx = '__ctx$'+id+'__';
	i = '__i$'+id+'__';
	t = '__t$'+id+'__';
	d = '__d$'+id+'__';

	// Declare variables:
	src += 'var '+ctx+' = this;';
	src += 'var '+state+' = {};';
	src += 'var '+i+','+t+','+d+';';

	// Insert the setup code:
	src += 'function '+before+'( state, next ) {';
	src += '  '+(opts.before||noop)+';';
	src += '}';

	// Insert the setup callback:
	src += 'function '+cb1+'( error ) {';
	src += '  if ( error ) {';
	src += '    return '+ctx+'.done( error );';
	src += '  }';
	src += '  '+i+' = 0;';
	src += '  '+t+' = '+ctx+'.tic();'; // start the timer
	src += '  '+main+'( '+state+','+cb2+' );';
	src += '}';

	// Wrap the code to time in a function:
	src += 'function '+main+'( state, next ) {';
	src += '  '+(code||noop)+';';
	src += '}';

	// Insert the main callback:
	src += 'function '+cb2+'( error ) {';
	src += '  if ( error ) {';
	src += '    return '+ctx+'.done( error );';
	src += '  }';
	src += '  '+i+' += 1;';
	src += '  if ( '+i+' < '+opts.iterations+' ) {';
	src += '    return '+main+'( '+state+','+cb2+' );';
	src += '  }';
	src += '  '+d+' = '+ctx+'.toc( '+t+' );'; // stop the timer
	src += '  '+after+'( '+state+','+cb3+' );';
	src += '}';

	// Insert the cleanup code:
	src += 'function '+after+'( state, next ) {';
	src += '  '+(opts.after||noop)+';';
	src += '}';

	// Insert the cleanup callback:
	src += 'function '+cb3+'( error ) {';
	src += '  if ( error ) {';
	src += '    return '+ctx+'.done( error );';
	src += '  }';
	src += '  '+ctx+'.done( null,'+d+' );'; // return results
	src += '}';

	// Invoke the setup function to begin the execution sequence:
	src += before+'( '+state+','+cb1+' );';

	// Return a value:
	src += 'return '+id+';';

	return src;
}


// EXPORTS //

module.exports = body;
