// import Image from "next/image";
// import bgLeft from "@/assets/background/woman.png";
// import ball from "@/assets/icons/ball.png"; // optional if you have a ball asset
// import sectionBg from "@/assets/background/section-bg.png"; // optional if you have a background asset
// import { Bolt, Users, Trophy, Clock } from "lucide-react";

// export default function SectionTab() {
//   return (
//     <section className="w-full h-[600px] relative">
//       {/* White background */}
//       <div className="absolute inset-0 bg-white" />

//       {/* Floating Balls */}
//       <div className="absolute top-6 left-24 w-12 h-12 bg-yellow-400 rounded-full opacity-90" />
//       <div className="absolute top-20 left-64 w-8 h-8 bg-yellow-400 rounded-full opacity-90" />
//       <div className="absolute top-10 left-[420px] w-10 h-10 bg-yellow-400 rounded-full opacity-90" />
//       <div className="absolute top-24 left-[520px] w-6 h-6 bg-yellow-400 rounded-full opacity-90" />

//       {/* Blue angled panel */}
//       <div className="absolute bottom-0 top-20 left-0 w-[100%] h-[700px]">
//         <Image
//           src={sectionBg}
//           alt="Section background"
//           fill
//           priority
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto h-full px-10 flex items-center">
//         {/* Left Content */}
//         <div className="w-1/2">
//           <h2 className="text-4xl font-bold text-black leading-tight mb-8">
//             Why Choose <br />
//             <span className="text-blue-700">PicklePlay?</span>
//           </h2>

//           <ul className="space-y-5">
//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
//                 <Clock size={20} />
//               </div>
//               <div>
//                 <p className="font-semibold text-black">Real-time Updates</p>
//                 <p className="text-sm text-gray-600">
//                   Get live court availability and scores
//                 </p>
//               </div>
//             </li>

//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
//                 <Bolt size={20} />
//               </div>
//               <div>
//                 <p className="font-semibold text-black">Quick Matching</p>
//                 <p className="text-sm text-gray-600">
//                   Find available courts and players instantly
//                 </p>
//               </div>
//             </li>

//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
//                 <Users size={20} />
//               </div>
//               <div>
//                 <p className="font-semibold text-black">Community</p>
//                 <p className="text-sm text-gray-600">
//                   Connect with local pickleball enthusiasts
//                 </p>
//               </div>
//             </li>

//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white">
//                 <Trophy size={20} />
//               </div>
//               <div>
//                 <p className="font-semibold text-black">Tournaments</p>
//                 <p className="text-sm text-gray-600">
//                   Participate in organized competitions
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>

//         {/* Right Image */}
//         <div className="absolute -right-18 top-4 w-[620px] h-[750px] overflow-true">
//           <Image
//             src={bgLeft}
//             alt="Pickleball player"
//             fill
//             priority
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
