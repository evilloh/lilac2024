import React from "react";

type Props = {
  classImport?: string;
  animatedButton?: string;
  children?: React.ReactNode;
  to?: string;
  handler?: Function;
  value?: any;
};

export default function Button({
  children,
  classImport,
  animatedButton,
  to,
  handler,
  value,
}: Props) {
  return (
    <div
      className={`col-md-3 col-sm-3 col-xs-6 ${classImport} z-10`}
      onClick={() => handler(!value)}
    >
      <a
        href={`${to ? to : "#"}`}
        className={`btn btn-sm animated-button thar-one z-10 ${animatedButton}`}
      >
        {children}
      </a>
    </div>
  );
}
