const compile = (

    ({directives, box, syntax}) => (

        directives
            .split(syntax.concat)
            .map(
                $ => box[$.trim()] ?? '',
            )
            .join('')

    )

);


export default compile;
