// import "./Tools.css";

// const Tools = () => {
//   const platforms = [
//     // Row 1
//     [
//       {
//         name: "Google Ads",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285f4"/>
//             <path d="M2 17L12 22L22 17" stroke="#4285f4" strokeWidth="2" fill="none"/>
//             <path d="M2 12L12 17L22 12" stroke="#4285f4" strokeWidth="2" fill="none"/>
//           </svg>
//         )
//       },
//       {
//         name: "Youtube Ads",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M23 12s0-3.85-.46-5.58c-.25-.95-.99-1.69-1.94-1.94C18.85 4 12 4 12 4s-6.85 0-8.6.48c-.95.25-1.69.99-1.94 1.94C1 8.15 1 12 1 12s0 3.85.46 5.58c.25.95.99 1.69 1.94 1.94C5.15 20 12 20 12 20s6.85 0 8.6-.48c.95-.25 1.69-.99 1.94-1.94C23 15.85 23 12 23 12z" fill="#FF0000"/>
//             <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="white"/>
//           </svg>
//         )
//       },
//       {
//         name: "Fb/Insta Ads",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
//           </svg>
//         )
//       },
//             {
//         name: "G Analytics",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//           </svg>
//         )
//       },
//     ],
//     // Row 2
//     [

//       {
//         name: "Microsoft Clarity",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M0 0h11.377v11.372H0V0zm12.623 0H24v11.372H12.623V0zM0 12.623h11.377V24H0V12.623zm12.623 0H24V24H12.623V12.623z" fill="#00BCF2"/>
//           </svg>
//         )
//       },
//       {
//         name: "Semrush",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <circle cx="12" cy="12" r="11" fill="#FF642D"/>
//             <path d="M7 7h10v10H7z" fill="white"/>
//             <path d="M9 9h6v6H9z" fill="#FF642D"/>
//           </svg>
//         )
//       },
//       {
//         name: "Twitter Ads",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#1DA1F2"/>
//           </svg>
//         )
//       }
//     ],
//     // Row 3
//     [
//       {
//         name: "Google Tag Manager",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <rect x="2" y="2" width="20" height="20" rx="2" fill="#246FDB"/>
//             <path d="M8 8h8M8 12h6M8 16h4" stroke="white" strokeWidth="1.5"/>
//           </svg>
//         )
//       },
      
     
//     ],
//     // Row 4
//     [

//       {
//         name: "Google Cloud",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M12.19 2.38A9.97 9.97 0 0 0 4.41 6.9a6.47 6.47 0 0 0-1.17 12.76h10.23a6.47 6.47 0 0 0 5.16-10.34A9.97 9.97 0 0 0 12.19 2.38z" fill="#4285F4"/>
//             <path d="M13.47 19.66h6.06a4.52 4.52 0 0 0 .89-8.9 9.97 9.97 0 0 0-18.84 0 4.52 4.52 0 0 0 .89 8.9h6.06" fill="#34A853"/>
//             <path d="M7.94 15.14h8.12a2.26 2.26 0 0 0 0-4.52H7.94a2.26 2.26 0 0 0 0 4.52z" fill="#FBBC05"/>
//           </svg>
//         )
//       },
//       {
//         name: "AWS",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M6.763 10.036c0 .296.032.53.088.704.064.174.144.34.24.499.04.064.056.127.056.19 0 .087-.056.175-.168.263l-.558.372c-.08.056-.16.08-.24.08-.095 0-.191-.048-.287-.144a3.11 3.11 0 0 1-.423-.59 7.642 7.642 0 0 1-.359-.733c-.904 1.068-2.04 1.602-3.408 1.602-1.224 0-2.2-.35-2.928-1.052-.728-.702-1.092-1.65-1.092-2.844 0-1.26.448-2.28 1.356-3.061.907-.781 2.12-1.172 3.632-1.172.503 0 1.02.04 1.557.127.537.087 1.074.207 1.611.367v-1.222c0-1.26-.264-2.14-.791-2.636-.528-.495-1.42-.742-2.677-.742-.576 0-1.168.071-1.776.207a12.192 12.192 0 0 0-1.8.55c-.12.048-.207.08-.263.096-.056.016-.096.024-.12.024-.104 0-.16-.08-.16-.231v-.367c0-.12.016-.207.048-.263.032-.056.096-.111.192-.159a7.895 7.895 0 0 1 2.024-.655C2.647.95 3.31.927 4.006.927c1.522 0 2.634.367 3.337 1.099.695.733 1.047 1.843 1.047 3.331v4.679zm-4.678 1.826c.487 0 .991-.088 1.522-.263.531-.175.999-.463 1.402-.863.24-.239.415-.535.518-.887.104-.351.16-.783.16-1.293v-.607a9.123 9.123 0 0 0-1.338-.311 12.038 12.038 0 0 0-1.378-.08c-.95 0-1.642.183-2.08.55-.439.367-.655.903-.655 1.602 0 .647.167 1.113.503 1.401.337.287.807.431 1.346.431z" fill="#FF9900"/>
//             <path d="M17.952 12.464c-.128 0-.215-.024-.263-.071-.048-.048-.088-.16-.127-.335L15.78 3.58c-.04-.207-.056-.335-.056-.391 0-.16.08-.247.239-.247h.975c.135 0 .223.024.271.071.048.048.08.16.112.335l1.218 6.824 1.13-6.824c.024-.175.064-.287.112-.335.048-.047.144-.071.279-.071h.798c.135 0 .231.024.279.071.048.048.096.16.112.335l1.146 6.903 1.25-6.903c.032-.175.08-.287.112-.335.048-.047.144-.071.271-.071h.926c.16 0 .247.08.247.247 0 .048-.008.096-.016.16-.008.063-.024.151-.048.263L21.735 12.1c-.04.207-.088.319-.127.367-.048.048-.144.071-.263.071h-.862c-.135 0-.231-.024-.279-.071-.048-.048-.096-.16-.112-.335l-1.13-6.647-1.114 6.64c-.024.175-.064.287-.112.335-.048.047-.144.071-.279.071h-.862z" fill="#FF9900"/>
//             <path d="M21.694 16.787c-2.216 1.634-5.433 2.499-8.202 2.499-3.88 0-7.375-1.434-10.016-3.814-.207-.191-.024-.454.231-.303 2.868 1.666 6.415 2.666 10.088 2.666 2.472 0 5.193-.51 7.695-1.57.375-.159.694.247.335.522z" fill="#FF9900"/>
//           </svg>
//         )

//       },
//             {
//         name: "Azure",
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
//             <path d="M5.483 21.8H20.07c.43 0 .79-.34.79-.77 0-.1-.02-.2-.05-.3L15.54 2.28c-.15-.53-.64-.88-1.2-.88-.55 0-1.04.35-1.2.88L8.87 20.72c-.03.1-.05.2-.05.3 0 .43.35.78.78.78h7.24L5.483 21.8z" fill="#0078D4"/>
//             <path d="M11.13 2.28L16.4 20.72c.03.1.05.2.05.3 0 .43-.35.78-.78.78H8.43c-.43 0-.78-.35-.78-.78 0-.1.02-.2.05-.3L12.97 2.28c.16-.53.65-.88 1.2-.88.56 0 1.05.35 1.2.88L11.13 2.28z" fill="#0078D4"/>
//             <path d="M8.43 21.8c-.43 0-.78-.35-.78-.78 0-.1.02-.2.05-.3L12.97 2.28c.16-.53.65-.88 1.2-.88.56 0 1.05.35 1.2.88L20.12 20.72c.03.1.05.2.05.3 0 .43-.35.78-.78.78H8.43z" fill="#0078D4"/>
//           </svg>
//         )
//       }

//     ],
//     // Row 5

//   ];

//   return (
//     <section className="tools-section">
//         <hr className="client-results-start-line" />
//       <div className="gradient-bg"></div>
//       <div className="tools-container">
//         <h2 className="tools-title">Platforms & tools I work with</h2>
        
//         <div className="tools-grid">
//           {platforms.map((row, rowIndex) => (
//             <div key={rowIndex} className="tools-row">
//               {row.map((platform, index) => (
//                 <div key={index} className='tool-item'>
//                   {/* Platform name in blue pill */}
//                   <div className="tool-name">
//                     <span>{platform.name}</span>
//                   </div>
                  
//                   {/* Icon in separate bordered circle */}
//                   <div className="tool-icon">
//                     {platform.icon}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//       <hr className="client-results-end-line" />
//     </section>
//   );
// };

// export default Tools;


import "./Tools.css";

const Tools = () => {
  const platforms = [
    // Row 1
    [
      {
        name: "Google Ads",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="25" height="25">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285f4" />
            <path d="M2 17L12 22L22 17" stroke="#4285f4" strokeWidth="2" fill="none" />
            <path d="M2 12L12 17L22 12" stroke="#4285f4" strokeWidth="2" fill="none" />
          </svg>
        ),
      },
      {
        name: "Youtube Ads",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M23 12s0-3.85-.46-5.58c-.25-.95-.99-1.69-1.94-1.94C18.85 4 12 4 12 4s-6.85 0-8.6.48c-.95.25-1.69.99-1.94 1.94C1 8.15 1 12 1 12s0 3.85.46 5.58c.25.95.99 1.69 1.94 1.94C5.15 20 12 20 12 20s6.85 0 8.6-.48c.95-.25 1.69-.99 1.94-1.94C23 15.85 23 12 23 12z" fill="#FF0000" />
            <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="white" />
          </svg>
        ),
      },
      {
        name: "Fb/Insta Ads",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
          </svg>
        ),
      },
    ],
    // Row 2
    [
      {
        name: "G Analytics",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        ),
      },
      {
        name: "Microsoft Clarity",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M0 0h11.377v11.372H0V0zm12.623 0H24v11.372H12.623V0zM0 12.623h11.377V24H0V12.623zm12.623 0H24V24H12.623V12.623z" fill="#00BCF2" />
          </svg>
        ),
      },
      {
        name: "Semrush",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <circle cx="12" cy="12" r="11" fill="#FF642D" />
            <path d="M7 7h10v10H7z" fill="white" />
            <path d="M9 9h6v6H9z" fill="#FF642D" />
          </svg>
        ),
      },
      
    ],
    // Row 3
    [
      {
        name: "Twitter Ads",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#1DA1F2" />
          </svg>
        ),
      },
      {
        name: "Google Tag Manager",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#246FDB" />
            <path d="M8 8h8M8 12h6M8 16h4" stroke="white" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        name: "Google Cloud",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M12.19 2.38A9.97 9.97 0 0 0 4.41 6.9a6.47 6.47 0 0 0-1.17 12.76h10.23a6.47 6.47 0 0 0 5.16-10.34A9.97 9.97 0 0 0 12.19 2.38z" fill="#4285F4" />
            <path d="M13.47 19.66h6.06a4.52 4.52 0 0 0 .89-8.9 9.97 9.97 0 0 0-18.84 0 4.52 4.52 0 0 0 .89 8.9h6.06" fill="#34A853" />
            <path d="M7.94 15.14h8.12a2.26 2.26 0 0 0 0-4.52H7.94a2.26 2.26 0 0 0 0 4.52z" fill="#FBBC05" />
          </svg>
        ),
      },
    ],
    // Row 4
    [
      {
        name: "AWS",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M6.763 10.036c0 .296.032.53.088.704.064.174.144.34.24.499.04.064.056.127.056.19 0 .087-.056.175-.168.263l-.558.372c-.08.056-.16.08-.24.08-.095 0-.191-.048-.287-.144a3.11 3.11 0 0 1-.423-.59 7.642 7.642 0 0 1-.359-.733c-.904 1.068-2.04 1.602-3.408 1.602-1.224 0-2.2-.35-2.928-1.052-.728-.702-1.092-1.65-1.092-2.844 0-1.26.448-2.28 1.356-3.061.907-.781 2.12-1.172 3.632-1.172.503 0 1.02.04 1.557.127.537.087 1.074.207 1.611.367v-1.222c0-1.26-.264-2.14-.791-2.636-.528-.495-1.42-.742-2.677-.742-.576 0-1.168.071-1.776.207a12.192 12.192 0 0 0-1.8.55c-.12.048-.207.08-.263.096-.056.016-.096.024-.12.024-.104 0-.16-.08-.16-.231v-.367c0-.12.016-.207.048-.263.032-.056.096-.111.192-.159a7.895 7.895 0 0 1 2.024-.655C2.647.95 3.31.927 4.006.927c1.522 0 2.634.367 3.337 1.099.695.733 1.047 1.843 1.047 3.331v4.679zm-4.678 1.826c.487 0 .991-.088 1.522-.263.531-.175.999-.463 1.402-.863.24-.239.415-.535.518-.887.104-.351.16-.783.16-1.293v-.607a9.123 9.123 0 0 0-1.338-.311 12.038 12.038 0 0 0-1.378-.08c-.95 0-1.642.183-2.08.55-.439.367-.655.903-.655 1.602 0 .647.167 1.113.503 1.401.337.287.807.431 1.346.431z" fill="#FF9900"/>
            <path d="M17.952 12.464c-.128 0-.215-.024-.263-.071-.048-.048-.088-.16-.127-.335L15.78 3.58c-.04-.207-.056-.335-.056-.391 0-.16.08-.247.239-.247h.975c.135 0 .223.024.271.071.048.048.08.16.112.335l1.218 6.824 1.13-6.824c.024-.175.064-.287.112-.335.048-.047.144-.071.279-.071h.798c.135 0 .231.024.279.071.048.048.096.16.112.335l1.146 6.903 1.25-6.903c.032-.175.08-.287.112-.335.048-.047.144-.071.271-.071h.926c.16 0 .247.08.247.247 0 .048-.008.096-.016.16-.008.063-.024.151-.048.263L21.735 12.1c-.04.207-.088.319-.127.367-.048.048-.144.071-.263.071h-.862c-.135 0-.231-.024-.279-.071-.048-.048-.096-.16-.112-.335l-1.13-6.647-1.114 6.64c-.024.175-.064.287-.112.335-.048.047-.144.071-.279.071h-.862z" fill="#FF9900"/>
            <path d="M21.694 16.787c-2.216 1.634-5.433 2.499-8.202 2.499-3.88 0-7.375-1.434-10.016-3.814-.207-.191-.024-.454.231-.303 2.868 1.666 6.415 2.666 10.088 2.666 2.472 0 5.193-.51 7.695-1.57.375-.159.694.247.335.522z" fill="#FF9900"/>
          </svg>
        ),
      },
      {
        name: "Azure",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" width="30" height="30">
            <path d="M5.483 21.8H20.07c.43 0 .79-.34.79-.77 0-.1-.02-.2-.05-.3L15.54 2.28c-.15-.53-.64-.88-1.2-.88-.55 0-1.04.35-1.2.88L8.87 20.72c-.03.1-.05.2-.05.3 0 .43.35.78.78.78h7.24L5.483 21.8z" fill="#0078D4"/>
            <path d="M11.13 2.28L16.4 20.72c.03.1.05.2.05.3 0 .43-.35.78-.78.78H8.43c-.43 0-.78-.35-.78-.78 0-.1.02-.2.05-.3L12.97 2.28c.16-.53.65-.88 1.2-.88.56 0 1.05.35 1.2.88L11.13 2.28z" fill="#0078D4"/>
            <path d="M8.43 21.8c-.43 0-.78-.35-.78-.78 0-.1.02-.2.05-.3L12.97 2.28c.16-.53.65-.88 1.2-.88.56 0 1.05.35 1.2.88L20.12 20.72c.03.1.05.2.05.3 0 .43-.35.78-.78.78H8.43z" fill="#0078D4"/>
          </svg>
        ),
      },
    ],
  ];

  return (
    <section className="tools-section">
      <hr className="client-results-start-line" />
      <hr className="client-results-start-line1" />
      
      <div className="tools-container">
        <h2 className="tools-title">Platforms & tools I work with</h2>
        <div className="tools-grid">
          {platforms.map((row, rowIndex) => (
            <div key={rowIndex} className="tools-row">
              {row.map((platform, index) => (
                <div key={index} className="tool-item">
                  <div className="tool-name">
                    <span>{platform.name}</span>
                  </div>
                  <div className="tool-icon">{platform.icon}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="client-results-end-line" />
    </section>
  );
};

export default Tools;
