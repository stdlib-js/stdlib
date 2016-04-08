
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	# TODO: does not list top-level examples?
	EXAMPLES ?= $(shell find -E $(ROOT) \
		-name "$(EXAMPLES_PATTERN)" \
		-path "$(ROOT)/**/$(EXAMPLES_DIR)/**" \
		-regex "$(EXAMPLES_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
else
	# TODO: does not list top-level examples?
	EXAMPLES ?= $(shell find $(ROOT) \
		-name "$(EXAMPLES_PATTERN)" \
		-path "$(ROOT)/**/$(EXAMPLES_DIR)/**" \
		-regextype posix-extended \
		-regex "$(EXAMPLES_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
endif


# TARGETS #

# List example files.
#
# This target prints a newline-delimited list of example files.

list-examples:
	@printf '%s\n' $(EXAMPLES)


.PHONY: list-examples
