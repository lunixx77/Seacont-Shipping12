import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const { toast } = useToast();
  const inputClassName =
    "w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:bg-white focus:border-[#0E7C86] focus:ring-2 focus:ring-[#0E7C86]/25";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Website Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Company: ${form.company}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:marketing@seacont.ch?subject=${subject}&body=${body}`;

    toast({
      title: "Draft opened",
      description: "Your email client was opened with your message details.",
    });

    setForm(initialForm);
  };

  return (
    <section className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs text-[#0E7C86] font-semibold tracking-[0.2em] uppercase mb-2">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-4">
            Contact our shipping team
          </h1>
          <p className="text-slate-600 leading-relaxed">
            Please share your request and we will respond with a suitable transport proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2">
            <div className="border border-slate-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-[#0B1D3A] mb-5">Seacont Shipping LLC</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-500 mb-1">Email</p>
                  <a className="text-[#0B1D3A] hover:text-[#0E7C86] transition-colors" href="mailto:marketing@seacont.ch">
                    marketing@seacont.ch
                  </a>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Industry</p>
                  <p className="text-[#0B1D3A]">Maritime Transportation</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Headquarters</p>
                  <p className="text-[#0B1D3A]">Belgrade, Serbia</p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">Response Time</p>
                  <p className="text-[#0B1D3A]">Usually within one business day</p>
                </div>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-6 md:p-8 space-y-6"
          >
            <div className="pb-2 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-[#0B1D3A]">Request Form</h2>
              <p className="text-sm text-slate-500 mt-1">
                Please provide your details and shipment request.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold tracking-wide uppercase text-slate-600 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold tracking-wide uppercase text-slate-600 mb-2">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold tracking-wide uppercase text-slate-600 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold tracking-wide uppercase text-slate-600 mb-2">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="+41 ..."
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold tracking-wide uppercase text-slate-600 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={7}
                value={form.message}
                onChange={handleChange}
                className={`${inputClassName} resize-y min-h-[180px]`}
                placeholder="Tell us about shipment volume, routes, preferred timeline, and any special requirements."
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p className="text-xs text-slate-500">Fields marked with * are required.</p>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#0B1D3A] text-white text-sm font-semibold rounded-md hover:bg-[#0E7C86] transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
