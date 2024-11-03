import React from "react";
import { nanoid } from "nanoid"

import Form from "/components/Form/Form"
import List from "/components/List/List"

export default function Main() {
    const [listItems, setListItems] = React.useState(() => JSON.parse(localStorage.getItem("List")) || []);

    React.useEffect(() => {
        localStorage.setItem("List", JSON.stringify(listItems))
    }, [listItems])

    function newListItem(event, text) {
        event.preventDefault() ;
        const newListItem = {
            id: nanoid(),
            body: `${text}`,
        }
        setListItems([...listItems, newListItem])
    }

    function removeWholeList() {
        // localStorage.clear()
        setListItems([])
    }

    function removeItem(itemId) {
        setListItems(prevListItems => prevListItems.filter(item => item.id !== itemId))
    }

    
    return (
        <main>
            <Form 
                newListItem={newListItem}
                removeWholeList={removeWholeList}
            />
            <List 
                listItems={listItems}
                removeItem={removeItem}
            />
        </main>
    )
}