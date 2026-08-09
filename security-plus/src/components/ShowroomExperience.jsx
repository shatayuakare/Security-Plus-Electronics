import { Calendar, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import React, { useEffect, useState } from 'react'

const ShowroomExperience = ({ setShowroomModalOpen, setBookingConfirmed, bookingConfirmed }) => {

    const formStyle = {
        label: "text-xs font-bold text-black/60 tracking-widest text-mono",
        input: "w-full px-3 py-2 text-xs border border-black/10 text-slate-800 focus:outline-none rounded-md placeholder-black/70 active:border-sky-50"
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


    const [showroomBookings, setShowroomBookings] = useState(() => {
        const saved = localStorage.getItem("spe_showroom_bookings");
        if (saved)
            return JSON.parse(saved);
        return [
            {
                id: "SPE-BK-321094",
                name: "Harish Kumar",
                phone: "+91 91234 56789",
                email: "harish.k@tcs.com",
                date: "2026-07-03",
                time: "11:00",
                sector: "residential",
                status: "Confirmed"
            }
        ];
    });
    useEffect(() => {
        localStorage.setItem("spe_showroom_bookings", JSON.stringify(showroomBookings));
    }, [showroomBookings]);

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
        setShowroomBookings(prev => [newBooking, ...prev]);
        setBookingTicket({
            ticketNo: randomTicketNo,
            ...bookingForm
        });
        setBookingConfirmed(true);
    };
    return (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white border border-sky-500 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative text-slate-800">
                <div className="p-6 border-b border-slate-300 flex justify-between items-center bg-[#0F0F0F] font-mono">
                    <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-[#FF5A00] animate-pulse" />
                        <h3 className="font-headline font-bold text-base text-white uppercase tracking-wider">
                            Book Showroom VIP Experience
                        </h3>
                    </div>
                    <button onClick={() => setShowroomModalOpen(false)} className="text-[#888888] hover:text-white">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {!bookingConfirmed ? (<form onSubmit={handleBookShowroom} className="p-6 space-y-4 font-mono">
                    <p className="text-sm leading-normal">
                        PRIVATE DEMONSTRATION REQUEST FOR 4K IP SMART ARRAYS, BIOMETRIC TURNSTILES, THERMAL FIRE SENSORS, AND OFF-GRID TELEMETRY AT Nagpur HQ.
                    </p>

                    <div className="space-y-1">
                        <label className={formStyle.label}>Your Full Name</label>
                        <input type="text" required placeholder="e.g. Ramesh Patil" value={bookingForm.name} onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))} className={formStyle.input} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className={formStyle.label}>Mobile Number</label>
                            <input type="tel" required placeholder="e.g. +91 98765 43210" value={bookingForm.phone} onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))} className={formStyle.input} />
                        </div>
                        <div className="space-y-1">
                            <label className={formStyle.label}>Corporate Email</label>
                            <input type="email" placeholder="e.g. name@company.com" value={bookingForm.email} onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))} className={formStyle.input} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className={formStyle.label}>Preferred Date</label>
                            <input type="date" required value={bookingForm.date} onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))} className={formStyle.input} />
                        </div>
                        <div className="space-y-1">
                            <label className={formStyle.label}>Preferred Time Slot</label>
                            <input type="time" required value={bookingForm.time} onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))} className={formStyle.input} />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className={formStyle.label}>Primary Protection Field</label>
                        <select value={bookingForm.sector} onChange={(e) => setBookingForm(prev => ({ ...prev, sector: e.target.value }))} className={formStyle.input}>
                            <option value="residential">Residential Home CCTV &amp; Automation</option>
                            <option value="commercial">Commercial Space Attendance &amp; Security</option>
                            <option value="healthcare">Healthcare Wards Monitoring</option>
                            <option value="banking">Financial Institution Redundant Vault Grids</option>
                            <option value="industrial">Heavy Machinery PPE &amp; Intrusion Systems</option>
                        </select>
                    </div>

                    <button type="submit" className="w-full bg-[#FF5A00] hover:bg-[#E04E00] text-white font-bold text-[10px] uppercase tracking-widest py-3.5 border border-[#FF5A00] transition-all rounded-none">
                        Confirm VIP Security Pass
                    </button>
                </form>) : (<div className="p-6 space-y-6 text-center font-mono">
                    <div className="w-12 h-12 bg-green-950/20 border border-green-500 rounded-none flex items-center justify-center mx-auto animate-pulse">
                        <Ticket className="h-6 w-6 text-green-400" />
                    </div>

                    <div className="space-y-1">
                        <h4 className="font-headline font-bold text-base text-white uppercase tracking-wider">Reservation Verified</h4>
                        <p className="text-[11px] text-on-surface-variant max-w-sm mx-auto uppercase">
                            Visitor token compiled on the SPE primary grid. Please present this pass on arrival.
                        </p>
                    </div>

                    <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 text-left font-mono space-y-3 max-w-md mx-auto text-[11px] relative rounded-none">
                        <div className="absolute top-3 right-3 text-[8px] border border-green-500/40 text-green-400 px-1.5 py-0.5 rounded-none uppercase tracking-widest font-bold">VERIFIED PASS</div>

                        <div>
                            <span className="text-[8px] text-[#888888] uppercase block">Ticket Identifie</span>
                            <span className="text-white font-bold">{bookingTicket?.ticketNo}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <span className="text-[8px] text-[#888888] uppercase block">Scheduled Visitor</span>
                                <span className="text-white font-semibold truncate block uppercase">{bookingTicket?.name}</span>
                            </div>
                            <div>
                                <span className="text-[8px] text-[#888888] uppercase block">Assigned Advisor</span>
                                <span className="text-[#FF5A00] font-semibold block uppercase">SPE Sentinel Node</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 border-t border-[#2A2A2A] pt-2">
                            <div>
                                <span className="text-[8px] text-[#888888] uppercase block">Reservation Date</span>
                                <span className="text-white font-bold">{bookingTicket?.date}</span>
                            </div>
                            <div>
                                <span className="text-[8px] text-[#888888] uppercase block">Reservation Time</span>
                                <span className="text-white font-bold">{bookingTicket?.time}</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setShowroomModalOpen(false)} className="bg-[#121212] hover:bg-white/5 text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-6 border border-[#2A2A2A] transition-all rounded-none">
                        Close &amp; Exit Verification
                    </button>
                </div>)}
            </motion.div>
        </div>
    )
}

export default ShowroomExperience