import React, {useState} from "react";
import axios from "axios";


const AddContent = () => {

    const [task, setTask] = useState('')


    function Submit(e) {
        e.preventDefault();
        axios.post(`http://127.0.0.1:8000/api/v1/todo/`, {title: task})
            .then((result) => {
                // alert('Вы успешно добавили задачу:' + result.data.title)
                window.location = '/'
                // console.log(result.data.title)
            })
            .catch((result) => {
                console.log(result)
            })
    }


    return (
        <div className="card">
            <form className="m-3" onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Задача</label>
                    <input type="text" className="form-control" id="task"
                           placeholder="Задача" onChange={(e) => setTask(e.target.value)}/>
                </div>
                <button className="btn btn-block btn-primary"> Добавить</button>
            </form>
        </div>
    )
}
export default AddContent;