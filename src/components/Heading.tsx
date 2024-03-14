import { ReactNode } from "react";

const Heading = (props: { title: string; children: ReactNode }) => {
  const { title, children } = props;

  return (
    <h2 style={{ fontSize: 40, textAlign: "center" }}>
      {children} "{title}"
    </h2>
  );
};

export default Heading;
