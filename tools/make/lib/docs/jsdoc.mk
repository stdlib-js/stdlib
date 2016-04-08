
# VARIABLES #

# Define the path of the JSDoc executable:
JSDOC ?= $(BIN)/jsdoc

# Define the path to the JSDoc configuration file:
JSDOC_CONF ?= $(CONFIG_DIR)/jsdoc.conf.json

# Define the path to the JSDoc JSON template:
JSDOC_JSON_TEMPLATE ?= $(ROOT)/tools/docs/jsdoc/templates/json

# Define the output directory for JSDoc:
JSDOC_OUT ?= $(DOCS_DIR)/jsdoc

# Define the output directory for JSDoc JSON:
JSDOC_JSON_OUT ?= $(JSDOC_OUT)/json

# Define the output filepath for JSDoc JSON:
JSDOC_JSON_PATH ?= $(JSDOC_JSON_OUT)/jsdoc.json

# Define the path to the JSDoc HTML template:
JSDOC_HTML_TEMPLATE ?= templates/default

# Define the output directory for JSDoc HTML documentation:
JSDOC_HTML_OUT ?= $(JSDOC_OUT)/static

# Define the output filepath for HTML documentation:
JSDOC_HTML_PATH ?= $(JSDOC_HTML_OUT)/index.html

# Define command-line options to be used when invoking the JSDoc executable to generate HTML documentation:
JSDOC_HTML_FLAGS ?= --template $(JSDOC_HTML_TEMPLATE) \
		--configure $(JSDOC_CONF) \
		--encoding utf8 \
		--destination $(JSDOC_HTML_OUT) \
		--verbose

# Define command-line options to be used when invoking the JSDoc executable to generate JSDoc JSON:
JSDOC_JSON_FLAGS ?= --template $(JSDOC_JSON_TEMPLATE) \
		--configure $(JSDOC_CONF) \
		--encoding utf8 \
		--destination console


# TARGETS #

# Generate JSDoc HTML documentation.
#
# This target generates source HTML documentation from [JSDoc][1]-style comments.
#
# To install JSDoc:
#     $ npm install jsdoc
#
# [1]: http://usejsdoc.org/

docs-src: docs-jsdoc

docs-jsdoc: node_modules
	-rm -rf $(JSDOC_HTML_OUT)
	mkdir -p $(JSDOC_HTML_OUT)
	$(JSDOC) $(JSDOC_HTML_FLAGS) $(SOURCES)


# Generate JSDoc JSON.
#
# This target generates JSDoc JSON from [JSDoc][1]-style comments.
#
# To install JSDoc:
#     $ npm install jsdoc
#
# [1]: http://usejsdoc.org/

jsdoc-json: node_modules
	-rm -f $(JSDOC_JSON_PATH)
	mkdir -p $(JSDOC_JSON_OUT)
	$(JSDOC) $(JSDOC_JSON_FLAGS) $(SOURCES) > $(JSDOC_JSON_PATH)


# View HTML documentation.
#
# This target opens JSDoc HTML documentation in a local web browser.

view-src-docs:
	$(OPEN) $(JSDOC_HTML_PATH)


# Remove a JSDoc output directory.
#
# This target cleans up a JSDoc output directory by removing it entirely.

clean-jsdoc:
	-rm -rf $(JSDOC_OUT)


.PHONY: docs-src docs-jsdoc jsdoc-json view-src-docs clean-jsdoc

