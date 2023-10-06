import React, { useEffect, useState } from "react";

export default function Resume() {
  return (
    <section>
      <div className="relative z-10 rounded-md shadow-md bg-[#202A44] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20">
            <iframe className="w-full h-screen aspect-video" src="/MarkKurpielResume.pdf"/>
      </div>
    </section>
  );
}