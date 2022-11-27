import { removeAlert } from "@/redux/alert-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Message } from "rsuite";

export const Alert = () => {
  const dispatch = useAppDispatch();
  const { message, type } = useAppSelector((state) => state.alert);

  return (
    <>
      {message && (
        <Message
          showIcon
          type={type}
          header={type}
          closable
          onClose={() => setTimeout(() => dispatch(removeAlert()), 5000)}
        >
          {message}
        </Message>
      )}
    </>
  );
};
