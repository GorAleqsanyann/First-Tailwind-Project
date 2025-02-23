import { useState } from "react";

export default function CardHome({ image, text, wiki }) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 text-center">
      <img
        className="w-[300px] h-[300px]"
        src={image}
        onClick={() => setShow((e) => !e)}
      />
    </div>
  );
}
