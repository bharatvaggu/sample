var lang = function (label, value) {
    if (typeof english[label] != 'undefined') {
        return english[label];
    }
    return label;
}

/* Please do not add comments in following JSON object Please Add doublequotes AVOID single quotes while wrapping */

var english = {};