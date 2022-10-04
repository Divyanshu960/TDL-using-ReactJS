import React from 'react'

export const AddTodo = () =>
 {
    return (
        <div className ="container my-3">
            <h3>Add a Todo</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />

                </div>
                    <div className="mb-3">
                        <label htmlFor="desc">Todo Description</label>
                        <input type="text" className="form-control" id="desc"/>
                    </div>
                            <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
