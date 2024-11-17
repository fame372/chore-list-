import React from "react";

export default function Form(props) {
    const { newListItem, removeWholeList } = props
    return (
        <div>
            <form className ="btn-form">
                <label className="hidden" htmlFor="job-input">To Do</label>
                <input placeholder="Wash Dishes" id="job-input" name="job-input" />
                <button className="job-btn" onClick={(event) => newListItem(event, document.getElementById("job-input").value)}><i className="fa-solid fa-arrow-right"></i></button>
                <button className="remove-btn" onClick={removeWholeList}>
                <i className="fa-solid fa-x"></i>
            </button>
            </form>
           
        </div>
    )
}