import userData from "../constants/data";
import React, { useEffect, useState } from "react";
import Image from 'next/image'



export default function Projects() {
    return (
        <div className="relative z-10 rounded-md shadow-md bg-[#202A44] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20">
            <div className="max-w-5xl mx-auto h-42 bg-white">
                <h1 className=" text-4xl md:text-8xl font-bold pb-10 text-center md:text-left">
                Projects
                </h1>
            </div>
            <div className="bg-[#202A44] dark:bg-gray-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                    {userData.projects.map((project) => (
                        <div class="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a>
                            <img 
                                className="rounded-t-lg transform hover:scale-110 transition duration-1000 ease-in-out" 
                                src={project.backgroundImage}  
                                alt="" 
                            />
                        </a>
                        <div class="p-5">
                            <a>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                            <a href={project.repoLink} class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Github Link &#8594;
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
