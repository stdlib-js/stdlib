
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	MARKDOWN_FILES ?= $(shell find -E $(ROOT) \
		-name "$(MARKDOWN_PATTERN)" \
		-regex "$(MARKDOWN_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
else
	MARKDOWN_FILES ?= $(shell find $(ROOT) \
		-name "$(MARKDOWN_PATTERN)" \
		-regextype posix-extended \
		-regex "$(MARKDOWN_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
endif


# TARGETS #

# List all Markdown files.
#
# This target prints a list of all Markdown files, excluding the `node_modules`, `build`, and `reports` directories.

list-markdown-files:
	@printf '%s\n' $(MARKDOWN_FILES)


.PHONY: list-markdown-files
