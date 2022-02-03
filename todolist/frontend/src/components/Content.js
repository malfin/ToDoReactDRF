import React from 'react';
import {Link} from "react-router-dom";

const Content = ({item}) => {
    return (
        <div className="p-2">
            <div className="card">
                <div className="d-flex justify-content-between">
                    <h5>{item.title}</h5>
                    <div className="d-flex justify-content-end">
                        <Link to={"#"} className="btn btn-danger">Удалить</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ContentList = ({items}) => {
    return (
        <div className="p-2">
            {items.map((item) => <Content item={item} key={item.id}/>)}
        </div>
    )
}
export default ContentList