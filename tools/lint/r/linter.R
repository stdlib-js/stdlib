#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Lints a list of R files.
#
# The script is called with one or more arguments, where each argument is a
# filepath. Note that each provided filepath is resolved relative to the current
# working directory of the calling process.
#
# [1]: https://github.com/jimhester/lintr

# Ensure that the `lintr` package is installed...
if ( !require( 'lintr', quietly = TRUE, character.only = TRUE ) ) {
	install.packages( 'lintr', repos = 'http://lib.stat.cmu.edu/R/CRAN/', quiet = TRUE );
}

# Get only the trailing command-line arguments:
args <- commandArgs( trailingOnly = TRUE );

# Check that at least one filepath has been provided...
n <- length( args );
if ( n == 0L ) {
	stop( 'Must provide at least one file to lint.', call. = FALSE );
}

# Specify which linters to use...
linters <- lintr::linters_with_defaults( defaults = default_linters,
	# Check that no absolute paths are used:
	absolute_path_linter = lintr::absolute_path_linter(),

	# Always use `<-` for assignment:
	assignment_linter = lintr::assignment_linter(),

	# Commas must always be followed by spaces, but never have spaces before them:
	commas_linter = lintr::commas_linter(),

	# Allow commented code outside roxygen blocks:
	commented_code_linter = NULL, # lintr::commented_code_linter,

	# Require the `[[` operator is used when extracting a single element from an object, not `[` (subsetting) or `$` (interactive use):
	extraction_operator_linter = lintr::extraction_operator_linter(),

	# Require that integers are explicitly typed using the form `1L` instead of `1`:
	implicit_integer_linter = lintr::implicit_integer_linter(),

	# Require that all infix operators have spaces around them:
	infix_spaces_linter = NULL, # lintr::infix_spaces_linter,

	# Require that line length of both comments and code is less than a specified length:
	line_length_linter = lintr::line_length_linter( 200L ),

	# Allow tabs:
	indentation_linter = NULL, # lintr::indentation_linter(),
	whitespace_linter = NULL, # lintr::whitespace_linter(),

	# Require that `file.path()` is used to construct safe and portable paths:
	nonportable_path_linter = lintr::nonportable_path_linter(),

	# Limit the length of function and variable names (characters):
	object_length_linter = lintr::object_length_linter( 30L ),

	# Require that object names conform to a single naming style (e.g., snake_case or lowerCamelCase):
	object_name_linter = lintr::object_name_linter( 'snake_case' ),

	# Require that closures have the proper usage using `checkUsage`:
	object_usage_linter = lintr::object_usage_linter(),

	# Various style checks related to placement and spacing of curly braces:
	brace_linter = lintr::brace_linter( allow_single_line = FALSE ),

	# Require that each step in a pipeline is on a new line, except when the entire pipe fits on one line:
	pipe_continuation_linter = lintr::pipe_continuation_linter(),

	# Allow semicolons to terminate statements:
	semicolon_linter = lintr::semicolon_linter( allow_trailing = TRUE ),

	# Require that only single quotes be used to delimit strings:
	quotes_linter = lintr::quotes_linter(delimiter = "'"),

	# Allow spaces directly inside parentheses and square brackets:
	spaces_inside_linter = NULL, # lintr::spaces_inside_linter(),

	# Require that all left parentheses have a space before them, except for function calls: (disabled as not reliable)
	spaces_left_parentheses_linter = NULL, # lintr::spaces_left_parentheses_linter(),

	# Ensure that source code does not contain TODO comments (case-insensitive):
	todo_comment_linter = lintr::todo_comment_linter(),

	# Never allow trailing blank lines:
	trailing_blank_lines_linter = lintr::trailing_blank_lines_linter(),

	# Never allow trailing whitespace characters:
	trailing_whitespace_linter = lintr::trailing_whitespace_linter(),

	# Avoid the symbols `T` and `F` for `TRUE` and `FALSE`, respectively:
	T_and_F_symbol_linter = lintr::T_and_F_symbol_linter(),

	# Report the use of undesirable functions (e.g., `attach` or `sapply`) and suggest an alternative:
	undesirable_function_linter = lintr::undesirable_function_linter( fun = within( default_undesirable_functions, rm( options ) ) ),

	# Report the use of undesirable operators (e.g., `:::` or `<<-`) and suggest an alternative:
	undesirable_operator_linter = lintr::undesirable_operator_linter(),

	# Ensure that the `c` function is not used without arguments or with a single constant:
	unnecessary_concatenation_linter = lintr::unnecessary_concatenation_linter()
);

# Lint each file...
status <- 0L;
for ( i in 1L:n ) {
	results <- lintr::lint( args[ i ], linters = linters );
	if ( length( results ) > 0L ) {
		status <- 1L;
		print( results );
	}
}
# Quit with a non-zero exit code if lint errors:
quit( status = status );
