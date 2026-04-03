"use client";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // 1. EmailJS-ийг импортлох

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false); // Илгээж байх үед товчийг идэвхгүй болгох

  // EmailJS Тохиргоо (Энд өөрийн утгуудыг тавиарай)
  const EMAILJS_SERVICE_ID = "service_nvu7tti";
  const EMAILJS_TEMPLATE_ID = "template_8jxmf0q";
  const EMAILJS_PUBLIC_KEY = "lCXBzyD5VKgbsAFnz";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS руу илгээх өгөгдөл
    const templateParams = {
      name: form.name,
      message: form.message,
      email: form.phone, // Бидний ярилцсанаар утасны дугаарыг {{email}} таг руу дамжууллаа
      title: "Тавилгын захиалга / Хүсэлт",
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      )
      .then((response) => {
        console.log("Амжилттай!", response.status, response.text);
        setSent(true);
      })
      .catch((err) => {
        console.error("Алдаа:", err);
        alert("Зурвас илгээхэд алдаа гарлаа. Дахин оролдоно уу.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Зүүн тал: Холбоо барих мэдээлэл */}
          <div>
            <p
              className="font-lato text-xs tracking-[0.25em] uppercase mb-3"
              style={{ color: "#795548" }}
            >
              ХОЛБОО БАРИХ
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Холбоо барих
            </h2>
            <p className="font-lato text-stone-500 text-sm leading-relaxed mb-10">
              Танд засварлах шаардлагатай тавилга байгаа бол бидэнд зурвас
              илгээнэ үү.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#e8ddd5", color: "#795548" }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-lato text-xs text-stone-400 uppercase tracking-wider">
                    Утас
                  </p>
                  <p className="font-lato font-semibold text-stone-700">
                    (+976) 89289191
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#e8ddd5", color: "#795548" }}
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-lato text-xs text-stone-400 uppercase tracking-wider">
                    И-мэйл
                  </p>
                  <p className="font-lato font-semibold text-stone-700">
                    munkhboold@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-lato text-xs text-stone-400 uppercase tracking-wider mb-4">
                Сошиал сүлжээ
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/munkhbool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-lato text-sm font-semibold text-white px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#3b5998" }}
                >
                  <FaFacebookF className="text-base" />
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-lato text-sm font-semibold text-white px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                  }}
                >
                  <FaInstagram className="text-base" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Баруун тал: Форм */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ backgroundColor: "#4e342e" }}
            >
              <div className="absolute top-4 right-6 text-6xl font-playfair opacity-20 leading-none">
                "
              </div>
              <blockquote className="font-playfair text-xl italic leading-relaxed mb-6">
                &quot;Мод бүр түүх өгүүлдэг, бид тэрхүү түүхийг сэргээдэг.&quot;
              </blockquote>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-lato text-white/50 text-sm">
                  Улаанбаатар хот, Монгол улс
                </span>
              </div>
            </div>

            {sent ? (
              <div className="bg-white rounded-2xl p-8 text-center border border-stone-100">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f5f0eb", color: "#795548" }}
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-stone-800 mb-2">
                  Амжилттай илгээлээ!
                </h3>
                <p className="font-lato text-stone-500 text-sm">
                  Бид тантай удахгүй холбогдох болно.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 border border-stone-100 space-y-5"
              >
                <h3 className="font-playfair text-xl font-semibold text-stone-800">
                  Зурвас илгээх
                </h3>
                <div>
                  <label className="font-lato text-xs text-stone-500 uppercase tracking-wider block mb-1.5">
                    Нэр
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Таны нэр"
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 font-lato text-sm text-stone-700 outline-none focus:border-stone-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-lato text-xs text-stone-500 uppercase tracking-wider block mb-1.5">
                    Утас
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+976 xxxxxxxx"
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 font-lato text-sm text-stone-700 outline-none focus:border-stone-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-lato text-xs text-stone-500 uppercase tracking-wider block mb-1.5">
                    Tайлбар
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Тавилгынхаа талаар дэлгэрэнгүй бичнэ үү..."
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 font-lato text-sm text-stone-700 outline-none focus:border-stone-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white font-lato text-sm font-semibold py-3.5 rounded-lg transition-all duration-200 hover:opacity-90 disabled:bg-stone-400"
                  style={{ backgroundColor: loading ? "#a0a0a0" : "#5d4037" }}
                >
                  {loading ? "Илгээж байна..." : "Илгээх →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
