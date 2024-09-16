import Form from "../Components/Form";
import withErrorBoundary from "../HOC/withErrorBoundary";

const Contact = () => {
  return (
    <>
      <h3>Contact me</h3>
      <Form />
    </>
  );
};
const ContactWithError = withErrorBoundary(Contact);
export default ContactWithError;
