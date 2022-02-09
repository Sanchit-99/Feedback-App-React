import React from "react";
import Card from "./shared/Card";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleTextChange = (data) => {
    const text = data.target.value;
    setText(text);
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Write at least 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        rating: rating,
        text: text,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id,newFeedback)
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate our services</h2>
        <RatingSelect
          select={(selectedRating) => {
            setRating(selectedRating);
          }}
        />
        <div className="input-group">
          <input
            value={text}
            type="text"
            placeholder="Write review here.."
            onChange={handleTextChange}
          />
          <Button isDisabled={btnDisabled}>Submit</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
