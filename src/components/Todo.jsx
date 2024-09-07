import React, { useState } from "react";
import useStore from "../stores/Todo-store";
import { toast } from "react-toastify";

const Todo = () => {
  const { arr, addArr, delArr, editArr } = useStore((state) => ({
    arr: state.arr,
    addArr: state.addArr,
    delArr: state.delArr,
    editArr: state.editArr,
  }));

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");

  const hdlChange = (e) => {
    setText(e.target.value);
  };

  const hdlClick = () => {
    if (text.trim()) {
      addArr(text);
      setText(""); // Clear the input field after adding
      toast.success("Add Success");
    } else {
      toast.error("Task cannot be empty!");
    }
  };

  const hdlDel = (id) => {
    delArr(id);
    toast.error("Delete Success");
  };

  const handleEdit = (id, currentTitle) => {
    setEditId(id);
    setTitle(currentTitle);
  };

  const handleConfirm = (id) => {
    if (title.trim()) {
      editArr(id, title);
      toast.success(`Edit ${title} Success!!`);
      setEditId(null);
    } else {
      toast.error("Title cannot be empty!");
    }
  };
  return (
    <div className="flex flex-col w-3/5 mx-auto gap-2">
      <h1 className="text-2xl font-bold text-center mt-4">Todo List</h1>
      <input
        type="text"
        className="bg-green-200 rounded-lg text-xl p-2"
        onChange={hdlChange}
      />
      <button
        className="bg-orange-400 p-3 rounded-lg font-bold "
        onClick={hdlClick}
      >
        Add
      </button>
      <ul>
        {arr.map((el) => (
          <li
            key={el.id}
            className="flex list-none bg-orange-300 justify-between p-2 rounded-lg items-center mb-1"
          >
            {editId === el.id ? (
              <>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-lg p-1"
                />
                <div className="flex gap-2">
                  <button
                    className="bg-blue-100 p-2 rounded-lg"
                    onClick={() => handleConfirm(el.id)}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => hdlDel(el.id)}
                    className="bg-red-400 p-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>{el.title}</p>
                <div className="flex gap-2">
                  <button
                    className="bg-red-200 p-2 rounded-lg"
                    onClick={() => handleEdit(el.id, el.title)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => hdlDel(el.id)}
                    className="bg-red-400 p-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
