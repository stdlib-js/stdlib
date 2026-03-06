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

var onBlank = require( './commands/blank.js' );
var onCurrentSlide = require( './commands/current_slide.js' );
var onEnd = require( './commands/end.js' );
var onFirst = require( './commands/first.js' );
var onFirstFragment = require( './commands/first_fragment.js' );
var onJump = require( './commands/jump.js' );
var onJumpTo = require( './commands/jump_to.js' );
var onLast = require( './commands/last.js' );
var onLastFragment = require( './commands/last_fragment.js' );
var onLoadPresentation = require( './commands/load_presentation.js' );
var onNext = require( './commands/next.js' );
var onNextSlide = require( './commands/next_slide.js' );
var onNumSlides = require( './commands/num_slides.js' );
var onPres = require( './commands/pres.js' );
var onPrev = require( './commands/prev.js' );
var onPrevSlide = require( './commands/prev_slide.js' );
var onRedraw = require( './commands/redraw.js' );
var onReloadPresentation = require( './commands/reload_presentation.js' );
var onRenderSlide = require( './commands/render_slide.js' );
var onRunSlide = require( './commands/run_slide.js' );
var onUnwatch = require( './commands/unwatch.js' );
var onWatch = require( './commands/watch.js' );


// MAIN //

/**
* Returns a list of REPL presentation-specific commands.
*
* ## Notes
*
* -   Each array element is comprised as follows:
*
*     ```text
*     [ <command>, <shortcut>, <function>, <is_accessor> ]
*     ```
*
*     where the first element is the command alias, the second element is the command alias shortcut, the third element the command callback, and the fourth element a boolean indicating whether the callback is an accessor (getter; i.e., the command refers to a property rather than a function to be explicitly invoked).
*
* @private
* @param {Presentation} pres - presentation instance
* @returns {ArrayArray} commands
*/
function commands( pres ) {
	var cmds;

	// Define a list of REPL presentation-specific commands (NOTE: keep in alphabetical order):
	cmds = [];
	cmds.push( [ 'blank', 'b', onBlank( pres ), false ] );
	cmds.push( [ 'currentSlide', '', onCurrentSlide( pres ), true ] );
	cmds.push( [ 'end', 'L', onEnd( pres ), false ] );
	cmds.push( [ 'first', 'f', onFirst( pres ), false ] );
	cmds.push( [ 'firstFragment', 'ff', onFirstFragment( pres ), false ] );
	cmds.push( [ 'jump', 'g', onJump( pres ), false ] );
	cmds.push( [ 'jumpTo', 'j', onJumpTo( pres ), false ] );
	cmds.push( [ 'last', 'l', onLast( pres ), false ] );
	cmds.push( [ 'lastFragment', 'lf', onLastFragment( pres ), false ] );
	cmds.push( [ 'loadPresentation', 'lp', onLoadPresentation( pres ), false ] );
	cmds.push( [ 'next', 'n', onNext( pres ), false ] );
	cmds.push( [ 'nextSlide', 'N', onNextSlide( pres ), false ] );
	cmds.push( [ 'numSlides', '', onNumSlides( pres ), true ] );
	cmds.push( [ 'pres', 'h', onPres( pres ), false ] );
	cmds.push( [ 'prev', 'p', onPrev( pres ), false ] );
	cmds.push( [ 'prevSlide', 'P', onPrevSlide( pres ), false ] );
	cmds.push( [ 'redraw', 'rd', onRedraw( pres ), false ] );
	cmds.push( [ 'reloadPresentation', 'rlp', onReloadPresentation( pres ), false ] );
	cmds.push( [ 'renderSlide', '', onRenderSlide( pres ), false ] );
	cmds.push( [ 'runSlide', 'r', onRunSlide( pres ), false ] );
	cmds.push( [ 'unwatch', 'uw', onUnwatch( pres ), false ] );
	cmds.push( [ 'watch', 'w', onWatch( pres ), false ] );

	return cmds;
}


// EXPORTS //

module.exports = commands;
