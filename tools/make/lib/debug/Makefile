
# VARIABLES #

# Define command flags:
FIND_MAKEFILES_FLAGS ?= \
	-name 'Makefile' \
	-o \
	-name '*.mk'


# TARGETS #

# Print variable value.
#
# This target prints the runtime value of any variable via `inspect.VARIABLE_NAME`.

inspect.%:
	$(QUIET) echo '$*=$($*)'


# Assert variable.
#
# This targets asserts that a variable is set via `assert.VARIABLE_NAME`.

assert.%:
	$(QUIET) if [[ "${${*}}" = "" ]]; then \
		echo "\nError: You must set the environment variable: ${*}.\n"; \
		exit 1; \
	fi


# List variable names.
#
# This target prints a sorted list of Makefile variable names. To remove duplicates, pipe to `uniq`.
#
# Note: the list of variables is NOT exhaustive, as the list does not include variables which are built-in. These variables could be included by dumping the Makefile database `make -qp`.

list-variables:
	$(QUIET) find $(TOOLS_MAKE_DIR) $(FIND_MAKEFILES_FLAGS) \
	| xargs grep -e '^[A-Z0-9_]\{1,\} ?=' -e '^[A-Za-z0-9_]\{1,\} :=' \
	| awk '{print $$1}' \
	| sed 's/.*:\(.*\)/\1/' \
	| sort

.PHONY: list-variables
