import axios from 'axios'
import { Calendar, Ticket, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'

const ShowroomExperience = ({ setShowroomModalOpen, setShowroomExperience, showroomExperience, setToastMessage, bookingConfirmed }) => {

    const formStyle = {
        label: "text-xs font-bold text-black/60 tracking-widest font-sans",
        input: "w-full px-3 py-2 font-sans text-xs border border-black/10 text-slate-800 focus:outline-none rounded-md placeholder-black/70 active:border-sky-50"
    }
    const [bookingForm, setBookingForm] = useState({
        name: "",
        phone: "",
        email: "",
        date: new Date().toISOString().split("T")[0],
        time: "12:00",
        sector: "residential"
    });
    const handleBookShowroom = async (e) => {
        e.preventDefault();

        // setBookingConfirmed(false);
        setShowroomModalOpen(true);

        if (
            !bookingForm.name ||
            !bookingForm.phone ||
            !bookingForm.email ||
            !bookingForm.date ||
            !bookingForm.time ||
            !bookingForm.sector
        ) {
            setToastMessage("Please fill out all required fields.");
            return;
        }

        const fields = new URLSearchParams();

        fields.append("name", bookingForm.name);
        fields.append("phone", bookingForm.phone);
        fields.append("email", bookingForm.email);
        fields.append("date", bookingForm.date);
        fields.append("time", bookingForm.time);
        fields.append("sector", bookingForm.sector);

        const formData = new FormData();

        formData.append("action", "fluentform_submit");
        formData.append("form_id", "4");
        formData.append("data", fields.toString());

        try {
            const response = await axios.post(
                "https://woston.in/wp-admin/admin-ajax.php",
                formData
            );

            if (response.data?.success) {
                setToastMessage("Appointment request submitted successfully!");

                setShowroomExperience(bookingForm)
                // setBookingForm({
                //     name: "",
                //     phone: "",
                //     email: "",
                //     date: "",
                //     time: "",
                //     sector: "residential",
                // });
            } else {
                setToastMessage(
                    response.data?.data?.message || response.data?.data?.message ||
                    "Submission failed. Please check the form fields."
                );
            }
        } catch (error) {
            console.error("Forms submit error:", error);
            console.log("Status:", error.response?.status);
            console.log("Response:", error.response?.data);

            setToastMessage(
                error.response?.data?.data?.message ||
                "Unable to submit the form."
            );
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4">
            <motion.div
                initial={{ scale: 0.97, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.97, opacity: 0, y: 10 }}
                className="relative w-full max-w-lg rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-white via-slate-50 to-neutral-100 border border-neutral-300"
            >
                <div className="px-6 pt-5 pb-3 border-b border-neutral-200 bg-gradient-to-r from-primary/5 via-white to-indigo-50 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="uppercase text-[10px] font-semibold border border-primary/20 py-1 px-2 bg-primary/10 text-primary rounded-lg tracking-wide">
                                Showroom
                            </span>
                            {!bookingConfirmed && (
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                                    Private Experience
                                </span>
                            )}
                        </div>
                        <h3 className="text-xl font-bold text-primary uppercase leading-tight">
                            {bookingConfirmed
                                ? "Experience Slot Confirmed"
                                : "Book Showroom Experience"
                            }
                        </h3>
                        <p className="text-[11px] text-neutral-400 uppercase tracking-wide font-sans mt-1">
                            Nagpur Headquarters • Security Plus Electronics
                        </p>
                    </div>
                    <button
                        onClick={() => setShowroomModalOpen(false)}
                        className="text-neutral-400 hover:text-red-500 bg-white hover:bg-red-100 p-2 rounded-full transition-colors border border-neutral-100 shadow-sm"
                        title="Close Showroom Booking"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>


                {showroomExperience ? (
                    <form onSubmit={handleBookShowroom} className="p-6 md:py-5 font-sans">
                        <div className="bg-primary/5 border border-primary/30 rounded-md px-4 py-2 mb-4">
                            <p className="text-sm font-medium leading-relaxed text-neutral-700">
                                Schedule your private demo with advanced surveillance, biometric,
                                and fire safety systems at our Nagpur HQ.
                            </p>
                        </div>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className={formStyle.label}>
                                    Your Full Name <span className="text-primary">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Ramesh Patil"
                                    value={bookingForm.name}
                                    onChange={(e) =>
                                        setBookingForm(prev => ({
                                            ...prev,
                                            name: e.target.value
                                        }))
                                    }
                                    className={formStyle.input}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={formStyle.label}>
                                        Mobile Number <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="e.g. +91 98765 43210"
                                        value={bookingForm.phone}
                                        onChange={(e) =>
                                            setBookingForm(prev => ({
                                                ...prev,
                                                phone: e.target.value
                                            }))
                                        }
                                        className={formStyle.input}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={formStyle.label}>
                                        Corporate Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="e.g. name@company.com"
                                        value={bookingForm.email}
                                        onChange={(e) =>
                                            setBookingForm(prev => ({
                                                ...prev,
                                                email: e.target.value
                                            }))
                                        }
                                        className={formStyle.input}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className={formStyle.label}>Preferred Date <span className="text-primary">*</span></label>
                                    <input
                                        type="date"
                                        required
                                        value={bookingForm.date}
                                        onChange={(e) =>
                                            setBookingForm(prev => ({
                                                ...prev,
                                                date: e.target.value
                                            }))
                                        }
                                        className={formStyle.input}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className={formStyle.label}>Preferred Time Slot <span className="text-primary">*</span></label>
                                    <input
                                        type="time"
                                        required
                                        value={bookingForm.time}
                                        onChange={(e) =>
                                            setBookingForm(prev => ({
                                                ...prev,
                                                time: e.target.value
                                            }))
                                        }
                                        className={formStyle.input}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className={formStyle.label}>Primary Protection Field</label>
                                <select
                                    value={bookingForm.sector}
                                    onChange={(e) =>
                                        setBookingForm(prev => ({
                                            ...prev,
                                            sector: e.target.value
                                        }))
                                    }
                                    className={formStyle.input}
                                >
                                    <option value="residential">
                                        Residential Home CCTV & Automation
                                    </option>
                                    <option value="commercial">
                                        Commercial Space Attendance & Security
                                    </option>
                                    <option value="healthcare">
                                        Healthcare Wards Monitoring
                                    </option>
                                    <option value="banking">
                                        Financial Institution Redundant Vault Grids
                                    </option>
                                    <option value="industrial">
                                        Heavy Machinery PPE & Intrusion Systems
                                    </option>
                                </select>
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow hover:shadow-lg"
                                >
                                    <Ticket className="h-4 w-4" />
                                    Book Security Slot
                                </button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="p-6 space-y-7 font-sans">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                <Ticket className="h-7 w-7 text-emerald-600" />
                            </div>
                            <h4 className="text-lg font-bold text-primary uppercase tracking-tighter mt-3">
                                Reservation Verified
                            </h4>
                            <p className="text-[13px] text-neutral-500 leading-relaxed max-w-md mx-auto mt-1">
                                Your showroom visit is scheduled. Please present the reservation details below at our headquarters.
                            </p>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-lg p-5 relative">
                            <div className="absolute top-3 right-4 text-[10px] border border-green-300 bg-green-50 text-green-700 px-3 py-1 rounded uppercase tracking-widest font-bold shadow-sm">
                                Verified Pass
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-neutral-200 mt-3 pt-4">
                                <div>
                                    <span className="text-[9px] text-neutral-400 uppercase tracking-wide block font-semibold">Scheduled Visitor</span>
                                    <span className="text-base text-neutral-800 font-bold truncate block uppercase mt-1">{showroomExperience?.name}</span>
                                </div>
                                <div>
                                    <span className="text-[9px] text-neutral-400 uppercase tracking-wide block font-semibold">Assigned Advisor</span>
                                    <span className="text-base text-primary font-bold block uppercase mt-1">SPE Sentinel Node</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 border-t border-neutral-100 mt-5 pt-4">
                                <div>
                                    <span className="text-[9px] text-neutral-400 uppercase tracking-wide block font-semibold">Reservation Date</span>
                                    <span className="text-sm text-neutral-900 font-bold block mt-1">{showroomExperience?.date}</span>
                                </div>
                                <div>
                                    <span className="text-[9px] text-neutral-400 uppercase tracking-wide block font-semibold">Reservation Time</span>
                                    <span className="text-sm text-neutral-900 font-bold block mt-1">{showroomExperience?.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end pt-2">
                            <button
                                onClick={() => setShowroomModalOpen(false)}
                                className="text-primary hover:text-white bg-transparent hover:bg-primary border border-primary py-2.5 px-6 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
                            >
                                Close & Exit
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    )
}

export default ShowroomExperience