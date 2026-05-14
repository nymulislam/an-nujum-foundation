import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";

const MyAccount = () => {
    return (
        <Link
                href="/login"
                className="flex items-center gap-3 w-full p-3 rounded-2xl bg-white border-2 border-yellow-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/15 transition-all shadow-md group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-400 text-black font-bold">
                  <FaRegUser className="size-5" />
                </div>
                <span className="font-bold text-black">My Account</span>
              </Link>
    );
};

export default MyAccount;