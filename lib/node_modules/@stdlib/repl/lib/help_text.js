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

// NOTE: Width shouldn't exceed 80 characters.
var MSG = [
	'',
	'    help()                      Print help text.',
	'    help(alias)                 Print help text for a specified alias.',
	'    help(alias.<key>)           Print help text for a specified property.',
	'',
	'    info(alias)                 Print brief help text for a specified alias.',
	'    info(alias.<key>)           Print brief help text for a specified property.',
	'',
	'    example(alias)              Run examples for a specified alias.',
	'    example(alias.<key>)        Run examples for a specified property.',
	'',
	'    tutorial()                  List tutorials.',
	'    tutorial(name)              Run a specified tutorial.',
	'',
	'    settings()                  List settings.',
	'    settings(name)              Return setting value.',
	'    settings(name,value)        Set a specified setting value.',
	'',
	'    ans                         Return the result of the last executed command.',
	'    vars()                      List current workspace variable names.',
	'    clearVars()                 Delete current workspace variables.',
	'',
	'    workspace()                 Switch to a specified (possibly new) workspace.',
	'    workspaces()                List workspace names.',
	'    isWorkspace()               Assert whether a workspace exists.',
	'    varsWorkspace()             List workspace variable names.',
	'    loadWorkspace()             Load variables from a specified workspace.',
	'    clearWorkspace()            Delete variables in a specified workspace.',
	'    deleteWorkspace()           Delete a specified workspace.',
	'    renameWorkspace()           Rename a specified workspace.',
	'    currentWorkspace            Return the name of the current workspace.',
	'',
	'    themes()                    List available color themes.',
	'    addTheme(name,value)        Add a new color theme.',
	'    deleteTheme(name)           Delete a specified color theme.',
	'    renameTheme(old,new)        Rename a specified color theme.',
	'    getTheme([name])            Return the current (or a specified) theme\'s',
	'                                color palette.',
	'',
	'    keybindings([name])         List all (or select) keybindings.',
	'    setKeybinding(name,[keys])  Set a keybinding.',
	'',
	'    assignin()                  Assign a value to a workspace variable.',
	'    assignfrom()                Read in a value from another workspace.',
	'',
	'    evalin()                    Evaluate an expression in a specified',
	'                                workspace.',
	'',
	'    rerun()                     Rerun previous commands.',
	'',
	'    require()                   Import a module, JSON, or local file.',
	'    rerequire()                 Re-import a module, JSON, or local file.',
	'    deeprerequire()             Re-import a module and its dependencies.',
	'    load()                      Load and evaluate a JavaScript file',
	'                                line-by-line.',
	'',
	'    save()                      Save previous commands to a specified file.',
	'    saveStart()                 Start saving commands to a specified file.',
	'    saveStop()                  Stop saving commands.',
	'',
	'    presentationStart()         Start a REPL presentation.',
	'    presentationStop()          Stop a REPL presentation.',
	'',
	'    userDoc()                   Add user-defined documentation.',
	'    clearUserDocs()             Clear user-defined documentation.',
	'',
	'    clearHistory()              Clear the REPL history.',
	'',
	'    clear()                     Clear the entire REPL screen and scrollback',
	'                                history.',
	'    reset()                     Reset the REPL.',
	'    quit()                      Exit the REPL.',
	'',
	'    aliases()                   List namespace contents.',
	'    alias2pkg()                 Convert an alias to a stdlib package name.',
	'    pkg2alias()                 Convert a stdlib package name to an alias.',
	'    alias2related()             List related aliases.',
	'    pkg2related()               List related package names.',
	'    isKeyword()                 Assert whether a value is a reserved',
	'                                keyword/alias.',
	'',
	'    citation()                  Print how to cite stdlib in publications.',
	'    license()                   Print license information.',
	'    copyright()                 Print copyright information.',
	'    contributors()              List contributors.',
	'    credits()                   Print credits.',
	'    donate()                    Print donation information.',
	'',
	''
].join( '\n' );


// EXPORTS //

module.exports = MSG;
