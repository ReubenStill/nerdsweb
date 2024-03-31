import { Link, useRouteError } from "react-router-dom";

export default function ErrorComponent() {
  const error = useRouteError();

  return (
    <div id="error">
        {/* Insert picture here */}
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Transfer here</Link>
    </div>
  );
}