const caseConverter = {
    /**
     * 
     * @param {string} text 
     * @param {Object} options 
     * @param {boolean} options.removePunctuations 
     * @param {boolean} options.splitCamelCase 
     * @returns {string}
     */
    _normalize(text, options) {
        if (!text?.trim()) return "";
        options = { splitCamelCase: true, ...options };
        text = text.trim().split(/\s+/).filter(Boolean).join(" ");

        if (options.splitCamelCase) {
            text = text.replace(/([a-z])([A-Z])/g, "$1 $2")
        }

        if (options.removePunctuations) {
            const wordWithApostropheRegex = /([a-zA-Z])\'([a-zA-z])/;
            const punctuationMarkRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
            const stripSpaceRegex = /\s{2,}/g;
            text = text
                .replace(wordWithApostropheRegex, "$1$2")
                .replace(punctuationMarkRegex, " ")
                .replace(stripSpaceRegex, " ")
                .trim();
        }

        return text;
    },
    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    toUpperCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { splitCamelCase: false });
        return text.toUpperCase();
    },
    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    toLowerCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { splitCamelCase: false });
        return text.toLowerCase();
    },
    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    toTitleCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { splitCamelCase: false }).toLowerCase();
        const textWords = text.split(" ");
        const stopWords = ["a","about","above","after","again","against","all","am","an","and","any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves"];

        const newText = [];
        function convert(word) {
            return word[0].toUpperCase() + word.slice(1)
        }

        for (let i = 0; i < textWords.length; i++) {
            if (stopWords.includes(textWords[i])) {
                if (i === 0) {
                    newText.push(convert(textWords[i]))
                } else {
                    newText.push(textWords[i])
                }
                continue;
            }
            
            newText.push(convert(textWords[i]));
        }

        return newText.join(" ");
    },
    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    toSentenceCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { splitCamelCase: false });
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    },
    /**
     * 
     * @param {string} text 
     * @param {Object} [options={}] 
     * @param {"kebab"|"snake"|"camel"|"pascal"} options.currentCase 
     * @returns {string}
     */
    toSnakeCase(text, options = {}) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { removePunctuations: true });

        return text.split(" ").join("_").toLowerCase();
    },
    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    toCamelCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { removePunctuations: true });

        text = text.split(" ").map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word[0].toUpperCase() + word.slice(1).toLowerCase()
        }).join("");

        return text;
    },
    /**
     * 
     * @param {string} text 
     * @returns {string}
     */
    toPascalCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { removePunctuations: true });

        text = text.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join("");

        return text;
    },
    /**
     * @param {string} text 
     * @returns {string}
     */
    toKebabCase(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { removePunctuations: true });

        return text.toLowerCase().split(" ").join("-");
    },
    /**
     * @param {string} text 
     * @returns {string}
     */
    slugify(text) {
        if (!text?.trim()) return "";
        text = this._normalize(text, { removePunctuations: true });
        return text.toLowerCase().split(" ").join("-");
    }
}

export default caseConverter;