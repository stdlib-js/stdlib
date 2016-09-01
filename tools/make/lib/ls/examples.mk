
# VARIABLES #

# Define the folder name for examples files:
EXAMPLES_FOLDER ?= examples

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_examples_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_EXAMPLES_FLAGS ?= \
	-name "$(EXAMPLES_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/**" \
	-regex "$(EXAMPLES_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "**/$(EXAMPLES_FOLDER)/fixtures/*"


ifneq ($(KERNEL), Darwin)
	FIND_EXAMPLES_FLAGS := -regextype posix-extended $(FIND_EXAMPLES_FLAGS)
endif

# Define the list of example files:
EXAMPLES ?= $(shell find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_EXAMPLES_FLAGS))

# TODO: does not include top-level examples?


# TARGETS #

# List example files.
#
# This target prints a newline-delimited list of example files.

list-examples:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_EXAMPLES_FLAGS) $(find_print_examples_list)

.PHONY: list-examples
