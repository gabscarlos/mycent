import Link from "next/link";
import React, { ReactElement } from "react";

interface IconeProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

interface RedeSocialProps {
  icone: ReactElement<IconeProps>;
  url: string;
}

export default function RedeSocial(props: RedeSocialProps) {
  return (
    <Link href={props.url} target="_blank">
      <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
        {React.cloneElement(props.icone, {
          size: 35,
          strokeWidth: 1,
          className: "text-indigo-400",
        })}
      </div>
    </Link>
  );
}
