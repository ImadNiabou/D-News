import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
const scis = [
  {
    id: 1,
    icon: <Facebook />,
    link: "",
  },
  {
    id: 2,
    icon: <Twitter />,
    link: "",
  },
  {
    id: 3,
    icon: <Instagram />,
    link: "",
  },
];

const Sci = () => {
  return (
    <div className="flex justify-between">
      {scis.map((sci) => (
        <div key={sci.id}>
          <div className=" m-2">{sci.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Sci;
