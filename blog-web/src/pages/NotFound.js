import { useHistory } from "react-router-dom";

function NotFoundPage() {
  const { goBack } = useHistory();

  return (
    <div>
      <h4>404</h4>
      <p>Sorry, the page you visited does not exist.</p>
      <button onClick={goBack} type="button">
        Go Back
      </button>
    </div>
  );
}

export default NotFoundPage;
