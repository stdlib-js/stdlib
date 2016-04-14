
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	TESTS_FIXTURES ?= $(shell find -E $(ROOT) \
		-name "$(TESTS_FIXTURES_PATTERN)" \
		-path "$(ROOT)/**/$(TESTS_FIXTURES_DIR)/**" \
		-regex "$(TESTS_FIXTURES_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(TOOLS_DIR)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
else
	TESTS_FIXTURES ?= $(shell find $(ROOT) \
		-name "$(TESTS_FIXTURES_PATTERN)" \
		-path "$(ROOT)/**/$(TESTS_FIXTURES_DIR)/**" \
		-regextype posix-extended \
		-regex "$(TESTS_FIXTURES_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(TOOLS_DIR)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
endif


# TARGETS #

# List test fixture files.
#
# This target prints a newline-delimited list of test fixture files.

list-test-fixtures:
	@printf '%s\n' $(TESTS_FIXTURES)


.PHONY: list-test-fixtures
