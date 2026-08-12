import { Calendar, Ticket, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'

const ShowroomExperience = ({ setShowroomModalOpen, setBookingConfirmed, bookingConfirmed }) => {

    const formStyle = {
        label: "text-xs font-bold text-black/60 tracking-widest font-sans",
        input: "w-full px-3 py-2 font-sans text-xs border border-black/10 text-slate-800 focus:outline-none rounded-md placeholder-black/70 active:border-sky-50"
    }
    const [bookingForm, setBookingForm] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        sector: "residential"
    });

    const [bookingTicket, setBookingTicket] = useState(null);


    // const [showroomBookings, setShowroomBookings] = useState(() => {
    //     const saved = localStorage.getItem("spe_showroom_bookings");
    //     if (saved)
    //         return JSON.parse(saved);
    //     return 0
    // });
    // console.log(showroomBookings)
    // useEffect(() => {
    //     localStorage.setItem("spe_showroom_bookings", JSON.stringify(showroomBookings));
    // }, [showroomBookings]);

    const handleBookShowroom = (e) => {
        e.preventDefault();
        if (!bookingForm.name || !bookingForm.phone || !bookingForm.date)
            return;
        const randomTicketNo = `SPE-BK-${Math.floor(100000 + Math.random() * 900000)}`;
        const newBooking = {
            id: randomTicketNo,
            name: bookingForm.name,
            phone: bookingForm.phone,
            email: bookingForm.email || "No Email Provided",
            date: bookingForm.date,
            time: bookingForm.time || "12:00",
            sector: bookingForm.sector || "residential",
            status: "Confirmed"
        };
        // setShowroomBookings(prev => [newBooking, ...prev]);
        setBookingTicket({
            ticketNo: randomTicketNo,
            ...bookingForm
        });

        // setBookingConfirmed(true);
    };
    return (
        <div className="product-quick-view fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">

            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                className="bg-white border border-primary w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative text-slate-800"
            >

                <div className="px-5 pt-3 pb-1 border-b border-slate-100 bg-slate-50 flex items-center justify-between">

                    <div>
                        <div className="flex items-center gap-2">
                            <span className="uppercase text-[9px] font-bold border border-sky-100  py-1 bg-sky-50 text-sky-700 rounded-lg">
                                Showroom
                            </span>

                            {!bookingConfirmed && (
                                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                                    Private Experience
                                </span>
                            )}
                        </div>

                        <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight leading-6 m-0">
                            {bookingConfirmed
                                ? "Experience Slot Confirmed"
                                : "Book Showroom Experience"
                            }
                        </h3>

                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-1">
                            Nagpur Headquarters • Security Plus Electronics
                        </p>
                    </div>

                    <button
                        onClick={() => setShowroomModalOpen(false)}
                        className="text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer border border-slate-100"
                        title="Close Showroom Booking"
                    >
                        <X className="h-4 w-4" />
                    </button>

                </div>


                {!bookingConfirmed ? (
                    <form onSubmit={handleBookShowroom} className="p-3 md:my-2 font-sans">

                        <div className="bg-sky-50 border border-primary rounded-lg px-3 py-1">
                            <p className="text-xs leading-relaxed text-slate-600">
                                Request a private demonstration of advanced security
                                technologies including 4K IP smart arrays, biometric
                                turnstiles, thermal fire sensors, and off-grid telemetry
                                at our Nagpur HQ.
                            </p>
                        </div>

                        <div className="p-2 space-y-4">
                            <div className="space-y-1.5">
                                <label className={formStyle.label}>
                                    Your Full Name
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="space-y-1.5">
                                    <label className={formStyle.label}>
                                        Mobile Number
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


                                <div className="space-y-1.5">
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


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="space-y-1.5">
                                    <label className={formStyle.label}>
                                        Preferred Date
                                    </label>

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


                                <div className="space-y-1.5">
                                    <label className={formStyle.label}>
                                        Preferred Time Slot
                                    </label>

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

                            <div className="space-y-1.5">
                                <label className={formStyle.label}>
                                    Primary Protection Field
                                </label>

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


                            <div className="pt-1">

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-100 hover:scale-[1.005]"
                                >
                                    <Ticket className="h-4 w-4" />
                                    Book Security Slot
                                </button>

                            </div>
                        </div>

                    </form>

                ) : (
                    <div className="p-5 md:p-6 space-y-5 font-sans">

                        <div className="text-center">

                            <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto">
                                <Ticket className="h-6 w-6 text-emerald-600" />
                            </div>

                            <h4 className="text-base font-extrabold text-slate-900 uppercase tracking-tight mt-3">
                                Reservation Verified
                            </h4>

                            <p className="text-xs text-slate-500 leading-relaxed max-w-md mx-auto mt-1">
                                Your showroom visit has been successfully scheduled.
                                Please present the reservation details below when you arrive.
                            </p>

                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 relative">

                            <div className="absolute top-4 right-4 text-[8px] border border-emerald-200 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md uppercase tracking-widest font-bold">
                                Verified Pass
                            </div>

                            <div className="pr-28">

                                <span className="text-[8px] text-slate-400 uppercase tracking-wider block font-bold">
                                    Ticket Identifier
                                </span>

                                <span className="text-sm text-slate-900 font-extrabold tracking-wide block mt-1">
                                    {bookingTicket?.ticketNo}
                                </span>

                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 mt-4 pt-4">
                                <div>
                                    <span className="text-[8px] text-slate-400 uppercase tracking-wider block font-bold">
                                        Scheduled Visitor
                                    </span>

                                    <span className="text-xs text-slate-800 font-bold truncate block uppercase mt-1">
                                        {bookingTicket?.name}
                                    </span>
                                </div>


                                <div>
                                    <span className="text-[8px] text-slate-400 uppercase tracking-wider block font-bold">
                                        Assigned Advisor
                                    </span>

                                    <span className="text-xs text-primary font-bold block uppercase mt-1">
                                        SPE Sentinel Node
                                    </span>
                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 mt-4 pt-4">

                                <div>
                                    <span className="text-[8px] text-slate-400 uppercase tracking-wider block font-bold">
                                        Reservation Date
                                    </span>

                                    <span className="text-xs text-slate-900 font-bold block mt-1">
                                        {bookingTicket?.date}
                                    </span>
                                </div>


                                <div>
                                    <span className="text-[8px] text-slate-400 uppercase tracking-wider block font-bold">
                                        Reservation Time
                                    </span>

                                    <span className="text-xs text-slate-900 font-bold block mt-1">
                                        {bookingTicket?.time}
                                    </span>
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-end pt-1">

                            <button
                                onClick={() => setShowroomModalOpen(false)}
                                className="text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
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