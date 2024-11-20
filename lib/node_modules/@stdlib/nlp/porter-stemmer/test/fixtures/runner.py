#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Generate fixtures."""

from os import path
import json
from nltk.stem import PorterStemmer
from nltk.corpus import words

# Get the file path.
FILE = path.realpath(__file__)

# Get the file's directory.
DIR = path.dirname(FILE)

# Create a stemmer.
PS = PorterStemmer('MARTIN_EXTENSIONS')

# Retrieve a word list of common words.
WORDS = words.words()[:2000]


def main():
    """Generate fixture data and write to file."""
    stemmed = []
    for w in WORDS:
        stemmed.append(PS.stem(w))

    filepath = path.join(DIR, 'words.json')

    data = dict(
        stemmed=stemmed,
        original=WORDS
    )

    with open(filepath, 'w') as out:
        json.dump(data, out)


if __name__ == "__main__":
    main()
