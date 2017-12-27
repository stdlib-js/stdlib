
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_svg_equations_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_SVG_EQUATIONS_FLAGS ?= \
	-type f \
	-name "$(SVG_EQUATIONS_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(DOCUMENTATION_FOLDER)/**" \
	-regex "$(SVG_EQUATIONS_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DIST_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*"

ifneq ($(OS), Darwin)
	FIND_SVG_EQUATIONS_FLAGS := -regextype posix-extended $(FIND_SVG_EQUATIONS_FLAGS)
endif

# Define a command for listing SVG equation files:
FIND_SVG_EQUATIONS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SVG_EQUATIONS_FLAGS)

# Define the list of files:
SVG_EQUATION_FILES ?= $(shell $(FIND_SVG_EQUATIONS_CMD))


# TARGETS #

# List all SVG equation files.
#
# This target prints a list of all SVG equation files.

list-svg-equation-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_SVG_EQUATIONS_FLAGS) $(find_print_svg_equations_list)

.PHONY: list-svg-equation-files
