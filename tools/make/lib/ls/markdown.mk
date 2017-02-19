
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_markdown_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_MARKDOWN_FLAGS ?= \
	-type f \
	-name "$(MARKDOWN_PATTERN)" \
	-regex "$(MARKDOWN_FILTER)" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*"

ifneq ($(OS), Darwin)
	FIND_MARKDOWN_FLAGS := -regextype posix-extended $(FIND_MARKDOWN_FLAGS)
endif

# Define a command for listing Markdown files:
FIND_MARKDOWN_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_MARKDOWN_FLAGS)

# Define the list of files:
MARKDOWN_FILES ?= $(shell $(FIND_MARKDOWN_CMD))


# TARGETS #

# List all Markdown files.
#
# This target prints a list of all Markdown files, excluding the `node_modules`, `build`, and `reports` directories.

list-markdown-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_MARKDOWN_FLAGS) $(find_print_markdown_list)

.PHONY: list-markdown-files
