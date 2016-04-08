
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	TESTS ?= $(shell find -E $(ROOT) \
		-name "$(TESTS_PATTERN)" \
		-regex "$(TESTS_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
else
	TESTS ?= $(shell find $(ROOT) \
		-name "$(TESTS_PATTERN)" \
		-regextype posix-extended \
		-regex "$(TESTS_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
endif


# TARGETS #

# List test files.
#
# This target prints a newline-delimited list of test files.

list-tests:
	@printf '%s\n' $(TESTS)


.PHONY: list-tests
