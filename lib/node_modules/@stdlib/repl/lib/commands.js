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

var onAddTheme = require( './commands/add_theme.js' );
var onAlias2Pkg = require( './commands/alias2pkg.js' );
var onAlias2Related = require( './commands/alias2related.js' );
var onAns = require( './commands/ans.js' );
var onAssignin = require( './commands/assignin.js' );
var onAssignfrom = require( './commands/assignfrom.js' );
var onCitation = require( './commands/citation.js' );
var onClear = require( './commands/clear.js' );
var onClearHistory = require( './commands/clear_history.js' );
var onClearUserDocs = require( './commands/clear_user_docs.js' );
var onClearVars = require( './commands/clear_vars.js' );
var onClearWorkspace = require( './commands/clear_workspace.js' );
var onContributors = require( './commands/contributor.js' );
var onCopyright = require( './commands/copyright.js' );
var onCredits = require( './commands/credits.js' );
var onCurrentWorkspace = require( './commands/current_workspace.js' );
var onDeleteTheme = require( './commands/delete_theme.js' );
var onDeleteWorkspace = require( './commands/delete_workspace.js' );
var onDeeprerequire = require( './commands/deeprerequire.js' );
var onDonate = require( './commands/donate.js' );
var onDone = require( './commands/__done__.js' );
var onEvalin = require( './commands/evalin.js' );
var onExample = require( './commands/example.js' );
var onGetTheme = require( './commands/get_theme.js' );
var onHelp = require( './commands/help.js' );
var onInfo = require( './commands/info.js' );
var isWorkspace = require( './commands/is_workspace.js' );
var isKeyword = require( './commands/is_keyword.js' );
var onKeybindings = require( './commands/keybindings.js' );
var onLicense = require( './commands/license_text.js' );
var onLoad = require( './commands/load.js' );
var onLoadWorkspace = require( './commands/load_workspace.js' );
var onPager = require( './commands/pager.js' );
var onPresentationStart = require( './commands/presentation_start.js' );
var onPresentationStop = require( './commands/presentation_stop.js' );
var onQuit = require( './commands/quit.js' );
var onRenameTheme = require( './commands/rename_theme.js' );
var onRenameWorkspace = require( './commands/rename_workspace.js' );
var onRerequire = require( './commands/rerequire.js' );
var onRerun = require( './commands/rerun.js' );
var onReset = require( './commands/reset.js' );
var onSetKeybinding = require( './commands/set_keybinding.js' );
var onSettings = require( './commands/settings.js' );
var onThemes = require( './commands/themes.js' );
var onTutorial = require( './commands/tutorial.js' );
var onUserDoc = require( './commands/user_doc.js' );
var onVars = require( './commands/vars.js' );
var onVarsWorkspace = require( './commands/vars_workspace.js' );
var onWorkspace = require( './commands/workspace.js' );
var onWorkspaces = require( './commands/workspaces.js' );


// MAIN //

/**
* Returns a list of REPL-specific commands.
*
* ## Notes
*
* -   Each array element is comprised as follows:
*
*     ```text
*     [ <command>, <function>, <is_accessor> ]
*     ```
*
*     where the first element is the command alias, the second element the command callback, and the third element a boolean indicating whether the callback is an accessor (getter; i.e., the command refers to a property rather than a function to be explicitly invoked).
*
* @private
* @param {REPL} repl - REPL instance
* @returns {ArrayArray} commands
*/
function commands( repl ) {
	var cmds;

	// Define a list of REPL-specific commands (NOTE: keep in alphabetical order):
	cmds = [];
	cmds.push( [ '__done__', onDone( repl ), false ] );
	cmds.push( [ 'addTheme', onAddTheme( repl ), false ] );
	cmds.push( [ 'alias2pkg', onAlias2Pkg( repl ), false ] );
	cmds.push( [ 'alias2related', onAlias2Related( repl, cmds ), false ] );
	cmds.push( [ 'ans', onAns( repl ), true ] );
	cmds.push( [ 'assignfrom', onAssignfrom( repl ), false ] );
	cmds.push( [ 'assignin', onAssignin( repl ), false ] );
	cmds.push( [ 'citation', onCitation( repl ), false ] );
	cmds.push( [ 'clear', onClear( repl ), false ] );
	cmds.push( [ 'clearHistory', onClearHistory( repl ), false ] );
	cmds.push( [ 'clearUserDocs', onClearUserDocs( repl ), false ] );
	cmds.push( [ 'clearVars', onClearVars( repl ), false ] );
	cmds.push( [ 'clearWorkspace', onClearWorkspace( repl ), false ] );
	cmds.push( [ 'contributors', onContributors( repl ), false ] );
	cmds.push( [ 'copyright', onCopyright( repl ), false ] );
	cmds.push( [ 'credits', onCredits( repl ), false ] );
	cmds.push( [ 'currentWorkspace', onCurrentWorkspace( repl ), true ] );
	cmds.push( [ 'deleteTheme', onDeleteTheme( repl ), false ] );
	cmds.push( [ 'deleteWorkspace', onDeleteWorkspace( repl ), false ] );
	cmds.push( [ 'deeprerequire', onDeeprerequire( repl ), false ] );
	cmds.push( [ 'donate', onDonate( repl ), false ] );
	cmds.push( [ 'evalin', onEvalin( repl, cmds ), false ] );
	cmds.push( [ 'example', onExample( repl, cmds ), false ] );
	cmds.push( [ 'getTheme', onGetTheme( repl ), false ] );
	cmds.push( [ 'help', onHelp( repl, cmds ), false ] );
	cmds.push( [ 'info', onInfo( repl, cmds ), false ] );
	cmds.push( [ 'isKeyword', isKeyword( repl ), false ] );
	cmds.push( [ 'isWorkspace', isWorkspace( repl ), false ] );
	cmds.push( [ 'keybindings', onKeybindings( repl ), false ] );
	cmds.push( [ 'license', onLicense( repl ), false ] );
	cmds.push( [ 'load', onLoad( repl ), false ] );
	cmds.push( [ 'loadWorkspace', onLoadWorkspace( repl ), false ] );
	cmds.push( [ 'pager', onPager( repl ), false ] );
	cmds.push( [ 'presentationStart', onPresentationStart( repl ), false ] );
	cmds.push( [ 'presentationStop', onPresentationStop( repl ), false ] );
	cmds.push( [ 'quit', onQuit( repl ), false ] );
	cmds.push( [ 'renameTheme', onRenameTheme( repl ), false ] );
	cmds.push( [ 'renameWorkspace', onRenameWorkspace( repl ), false ] );
	cmds.push( [ 'rerequire', onRerequire( repl ), false ] );
	cmds.push( [ 'rerun', onRerun( repl ), false ] );
	cmds.push( [ 'reset', onReset( repl ), false ] );
	cmds.push( [ 'setKeybinding', onSetKeybinding( repl ), false ] );
	cmds.push( [ 'settings', onSettings( repl ), false ] );
	cmds.push( [ 'themes', onThemes( repl ), false ] );
	cmds.push( [ 'tutorial', onTutorial( repl ), false ] );
	cmds.push( [ 'userDoc', onUserDoc( repl ), false ] );
	cmds.push( [ 'vars', onVars( repl ), false ] );
	cmds.push( [ 'varsWorkspace', onVarsWorkspace( repl ), false ] );
	cmds.push( [ 'workspace', onWorkspace( repl ), false ] );
	cmds.push( [ 'workspaces', onWorkspaces( repl ), false ] );

	return cmds;
}


// EXPORTS //

module.exports = commands;
