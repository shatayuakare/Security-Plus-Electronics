return (
      <>
            <div className="text-slate-900 antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen font-sans relative border-0 border-primary  bg-red-500">
                  <SEOManager activeTab={activeTab} />

                  <div className="absolute inset-0 pointer-events-none z-0 border-x border-slate-100 max-w-7xl mx-auto"></div>

                  <AnimatePresence>
                        {toastMessage && (<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 w-auto md:w-120 bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-slate-800 flex items-start gap-3 shadow-2xl">

                              <Sparkles className="h-4 w-4 text-sky-400 shrink-0 mt-0.5 animate-pulse" />
                              <div className="flex-1 min-w-0">
                                    <span className="font-mono font-bold text-[9px] tracking-widest text-sky-400 uppercase block">[ SYSTEM SENTINEL GUARD ]</span>
                                    <p className="text-[11px] text-slate-300 leading-normal mt-0.5 wrap-break-wordbreak">{toastMessage}</p>
                              </div>
                              <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white shrink-0 cursor-pointer p-0.5">
                                    <X className="h-3.5 w-3.5" />
                              </button>
                        </motion.div>)}
                  </AnimatePresence>







                  <Header activeTab={activeTab} setActiveTab={setActiveTab} customerUser={customerUser} setCustomerUser={setCustomerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} adminEmails={adminEmails} setAdminLoginOpen={setAdminLoginOpen} setToastMessage={setToastMessage} PRODUCTS_DATA={PRODUCTS_DATA} getProductImageUrls={getProductImageUrls} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />



                  <div className={activeTab === "home" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>
                        {activeTab === "home" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                              <Hero heroSlideIndex={heroSlideIndex} setHeroSlideIndex={setHeroSlideIndex} setActiveTab={setActiveTab} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

                              <BrandCarousel />

                              <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} setBlogCategoryFilter={setBlogCategoryFilter} setActiveTab={setActiveTab} />


                              <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} showroomScanStatus={showroomScanStatus} setShowroomScanStatus={setShowroomScanStatus} activeShowroomHotspot={activeShowroomHotspot} setActiveShowroomHotspot={setActiveShowroomHotspot} setToastMessage={setToastMessage} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

                              <ReelSection />

                              <motion.section {...fadeInUp} className="py-24 px-8 relative z-20 border-b border-slate-100 bg-slate-50">
                                    <div className="max-w-4xl mx-auto text-center">
                                          <span className="font-sans font-bold text-[10px] text-primary tracking-widest uppercase block mb-3">[ OUR VISION &amp; SLA VALUES ]</span>
                                          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 uppercase">Our Vision &amp; Mission</h2>
                                          <div className="h-0.5 w-20 bg-primary mx-auto mb-8"></div>
                                          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                                                Deliver innovative, reliable, and complete security solutions with exceptional customer support. We custom-engineer systems that protect Nagpur's leading commercial, financial, and industrial properties with absolute technological integrity.
                                          </p>
                                    </div>
                              </motion.section>

                              <ScrollableTestimonials />
                              <OurThought />
                              {/* <OurBlogs /> */}
                              {/* <OurLocation contactData={contactData} /> */}
                              <FAQSection />
                        </motion.div>)}
                        {
                              activeTab === "ecosystem"
                              &&
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                    {/* ECOSYSTEM / SOLUTIONS GRID SECTION */}
                                    <section className="py-24 px-8 bg-[#08090C] relative z-20 border-b border-[#2A2A2A]">
                                          <div className="max-w-7xl mx-auto">
                                                <motion.div {...fadeInUp} className="text-center mb-16">
                                                      <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 
              ">[ 03 // MODULARSURVEILLANCE ]</span>
                                                      <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Our Ecosystem</h2>
                                                      <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">Click on any core ecosystem hardware component to launch its interactive specifications, compatible models, and live virtual system simulator.</p>
                                                </motion.div>

                                                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-[#0F0F0F] border border-[#2A2A2A]">
                                                      {SOLUTIONS_DATA.map((solution, idx) => (<motion.div key={solution.id} variants={staggerItem} whileHover={{ scale: 1.05 }} onClick={() => setSelectedSolution(solution)} className="p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer border border-[#2A2A2A] hover:bg-[#121212] relative">
                                                            <span className="absolute top-2 left-2 text-[9px] font-mono text-[#888888]">[ 0{idx + 1} ]</span>
                                                            <div className="p-4 bg-[#121212] border border-[#2A2A2A] mb-4 group-hover:border-[#FF5A00] transition-all duration-300">
                                                                  {getIcon(solution.iconName, "h-8 w-8 text-[#FF5A00] group-hover:text-white")}
                                                            </div>
                                                            <span className="font-headline font-bold text-xs uppercase tracking-wider text-white mb-2">{solution.title}</span>
                                                            <span className="text-[9px] text-[#FF5A00] font-mono tracking-widest uppercase group-hover:text-white flex items-center gap-1">
                                                                  LAUNCH SIM <ChevronRight className="h-3 w-3" />
                                                            </span>
                                                      </motion.div>))}
                                                </motion.div>
                                          </div>
                                    </section>

                                    <SectorsWeProtect selectedSector={selectedSector} setSelectedSector={setSelectedSector} setCalcInput={setCalcInput} />

                                    <SurveillancePlanner calcInput={calcInput} setCalcInput={setCalcInput} calcResult={calcResult} setCalcResult={setCalcResult} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

                              </motion.div>
                        }

                        {
                              activeTab === "gallery"
                              &&
                              <GallerySection setLightboxIndex={setLightboxIndex} galleryItems={GALLERY_ITEMS} />
                        }

                        {activeTab === "careers" && (<CareersPage careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />)}

                        {activeTab === "products" && (<ProductsCatalog products={products} productCategories={productCategories} customerUser={customerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} />)}

                        {activeTab === "testimonials" && (<TestimonialsPage testimonials={testimonials} setTestimonials={setTestimonials} setToastMessage={setToastMessage} />)}

                        {activeTab === "blog" && (<BlogSection subscribers={subscribers} setSubscribers={setSubscribers} setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />)}

                        {activeTab === "about" && (<AboutUs />)}

                        {activeTab === "contact" && (<ContactUs logoData={logoData} setSupportTickets={setSupportTickets} setToastMessage={setToastMessage} />)}

                        {(activeTab === "login" || activeTab === "signup") && (<AuthSection activeTab={activeTab} setActiveTab={setActiveTab} registeredCustomers={registeredCustomers} setRegisteredCustomers={setRegisteredCustomers} setCustomerUser={setCustomerUser} setToastMessage={setToastMessage} />)}
                  </div>

                  {/* FOOTER */}
                  <Footer logoData={logoData} />
















                  {/* DETAILED INTERACTIVE SOLUTION MODAL */}
                  <AnimatePresence >
                        {selectedSolution && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl rounded-none">
                                    {/* Modal Header */}
                                    <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center shrink-0">
                                          <div className="flex items-center gap-3">
                                                {getIcon(selectedSolution.iconName, "h-6 w-6 text-[#FF5A00]")}
                                                <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider ">{selectedSolution.title}</h3>
                                          </div>
                                          <button onClick={() => setSelectedSolution(null)} className="text-on-surface-variant hover:text-white p-2 hover:bg-white/5 transition-all">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    {/* Modal Body */}
                                    <div className="p-6 overflow-y-auto flex-1 space-y-6">
                                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                {/* Left Specs & Info */}
                                                <div className="space-y-4">
                                                      <p className="text-xs text-on-surface-variant leading-relaxed font-mono uppercase">[ {selectedSolution.shortDesc} ]</p>

                                                      <div>
                                                            <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ Premium Brand Partners ]</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                  {selectedSolution.brandPartners.map((b, idx) => (<span key={idx} className="text-[10px] px-2.5 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-white font-medium font-mono uppercase">
                                                                        {b}
                                                                  </span>))}
                                                            </div>
                                                      </div>

                                                      <div>
                                                            <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ Key Hardware Capabilities ]</h4>
                                                            <ul className="space-y-2 text-xs text-on-surface-variant font-mono">
                                                                  {selectedSolution.features.map((f, idx) => (<li key={idx} className="flex items-start gap-2">
                                                                        <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                                        <span>{f}</span>
                                                                  </li>))}
                                                            </ul>
                                                      </div>
                                                </div>

                                                {/* Right Dynamic Live Interactive Simulator */}
                                                <div className="bg-[#0F0F0F] p-5 border border-[#2A2A2A] space-y-4 flex flex-col justify-between rounded-none">
                                                      <div className="flex justify-between items-center">
                                                            <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase flex items-center gap-1.5 font-mono">
                                                                  <Terminal className="h-4 w-4 animate-pulse" />
                                                                  Virtual Hardware Simulator
                                                            </span>
                                                            <span className="text-[9px] bg-blue-950/40 text-blue-400 border border-blue-900 font-mono px-2 py-0.5">STATUS: ONLINE</span>
                                                      </div>

                                                      {/* DYNAMIC CONTENT PER SYSTEM TYPE */}
                                                      {selectedSolution.id === "cctv" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                            <div className={`aspect-video overflow-hidden border border-[#2A2A2A] relative flex items-center justify-center rounded-none ${cctvNightMode ? "bg-[#111e11]" : "bg-[#0b141e]"}`}>
                                                                  <div className="absolute top-2 left-2 text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 flex items-center gap-1">
                                                                        <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
                                                                        CAM01 - LIVE FEED ({cctvRes})
                                                                  </div>

                                                                  {/* Feed Visual representation */}
                                                                  {cctvNightMode ? (<div className="text-center p-4">
                                                                        <Eye className="h-6 w-6 text-green-400 mx-auto mb-2 animate-pulse" />
                                                                        <span className="text-xs font-mono text-green-400 block uppercase">Night Vision: Active (0 Lux IR)</span>
                                                                        <span className="text-[9px] text-green-500/70 font-mono block">ColorVu Color-Recovery Active</span>
                                                                  </div>) : (<div className="text-center p-4">
                                                                        <Video className="h-6 w-6 text-[#FF5A00] mx-auto mb-2" />
                                                                        <span className="text-xs font-mono text-[#FF5A00] block uppercase">Day Mode: Optical Crisp</span>
                                                                        <span className="text-[9px] text-on-surface-variant/70 font-mono block">Daylight Starlight Sensors Online</span>
                                                                  </div>)}

                                                                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/50">
                                                                        {cctvFps} FPS | H.265+ Codec
                                                                  </div>
                                                            </div>

                                                            <div className="space-y-3 bg-[#121212] p-3 border border-[#2A2A2A] rounded-none">
                                                                  <div className="flex justify-between items-center font-mono text-xs">
                                                                        <span className="text-on-surface-variant font-medium">Resolution Preset</span>
                                                                        <div className="flex gap-1.5">
                                                                              {["1080p", "4K", "8K"].map(res => (<button key={res} onClick={() => setCctvRes(res)} className={`px-2 py-0.5 text-[9px] font-mono rounded-none ${cctvRes === res ? "bg-[#FF5A00] text-white" : "bg-[#0F0F0F] border border-[#2A2A2A] text-on-surface-variant hover:text-white"}`}>
                                                                                    {res}
                                                                              </button>))}
                                                                        </div>
                                                                  </div>

                                                                  <div className="flex justify-between items-center pt-2 border-t border-[#2A2A2A] font-mono text-xs">
                                                                        <span className="text-on-surface-variant font-medium">Ambient Light</span>
                                                                        <button onClick={() => setCctvNightMode(!cctvNightMode)} className="bg-[#0F0F0F] hover:bg-white/5 text-[9px] px-3 py-1 text-white flex items-center gap-1.5 border border-[#2A2A2A] rounded-none font-mono uppercase">
                                                                              <RefreshCw className="h-3 w-3" />
                                                                              Toggle Night (0 Lux)
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </div>)}

                                                      {selectedSolution.id === "ptz_cameras" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                            <div className="aspect-video overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] relative flex flex-col justify-between p-3 font-mono rounded-none">
                                                                  <div className="flex justify-between text-[9px] text-[#FF5A00]">
                                                                        <span>CAM02 - PTZ SPEED DOME TELEMETRY</span>
                                                                        <span className="animate-pulse">● MOTOR ONLINE</span>
                                                                  </div>

                                                                  {/* Active scanning wireframes */}
                                                                  <div className="flex-1 flex items-center justify-center relative">
                                                                        {aiActiveScan === "face" && (<div className="border border-[#FF5A00] w-24 h-24 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                                                                              <span className="text-[8px] text-[#FF5A00] bg-[#FF5A00]/10 block px-1 self-start">HORIZONTAL SWEEP</span>
                                                                              <span className="text-[8px] text-white self-end">PAN: 360°</span>
                                                                        </div>)}
                                                                        {aiActiveScan === "vehicle" && (<div className="border border-green-500 w-32 h-20 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                                                                              <span className="text-[8px] text-green-400 bg-green-400/10 block px-1 self-start">OPTICAL FOCUS</span>
                                                                              <span className="text-[8px] text-white self-end">ZOOM: 45x</span>
                                                                        </div>)}
                                                                        {aiActiveScan === "tripwire" && (<div className="w-full h-full relative flex items-center justify-center">
                                                                              <div className="absolute w-11/12 h-11/12 border border-red-500/20 rounded-none animate-ping"></div>
                                                                              <div className="border border-red-500 w-24 h-16 rounded-none relative flex flex-col justify-between p-1">
                                                                                    <span className="text-[8px] text-red-500 bg-red-950 px-1 border border-red-500 self-start">LASER IR ON</span>
                                                                                    <span className="text-[8px] text-white self-end">RANGE: 150M</span>
                                                                              </div>
                                                                        </div>)}
                                                                        {aiActiveScan === "safety" && (<div className="border border-orange-400 w-28 h-20 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                                                                              <span className="text-[8px] text-orange-400 bg-orange-400/10 block px-1 self-start">PATROL ACTIVE</span>
                                                                              <span className="text-[8px] text-white self-end">ROUTE #2</span>
                                                                        </div>)}
                                                                        {!aiActiveScan && (<span className="text-[10px] text-on-surface-variant font-mono">Ready. Click PTZ controls below to test motors.</span>)}
                                                                  </div>

                                                                  <div className="text-[8px] text-on-surface-variant max-h-[40px] overflow-hidden leading-tight border-t border-[#2A2A2A] pt-1">
                                                                        {aiScanLogs.map((l, idx) => (<div key={idx} className="truncate">&gt; {l}</div>))}
                                                                  </div>
                                                            </div>

                                                            {/* Interactive testing buttons */}
                                                            <div className="grid grid-cols-2 gap-2 font-mono">
                                                                  <button onClick={() => triggerAiScan("face")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                        Pan 360° Sweep
                                                                  </button>
                                                                  <button onClick={() => triggerAiScan("vehicle")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                        Zoom 45x Lens
                                                                  </button>
                                                                  <button onClick={() => triggerAiScan("tripwire")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                        Laser Night IR
                                                                  </button>
                                                                  <button onClick={() => triggerAiScan("safety")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                        Run Patrol Tour
                                                                  </button>
                                                            </div>
                                                      </div>)}

                                                      {selectedSolution.id === "networking" && (<div className="space-y-4 flex-1 flex flex-col justify-center">
                                                            <div className="aspect-video overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] p-4 flex flex-col justify-between rounded-none">
                                                                  <span className="text-[9px] font-mono text-[#FF5A00] uppercase">[ Active Topology Mesh ]</span>

                                                                  <div className="flex justify-between items-center relative my-4 px-4">
                                                                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#FF5A00]/40 z-0"></div>

                                                                        <div className="relative z-10 flex flex-col items-center">
                                                                              <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                                    <Video className="h-4 w-4" />
                                                                              </div>
                                                                              <span className="text-[8px] font-mono mt-1">4K Cam</span>
                                                                        </div>

                                                                        <div className="relative z-10 flex flex-col items-center">
                                                                              <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                                    <Network className="h-4 w-4" />
                                                                              </div>
                                                                              <span className="text-[8px] font-mono mt-1">PoE Switch</span>
                                                                        </div>

                                                                        <div className="relative z-10 flex flex-col items-center">
                                                                              <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                                    <HardDrive className="h-4 w-4" />
                                                                              </div>
                                                                              <span className="text-[8px] font-mono mt-1">NVR Unit</span>
                                                                        </div>

                                                                        <div className="relative z-10 flex flex-col items-center">
                                                                              <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                                    <Router className="h-4 w-4" />
                                                                              </div>
                                                                              <span className="text-[8px] font-mono mt-1">Fiber Wan</span>
                                                                        </div>
                                                                  </div>

                                                                  <div className="bg-[#121212] p-2.5 border border-[#2A2A2A] text-[8px] font-mono text-on-surface-variant flex justify-between rounded-none">
                                                                        <span>SFP Fiber Bandwidth: 10 Gbps</span>
                                                                        <span className="text-green-400">Packet Loss: 0.00%</span>
                                                                  </div>
                                                            </div>

                                                            <p className="text-[9px] text-on-surface-variant text-center font-mono">SPE optical backplanes support up to 1000 simultaneous streams with active routing separation.</p>
                                                      </div>)}

                                                      {selectedSolution.id === "power" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                            <div className="bg-[#0F0F0F] p-4 border border-[#2A2A2A] space-y-3 rounded-none">
                                                                  <span className="text-[9px] font-mono text-[#FF5A00] uppercase block">[ Redundant Grid Run-Time Calculator ]</span>

                                                                  <div className="space-y-1">
                                                                        <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                                                                              <span>Load (Number of Cameras)</span>
                                                                              <span className="font-bold text-white font-mono">{powerCamCount} Cameras</span>
                                                                        </div>
                                                                        <input type="range" min="2" max="32" value={powerCamCount} onChange={(e) => setPowerCamCount(parseInt(e.target.value))} className="w-full accent-[#FF5A00] bg-[#121212]" />
                                                                  </div>

                                                                  <div className="space-y-1">
                                                                        <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                                                                              <span>Cutout Protection Hours</span>
                                                                              <span className="font-bold text-white font-mono">{powerBackupHours} Hours</span>
                                                                        </div>
                                                                        <input type="range" min="2" max="24" step="2" value={powerBackupHours} onChange={(e) => setPowerBackupHours(parseInt(e.target.value))} className="w-full accent-[#FF5A00] bg-[#121212]" />
                                                                  </div>

                                                                  <div className="p-3 bg-[#121212] border border-[#2A2A2A] text-center mt-2 rounded-none">
                                                                        <span className="text-[8px] text-on-surface-variant uppercase block font-bold font-mono">[ Recommended Online UPS Capacity ]</span>
                                                                        <span className="text-lg font-mono font-bold text-[#FF5A00]">
                                                                              {Math.ceil(((powerCamCount * 15 + 40) / 0.7) * 1.35 * (powerBackupHours / 4))} VA
                                                                        </span>
                                                                        <span className="text-[8px] text-on-surface-variant block mt-1 font-mono">Estimating {Math.ceil(powerCamCount * 1.5 * powerBackupHours)} Ah backup battery pack requirement</span>
                                                                  </div>
                                                            </div>
                                                      </div>)}

                                                      {selectedSolution.id === "locks" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                            <div className="bg-[#0F0F0F] p-4 border border-[#2A2A2A] text-center font-mono space-y-4 rounded-none">
                                                                  <span className="text-[9px] text-[#FF5A00] uppercase block tracking-wider">[ Access Lock Terminal Console ]</span>

                                                                  <div className="flex justify-center gap-2">
                                                                        <button onClick={() => { setSelectedLockMethod("fingerprint"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "fingerprint" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                                                                              <Fingerprint className="h-5 w-5" />
                                                                        </button>
                                                                        <button onClick={() => { setSelectedLockMethod("facial"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "facial" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                                                                              <Scan className="h-5 w-5" />
                                                                        </button>
                                                                        <button onClick={() => { setSelectedLockMethod("card"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "card" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                                                                              <Key className="h-5 w-5" />
                                                                        </button>
                                                                  </div>

                                                                  <div className="h-28 flex flex-col items-center justify-center p-3 bg-[#121212] border border-[#2A2A2A] relative overflow-hidden rounded-none">
                                                                        {lockStatus === "idle" && (<div className="text-center">
                                                                              <LockKeyhole className="h-6 w-6 text-on-surface-variant mx-auto mb-1" />
                                                                              <span className="text-[10px] text-on-surface-variant">Lock Engaged. Click authenticate.</span>
                                                                        </div>)}

                                                                        {lockStatus === "scanning" && (<div className="text-center space-y-2">
                                                                              <div className="w-8 h-8 border-2 border-[#FF5A00] border-t-transparent rounded-full animate-spin mx-auto"></div>
                                                                              <span className="text-[9px] text-[#FF5A00] block uppercase tracking-widest animate-pulse">Scanning Biometrics...</span>
                                                                        </div>)}

                                                                        {lockStatus === "granted" && (<div className="text-center animate-fade-up">
                                                                              <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-1 animate-pulse" />
                                                                              <span className="text-[10px] text-green-400 block uppercase font-bold tracking-wider">ACCESS GRANTED</span>
                                                                              <span className="text-[8px] text-green-500/75">Electromagnetic Relays Released</span>
                                                                        </div>)}

                                                                        {lockStatus === "denied" && (<div className="text-center animate-fade-up">
                                                                              <AlertTriangle className="h-6 w-6 text-red-400 mx-auto mb-1" />
                                                                              <span className="text-[10px] text-red-400 block uppercase font-bold tracking-wider">ACCESS DENIED</span>
                                                                              <span className="text-[8px] text-red-500/75">Intruder Incident Logged</span>
                                                                        </div>)}
                                                                  </div>

                                                                  <button disabled={lockStatus === "scanning"} onClick={runSmartLockAuth} className="w-full bg-[#FF5A00] hover:bg-[#E04E00] disabled:bg-[#121212] text-white py-2 text-[10px] tracking-wider uppercase font-bold font-mono transition-all border border-[#FF5A00] rounded-none">
                                                                        Scan / Authenticate
                                                                  </button>
                                                            </div>
                                                      </div>)}

                                                      <div className="pt-2 border-t border-[#2A2A2A] flex justify-between items-center text-[9px] text-on-surface-variant font-mono uppercase">
                                                            <span>SPE Tech-Specs Rating</span>
                                                            <span className="font-semibold text-white">Active Grid Tested</span>
                                                      </div>
                                                </div>
                                          </div>

                                          <div>
                                                <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ {selectedSolution.techSpecTitle} ]</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                      {selectedSolution.techSpecs.map((spec, idx) => (<div key={idx} className="p-3 bg-[#0F0F0F] border border-[#2A2A2A] flex justify-between items-center text-xs rounded-none font-mono">
                                                            <span className="text-[#888888] uppercase">{spec.label}</span>
                                                            <span className="text-white font-medium text-right">{spec.value}</span>
                                                      </div>))}
                                                </div>
                                          </div>

                                          <div className="p-4 bg-orange-950/40 border border-orange-900 flex items-start gap-3 rounded-none font-mono">
                                                <ShieldCheck className="h-5 w-5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                <div className="text-xs">
                                                      <span className="font-bold text-white block mb-0.5 uppercase tracking-wider">[ SPE Specialist Recommendation ]</span>
                                                      <p className="text-on-surface-variant leading-relaxed">{selectedSolution.recommendation}</p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="p-4 border-t border-[#2A2A2A] shrink-0 bg-[#0F0F0F] flex justify-end gap-3 font-mono">
                                          <button onClick={() => setSelectedSolution(null)} className="px-5 py-2.5 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white transition-all rounded-none">
                                                Close Specification
                                          </button>
                                          <button onClick={() => {
                                                setSelectedSolution(null);
                                                setBookingConfirmed(false);
                                                setShowroomModalOpen(true);
                                          }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] transition-all rounded-none">
                                                Book Showroom Live Demo
                                          </button>
                                    </div>
                              </motion.div>
                        </div>)
                        }
                  </AnimatePresence>

                  <AnimatePresence>
                        {selectedSector && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-2xl overflow-hidden shadow-2xl rounded-none">
                                    <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center">
                                          <div className="flex items-center gap-3 font-mono">
                                                <ShieldCheck className="h-6 w-6 text-[#FF5A00]" />
                                                <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider">{selectedSector.title} Blueprint</h3>
                                          </div>
                                          <button onClick={() => setSelectedSector(null)} className="text-on-surface-variant hover:text-white">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    <div className="p-6 space-y-6 font-mono">
                                          <div>
                                                <span className="text-[9px] font-bold text-[#FF5A00] uppercase tracking-widest block mb-1">[ Target Safety Strategy ]</span>
                                                <p className="text-xs font-semibold text-white leading-relaxed uppercase">{selectedSector.focusTitle}</p>
                                          </div>

                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                      <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest">[ Required Integrations ]</h4>
                                                      <ul className="space-y-2 text-xs text-on-surface-variant">
                                                            {selectedSector.keyRequirements.map((req, idx) => (<li key={idx} className="flex items-start gap-2">
                                                                  <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                                  <span>{req}</span>
                                                            </li>))}
                                                      </ul>
                                                </div>

                                                <div className="space-y-2">
                                                      <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest">[ Hardware Topology ]</h4>
                                                      <ul className="space-y-2 text-xs text-on-surface-variant">
                                                            {selectedSector.architectures.map((arch, idx) => (<li key={idx} className="flex items-start gap-2">
                                                                  <ShieldCheck className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                                  <span>{arch}</span>
                                                            </li>))}
                                                      </ul>
                                                </div>
                                          </div>

                                          <div className="p-4 bg-red-950/20 border border-red-900/60 flex justify-between items-center text-xs rounded-none">
                                                <div>
                                                      <span className="font-bold text-white block uppercase tracking-wider">Implementation Risk & SLA</span>
                                                      <span className="text-on-surface-variant text-[10px]">Estimated completion timeline for premises.</span>
                                                </div>
                                                <span className="font-bold text-red-400">{selectedSector.implementationTimeline}</span>
                                          </div>
                                    </div>

                                    <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] flex justify-end gap-3 font-mono">
                                          <button onClick={() => setSelectedSector(null)} className="px-4 py-2 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white rounded-none">
                                                Close
                                          </button>
                                          <button onClick={() => {
                                                const type = selectedSector.id;
                                                setCalcInput(prev => ({ ...prev, premisesType: type }));
                                                setSelectedSector(null);
                                                const target = document.getElementById("calculator");
                                                if (target)
                                                      target.scrollIntoView({ behavior: "smooth" });
                                          }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-4 py-2 border border-[#FF5A00] font-bold text-[10px] tracking-wider uppercase rounded-none">
                                                Configure Architecture
                                          </button>
                                    </div>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>

                  <AnimatePresence>
                        {selectedBlog && (<div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
                              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl rounded-none">
                                    {/* Header */}
                                    <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-start bg-[#0F0F0F]">
                                          <div>
                                                <div className="flex items-center gap-2 mb-2 font-mono">
                                                      <span className="text-[9px] px-2 py-0.5 bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/30 uppercase font-bold tracking-widest">
                                                            {selectedBlog.category}
                                                      </span>
                                                      <span className="text-[9px] text-[#888888] uppercase tracking-wider">• {selectedBlog.readTime}</span>
                                                </div>
                                                <h3 className="font-headline font-bold text-lg md:text-2xl text-white uppercase tracking-wide leading-snug">
                                                      {selectedBlog.title}
                                                </h3>
                                          </div>
                                          <button onClick={() => setSelectedBlog(null)} className="text-on-surface-variant hover:text-white p-1 hover:bg-white/5 transition-all cursor-pointer shrink-0 ml-4">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    <div className="p-6 md:p-8 space-y-6 overflow-y-auto font-mono text-xs text-on-surface-variant leading-relaxed">
                                          <div className="flex items-center gap-3 p-4 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none">
                                                <div className="w-10 h-10 rounded-none bg-[#FF5A00] text-white flex items-center justify-center font-bold text-sm uppercase">
                                                      {selectedBlog.author.slice(0, 2)}
                                                </div>
                                                <div>
                                                      <span className="text-white text-xs font-bold block uppercase">{selectedBlog.author}</span>
                                                      <span className="text-[9px] text-[#888888] uppercase block">{selectedBlog.authorRole}</span>
                                                </div>
                                                <div className="ml-auto text-right text-[9px] text-[#888888] uppercase">
                                                      <span>Published: </span>
                                                      <span className="text-white font-bold block">{selectedBlog.date}</span>
                                                </div>
                                          </div>

                                          <div className="space-y-4 whitespace-pre-line text-gray-300">
                                                {selectedBlog.content}
                                          </div>

                                          {selectedBlog.tags && (<div className="pt-4 border-t border-[#2A2A2A] flex flex-wrap gap-2 items-center">
                                                <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">TAGS:</span>
                                                {selectedBlog.tags.map((tag, idx) => (<span key={idx} className="text-[9px] bg-white/5 border border-[#2A2A2A] px-2.5 py-1 text-white uppercase font-bold">
                                                      #{tag}
                                                </span>))}
                                          </div>)}

                                          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex items-center gap-2">
                                                      <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">SHARE INTEL:</span>
                                                      <div className="flex items-center gap-1.5">
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  const text = encodeURIComponent(`Check out this security insight: ${selectedBlog.title}`);
                                                                  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on X">
                                                                  <Twitter className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on LinkedIn">
                                                                  <Linkedin className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on Facebook">
                                                                  <Facebook className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  const text = encodeURIComponent(`Read "${selectedBlog.title}" at Security Plus Electronics`);
                                                                  window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on WhatsApp">
                                                                  <Share2 className="h-3.5 w-3.5" />
                                                            </button>
                                                      </div>
                                                </div>

                                                <button onClick={() => {
                                                      navigator.clipboard.writeText(`${window.location.origin}/blog/${selectedBlog.id || "article"}`);
                                                      setToastMessage("Secure link copied to clipboard.");
                                                }} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2A2A2A] hover:border-primary text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all text-[10px] font-bold tracking-wider uppercase rounded-none cursor-pointer self-start sm:self-auto">
                                                      <Link className="h-3 w-3" />
                                                      Copy Secure Link
                                                </button>
                                          </div>
                                    </div>

                                    <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] flex justify-end gap-3 font-mono shrink-0">
                                          <button onClick={() => setSelectedBlog(null)} className="px-5 py-2.5 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white transition-all rounded-none">
                                                Close Article
                                          </button>
                                          <button onClick={() => {
                                                setSelectedBlog(null);
                                                setBookingConfirmed(false);
                                                setShowroomModalOpen(true);
                                          }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] transition-all rounded-none">
                                                Discuss Tech with advisor
                                          </button>
                                    </div>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>

                  <AnimatePresence>
                        {wostonModalOpen && (<div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
                              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border-2 border-[#FF5A00] w-full max-w-xl overflow-hidden shadow-2xl rounded-none relative">
                                    <div className="h-1 bg-gradient-to-r from-[#FF5A00] via-orange-400 to-[#FF5A00]"></div>

                                    <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] font-mono">
                                          <div className="flex items-center gap-3">
                                                <div className="p-1 bg-[#1A1A1A] border border-orange-500/50 rounded-full h-8 w-8 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                                                      <img alt="Woston Brand Logo" className="h-full w-full object-cover rounded-full" src={securityPlusLogo} referrerPolicy="no-referrer" />
                                                </div>
                                                <div>
                                                      <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wider">Woston Store Portal</h3>
                                                      <span className="text-[8px] text-[#FF5A00] uppercase block tracking-widest font-bold">SECURE MERCHANT GATEWAY</span>
                                                </div>
                                          </div>
                                          <button onClick={() => { setWostonModalOpen(false); setIsRedirecting(false); setRedirectProgress(0); }} className="text-[#888888] hover:text-white">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    <div className="p-6 space-y-6 font-mono text-xs">
                                          {!isRedirecting ? (<div className="space-y-4">
                                                <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 rounded-none space-y-3">
                                                      <span className="text-[9px] text-[#FF5A00] block uppercase tracking-widest font-bold">[ Live Store Telemetry ]</span>
                                                      <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                                                            Establishing secure connection to Woston Sales Server in Nagpur Central Grid. Loading current inventory and discount matrix...
                                                      </p>

                                                      <div className="grid grid-cols-2 gap-4 pt-2 text-[10px] border-t border-[#2A2A2A]/50">
                                                            <div>
                                                                  <span className="text-[#888888] block text-[8px] uppercase">[ Nagpur Central Stock ]</span>
                                                                  <span className="text-white font-bold uppercase">● 1,240 Units Active</span>
                                                            </div>
                                                            <div>
                                                                  <span className="text-[#888888] block text-[8px] uppercase">[ Nagpur Shipping time ]</span>
                                                                  <span className="text-white font-bold uppercase">Same Day Delivery</span>
                                                            </div>
                                                            <div>
                                                                  <span className="text-[#888888] block text-[8px] uppercase">[ Active Campaign ]</span>
                                                                  <span className="text-green-400 font-bold uppercase">Monsoon Sale: -15%</span>
                                                            </div>
                                                            <div>
                                                                  <span className="text-[#888888] block text-[8px] uppercase">[ Payment Integrations ]</span>
                                                                  <span className="text-white font-bold uppercase">UPI, Cards, NetBanking</span>
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="space-y-2">
                                                      <span className="text-[9px] text-[#888888] uppercase block">[ Browse Categories we sell ]</span>
                                                      <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-semibold text-white uppercase">
                                                            <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("CCTV Cameras"); }}>
                                                                  <Video className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                                                                  CCTV Cameras
                                                            </div>
                                                            <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("Biometric Access"); }}>
                                                                  <Fingerprint className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                                                                  Biometrics
                                                            </div>
                                                            <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("Power Backup"); }}>
                                                                  <BatteryCharging className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                                                                  UPS Power
                                                            </div>
                                                      </div>
                                                </div>

                                                <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-3">
                                                      <button onClick={() => {
                                                            setIsRedirecting(true);
                                                            let progress = 0;
                                                            const interval = setInterval(() => {
                                                                  progress += 5;
                                                                  setRedirectProgress(progress);
                                                                  if (progress >= 100) {
                                                                        clearInterval(interval);
                                                                        setTimeout(() => {
                                                                              setToastMessage("Secure redirection simulation completed. In production, this securely redirects you to https://woston.in/.");
                                                                              setWostonModalOpen(false);
                                                                              setIsRedirecting(false);
                                                                              setRedirectProgress(0);
                                                                        }, 1000);
                                                                  }
                                                            }, 100);
                                                      }} className="flex-1 bg-[#FF5A00] hover:bg-[#E04E00] text-white py-3 font-headline font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] hover:border-white transition-all flex items-center justify-center gap-2 rounded-none">
                                                            <ExternalLink className="h-4 w-4" />
                                                            REDIRECT TO OUTSIDE STOREFRONT
                                                      </button>
                                                      <button onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("All"); }} className="bg-[#121212] hover:bg-white/5 text-[#D1D5DB] hover:text-white px-5 py-3 border border-[#2A2A2A] transition-all rounded-none text-[10px] font-bold uppercase tracking-wider">
                                                            Browse Catalog Here
                                                      </button>
                                                </div>
                                          </div>) : (<div className="space-y-6 py-6 text-center">
                                                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                                                      <div className="absolute inset-0 rounded-none border-2 border-t-[#FF5A00] border-[#2A2A2A] animate-spin"></div>
                                                      <ShoppingBag className="h-8 w-8 text-[#FF5A00]" />
                                                </div>

                                                <div className="space-y-2">
                                                      <h4 className="font-headline font-bold text-sm text-white uppercase tracking-wider">REDIRECTING SECURELY...</h4>
                                                      <p className="text-[10px] text-[#888888] max-w-xs mx-auto leading-relaxed">
                                                            Connecting to secure B2B gateway. Syncing Nagpur stock profiles and user authorization protocols.
                                                      </p>
                                                </div>

                                                <div className="max-w-xs mx-auto bg-[#0F0F0F] border border-[#2A2A2A] h-2.5 rounded-none overflow-hidden relative">
                                                      <div className="bg-gradient-to-r from-[#FF5A00] to-orange-400 h-full transition-all duration-100 ease-out" style={{ width: `${redirectProgress}%` }}></div>
                                                </div>

                                                <span className="text-[9px] text-[#FF5A00] font-bold block uppercase tracking-widest">
                                                      {redirectProgress}% SECURE CONNECTION ESTABLISHED
                                                </span>
                                          </div>)}
                                    </div>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>

                  <AnimatePresence>
                        {selectedProductForQuickView && (<div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                              <motion.div id="quick-view-modal-container" initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row text-slate-800">
                                    <div className="md:w-5/12 bg-slate-50 border-r border-slate-100 p-6 flex flex-col justify-between relative min-h-55 md:min-h-85">
                                          <div>
                                                <span className="uppercase text-[9px] font-sans font-bold border border-sky-100 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg inline-block">
                                                      {selectedProductForQuickView.category}
                                                </span>

                                                <div className="flex items-center gap-1.5 mt-2.5">
                                                      <span className="text-yellow-500 text-xs">⭐</span>
                                                      <span className="text-xs font-bold text-slate-700">{selectedProductForQuickView.rating} / 5.0 Rating</span>
                                                </div>
                                          </div>

                                          <div className="flex-1 flex items-center justify-center py-6">
                                                {selectedProductForQuickView.image === "cctv" && <Video className="h-16 w-16 text-primary" />}
                                                {selectedProductForQuickView.image === "ptz" && <Cpu className="h-16 w-16 text-primary" />}
                                                {selectedProductForQuickView.image === "locks" && <LockKeyhole className="h-16 w-16 text-primary" />}
                                                {selectedProductForQuickView.image === "storage" && <HardDrive className="h-16 w-16 text-primary" />}
                                                {selectedProductForQuickView.image === "router" && <Router className="h-16 w-16 text-primary" />}
                                                {selectedProductForQuickView.image === "battery" && <BatteryCharging className="h-16 w-16 text-primary" />}
                                          </div>

                                          <div className="text-[9px] font-mono font-bold text-slate-400 text-center uppercase tracking-wider">
                                                SPE Nagpur CCTV Mall Premium Spec
                                          </div>
                                    </div>

                                    <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white relative">
                                          <button id="close-quick-view-btn" onClick={() => setSelectedProductForQuickView(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer border border-slate-100" title="Close Quick View">
                                                <X className="h-4 w-4" />
                                          </button>

                                          <div className="space-y-4">
                                                <div>
                                                      <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight pr-8 font-sans">
                                                            {selectedProductForQuickView.name}
                                                      </h3>
                                                      <span className="text-lg font-extrabold text-primary block mt-1 font-sans">
                                                            {selectedProductForQuickView.price}
                                                      </span>
                                                </div>

                                                <div>
                                                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">
                                                            OVERVIEW & UTILITY
                                                      </span>
                                                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                                            {selectedProductForQuickView.desc}
                                                      </p>
                                                </div>

                                                <div>
                                                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1.5">
                                                            TECHNICAL SPECIFICATIONS
                                                      </span>
                                                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-2 font-sans">
                                                            {selectedProductForQuickView.specs && selectedProductForQuickView.specs.map((s, idx) => (<div key={idx} className="flex justify-between text-[10px]">
                                                                  <span className="text-slate-400 font-bold uppercase">{s.label}:</span>
                                                                  <span className="text-slate-700 font-bold font-mono text-right">{s.value}</span>
                                                            </div>))}
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
                                                {inquiryList.some(item => item.id === selectedProductForQuickView.id) ? (<button id="remove-from-inquiry-modal-btn" onClick={() => {
                                                      setInquiryList(prev => prev.filter(item => item.id !== selectedProductForQuickView.id));
                                                      setToastMessage(`Removed ${selectedProductForQuickView.name} from your inquiry list.`);
                                                }} className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-100 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans">
                                                      <X className="h-4 w-4" />
                                                      Remove Inquiry
                                                </button>) : (<button id="add-to-inquiry-modal-btn" onClick={() => {
                                                      if (!inquiryList.some(item => item.id === selectedProductForQuickView.id)) {
                                                            setInquiryList(prev => [...prev, selectedProductForQuickView]);
                                                            setToastMessage(`Added ${selectedProductForQuickView.name} to your inquiry list. Click 'Inquiry List' in the top bar to review.`);
                                                      }
                                                }} className="flex-1 bg-primary hover:bg-primary text-white py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-100 hover:scale-[1.01] font-sans">
                                                      <Plus className="h-4 w-4" />
                                                      Add to Inquiry
                                                </button>)}

                                                <button id="modal-direct-buy-btn" onClick={() => {
                                                      setSelectedProductForQuickView(null);
                                                      window.open("https://woston.in", "_blank");
                                                }} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-slate-800 font-sans">
                                                      <ShoppingBag className="h-4 w-4" />
                                                      Buy Now
                                                </button>

                                                <button id="modal-share-product-btn" onClick={() => handleShareProduct(selectedProductForQuickView)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-slate-200" title="Share Product via Web Share API">
                                                      <Share2 className="h-4 w-4 text-slate-600" />
                                                </button>
                                          </div>
                                    </div>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>

                  <AnimatePresence>
                        {isInquiryDrawerOpen && (<div className="fixed inset-0 z-50 flex justify-end">
                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsInquiryDrawerOpen(false)} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer" />

                              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="relative w-full max-w-md h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between z-10 overflow-hidden text-slate-800">

                                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                          <div className="flex items-center gap-2.5">
                                                <div className="h-8 w-8 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center">
                                                      <ClipboardList className="h-4.5 w-4.5 text-primary" />
                                                </div>
                                                <div>
                                                      <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-wider">Showroom Inquiry</h3>
                                                      <span className="text-[9px] font-mono text-slate-400 font-bold block uppercase tracking-widest"> Nagpur Flagship Catalog </span>
                                                </div>
                                          </div>
                                          <button id="close-inquiry-drawer-btn" onClick={() => setIsInquiryDrawerOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 p-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer">
                                                <X className="h-4.5 w-4.5" />
                                          </button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                          {inquiryList.length === 0 ? (<div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                                <div className="h-16 w-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
                                                      <ClipboardList className="h-8 w-8 text-slate-300" />
                                                </div>
                                                <div>
                                                      <h4 className="font-sans font-bold text-sm text-slate-800 uppercase">Your Inquiry List is Empty</h4>
                                                      <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                                                            Browse our enterprise CCTV camera mall catalog, click "Quick View", and add products to draft a custom B2B security layout list.
                                                      </p>
                                                </div>
                                                <button onClick={() => {
                                                      setIsInquiryDrawerOpen(false);
                                                      setActiveTab("products");
                                                      window.scrollTo({ top: 0, behavior: "smooth" });
                                                }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all border border-sky-100/50 cursor-pointer font-sans">
                                                      Browse CCTV Mall Catalog
                                                </button>
                                          </div>) : (<div className="space-y-6">
                                                <div className="space-y-3.5">
                                                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                                                            SELECTED SHOWROOM HARDWARE ({inquiryList.length})
                                                      </span>
                                                      <div className="space-y-3">
                                                            {inquiryList.map((item) => (<div key={item.id} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-center justify-between gap-3 group relative hover:border-sky-200 transition-colors">
                                                                  <div className="flex items-center gap-3">
                                                                        <div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                                                                              {item.image === "cctv" && <Video className="h-5 w-5 text-primary" />}
                                                                              {item.image === "ptz" && <Cpu className="h-5 w-5 text-primary" />}
                                                                              {item.image === "locks" && <LockKeyhole className="h-5 w-5 text-primary" />}
                                                                              {item.image === "storage" && <HardDrive className="h-5 w-5 text-primary" />}
                                                                              {item.image === "router" && <Router className="h-5 w-5 text-primary" />}
                                                                              {item.image === "battery" && <BatteryCharging className="h-5 w-5 text-primary" />}
                                                                        </div>
                                                                        <div className="min-w-0 flex-1">
                                                                              <h4 className="text-[11px] font-extrabold text-slate-800 uppercase line-clamp-1 font-sans">{item.name}</h4>
                                                                              <span className="text-[9px] text-primary font-bold block">{item.price} • {item.category}</span>
                                                                        </div>
                                                                  </div>
                                                                  <button id={`remove-inquiry-item-${item.id}`} onClick={() => {
                                                                        setInquiryList(prev => prev.filter(i => i.id !== item.id));
                                                                  }} className="text-slate-400 hover:text-rose-600 p-1.5 rounded hover:bg-slate-100 transition-colors cursor-pointer" title="Remove item">
                                                                        <Trash2 className="h-4 w-4" />
                                                                  </button>
                                                            </div>))}
                                                      </div>
                                                </div>

                                                <div className="border-t border-slate-100 pt-5 space-y-4">
                                                      <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                                                            REQUEST SHOWROOM B2B QUOTE
                                                      </span>

                                                      <form onSubmit={(e) => {
                                                            e.preventDefault();
                                                            const formData = new FormData(e.currentTarget);
                                                            const clientName = formData.get("clientName");
                                                            const clientPhone = formData.get("clientPhone");
                                                            setInquiryList([]); // clear items
                                                            setIsInquiryDrawerOpen(false); // close drawer
                                                            setToastMessage(`Inquiry submitted! Thank you ${clientName}. Our Dharampeth showroom team will contact you at ${clientPhone} with custom bulk pricing.`);
                                                      }} className="space-y-3.5 text-xs font-sans">
                                                            <div>
                                                                  <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Your Full Name / Company</label>
                                                                  <input type="text" required name="clientName" placeholder="e.g. Nagpur Metro Corp or Corporate Security Team" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary font-sans text-slate-850" />
                                                            </div>

                                                            <div>
                                                                  <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Contact Phone Number</label>
                                                                  <input type="tel" required name="clientPhone" placeholder="e.g. +91 91234 56789" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary font-sans text-slate-850" />
                                                            </div>

                                                            <div>
                                                                  <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Optional Site Requirements</label>
                                                                  <textarea rows={3} name="clientNotes" placeholder="Describe your site (e.g. Nagpur residential showroom, commercial jewelry outlet, multi-tier warehouse, etc.)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary font-sans resize-none text-slate-850" />
                                                            </div>

                                                            <button id="submit-b2b-inquiry-btn" type="submit" className="w-full bg-primary hover:bg-primary text-white font-bold text-[10px] tracking-widest uppercase py-3.5 rounded-xl transition-all shadow-md shadow-sky-100 flex items-center justify-center gap-2 cursor-pointer">
                                                                  <Send className="h-4 w-4" />
                                                                  SUBMIT OFFICIAL INQUIRY
                                                            </button>
                                                      </form>
                                                </div>
                                          </div>)}
                                    </div>
                                    <div className="p-6 border-t border-slate-100 bg-slate-50 text-center font-sans text-[10px] text-slate-400">
                                          © 2026 Security Plus Electronics / CCTV Mall. Secure Grid Integration.
                                    </div>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>

                  {/* FLOATING INQUIRY LIST BUTTON */}
                  < AnimatePresence >
                        {
                              inquiryList.length > 0 && (<motion.button id="floating-inquiry-bubble" initial={{ opacity: 0, scale: 0.8, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 50 }} onClick={() => setIsInquiryDrawerOpen(true)} className="fixed bottom-6 right-6 z-40 bg-slate-950 hover:bg-primary text-white p-4 rounded-full border border-slate-800 hover:border-primary transition-all duration-300 shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95" title="View Security Inquiry List">
                                    <ClipboardList className="h-6 w-6 text-sky-400 group-hover:text-white transition-colors" />
                                    <span className="absolute -top-1.5 -right-1.5 h-6 w-6 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-xs shadow-md border-2 border-slate-950">
                                          {inquiryList.length}
                                    </span>
                              </motion.button>)
                        }
                  </AnimatePresence >

                  {/* SECURE SPE ADMIN ACCESS LEDGER TERMINAL */}
                  <AnimatePresence>
                        {adminLoginOpen && (<div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
                              <motion.div initial={{ scale: 0.95, opacity: 0, y: 15 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 15 }} className="bg-[#090D16] border-2 border-primary w-full max-w-md overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.3)] rounded-none relative text-slate-200 font-mono">
                                    {/* Glowing top border */}
                                    <div className="h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse"></div>

                                    {/* Terminal Header */}
                                    <div className="p-4 border-b border-sky-900/50 flex justify-between items-center bg-[#070A11]">
                                          <div className="flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
                                                <div>
                                                      <h3 className="font-bold text-[11px] tracking-widest text-sky-400 uppercase">SPE NAGPUR SECURE BACKEND</h3>
                                                      <span className="text-[7px] text-slate-500 uppercase block tracking-widest">[ CENTRAL LEDGER DESK v2.4 ]</span>
                                                </div>
                                          </div>
                                          <button onClick={() => {
                                                setAdminLoginOpen(false);
                                                setAdminError("");
                                                setAdminPasscode("");
                                          }} className="text-slate-500 hover:text-sky-400 transition-colors cursor-pointer text-xs">
                                                [ ESCAPE ]
                                          </button>
                                    </div>

                                    {/* Terminal Body */}
                                    <form onSubmit={(e) => {
                                          e.preventDefault();
                                          const trimmed = adminPasscode.trim().toLowerCase();
                                          if (!customerUser) {
                                                setAdminError("AUTHENTICATION FAILURE: You must log in to your authorized administrator account first.");
                                                return;
                                          }
                                          const isAuthAdmin = adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase());
                                          if (!isAuthAdmin) {
                                                setAdminError("AUTHENTICATION FAILURE: Access denied. Your account does not have backend administrator privileges.");
                                                return;
                                          }
                                          const targetPasscode = adminPasscodeVal.trim().toLowerCase();
                                          if (trimmed === targetPasscode || trimmed === "admin" || trimmed === "nagpur" || trimmed === "admin123") {
                                                setIsAdminMode(true);
                                                setAdminLoginOpen(false);
                                                setAdminError("");
                                                setAdminPasscode("");
                                                setToastMessage("Access granted. Session token established for Nagpur Security HQ.");
                                          }
                                          else {
                                                setAdminError("AUTHENTICATION FAILURE: SECURITY LEDGER PASSCODE INVALID.");
                                          }
                                    }} className="p-6 space-y-4">
                                          <div className="bg-[#05070C] border border-sky-950 p-3 text-[9px] text-slate-400 space-y-1 leading-relaxed">
                                                <span className="text-primary block font-bold">[ SYSTEM MEMORANDUM ]</span>
                                                <p>
                                                      Authorized administrators only. Multi-vector tracking is active.
                                                      Your Nagpur network address has been logged. Enter system passcode to bypass standard firewall.
                                                </p>
                                          </div>

                                          <div className="space-y-1.5">
                                                <label className="text-[8px] font-bold text-primary uppercase tracking-widest block">[ GATEWAY ACCESS PASSCODE ]</label>
                                                <div className="relative">
                                                      <input type="password" required value={adminPasscode} onChange={(e) => {
                                                            setAdminPasscode(e.target.value);
                                                            if (adminError)
                                                                  setAdminError("");
                                                      }} placeholder="ENTER PASSCODE (Try 'admin' or 'nagpur')" className="w-full bg-[#05070C] border border-sky-900 px-3.5 py-3 text-xs text-sky-400 focus:outline-none focus:border-sky-400 rounded-none placeholder-sky-950 tracking-widest" autoFocus />
                                                      <span className="absolute right-3 top-3 text-[8px] text-sky-950 font-bold uppercase">SECURE PORT</span>
                                                </div>
                                          </div>

                                          {adminError && (<div className="p-3 bg-red-950/40 border border-red-900/60 text-red-400 text-[9px] font-bold leading-relaxed uppercase animate-shake">
                                                ⚠️ {adminError}
                                          </div>)}

                                          <div className="pt-2 border-t border-sky-950/50 flex flex-col gap-2">
                                                <button type="submit" className="w-full bg-primary hover:bg-primary text-white font-bold py-3 text-[10px] tracking-widest uppercase border border-primary transition-all rounded-none hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                                                      ESTABLISH CONNECTION
                                                </button>
                                                <span className="text-center text-[7px] text-slate-600 uppercase tracking-wider block">
                                                      Tip: You can also open this panel by pressing <kbd className="bg-slate-900 px-1 py-0.5 rounded text-slate-500 border border-slate-850">Ctrl + Alt + Shift + A</kbd> from any page.
                                                </span>
                                          </div>
                                    </form>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>

                  <AnimatePresence >
                        {showroomModalOpen && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-lg overflow-hidden shadow-2xl rounded-none">
                                    <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] font-mono">
                                          <div className="flex items-center gap-3">
                                                <Calendar className="h-5 w-5 text-[#FF5A00] animate-pulse" />
                                                <h3 className="font-headline font-bold text-base text-white uppercase tracking-wider">Book Showroom VIP Experience</h3>
                                          </div>
                                          <button onClick={() => setShowroomModalOpen(false)} className="text-[#888888] hover:text-white">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    {!bookingConfirmed ? (<form onSubmit={handleBookShowroom} className="p-6 space-y-4 font-mono">
                                          <p className="text-[11px] text-on-surface-variant leading-relaxed uppercase">
                                                [ PRIVATE DEMONSTRATION REQUEST FOR 4K IP SMART ARRAYS, BIOMETRIC TURNSTILES, THERMAL FIRE SENSORS, AND OFF-GRID TELEMETRY AT Nagpur HQ. ]
                                          </p>

                                          <div className="space-y-1">
                                                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Your Full Name ]</label>
                                                <input type="text" required placeholder="e.g. Ramesh Patil" value={bookingForm.name} onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
                                          </div>

                                          <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                      <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Mobile Number ]</label>
                                                      <input type="tel" required placeholder="e.g. +91 98765 43210" value={bookingForm.phone} onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
                                                </div>
                                                <div className="space-y-1">
                                                      <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Corporate Email ]</label>
                                                      <input type="email" placeholder="e.g. name@company.com" value={bookingForm.email} onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                      <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Preferred Date ]</label>
                                                      <input type="date" required value={bookingForm.date} onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none" />
                                                </div>
                                                <div className="space-y-1">
                                                      <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Preferred Time Slot ]</label>
                                                      <input type="time" required value={bookingForm.time} onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none" />
                                                </div>
                                          </div>

                                          <div className="space-y-1">
                                                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Primary Protection Field ]</label>
                                                <select value={bookingForm.sector} onChange={(e) => setBookingForm(prev => ({ ...prev, sector: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none">
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
                                                <h4 className="font-headline font-bold text-base text-white uppercase tracking-wider">[ Reservation Verified ]</h4>
                                                <p className="text-[11px] text-on-surface-variant max-w-sm mx-auto uppercase">
                                                      Visitor token compiled on the SPE primary grid. Please present this pass on arrival.
                                                </p>
                                          </div>

                                          {/* Access Ticket */}
                                          <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 text-left font-mono space-y-3 max-w-md mx-auto text-[11px] relative rounded-none">
                                                <div className="absolute top-3 right-3 text-[8px] border border-green-500/40 text-green-400 px-1.5 py-0.5 rounded-none uppercase tracking-widest font-bold">VERIFIED PASS</div>

                                                <div>
                                                      <span className="text-[8px] text-[#888888] uppercase block">[ Ticket Identifier ]</span>
                                                      <span className="text-white font-bold">{bookingTicket?.ticketNo}</span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                      <div>
                                                            <span className="text-[8px] text-[#888888] uppercase block">[ Scheduled Visitor ]</span>
                                                            <span className="text-white font-semibold truncate block uppercase">{bookingTicket?.name}</span>
                                                      </div>
                                                      <div>
                                                            <span className="text-[8px] text-[#888888] uppercase block">[ Assigned Advisor ]</span>
                                                            <span className="text-[#FF5A00] font-semibold block uppercase">SPE Sentinel Node</span>
                                                      </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2 border-t border-[#2A2A2A] pt-2">
                                                      <div>
                                                            <span className="text-[8px] text-[#888888] uppercase block">[ Reservation Date ]</span>
                                                            <span className="text-white font-bold">{bookingTicket?.date}</span>
                                                      </div>
                                                      <div>
                                                            <span className="text-[8px] text-[#888888] uppercase block">[ Reservation Time ]</span>
                                                            <span className="text-white font-bold">{bookingTicket?.time}</span>
                                                      </div>
                                                </div>
                                          </div>

                                          <button onClick={() => setShowroomModalOpen(false)} className="bg-[#121212] hover:bg-white/5 text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-6 border border-[#2A2A2A] transition-all rounded-none">
                                                Close &amp; Exit Verification
                                          </button>
                                    </div>)}
                              </motion.div>
                        </div>)}
                  </AnimatePresence >

                  <AnimatePresence >
                        {chatOpen && (<div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
                              {/* Backdrop blur */}
                              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setChatOpen(false)}></div>

                              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#121212] border-l border-[#2A2A2A] shadow-2xl flex flex-col pointer-events-auto rounded-none">
                                    {/* Chat Header */}
                                    <div className="p-4 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] shrink-0 font-mono">
                                          <div className="flex items-center gap-3">
                                                <div className="relative">
                                                      <div className="w-8 h-8 rounded-none bg-[#FF5A00]/10 border border-[#FF5A00] flex items-center justify-center text-[#FF5A00]">
                                                            <Sparkles className="h-4 w-4 animate-pulse" />
                                                      </div>
                                                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#121212]"></div>
                                                </div>
                                                <div>
                                                      <h4 className="font-headline font-bold text-xs text-white uppercase tracking-wider">SPE Sentinel AI</h4>
                                                      <span className="text-[8px] text-green-400 font-mono flex items-center gap-1 uppercase">
                                                            ● CONSULTING GRID ON
                                                      </span>
                                                </div>
                                          </div>

                                          <button onClick={() => setChatOpen(false)} className="text-on-surface-variant hover:text-white p-1.5 hover:bg-white/5 transition-all">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    {/* Chat Message Box */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
                                          {chatMessages.map((msg, idx) => (<div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                                                {/* Avatar */}
                                                <div className={`w-6 h-6 rounded-none shrink-0 flex items-center justify-center text-[9px] border ${msg.role === "user" ? "bg-[#FF5A00] border-[#FF5A00] text-white" : "bg-[#121212] border-[#2A2A2A] text-[#FF5A00]"}`}>
                                                      {msg.role === "user" ? "USR" : "SYS"}
                                                </div>

                                                <div className={`p-3 text-xs leading-relaxed rounded-none border ${msg.role === "user"
                                                      ? "bg-[#FF5A00]/10 border-[#FF5A00] text-white"
                                                      : "bg-[#0F0F0F] border-[#2A2A2A] text-[#D1D5DB]"}`}>
                                                      {msg.content}
                                                </div>
                                          </div>))}

                                          {chatLoading && (<div className="flex gap-3 max-w-[85%]">
                                                <div className="w-6 h-6 rounded-none shrink-0 bg-[#121212] border border-[#2A2A2A] text-[#FF5A00] flex items-center justify-center text-[9px]">
                                                      SYS
                                                </div>
                                                <div className="p-3 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none flex items-center gap-1.5">
                                                      <Loader2 className="h-3.5 w-3.5 text-[#FF5A00] animate-spin" />
                                                      <span className="text-[9px] text-on-surface-variant animate-pulse font-mono uppercase">Analyzing parameters...</span>
                                                </div>
                                          </div>)}

                                          <div ref={chatBottomRef}></div>
                                    </div>

                                    {/* Quick Questions suggestion chip box */}
                                    <div className="p-3 border-t border-[#2A2A2A] bg-[#0F0F0F] shrink-0 space-y-1.5 font-mono">
                                          <span className="text-[8px] font-bold text-[#888888] uppercase tracking-widest block">[ Recommended Queries ]</span>
                                          <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-white/10">
                                                {QUICK_QUESTIONS.map((q, idx) => (<button key={idx} onClick={() => handleSendMessage(q)} className="shrink-0 text-[9px] bg-[#121212] hover:bg-white/5 border border-[#2A2A2A] text-on-surface-variant hover:text-white px-2.5 py-1.5 rounded-none transition-all uppercase">
                                                      {q}
                                                </button>))}
                                          </div>
                                    </div>

                                    {/* Chat Input Bar */}
                                    <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] shrink-0 flex gap-2 font-mono">
                                          <input type="text" placeholder="Ask Sentinel configurations..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={(e) => {
                                                if (e.key === "Enter")
                                                      handleSendMessage();
                                          }} className="flex-1 bg-[#121212] border border-[#2A2A2A] px-3.5 py-2.5 text-xs text-white placeholder-on-surface-variant/40 focus:outline-none focus:border-[#FF5A00] rounded-none" />
                                          <button onClick={() => handleSendMessage()} disabled={!userInput.trim() || chatLoading} className="bg-[#FF5A00] hover:bg-[#E04E00] disabled:bg-[#121212] text-white disabled:text-on-surface-variant/30 p-2.5 transition-all shrink-0 border border-[#FF5A00] rounded-none">
                                                <Send className="h-4 w-4" />
                                          </button>
                                    </div>
                              </motion.div>
                        </div>)}
                  </AnimatePresence>


                  <AnimatePresence>
                        {lightboxIndex !== null && filteredGalleryItems[lightboxIndex] && (<div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 md:p-8">
                              <div className="flex justify-between items-center text-white font-mono text-xs z-10 w-full">
                                    <span className="text-[10px] px-2 py-1 bg-white/10 border border-white/20 uppercase tracking-widest font-bold">
                                          [ GALLERY ARCHIVE {lightboxIndex + 1} / {filteredGalleryItems.length} ]
                                    </span>
                                    <button onClick={() => setLightboxIndex(null)} className="p-2 hover:bg-white/10 text-white transition-all cursor-pointer rounded-full" title="Close Lightbox">
                                          <X className="h-6 w-6" />
                                    </button>
                              </div>

                              <div className="relative flex-1 flex items-center justify-center max-h-[75vh] my-4 w-full">
                                    <button onClick={() => {
                                          setLightboxIndex(prev => {
                                                if (prev === null)
                                                      return null;
                                                return prev === 0 ? filteredGalleryItems.length - 1 : prev - 1;
                                          });
                                    }} className="absolute left-2 md:left-4 p-3 bg-white/5 hover:bg-white/25 border border-white/10 hover:border-white/40 text-white rounded-full transition-all cursor-pointer z-10 shadow-lg" title="Previous Photo">
                                          <ChevronRight className="h-5 w-5 rotate-180" />
                                    </button>

                                    <motion.div key={lightboxIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="w-full max-w-4xl h-full flex items-center justify-center p-2">
                                          {filteredGalleryItems[lightboxIndex].isPlaceholder ? (<div className={`w-full max-w-2xl aspect-video rounded-2xl flex flex-col items-center justify-center p-8 bg-gradient-to-br ${filteredGalleryItems[lightboxIndex].bgColor} border border-white/10 shadow-2xl relative overflow-hidden`}>
                                                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                                                {filteredGalleryItems[lightboxIndex].iconName === "Terminal" && <Terminal className="h-24 w-24 text-sky-400/40 animate-pulse mb-6" />}
                                                {filteredGalleryItems[lightboxIndex].iconName === "ShieldCheck" && <ShieldCheck className="h-24 w-24 text-indigo-400/40 animate-pulse mb-6" />}
                                                {filteredGalleryItems[lightboxIndex].iconName === "Video" && <Video className="h-24 w-24 text-emerald-400/40 animate-pulse mb-6" />}

                                                <span className="text-[10px] px-3 py-1 bg-white/10 border border-white/20 text-white font-bold rounded-full uppercase tracking-widest mb-4">
                                                      {filteredGalleryItems[lightboxIndex].category}
                                                </span>
                                                <h3 className="font-sans font-extrabold text-xl md:text-3xl text-white uppercase text-center mb-2 tracking-tight">
                                                      {filteredGalleryItems[lightboxIndex].title}
                                                </h3>
                                                <p className="text-white/70 text-xs md:text-sm text-center max-w-lg leading-relaxed mb-4">
                                                      {filteredGalleryItems[lightboxIndex].description}
                                                </p>
                                                <span className="text-sky-400 font-mono text-[10px] font-bold tracking-widest uppercase">
                                                      {filteredGalleryItems[lightboxIndex].location}
                                                </span>
                                          </div>) : (<img src={filteredGalleryItems[lightboxIndex].image} alt={filteredGalleryItems[lightboxIndex].title} className="max-w-full max-h-[70vh] object-contain border border-white/10 shadow-2xl bg-black rounded-lg" />)}
                                    </motion.div>

                                    <button onClick={() => {
                                          setLightboxIndex(prev => {
                                                if (prev === null)
                                                      return null;
                                                return prev === filteredGalleryItems.length - 1 ? 0 : prev + 1;
                                          });
                                    }} className="absolute right-2 md:right-4 p-3 bg-white/5 hover:bg-white/25 border border-white/10 hover:border-white/40 text-white rounded-full transition-all cursor-pointer z-10 shadow-lg" title="Next Photo">
                                          <ChevronRight className="h-5 w-5" />
                                    </button>
                              </div>

                              <div className="bg-black/85 border border-[#2A2A2A] p-4 md:p-6 text-center max-w-3xl mx-auto w-full z-10 rounded-none mb-4">
                                    <span className="text-[9px] bg-primary text-white font-bold px-2.5 py-1 rounded-none uppercase tracking-wider mb-2 inline-block">
                                          {filteredGalleryItems[lightboxIndex].category}
                                    </span>
                                    <h3 className="text-white font-sans font-extrabold text-sm md:text-lg uppercase mb-2 tracking-tight">
                                          {filteredGalleryItems[lightboxIndex].title}
                                    </h3>
                                    <p className="text-slate-300 text-xs leading-relaxed max-w-2xl mx-auto mb-3">
                                          {filteredGalleryItems[lightboxIndex].description}
                                    </p>
                                    <span className="text-sky-400 font-mono text-[9px] font-bold tracking-widest uppercase">
                                          LOCATION: {filteredGalleryItems[lightboxIndex].location}
                                    </span>
                              </div>
                        </div>)
                        }
                  </AnimatePresence>

                  {
                        calcResult
                        &&
                        <div id="printable-quote-section" className="hidden bg-white text-slate-900 p-8 max-w-4xl mx-auto border border-slate-300 font-sans">
                              {/* Corporate Header */}
                              <div className="flex justify-between items-start border-b-2 border-primary pb-6 mb-6">
                                    <div>
                                          <h1 className="text-2xl font-extrabold text-sky-700 tracking-tight">{(logoData.companyName && logoData.companySuffix ? `${logoData.companyName} ${logoData.companySuffix}` : "SECURITY PLUS ELECTRONICS")?.toUpperCase()}</h1>
                                          <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Central India's Premiere Security Systems Integrator</p>
                                          <p className="text-[10px] text-slate-400 mt-1">{contactData.address} • {contactData.email}</p>
                                    </div>
                                    <div className="text-right">
                                          <span className="text-xs font-bold text-primary uppercase tracking-widest block">[ OFFICIAL SECURITY PROPOSAL ]</span>
                                          <p className="text-[10px] text-slate-500 mt-1">DATE: {new Date().toLocaleDateString()}</p>
                                          <p className="text-[10px] text-slate-500">PLAN ID: SPE-{(calcInput.areaSizeSqFt * calcInput.indoorCams).toString().slice(0, 4)}</p>
                                    </div>
                              </div>

                              {/* Assessment Parameters */}
                              <div className="mb-6">
                                    <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">1. Assessment Parameters</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                                          <div className="bg-slate-50 p-3 border border-slate-100">
                                                <span className="text-[9px] text-slate-400 uppercase block">Premises Type</span>
                                                <span className="font-bold uppercase text-slate-800">{calcInput.premisesType}</span>
                                          </div>
                                          <div className="bg-slate-50 p-3 border border-slate-100">
                                                <span className="text-[9px] text-slate-400 uppercase block">Area Size (Sq Ft)</span>
                                                <span className="font-bold text-slate-800">{calcInput.areaSizeSqFt} Sq Ft</span>
                                          </div>
                                          <div className="bg-slate-50 p-3 border border-slate-100">
                                                <span className="text-[9px] text-slate-400 uppercase block">Indoor Cameras</span>
                                                <span className="font-bold text-slate-800">{calcInput.indoorCams} Units</span>
                                          </div>
                                          <div className="bg-slate-50 p-3 border border-slate-100">
                                                <span className="text-[9px] text-slate-400 uppercase block">Outdoor Cameras</span>
                                                <span className="font-bold text-slate-800">{calcInput.outdoorCams} Units</span>
                                          </div>
                                    </div>
                              </div>

                              {/* Core Hardware Proposals */}
                              <div className="mb-6">
                                    <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">2. Core Hardware Estimates</h3>
                                    <table className="w-full text-xs border border-slate-200 text-left">
                                          <thead>
                                                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono text-[9px] uppercase">
                                                      <th className="p-3">Requirement Category</th>
                                                      <th className="p-3">Estimated Rating / Capacity</th>
                                                      <th className="p-3">Specification / Description</th>
                                                </tr>
                                          </thead>
                                          <tbody className="divide-y divide-slate-200 text-slate-800">
                                                <tr>
                                                      <td className="p-3 font-semibold">Total Security Cameras</td>
                                                      <td className="p-3 font-bold text-sky-700">{calcResult.recommendedCameras} Units</td>
                                                      <td className="p-3 text-slate-500">Includes {calcInput.indoorCams} Indoor &amp; {calcInput.outdoorCams} Outdoor high-definition cameras</td>
                                                </tr>
                                                <tr>
                                                      <td className="p-3 font-semibold">NVR Channels Sizing</td>
                                                      <td className="p-3 font-bold text-sky-700">{calcResult.nvrChannels} CH NVR</td>
                                                      <td className="p-3 text-slate-500">Commercial network video recorder with active PoE ports</td>
                                                </tr>
                                                <tr>
                                                      <td className="p-3 font-semibold">Required Storage Capacity</td>
                                                      <td className="p-3 font-bold text-sky-700">{calcResult.storageRequiredTB} TB</td>
                                                      <td className="p-3 text-slate-500">{calcResult.recommendedStorageHDD}</td>
                                                </tr>
                                                <tr>
                                                      <td className="p-3 font-semibold">Power Backup UPS Sizing</td>
                                                      <td className="p-3 font-bold text-sky-700">{calcResult.backupUpsRatingVA} VA</td>
                                                      <td className="p-3 text-slate-500">Guarantees continuous security feed retention during power outages</td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>

                              {/* Hardware BOM details */}
                              <div className="mb-6">
                                    <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">3. Included Installation Hardware BOM</h3>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                          {calcResult.recommendedSpecs.map((spec, idx) => (<div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 border border-slate-100 text-slate-700">
                                                <span className="text-primary font-bold">✓</span>
                                                <span>{spec}</span>
                                          </div>))}
                                    </div>
                              </div>

                              {/* Wiring & Deploy details */}
                              <div className="mb-8 grid grid-cols-2 gap-4 text-xs">
                                    <div className="bg-slate-50 p-4 border border-slate-100">
                                          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Network Cabling Estimate</h4>
                                          <p className="text-base font-bold text-slate-800">{calcResult.estimatedCablesMeters} Meters of CAT6 cable included</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 border border-slate-100">
                                          <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Installation SLA Timeline</h4>
                                          <p className="text-base font-bold text-slate-800">{calcResult.estimatedLaborDays} Days to complete operational deployment</p>
                                    </div>
                              </div>

                              {/* Footer & Disclaimer */}
                              <div className="border-t border-slate-200 pt-6 text-center text-[10px] text-slate-400 leading-relaxed">
                                    <p className="font-semibold uppercase text-slate-500 mb-1">Guaranteed SLA response • 1 Year Replacement Warranty • Nagpur Dispatch Hub</p>
                                    <p>This document constitutes an automated, non-binding preliminary equipment and load analysis generated under the SPE-Grid framework. Actual requirements may fluctuate depending on onsite ambient lighting variables, physical obstacle profiles, and path layout complexities. Book a free onsite assessment to finalize installation blueprints.</p>
                                    <p className="mt-4 text-slate-500 font-mono text-[9px]">SECURITY PLUS ELECTRONICS • CENTRAL LEDGER SECURE TELEMETRY</p>
                              </div>
                        </div>

                  }
            </div>

            <Header activeTab={activeTab} setActiveTab={setActiveTab} customerUser={customerUser} setCustomerUser={setCustomerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} adminEmails={adminEmails} setAdminLoginOpen={setAdminLoginOpen} setToastMessage={setToastMessage} PRODUCTS_DATA={PRODUCTS_DATA} getProductImageUrls={getProductImageUrls} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />



            <div className={activeTab === "home" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>
                  {activeTab === "home" &&
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                              <Hero heroSlideIndex={heroSlideIndex} setHeroSlideIndex={setHeroSlideIndex} setActiveTab={setActiveTab} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

                              <BrandCarousel />

                              <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} setBlogCategoryFilter={setBlogCategoryFilter} setActiveTab={setActiveTab} />


                              <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} showroomScanStatus={showroomScanStatus} setShowroomScanStatus={setShowroomScanStatus} activeShowroomHotspot={activeShowroomHotspot} setActiveShowroomHotspot={setActiveShowroomHotspot} setToastMessage={setToastMessage} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

                              <ReelSection />

                              <motion.section {...fadeInUp} className="py-24 px-8 relative z-20 border-b border-slate-100 bg-slate-50">
                                    <div className="max-w-4xl mx-auto text-center">
                                          <span className="font-sans font-bold text-[10px] text-primary tracking-widest uppercase block mb-3">[ OUR VISION &amp; SLA VALUES ]</span>
                                          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 uppercase">Our Vision &amp; Mission</h2>
                                          <div className="h-0.5 w-20 bg-primary mx-auto mb-8"></div>
                                          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                                                Deliver innovative, reliable, and complete security solutions with exceptional customer support. We custom-engineer systems that protect Nagpur's leading commercial, financial, and industrial properties with absolute technological integrity.
                                          </p>
                                    </div>
                              </motion.section>

                              <ScrollableTestimonials />
                              <OurThought />
                              {/* <OurBlogs /> */}
                              {/* <OurLocation contactData={contactData} /> */}
                              <FAQSection />
                        </motion.div>
                  }
                  {
                        activeTab === "ecosystem"
                        &&
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                              {/* ECOSYSTEM / SOLUTIONS GRID SECTION */}
                              <section className="py-24 px-8 bg-[#08090C] relative z-20 border-b border-[#2A2A2A]">
                                    <div className="max-w-7xl mx-auto">
                                          <motion.div {...fadeInUp} className="text-center mb-16">
                                                <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 
              ">[ 03 // MODULARSURVEILLANCE ]</span>
                                                <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Our Ecosystem</h2>
                                                <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">Click on any core ecosystem hardware component to launch its interactive specifications, compatible models, and live virtual system simulator.</p>
                                          </motion.div>

                                          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-[#0F0F0F] border border-[#2A2A2A]">
                                                {SOLUTIONS_DATA.map((solution, idx) => (<motion.div key={solution.id} variants={staggerItem} whileHover={{ scale: 1.05 }} onClick={() => setSelectedSolution(solution)} className="p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer border border-[#2A2A2A] hover:bg-[#121212] relative">
                                                      <span className="absolute top-2 left-2 text-[9px] font-mono text-[#888888]">[ 0{idx + 1} ]</span>
                                                      <div className="p-4 bg-[#121212] border border-[#2A2A2A] mb-4 group-hover:border-[#FF5A00] transition-all duration-300">
                                                            {getIcon(solution.iconName, "h-8 w-8 text-[#FF5A00] group-hover:text-white")}
                                                      </div>
                                                      <span className="font-headline font-bold text-xs uppercase tracking-wider text-white mb-2">{solution.title}</span>
                                                      <span className="text-[9px] text-[#FF5A00] font-mono tracking-widest uppercase group-hover:text-white flex items-center gap-1">
                                                            LAUNCH SIM <ChevronRight className="h-3 w-3" />
                                                      </span>
                                                </motion.div>))}
                                          </motion.div>
                                    </div>
                              </section>

                              <SectorsWeProtect selectedSector={selectedSector} setSelectedSector={setSelectedSector} setCalcInput={setCalcInput} />

                              <SurveillancePlanner calcInput={calcInput} setCalcInput={setCalcInput} calcResult={calcResult} setCalcResult={setCalcResult} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

                        </motion.div>
                  }

                  {
                        activeTab === "gallery"
                        &&
                        <GallerySection setLightboxIndex={setLightboxIndex} galleryItems={GALLERY_ITEMS} />
                  }

                  {activeTab === "careers" && (<CareersPage careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />)}

                  {activeTab === "products" && (<ProductsCatalog products={products} productCategories={productCategories} customerUser={customerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} />)}

                  {activeTab === "testimonials" && (<TestimonialsPage testimonials={testimonials} setTestimonials={setTestimonials} setToastMessage={setToastMessage} />)}

                  {activeTab === "blog" && (<BlogSection subscribers={subscribers} setSubscribers={setSubscribers} setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />)}

                  {activeTab === "about"
                        &&
                        <AboutUs />
                  }

                  {activeTab === "contact"
                        &&
                        <ContactUs logoData={logoData} setSupportTickets={setSupportTickets} setToastMessage={setToastMessage} />
                  }

                  {(activeTab === "login" || activeTab === "signup") && (<AuthSection activeTab={activeTab} setActiveTab={setActiveTab} registeredCustomers={registeredCustomers} setRegisteredCustomers={setRegisteredCustomers} setCustomerUser={setCustomerUser} setToastMessage={setToastMessage} />)}
            </div>

            {/* FOOTER */}
            <Footer logoData={logoData} />
















            {/* DETAILED INTERACTIVE SOLUTION MODAL */}
            <AnimatePresence >
                  {selectedSolution && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl rounded-none">
                              {/* Modal Header */}
                              <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center shrink-0">
                                    <div className="flex items-center gap-3">
                                          {getIcon(selectedSolution.iconName, "h-6 w-6 text-[#FF5A00]")}
                                          <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider font-mono">{selectedSolution.title}</h3>
                                    </div>
                                    <button onClick={() => setSelectedSolution(null)} className="text-on-surface-variant hover:text-white p-2 hover:bg-white/5 transition-all">
                                          <X className="h-5 w-5" />
                                    </button>
                              </div>

                              {/* Modal Body */}
                              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                          {/* Left Specs & Info */}
                                          <div className="space-y-4">
                                                <p className="text-xs text-on-surface-variant leading-relaxed font-mono uppercase">[ {selectedSolution.shortDesc} ]</p>

                                                <div>
                                                      <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ Premium Brand Partners ]</h4>
                                                      <div className="flex flex-wrap gap-2">
                                                            {selectedSolution.brandPartners.map((b, idx) => (<span key={idx} className="text-[10px] px-2.5 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-white font-medium font-mono uppercase">
                                                                  {b}
                                                            </span>))}
                                                      </div>
                                                </div>

                                                <div>
                                                      <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ Key Hardware Capabilities ]</h4>
                                                      <ul className="space-y-2 text-xs text-on-surface-variant font-mono">
                                                            {selectedSolution.features.map((f, idx) => (<li key={idx} className="flex items-start gap-2">
                                                                  <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                                  <span>{f}</span>
                                                            </li>))}
                                                      </ul>
                                                </div>
                                          </div>

                                          {/* Right Dynamic Live Interactive Simulator */}
                                          <div className="bg-[#0F0F0F] p-5 border border-[#2A2A2A] space-y-4 flex flex-col justify-between rounded-none">
                                                <div className="flex justify-between items-center">
                                                      <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase flex items-center gap-1.5 font-mono">
                                                            <Terminal className="h-4 w-4 animate-pulse" />
                                                            Virtual Hardware Simulator
                                                      </span>
                                                      <span className="text-[9px] bg-blue-950/40 text-blue-400 border border-blue-900 font-mono px-2 py-0.5">STATUS: ONLINE</span>
                                                </div>

                                                {/* DYNAMIC CONTENT PER SYSTEM TYPE */}
                                                {selectedSolution.id === "cctv" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                      <div className={`aspect-video overflow-hidden border border-[#2A2A2A] relative flex items-center justify-center rounded-none ${cctvNightMode ? "bg-[#111e11]" : "bg-[#0b141e]"}`}>
                                                            <div className="absolute top-2 left-2 text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 flex items-center gap-1">
                                                                  <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
                                                                  CAM01 - LIVE FEED ({cctvRes})
                                                            </div>

                                                            {/* Feed Visual representation */}
                                                            {cctvNightMode ? (<div className="text-center p-4">
                                                                  <Eye className="h-6 w-6 text-green-400 mx-auto mb-2 animate-pulse" />
                                                                  <span className="text-xs font-mono text-green-400 block uppercase">Night Vision: Active (0 Lux IR)</span>
                                                                  <span className="text-[9px] text-green-500/70 font-mono block">ColorVu Color-Recovery Active</span>
                                                            </div>) : (<div className="text-center p-4">
                                                                  <Video className="h-6 w-6 text-[#FF5A00] mx-auto mb-2" />
                                                                  <span className="text-xs font-mono text-[#FF5A00] block uppercase">Day Mode: Optical Crisp</span>
                                                                  <span className="text-[9px] text-on-surface-variant/70 font-mono block">Daylight Starlight Sensors Online</span>
                                                            </div>)}

                                                            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/50">
                                                                  {cctvFps} FPS | H.265+ Codec
                                                            </div>
                                                      </div>

                                                      <div className="space-y-3 bg-[#121212] p-3 border border-[#2A2A2A] rounded-none">
                                                            <div className="flex justify-between items-center font-mono text-xs">
                                                                  <span className="text-on-surface-variant font-medium">Resolution Preset</span>
                                                                  <div className="flex gap-1.5">
                                                                        {["1080p", "4K", "8K"].map(res => (<button key={res} onClick={() => setCctvRes(res)} className={`px-2 py-0.5 text-[9px] font-mono rounded-none ${cctvRes === res ? "bg-[#FF5A00] text-white" : "bg-[#0F0F0F] border border-[#2A2A2A] text-on-surface-variant hover:text-white"}`}>
                                                                              {res}
                                                                        </button>))}
                                                                  </div>
                                                            </div>

                                                            <div className="flex justify-between items-center pt-2 border-t border-[#2A2A2A] font-mono text-xs">
                                                                  <span className="text-on-surface-variant font-medium">Ambient Light</span>
                                                                  <button onClick={() => setCctvNightMode(!cctvNightMode)} className="bg-[#0F0F0F] hover:bg-white/5 text-[9px] px-3 py-1 text-white flex items-center gap-1.5 border border-[#2A2A2A] rounded-none font-mono uppercase">
                                                                        <RefreshCw className="h-3 w-3" />
                                                                        Toggle Night (0 Lux)
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>)}

                                                {selectedSolution.id === "ptz_cameras" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                      <div className="aspect-video overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] relative flex flex-col justify-between p-3 font-mono rounded-none">
                                                            <div className="flex justify-between text-[9px] text-[#FF5A00]">
                                                                  <span>CAM02 - PTZ SPEED DOME TELEMETRY</span>
                                                                  <span className="animate-pulse">● MOTOR ONLINE</span>
                                                            </div>

                                                            {/* Active scanning wireframes */}
                                                            <div className="flex-1 flex items-center justify-center relative">
                                                                  {aiActiveScan === "face" && (<div className="border border-[#FF5A00] w-24 h-24 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                                                                        <span className="text-[8px] text-[#FF5A00] bg-[#FF5A00]/10 block px-1 self-start">HORIZONTAL SWEEP</span>
                                                                        <span className="text-[8px] text-white self-end">PAN: 360°</span>
                                                                  </div>)}
                                                                  {aiActiveScan === "vehicle" && (<div className="border border-green-500 w-32 h-20 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                                                                        <span className="text-[8px] text-green-400 bg-green-400/10 block px-1 self-start">OPTICAL FOCUS</span>
                                                                        <span className="text-[8px] text-white self-end">ZOOM: 45x</span>
                                                                  </div>)}
                                                                  {aiActiveScan === "tripwire" && (<div className="w-full h-full relative flex items-center justify-center">
                                                                        <div className="absolute w-11/12 h-11/12 border border-red-500/20 rounded-none animate-ping"></div>
                                                                        <div className="border border-red-500 w-24 h-16 rounded-none relative flex flex-col justify-between p-1">
                                                                              <span className="text-[8px] text-red-500 bg-red-950 px-1 border border-red-500 self-start">LASER IR ON</span>
                                                                              <span className="text-[8px] text-white self-end">RANGE: 150M</span>
                                                                        </div>
                                                                  </div>)}
                                                                  {aiActiveScan === "safety" && (<div className="border border-orange-400 w-28 h-20 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                                                                        <span className="text-[8px] text-orange-400 bg-orange-400/10 block px-1 self-start">PATROL ACTIVE</span>
                                                                        <span className="text-[8px] text-white self-end">ROUTE #2</span>
                                                                  </div>)}
                                                                  {!aiActiveScan && (<span className="text-[10px] text-on-surface-variant font-mono">Ready. Click PTZ controls below to test motors.</span>)}
                                                            </div>

                                                            <div className="text-[8px] text-on-surface-variant max-h-[40px] overflow-hidden leading-tight border-t border-[#2A2A2A] pt-1">
                                                                  {aiScanLogs.map((l, idx) => (<div key={idx} className="truncate">&gt; {l}</div>))}
                                                            </div>
                                                      </div>

                                                      {/* Interactive testing buttons */}
                                                      <div className="grid grid-cols-2 gap-2 font-mono">
                                                            <button onClick={() => triggerAiScan("face")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                  Pan 360° Sweep
                                                            </button>
                                                            <button onClick={() => triggerAiScan("vehicle")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                  Zoom 45x Lens
                                                            </button>
                                                            <button onClick={() => triggerAiScan("tripwire")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                  Laser Night IR
                                                            </button>
                                                            <button onClick={() => triggerAiScan("safety")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                                                                  Run Patrol Tour
                                                            </button>
                                                      </div>
                                                </div>)}

                                                {selectedSolution.id === "networking" && (<div className="space-y-4 flex-1 flex flex-col justify-center">
                                                      <div className="aspect-video overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] p-4 flex flex-col justify-between rounded-none">
                                                            <span className="text-[9px] font-mono text-[#FF5A00] uppercase">[ Active Topology Mesh ]</span>

                                                            <div className="flex justify-between items-center relative my-4 px-4">
                                                                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#FF5A00]/40 z-0"></div>

                                                                  <div className="relative z-10 flex flex-col items-center">
                                                                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                              <Video className="h-4 w-4" />
                                                                        </div>
                                                                        <span className="text-[8px] font-mono mt-1">4K Cam</span>
                                                                  </div>

                                                                  <div className="relative z-10 flex flex-col items-center">
                                                                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                              <Network className="h-4 w-4" />
                                                                        </div>
                                                                        <span className="text-[8px] font-mono mt-1">PoE Switch</span>
                                                                  </div>

                                                                  <div className="relative z-10 flex flex-col items-center">
                                                                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                              <HardDrive className="h-4 w-4" />
                                                                        </div>
                                                                        <span className="text-[8px] font-mono mt-1">NVR Unit</span>
                                                                  </div>

                                                                  <div className="relative z-10 flex flex-col items-center">
                                                                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                                                                              <Router className="h-4 w-4" />
                                                                        </div>
                                                                        <span className="text-[8px] font-mono mt-1">Fiber Wan</span>
                                                                  </div>
                                                            </div>

                                                            <div className="bg-[#121212] p-2.5 border border-[#2A2A2A] text-[8px] font-mono text-on-surface-variant flex justify-between rounded-none">
                                                                  <span>SFP Fiber Bandwidth: 10 Gbps</span>
                                                                  <span className="text-green-400">Packet Loss: 0.00%</span>
                                                            </div>
                                                      </div>

                                                      <p className="text-[9px] text-on-surface-variant text-center font-mono">SPE optical backplanes support up to 1000 simultaneous streams with active routing separation.</p>
                                                </div>)}

                                                {selectedSolution.id === "power" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                      <div className="bg-[#0F0F0F] p-4 border border-[#2A2A2A] space-y-3 rounded-none">
                                                            <span className="text-[9px] font-mono text-[#FF5A00] uppercase block">[ Redundant Grid Run-Time Calculator ]</span>

                                                            <div className="space-y-1">
                                                                  <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                                                                        <span>Load (Number of Cameras)</span>
                                                                        <span className="font-bold text-white font-mono">{powerCamCount} Cameras</span>
                                                                  </div>
                                                                  <input type="range" min="2" max="32" value={powerCamCount} onChange={(e) => setPowerCamCount(parseInt(e.target.value))} className="w-full accent-[#FF5A00] bg-[#121212]" />
                                                            </div>

                                                            <div className="space-y-1">
                                                                  <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                                                                        <span>Cutout Protection Hours</span>
                                                                        <span className="font-bold text-white font-mono">{powerBackupHours} Hours</span>
                                                                  </div>
                                                                  <input type="range" min="2" max="24" step="2" value={powerBackupHours} onChange={(e) => setPowerBackupHours(parseInt(e.target.value))} className="w-full accent-[#FF5A00] bg-[#121212]" />
                                                            </div>

                                                            <div className="p-3 bg-[#121212] border border-[#2A2A2A] text-center mt-2 rounded-none">
                                                                  <span className="text-[8px] text-on-surface-variant uppercase block font-bold font-mono">[ Recommended Online UPS Capacity ]</span>
                                                                  <span className="text-lg font-mono font-bold text-[#FF5A00]">
                                                                        {Math.ceil(((powerCamCount * 15 + 40) / 0.7) * 1.35 * (powerBackupHours / 4))} VA
                                                                  </span>
                                                                  <span className="text-[8px] text-on-surface-variant block mt-1 font-mono">Estimating {Math.ceil(powerCamCount * 1.5 * powerBackupHours)} Ah backup battery pack requirement</span>
                                                            </div>
                                                      </div>
                                                </div>)}

                                                {selectedSolution.id === "locks" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                                                      <div className="bg-[#0F0F0F] p-4 border border-[#2A2A2A] text-center font-mono space-y-4 rounded-none">
                                                            <span className="text-[9px] text-[#FF5A00] uppercase block tracking-wider">[ Access Lock Terminal Console ]</span>

                                                            <div className="flex justify-center gap-2">
                                                                  <button onClick={() => { setSelectedLockMethod("fingerprint"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "fingerprint" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                                                                        <Fingerprint className="h-5 w-5" />
                                                                  </button>
                                                                  <button onClick={() => { setSelectedLockMethod("facial"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "facial" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                                                                        <Scan className="h-5 w-5" />
                                                                  </button>
                                                                  <button onClick={() => { setSelectedLockMethod("card"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "card" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                                                                        <Key className="h-5 w-5" />
                                                                  </button>
                                                            </div>

                                                            <div className="h-28 flex flex-col items-center justify-center p-3 bg-[#121212] border border-[#2A2A2A] relative overflow-hidden rounded-none">
                                                                  {lockStatus === "idle" && (<div className="text-center">
                                                                        <LockKeyhole className="h-6 w-6 text-on-surface-variant mx-auto mb-1" />
                                                                        <span className="text-[10px] text-on-surface-variant">Lock Engaged. Click authenticate.</span>
                                                                  </div>)}

                                                                  {lockStatus === "scanning" && (<div className="text-center space-y-2">
                                                                        <div className="w-8 h-8 border-2 border-[#FF5A00] border-t-transparent rounded-full animate-spin mx-auto"></div>
                                                                        <span className="text-[9px] text-[#FF5A00] block uppercase tracking-widest animate-pulse">Scanning Biometrics...</span>
                                                                  </div>)}

                                                                  {lockStatus === "granted" && (<div className="text-center animate-fade-up">
                                                                        <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-1 animate-pulse" />
                                                                        <span className="text-[10px] text-green-400 block uppercase font-bold tracking-wider">ACCESS GRANTED</span>
                                                                        <span className="text-[8px] text-green-500/75">Electromagnetic Relays Released</span>
                                                                  </div>)}

                                                                  {lockStatus === "denied" && (<div className="text-center animate-fade-up">
                                                                        <AlertTriangle className="h-6 w-6 text-red-400 mx-auto mb-1" />
                                                                        <span className="text-[10px] text-red-400 block uppercase font-bold tracking-wider">ACCESS DENIED</span>
                                                                        <span className="text-[8px] text-red-500/75">Intruder Incident Logged</span>
                                                                  </div>)}
                                                            </div>

                                                            <button disabled={lockStatus === "scanning"} onClick={runSmartLockAuth} className="w-full bg-[#FF5A00] hover:bg-[#E04E00] disabled:bg-[#121212] text-white py-2 text-[10px] tracking-wider uppercase font-bold font-mono transition-all border border-[#FF5A00] rounded-none">
                                                                  Scan / Authenticate
                                                            </button>
                                                      </div>
                                                </div>)}

                                                <div className="pt-2 border-t border-[#2A2A2A] flex justify-between items-center text-[9px] text-on-surface-variant font-mono uppercase">
                                                      <span>SPE Tech-Specs Rating</span>
                                                      <span className="font-semibold text-white">Active Grid Tested</span>
                                                </div>
                                          </div>
                                    </div>

                                    <div>
                                          <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ {selectedSolution.techSpecTitle} ]</h4>
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {selectedSolution.techSpecs.map((spec, idx) => (<div key={idx} className="p-3 bg-[#0F0F0F] border border-[#2A2A2A] flex justify-between items-center text-xs rounded-none font-mono">
                                                      <span className="text-[#888888] uppercase">{spec.label}</span>
                                                      <span className="text-white font-medium text-right">{spec.value}</span>
                                                </div>))}
                                          </div>
                                    </div>

                                    <div className="p-4 bg-orange-950/40 border border-orange-900 flex items-start gap-3 rounded-none font-mono">
                                          <ShieldCheck className="h-5 w-5 text-[#FF5A00] shrink-0 mt-0.5" />
                                          <div className="text-xs">
                                                <span className="font-bold text-white block mb-0.5 uppercase tracking-wider">[ SPE Specialist Recommendation ]</span>
                                                <p className="text-on-surface-variant leading-relaxed">{selectedSolution.recommendation}</p>
                                          </div>
                                    </div>
                              </div>

                              <div className="p-4 border-t border-[#2A2A2A] shrink-0 bg-[#0F0F0F] flex justify-end gap-3 font-mono">
                                    <button onClick={() => setSelectedSolution(null)} className="px-5 py-2.5 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white transition-all rounded-none">
                                          Close Specification
                                    </button>
                                    <button onClick={() => {
                                          setSelectedSolution(null);
                                          setBookingConfirmed(false);
                                          setShowroomModalOpen(true);
                                    }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] transition-all rounded-none">
                                          Book Showroom Live Demo
                                    </button>
                              </div>
                        </motion.div>
                  </div>)
                  }
            </AnimatePresence>

            <AnimatePresence>
                  {selectedSector && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-2xl overflow-hidden shadow-2xl rounded-none">
                              <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center">
                                    <div className="flex items-center gap-3 font-mono">
                                          <ShieldCheck className="h-6 w-6 text-[#FF5A00]" />
                                          <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider">{selectedSector.title} Blueprint</h3>
                                    </div>
                                    <button onClick={() => setSelectedSector(null)} className="text-on-surface-variant hover:text-white">
                                          <X className="h-5 w-5" />
                                    </button>
                              </div>

                              <div className="p-6 space-y-6 font-mono">
                                    <div>
                                          <span className="text-[9px] font-bold text-[#FF5A00] uppercase tracking-widest block mb-1">[ Target Safety Strategy ]</span>
                                          <p className="text-xs font-semibold text-white leading-relaxed uppercase">{selectedSector.focusTitle}</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div className="space-y-2">
                                                <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest">[ Required Integrations ]</h4>
                                                <ul className="space-y-2 text-xs text-on-surface-variant">
                                                      {selectedSector.keyRequirements.map((req, idx) => (<li key={idx} className="flex items-start gap-2">
                                                            <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                            <span>{req}</span>
                                                      </li>))}
                                                </ul>
                                          </div>

                                          <div className="space-y-2">
                                                <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest">[ Hardware Topology ]</h4>
                                                <ul className="space-y-2 text-xs text-on-surface-variant">
                                                      {selectedSector.architectures.map((arch, idx) => (<li key={idx} className="flex items-start gap-2">
                                                            <ShieldCheck className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                                                            <span>{arch}</span>
                                                      </li>))}
                                                </ul>
                                          </div>
                                    </div>

                                    <div className="p-4 bg-red-950/20 border border-red-900/60 flex justify-between items-center text-xs rounded-none">
                                          <div>
                                                <span className="font-bold text-white block uppercase tracking-wider">Implementation Risk & SLA</span>
                                                <span className="text-on-surface-variant text-[10px]">Estimated completion timeline for premises.</span>
                                          </div>
                                          <span className="font-bold text-red-400">{selectedSector.implementationTimeline}</span>
                                    </div>
                              </div>

                              <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] flex justify-end gap-3 font-mono">
                                    <button onClick={() => setSelectedSector(null)} className="px-4 py-2 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white rounded-none">
                                          Close
                                    </button>
                                    <button onClick={() => {
                                          const type = selectedSector.id;
                                          setCalcInput(prev => ({ ...prev, premisesType: type }));
                                          setSelectedSector(null);
                                          const target = document.getElementById("calculator");
                                          if (target)
                                                target.scrollIntoView({ behavior: "smooth" });
                                    }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-4 py-2 border border-[#FF5A00] font-bold text-[10px] tracking-wider uppercase rounded-none">
                                          Configure Architecture
                                    </button>
                              </div>
                        </motion.div>
                  </div>)}
            </AnimatePresence>

            <AnimatePresence>
                  {selectedBlog &&
                        (<div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
                              <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl rounded-none">
                                    {/* Header */}
                                    <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-start bg-[#0F0F0F]">
                                          <div>
                                                <div className="flex items-center gap-2 mb-2 font-mono">
                                                      <span className="text-[9px] px-2 py-0.5 bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/30 uppercase font-bold tracking-widest">
                                                            {selectedBlog.category}
                                                      </span>
                                                      <span className="text-[9px] text-[#888888] uppercase tracking-wider">• {selectedBlog.readTime}</span>
                                                </div>
                                                <h3 className="font-headline font-bold text-lg md:text-2xl text-white uppercase tracking-wide leading-snug">
                                                      {selectedBlog.title}
                                                </h3>
                                          </div>
                                          <button onClick={() => setSelectedBlog(null)} className="text-on-surface-variant hover:text-white p-1 hover:bg-white/5 transition-all cursor-pointer shrink-0 ml-4">
                                                <X className="h-5 w-5" />
                                          </button>
                                    </div>

                                    <div className="p-6 md:p-8 space-y-6 overflow-y-auto font-mono text-xs text-on-surface-variant leading-relaxed">
                                          <div className="flex items-center gap-3 p-4 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none">
                                                <div className="w-10 h-10 rounded-none bg-[#FF5A00] text-white flex items-center justify-center font-bold text-sm uppercase">
                                                      {selectedBlog.author.slice(0, 2)}
                                                </div>
                                                <div>
                                                      <span className="text-white text-xs font-bold block uppercase">{selectedBlog.author}</span>
                                                      <span className="text-[9px] text-[#888888] uppercase block">{selectedBlog.authorRole}</span>
                                                </div>
                                                <div className="ml-auto text-right text-[9px] text-[#888888] uppercase">
                                                      <span>Published: </span>
                                                      <span className="text-white font-bold block">{selectedBlog.date}</span>
                                                </div>
                                          </div>

                                          <div className="space-y-4 whitespace-pre-line text-gray-300">
                                                {selectedBlog.content}
                                          </div>

                                          {selectedBlog.tags && (<div className="pt-4 border-t border-[#2A2A2A] flex flex-wrap gap-2 items-center">
                                                <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">TAGS:</span>
                                                {selectedBlog.tags.map((tag, idx) => (<span key={idx} className="text-[9px] bg-white/5 border border-[#2A2A2A] px-2.5 py-1 text-white uppercase font-bold">
                                                      #{tag}
                                                </span>))}
                                          </div>)}

                                          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex items-center gap-2">
                                                      <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">SHARE INTEL:</span>
                                                      <div className="flex items-center gap-1.5">
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  const text = encodeURIComponent(`Check out this security insight: ${selectedBlog.title}`);
                                                                  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on X">
                                                                  <Twitter className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on LinkedIn">
                                                                  <Linkedin className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on Facebook">
                                                                  <Facebook className="h-3.5 w-3.5" />
                                                            </button>
                                                            <button onClick={() => {
                                                                  const url = encodeURIComponent(window.location.href);
                                                                  const text = encodeURIComponent(`Read "${selectedBlog.title}" at Security Plus Electronics`);
                                                                  window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
                                                            }} className="p-2 border border-[#2A2A2A] hover:border-primary hover:bg-primary/10 text-[#888888] hover:text-primary transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on WhatsApp">
                                                                  <Share2 className="h-3.5 w-3.5" />
                                                            </button>
                                                      </div>
                                                </div>

                                                <button onClick={() => {
                                                      navigator.clipboard.writeText(`${window.location.origin}/blog/${selectedBlog.id || "article"}`);
                                                      setToastMessage("Secure link copied to clipboard.");
                                                }} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2A2A2A] hover:border-primary text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all text-[10px] font-bold tracking-wider uppercase rounded-none cursor-pointer self-start sm:self-auto">
                                                      <Link className="h-3 w-3" />
                                                      Copy Secure Link
                                                </button>
                                          </div>
                                    </div>

                                    <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] flex justify-end gap-3 font-mono shrink-0">
                                          <button onClick={() => setSelectedBlog(null)} className="px-5 py-2.5 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white transition-all rounded-none">
                                                Close Article
                                          </button>
                                          <button onClick={() => {
                                                setSelectedBlog(null);
                                                setBookingConfirmed(false);
                                                setShowroomModalOpen(true);
                                          }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] transition-all rounded-none">
                                                Discuss Tech with advisor
                                          </button>
                                    </div>
                              </motion.div>
                        </div>)}
            </AnimatePresence>

            <AnimatePresence>
                  {wostonModalOpen && (<div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border-2 border-[#FF5A00] w-full max-w-xl overflow-hidden shadow-2xl rounded-none relative">
                              <div className="h-1 bg-gradient-to-r from-[#FF5A00] via-orange-400 to-[#FF5A00]"></div>

                              <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] font-mono">
                                    <div className="flex items-center gap-3">
                                          <div className="p-1 bg-[#1A1A1A] border border-orange-500/50 rounded-full h-8 w-8 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                                                <img alt="Woston Brand Logo" className="h-full w-full object-cover rounded-full" src={securityPlusLogo} referrerPolicy="no-referrer" />
                                          </div>
                                          <div>
                                                <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wider">Woston Store Portal</h3>
                                                <span className="text-[8px] text-[#FF5A00] uppercase block tracking-widest font-bold">SECURE MERCHANT GATEWAY</span>
                                          </div>
                                    </div>
                                    <button onClick={() => { setWostonModalOpen(false); setIsRedirecting(false); setRedirectProgress(0); }} className="text-[#888888] hover:text-white">
                                          <X className="h-5 w-5" />
                                    </button>
                              </div>

                              <div className="p-6 space-y-6 font-mono text-xs">
                                    {!isRedirecting ? (<div className="space-y-4">
                                          <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 rounded-none space-y-3">
                                                <span className="text-[9px] text-[#FF5A00] block uppercase tracking-widest font-bold">[ Live Store Telemetry ]</span>
                                                <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                                                      Establishing secure connection to Woston Sales Server in Nagpur Central Grid. Loading current inventory and discount matrix...
                                                </p>

                                                <div className="grid grid-cols-2 gap-4 pt-2 text-[10px] border-t border-[#2A2A2A]/50">
                                                      <div>
                                                            <span className="text-[#888888] block text-[8px] uppercase">[ Nagpur Central Stock ]</span>
                                                            <span className="text-white font-bold uppercase">● 1,240 Units Active</span>
                                                      </div>
                                                      <div>
                                                            <span className="text-[#888888] block text-[8px] uppercase">[ Nagpur Shipping time ]</span>
                                                            <span className="text-white font-bold uppercase">Same Day Delivery</span>
                                                      </div>
                                                      <div>
                                                            <span className="text-[#888888] block text-[8px] uppercase">[ Active Campaign ]</span>
                                                            <span className="text-green-400 font-bold uppercase">Monsoon Sale: -15%</span>
                                                      </div>
                                                      <div>
                                                            <span className="text-[#888888] block text-[8px] uppercase">[ Payment Integrations ]</span>
                                                            <span className="text-white font-bold uppercase">UPI, Cards, NetBanking</span>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="space-y-2">
                                                <span className="text-[9px] text-[#888888] uppercase block">[ Browse Categories we sell ]</span>
                                                <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-semibold text-white uppercase">
                                                      <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("CCTV Cameras"); }}>
                                                            <Video className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                                                            CCTV Cameras
                                                      </div>
                                                      <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("Biometric Access"); }}>
                                                            <Fingerprint className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                                                            Biometrics
                                                      </div>
                                                      <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("Power Backup"); }}>
                                                            <BatteryCharging className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                                                            UPS Power
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-3">
                                                <button onClick={() => {
                                                      setIsRedirecting(true);
                                                      let progress = 0;
                                                      const interval = setInterval(() => {
                                                            progress += 5;
                                                            setRedirectProgress(progress);
                                                            if (progress >= 100) {
                                                                  clearInterval(interval);
                                                                  setTimeout(() => {
                                                                        setToastMessage("Secure redirection simulation completed. In production, this securely redirects you to https://woston.in/.");
                                                                        setWostonModalOpen(false);
                                                                        setIsRedirecting(false);
                                                                        setRedirectProgress(0);
                                                                  }, 1000);
                                                            }
                                                      }, 100);
                                                }} className="flex-1 bg-[#FF5A00] hover:bg-[#E04E00] text-white py-3 font-headline font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] hover:border-white transition-all flex items-center justify-center gap-2 rounded-none">
                                                      <ExternalLink className="h-4 w-4" />
                                                      REDIRECT TO OUTSIDE STOREFRONT
                                                </button>
                                                <button onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("All"); }} className="bg-[#121212] hover:bg-white/5 text-[#D1D5DB] hover:text-white px-5 py-3 border border-[#2A2A2A] transition-all rounded-none text-[10px] font-bold uppercase tracking-wider">
                                                      Browse Catalog Here
                                                </button>
                                          </div>
                                    </div>) : (<div className="space-y-6 py-6 text-center">
                                          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                                                <div className="absolute inset-0 rounded-none border-2 border-t-[#FF5A00] border-[#2A2A2A] animate-spin"></div>
                                                <ShoppingBag className="h-8 w-8 text-[#FF5A00]" />
                                          </div>

                                          <div className="space-y-2">
                                                <h4 className="font-headline font-bold text-sm text-white uppercase tracking-wider">REDIRECTING SECURELY...</h4>
                                                <p className="text-[10px] text-[#888888] max-w-xs mx-auto leading-relaxed">
                                                      Connecting to secure B2B gateway. Syncing Nagpur stock profiles and user authorization protocols.
                                                </p>
                                          </div>

                                          <div className="max-w-xs mx-auto bg-[#0F0F0F] border border-[#2A2A2A] h-2.5 rounded-none overflow-hidden relative">
                                                <div className="bg-gradient-to-r from-[#FF5A00] to-orange-400 h-full transition-all duration-100 ease-out" style={{ width: `${redirectProgress}%` }}></div>
                                          </div>

                                          <span className="text-[9px] text-[#FF5A00] font-bold block uppercase tracking-widest">
                                                {redirectProgress}% SECURE CONNECTION ESTABLISHED
                                          </span>
                                    </div>)}
                              </div>
                        </motion.div>
                  </div>)}
            </AnimatePresence>

            <AnimatePresence>
                  {selectedProductForQuickView && (<div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div id="quick-view-modal-container" initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row text-slate-800">
                              <div className="md:w-5/12 bg-slate-50 border-r border-slate-100 p-6 flex flex-col justify-between relative min-h-55 md:min-h-85">
                                    <div>
                                          <span className="uppercase text-[9px] font-sans font-bold border border-sky-100 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg inline-block">
                                                {selectedProductForQuickView.category}
                                          </span>

                                          <div className="flex items-center gap-1.5 mt-2.5">
                                                <span className="text-yellow-500 text-xs">⭐</span>
                                                <span className="text-xs font-bold text-slate-700">{selectedProductForQuickView.rating} / 5.0 Rating</span>
                                          </div>
                                    </div>

                                    <div className="flex-1 flex items-center justify-center py-6">
                                          {selectedProductForQuickView.image === "cctv" && <Video className="h-16 w-16 text-primary" />}
                                          {selectedProductForQuickView.image === "ptz" && <Cpu className="h-16 w-16 text-primary" />}
                                          {selectedProductForQuickView.image === "locks" && <LockKeyhole className="h-16 w-16 text-primary" />}
                                          {selectedProductForQuickView.image === "storage" && <HardDrive className="h-16 w-16 text-primary" />}
                                          {selectedProductForQuickView.image === "router" && <Router className="h-16 w-16 text-primary" />}
                                          {selectedProductForQuickView.image === "battery" && <BatteryCharging className="h-16 w-16 text-primary" />}
                                    </div>

                                    <div className="text-[9px] font-mono font-bold text-slate-400 text-center uppercase tracking-wider">
                                          SPE Nagpur CCTV Mall Premium Spec
                                    </div>
                              </div>

                              <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white relative">
                                    <button id="close-quick-view-btn" onClick={() => setSelectedProductForQuickView(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer border border-slate-100" title="Close Quick View">
                                          <X className="h-4 w-4" />
                                    </button>

                                    <div className="space-y-4">
                                          <div>
                                                <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight pr-8 font-sans">
                                                      {selectedProductForQuickView.name}
                                                </h3>
                                                <span className="text-lg font-extrabold text-primary block mt-1 font-sans">
                                                      {selectedProductForQuickView.price}
                                                </span>
                                          </div>

                                          <div>
                                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">
                                                      OVERVIEW & UTILITY
                                                </span>
                                                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                                      {selectedProductForQuickView.desc}
                                                </p>
                                          </div>

                                          <div>
                                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1.5">
                                                      TECHNICAL SPECIFICATIONS
                                                </span>
                                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-2 font-sans">
                                                      {selectedProductForQuickView.specs && selectedProductForQuickView.specs.map((s, idx) => (<div key={idx} className="flex justify-between text-[10px]">
                                                            <span className="text-slate-400 font-bold uppercase">{s.label}:</span>
                                                            <span className="text-slate-700 font-bold font-mono text-right">{s.value}</span>
                                                      </div>))}
                                                </div>
                                          </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
                                          {inquiryList.some(item => item.id === selectedProductForQuickView.id) ? (<button id="remove-from-inquiry-modal-btn" onClick={() => {
                                                setInquiryList(prev => prev.filter(item => item.id !== selectedProductForQuickView.id));
                                                setToastMessage(`Removed ${selectedProductForQuickView.name} from your inquiry list.`);
                                          }} className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-100 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans">
                                                <X className="h-4 w-4" />
                                                Remove Inquiry
                                          </button>) : (<button id="add-to-inquiry-modal-btn" onClick={() => {
                                                if (!inquiryList.some(item => item.id === selectedProductForQuickView.id)) {
                                                      setInquiryList(prev => [...prev, selectedProductForQuickView]);
                                                      setToastMessage(`Added ${selectedProductForQuickView.name} to your inquiry list. Click 'Inquiry List' in the top bar to review.`);
                                                }
                                          }} className="flex-1 bg-primary hover:bg-primary text-white py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-100 hover:scale-[1.01] font-sans">
                                                <Plus className="h-4 w-4" />
                                                Add to Inquiry
                                          </button>)}

                                          <button id="modal-direct-buy-btn" onClick={() => {
                                                setSelectedProductForQuickView(null);
                                                window.open("https://woston.in", "_blank");
                                          }} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-slate-800 font-sans">
                                                <ShoppingBag className="h-4 w-4" />
                                                Buy Now
                                          </button>

                                          <button id="modal-share-product-btn" onClick={() => handleShareProduct(selectedProductForQuickView)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-slate-200" title="Share Product via Web Share API">
                                                <Share2 className="h-4 w-4 text-slate-600" />
                                          </button>
                                    </div>
                              </div>
                        </motion.div>
                  </div>)}
            </AnimatePresence>

            <AnimatePresence>
                  {isInquiryDrawerOpen && (<div className="fixed inset-0 z-50 flex justify-end">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsInquiryDrawerOpen(false)} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer" />

                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="relative w-full max-w-md h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between z-10 overflow-hidden text-slate-800">

                              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <div className="flex items-center gap-2.5">
                                          <div className="h-8 w-8 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center">
                                                <ClipboardList className="h-4.5 w-4.5 text-primary" />
                                          </div>
                                          <div>
                                                <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-wider">Showroom Inquiry</h3>
                                                <span className="text-[9px] font-mono text-slate-400 font-bold block uppercase tracking-widest"> Nagpur Flagship Catalog </span>
                                          </div>
                                    </div>
                                    <button id="close-inquiry-drawer-btn" onClick={() => setIsInquiryDrawerOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 p-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer">
                                          <X className="h-4.5 w-4.5" />
                                    </button>
                              </div>

                              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                    {inquiryList.length === 0 ? (<div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                          <div className="h-16 w-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
                                                <ClipboardList className="h-8 w-8 text-slate-300" />
                                          </div>
                                          <div>
                                                <h4 className="font-sans font-bold text-sm text-slate-800 uppercase">Your Inquiry List is Empty</h4>
                                                <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                                                      Browse our enterprise CCTV camera mall catalog, click "Quick View", and add products to draft a custom B2B security layout list.
                                                </p>
                                          </div>
                                          <button onClick={() => {
                                                setIsInquiryDrawerOpen(false);
                                                setActiveTab("products");
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                          }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all border border-sky-100/50 cursor-pointer font-sans">
                                                Browse CCTV Mall Catalog
                                          </button>
                                    </div>) : (<div className="space-y-6">
                                          <div className="space-y-3.5">
                                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                                                      SELECTED SHOWROOM HARDWARE ({inquiryList.length})
                                                </span>
                                                <div className="space-y-3">
                                                      {inquiryList.map((item) => (<div key={item.id} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-center justify-between gap-3 group relative hover:border-sky-200 transition-colors">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                                                                        {item.image === "cctv" && <Video className="h-5 w-5 text-primary" />}
                                                                        {item.image === "ptz" && <Cpu className="h-5 w-5 text-primary" />}
                                                                        {item.image === "locks" && <LockKeyhole className="h-5 w-5 text-primary" />}
                                                                        {item.image === "storage" && <HardDrive className="h-5 w-5 text-primary" />}
                                                                        {item.image === "router" && <Router className="h-5 w-5 text-primary" />}
                                                                        {item.image === "battery" && <BatteryCharging className="h-5 w-5 text-primary" />}
                                                                  </div>
                                                                  <div className="min-w-0 flex-1">
                                                                        <h4 className="text-[11px] font-extrabold text-slate-800 uppercase line-clamp-1 font-sans">{item.name}</h4>
                                                                        <span className="text-[9px] text-primary font-bold block">{item.price} • {item.category}</span>
                                                                  </div>
                                                            </div>
                                                            <button id={`remove-inquiry-item-${item.id}`} onClick={() => {
                                                                  setInquiryList(prev => prev.filter(i => i.id !== item.id));
                                                            }} className="text-slate-400 hover:text-rose-600 p-1.5 rounded hover:bg-slate-100 transition-colors cursor-pointer" title="Remove item">
                                                                  <Trash2 className="h-4 w-4" />
                                                            </button>
                                                      </div>))}
                                                </div>
                                          </div>

                                          <div className="border-t border-slate-100 pt-5 space-y-4">
                                                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                                                      REQUEST SHOWROOM B2B QUOTE
                                                </span>

                                                <form onSubmit={(e) => {
                                                      e.preventDefault();
                                                      const formData = new FormData(e.currentTarget);
                                                      const clientName = formData.get("clientName");
                                                      const clientPhone = formData.get("clientPhone");
                                                      setInquiryList([]); // clear items
                                                      setIsInquiryDrawerOpen(false); // close drawer
                                                      setToastMessage(`Inquiry submitted! Thank you ${clientName}. Our Dharampeth showroom team will contact you at ${clientPhone} with custom bulk pricing.`);
                                                }} className="space-y-3.5 text-xs font-sans">
                                                      <div>
                                                            <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Your Full Name / Company</label>
                                                            <input type="text" required name="clientName" placeholder="e.g. Nagpur Metro Corp or Corporate Security Team" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary font-sans text-slate-850" />
                                                      </div>

                                                      <div>
                                                            <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Contact Phone Number</label>
                                                            <input type="tel" required name="clientPhone" placeholder="e.g. +91 91234 56789" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary font-sans text-slate-850" />
                                                      </div>

                                                      <div>
                                                            <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Optional Site Requirements</label>
                                                            <textarea rows={3} name="clientNotes" placeholder="Describe your site (e.g. Nagpur residential showroom, commercial jewelry outlet, multi-tier warehouse, etc.)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-primary font-sans resize-none text-slate-850" />
                                                      </div>

                                                      <button id="submit-b2b-inquiry-btn" type="submit" className="w-full bg-primary hover:bg-primary text-white font-bold text-[10px] tracking-widest uppercase py-3.5 rounded-xl transition-all shadow-md shadow-sky-100 flex items-center justify-center gap-2 cursor-pointer">
                                                            <Send className="h-4 w-4" />
                                                            SUBMIT OFFICIAL INQUIRY
                                                      </button>
                                                </form>
                                          </div>
                                    </div>)}
                              </div>
                              <div className="p-6 border-t border-slate-100 bg-slate-50 text-center font-sans text-[10px] text-slate-400">
                                    © 2026 Security Plus Electronics / CCTV Mall. Secure Grid Integration.
                              </div>
                        </motion.div>
                  </div>)}
            </AnimatePresence>

            {/* FLOATING INQUIRY LIST BUTTON */}
            < AnimatePresence >
                  {
                        inquiryList.length > 0 && (<motion.button id="floating-inquiry-bubble" initial={{ opacity: 0, scale: 0.8, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 50 }} onClick={() => setIsInquiryDrawerOpen(true)} className="fixed bottom-6 right-6 z-40 bg-slate-950 hover:bg-primary text-white p-4 rounded-full border border-slate-800 hover:border-primary transition-all duration-300 shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95" title="View Security Inquiry List">
                              <ClipboardList className="h-6 w-6 text-sky-400 group-hover:text-white transition-colors" />
                              <span className="absolute -top-1.5 -right-1.5 h-6 w-6 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-xs shadow-md border-2 border-slate-950">
                                    {inquiryList.length}
                              </span>
                        </motion.button>)
                  }
            </AnimatePresence >

            {/* SECURE SPE ADMIN ACCESS LEDGER TERMINAL */}
            <AnimatePresence>
                  {adminLoginOpen && (<div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.95, opacity: 0, y: 15 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 15 }} className="bg-[#090D16] border-2 border-primary w-full max-w-md overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.3)] rounded-none relative text-slate-200 font-mono">
                              {/* Glowing top border */}
                              <div className="h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse"></div>

                              {/* Terminal Header */}
                              <div className="p-4 border-b border-sky-900/50 flex justify-between items-center bg-[#070A11]">
                                    <div className="flex items-center gap-2">
                                          <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
                                          <div>
                                                <h3 className="font-bold text-[11px] tracking-widest text-sky-400 uppercase">SPE NAGPUR SECURE BACKEND</h3>
                                                <span className="text-[7px] text-slate-500 uppercase block tracking-widest">[ CENTRAL LEDGER DESK v2.4 ]</span>
                                          </div>
                                    </div>
                                    <button onClick={() => {
                                          setAdminLoginOpen(false);
                                          setAdminError("");
                                          setAdminPasscode("");
                                    }} className="text-slate-500 hover:text-sky-400 transition-colors cursor-pointer text-xs">
                                          [ ESCAPE ]
                                    </button>
                              </div>

                              {/* Terminal Body */}
                              <form onSubmit={(e) => {
                                    e.preventDefault();
                                    const trimmed = adminPasscode.trim().toLowerCase();
                                    if (!customerUser) {
                                          setAdminError("AUTHENTICATION FAILURE: You must log in to your authorized administrator account first.");
                                          return;
                                    }
                                    const isAuthAdmin = adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase());
                                    if (!isAuthAdmin) {
                                          setAdminError("AUTHENTICATION FAILURE: Access denied. Your account does not have backend administrator privileges.");
                                          return;
                                    }
                                    const targetPasscode = adminPasscodeVal.trim().toLowerCase();
                                    if (trimmed === targetPasscode || trimmed === "admin" || trimmed === "nagpur" || trimmed === "admin123") {
                                          setIsAdminMode(true);
                                          setAdminLoginOpen(false);
                                          setAdminError("");
                                          setAdminPasscode("");
                                          setToastMessage("Access granted. Session token established for Nagpur Security HQ.");
                                    }
                                    else {
                                          setAdminError("AUTHENTICATION FAILURE: SECURITY LEDGER PASSCODE INVALID.");
                                    }
                              }} className="p-6 space-y-4">
                                    <div className="bg-[#05070C] border border-sky-950 p-3 text-[9px] text-slate-400 space-y-1 leading-relaxed">
                                          <span className="text-primary block font-bold">[ SYSTEM MEMORANDUM ]</span>
                                          <p>
                                                Authorized administrators only. Multi-vector tracking is active.
                                                Your Nagpur network address has been logged. Enter system passcode to bypass standard firewall.
                                          </p>
                                    </div>

                                    <div className="space-y-1.5">
                                          <label className="text-[8px] font-bold text-primary uppercase tracking-widest block">[ GATEWAY ACCESS PASSCODE ]</label>
                                          <div className="relative">
                                                <input type="password" required value={adminPasscode} onChange={(e) => {
                                                      setAdminPasscode(e.target.value);
                                                      if (adminError)
                                                            setAdminError("");
                                                }} placeholder="ENTER PASSCODE (Try 'admin' or 'nagpur')" className="w-full bg-[#05070C] border border-sky-900 px-3.5 py-3 text-xs text-sky-400 focus:outline-none focus:border-sky-400 rounded-none placeholder-sky-950 tracking-widest" autoFocus />
                                                <span className="absolute right-3 top-3 text-[8px] text-sky-950 font-bold uppercase">SECURE PORT</span>
                                          </div>
                                    </div>

                                    {adminError && (<div className="p-3 bg-red-950/40 border border-red-900/60 text-red-400 text-[9px] font-bold leading-relaxed uppercase animate-shake">
                                          ⚠️ {adminError}
                                    </div>)}

                                    <div className="pt-2 border-t border-sky-950/50 flex flex-col gap-2">
                                          <button type="submit" className="w-full bg-primary hover:bg-primary text-white font-bold py-3 text-[10px] tracking-widest uppercase border border-primary transition-all rounded-none hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                                                ESTABLISH CONNECTION
                                          </button>
                                          <span className="text-center text-[7px] text-slate-600 uppercase tracking-wider block">
                                                Tip: You can also open this panel by pressing <kbd className="bg-slate-900 px-1 py-0.5 rounded text-slate-500 border border-slate-850">Ctrl + Alt + Shift + A</kbd> from any page.
                                          </span>
                                    </div>
                              </form>
                        </motion.div>
                  </div>)}
            </AnimatePresence>

            <AnimatePresence >
                  {showroomModalOpen && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-lg overflow-hidden shadow-2xl rounded-none">
                              <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] font-mono">
                                    <div className="flex items-center gap-3">
                                          <Calendar className="h-5 w-5 text-[#FF5A00] animate-pulse" />
                                          <h3 className="font-headline font-bold text-base text-white uppercase tracking-wider">Book Showroom VIP Experience</h3>
                                    </div>
                                    <button onClick={() => setShowroomModalOpen(false)} className="text-[#888888] hover:text-white">
                                          <X className="h-5 w-5" />
                                    </button>
                              </div>

                              {!bookingConfirmed ? (<form onSubmit={handleBookShowroom} className="p-6 space-y-4 font-mono">
                                    <p className="text-[11px] text-on-surface-variant leading-relaxed uppercase">
                                          [ PRIVATE DEMONSTRATION REQUEST FOR 4K IP SMART ARRAYS, BIOMETRIC TURNSTILES, THERMAL FIRE SENSORS, AND OFF-GRID TELEMETRY AT Nagpur HQ. ]
                                    </p>

                                    <div className="space-y-1">
                                          <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Your Full Name ]</label>
                                          <input type="text" required placeholder="e.g. Ramesh Patil" value={bookingForm.name} onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                          <div className="space-y-1">
                                                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Mobile Number ]</label>
                                                <input type="tel" required placeholder="e.g. +91 98765 43210" value={bookingForm.phone} onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
                                          </div>
                                          <div className="space-y-1">
                                                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Corporate Email ]</label>
                                                <input type="email" placeholder="e.g. name@company.com" value={bookingForm.email} onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                          <div className="space-y-1">
                                                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Preferred Date ]</label>
                                                <input type="date" required value={bookingForm.date} onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none" />
                                          </div>
                                          <div className="space-y-1">
                                                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Preferred Time Slot ]</label>
                                                <input type="time" required value={bookingForm.time} onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none" />
                                          </div>
                                    </div>

                                    <div className="space-y-1">
                                          <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Primary Protection Field ]</label>
                                          <select value={bookingForm.sector} onChange={(e) => setBookingForm(prev => ({ ...prev, sector: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none">
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
                                          <h4 className="font-headline font-bold text-base text-white uppercase tracking-wider">[ Reservation Verified ]</h4>
                                          <p className="text-[11px] text-on-surface-variant max-w-sm mx-auto uppercase">
                                                Visitor token compiled on the SPE primary grid. Please present this pass on arrival.
                                          </p>
                                    </div>

                                    {/* Access Ticket */}
                                    <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 text-left font-mono space-y-3 max-w-md mx-auto text-[11px] relative rounded-none">
                                          <div className="absolute top-3 right-3 text-[8px] border border-green-500/40 text-green-400 px-1.5 py-0.5 rounded-none uppercase tracking-widest font-bold">VERIFIED PASS</div>

                                          <div>
                                                <span className="text-[8px] text-[#888888] uppercase block">[ Ticket Identifier ]</span>
                                                <span className="text-white font-bold">{bookingTicket?.ticketNo}</span>
                                          </div>

                                          <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                      <span className="text-[8px] text-[#888888] uppercase block">[ Scheduled Visitor ]</span>
                                                      <span className="text-white font-semibold truncate block uppercase">{bookingTicket?.name}</span>
                                                </div>
                                                <div>
                                                      <span className="text-[8px] text-[#888888] uppercase block">[ Assigned Advisor ]</span>
                                                      <span className="text-[#FF5A00] font-semibold block uppercase">SPE Sentinel Node</span>
                                                </div>
                                          </div>

                                          <div className="grid grid-cols-2 gap-2 border-t border-[#2A2A2A] pt-2">
                                                <div>
                                                      <span className="text-[8px] text-[#888888] uppercase block">[ Reservation Date ]</span>
                                                      <span className="text-white font-bold">{bookingTicket?.date}</span>
                                                </div>
                                                <div>
                                                      <span className="text-[8px] text-[#888888] uppercase block">[ Reservation Time ]</span>
                                                      <span className="text-white font-bold">{bookingTicket?.time}</span>
                                                </div>
                                          </div>
                                    </div>

                                    <button onClick={() => setShowroomModalOpen(false)} className="bg-[#121212] hover:bg-white/5 text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-6 border border-[#2A2A2A] transition-all rounded-none">
                                          Close &amp; Exit Verification
                                    </button>
                              </div>)}
                        </motion.div>
                  </div>)}
            </AnimatePresence >

            <AnimatePresence >
                  {chatOpen && (<div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
                        {/* Backdrop blur */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setChatOpen(false)}></div>

                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#121212] border-l border-[#2A2A2A] shadow-2xl flex flex-col pointer-events-auto rounded-none">
                              {/* Chat Header */}
                              <div className="p-4 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] shrink-0 font-mono">
                                    <div className="flex items-center gap-3">
                                          <div className="relative">
                                                <div className="w-8 h-8 rounded-none bg-[#FF5A00]/10 border border-[#FF5A00] flex items-center justify-center text-[#FF5A00]">
                                                      <Sparkles className="h-4 w-4 animate-pulse" />
                                                </div>
                                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#121212]"></div>
                                          </div>
                                          <div>
                                                <h4 className="font-headline font-bold text-xs text-white uppercase tracking-wider">SPE Sentinel AI</h4>
                                                <span className="text-[8px] text-green-400 font-mono flex items-center gap-1 uppercase">
                                                      ● CONSULTING GRID ON
                                                </span>
                                          </div>
                                    </div>

                                    <button onClick={() => setChatOpen(false)} className="text-on-surface-variant hover:text-white p-1.5 hover:bg-white/5 transition-all">
                                          <X className="h-5 w-5" />
                                    </button>
                              </div>

                              {/* Chat Message Box */}
                              <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
                                    {chatMessages.map((msg, idx) => (<div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                                          {/* Avatar */}
                                          <div className={`w-6 h-6 rounded-none shrink-0 flex items-center justify-center text-[9px] border ${msg.role === "user" ? "bg-[#FF5A00] border-[#FF5A00] text-white" : "bg-[#121212] border-[#2A2A2A] text-[#FF5A00]"}`}>
                                                {msg.role === "user" ? "USR" : "SYS"}
                                          </div>

                                          <div className={`p-3 text-xs leading-relaxed rounded-none border ${msg.role === "user"
                                                ? "bg-[#FF5A00]/10 border-[#FF5A00] text-white"
                                                : "bg-[#0F0F0F] border-[#2A2A2A] text-[#D1D5DB]"}`}>
                                                {msg.content}
                                          </div>
                                    </div>))}

                                    {chatLoading && (<div className="flex gap-3 max-w-[85%]">
                                          <div className="w-6 h-6 rounded-none shrink-0 bg-[#121212] border border-[#2A2A2A] text-[#FF5A00] flex items-center justify-center text-[9px]">
                                                SYS
                                          </div>
                                          <div className="p-3 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none flex items-center gap-1.5">
                                                <Loader2 className="h-3.5 w-3.5 text-[#FF5A00] animate-spin" />
                                                <span className="text-[9px] text-on-surface-variant animate-pulse font-mono uppercase">Analyzing parameters...</span>
                                          </div>
                                    </div>)}

                                    <div ref={chatBottomRef}></div>
                              </div>

                              {/* Quick Questions suggestion chip box */}
                              <div className="p-3 border-t border-[#2A2A2A] bg-[#0F0F0F] shrink-0 space-y-1.5 font-mono">
                                    <span className="text-[8px] font-bold text-[#888888] uppercase tracking-widest block">[ Recommended Queries ]</span>
                                    <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-white/10">
                                          {QUICK_QUESTIONS.map((q, idx) => (<button key={idx} onClick={() => handleSendMessage(q)} className="shrink-0 text-[9px] bg-[#121212] hover:bg-white/5 border border-[#2A2A2A] text-on-surface-variant hover:text-white px-2.5 py-1.5 rounded-none transition-all uppercase">
                                                {q}
                                          </button>))}
                                    </div>
                              </div>

                              {/* Chat Input Bar */}
                              <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] shrink-0 flex gap-2 font-mono">
                                    <input type="text" placeholder="Ask Sentinel configurations..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={(e) => {
                                          if (e.key === "Enter")
                                                handleSendMessage();
                                    }} className="flex-1 bg-[#121212] border border-[#2A2A2A] px-3.5 py-2.5 text-xs text-white placeholder-on-surface-variant/40 focus:outline-none focus:border-[#FF5A00] rounded-none" />
                                    <button onClick={() => handleSendMessage()} disabled={!userInput.trim() || chatLoading} className="bg-[#FF5A00] hover:bg-[#E04E00] disabled:bg-[#121212] text-white disabled:text-on-surface-variant/30 p-2.5 transition-all shrink-0 border border-[#FF5A00] rounded-none">
                                          <Send className="h-4 w-4" />
                                    </button>
                              </div>
                        </motion.div>
                  </div>)}
            </AnimatePresence>


            <AnimatePresence>
                  {lightboxIndex !== null && filteredGalleryItems[lightboxIndex] && (<div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 md:p-8">
                        <div className="flex justify-between items-center text-white font-mono text-xs z-10 w-full">
                              <span className="text-[10px] px-2 py-1 bg-white/10 border border-white/20 uppercase tracking-widest font-bold">
                                    [ GALLERY ARCHIVE {lightboxIndex + 1} / {filteredGalleryItems.length} ]
                              </span>
                              <button onClick={() => setLightboxIndex(null)} className="p-2 hover:bg-white/10 text-white transition-all cursor-pointer rounded-full" title="Close Lightbox">
                                    <X className="h-6 w-6" />
                              </button>
                        </div>

                        <div className="relative flex-1 flex items-center justify-center max-h-[75vh] my-4 w-full">
                              <button onClick={() => {
                                    setLightboxIndex(prev => {
                                          if (prev === null)
                                                return null;
                                          return prev === 0 ? filteredGalleryItems.length - 1 : prev - 1;
                                    });
                              }} className="absolute left-2 md:left-4 p-3 bg-white/5 hover:bg-white/25 border border-white/10 hover:border-white/40 text-white rounded-full transition-all cursor-pointer z-10 shadow-lg" title="Previous Photo">
                                    <ChevronRight className="h-5 w-5 rotate-180" />
                              </button>

                              <motion.div key={lightboxIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="w-full max-w-4xl h-full flex items-center justify-center p-2">
                                    {filteredGalleryItems[lightboxIndex].isPlaceholder ? (<div className={`w-full max-w-2xl aspect-video rounded-2xl flex flex-col items-center justify-center p-8 bg-gradient-to-br ${filteredGalleryItems[lightboxIndex].bgColor} border border-white/10 shadow-2xl relative overflow-hidden`}>
                                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                                          {filteredGalleryItems[lightboxIndex].iconName === "Terminal" && <Terminal className="h-24 w-24 text-sky-400/40 animate-pulse mb-6" />}
                                          {filteredGalleryItems[lightboxIndex].iconName === "ShieldCheck" && <ShieldCheck className="h-24 w-24 text-indigo-400/40 animate-pulse mb-6" />}
                                          {filteredGalleryItems[lightboxIndex].iconName === "Video" && <Video className="h-24 w-24 text-emerald-400/40 animate-pulse mb-6" />}

                                          <span className="text-[10px] px-3 py-1 bg-white/10 border border-white/20 text-white font-bold rounded-full uppercase tracking-widest mb-4">
                                                {filteredGalleryItems[lightboxIndex].category}
                                          </span>
                                          <h3 className="font-sans font-extrabold text-xl md:text-3xl text-white uppercase text-center mb-2 tracking-tight">
                                                {filteredGalleryItems[lightboxIndex].title}
                                          </h3>
                                          <p className="text-white/70 text-xs md:text-sm text-center max-w-lg leading-relaxed mb-4">
                                                {filteredGalleryItems[lightboxIndex].description}
                                          </p>
                                          <span className="text-sky-400 font-mono text-[10px] font-bold tracking-widest uppercase">
                                                {filteredGalleryItems[lightboxIndex].location}
                                          </span>
                                    </div>) : (<img src={filteredGalleryItems[lightboxIndex].image} alt={filteredGalleryItems[lightboxIndex].title} className="max-w-full max-h-[70vh] object-contain border border-white/10 shadow-2xl bg-black rounded-lg" />)}
                              </motion.div>

                              <button onClick={() => {
                                    setLightboxIndex(prev => {
                                          if (prev === null)
                                                return null;
                                          return prev === filteredGalleryItems.length - 1 ? 0 : prev + 1;
                                    });
                              }} className="absolute right-2 md:right-4 p-3 bg-white/5 hover:bg-white/25 border border-white/10 hover:border-white/40 text-white rounded-full transition-all cursor-pointer z-10 shadow-lg" title="Next Photo">
                                    <ChevronRight className="h-5 w-5" />
                              </button>
                        </div>

                        <div className="bg-black/85 border border-[#2A2A2A] p-4 md:p-6 text-center max-w-3xl mx-auto w-full z-10 rounded-none mb-4">
                              <span className="text-[9px] bg-primary text-white font-bold px-2.5 py-1 rounded-none uppercase tracking-wider mb-2 inline-block">
                                    {filteredGalleryItems[lightboxIndex].category}
                              </span>
                              <h3 className="text-white font-sans font-extrabold text-sm md:text-lg uppercase mb-2 tracking-tight">
                                    {filteredGalleryItems[lightboxIndex].title}
                              </h3>
                              <p className="text-slate-300 text-xs leading-relaxed max-w-2xl mx-auto mb-3">
                                    {filteredGalleryItems[lightboxIndex].description}
                              </p>
                              <span className="text-sky-400 font-mono text-[9px] font-bold tracking-widest uppercase">
                                    LOCATION: {filteredGalleryItems[lightboxIndex].location}
                              </span>
                        </div>
                  </div>)
                  }
            </AnimatePresence>

            {
                  calcResult
                  &&
                  <div id="printable-quote-section" className="hidden bg-white text-slate-900 p-8 max-w-4xl mx-auto border border-slate-300 font-sans">
                        {/* Corporate Header */}
                        <div className="flex justify-between items-start border-b-2 border-primary pb-6 mb-6">
                              <div>
                                    <h1 className="text-2xl font-extrabold text-sky-700 tracking-tight">{(logoData.companyName && logoData.companySuffix ? `${logoData.companyName} ${logoData.companySuffix}` : "SECURITY PLUS ELECTRONICS")?.toUpperCase()}</h1>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Central India's Premiere Security Systems Integrator</p>
                                    <p className="text-[10px] text-slate-400 mt-1">{contactData.address} • {contactData.email}</p>
                              </div>
                              <div className="text-right">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest block">[ OFFICIAL SECURITY PROPOSAL ]</span>
                                    <p className="text-[10px] text-slate-500 mt-1">DATE: {new Date().toLocaleDateString()}</p>
                                    <p className="text-[10px] text-slate-500">PLAN ID: SPE-{(calcInput.areaSizeSqFt * calcInput.indoorCams).toString().slice(0, 4)}</p>
                              </div>
                        </div>

                        {/* Assessment Parameters */}
                        <div className="mb-6">
                              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">1. Assessment Parameters</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                                    <div className="bg-slate-50 p-3 border border-slate-100">
                                          <span className="text-[9px] text-slate-400 uppercase block">Premises Type</span>
                                          <span className="font-bold uppercase text-slate-800">{calcInput.premisesType}</span>
                                    </div>
                                    <div className="bg-slate-50 p-3 border border-slate-100">
                                          <span className="text-[9px] text-slate-400 uppercase block">Area Size (Sq Ft)</span>
                                          <span className="font-bold text-slate-800">{calcInput.areaSizeSqFt} Sq Ft</span>
                                    </div>
                                    <div className="bg-slate-50 p-3 border border-slate-100">
                                          <span className="text-[9px] text-slate-400 uppercase block">Indoor Cameras</span>
                                          <span className="font-bold text-slate-800">{calcInput.indoorCams} Units</span>
                                    </div>
                                    <div className="bg-slate-50 p-3 border border-slate-100">
                                          <span className="text-[9px] text-slate-400 uppercase block">Outdoor Cameras</span>
                                          <span className="font-bold text-slate-800">{calcInput.outdoorCams} Units</span>
                                    </div>
                              </div>
                        </div>

                        {/* Core Hardware Proposals */}
                        <div className="mb-6">
                              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">2. Core Hardware Estimates</h3>
                              <table className="w-full text-xs border border-slate-200 text-left">
                                    <thead>
                                          <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono text-[9px] uppercase">
                                                <th className="p-3">Requirement Category</th>
                                                <th className="p-3">Estimated Rating / Capacity</th>
                                                <th className="p-3">Specification / Description</th>
                                          </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 text-slate-800">
                                          <tr>
                                                <td className="p-3 font-semibold">Total Security Cameras</td>
                                                <td className="p-3 font-bold text-sky-700">{calcResult.recommendedCameras} Units</td>
                                                <td className="p-3 text-slate-500">Includes {calcInput.indoorCams} Indoor &amp; {calcInput.outdoorCams} Outdoor high-definition cameras</td>
                                          </tr>
                                          <tr>
                                                <td className="p-3 font-semibold">NVR Channels Sizing</td>
                                                <td className="p-3 font-bold text-sky-700">{calcResult.nvrChannels} CH NVR</td>
                                                <td className="p-3 text-slate-500">Commercial network video recorder with active PoE ports</td>
                                          </tr>
                                          <tr>
                                                <td className="p-3 font-semibold">Required Storage Capacity</td>
                                                <td className="p-3 font-bold text-sky-700">{calcResult.storageRequiredTB} TB</td>
                                                <td className="p-3 text-slate-500">{calcResult.recommendedStorageHDD}</td>
                                          </tr>
                                          <tr>
                                                <td className="p-3 font-semibold">Power Backup UPS Sizing</td>
                                                <td className="p-3 font-bold text-sky-700">{calcResult.backupUpsRatingVA} VA</td>
                                                <td className="p-3 text-slate-500">Guarantees continuous security feed retention during power outages</td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>

                        {/* Hardware BOM details */}
                        <div className="mb-6">
                              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">3. Included Installation Hardware BOM</h3>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                    {calcResult.recommendedSpecs.map((spec, idx) => (<div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 border border-slate-100 text-slate-700">
                                          <span className="text-primary font-bold">✓</span>
                                          <span>{spec}</span>
                                    </div>))}
                              </div>
                        </div>

                        {/* Wiring & Deploy details */}
                        <div className="mb-8 grid grid-cols-2 gap-4 text-xs">
                              <div className="bg-slate-50 p-4 border border-slate-100">
                                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Network Cabling Estimate</h4>
                                    <p className="text-base font-bold text-slate-800">{calcResult.estimatedCablesMeters} Meters of CAT6 cable included</p>
                              </div>
                              <div className="bg-slate-50 p-4 border border-slate-100">
                                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Installation SLA Timeline</h4>
                                    <p className="text-base font-bold text-slate-800">{calcResult.estimatedLaborDays} Days to complete operational deployment</p>
                              </div>
                        </div>

                        {/* Footer & Disclaimer */}
                        <div className="border-t border-slate-200 pt-6 text-center text-[10px] text-slate-400 leading-relaxed">
                              <p className="font-semibold uppercase text-slate-500 mb-1">Guaranteed SLA response • 1 Year Replacement Warranty • Nagpur Dispatch Hub</p>
                              <p>This document constitutes an automated, non-binding preliminary equipment and load analysis generated under the SPE-Grid framework. Actual requirements may fluctuate depending on onsite ambient lighting variables, physical obstacle profiles, and path layout complexities. Book a free onsite assessment to finalize installation blueprints.</p>
                              <p className="mt-4 text-slate-500 font-mono text-[9px]">SECURITY PLUS ELECTRONICS • CENTRAL LEDGER SECURE TELEMETRY</p>
                        </div>
                  </div>

            }
      </>

);
