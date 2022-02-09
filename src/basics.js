function Basics() {
    const title = "blog post";
    const body = "This is a blog post";
    const comments = [
      { id: 1, text: "This is 1st comment" },
      { id: 2, text: "This is 2nd comment" },
      { id: 3, text: "This is 3rd comment" },
    ];
    const showComments = true;
    const commentBlock = (
      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    );
    return (
      <div className="container">
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {showComments && commentBlock}
      </div>
    );
  }
  
  export default Basics;
  