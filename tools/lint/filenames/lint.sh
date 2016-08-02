#!/usr/bin/env bash
#
# Script to lint filenames.


# VARIABLES #

# Define the command to list filenames:
export LIST_FILES='make list-files'

# Define a regular expression to filter filenames (default: snakecase, except for Markdown files):
export FILENAME_LINTER_PATTERN='\/[a-z0-9._-]{1,}\.(html|css|svg|tmpl|js|json|jl|R|py|go|c|h|cpp|hpp|mk|sh|yml|txt)$|\/[a-zA-Z0-9._-]{1,}\.md$'


# FUNCTIONS #

# Defines an error handler.
on_error() {
	echo 'ERROR: An error was encountered during execution.'
	cleanup
	exit 1
}

# Lint filenames.
lint() {
	lowercase
}

# Check that filenames are lowercased.
lowercase() {
	# Find all files which do not match the desired pattern:
	FILES=`make list-files | grep -vE $FILENAME_LINTER_PATTERN`

	# Check if any filenames fail...
	if [ -z "$FILES" ]; then
		echo 'Success!'
        exit 0
    else
    	echo ''
        echo 'ERROR: One or more filenames failed. Ensure that filenames are snakecase.'
        echo ''
        printf '%s\n' $FILES
        echo ''
        echo 'Ensure that filenames are snakecase.'
        echo ''
        exit 1
    fi
}

# Runs clean-up tasks.
cleanup() {
	echo ''
}


# MAIN #

# Exit immediately if one of the executed commands exits with a non-zero status:
set -e

# Set an error handler to print captured output and perform any clean-up tasks:
trap 'on_error' ERR

# Lint filenames:
lint

# Run cleanup tasks:
cleanup
