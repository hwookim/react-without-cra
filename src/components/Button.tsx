import React from "react";

export interface IButton {
  text: string;
}

const style: React.CSSProperties = {
  backgroundColor: "red",
  fontSize: "2rem",
};

export default function Button(props: IButton) {
  const { text } = props;

  return <button style={style}>{text}</button>;
}
