export const SOLUTIONS_DATA = [
    {
        id: "cctv",
        title: "CCTV Cameras",
        shortDesc: "Enterprise high-definition analog & IP video surveillance with optical zooms and night vision.",
        iconName: "Video",
        brandPartners: ["Hikvision", "Dahua", "CP Plus", "Woston", "Bosch", "Sony"],
        features: [
            "Ultra-HD 4K (8 Megapixel) resolution options for crystal clear face & license plate extraction",
            "ColorVu & Full-Color night vision technologies that render crisp, color video even in 0 lux darkness",
            "PTZ (Pan-Tilt-Zoom) with up to 45x optical zoom and smart patrol path configurations",
            "Starlight sensors & advanced Wide Dynamic Range (WDR) to handle high-contrast backlighting",
            "H.265+ Smart Codec compressing high-res recordings to save up to 80% on storage space"
        ],
        techSpecTitle: "Optics & Transmission Specs",
        techSpecs: [
            { label: "Supported Formats", value: "IP (Network), HD-TVI, HD-CVI, AHD, Analog CVBS" },
            { label: "Lens Configurations", value: "2.8mm, 4mm, 6mm Fixed; 2.7-13.5mm Varifocal" },
            { label: "Night Vision Distance", value: "Up to 80 Meters (Active EXIR IR & Warm White LED)" },
            { label: "Weatherproofing", value: "IP67 & IP68 Dust/Waterproof, IK10 Vandal-Proof Rated" }
        ],
        recommendation: "For general retail and outdoor perimeters, we recommend our 4MP IP Varifocal Dome cameras with ColorVu night-vision linked to an 8-channel PoE NVR."
    },
    {
        id: "ptz_cameras",
        title: "PTZ Speed Domes",
        shortDesc: "High-speed pan-tilt-zoom cameras with automatic target tracking and powerful optical zooms.",
        iconName: "Cpu",
        brandPartners: ["Hanwha Vision", "Uniview", "Hikvision Pro", "Woston Premium", "Axis"],
        features: [
            "Optical Patrol Modes: Automated cruise scan paths covering up to 360-degree surveillance zones",
            "Laser-Assisted Auto Focus: Seamlessly focus on moving vehicles and personnel in less than 0.1s",
            "Extreme Weather Resistance: Heavy-duty aluminum alloys rated at IK10 vandal-proof and IP68 waterproof",
            "Integrated Alarm I/O: Seamless connection to physical panic buttons, outdoor sirens, and flashers",
            "Long-Range Infrared Night Vision: High-intensity active matrix LEDs throwing light up to 150 meters"
        ],
        techSpecTitle: "PTZ Tracking Specifications",
        techSpecs: [
            { label: "PTZ Cruise Paths", value: "Up to 8 custom cruise routes with 32 preset coordinates per route" },
            { label: "Pan/Tilt Range & Speed", value: "360° continuous pan at up to 240°/sec; -15° to 90° tilt with auto-flip" },
            { label: "Local Storage MicroSD", value: "Supports up to 512GB high-speed edge recording on-camera" },
            { label: "Integration Protocols", value: "ONVIF Profile S/G/T, API triggers, dry contact I/O relays" }
        ],
        recommendation: "For industrial shipping gates and spacious perimeters, install Woston 8MP PTZ bullet cameras to automatically sweep the entire yard and track moving transport trucks."
    },
    {
        id: "networking",
        title: "Networking Products",
        shortDesc: "The backbone of your security. Optical fiber, managed PoE switches, and ultra-safe routers.",
        iconName: "Router",
        brandPartners: ["Cisco", "TP-Link Omada", "Ubiquiti", "D-Link", "Ruijie", "SPE Networks"],
        features: [
            "Layer 2 and Layer 3 Managed PoE+ Switches with high power budgets up to 30W per port",
            "Single-Mode & Multi-Mode Fiber Optic cabling setups for lightning fast multi-kilometer transfers",
            "Secure Firewalls & Dual-WAN Routers preventing unauthorized remote access or camera jamming",
            "Wireless Point-to-Point Bridges linking cameras across vast properties without digging trenches",
            "Enterprise Wi-Fi 6 Access Points providing seamless roaming for on-site mobile monitoring apps"
        ],
        techSpecTitle: "Infrastructure Sizing",
        techSpecs: [
            { label: "Backplane Capacity", value: "Up to 128 Gbps switching capacity for zero latency streams" },
            { label: "PoE Standards", value: "IEEE 802.3af/at/bt PoE++ (up to 90W on high-power PTZ ports)" },
            { label: "Security Layers", value: "IPsec VPN, OpenVPN, WPA3, Port Isolation, DHCP Snooping" },
            { label: "VLAN Separation", value: "Dedicated Surveillance VLAN to keep video traffic isolated" }
        ],
        recommendation: "Always separate camera traffic onto a distinct, non-routed Surveillance VLAN using TP-Link Managed PoE switches to guarantee steady frame rates and robust physical network security."
    },
    {
        id: "power",
        title: "Power Backup",
        shortDesc: "Surge protection and industrial UPS systems ensuring 100% uptime through blackouts.",
        iconName: "BatteryCharging",
        brandPartners: ["APC by Schneider", "Luminous", "Microtek", "Eaton", "SPE Power"],
        features: [
            "Pure Sine Wave Online UPS systems that filter dangerous voltage spikes, sags, and surges",
            "Smart Battery Management extending backup duration seamlessly during long commercial power cuts",
            "Power-over-Ethernet (PoE) UPS grids maintaining power to all cameras even if main circuit panels fail",
            "Off-Grid Solar-powered security rigs with long-range telemetry transmitters for remote perimeters",
            "Automatic Transfer Switches (ATS) linking seamlessly with onsite diesel generators"
        ],
        techSpecTitle: "Power Regulation Specs",
        techSpecs: [
            { label: "Topology", value: "Double-Conversion Online UPS (0ms transfer time to battery)" },
            { label: "Power Protection", value: "Surge rating up to 1200 Joules, automatic AVR line correction" },
            { label: "Remote Monitoring", value: "SNMP card ready, real-time battery health alerts via SMS/Email" },
            { label: "Expansion Capacity", value: "Supports daisy-chaining up to 4 external hot-swappable battery packs" }
        ],
        recommendation: "For typical corporate facilities, an APC 2000VA Online UPS is perfect to keep an 8-camera grid, PoE switch, and NVR operational for up to 4 hours of complete power loss."
    },
    {
        id: "locks",
        title: "Smart Locks",
        shortDesc: "Biometric doors, magnetic locks, turnstiles, and RFID access tracking for enterprise grids.",
        iconName: "LockKeyhole",
        brandPartners: ["Yale", "Godrej", "ZKTeco", "Hikvision Access", "DormaKaba"],
        features: [
            "State-of-the-art Biometric Fingerprint & 3D Face Recognition door terminals",
            "RFID card and secure NFC keyfob swipe systems with detailed timestamped employee attendance logs",
            "Electromagnetic Locks with holding forces up to 1200 lbs (550 kg) for double double-doors",
            "Sleek Smart Video Door Phones with integrated remote smartphone lock release triggers",
            "Fire-Alarm Integration that automatically unlocks emergency exits during fire evacuation events"
        ],
        techSpecTitle: "Access Management Specs",
        techSpecs: [
            { label: "Authentication Speed", value: "Fingerprint matching <0.3s; 3D Face Scan matching <0.1s" },
            { label: "Audit Log Capacity", value: "Saves up to 500,000 historical access events in non-volatile memory" },
            { label: "Fail-Safe Configurations", value: "Selectable Fail-Safe (unlocks on power loss) or Fail-Secure (remains locked)" },
            { label: "Enclosure Standard", value: "Alloy housing, dust-proof keys, outdoor weather-resistant terminals" }
        ],
        recommendation: "Combine a ZKTeco biometric fingerprint scanner on internal office doors with Godrej heavy-duty magnetic locks, configured to instantly release upon fire panel activation."
    }
];
export const SECTORS_DATA = [
    {
        id: "residential",
        title: "Residential",
        iconName: "Home",
        threatLevel: "Standard",
        focusTitle: "Family Safety & Easy App Monitoring",
        keyRequirements: [
            "Full coverage around home perimeters, garages, and front doors",
            "Discreet cameras that do not ruin house aesthetics",
            "Instant push alerts on smartphones when package delivery or strangers arrive",
            "Electronic keyless entry so children never get locked out"
        ],
        architectures: [
            "4MP ColorVu PoE Dome cameras with broad field-of-view mounted on eaves",
            "Secure Wi-Fi Video Doorbell linked to indoor chime and Google Home/Alexa",
            "Biometric fingerprint deadbolt lock on the main entrance",
            "4-channel compact PoE NVR hidden in a ventilated closet with local storage"
        ],
        implementationTimeline: "Completed in 1-2 working days."
    },
    {
        id: "commercial",
        title: "Commercial",
        iconName: "Building",
        threatLevel: "Medium",
        focusTitle: "Loss Prevention & Staff Attendance Tracking",
        keyRequirements: [
            "High-density coverage of retail checkout zones and point-of-sale cash registers",
            "Vandal-proof cameras for high-traffic corridors and loading bays",
            "Biometric attendance clock-in terminal integrated with payroll software",
            "Scheduled central locking and isolated server rack security"
        ],
        architectures: [
            "8MP 4K Bullet cameras pointed at cash registers and warehouse storage gates",
            "Managed 24-Port Gigabit PoE+ network switches with dedicated Surveillance VLAN",
            "ZKTeco facial recognition terminal for front door attendance tracking",
            "16-channel Enterprise NVR with RAID-5 HDD arrays to prevent data loss"
        ],
        implementationTimeline: "Completed in 3-5 working days."
    },
    {
        id: "healthcare",
        title: "Healthcare",
        iconName: "HeartPulse",
        threatLevel: "High",
        focusTitle: "Patient Well-being & Restricted Area Access",
        keyRequirements: [
            "Non-intrusive surveillance in patient wards and corridors",
            "Strict RFID/Biometric access control for drug storage cabinets and operating rooms",
            "Continuous system uptime with double emergency battery backup systems",
            "Silent incident alert buttons at nursing stations"
        ],
        architectures: [
            "High-definition Dome cameras with broad dynamic range for corridor lighting",
            "RFID cards with individual department access restrictions for doctors and nurses",
            "Dedicated UPS backup grids on all security cameras and door locks",
            "AI tripwire detection at critical ward exits to flag patients leaving unauthorized areas"
        ],
        implementationTimeline: "Completed in 5-8 working days."
    },
    {
        id: "banking",
        title: "Banking",
        iconName: "Briefcase",
        threatLevel: "Critical",
        focusTitle: "Absolute Protection & Dual-Auth Security Vaults",
        keyRequirements: [
            "Dual-camera vault grids with overlapping angles to eliminate blind spots",
            "High-security biometric authentication requiring multiple approvals for door entry",
            "Redundant storage capturing video on-premise and synchronized off-site",
            "Immediate panic-switch integration with local police stations"
        ],
        architectures: [
            "Starlight bullet cameras tracking teller cash exchanges with facial profiling",
            "3D facial recognition combined with fingerprint swipe for vault entry doors",
            "Redundant NVR systems running real-time mirroring and cloud-synced feeds",
            "Anti-tampering sensors on all camera housings trigger alarms if spray-painted or blocked"
        ],
        implementationTimeline: "Completed in 10-15 working days."
    },
    {
        id: "industrial",
        title: "Industrial",
        iconName: "Factory",
        threatLevel: "High",
        focusTitle: "Thermal Monitoring & Worker PPE Compliance",
        keyRequirements: [
            "Thermal camera surveillance to detect overheating machine parts or silent smoldering fire",
            "Heavy-duty rustproof and explosion-proof camera housings for chemical environments",
            "AI safety detection models that verify workers are wearing hard-hats and high-visibility vests",
            "Vast perimeter intrusion detection systems along long fencing lines"
        ],
        architectures: [
            "Bi-spectrum Thermal and Optical cameras mounted on high lighting poles overlooking raw yards",
            "AI edge cameras analyzing worker PPE compliance in real-time on machinery floors",
            "Long-range wireless bridges conveying high-res feeds across 2+ kilometer perimeters",
            "Heavy-duty IP68 outdoor stainless steel domes for wet chemical treatment areas"
        ],
        implementationTimeline: "Completed in 7-12 working days."
    }
];
export const QUICK_QUESTIONS = [
    "Which camera is best for complete night darkness?",
    "How much storage do I need for a 4-camera setup?",
    "Tell me about your PTZ Speed Domes and optical zooms.",
    "Where is your CCTV Mall located in Nagpur?",
    "Can you help me plan a banking vault security architecture?"
];
// export const TESTIMONIALS_DATA = [
//     {
//         id: "t1",
//         clientName: "Ramesh Deshmukh",
//         designation: "Chief Infrastructure Officer",
//         organization: "Nagpur Metro Rail Corporation",
//         category: "commercial",
//         rating: 5,
//         content: "We partnered with Security Plus Electronics to secure our main metro depot and admin centers in Nagpur. Their expertise in single-mode optical fiber backplanes and Hikvision high-density PTZ tracking cameras is unmatched. Absolutely flawless installation and prompt critical support.",
//         systemInstalled: "128-Channel Fiber Optic PTZ CCTV Network Grid",
//         date: "2026-03-12",
//         verified: true
//     },
//     {
//         id: "t2",
//         clientName: "Ananya Agrawal",
//         designation: "Director of Retail Ops",
//         organization: "Dharampeth Jewellers",
//         category: "banking",
//         rating: 5,
//         content: "In jewelry retail, zero blind-spots is a life-and-death requirement. SPE custom-built an overlapping 4K network dome camera array with biometric vault doors and high-tension electromagnetic lockouts. The system integrated perfectly with our local police alerts. Outstanding craft!",
//         systemInstalled: "Overlapping 4K Cash-Zone Dome & Biometric Vault grid",
//         date: "2026-05-18",
//         verified: true
//     },
//     {
//         id: "t3",
//         clientName: "Dr. Sudhir Phadke",
//         designation: "Chief of Staff & Managing Director",
//         organization: "Orange City Hospital Nagpur",
//         category: "healthcare",
//         rating: 5,
//         content: "Patient safety and restricted drug storage locks were our primary headache. SPE designed a department-restricted RFID access control grid and configured precise perimeter optical beam sensors. Their double online UPS backplane keeps our entire cameras and locks online through long Nagpur summer load-shedding.",
//         systemInstalled: "RFID Ward Locks, Perimeter Beam Sensors, and 3000VA UPS backup",
//         date: "2026-04-05",
//         verified: true
//     },
//     {
//         id: "t4",
//         clientName: "Rajesh Joshi",
//         designation: "HOD Computer Science Dept",
//         organization: "VNIT Nagpur",
//         category: "industrial",
//         rating: 5,
//         content: "SPE deployed a high-speed campus-wide wireless networking bridge connecting remote laboratory blocks back to our central NVR unit. Their knowledge of managed Layer 3 network switches and Surveillance VLAN segregation is of true academic and engineering standards.",
//         systemInstalled: "Long-range Wireless Bridge, 24-Port Managed PoE Switch Grid",
//         date: "2026-01-20",
//         verified: true
//     },
//     {
//         id: "t5",
//         clientName: "Abhishek Singhania",
//         designation: "Estate Owner",
//         organization: "Civil Lines Luxury Estates",
//         category: "residential",
//         rating: 5,
//         content: "I wanted a highly discreet but highly powerful perimeter security shield for my family residence in Nagpur. SPE set up sleek 4MP ColorVu cameras matching my eave colors, and deadbolt biometric entry locks. The custom mobile application setup provides instant and flawless remote control.",
//         systemInstalled: "Residential Dome Shield & Smart Biometric Fingerprint Deadbolts",
//         date: "2026-06-01",
//         verified: true
//     }
// ];

export const BLOGS_DATA = [
    {
        id: "b1",
        title: "Understanding Optical Sensor Physics: Starlight vs. ColorVu",
        excerpt: "An engineering breakdown of how aperture size, sensor pixels, and ISP noise reduction algorithms render sharp color video in near total darkness.",
        category: "Optics & Sensors",
        author: "Ashish Deshmukh",
        authorRole: "Senior Optics Consultant, SPE",
        date: "2026-05-24",
        readTime: "5 min read",
        tags: ["ColorVu", "Starlight", "Sensors", "Sony STARVIS"],
        content: `In modern security operations, night-time clarity is critical. Historically, surveillance systems defaulted to black-and-white infrared (IR) night vision. While effective for simple presence detection, IR fails to capture vital color signatures (e.g., vehicle colors, clothing patterns).\n\n### The Shift to Large Aperture Lenses\n\nTo capture color in pitch darkness (0 lux), camera manufacturers use two distinct approaches:\n\n1. **Ultra-Large F1.0 Apertures:** Traditional lenses operate at F1.6 to F2.0. An F1.0 aperture gathers over **4x more light** into the optical sensor, providing the baseline illumination needed for color capture.\n\n2. **Advanced Back-Illuminated (BSI) Sensors:** Sony's STARVIS and custom Dahua/Hikvision sensors place the photodiode wiring behind the light-receptive layer. This layout maximizes active pixel surface area, capturing scattering photons with near 100% quantum efficiency.\n\n### Digital ISP Noise Reduction\n\nWhen light levels drop, raw sensor voltage suffers from thermal and quantization noise. High-end surveillance cameras deploy **3D Digital Noise Reduction (3D-DNR)**. Unlike standard spatial filtering, 3D-DNR compares sequential frames in real-time, mathematically filtering temporary static noise while maintaining pixel sharpness on moving human figures.\n\n**Specialist recommendation:** For outdoor city perimeters, specify **Hikvision ColorVu or Dahua Full-Color arrays with F1.0 lenses** to guarantee active color forensics through blackouts.`
    },
    {
        id: "b2",
        title: "VLAN Separation and Port Isolation: Cyber-Securing Your CCTV Backbone",
        excerpt: "Learn how to secure IP cameras from network bridging hacks, DHCP spoofing, and port scanning by engineering secure Layer 2 isolation boundaries.",
        category: "Surveillance Networking",
        author: "Pranay Shende",
        authorRole: "Infrastructure & Security Architect",
        date: "2026-06-15",
        readTime: "7 min read",
        tags: ["VLANs", "Cybersecurity", "PoE", "Port Isolation"],
        content: `IP Security cameras are computers. Mounted on external building facades, they expose a physical RJ45 ethernet port. If an intruder disconnects the camera and bridges a laptop into that port, your entire corporate network is immediately exposed.\n\nHere is how to engineer absolute network isolation on your Layer 2 PoE Switch:\n\n### 1. Dedicated Surveillance VLANs\n\nSurveillance traffic should NEVER mix with general corporate or guest traffic. Configure a dedicated **VLAN (Virtual Local Area Network)** exclusively for cameras, NVRs, and security clients. \n\n- Disable Inter-VLAN routing at your firewall, except for a single secure, encrypted endpoint used by managers for remote viewing.\n\n### 2. Port Isolation (Private VLANs)\n\nIP cameras only need to communicate with the central NVR. They never need to ping or talk to other cameras on the same switch.\n\n- Enable **Port Isolation** (also known as Private VLANs) on all camera-facing ports.\n- Mark camera ports as **Isolated** and the NVR uplink port as **Promiscuous**.\n- This prevents a compromised camera from scanning, brute-forcing, or exploiting other cameras on the grid.\n\n### 3. Mac Address Filtering and DHCP Snooping\n\nEnable **802.1X Port Authentication** or static MAC binding. If the camera MAC address changes or is disconnected, the managed PoE port immediately shuts down and alerts the operations console.\n\nSurveillance cybersecurity is an operational mandate. Contact SPE Nagpur to review your company's network security topology.`
    },
    {
        id: "b3",
        title: "Surveillance Power Grid Design: Online Double-Conversion UPS Math",
        excerpt: "Don't let a power outage turn your security system off. A deep dive into calculation formulas for line-interactive vs online pure sine-wave backup systems.",
        category: "Power Infrastructure",
        author: "Sanjay Raut",
        authorRole: "Power Grid Engineer, SPE",
        date: "2026-04-10",
        readTime: "4 min read",
        tags: ["UPS", "Sine Wave", "Battery Backup", "Sizing Formulas"],
        content: `When main utility grids fail in Nagpur during high-summer peak loads, your security system must remain 100% online. Many businesses make the mistake of using standard line-interactive consumer UPS backups, leading to camera crashes during transfer latency.\n\n### Why Double-Conversion Online UPS is Mandatory\n\nLine-interactive backups take **4 to 12 milliseconds** to switch from utility power to battery. This tiny gap causes sensitive IP camera NPUs to reboot and locks to release.\n\nAn **Online Double-Conversion UPS** constantly rectifies AC utility power to DC, charges the battery pack, and simultaneously inverts DC back to a pristine pure sine-wave AC. The transfer time is **exactly 0 milliseconds**.\n\n### Sizing Calculation Formula\n\nTo calculate your required UPS capacity in VA (Volt-Amps), follow this systematic procedure:\n\n1. **Determine Active Watt Load (W_load):**\n   - Each IP Dome Cam: 12W\n   - High-Power Zoom PTZ Cam: 30W\n   - 16-Channel PoE NVR: 40W\n   - Network Switch: 30W\n   \n   Example: 8 IP Dome Cams + 1 NVR + 1 Switch =\n   (8 x 12) + 40 + 30 = 166 Watts\n\n2. **Convert to Volt-Amps (VA):** Apply a standard power factor of 0.7 and a safety headroom factor of 1.35:\n   UPS Capacity (VA) = (W_load / 0.7) x 1.35\n   UPS Capacity = (166 / 0.7) x 1.35 = 320 VA\n\n3. **Calculate Battery Capacity for Backup Time (Ah):** To sustain 166W for 4 hours of power cut, the battery energy requirement is:\n   Total Wh = 166W x 4 hrs = 664 Watt-hours\n   At a standard 24V battery bank voltage:\n   Battery Ah = (664 Wh / 24V) = 27.6 Ah`
    }
];

export const PRODUCTS_DATA = [
    {
        id: "prod-1",
        name: "Woston IP Dome 4MP Camera",
        category: "CCTV Cameras",
        price: "₹3,499",
        rating: 4.8,
        image: "cctv",
        desc: "Professional vandal-resistant IP Dome camera with 4 Megapixel HD resolution, 30m IR starlight night vision, and on-board audio mic.",
        isBestseller: true,
        specs: [
            { label: "Resolution", value: "4MP (2560 x 1440) @ 25fps" },
            { label: "Night Vision", value: "30 Meters Smart EXIR IR" },
            { label: "Sensor", value: "1/2.8\" Progressive Scan CMOS" },
            { label: "Audio Support", value: "Built-in Microphone" }
        ]
    },
    {
        id: "prod-2",
        name: "Woston IP Bullet 4MP ColorVu",
        category: "CCTV Cameras",
        price: "₹4,299",
        rating: 4.9,
        image: "cctv",
        desc: "Outdoor bullet IP camera with F1.0 large aperture for full-color night-vision in 0 lux darkness, advanced AI human tracking, and IP67 weather rating.",
        isNewArrival: true,
        specs: [
            { label: "Resolution", value: "4MP Super-HD @ 30fps" },
            { label: "Aperture", value: "F1.0 Super Aperture (Full Color)" },
            { label: "Night Vision", value: "40 Meters Warm White LED" },
            { label: "Casing", value: "Metal Ingress Protected IP67" }
        ]
    },
    {
        id: "prod-3",
        name: "Woston Analog Bullet 2.4MP Cam",
        category: "CCTV Cameras",
        price: "₹1,499",
        rating: 4.7,
        image: "cctv",
        desc: "High-definition Analog HD bullet camera with 2.4MP resolution, dual-mode IR filter, and standard BNC coaxial outputs for cost-effective legacy setups.",
        specs: [
            { label: "Resolution", value: "1080p Full-HD (2.4MP)" },
            { label: "Supported Formats", value: "TVI / CVI / AHD / CVBS" },
            { label: "Lens Type", value: "3.6mm Fixed Focal Lens" },
            { label: "Night Vision", value: "20 Meters EXIR LED range" }
        ]
    },
    {
        id: "prod-4",
        name: "Woston PTZ Speed Dome 4MP",
        category: "CCTV Cameras",
        price: "₹18,499",
        rating: 4.9,
        image: "ptz",
        desc: "Heavy-duty outdoor PTZ camera with 45x optical zoom, full 360-degree continuous rotation, laser-assisted autofocus, and 150m IR illumination.",
        isBestseller: true,
        specs: [
            { label: "Zoom Capacity", value: "45x Optical Zoom (4.5-200mm)" },
            { label: "Pan/Tilt Speed", value: "Pan: 240°/s; Tilt: 120°/s" },
            { label: "Laser Night Range", value: "Up to 150 Meters IR Spot" },
            { label: "Smart Tracking", value: "Auto-Patrol, Auto-Target Tracking" }
        ]
    },
    {
        id: "prod-5",
        name: "Woston 8-Channel PoE NVR Recorder",
        category: "DVRs & NVRs",
        price: "₹7,999",
        rating: 4.8,
        image: "storage",
        desc: "Central Network Video Recorder with 8 independent plug-and-play PoE ports, supporting 4K streams, H.265+ encoding, and smart search playback.",
        specs: [
            { label: "PoE Interfaces", value: "8 Plug-and-Play RJ45 Ports" },
            { label: "Decoding Capacity", value: "1-ch @ 8MP / 4-ch @ 1080p sync" },
            { label: "Storage Capacity", value: "1 SATA Interface, supports up to 10TB" },
            { label: "Compressing Type", value: "H.265+ / H.265 / H.264" }
        ]
    },
    {
        id: "prod-6",
        name: "Woston 16-Channel Enterprise NVR",
        category: "DVRs & NVRs",
        price: "₹13,499",
        rating: 4.9,
        image: "storage",
        desc: "Professional 16-channel NVR with dual SATA drive slots, RAID protection, 160Mbps incoming bandwidth, and secure remote cloud streaming.",
        specs: [
            { label: "Max Input", value: "16 IP Camera channels up to 12MP" },
            { label: "Storage Slots", value: "2 SATA Ports, up to 20TB total" },
            { label: "Network Uplink", value: "Gigabit RJ45 Ethernet Port" },
            { label: "RAID Type", value: "RAID 0, 1, 5 Redundancy supported" }
        ]
    },
    {
        id: "prod-7",
        name: "Woston 4+2 Port PoE Switch",
        category: "PoE Switches",
        price: "₹2,199",
        rating: 4.6,
        image: "router",
        desc: "Robust desktop PoE switch with 4 high-speed Power-over-Ethernet ports, 2 uplink ports, and an integrated Extend Mode up to 250 meters cabling.",
        specs: [
            { label: "PoE Budget", value: "65W Total budget (30W max per port)" },
            { label: "PoE Standards", value: "IEEE 802.3af/at standard compliant" },
            { label: "Distance Extend", value: "Up to 250 Meters at 10Mbps bandwidth" },
            { label: "VLAN Feature", value: "One-key Port Isolation Mode" }
        ]
    },
    {
        id: "prod-8",
        name: "Woston 8+2 Port PoE Switch",
        category: "PoE Switches",
        price: "₹3,799",
        rating: 4.7,
        image: "router",
        desc: "Industrial-grade metal PoE switch featuring 8 fast ethernet PoE ports and 2 gigabit uplinks, with lighting surge protection and active watchdog.",
        specs: [
            { label: "PoE Budget", value: "120W Total, intelligent power management" },
            { label: "Transmission Link", value: "8 PoE Ports + 2 RJ45 Gig Uplinks" },
            { label: "Surge Protection", value: "6KV Differential Mode ESD shield" },
            { label: "PoE Watchdog", value: "Auto-reboots offline camera nodes" }
        ]
    },
    {
        id: "prod-9",
        name: "Woston Smart Video Door Phone (VDP)",
        category: "Video Door Phones",
        price: "₹9,499",
        rating: 4.8,
        image: "locks",
        desc: "Secure home VDP kit featuring a sleek 7-inch inside color monitor and an outdoor bell camera with starlight night lens, two-way audio, and remote unlock relay.",
        specs: [
            { label: "Display Screen", value: "7-Inch high-contrast TFT LCD panel" },
            { label: "Outdoor Camera", value: "1080p with active IR & 120° wide FOV" },
            { label: "Storage Slot", value: "MicroSD up to 128GB for visitor snapshots" },
            { label: "Remote Controls", value: "Connects to electromagnetic door latch" }
        ]
    },
    {
        id: "prod-10",
        name: "Woston CCTV Coaxial Cable 3+1 (90m)",
        category: "Cables & Power",
        price: "₹1,899",
        rating: 4.8,
        image: "battery",
        desc: "High-grade 3+1 core CCTV coaxial copper cable for flawless analog video transmission, thick shielding preventing external electromagnetic noise.",
        specs: [
            { label: "Cable Length", value: "90 Meters (300 ft) standard coil" },
            { label: "Conductor Material", value: "99.99% Pure Solid Oxygen-Free Copper" },
            { label: "Shielding", value: "95% Coverage Copper Braiding + Foil" },
            { label: "Outer Jacket", value: "Flame Retardant Heavy PVC jacket" }
        ]
    },
    {
        id: "prod-11",
        name: "Woston 8-Ch CCTV Power Supply",
        category: "Cables & Power",
        price: "₹1,199",
        rating: 4.7,
        image: "battery",
        desc: "Regulated central metal cabinet power distribution box supplying steady 12V DC power to 8 security cameras, with individual PTC glass fuses.",
        specs: [
            { label: "Output Voltage", value: "12V DC (Adjustable 11V - 14.5V)" },
            { label: "Total Current", value: "10 Amps (120 Watts total capacity)" },
            { label: "Fuses Protected", value: "8 Individual reset-able PTC channel fuses" },
            { label: "LED Indicators", value: "Individual status LED per output" }
        ]
    },
    {
        id: "prod-12",
        name: "Woston Biometric Attendance Machine",
        category: "Smart Locks & Biometrics",
        price: "₹5,499",
        rating: 4.8,
        image: "locks",
        desc: "Biometric attendance system with ultra-fast fingerprint sensing, dual visible light face-matching cameras, WiFi communication, and free reports export.",
        specs: [
            { label: "Sensing Capacity", value: "1,500 Faces, 3,000 Fingerprints" },
            { label: "Authentication Speed", value: "<0.2 seconds biometric verify" },
            { label: "Connectivity", value: "WiFi, TCP/IP network, and USB flash" },
            { label: "Software Link", value: "Free payroll software SDK integration" }
        ]
    }
];
