import React from "react";

export interface IButton {
  text: string;
}

export default function Button(props: IButton) {
  const { text } = props;
  return <button>{text}</button>;
}
