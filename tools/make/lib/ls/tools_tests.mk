
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_tools_tests_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_TOOLS_TESTS_FLAGS ?= \
	-type f \
	-name "$(TESTS_PATTERN)" \
	-regex "$(TESTS_FILTER)" \
	-not -path "*/fixtures/*" \
	-not -path "*/snippets/*"

ifneq ($(OS), Darwin)
	FIND_TOOLS_TESTS_FLAGS := -regextype posix-extended $(FIND_TOOLS_TESTS_FLAGS)
endif

# Define a command to list test files:
FIND_TOOLS_TESTS_CMD ?= find $(find_kernel_prefix) $(TOOLS_DIR) $(TOOLS_PKGS_DIR) $(FIND_TOOLS_TESTS_FLAGS)

# Define the list of test files:
TOOLS_TESTS ?= $(shell $(FIND_TOOLS_TESTS_CMD))


# TARGETS #

# List test files.
#
# This target prints a newline-delimited list of test files.

list-tools-tests:
	$(QUIET) find $(find_kernel_prefix) $(TOOLS_DIR) $(TOOLS_PKGS_DIR) $(FIND_TOOLS_TESTS_FLAGS) $(find_print_tools_tests_list)

.PHONY: list-tools-tests
