import React, { useEffect, useState } from "react";

export default function Resume() {
  return (
    <section>
      <div className="relative z-10 rounded-md shadow-md bg-[#202A44] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <iframe className="w-full aspect-video" src="/MarkKurpielResume.pdf" style={{ height: '100vh', width: '100vh' }}/>
        </div>
      </div>
    </section>
  );
}