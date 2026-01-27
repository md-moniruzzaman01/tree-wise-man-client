"use client";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useNewsSubscribeMutation } from "../../../../redux/features/api/others";
import { validateEmail } from "../../../../shared/helpers/emailVerifications";
import swal from "sweetalert";

const Newslettersec = () => {
  const [email, setEmail] = useState("");
  const [sendEmail, { isLoading }] = useNewsSubscribeMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      swal("Warning", "Please enter a valid email", "warning");
      return;
    }
    const result = await sendEmail({ fullData: { email } });
    if (result) setEmail("");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-white text-lg font-bold tracking-tight">
        Join Our Newsletter
      </h3>
      <p className="text-slate-400 text-sm">
        Get seasonal tree care tips and local service discounts.
      </p>

      <form onSubmit={handleSubmit} className="relative group">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-6 pr-16 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-2 bottom-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded-xl transition-all flex items-center justify-center disabled:opacity-50"
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <FiSend size={20} />
          )}
        </button>
      </form>
    </div>
  );
};

export default Newslettersec;