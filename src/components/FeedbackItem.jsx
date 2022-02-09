import React from "react";
import Card from "./shared/Card";
import { FaTimesCircle ,FaEdit} from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackItem({ item }) {
  const {handleDelete,editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button className="close" onClick={()=>handleDelete(item.id)}>
        <FaTimesCircle color="purple" />
      </button>
      <button className="edit" onClick={()=>editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
    </Card>
  );
}

export default FeedbackItem;
