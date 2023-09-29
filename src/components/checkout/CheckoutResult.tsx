import NoResult from "../ui/NoResult";
import Success from "../ui/Success";

interface Props {
  result: string;
}
export default function CheckoutResult({ result }: Props) {
  return (
    <>
      {result === "success" ? (
        <Success message="Your order has been received and it will be processed shortly. Thanks for your time" />
      ) : (
        <NoResult message="There was an error with your order. Try again in a few minutes" />
      )}
    </>
  );
}
