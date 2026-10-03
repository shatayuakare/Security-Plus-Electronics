
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

