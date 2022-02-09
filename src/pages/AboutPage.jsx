import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>This is about page</h1>
      <Link to="/">Back to Home</Link>
    </Card>
  );
}

export default AboutPage;
