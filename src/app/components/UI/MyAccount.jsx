import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";

const MyAccount = () => {
    return (
        <Link
                href="/login"
                className="flex items-center gap-3 w-full p-3 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all shadow-sm group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                  <FaRegUser className="size-5" />
                </div>
                <span className="font-bold text-slate-900">My Account</span>
              </Link>
    );
};

export default MyAccount;