
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	SOURCES ?= $(shell find -E $(ROOT) \
		-name "$(SOURCES_PATTERN)" \
		-regex "$(SOURCES_FILTER)" \
		-not -name "$(TESTS_PATTERN)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(TOOLS_DIR)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
		-not -path "**/$(EXAMPLES_DIR)/*" \
	)
else
	SOURCES ?= $(shell find $(ROOT) \
		-name "$(SOURCES_PATTERN)" \
		-regextype posix-extended \
		-regex "$(SOURCES_FILTER)" \
		-not -name "$(TESTS_PATTERN)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(TOOLS_DIR)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
		-not -path "**/$(EXAMPLES_DIR)/*" \
	)
endif


# TARGETS #

# List source files.
#
# This target prints a newline-delimited list of source files.

list-sources:
	@printf '%s\n' $(SOURCES)


.PHONY: list-sources
