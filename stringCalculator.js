function add(input) {
    if (input === "") return 0;

    let delimiterRegex = /,|\n/;
    let numbersPart = input;

    if (input.startsWith("//")) {
        const [delimiterLine, ...rest] = input.split("\n");
        numbersPart = rest.join("\n");

        const delimiterMatches = [...delimiterLine.matchAll(/\[(.*?)\]/g)];

        if (delimiterMatches.length > 0) {
            const delimiters = delimiterMatches.map(m => m[1]);

            if (delimiters.includes("")) {
                throw new Error("Invalid input: empty custom delimiter is not allowed");
            }

            const escapedDelimiters = delimiters.map(d =>
                d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            );
            delimiterRegex = new RegExp(escapedDelimiters.join("|") + "|\n", "g");
        } else {
            const singleDelimiter = delimiterLine.slice(2);
            if (singleDelimiter === "") {
                throw new Error("Invalid input: empty custom delimiter is not allowed");
            }
            const escaped = singleDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            delimiterRegex = new RegExp(escaped + "|\n", "g");
        }
    }

    const numberTokens = numbersPart.split(delimiterRegex);
    const invalidTokens = numberTokens.filter(
        token => token !== "" && !/^-?\d+$/.test(token)
    );

    if (invalidTokens.length > 0) {
        throw new Error(`Invalid input: unexpected value(s) '${invalidTokens.join("', '")}'`);
    }

    const parsedNumbers = numberTokens.map(token =>
        token === "" ? 0 : parseInt(token, 10)
    );

    const negativeNumbers = parsedNumbers.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
        throw new Error("negative numbers not allowed " + negativeNumbers.join(","));
    }

    const total = parsedNumbers.reduce((sum, n) =>
        isNaN(n) || n >= 1000 ? sum : sum + n, 0
    );

    return total;
}

module.exports = add;
