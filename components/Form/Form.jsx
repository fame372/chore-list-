import React from "react";

export default function Form() {
    return (
        <div>
            <form>
                <label className="hidden" for="job-input">To Do</label>
                <input placeholder="Wash Dishes" id="job-input" name="job-input" />
                <button><i className="fa-solid fa-arrow-right"></i></button>
            </form>
            <button>
            <i className="fa-solid fa-x"></i>
            </button>
        </div>
    )
}