import React, { useState } from "react";
import { LuGrape } from "react-icons/lu";
import { FaWineBottle } from "react-icons/fa6";

const API_URL = "http://localhost:8000/api/bookings/create/";

const Form = ({ closeForm }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        quantity: 1,
        red: false,
        white: false,
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: string }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setForm((s) => ({ ...s, [name]: checked }));
        } else {
            setForm((s) => ({ ...s, [name]: value }));
        }
    };

    const validate = () => {
        if (!form.name.trim()) return "Please enter your name.";
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(form.email))
            return "Please enter a valid email address.";
        const q = Number(form.quantity);
        if (!Number.isFinite(q) || q <= 0)
            return "Quantity must be a number greater than zero.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        const vErr = validate();
        if (vErr) {
            setMessage({ type: "error", text: vErr });
            return;
        }

        setLoading(true);
        try {
            const payload = {
                name: form.name.trim(),
                email: form.email.trim(),
                quantity: Number(form.quantity),
                options: { red: !!form.red, white: !!form.white },
            };

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok) {
                setMessage({
                    type: "success",
                    text: data.detail || "Booking placed successfully!",
                });
                setForm({
                    name: "",
                    email: "",
                    quantity: 1,
                    red: false,
                    white: false,
                });
                setTimeout(() => {
                    setMessage(null);
                    closeForm();
                }, 1000);
            } else {
                const errorText =
                    data.error ||
                    data.detail ||
                    JSON.stringify(data) ||
                    `Request failed (${res.status})`;
                setMessage({ type: "error", text: errorText });
            }
        } catch (err) {
            setMessage({
                type: "error",
                text: `Network error: ${err.message}`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            onClick={closeForm}
            className="fixed inset-0 bg-bg/25 backdrop-blur-sm h-full z-50 flex items-center justify-center px-3"
        >
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}
                className="min-h-[400px] py-8 px-4 sm:p-8 bg-bg w-full sm:w-[80%] md:w-[60%] lg:w-[50%] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4 relative"
            >
                <button
                    type="button"
                    onClick={closeForm}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
                >
                    ✕
                </button>

                <span className="p-4 rounded-full bg-orange-400 text-white text-2xl absolute -top-5 ">
                    <FaWineBottle />
                </span>

                <div className="flex flex-col w-full gap-2">
                    <label
                        className="text-sm font-normal text-gray-200"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="w-full px-4 py-3 text-[12px] font-normal bg-gray-200 rounded-sm focus:ring-0 ring-0 outline-orange-300 text-bg"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        id="name"
                    />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label
                        className="text-sm font-normal text-gray-200"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full px-4 py-3 text-[12px] font-normal bg-gray-200 rounded-sm focus:ring-0 ring-0 outline-orange-300 text-bg"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        id="email"
                    />
                </div>

                <div className="flex flex-col w-full gap-2">
                    <label
                        className="text-sm font-normal text-gray-200"
                        htmlFor="quantity"
                    >
                        Quantity
                    </label>
                    <input
                        className="w-full px-4 py-3 text-[12px] font-normal bg-gray-200 rounded-sm focus:ring-0 ring-0 outline-orange-300 text-bg"
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        min={1}
                        placeholder="How much quantity?"
                        id="quantity"
                    />
                </div>

                <div className="flex gap-2 w-full justify-start items-center">
                    <input
                        type="checkbox"
                        name="red"
                        checked={form.red}
                        onChange={handleChange}
                        className="w-4 h-4"
                        id="red"
                    />
                    <label
                        className="text-sm font-normal text-gray-200"
                        htmlFor="red"
                    >
                        Red wine
                    </label>
                </div>

                <div className="flex gap-2 w-full justify-start items-center">
                    <input
                        type="checkbox"
                        name="white"
                        checked={form.white}
                        onChange={handleChange}
                        className="w-4 h-4"
                        id="white"
                    />
                    <label
                        className="text-sm font-normal text-gray-200"
                        htmlFor="white"
                    >
                        White wine
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-fit border my-4 border-orange-200 p-4 text-[12px] font-semibold cursor-pointer hover:bg-orange-200 hover:text-bg transition-all duration-300 ease-in-out rounded-full disabled:opacity-60"
                >
                    {loading ? "Placing order..." : "PLACE AN ORDER"}
                </button>

                {message && (
                    <div
                        role="status"
                        className={`w-full text-center py-3 px-4 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                        {message.text}
                    </div>
                )}
            </form>
        </section>
    );
};

export default Form;
