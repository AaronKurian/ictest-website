import "./dashboard.css";
import React, { useState, useEffect } from "react";
import { supabase } from "../Ictest26/supabaseClient";

export default function Dashboard() {
  const [allowAuthorLogin, setAllowAuthorLogin] = useState(true); // default true for safety

  // Fetch allowAuthorLogin from admin_settings
  useEffect(() => {
    async function fetchSetting() {
      try {
        const { data, error } = await supabase
          .from('admin_settings')
          .select('allow_author_login')
          .eq('id', 1)
          .single();
        if (!error && data && typeof data.allow_author_login === 'boolean') {
          setAllowAuthorLogin(data.allow_author_login);
        }
      } catch (err) {
        // fallback: keep default true
      }
    }
    fetchSetting();
  }, []);

  return (
    <div className="dashboard">
      <h1>
        <span>Second International Conference on Trends in </span>
        <span>
          ​Engineering Systems and Technologies{" "}
          <span className="number-specific">2025</span>{" "}
        </span>
        <span>
          {" "}
          ​(ICTEST <span className="number-specific">2025</span>)
        </span>
      </h1>
      <h2>
        <span>
          April <span className="number-specific">3-5, 2025</span> Kochi{" "}
          <span className="number-specific">21</span>, India
        </span>
      </h2>
      <div className="blinking-buttons">
        <a href="https://forms.gle/aWHQbBVx7hr3HSLj6" target="_blank">
          Author Registration Started
        </a>

        <a href="/docs/ICTEST.pdf" target="_blank">
          Download Brochure
        </a>
      </div>
      <div style={{ minHeight: "20px" }} />
      <div className="non-blinking-buttons">
        <a href="docs/Master_ SCHEDULE_OFF.pdf" target="_blank">
          Presentation Schedule (OFFLINE)
        </a>

        <a href="/docs/Master_ SCHEDULE_OL.pdf" target="_blank">
          Presentation Schedule (ONLINE)
        </a>
      </div>
      <h3>About the Conference</h3>
      <p>
        The ICTEST-2025 conference covers all aspects of intelligent and smart
        computing systems design, including software and hardware. IEEE Kerala
        Section is a technical co-sponsor of the conference. Attendees can learn
        about current research and development in Information Technology at
        ICTEST-2025. In addition to Intelligent Systems and Applications, Big
        Data Processing, Internet of Things and Blockchain, Secure Information
        Processing, Cloud Computing, Edge and Fog Computing, Robotics and
        automation, Scalable Computing, Neuromorphic Engineering, Multimedia
        Systems, Electronic Design Automation, Emerging Technologies, Healthcare
        systems, Power and Energy Systems, and more, ICTEST'25 covers a wide
        range of topics. Accepted papers will be submitted for inclusion into
        IEEE Xplore subject to meeting IEEE Xplore's scope and quality
        requirements.
      </p>
      <h3>
        <span>
          Organizing Institution : Govt Model Engineering College, Thrikkakara,
          Kochi <span className="number-specific">21</span>, Kerala, India
        </span>
      </h3>
      <p>
        The 2nd International Conference on Trends in Engineering Systems and
        Technologies (ICTEST) 2025 is organized ​by Govt. Model Engineering
        College, Thrikkakara, with the Technical Sponsorship of IEEE Kerala
        Section. For over ​35 years, Govt. Model Engineering College has
        empowered its students to lead the way in engineering and ​technology
        innovation. Affiliated with APJ Abdul Kalam Technological University
        (KTU), Kerala, this pioneering ​institution was the first engineering
        college established by the Government of Kerala under the aegis of the
        Institute ​of Human Resource Development (IHRD). Previously affiliated
        with Cochin University of Science and Technology ​(CUSAT), the college
        has consistently achieved record-breaking placements.
      </p>
      
      {allowAuthorLogin && (
        <a href="/2026/login" className="ictest26-login-btn">
          Author Login for ICTEST 2026
        </a>
      )}
    </div>
  );
}
