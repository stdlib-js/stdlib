
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_python_examples_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_PYTHON_EXAMPLES_FLAGS ?= \
	-type f \
	-name "$(PYTHON_EXAMPLES_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/**" \
	-regex "$(EXAMPLES_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/fixtures/*"


ifneq ($(OS), Darwin)
	FIND_PYTHON_EXAMPLES_FLAGS := -regextype posix-extended $(FIND_PYTHON_EXAMPLES_FLAGS)
endif

# Define a command to list example files:
FIND_PYTHON_EXAMPLES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_PYTHON_EXAMPLES_FLAGS)

# Define the list of example files:
PYTHON_EXAMPLES ?= $(shell $(FIND_PYTHON_EXAMPLES_CMD))

# TODO: does not include top-level examples?


# TARGETS #

# List example files.
#
# This target prints a newline-delimited list of example files.

list-examples-python:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_PYTHON_EXAMPLES_FLAGS) $(find_print_python_examples_list)

.PHONY: list-examples-python
