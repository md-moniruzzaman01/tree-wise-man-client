import { helpData } from "@config/constants";
import { singleMenuTypes } from "@config/types";
import Link from "next/link";

const HelpNavigationSec = () => {
  return (
<div>
      <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Support</h3>
      <ul className="space-y-4">
        {helpData.map((data, i) => (
          <li key={i}>
            <Link 
              href={data.to || ""} 
              className="hover:text-green-500 hover:translate-x-1 inline-block transition-all duration-300"
            >
              {data.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpNavigationSec;
