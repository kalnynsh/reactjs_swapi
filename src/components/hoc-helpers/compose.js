const compose = (...funcs) => (wComponent) => {
    return funcs.reduceRight(
        (prevResult, fn) => fn(prevResult),
        wComponent)
    ;
};

export default compose;