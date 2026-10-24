import { Contact2Icon, PhoneMissed } from "lucide-react";

function Contact() {
  return (
      <div className="w-fit mt-40 m-auto border-2 border-slate-600 p-6 rounded-lg bg-slate-800">
      <h1 className="text-xl font-bold text-white text-center mb-5">
        FEEDBACK / CUSTOMER CARE
      </h1>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email ID"
          className="p-3 rounded bg-slate-700 text-white"
        />

        <textarea
          placeholder="Enter your description..."
          className="p-3 rounded bg-slate-700 text-white"
          rows="5"
        />

       <div className="flex items-center gap-4">
         <button className="bg-emerald-500 p-3 rounded text-white">
          Submit Feedback
        </button>
        <div className="flex items-center gap-2 font-bold">
        <Contact2Icon/>:1929292929
      </div>
       </div>
      </form>
      
    </div>

  );
}

export default Contact;