import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompletion } from "../store/todoSlice";

function Listitem(props) {
    var dispatch = useDispatch();
    return (
    <div className="col-md-4 offset-md-4">
        <div style={{ margin: "10px" }} className="list-group-item">
        <button style={{ float: "right" }} onClick={()=> dispatch(deleteTodo(props.todoitem.id))}>
            <i className="fas fa-trash"></i>
        </button>
        <input
            defaultChecked={props.todoitem.completed}
            style={{ float: "left", marginTop: "5px" }}
            type="checkbox"
            onChange={()=>{dispatch(toggleCompletion(props.todoitem.id))}}
        ></input>
        <h6
        style={
            props.todoitem.completed
            ?{ textDecoration: "line-through", marginLeft: "20px" }
            : { marginLeft: "20px" }
        }
        >{props.todoitem.title}</h6>
        </div>
    </div>
    );
}

export default Listitem;