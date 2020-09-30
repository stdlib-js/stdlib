/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var constants = require( './constants.js' );


// MAIN //

/**
* Returns the emoji property from the [Unicode Standard][1].
*
* [1]: https://www.unicode.org/Public/13.0.0/ucd/emoji/emoji-data.txt
*
* @private
* @param {NonNegativeInteger} code - Unicode code point
* @returns {NonNegativeInteger} emoji property
*
* @example
* var out = emojiProperty( 0x23EC );
* // returns 101
*
* @example
* var out = emojiProperty( 0x1FFFE );
* // returns 11
*/
function emojiProperty( code ) {
	if (
		code === 0x00A9 || // E0.6   [1] (©️)       copyright
		code === 0x00AE || // E0.6   [1] (®️)       registered
		code === 0x203C || // E0.6   [1] (‼️)       double exclamation mark
		code === 0x2049 || // E0.6   [1] (⁉️)       exclamation question mark
		code === 0x2122 || // E0.6   [1] (™️)       trade mark
		code === 0x2139 || // E0.6   [1] (ℹ️)       information
		( 0x2194 <= code && code <= 0x2199 ) || // E0.6   [6] (↔️..↙️)    left-right arrow..down-left arrow
		( 0x21A9 <= code && code <= 0x21AA ) || // E0.6   [2] (↩️..↪️)    right arrow curving left..left arrow curving right
		( 0x231A <= code && code <= 0x231B ) || // E0.6   [2] (⌚..⌛)    watch..hourglass done
		code === 0x2328 || // E1.0   [1] (⌨️)       keyboard
		code === 0x2388 || // E0.0   [1] (⎈)       HELM SYMBOL
		code === 0x23CF || // E1.0   [1] (⏏️)       eject button
		( 0x23E9 <= code && code <= 0x23EC ) || // E0.6   [4] (⏩..⏬)    fast-forward button..fast down button
		( 0x23ED <= code && code <= 0x23EE ) || // E0.7   [2] (⏭️..⏮️)    next track button..last track button
		code === 0x23EF || // E1.0   [1] (⏯️)       play or pause button
		code === 0x23F0 || // E0.6   [1] (⏰)       alarm clock
		( 0x23F1 <= code && code <= 0x23F2 ) || // E1.0   [2] (⏱️..⏲️)    stopwatch..timer clock
		code === 0x23F3 || // E0.6   [1] (⏳)       hourglass not done
		( 0x23F8 <= code && code <= 0x23FA ) || // E0.7   [3] (⏸️..⏺️)    pause button..record button
		code === 0x24C2 || // E0.6   [1] (Ⓜ️)       circled M
		( 0x25AA <= code && code <= 0x25AB ) || // E0.6   [2] (▪️..▫️)    black small square..white small square
		code === 0x25B6 || // E0.6   [1] (▶️)       play button
		code === 0x25C0 || // E0.6   [1] (◀️)       reverse button
		( 0x25FB <= code && code <= 0x25FE ) || // E0.6   [4] (◻️..◾)    white medium square..black medium-small square
		( 0x2600 <= code && code <= 0x2601 ) || // E0.6   [2] (☀️..☁️)    sun..cloud
		( 0x2602 <= code && code <= 0x2603 ) || // E0.7   [2] (☂️..☃️)    umbrella..snowman
		code === 0x2604 || // E1.0   [1] (☄️)       comet
		code === 0x2605 || // E0.0   [1] (★)       BLACK STAR
		( 0x2607 <= code && code <= 0x260D ) || // E0.0   [7] (☇..☍)    LIGHTNING..OPPOSITION
		code === 0x260E || // E0.6   [1] (☎️)       telephone
		( 0x260F <= code && code <= 0x2610 ) || // E0.0   [2] (☏..☐)    WHITE TELEPHONE..BALLOT BOX
		code === 0x2611 || // E0.6   [1] (☑️)       check box with check
		code === 0x2612 || // E0.0   [1] (☒)       BALLOT BOX WITH X
		( 0x2614 <= code && code <= 0x2615 ) || // E0.6   [2] (☔..☕)    umbrella with rain drops..hot beverage
		( 0x2616 <= code && code <= 0x2617 ) || // E0.0   [2] (☖..☗)    WHITE SHOGI PIECE..BLACK SHOGI PIECE
		code === 0x2618 || // E1.0   [1] (☘️)       shamrock
		( 0x2619 <= code && code <= 0x261C ) || // E0.0   [4] (☙..☜)    REVERSED ROTATED FLORAL HEART BULLET..WHITE LEFT POINTING INDEX
		code === 0x261D || // E0.6   [1] (☝️)       index pointing up
		( 0x261E <= code && code <= 0x261F ) || // E0.0   [2] (☞..☟)    WHITE RIGHT POINTING INDEX..WHITE DOWN POINTING INDEX
		code === 0x2620 || // E1.0   [1] (☠️)       skull and crossbones
		code === 0x2621 || // E0.0   [1] (☡)       CAUTION SIGN
		( 0x2622 <= code && code <= 0x2623 ) || // E1.0   [2] (☢️..☣️)    radioactive..biohazard
		( 0x2624 <= code && code <= 0x2625 ) || // E0.0   [2] (☤..☥)    CADUCEUS..ANKH
		code === 0x2626 || // E1.0   [1] (☦️)       orthodox cross
		( 0x2627 <= code && code <= 0x2629 ) || // E0.0   [3] (☧..☩)    CHI RHO..CROSS OF JERUSALEM
		code === 0x262A || // E0.7   [1] (☪️)       star and crescent
		( 0x262B <= code && code <= 0x262D ) || // E0.0   [3] (☫..☭)    FARSI SYMBOL..HAMMER AND SICKLE
		code === 0x262E || // E1.0   [1] (☮️)       peace symbol
		code === 0x262F || // E0.7   [1] (☯️)       yin yang
		( 0x2630 <= code && code <= 0x2637 ) || // E0.0   [8] (☰..☷)    TRIGRAM FOR HEAVEN..TRIGRAM FOR EARTH
		( 0x2638 <= code && code <= 0x2639 ) || // E0.7   [2] (☸️..☹️)    wheel of dharma..frowning face
		code === 0x263A || // E0.6   [1] (☺️)       smiling face
		( 0x263B <= code && code <= 0x263F ) || // E0.0   [5] (☻..☿)    BLACK SMILING FACE..MERCURY
		code === 0x2640 || // E4.0   [1] (♀️)       female sign
		code === 0x2641 || // E0.0   [1] (♁)       EARTH
		code === 0x2642 || // E4.0   [1] (♂️)       male sign
		( 0x2643 <= code && code <= 0x2647 ) || // E0.0   [5] (♃..♇)    JUPITER..PLUTO
		( 0x2648 <= code && code <= 0x2653 ) || // E0.6  [12] (♈..♓)    Aries..Pisces
		( 0x2654 <= code && code <= 0x265E ) || // E0.0  [11] (♔..♞)    WHITE CHESS KING..BLACK CHESS KNIGHT
		code === 0x265F || // E11.0  [1] (♟️)       chess pawn
		code === 0x2660 || // E0.6   [1] (♠️)       spade suit
		( 0x2661 <= code && code <= 0x2662 ) || // E0.0   [2] (♡..♢)    WHITE HEART SUIT..WHITE DIAMOND SUIT
		code === 0x2663 || // E0.6   [1] (♣️)       club suit
		code === 0x2664 || // E0.0   [1] (♤)       WHITE SPADE SUIT
		( 0x2665 <= code && code <= 0x2666 ) || // E0.6   [2] (♥️..♦️)    heart suit..diamond suit
		code === 0x2667 || // E0.0   [1] (♧)       WHITE CLUB SUIT
		code === 0x2668 || // E0.6   [1] (♨️)       hot springs
		( 0x2669 <= code && code <= 0x267A ) || // E0.0  [18] (♩..♺)    QUARTER NOTE..RECYCLING SYMBOL FOR GENERIC MATERIALS
		code === 0x267B || // E0.6   [1] (♻️)       recycling symbol
		( 0x267C <= code && code <= 0x267D ) || // E0.0   [2] (♼..♽)    RECYCLED PAPER SYMBOL..PARTIALLY-RECYCLED PAPER SYMBOL
		code === 0x267E || // E11.0  [1] (♾️)       infinity
		code === 0x267F || // E0.6   [1] (♿)       wheelchair symbol
		( 0x2680 <= code && code <= 0x2685 ) || // E0.0   [6] (⚀..⚅)    DIE FACE-1..DIE FACE-6
		( 0x2690 <= code && code <= 0x2691 ) || // E0.0   [2] (⚐..⚑)    WHITE FLAG..BLACK FLAG
		code === 0x2692 || // E1.0   [1] (⚒️)       hammer and pick
		code === 0x2693 || // E0.6   [1] (⚓)       anchor
		code === 0x2694 || // E1.0   [1] (⚔️)       crossed swords
		code === 0x2695 || // E4.0   [1] (⚕️)       medical symbol
		( 0x2696 <= code && code <= 0x2697 ) || // E1.0   [2] (⚖️..⚗️)    balance scale..alembic
		code === 0x2698 || // E0.0   [1] (⚘)       FLOWER
		code === 0x2699 || // E1.0   [1] (⚙️)       gear
		code === 0x269A || // E0.0   [1] (⚚)       STAFF OF HERMES
		( 0x269B <= code && code <= 0x269C ) || // E1.0   [2] (⚛️..⚜️)    atom symbol..fleur-de-lis
		( 0x269D <= code && code <= 0x269F ) || // E0.0   [3] (⚝..⚟)    OUTLINED WHITE STAR..THREE LINES CONVERGING LEFT
		( 0x26A0 <= code && code <= 0x26A1 ) || // E0.6   [2] (⚠️..⚡)    warning..high voltage
		( 0x26A2 <= code && code <= 0x26A6 ) || // E0.0   [5] (⚢..⚦)    DOUBLED FEMALE SIGN..MALE WITH STROKE SIGN
		code === 0x26A7 || // E13.0  [1] (⚧️)       transgender symbol
		( 0x26A8 <= code && code <= 0x26A9 ) || // E0.0   [2] (⚨..⚩)    VERTICAL MALE WITH STROKE SIGN..HORIZONTAL MALE WITH STROKE SIGN
		( 0x26AA <= code && code <= 0x26AB ) || // E0.6   [2] (⚪..⚫)    white circle..black circle
		( 0x26AC <= code && code <= 0x26AF ) || // E0.0   [4] (⚬..⚯)    MEDIUM SMALL WHITE CIRCLE..UNMARRIED PARTNERSHIP SYMBOL
		( 0x26B0 <= code && code <= 0x26B1 ) || // E1.0   [2] (⚰️..⚱️)    coffin..funeral urn
		( 0x26B2 <= code && code <= 0x26BC ) || // E0.0  [11] (⚲..⚼)    NEUTER..SESQUIQUADRATE
		( 0x26BD <= code && code <= 0x26BE ) || // E0.6   [2] (⚽..⚾)    soccer ball..baseball
		( 0x26BF <= code && code <= 0x26C3 ) || // E0.0   [5] (⚿..⛃)    SQUARED KEY..BLACK DRAUGHTS KING
		( 0x26C4 <= code && code <= 0x26C5 ) || // E0.6   [2] (⛄..⛅)    snowman without snow..sun behind cloud
		( 0x26C6 <= code && code <= 0x26C7 ) || // E0.0   [2] (⛆..⛇)    RAIN..BLACK SNOWMAN
		code === 0x26C8 || // E0.7   [1] (⛈️)       cloud with lightning and rain
		( 0x26C9 <= code && code <= 0x26CD ) || // E0.0   [5] (⛉..⛍)    TURNED WHITE SHOGI PIECE..DISABLED CAR
		code === 0x26CE || // E0.6   [1] (⛎)       Ophiuchus
		code === 0x26CF || // E0.7   [1] (⛏️)       pick
		code === 0x26D0 || // E0.0   [1] (⛐)       CAR SLIDING
		code === 0x26D1 || // E0.7   [1] (⛑️)       rescue worker’s helmet
		code === 0x26D2 || // E0.0   [1] (⛒)       CIRCLED CROSSING LANES
		code === 0x26D3 || // E0.7   [1] (⛓️)       chains
		code === 0x26D4 || // E0.6   [1] (⛔)       no entry
		( 0x26D5 <= code && code <= 0x26E8 ) || // E0.0  [20] (⛕..⛨)    ALTERNATE ONE-WAY LEFT WAY TRAFFIC..BLACK CROSS ON SHIELD
		code === 0x26E9 || // E0.7   [1] (⛩️)       shinto shrine
		code === 0x26EA || // E0.6   [1] (⛪)       church
		( 0x26EB <= code && code <= 0x26EF ) || // E0.0   [5] (⛫..⛯)    CASTLE..MAP SYMBOL FOR LIGHTHOUSE
		( 0x26F0 <= code && code <= 0x26F1 ) || // E0.7   [2] (⛰️..⛱️)    mountain..umbrella on ground
		( 0x26F2 <= code && code <= 0x26F3 ) || // E0.6   [2] (⛲..⛳)    fountain..flag in hole
		code === 0x26F4 || // E0.7   [1] (⛴️)       ferry
		code === 0x26F5 || // E0.6   [1] (⛵)       sailboat
		code === 0x26F6 || // E0.0   [1] (⛶)       SQUARE FOUR CORNERS
		( 0x26F7 <= code && code <= 0x26F9 ) || // E0.7   [3] (⛷️..⛹️)    skier..person bouncing ball
		code === 0x26FA || // E0.6   [1] (⛺)       tent
		( 0x26FB <= code && code <= 0x26FC ) || // E0.0   [2] (⛻..⛼)    JAPANESE BANK SYMBOL..HEADSTONE GRAVEYARD SYMBOL
		code === 0x26FD || // E0.6   [1] (⛽)       fuel pump
		( 0x26FE <= code && code <= 0x2701 ) || // E0.0   [4] (⛾..✁)    CUP ON BLACK SQUARE..UPPER BLADE SCISSORS
		code === 0x2702 || // E0.6   [1] (✂️)       scissors
		( 0x2703 <= code && code <= 0x2704 ) || // E0.0   [2] (✃..✄)    LOWER BLADE SCISSORS..WHITE SCISSORS
		code === 0x2705 || // E0.6   [1] (✅)       check mark button
		( 0x2708 <= code && code <= 0x270C ) || // E0.6   [5] (✈️..✌️)    airplane..victory hand
		code === 0x270D || // E0.7   [1] (✍️)       writing hand
		code === 0x270E || // E0.0   [1] (✎)       LOWER RIGHT PENCIL
		code === 0x270F || // E0.6   [1] (✏️)       pencil
		( 0x2710 <= code && code <= 0x2711 ) || // E0.0   [2] (✐..✑)    UPPER RIGHT PENCIL..WHITE NIB
		code === 0x2712 || // E0.6   [1] (✒️)       black nib
		code === 0x2714 || // E0.6   [1] (✔️)       check mark
		code === 0x2716 || // E0.6   [1] (✖️)       multiply
		code === 0x271D || // E0.7   [1] (✝️)       latin cross
		code === 0x2721 || // E0.7   [1] (✡️)       star of David
		code === 0x2728 || // E0.6   [1] (✨)       sparkles
		( 0x2733 <= code && code <= 0x2734 ) || // E0.6   [2] (✳️..✴️)    eight-spoked asterisk..eight-pointed star
		code === 0x2744 || // E0.6   [1] (❄️)       snowflake
		code === 0x2747 || // E0.6   [1] (❇️)       sparkle
		code === 0x274C || // E0.6   [1] (❌)       cross mark
		code === 0x274E || // E0.6   [1] (❎)       cross mark button
		( 0x2753 <= code && code <= 0x2755 ) || // E0.6   [3] (❓..❕)    question mark..white exclamation mark
		code === 0x2757 || // E0.6   [1] (❗)       exclamation mark
		code === 0x2763 || // E1.0   [1] (❣️)       heart exclamation
		code === 0x2764 || // E0.6   [1] (❤️)       red heart
		( 0x2765 <= code && code <= 0x2767 ) || // E0.0   [3] (❥..❧)    ROTATED HEAVY BLACK HEART BULLET..ROTATED FLORAL HEART BULLET
		( 0x2795 <= code && code <= 0x2797 ) || // E0.6   [3] (➕..➗)    plus..divide
		code === 0x27A1 || // E0.6   [1] (➡️)       right arrow
		code === 0x27B0 || // E0.6   [1] (➰)       curly loop
		code === 0x27BF || // E1.0   [1] (➿)       double curly loop
		( 0x2934 <= code && code <= 0x2935 ) || // E0.6   [2] (⤴️..⤵️)    right arrow curving up..right arrow curving down
		( 0x2B05 <= code && code <= 0x2B07 ) || // E0.6   [3] (⬅️..⬇️)    left arrow..down arrow
		( 0x2B1B <= code && code <= 0x2B1C ) || // E0.6   [2] (⬛..⬜)    black large square..white large square
		code === 0x2B50 || // E0.6   [1] (⭐)       star
		code === 0x2B55 || // E0.6   [1] (⭕)       hollow red circle
		code === 0x3030 || // E0.6   [1] (〰️)       wavy dash
		code === 0x303D || // E0.6   [1] (〽️)       part alternation mark
		code === 0x3297 || // E0.6   [1] (㊗️)       Japanese “congratulations” button
		code === 0x3299 || // E0.6   [1] (㊙️)       Japanese “secret” button
		( 0x1F000 <= code && code <= 0x1F003 ) || // E0.0   [4] (🀀..🀃)    MAHJONG TILE EAST WIND..MAHJONG TILE NORTH WIND
		code === 0x1F004 || // E0.6   [1] (🀄)       mahjong red dragon
		( 0x1F005 <= code && code <= 0x1F0CE ) || // E0.0 [202] (🀅..🃎)    MAHJONG TILE GREEN DRAGON..PLAYING CARD KING OF DIAMONDS
		code === 0x1F0CF || // E0.6   [1] (🃏)       joker
		( 0x1F0D0 <= code && code <= 0x1F0FF ) || // E0.0  [48] (🃐..🃿)    <reserved-1F0D0>..<reserved-1F0FF>
		( 0x1F10D <= code && code <= 0x1F10F ) || // E0.0   [3] (🄍..🄏)    CIRCLED ZERO WITH SLASH..CIRCLED DOLLAR SIGN WITH OVERLAID BACKSLASH
		code === 0x1F12F || // E0.0   [1] (🄯)       COPYLEFT SYMBOL
		( 0x1F16C <= code && code <= 0x1F16F ) || // E0.0   [4] (🅬..🅯)    RAISED MR SIGN..CIRCLED HUMAN FIGURE
		( 0x1F170 <= code && code <= 0x1F171 ) || // E0.6   [2] (🅰️..🅱️)    A button (blood type)..B button (blood type)
		( 0x1F17E <= code && code <= 0x1F17F ) || // E0.6   [2] (🅾️..🅿️)    O button (blood type)..P button
		code === 0x1F18E || // E0.6   [1] (🆎)       AB button (blood type)
		( 0x1F191 <= code && code <= 0x1F19A ) || // E0.6  [10] (🆑..🆚)    CL button..VS button
		( 0x1F1AD <= code && code <= 0x1F1E5 ) || // E0.0  [57] (🆭..🇥)    MASK WORK SYMBOL..<reserved-1F1E5>
		( 0x1F201 <= code && code <= 0x1F202 ) || // E0.6   [2] (🈁..🈂️)    Japanese “here” button..Japanese “service charge” button
		( 0x1F203 <= code && code <= 0x1F20F ) || // E0.0  [13] (🈃..🈏)    <reserved-1F203>..<reserved-1F20F>
		code === 0x1F21A || // E0.6   [1] (🈚)       Japanese “free of charge” button
		code === 0x1F22F || // E0.6   [1] (🈯)       Japanese “reserved” button
		( 0x1F232 <= code && code <= 0x1F23A ) || // E0.6   [9] (🈲..🈺)    Japanese “prohibited” button..Japanese “open for business” button
		( 0x1F23C <= code && code <= 0x1F23F ) || // E0.0   [4] (🈼..🈿)    <reserved-1F23C>..<reserved-1F23F>
		( 0x1F249 <= code && code <= 0x1F24F ) || // E0.0   [7] (🉉..🉏)    <reserved-1F249>..<reserved-1F24F>
		( 0x1F250 <= code && code <= 0x1F251 ) || // E0.6   [2] (🉐..🉑)    Japanese “bargain” button..Japanese “acceptable” button
		( 0x1F252 <= code && code <= 0x1F2FF ) || // E0.0 [174] (🉒..🋿)    <reserved-1F252>..<reserved-1F2FF>
		( 0x1F300 <= code && code <= 0x1F30C ) || // E0.6  [13] (🌀..🌌)    cyclone..milky way
		( 0x1F30D <= code && code <= 0x1F30E ) || // E0.7   [2] (🌍..🌎)    globe showing Europe-Africa..globe showing Americas
		code === 0x1F30F || // E0.6   [1] (🌏)       globe showing Asia-Australia
		code === 0x1F310 || // E1.0   [1] (🌐)       globe with meridians
		code === 0x1F311 || // E0.6   [1] (🌑)       new moon
		code === 0x1F312 || // E1.0   [1] (🌒)       waxing crescent moon
		( 0x1F313 <= code && code <= 0x1F315 ) || // E0.6   [3] (🌓..🌕)    first quarter moon..full moon
		( 0x1F316 <= code && code <= 0x1F318 ) || // E1.0   [3] (🌖..🌘)    waning gibbous moon..waning crescent moon
		code === 0x1F319 || // E0.6   [1] (🌙)       crescent moon
		code === 0x1F31A || // E1.0   [1] (🌚)       new moon face
		code === 0x1F31B || // E0.6   [1] (🌛)       first quarter moon face
		code === 0x1F31C || // E0.7   [1] (🌜)       last quarter moon face
		( 0x1F31D <= code && code <= 0x1F31E ) || // E1.0   [2] (🌝..🌞)    full moon face..sun with face
		( 0x1F31F <= code && code <= 0x1F320 ) || // E0.6   [2] (🌟..🌠)    glowing star..shooting star
		code === 0x1F321 || // E0.7   [1] (🌡️)       thermometer
		( 0x1F322 <= code && code <= 0x1F323 ) || // E0.0   [2] (🌢..🌣)    BLACK DROPLET..WHITE SUN
		( 0x1F324 <= code && code <= 0x1F32C ) || // E0.7   [9] (🌤️..🌬️)    sun behind small cloud..wind face
		( 0x1F32D <= code && code <= 0x1F32F ) || // E1.0   [3] (🌭..🌯)    hot dog..burrito
		( 0x1F330 <= code && code <= 0x1F331 ) || // E0.6   [2] (🌰..🌱)    chestnut..seedling
		( 0x1F332 <= code && code <= 0x1F333 ) || // E1.0   [2] (🌲..🌳)    evergreen tree..deciduous tree
		( 0x1F334 <= code && code <= 0x1F335 ) || // E0.6   [2] (🌴..🌵)    palm tree..cactus
		code === 0x1F336 || // E0.7   [1] (🌶️)       hot pepper
		( 0x1F337 <= code && code <= 0x1F34A ) || // E0.6  [20] (🌷..🍊)    tulip..tangerine
		code === 0x1F34B || // E1.0   [1] (🍋)       lemon
		( 0x1F34C <= code && code <= 0x1F34F ) || // E0.6   [4] (🍌..🍏)    banana..green apple
		code === 0x1F350 || // E1.0   [1] (🍐)       pear
		( 0x1F351 <= code && code <= 0x1F37B ) || // E0.6  [43] (🍑..🍻)    peach..clinking beer mugs
		code === 0x1F37C || // E1.0   [1] (🍼)       baby bottle
		code === 0x1F37D || // E0.7   [1] (🍽️)       fork and knife with plate
		( 0x1F37E <= code && code <= 0x1F37F ) || // E1.0   [2] (🍾..🍿)    bottle with popping cork..popcorn
		( 0x1F380 <= code && code <= 0x1F393 ) || // E0.6  [20] (🎀..🎓)    ribbon..graduation cap
		( 0x1F394 <= code && code <= 0x1F395 ) || // E0.0   [2] (🎔..🎕)    HEART WITH TIP ON THE LEFT..BOUQUET OF FLOWERS
		( 0x1F396 <= code && code <= 0x1F397 ) || // E0.7   [2] (🎖️..🎗️)    military medal..reminder ribbon
		code === 0x1F398 || // E0.0   [1] (🎘)       MUSICAL KEYBOARD WITH JACKS
		( 0x1F399 <= code && code <= 0x1F39B ) || // E0.7   [3] (🎙️..🎛️)    studio microphone..control knobs
		( 0x1F39C <= code && code <= 0x1F39D ) || // E0.0   [2] (🎜..🎝)    BEAMED ASCENDING MUSICAL NOTES..BEAMED DESCENDING MUSICAL NOTES
		( 0x1F39E <= code && code <= 0x1F39F ) || // E0.7   [2] (🎞️..🎟️)    film frames..admission tickets
		( 0x1F3A0 <= code && code <= 0x1F3C4 ) || // E0.6  [37] (🎠..🏄)    carousel horse..person surfing
		code === 0x1F3C5 || // E1.0   [1] (🏅)       sports medal
		code === 0x1F3C6 || // E0.6   [1] (🏆)       trophy
		code === 0x1F3C7 || // E1.0   [1] (🏇)       horse racing
		code === 0x1F3C8 || // E0.6   [1] (🏈)       american football
		code === 0x1F3C9 || // E1.0   [1] (🏉)       rugby football
		code === 0x1F3CA || // E0.6   [1] (🏊)       person swimming
		( 0x1F3CB <= code && code <= 0x1F3CE ) || // E0.7   [4] (🏋️..🏎️)    person lifting weights..racing car
		( 0x1F3CF <= code && code <= 0x1F3D3 ) || // E1.0   [5] (🏏..🏓)    cricket game..ping pong
		( 0x1F3D4 <= code && code <= 0x1F3DF ) || // E0.7  [12] (🏔️..🏟️)    snow-capped mountain..stadium
		( 0x1F3E0 <= code && code <= 0x1F3E3 ) || // E0.6   [4] (🏠..🏣)    house..Japanese post office
		code === 0x1F3E4 || // E1.0   [1] (🏤)       post office
		( 0x1F3E5 <= code && code <= 0x1F3F0 ) || // E0.6  [12] (🏥..🏰)    hospital..castle
		( 0x1F3F1 <= code && code <= 0x1F3F2 ) || // E0.0   [2] (🏱..🏲)    WHITE PENNANT..BLACK PENNANT
		code === 0x1F3F3 || // E0.7   [1] (🏳️)       white flag
		code === 0x1F3F4 || // E1.0   [1] (🏴)       black flag
		code === 0x1F3F5 || // E0.7   [1] (🏵️)       rosette
		code === 0x1F3F6 || // E0.0   [1] (🏶)       BLACK ROSETTE
		code === 0x1F3F7 || // E0.7   [1] (🏷️)       label
		( 0x1F3F8 <= code && code <= 0x1F3FA ) || // E1.0   [3] (🏸..🏺)    badminton..amphora
		( 0x1F400 <= code && code <= 0x1F407 ) || // E1.0   [8] (🐀..🐇)    rat..rabbit
		code === 0x1F408 || // E0.7   [1] (🐈)       cat
		( 0x1F409 <= code && code <= 0x1F40B ) || // E1.0   [3] (🐉..🐋)    dragon..whale
		( 0x1F40C <= code && code <= 0x1F40E ) || // E0.6   [3] (🐌..🐎)    snail..horse
		( 0x1F40F <= code && code <= 0x1F410 ) || // E1.0   [2] (🐏..🐐)    ram..goat
		( 0x1F411 <= code && code <= 0x1F412 ) || // E0.6   [2] (🐑..🐒)    ewe..monkey
		code === 0x1F413 || // E1.0   [1] (🐓)       rooster
		code === 0x1F414 || // E0.6   [1] (🐔)       chicken
		code === 0x1F415 || // E0.7   [1] (🐕)       dog
		code === 0x1F416 || // E1.0   [1] (🐖)       pig
		( 0x1F417 <= code && code <= 0x1F429 ) || // E0.6  [19] (🐗..🐩)    boar..poodle
		code === 0x1F42A || // E1.0   [1] (🐪)       camel
		( 0x1F42B <= code && code <= 0x1F43E ) || // E0.6  [20] (🐫..🐾)    two-hump camel..paw prints
		code === 0x1F43F || // E0.7   [1] (🐿️)       chipmunk
		code === 0x1F440 || // E0.6   [1] (👀)       eyes
		code === 0x1F441 || // E0.7   [1] (👁️)       eye
		( 0x1F442 <= code && code <= 0x1F464 ) || // E0.6  [35] (👂..👤)    ear..bust in silhouette
		code === 0x1F465 || // E1.0   [1] (👥)       busts in silhouette
		( 0x1F466 <= code && code <= 0x1F46B ) || // E0.6   [6] (👦..👫)    boy..woman and man holding hands
		( 0x1F46C <= code && code <= 0x1F46D ) || // E1.0   [2] (👬..👭)    men holding hands..women holding hands
		( 0x1F46E <= code && code <= 0x1F4AC ) || // E0.6  [63] (👮..💬)    police officer..speech balloon
		code === 0x1F4AD || // E1.0   [1] (💭)       thought balloon
		( 0x1F4AE <= code && code <= 0x1F4B5 ) || // E0.6   [8] (💮..💵)    white flower..dollar banknote
		( 0x1F4B6 <= code && code <= 0x1F4B7 ) || // E1.0   [2] (💶..💷)    euro banknote..pound banknote
		( 0x1F4B8 <= code && code <= 0x1F4EB ) || // E0.6  [52] (💸..📫)    money with wings..closed mailbox with raised flag
		( 0x1F4EC <= code && code <= 0x1F4ED ) || // E0.7   [2] (📬..📭)    open mailbox with raised flag..open mailbox with lowered flag
		code === 0x1F4EE || // E0.6   [1] (📮)       postbox
		code === 0x1F4EF || // E1.0   [1] (📯)       postal horn
		( 0x1F4F0 <= code && code <= 0x1F4F4 ) || // E0.6   [5] (📰..📴)    newspaper..mobile phone off
		code === 0x1F4F5 || // E1.0   [1] (📵)       no mobile phones
		( 0x1F4F6 <= code && code <= 0x1F4F7 ) || // E0.6   [2] (📶..📷)    antenna bars..camera
		code === 0x1F4F8 || // E1.0   [1] (📸)       camera with flash
		( 0x1F4F9 <= code && code <= 0x1F4FC ) || // E0.6   [4] (📹..📼)    video camera..videocassette
		code === 0x1F4FD || // E0.7   [1] (📽️)       film projector
		code === 0x1F4FE || // E0.0   [1] (📾)       PORTABLE STEREO
		( 0x1F4FF <= code && code <= 0x1F502 ) || // E1.0   [4] (📿..🔂)    prayer beads..repeat single button
		code === 0x1F503 || // E0.6   [1] (🔃)       clockwise vertical arrows
		( 0x1F504 <= code && code <= 0x1F507 ) || // E1.0   [4] (🔄..🔇)    counterclockwise arrows button..muted speaker
		code === 0x1F508 || // E0.7   [1] (🔈)       speaker low volume
		code === 0x1F509 || // E1.0   [1] (🔉)       speaker medium volume
		( 0x1F50A <= code && code <= 0x1F514 ) || // E0.6  [11] (🔊..🔔)    speaker high volume..bell
		code === 0x1F515 || // E1.0   [1] (🔕)       bell with slash
		( 0x1F516 <= code && code <= 0x1F52B ) || // E0.6  [22] (🔖..🔫)    bookmark..pistol
		( 0x1F52C <= code && code <= 0x1F52D ) || // E1.0   [2] (🔬..🔭)    microscope..telescope
		( 0x1F52E <= code && code <= 0x1F53D ) || // E0.6  [16] (🔮..🔽)    crystal ball..downwards button
		( 0x1F546 <= code && code <= 0x1F548 ) || // E0.0   [3] (🕆..🕈)    WHITE LATIN CROSS..CELTIC CROSS
		( 0x1F549 <= code && code <= 0x1F54A ) || // E0.7   [2] (🕉️..🕊️)    om..dove
		( 0x1F54B <= code && code <= 0x1F54E ) || // E1.0   [4] (🕋..🕎)    kaaba..menorah
		code === 0x1F54F || // E0.0   [1] (🕏)       BOWL OF HYGIEIA
		( 0x1F550 <= code && code <= 0x1F55B ) || // E0.6  [12] (🕐..🕛)    one o’clock..twelve o’clock
		( 0x1F55C <= code && code <= 0x1F567 ) || // E0.7  [12] (🕜..🕧)    one-thirty..twelve-thirty
		( 0x1F568 <= code && code <= 0x1F56E ) || // E0.0   [7] (🕨..🕮)    RIGHT SPEAKER..BOOK
		( 0x1F56F <= code && code <= 0x1F570 ) || // E0.7   [2] (🕯️..🕰️)    candle..mantelpiece clock
		( 0x1F571 <= code && code <= 0x1F572 ) || // E0.0   [2] (🕱..🕲)    BLACK SKULL AND CROSSBONES..NO PIRACY
		( 0x1F573 <= code && code <= 0x1F579 ) || // E0.7   [7] (🕳️..🕹️)    hole..joystick
		code === 0x1F57A || // E3.0   [1] (🕺)       man dancing
		( 0x1F57B <= code && code <= 0x1F586 ) || // E0.0  [12] (🕻..🖆)    LEFT HAND TELEPHONE RECEIVER..PEN OVER STAMPED ENVELOPE
		code === 0x1F587 || // E0.7   [1] (🖇️)       linked paperclips
		( 0x1F588 <= code && code <= 0x1F589 ) || // E0.0   [2] (🖈..🖉)    BLACK PUSHPIN..LOWER LEFT PENCIL
		( 0x1F58A <= code && code <= 0x1F58D ) || // E0.7   [4] (🖊️..🖍️)    pen..crayon
		( 0x1F58E <= code && code <= 0x1F58F ) || // E0.0   [2] (🖎..🖏)    LEFT WRITING HAND..TURNED OK HAND SIGN
		code === 0x1F590 || // E0.7   [1] (🖐️)       hand with fingers splayed
		( 0x1F591 <= code && code <= 0x1F594 ) || // E0.0   [4] (🖑..🖔)    REVERSED RAISED HAND WITH FINGERS SPLAYED..REVERSED VICTORY HAND
		( 0x1F595 <= code && code <= 0x1F596 ) || // E1.0   [2] (🖕..🖖)    middle finger..vulcan salute
		( 0x1F597 <= code && code <= 0x1F5A3 ) || // E0.0  [13] (🖗..🖣)    WHITE DOWN POINTING LEFT HAND INDEX..BLACK DOWN POINTING BACKHAND INDEX
		code === 0x1F5A4 || // E3.0   [1] (🖤)       black heart
		code === 0x1F5A5 || // E0.7   [1] (🖥️)       desktop computer
		( 0x1F5A6 <= code && code <= 0x1F5A7 ) || // E0.0   [2] (🖦..🖧)    KEYBOARD AND MOUSE..THREE NETWORKED COMPUTERS
		code === 0x1F5A8 || // E0.7   [1] (🖨️)       printer
		( 0x1F5A9 <= code && code <= 0x1F5B0 ) || // E0.0   [8] (🖩..🖰)    POCKET CALCULATOR..TWO BUTTON MOUSE
		( 0x1F5B1 <= code && code <= 0x1F5B2 ) || // E0.7   [2] (🖱️..🖲️)    computer mouse..trackball
		( 0x1F5B3 <= code && code <= 0x1F5BB ) || // E0.0   [9] (🖳..🖻)    OLD PERSONAL COMPUTER..DOCUMENT WITH PICTURE
		code === 0x1F5BC || // E0.7   [1] (🖼️)       framed picture
		( 0x1F5BD <= code && code <= 0x1F5C1 ) || // E0.0   [5] (🖽..🗁)    FRAME WITH TILES..OPEN FOLDER
		( 0x1F5C2 <= code && code <= 0x1F5C4 ) || // E0.7   [3] (🗂️..🗄️)    card index dividers..file cabinet
		( 0x1F5C5 <= code && code <= 0x1F5D0 ) || // E0.0  [12] (🗅..🗐)    EMPTY NOTE..PAGES
		( 0x1F5D1 <= code && code <= 0x1F5D3 ) || // E0.7   [3] (🗑️..🗓️)    wastebasket..spiral calendar
		( 0x1F5D4 <= code && code <= 0x1F5DB ) || // E0.0   [8] (🗔..🗛)    DESKTOP WINDOW..DECREASE FONT SIZE SYMBOL
		( 0x1F5DC <= code && code <= 0x1F5DE ) || // E0.7   [3] (🗜️..🗞️)    clamp..rolled-up newspaper
		( 0x1F5DF <= code && code <= 0x1F5E0 ) || // E0.0   [2] (🗟..🗠)    PAGE WITH CIRCLED TEXT..STOCK CHART
		code === 0x1F5E1 || // E0.7   [1] (🗡️)       dagger
		code === 0x1F5E2 || // E0.0   [1] (🗢)       LIPS
		code === 0x1F5E3 || // E0.7   [1] (🗣️)       speaking head
		( 0x1F5E4 <= code && code <= 0x1F5E7 ) || // E0.0   [4] (🗤..🗧)    THREE RAYS ABOVE..THREE RAYS RIGHT
		code === 0x1F5E8 || // E2.0   [1] (🗨️)       left speech bubble
		( 0x1F5E9 <= code && code <= 0x1F5EE ) || // E0.0   [6] (🗩..🗮)    RIGHT SPEECH BUBBLE..LEFT ANGER BUBBLE
		code === 0x1F5EF || // E0.7   [1] (🗯️)       right anger bubble
		( 0x1F5F0 <= code && code <= 0x1F5F2 ) || // E0.0   [3] (🗰..🗲)    MOOD BUBBLE..LIGHTNING MOOD
		code === 0x1F5F3 || // E0.7   [1] (🗳️)       ballot box with ballot
		( 0x1F5F4 <= code && code <= 0x1F5F9 ) || // E0.0   [6] (🗴..🗹)    BALLOT SCRIPT X..BALLOT BOX WITH BOLD CHECK
		code === 0x1F5FA || // E0.7   [1] (🗺️)       world map
		( 0x1F5FB <= code && code <= 0x1F5FF ) || // E0.6   [5] (🗻..🗿)    mount fuji..moai
		code === 0x1F600 || // E1.0   [1] (😀)       grinning face
		( 0x1F601 <= code && code <= 0x1F606 ) || // E0.6   [6] (😁..😆)    beaming face with smiling eyes..grinning squinting face
		( 0x1F607 <= code && code <= 0x1F608 ) || // E1.0   [2] (😇..😈)    smiling face with halo..smiling face with horns
		( 0x1F609 <= code && code <= 0x1F60D ) || // E0.6   [5] (😉..😍)    winking face..smiling face with heart-eyes
		code === 0x1F60E || // E1.0   [1] (😎)       smiling face with sunglasses
		code === 0x1F60F || // E0.6   [1] (😏)       smirking face
		code === 0x1F610 || // E0.7   [1] (😐)       neutral face
		code === 0x1F611 || // E1.0   [1] (😑)       expressionless face
		( 0x1F612 <= code && code <= 0x1F614 ) || // E0.6   [3] (😒..😔)    unamused face..pensive face
		code === 0x1F615 || // E1.0   [1] (😕)       confused face
		code === 0x1F616 || // E0.6   [1] (😖)       confounded face
		code === 0x1F617 || // E1.0   [1] (😗)       kissing face
		code === 0x1F618 || // E0.6   [1] (😘)       face blowing a kiss
		code === 0x1F619 || // E1.0   [1] (😙)       kissing face with smiling eyes
		code === 0x1F61A || // E0.6   [1] (😚)       kissing face with closed eyes
		code === 0x1F61B || // E1.0   [1] (😛)       face with tongue
		( 0x1F61C <= code && code <= 0x1F61E ) || // E0.6   [3] (😜..😞)    winking face with tongue..disappointed face
		code === 0x1F61F || // E1.0   [1] (😟)       worried face
		( 0x1F620 <= code && code <= 0x1F625 ) || // E0.6   [6] (😠..😥)    angry face..sad but relieved face
		( 0x1F626 <= code && code <= 0x1F627 ) || // E1.0   [2] (😦..😧)    frowning face with open mouth..anguished face
		( 0x1F628 <= code && code <= 0x1F62B ) || // E0.6   [4] (😨..😫)    fearful face..tired face
		code === 0x1F62C || // E1.0   [1] (😬)       grimacing face
		code === 0x1F62D || // E0.6   [1] (😭)       loudly crying face
		( 0x1F62E <= code && code <= 0x1F62F ) || // E1.0   [2] (😮..😯)    face with open mouth..hushed face
		( 0x1F630 <= code && code <= 0x1F633 ) || // E0.6   [4] (😰..😳)    anxious face with sweat..flushed face
		code === 0x1F634 || // E1.0   [1] (😴)       sleeping face
		code === 0x1F635 || // E0.6   [1] (😵)       dizzy face
		code === 0x1F636 || // E1.0   [1] (😶)       face without mouth
		( 0x1F637 <= code && code <= 0x1F640 ) || // E0.6  [10] (😷..🙀)    face with medical mask..weary cat
		( 0x1F641 <= code && code <= 0x1F644 ) || // E1.0   [4] (🙁..🙄)    slightly frowning face..face with rolling eyes
		( 0x1F645 <= code && code <= 0x1F64F ) || // E0.6  [11] (🙅..🙏)    person gesturing NO..folded hands
		code === 0x1F680 || // E0.6   [1] (🚀)       rocket
		( 0x1F681 <= code && code <= 0x1F682 ) || // E1.0   [2] (🚁..🚂)    helicopter..locomotive
		( 0x1F683 <= code && code <= 0x1F685 ) || // E0.6   [3] (🚃..🚅)    railway car..bullet train
		code === 0x1F686 || // E1.0   [1] (🚆)       train
		code === 0x1F687 || // E0.6   [1] (🚇)       metro
		code === 0x1F688 || // E1.0   [1] (🚈)       light rail
		code === 0x1F689 || // E0.6   [1] (🚉)       station
		( 0x1F68A <= code && code <= 0x1F68B ) || // E1.0   [2] (🚊..🚋)    tram..tram car
		code === 0x1F68C || // E0.6   [1] (🚌)       bus
		code === 0x1F68D || // E0.7   [1] (🚍)       oncoming bus
		code === 0x1F68E || // E1.0   [1] (🚎)       trolleybus
		code === 0x1F68F || // E0.6   [1] (🚏)       bus stop
		code === 0x1F690 || // E1.0   [1] (🚐)       minibus
		( 0x1F691 <= code && code <= 0x1F693 ) || // E0.6   [3] (🚑..🚓)    ambulance..police car
		code === 0x1F694 || // E0.7   [1] (🚔)       oncoming police car
		code === 0x1F695 || // E0.6   [1] (🚕)       taxi
		code === 0x1F696 || // E1.0   [1] (🚖)       oncoming taxi
		code === 0x1F697 || // E0.6   [1] (🚗)       automobile
		code === 0x1F698 || // E0.7   [1] (🚘)       oncoming automobile
		( 0x1F699 <= code && code <= 0x1F69A ) || // E0.6   [2] (🚙..🚚)    sport utility vehicle..delivery truck
		( 0x1F69B <= code && code <= 0x1F6A1 ) || // E1.0   [7] (🚛..🚡)    articulated lorry..aerial tramway
		code === 0x1F6A2 || // E0.6   [1] (🚢)       ship
		code === 0x1F6A3 || // E1.0   [1] (🚣)       person rowing boat
		( 0x1F6A4 <= code && code <= 0x1F6A5 ) || // E0.6   [2] (🚤..🚥)    speedboat..horizontal traffic light
		code === 0x1F6A6 || // E1.0   [1] (🚦)       vertical traffic light
		( 0x1F6A7 <= code && code <= 0x1F6AD ) || // E0.6   [7] (🚧..🚭)    construction..no smoking
		( 0x1F6AE <= code && code <= 0x1F6B1 ) || // E1.0   [4] (🚮..🚱)    litter in bin sign..non-potable water
		code === 0x1F6B2 || // E0.6   [1] (🚲)       bicycle
		( 0x1F6B3 <= code && code <= 0x1F6B5 ) || // E1.0   [3] (🚳..🚵)    no bicycles..person mountain biking
		code === 0x1F6B6 || // E0.6   [1] (🚶)       person walking
		( 0x1F6B7 <= code && code <= 0x1F6B8 ) || // E1.0   [2] (🚷..🚸)    no pedestrians..children crossing
		( 0x1F6B9 <= code && code <= 0x1F6BE ) || // E0.6   [6] (🚹..🚾)    men’s room..water closet
		code === 0x1F6BF || // E1.0   [1] (🚿)       shower
		code === 0x1F6C0 || // E0.6   [1] (🛀)       person taking bath
		( 0x1F6C1 <= code && code <= 0x1F6C5 ) || // E1.0   [5] (🛁..🛅)    bathtub..left luggage
		( 0x1F6C6 <= code && code <= 0x1F6CA ) || // E0.0   [5] (🛆..🛊)    TRIANGLE WITH ROUNDED CORNERS..GIRLS SYMBOL
		code === 0x1F6CB || // E0.7   [1] (🛋️)       couch and lamp
		code === 0x1F6CC || // E1.0   [1] (🛌)       person in bed
		( 0x1F6CD <= code && code <= 0x1F6CF ) || // E0.7   [3] (🛍️..🛏️)    shopping bags..bed
		code === 0x1F6D0 || // E1.0   [1] (🛐)       place of worship
		( 0x1F6D1 <= code && code <= 0x1F6D2 ) || // E3.0   [2] (🛑..🛒)    stop sign..shopping cart
		( 0x1F6D3 <= code && code <= 0x1F6D4 ) || // E0.0   [2] (🛓..🛔)    STUPA..PAGODA
		code === 0x1F6D5 || // E12.0  [1] (🛕)       hindu temple
		( 0x1F6D6 <= code && code <= 0x1F6D7 ) || // E13.0  [2] (🛖..🛗)    hut..elevator
		( 0x1F6D8 <= code && code <= 0x1F6DF ) || // E0.0   [8] (🛘..🛟)    <reserved-1F6D8>..<reserved-1F6DF>
		( 0x1F6E0 <= code && code <= 0x1F6E5 ) || // E0.7   [6] (🛠️..🛥️)    hammer and wrench..motor boat
		( 0x1F6E6 <= code && code <= 0x1F6E8 ) || // E0.0   [3] (🛦..🛨)    UP-POINTING MILITARY AIRPLANE..UP-POINTING SMALL AIRPLANE
		code === 0x1F6E9 || // E0.7   [1] (🛩️)       small airplane
		code === 0x1F6EA || // E0.0   [1] (🛪)       NORTHEAST-POINTING AIRPLANE
		( 0x1F6EB <= code && code <= 0x1F6EC ) || // E1.0   [2] (🛫..🛬)    airplane departure..airplane arrival
		( 0x1F6ED <= code && code <= 0x1F6EF ) || // E0.0   [3] (🛭..🛯)    <reserved-1F6ED>..<reserved-1F6EF>
		code === 0x1F6F0 || // E0.7   [1] (🛰️)       satellite
		( 0x1F6F1 <= code && code <= 0x1F6F2 ) || // E0.0   [2] (🛱..🛲)    ONCOMING FIRE ENGINE..DIESEL LOCOMOTIVE
		code === 0x1F6F3 || // E0.7   [1] (🛳️)       passenger ship
		( 0x1F6F4 <= code && code <= 0x1F6F6 ) || // E3.0   [3] (🛴..🛶)    kick scooter..canoe
		( 0x1F6F7 <= code && code <= 0x1F6F8 ) || // E5.0   [2] (🛷..🛸)    sled..flying saucer
		code === 0x1F6F9 || // E11.0  [1] (🛹)       skateboard
		code === 0x1F6FA || // E12.0  [1] (🛺)       auto rickshaw
		( 0x1F6FB <= code && code <= 0x1F6FC ) || // E13.0  [2] (🛻..🛼)    pickup truck..roller skate
		( 0x1F6FD <= code && code <= 0x1F6FF ) || // E0.0   [3] (🛽..🛿)    <reserved-1F6FD>..<reserved-1F6FF>
		( 0x1F774 <= code && code <= 0x1F77F ) || // E0.0  [12] (🝴..🝿)    <reserved-1F774>..<reserved-1F77F>
		( 0x1F7D5 <= code && code <= 0x1F7DF ) || // E0.0  [11] (🟕..🟟)    CIRCLED TRIANGLE..<reserved-1F7DF>
		( 0x1F7E0 <= code && code <= 0x1F7EB ) || // E12.0 [12] (🟠..🟫)    orange circle..brown square
		( 0x1F7EC <= code && code <= 0x1F7FF ) || // E0.0  [20] (🟬..🟿)    <reserved-1F7EC>..<reserved-1F7FF>
		( 0x1F80C <= code && code <= 0x1F80F ) || // E0.0   [4] (🠌..🠏)    <reserved-1F80C>..<reserved-1F80F>
		( 0x1F848 <= code && code <= 0x1F84F ) || // E0.0   [8] (🡈..🡏)    <reserved-1F848>..<reserved-1F84F>
		( 0x1F85A <= code && code <= 0x1F85F ) || // E0.0   [6] (🡚..🡟)    <reserved-1F85A>..<reserved-1F85F>
		( 0x1F888 <= code && code <= 0x1F88F ) || // E0.0   [8] (🢈..🢏)    <reserved-1F888>..<reserved-1F88F>
		( 0x1F8AE <= code && code <= 0x1F8FF ) || // E0.0  [82] (🢮..🣿)    <reserved-1F8AE>..<reserved-1F8FF>
		code === 0x1F90C || // E13.0  [1] (🤌)       pinched fingers
		( 0x1F90D <= code && code <= 0x1F90F ) || // E12.0  [3] (🤍..🤏)    white heart..pinching hand
		( 0x1F910 <= code && code <= 0x1F918 ) || // E1.0   [9] (🤐..🤘)    zipper-mouth face..sign of the horns
		( 0x1F919 <= code && code <= 0x1F91E ) || // E3.0   [6] (🤙..🤞)    call me hand..crossed fingers
		code === 0x1F91F || // E5.0   [1] (🤟)       love-you gesture
		( 0x1F920 <= code && code <= 0x1F927 ) || // E3.0   [8] (🤠..🤧)    cowboy hat face..sneezing face
		( 0x1F928 <= code && code <= 0x1F92F ) || // E5.0   [8] (🤨..🤯)    face with raised eyebrow..exploding head
		code === 0x1F930 || // E3.0   [1] (🤰)       pregnant woman
		( 0x1F931 <= code && code <= 0x1F932 ) || // E5.0   [2] (🤱..🤲)    breast-feeding..palms up together
		( 0x1F933 <= code && code <= 0x1F93A ) || // E3.0   [8] (🤳..🤺)    selfie..person fencing
		( 0x1F93C <= code && code <= 0x1F93E ) || // E3.0   [3] (🤼..🤾)    people wrestling..person playing handball
		code === 0x1F93F || // E12.0  [1] (🤿)       diving mask
		( 0x1F940 <= code && code <= 0x1F945 ) || // E3.0   [6] (🥀..🥅)    wilted flower..goal net
		( 0x1F947 <= code && code <= 0x1F94B ) || // E3.0   [5] (🥇..🥋)    1st place medal..martial arts uniform
		code === 0x1F94C || // E5.0   [1] (🥌)       curling stone
		( 0x1F94D <= code && code <= 0x1F94F ) || // E11.0  [3] (🥍..🥏)    lacrosse..flying disc
		( 0x1F950 <= code && code <= 0x1F95E ) || // E3.0  [15] (🥐..🥞)    croissant..pancakes
		( 0x1F95F <= code && code <= 0x1F96B ) || // E5.0  [13] (🥟..🥫)    dumpling..canned food
		( 0x1F96C <= code && code <= 0x1F970 ) || // E11.0  [5] (🥬..🥰)    leafy green..smiling face with hearts
		code === 0x1F971 || // E12.0  [1] (🥱)       yawning face
		code === 0x1F972 || // E13.0  [1] (🥲)       smiling face with tear
		( 0x1F973 <= code && code <= 0x1F976 ) || // E11.0  [4] (🥳..🥶)    partying face..cold face
		( 0x1F977 <= code && code <= 0x1F978 ) || // E13.0  [2] (🥷..🥸)    ninja..disguised face
		code === 0x1F979 || // E0.0   [1] (🥹)       <reserved-1F979>
		code === 0x1F97A || // E11.0  [1] (🥺)       pleading face
		code === 0x1F97B || // E12.0  [1] (🥻)       sari
		( 0x1F97C <= code && code <= 0x1F97F ) || // E11.0  [4] (🥼..🥿)    lab coat..flat shoe
		( 0x1F980 <= code && code <= 0x1F984 ) || // E1.0   [5] (🦀..🦄)    crab..unicorn
		( 0x1F985 <= code && code <= 0x1F991 ) || // E3.0  [13] (🦅..🦑)    eagle..squid
		( 0x1F992 <= code && code <= 0x1F997 ) || // E5.0   [6] (🦒..🦗)    giraffe..cricket
		( 0x1F998 <= code && code <= 0x1F9A2 ) || // E11.0 [11] (🦘..🦢)    kangaroo..swan
		( 0x1F9A3 <= code && code <= 0x1F9A4 ) || // E13.0  [2] (🦣..🦤)    mammoth..dodo
		( 0x1F9A5 <= code && code <= 0x1F9AA ) || // E12.0  [6] (🦥..🦪)    sloth..oyster
		( 0x1F9AB <= code && code <= 0x1F9AD ) || // E13.0  [3] (🦫..🦭)    beaver..seal
		( 0x1F9AE <= code && code <= 0x1F9AF ) || // E12.0  [2] (🦮..🦯)    guide dog..white cane
		( 0x1F9B0 <= code && code <= 0x1F9B9 ) || // E11.0 [10] (🦰..🦹)    red hair..supervillain
		( 0x1F9BA <= code && code <= 0x1F9BF ) || // E12.0  [6] (🦺..🦿)    safety vest..mechanical leg
		code === 0x1F9C0 || // E1.0   [1] (🧀)       cheese wedge
		( 0x1F9C1 <= code && code <= 0x1F9C2 ) || // E11.0  [2] (🧁..🧂)    cupcake..salt
		( 0x1F9C3 <= code && code <= 0x1F9CA ) || // E12.0  [8] (🧃..🧊)    beverage box..ice
		code === 0x1F9CB || // E13.0  [1] (🧋)       bubble tea
		code === 0x1F9CC || // E0.0   [1] (🧌)       <reserved-1F9CC>
		( 0x1F9CD <= code && code <= 0x1F9CF ) || // E12.0  [3] (🧍..🧏)    person standing..deaf person
		( 0x1F9D0 <= code && code <= 0x1F9E6 ) || // E5.0  [23] (🧐..🧦)    face with monocle..socks
		( 0x1F9E7 <= code && code <= 0x1F9FF ) || // E11.0 [25] (🧧..🧿)    red envelope..nazar amulet
		( 0x1FA00 <= code && code <= 0x1FA6F ) || // E0.0 [112] (🨀..🩯)    NEUTRAL CHESS KING..<reserved-1FA6F>
		( 0x1FA70 <= code && code <= 0x1FA73 ) || // E12.0  [4] (🩰..🩳)    ballet shoes..shorts
		code === 0x1FA74 || // E13.0  [1] (🩴)       thong sandal
		( 0x1FA75 <= code && code <= 0x1FA77 ) || // E0.0   [3] (🩵..🩷)    <reserved-1FA75>..<reserved-1FA77>
		( 0x1FA78 <= code && code <= 0x1FA7A ) || // E12.0  [3] (🩸..🩺)    drop of blood..stethoscope
		( 0x1FA7B <= code && code <= 0x1FA7F ) || // E0.0   [5] (🩻..🩿)    <reserved-1FA7B>..<reserved-1FA7F>
		( 0x1FA80 <= code && code <= 0x1FA82 ) || // E12.0  [3] (🪀..🪂)    yo-yo..parachute
		( 0x1FA83 <= code && code <= 0x1FA86 ) || // E13.0  [4] (🪃..🪆)    boomerang..nesting dolls
		( 0x1FA87 <= code && code <= 0x1FA8F ) || // E0.0   [9] (🪇..🪏)    <reserved-1FA87>..<reserved-1FA8F>
		( 0x1FA90 <= code && code <= 0x1FA95 ) || // E12.0  [6] (🪐..🪕)    ringed planet..banjo
		( 0x1FA96 <= code && code <= 0x1FAA8 ) || // E13.0 [19] (🪖..🪨)    military helmet..rock
		( 0x1FAA9 <= code && code <= 0x1FAAF ) || // E0.0   [7] (🪩..🪯)    <reserved-1FAA9>..<reserved-1FAAF>
		( 0x1FAB0 <= code && code <= 0x1FAB6 ) || // E13.0  [7] (🪰..🪶)    fly..feather
		( 0x1FAB7 <= code && code <= 0x1FABF ) || // E0.0   [9] (🪷..🪿)    <reserved-1FAB7>..<reserved-1FABF>
		( 0x1FAC0 <= code && code <= 0x1FAC2 ) || // E13.0  [3] (🫀..🫂)    anatomical heart..people hugging
		( 0x1FAC3 <= code && code <= 0x1FACF ) || // E0.0  [13] (🫃..🫏)    <reserved-1FAC3>..<reserved-1FACF>
		( 0x1FAD0 <= code && code <= 0x1FAD6 ) || // E13.0  [7] (🫐..🫖)    blueberries..teapot
		( 0x1FAD7 <= code && code <= 0x1FAFF ) || // E0.0  [41] (🫗..🫿)    <reserved-1FAD7>..<reserved-1FAFF>
		( 0x1FC00 <= code && code <= 0x1FFFD ) // E0.0[1022] (🰀..🿽)    <reserved-1FC00>..<reserved-1FFFD>
	) {
		return constants.ExtendedPictographic;
	}
	return constants.Other;
}


// EXPORTS //

module.exports = emojiProperty;
