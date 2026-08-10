import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
export function AuthSection({ activeTab, setActiveTab, registeredCustomers, setRegisteredCustomers, setCustomerUser, setToastMessage }) {
  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  // Forgot Password states
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");
  // Signup states
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    if (!loginEmail || !loginPassword) {
      setLoginError("Please enter both email and password.");
      return;
    }
    const found = registeredCustomers.find(c => c.email.toLowerCase() === loginEmail.toLowerCase());
    if (found && found.password === loginPassword) {
      setCustomerUser({ name: found.name, email: found.email, phone: found.phone });
      setToastMessage(`Welcome back, ${found.name}!`);
      setLoginEmail("");
      setLoginPassword("");
      setActiveTab("products");
    }
    else {
      setLoginError("Invalid email or password. Please try again.");
    }
  };
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setForgotPasswordError("");
    setForgotPasswordMessage("");
    if (!forgotPasswordEmail) {
      setForgotPasswordError("Please enter your registered email address.");
      return;
    }
    const found = registeredCustomers.find(c => c.email.toLowerCase() === forgotPasswordEmail.trim().toLowerCase());
    if (found) {
      setForgotPasswordMessage(`An authentication token and reset instructions have been dispatched to ${found.email}. For demonstration convenience, your active portal credential passcode is '${found.password}'.`);
      setToastMessage(`Reset link triggered for ${found.email}!`);
    }
    else {
      setForgotPasswordError("No active customer profile matches this email address. Please verify your address or register.");
    }
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setSignUpError("");
    if (!signUpName || !signUpEmail || !signUpPassword) {
      setSignUpError("Please fill out all required fields.");
      return;
    }
    if (signUpPassword !== signUpConfirmPassword) {
      setSignUpError("Passwords do not match.");
      return;
    }
    if (signUpPassword.length < 5) {
      setSignUpError("Password must be at least 5 characters.");
      return;
    }
    const exists = registeredCustomers.some(c => c.email.toLowerCase() === signUpEmail.toLowerCase());
    if (exists) {
      setSignUpError("An account with this email already exists.");
      return;
    }
    const newCust = {
      name: signUpName,
      email: signUpEmail,
      phone: signUpPhone || "08048102415",
      password: signUpPassword
    };
    setRegisteredCustomers([...registeredCustomers, newCust]);
    setCustomerUser({ name: newCust.name, email: newCust.email, phone: newCust.phone });
    setToastMessage(`Welcome to SPE, ${signUpName}! Account successfully created.`);
    setSignUpName("");
    setSignUpEmail("");
    setSignUpPhone("");
    setSignUpPassword("");
    setSignUpConfirmPassword("");
    setActiveTab("products");
  };
  return (<div className="w-full px-8 py-16 font-sans">
    <div className="max-w-md mx-auto">
      {activeTab === "login" && (<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="bg-white p-8 md:p-10 border border-slate-200 rounded-3xl shadow-xl space-y-6">
        {!isForgotPasswordMode ? (<>
          <div className="text-center space-y-1">
            <span className="text-[10px] text-primary font-extrabold uppercase tracking-widest block font-sans">
              [ CLIENT PORTAL ACCESS ]
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-sans tracking-tight">
              Welcome Back
            </h2>
            <p className="text-xs text-slate-400 leading-normal font-sans">
              Please authenticate to access your customer dashboard, inquiry specs, and support tickets.
            </p>
          </div>

          {loginError && (<div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-xs font-medium font-sans">
            ⚠️ {loginError}
          </div>)}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
                Email Address
              </label>
              <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="e.g. manager@securityplus.in" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
                  Account Password
                </label>
                <button type="button" onClick={() => {
                  setIsForgotPasswordMode(true);
                  setForgotPasswordEmail(loginEmail);
                  setForgotPasswordError("");
                  setForgotPasswordMessage("");
                }} className="text-[10px] text-primary hover:text-primary font-bold hover:underline font-sans cursor-pointer bg-transparent border-0 outline-none">
                  Forgot Password?
                </button>
              </div>
              <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="••••••••••••" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary text-white font-sans font-bold text-xs tracking-widest uppercase py-3.5 rounded-2xl border border-primary hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-primary/10">
              Authenticate Account
            </button>
          </form>

          <div className="text-center pt-2 space-y-2">
            <p className="text-xs text-slate-500 font-sans">
              Don&apos;t have a secure profile?{" "}
              <button onClick={() => setActiveTab("signup")} className="text-primary hover:text-primary font-bold underline cursor-pointer bg-transparent border-0 outline-none">
                Register Account
              </button>
            </p>
            <p className="text-[10px] text-slate-400 font-mono">
              Demo customer login: <span className="font-bold text-slate-600">info@securityplus.in</span> / <span className="font-bold text-slate-600">customer123</span>
            </p>
          </div>
        </>) : (<>
          <div className="text-center space-y-1">
            <span className="text-[10px] text-primary font-extrabold uppercase tracking-widest block font-sans">
              [ PORTAL RECOVERY ]
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-sans tracking-tight">
              Reset Password
            </h2>
            <p className="text-xs text-slate-400 leading-normal font-sans">
              Enter your registered email address and we will trigger a secure password reset link.
            </p>
          </div>

          {forgotPasswordError && (<div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-xs font-medium font-sans">
            ⚠️ {forgotPasswordError}
          </div>)}

          {forgotPasswordMessage ? (<div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-5 rounded-2xl text-xs font-sans space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 font-bold">
              <CheckCircle2 className="h-4.5 w-4.5" />
              <span>Reset Link Dispatched</span>
            </div>
            <p className="leading-relaxed text-slate-600">
              {forgotPasswordMessage}
            </p>
            <button onClick={() => {
              setIsForgotPasswordMode(false);
              setForgotPasswordMessage("");
            }} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-[10px] tracking-wider uppercase py-2.5 rounded-xl transition-all cursor-pointer text-center block">
              Return to Login
            </button>
          </div>) : (<form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
                Registered Email Address
              </label>
              <input type="email" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} placeholder="e.g. client@securityplus.in" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary text-white font-sans font-bold text-xs tracking-widest uppercase py-3.5 rounded-2xl border border-primary hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-primary/10">
              Trigger Reset Link
            </button>

            <button type="button" onClick={() => {
              setIsForgotPasswordMode(false);
              setForgotPasswordError("");
              setForgotPasswordMessage("");
            }} className="w-full text-slate-500 hover:text-slate-800 font-sans font-bold text-xs py-1 transition-all cursor-pointer text-center block bg-transparent border-0 outline-none">
              Cancel and Return
            </button>
          </form>)}
        </>)}
      </motion.div>)}

      {activeTab === "signup" && (<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }} className="bg-white p-8 md:p-10 border border-slate-200 rounded-3xl shadow-xl space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] text-primary font-extrabold uppercase tracking-widest block font-sans">
            [ CREATE SECURE CLIENT CARD ]
          </span>
          <h2 className="text-2xl font-bold text-slate-900 font-sans tracking-tight">
            Register Account
          </h2>
          <p className="text-xs text-slate-400 leading-normal font-sans">
            Join SPE CCTV Mall to access real-time specifications, customize security models, and save dynamic layouts.
          </p>
        </div>

        {signUpError && (<div className="bg-rose-50 border border-rose-100 text-rose-600 px-4 py-3 rounded-xl text-xs font-medium font-sans">
          ⚠️ {signUpError}
        </div>)}

        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
              Your Full Name
            </label>
            <input type="text" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} placeholder="e.g. Rahul Patil" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
              Email Address
            </label>
            <input type="email" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} placeholder="e.g. client@securityplus.in" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
              Phone Number (Optional)
            </label>
            <input type="tel" value={signUpPhone} onChange={(e) => setSignUpPhone(e.target.value)} placeholder="e.g. 08048102415" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
                Password
              </label>
              <input type="password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block font-sans">
                Confirm Password
              </label>
              <input type="password" value={signUpConfirmPassword} onChange={(e) => setSignUpConfirmPassword(e.target.value)} placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:bg-white text-slate-800 text-xs px-4 py-3 rounded-xl outline-none transition-all font-sans" required />
            </div>
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-primary text-white font-sans font-bold text-xs tracking-widest uppercase py-3.5 rounded-2xl border border-primary hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-primary/10">
            Create Customer Account
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-xs text-slate-500 font-sans">
            Already registered?{" "}
            <button onClick={() => setActiveTab("login")} className="text-primary hover:text-primary font-bold underline cursor-pointer bg-transparent border-0 outline-none">
              Sign In Here
            </button>
          </p>
        </div>
      </motion.div>)}
    </div>
  </div>);
}
