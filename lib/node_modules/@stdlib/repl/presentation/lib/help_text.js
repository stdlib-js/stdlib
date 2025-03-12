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

// MAIN //

var MSG = [
	'',
	'    pres()                h()    Print presentation help text.',
	'',
	'    next()                n()    Move to the next slide or slide fragment.',
	'    nextSlide()           N()    Move to the next slide.',
	'    prev()                p()    Move to the previous slide or slide fragment.',
	'    prevSlide()           P()    Move to the previous slide.',
	'',
	'    jump()                g()    Jump a specified number of slides.',
	'    jumpTo()              j()    Jump to a specified slide.',
	'    first()               f()    Jump to the first slide.',
	'    last()                l()    Jump to the first fragment of the last slide.',
	'    end()                 L()    Jump to the last fragment of the last slide.',
	'',
	'    firstFragment()       ff()   Jump to the first slide fragment.',
	'    lastFragment()        lf()   Jump to the last slide fragment.',
	'',
	'    blank()               b()    Render a blank screen.',
	'    redraw()              rd()   Redraw the current slide.',
	'',
	'    runSlide()            r()    Run slide code.',
	'',
	'    watch()               w()    Watch a presentation file for changes.',
	'    unwatch()             uw()   Stop watching a presentation file for changes.',
	'',
	'    loadPresentation()    lp()   Load a presentation.',
	'    reloadPresentation()  rlp()  Reload the current presentation.',
	'    renderSlide()                Render the current slide.',
	'',
	'    currentSlide                 Current slide index.',
	'    numSlides                    Number of slides.',
	'',
	''
].join( '\n' );


// EXPORTS //

module.exports = MSG;
