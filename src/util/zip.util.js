const zip = (

    (strings, expressions) => {
        const [init, ...array] = Array.from(strings);
        return array.reduce((s, c, i) => s + String(expressions[i]) + c, init);
    }

);


export default zip;
