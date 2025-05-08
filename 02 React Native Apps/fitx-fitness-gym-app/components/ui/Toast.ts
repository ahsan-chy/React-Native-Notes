import Toast from "react-native-toast-message";

export const SuccessToast = (message: string, title = "Success") => {
  Toast.show({
    type: "success",
    text1: title,
    text2: message,
    position: "top",
  });
};

export const ErrorToast = (message: string, title = "Error") => {
  Toast.show({
    type: "error",
    text1: title,
    text2: message,
    position: "top",
  });
};

export const InfoToast = (message: string, title = "Info") => {
  Toast.show({
    type: "info",
    text1: title,
    text2: message,
    position: "top",
  });
};
