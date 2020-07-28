import React from 'react';

function ButtonLink(props) {
    return (
        <a href={props.href} className={props.className}>
            Novo Livro
        </a>
    );
}

export default ButtonLink;
