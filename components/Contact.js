import myData from "../constants/data";myData
import React, { useEffect, useState } from "react";

export default function ContactMe() {
// Contact form vars 
 const [name, setname] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");

 //Error var 
 const [errors, setErrors] = useState({});

 //   Setting button text on form submission
 const [buttonText, setButtonText] = useState("Send");

 //send message for send button 
 const [sendMessage, setSendMessage] = useState("Send Message");



 // Check for form validation if false won't let user sumbmit 
 const handleValidation = () => {
  e.preventDefault();
   let tempErrors = {};
   let isValid = true;

   if (name.length <= 0) {
     tempErrors["name"] = true;
     isValid = false;
   }
   if (email.length <= 0 && email.includes('@')) {
     tempErrors["email"] = true;
     isValid = false;
   }
   if (subject.length <= 0) {
     tempErrors["subject"] = true;
     isValid = false;
   }
   if (message.length <= 0) {
     tempErrors["message"] = true;
     isValid = false;
   }

   setErrors({ ...tempErrors });
   console.log("errors", errors);
   return isValid;
 };

 //Sends email to me using field entrys
 const handleSubmit = async (e) => {
   e.preventDefault();

   let isValidForm = handleValidation();


   //checks validation if good sends fetch request to sendemail.js api 
   if (isValidForm) {
     const res = await fetch("/api/sendEmail", {
       body: JSON.stringify({
         email: email,
         name: name,
         subject: subject,
         message: message,
       }),
       headers: {
         "Content-Type": "application/json",
       },
       method: "POST",
     });

     setSendMessage("Sending");

     const { error } = await res.json();
     if (error) {
       console.log(error);
       setTimeout(() => {
        setSendMessage("Failed to Send");
      }, 2000);
       return;
     }
     setTimeout(() => {
      setSendMessage("Sent");
    }, 2000);
   }
   console.log(name, email, subject, message);
 };
  return (
    <section>
      <div className="relative z-10 rounded-md shadow-md bg-[#202A44] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-gray-50 font-semibold text-2xl">
                Hi, thank you for visiting my page
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                If you want to send me a message just fill in the form and hit send!
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#202A44] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {myData.phone}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#202A44] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {myData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[#202A44] hover:border hover:border-blue-500 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-gray-50 font-light text-sm">
                  {myData.address}
                </p>
              </div>
            </div>
          </div>
          <form className="form rounded-lg bg-white p-4 flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="subject" className="text-sm text-gray-600 mx-4 mt-4">
              Subject
            </label>
            <input
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name="message"
              onChange={(e)=>{setMessage(e.target.value)}}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
              onClick={(e)=>{handleSubmit(e)}}
            >
              {sendMessage}
            </button>    
          </form>
        </div>
      </div>
    </section>
  );
}