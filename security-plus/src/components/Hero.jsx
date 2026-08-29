import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import cctvHeroBg from "../assets/images/sky_blue_hero_bg_1782755439624.jpg";
import heroSlide from "../json/heroSlide.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/slide/cctv-mall.png"

const Hero = ({ heroSlideIndex, setHeroSlideIndex, setShowroomExperience, setBookingConfirmed, setBookingForm, setShowroomModalOpen, }) => {

  const heroStats = [
    {
      value: 20,
      suffix: "+",
      label: "Years of Excellence",
      key: "years",
      wrapperClass: "rounded-t-2xl md:rounded-t-none md:rounded-l-2xl",
    },
    {
      value: 40,
      suffix: "+",
      label: "Premium Brands",
      key: "brands",
      wrapperClass: "",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Happy Customers",
      key: "customers",
      wrapperClass: "rounded-b-2xl md:rounded-b-none md:rounded-r-2xl",
    },
  ];

  function useCountUp(target, duration = 1200) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      let raf;
      let startTime;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 11);
        const current = Math.floor(progress * (target - start) + start);
        setCount(current);

        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      }

      if (typeof target === "number" && target > 0) {
        setCount(0);
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }

      return () => raf && cancelAnimationFrame(raf);
    }, [target, duration]);

    return count;
  }

  const triggerShowroomModal = () => {
    setBookingConfirmed(false);
    // setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" } [fluentform id="4"]);
    setShowroomModalOpen(true);
  };


  const [showroomExp, SetShowroomExp] = useState(null)
  const handleshowroomExperienceSubmit = async (e) => {
    e.preventDefault();

    setBookingConfirmed(false);
    setShowroomModalOpen(true);

    if (
      !showroomExp.name ||
      !showroomExp.phone ||
      !showroomExp.email ||
      !showroomExp.date ||
      !showroomExp.time ||
      !showroomExp.sector
    ) {
      setToastMessage("Please fill out all required fields.");
      return;
    }

    const fields = new URLSearchParams();

    fields.append("name", showroomExp.name);
    fields.append("phone", showroomExp.phone);
    fields.append("email", showroomExp.email);
    fields.append("date", showroomExp.date);
    fields.append("time", showroomExp.time);
    fields.append("sector", showroomExp.sector);

    const formData = new FormData();

    formData.append("action", "fluentform_submit");
    formData.append("form_id", "4");
    formData.append("data", fields.toString());

    try {
      const response = await axios.post(
        "https://woston.in/wp-admin/admin-ajax.php",
        formData
      );

      console.log("form data ",)
      console.log("Forms response:", response.data);

      if (response.data?.success) {
        setToastMessage("Appointment request submitted successfully!");
        setContactForm({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          sector: "residential",
        });
      } else {
        console.error("Fluent Forms error:", response.data);

        setToastMessage(
          response.data?.data?.message ||
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
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden border-b border-slate-900 bg-[#070913]">
      <div className="relative z-20 container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center">
        <div className="relative min-h-115 md:min-h-105 lg:min-h-110 flex items-center">
          <AnimatePresence mode="wait">
            {heroSlide.map((slide, idx) =>
              heroSlideIndex === idx && (
                <motion.div
                  key={`slide-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 justify-between gap-12 items-center w-full"
                >
                  <div className="md:col-span-7 col-span-6 text-left flex flex-col items-start space-y-6">
                    <div
                      className="bg-primary/10 px-4 text-[9px] py-1.5 inline-flex items-center gap-2 border border-primary/20 rounded-full"
                      style={
                        slide.category?.includes("EMERALD")
                          ? { backgroundColor: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.2)" }
                          : slide.category?.includes("BIOMETRICS")
                            ?
                            { backgroundColor: "rgba(99,102,241,0.1)", borderColor: "rgba(99,102,241,0.2)" }
                            : slide.category?.includes("NETWORK")
                              ?
                              { backgroundColor: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)" }
                              : slide.category?.includes("SMART HOME")
                                ?
                                { backgroundColor: "rgba(244,63,94,0.1)", borderColor: "rgba(244,63,94,0.2)" }
                                : slide.category?.includes("POWER")
                                  ? { backgroundColor: "rgba(6,182,212,0.1)", borderColor: "rgba(6,182,212,0.2)" }
                                  : undefined
                      }
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full animate-pulse`}
                        style={{
                          backgroundColor:
                            idx === 1
                              ? "#10b981"
                              : idx === 2
                                ? "#6366f1"
                                : idx === 3
                                  ? "#f59e0b"
                                  : idx === 4
                                    ? "#f43f5e"
                                    : idx === 5
                                      ? "#06b6d4"
                                      : "#38bdf8",
                        }}
                      ></div>

                      <span
                        className="font-sans font-bold text-[9px] tracking-wider uppercase"
                        style={{
                          color:
                            idx === 1
                              ? "#34d399"
                              : idx === 2
                                ? "#a5b4fc"
                                : idx === 3
                                  ? "#fbbf24"
                                  : idx === 4
                                    ? "#fb7185"
                                    : idx === 5
                                      ? "#67e8f9"
                                      : "#38bdf8",
                        }}
                        dangerouslySetInnerHTML={{ __html: slide.category }}
                      />
                    </div>


                    <h1 className="font-sans text-[3rem] md:text-[5rem] font-extrabold tracking-tight text-white leading-tight uppercase"
                      dangerouslySetInnerHTML={{ __html: slide.title }} />

                    <p className="text-sm md:text-base w-full text-slate-300 max-w-2xl leading-relaxed font-sans">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      {slide.btnLink && slide.btnLink !== "none" && (
                        <Link to={`${slide.btnLink}`} className={`${idx === 1
                          ? "bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/20"
                          : idx === 2
                            ? "bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
                            : idx === 3
                              ? "bg-amber-600 hover:bg-amber-500 shadow-lg shadow-amber-500/20"
                              : idx === 4
                                ? "bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-500/20"
                                : idx === 5
                                  ? "bg-cyan-600 hover:bg-cyan-500 shadow-lg shadow-cyan-500/20"
                                  : "bg-primary hover:bg-primary shadow-lg shadow-primary/20"
                          } text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer`}
                        >
                          {slide.btnText}
                        </Link>
                      )}

                      {slide.btnText2 && (
                        <button
                          onClick={triggerShowroomModal}
                          className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm"
                        >
                          <Calendar
                            className={`h-4 w-4 ${idx === 1
                              ? "text-emerald-400"
                              : idx === 2
                                ? "text-indigo-400"
                                : idx === 3
                                  ? "text-amber-400"
                                  : idx === 4
                                    ? "text-rose-400"
                                    : idx === 5
                                      ? "text-cyan-400"
                                      : "text-sky-400"
                              }`}
                          />
                          {slide.btnText2}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className={`col-span-6 md:col-span-5`}>
                    <div className={`relative w-full float-end max-w-96 aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 flex  flex-col justify-center items-center overflow-hidden`}  >
                      {slide.image ? (
                        <img src={slide.image !== "" ? new URL(`../assets/slide/${slide.image}`, import.meta.url).href : "https://noviatic.com/wp-content/uploads/2026/04/placeholder-image-2-1.jpg"} alt={"Slide " + idx + "image"} className="w-full h-full object-cover" />
                      ) : null}

                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-900/60 max-w-5xl mx-auto w-full">
          <div className="flex gap-2.5">
            {[0, 1, 2, 3, 4, 5].map((idx) => (<button key={idx} onClick={() => setHeroSlideIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${heroSlideIndex === idx
              ? "w-8 bg-primary"
              : "w-2.5 bg-slate-800 hover:bg-slate-700"}`} title={`Go to slide ${idx + 1}`} />))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-sky-50/95 backdrop-blur-md border border-sky-100 w-full max-w-5xl divide-y md:divide-y-0 md:divide-x divide-sky-100 rounded-2xl shadow-lg mt-16 mx-auto">
          {
            heroStats.map((elem, idx) => (
              <div key={idx} className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-700 mb-2">
                  {useCountUp(elem.value)}{elem.suffix}
                </span>
                <span className="font-sans font-semibold text-[11px] text-sky-900/80 tracking-wider uppercase">{elem.label}</span>
              </div>
            ))
          }
        </div>

      </div>
    </section >);
};


export default Hero;