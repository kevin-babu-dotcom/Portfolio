import React,{ useState } from "react";
import FancyButton from "../components/fancybutton";
import MapComponent from "../components/MapComponent";
import { MyDatePicker } from "../components/MyDatePicker"; // ✅ Named import with {}



const Contact = () => {
    const [formData, setFormData] = useState({
        date: new Date(),
        location:null,
        message:"",
        email:"",
    });
    const handleDateSelect = (date) =>{
        setFormData((prev)=>({
            ...prev,
            date:date
        }))
    }
    const handleLocationSelect = (locationData) => {
        setFormData((prev)=>({
            ...prev,
            location:{lat: locationData.lat, lng: locationData.lng}
        }));
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Get the full backend URL from the environment variable
    const endpoint = `${import.meta.env.VITE_API_URL}/api/contact`;

    // Simple validation
    if (!formData.email || !formData.message) {
        alert("Please fill out both the email and message fields.");
        return;
    }

    try {
        // ✅ Use the full, correct endpoint in the fetch call
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                message: formData.message,
                selectedDate: formData.date,
                location: formData.location
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Error submitting form");
        }
        
        alert(result.message);
        console.log("Form submitted successfully!");

        // Reset form
        setFormData({
            date: new Date(),
            location: null,
            message: "",
            email: "",
        });

    } catch (error) {
        console.error("Submit error:", error);
        alert(`An error occurred: ${error.message}`);
    }
};

    return(
        <div className="md:py-3 h-full md:my-3 mx-auto flex-col flex w-full md:p-0 py-6">
        <div className="md:grid min-h-screen grid-rows-[2fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] md:gap-4 h-full w-full  ">
            <div className="talk col-span-1 rounded-3xl row-span-1 row-start-1 col-start-1 bg-white border-3 h-full w-full flex justify-center items-center hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] flex-col md:my-0 my-5 md:py-0 py-10">
            <span className="font-black leading leading-20 text-[clamp(2rem,3.8vw,4vw)] lg:text-[clamp(1.5rem,3.5vw,3.5vw)]">Got an Idea?</span>
            <span className="font-light text-[clamp(2rem,3.8vw,4vw)]  md:py-0 py-6">Let's Talk!</span>
            </div>
            <div className="map col-span-2 row-span-1 rounded-3xl border-10 border-[#6C6594] row-start-1 col-start-2  bg-white h-full w-full hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-10 md:py-0  ">
            <MapComponent onLocationSelect={handleLocationSelect}/>
            </div>
            <div className="callender col-span-1 row-span-2 row-start-2 col-start-1 bg-orange-300 border-3 h-full w-full rounded-3xl hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-9 ">
                <MyDatePicker 
                    onDateSelect={handleDateSelect}
                    initialDate={formData.date}/> 
            </div>
            <div className="message col-span-1 p-5 flex flex-col hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] border-3 justify-between items-center row-span-2 row-start-2 col-start-2 bg-white h-full w-full rounded-3xl md:my-0 my-8">
                <label className="block mb-2 text-3xl font-bold p-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full h-full p-4 border border-black rounded-lg" placeholder="Type your message here..."></textarea>
            </div>
            <div className="email col-span-1 row-span-1 row-start-2 col-start-3  flex flex-col justify-center border-3 p-6 items-center bg-white h-full w-full rounded-3xl hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-8">
                <label className="block text-3xl font-bold p-2 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-5 border-black rounded-lg" placeholder="Enter your email" />
            </div>
            <div className="send col-span-1 row-span-1 p-8 row-start-3 col-start-3  bg-orange-300 h-full border-3 w-full rounded-3xl hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                <FancyButton onClick={handleSubmit} className="bg-white text-black p-4 rounded-full w-full h-full flex items-center justify-center">
                    <span className="text-7xl font-bold">Send!</span>
                </FancyButton>
            </div>
        </div>
        </div>
    );
};

export default Contact;

// ✅ Added validation to prevent empty submissions:
// const { email, message } = req.body;
// if (!email || !message) {
//     return res.status(400).json({ error: 'Email and message are required' });
// }

