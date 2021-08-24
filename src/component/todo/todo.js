import React, { useEffect, useState } from 'react'
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setAddItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert("Please Add Task");
        } else if (inputData && !toggleSubmit) {
            setAddItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null);

        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setAddItems([...items, allInputData])
            setInputData('');
        }
    }

    const deleteItem = (index) => {
        const updateItem = items.filter((item) => {
            return index !== item.id;
        })
        setAddItems(updateItem);
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem)
        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('lists', JSON.stringify(items));
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="mainDiv">
                <h1>Todo Lists</h1>
                <div>
                    <input type="text" placeholder="Add Todo" value={inputData} onChange={(e) => setInputData(e.target.value)} className="input" />
                    {
                        toggleSubmit ? <i className="fas fa-plus add-btn" title="Add Items" onClick={addItem} ></i> : <i className="fas fa-edit add-btn" title="Update Items" onClick={addItem}></i>
                    }
                </div>
                <div className="showItems">
                    {
                        items.map((item) => {
                            return (
                                <div className="eachItem" key={item.id}>
                                    <p>{item.name}</p>
                                    <i className="fas fa-edit add-btn" title="Edit Item" onClick={() => editItem(item.id)}></i>
                                    <i className="fas fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(item.id)}></i>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </form>
    )
}

export default Todo
