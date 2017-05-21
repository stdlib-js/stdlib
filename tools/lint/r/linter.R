#!/usr/bin/env Rscript
#
# Lints a list of R files.
#
# The script is called with one or more arguments, where each argument is a
# filepath. Note that each provided filepath is resolved relative to the current
# working directory of the calling process.
#
# [1]: https://github.com/jimhester/lintr

# Ensure that the `lintr` package is installed...
if ( !require( "lintr", quietly = TRUE, character.only = TRUE ) ) {
	install.packages( "lintr", repos = "http://lib.stat.cmu.edu/R/CRAN/", quiet = TRUE );
}

# Get only the trailing command-line arguments:
args <- commandArgs( trailingOnly = TRUE );

# Check that at least one filepath has been provided...
n <- length( args );
if ( n == 0 ) {
	stop( "Must provide at least one file to lint.", call. = FALSE );
}

# Specify which linters to use...
linters <- lintr::with_defaults( default = list(),
	# Check that no absolute paths are used:
	absolute_paths_linter = lintr::absolute_paths_linter,

	# Always use `<-` for assignment:
	assignment_linter = lintr::assignment_linter,

	# (deprecated) Object names should never be written in camelCase:
	camel_case_linter = lintr::camel_case_linter,

	# Closed curly braces should always be on their own line unless they follow an `else`:
	closed_curly_linter = lintr::closed_curly_linter( allow_single_line = FALSE ),

	# Commas must always be followed by spaces, but never have spaces before them:
	commas_linter = lintr::commas_linter,

	# (deprecated) Allow commented code outside roxygen blocks:
	commented_code_linter = NULL, # lintr::commented_code_linter,

	# (pending) Require the `[[` operator is used when extracting a single element from an object, not `[` (subsetting) or `$` (interactive use):
	# extraction_operator_linter = lintr::extraction_operator_linter,

	# (pending) Require that integers are explicitly typed using the form `1L` instead of `1`:
	# implicit_integer_linter = lintr::implicit_integer_linter,

	# (pending) Require that all infix operators have spaces around them:
	infix_spaces_linter = NULL, # lintr::infix_spaces_linter,

	# Require that line length of both comments and code is less than a specified length:
	line_length_linter = lintr::line_length_linter( 120L ),

	# (deprecated) Allow objects to have.multiple.dots:
	multiple_dots_linter = NULL, # lintr::multiple_dots_linter,

	# Allow tabs:
	no_tab_linter = NULL, # lintr::no_tab_linter,

	# (pending) Require that `file.path()` is used to construct safe and portable paths:
	# nonportable_path_linter = lintr::nonportable_path_linter,

	# Limit the length of function and variable names (characters):
	object_length_linter = lintr::object_length_linter( 30L ),

	# (pending) Require that object names conform to a single naming style (e.g., snake_case or lowerCamelCase):
	# object_name_linter = lintr::object_name_linter( "snake_case"),

	# Require that closures have the proper usage using `checkUsage`:
	object_usage_linter = lintr::object_usage_linter,

	# Never allow opening curly braces to be on their own line, and require that they are always followed by a newline:
	open_curly_linter = lintr::open_curly_linter( allow_single_line = FALSE ),

	# (pending) Require that each step in a pipeline is on a new line, except when the entire pipe fits on one line:
	# pipe_continuation_linter = lintr::pipe_continuation_linter,

	# (pending) Allow semicolons to terminate statements:
	# semicolon_terminator_linter = lintr::semicolon_terminator_linter,

	# Require that only single quotes be used to delimit strings:
	single_quotes_linter = lintr::single_quotes_linter,

	# (deprecated) Allow object names to be written in snake_case:
	snake_case_linter = NULL, # lintr::snake_case_linter,

	# Allow spaces directly inside parentheses and square brackets:
	spaces_inside_linter = NULL, # lintr::spaces_inside_linter,

	# Require that all left parentheses have a space before them, except for function calls:
	spaces_left_parentheses_linter = lintr::spaces_left_parentheses_linter,

	# (pending) Ensure that source code does not contain TODO comments (case-insensitive):
	# todo_comment_linter = lintr::todo_comment_linter,

	# Never allow trailing blank lines:
	trailing_blank_lines_linter = lintr::trailing_blank_lines_linter,

	# Never allow trailing whitespace characters:
	trailing_whitespace_linter = lintr::trailing_whitespace_linter

	# (pending) Avoid the symbols `T` and `F` for `TRUE` and `FALSE`, respectively:
	# T_and_F_symbol_linter = lintr::T_and_F_symbol_linter,

	# (pending) Report the use of undesirable functions (e.g., `options` or `sapply`) and suggest an alternative:
	# undesirable_function_linter = lintr::undesirable_function_linter,

	# (pending) Report the use of undesirable operators (e.g., `:::` or `<<-`) and suggest an alternative:
	# undesirable_operator_linter = lintr::undesirable_operator_linter,

	# (pending) Ensure that the `c` function is not used without arguments or with a single constant:
	# unneeded_concatenation_linter = lintr::unneeded_concatenation_linter,
);

# Lint each file...
for ( i in 1:n ) {
	results <- lintr::lint( args[ i ], linters = linters );
	if ( length( results ) > 0 ) {
		print( results );
	}
}
