import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setIsSent(false);

    emailjs
      .send(
        "service_2fmuarh",
        "template_sl8cln3",
        formData,
        "X9KA857CjAJeC3bPb"
      )
      .then(() => {
        setIsSent(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setError("Došlo je do greške. Pokušajte ponovo.");
      })
      .finally(() => setLoading(false));
  };

  return (
<section className="relative flex items-center justify-center min-h-screen px-4 pt-24 pb-10 overflow-hidden">
  {/* Background wrapper */}
  <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden scale-110">
    {/* Mobile background */}
    <div
      className="block md:hidden absolute inset-0 bg-cover bg-center filter blur-md w-full h-full"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/jskphotography.ba-04710.jpg"})` }}
    ></div>

    {/* Desktop background */}
    <div
      className="hidden md:block absolute inset-0 bg-cover bg-center filter blur-md w-full h-full"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/jskphotography.ba-04711.jpg"})` }}
    ></div>

    {/* Optional dark overlay */}
    <div className="absolute inset-0 bg-black opacity-30"></div>
  </div>

  {/* Form wrapper */}
  <div className="w-full max-w-md bg-white bg-opacity-60 shadow-xl rounded-2xl p-8 border border-[#eae6e1] backdrop-blur-sm">
    <h2
      className="text-3xl font-semibold text-center text-gray-800 mb-6"
      style={{ fontFamily: '"Snell Roundhand", cursive' }}
    >
      Pošaljite nam poruku
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Vaše ime"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b3a398] bg-[#faf9f8]"
      />
      <input
        type="email"
        name="email"
        placeholder="Vaš email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b3a398] bg-[#faf9f8]"
      />
      <textarea
        name="message"
        placeholder="Vaša poruka..."
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[#b3a398] bg-[#faf9f8]"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-white font-semibold rounded-lg transition disabled:opacity-50 hover:brightness-90"
        style={{
          backgroundColor: "#b3a398",
        }}
      >
        {loading ? "Slanje..." : "Pošalji poruku"}
      </button>
    </form>

    {isSent && (
      <p className="text-green-600 mt-4 text-center font-medium">
        ✅ Vaša poruka je uspješno poslana!
      </p>
    )}
    {error && (
      <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
    )}
  </div>
</section>

  );
}
