import { useEffect, useState } from "react";
import del from "./img/delete.png";
import ad from "./img/ad.png";
import axios from "axios";

function Todo() {

    return (
        <div className="container">
            <h1>Todo App</h1>
            <form action="">
                <div className="add__form">
                    <input
                        type="text"
                        value=''
                        placeholder="Add your new todo.."
                    />

                    <button className="add">
                        <img src={ad} alt="" />
                    </button>


                    <div className="edit">
                        <button>Update</button>
                        <button>Cancel</button>
                    </div>
                </div>
                <div>
                    <div className="li__item">
                        <div className='list'>
                            <input
                                type="checkbox"
                            />
                            <p>task</p>
                        </div>
                        <button>
                            <img src={del} alt="" />
                        </button>
                    </div>
                </div>
            </form>
            <div className="footer">
                <span>
                    You have <span className="count">0</span> pending tasks
                </span>
                <p>Your list is empty.Let's add some tasks!</p>
                <button className="clear">
                    Clear All
                </button>
            </div>
        </div>
    )
}

export default Todo;
