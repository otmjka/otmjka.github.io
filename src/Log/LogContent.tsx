import { FC, ReactNode } from "react";

const LogContent: FC<{ children?: ReactNode }> = (props) => (
  <>{props.children}</>
);

export default LogContent;
