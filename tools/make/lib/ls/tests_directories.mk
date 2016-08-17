
# VARIABLES #

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_tests_dirs_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_TESTS_DIRS_FLAGS ?= \
	-type d \
	-name "$(TESTS_FOLDER)" \
	-regex "$(TESTS_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*"

ifneq ($(KERNEL), Darwin)
	FIND_TESTS_DIRS_FLAGS := -regextype posix-extended $(FIND_TESTS_DIRS_FLAGS)
endif

# Define the list of test directories:
TESTS_DIRS ?= $(shell find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TESTS_DIRS_FLAGS))


# TARGETS #

# List test directories.
#
# This target prints a newline-delimited list of test directories.

list-tests-dirs:
	@find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TESTS_DIRS_FLAGS) $(find_print_tests_dirs_list)

.PHONY: list-tests-dirs
