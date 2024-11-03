import React from "react";

export default function List(props) {
    const { listItems, removeItem } = props;
    const listItemElements = listItems.map((item) => (
        <li key={item.id} onDoubleClick={() => removeItem(item.id)}>
            {item.body}
        </li>
    ))
    return (
        <ul>
            {listItemElements}
        </ul>
    )
}