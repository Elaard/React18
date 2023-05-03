import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <div id="error-page" className="error-page">
      <div className="error-page-content">
        <h1 className="error-page-content__h1">Oops!</h1>
        <p className="error-page-content__message">Sorry, an unexpected error has occurred.</p>
        <p className="error-page-content__error">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}