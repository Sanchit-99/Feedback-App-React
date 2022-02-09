import { createContext } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("/feedback?_sort=id&_order=desc");
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...data } : item;
      })
    );
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    // newFeedback.id = uuidv4();
    const response = await fetch("/feedback", {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "Application/json",
      },
    });

    const data = await response.json();

    // setFeedback([newFeedback, ...feedback]);
    setFeedback([data, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
