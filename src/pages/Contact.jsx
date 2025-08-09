import React, { useState } from "react";
import FancyButton from "../components/fancybutton";
import MapComponent from "../components/MapComponent";
import { MyDatePicker } from "../components/MyDatePicker";

// Toast component
const Toast = ({ message, type, onClose }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000); // Auto close after 5 seconds

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-full duration-300">
            <div className={`
                rounded-2xl border-2 p-4 pr-12 min-w-80 shadow-lg backdrop-blur-sm
                ${type === 'success' 
                    ? 'bg-green-100 border-green-400 text-green-800' 
                    : 'bg-red-100 border-red-400 text-red-800'
                }
            `}>
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        {type === 'success' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-sm">{message}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-current opacity-70 transition-opacity"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        date: new Date(),
        location: null,
        message: "",
        email: "",
    });
    
    const [toast, setToast] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
    };

    const hideToast = () => {
        setToast(null);
    };

    const handleDateSelect = (date) => {
        setFormData((prev) => ({
            ...prev,
            date: date
        }));
    };

    const handleLocationSelect = (locationData) => {
        setFormData((prev) => ({
            ...prev,
            location: { lat: locationData.lat, lng: locationData.lng }
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.email || !formData.message) {
            showToast("Please fill out both the email and message fields.", 'error');
            return;
        }

        setIsSubmitting(true);

        const endpoint = `${import.meta.env.VITE_API_URL}/api/contact`;

        try {
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

            showToast("🎉 Message sent successfully! I'll get back to you soon.", 'success');
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
            showToast(`❌ ${error.message}`, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="md:py-3 h-full md:my-3 mx-auto flex-col flex w-full md:p-0 py-6 p-1">
            {/* Toast notification */}
            {toast && (
                <Toast 
                    message={toast.message} 
                    type={toast.type} 
                    onClose={hideToast} 
                />
            )}
            
            <div className="md:grid min-h-screen grid-rows-[2fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] md:gap-4 h-full w-full p-1 ">
                <div className="talk col-span-1 rounded-3xl row-span-1 row-start-1 col-start-1 bg-white border-3 h-full w-full flex justify-center items-center shadow-[0_0_30px_rgba(255,255,255,0.6)] flex-col md:my-0 my-5 md:py-0 py-10">
                    <span className="font-black leading leading-20 text-[clamp(2rem,3.8vw,4vw)] lg:text-[clamp(1.5rem,3.5vw,3.5vw)]">Got an Idea?</span>
                    <span className="font-light text-[clamp(2rem,3.8vw,4vw)]  md:py-0 py-6">Let's Talk!</span>
                </div>
                <div className="map col-span-2 row-span-1 rounded-3xl border-10 border-[#6C6594] row-start-1 col-start-2  bg-white h-full w-full shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-10 md:py-0  ">
                    <MapComponent onLocationSelect={handleLocationSelect}/>
                </div>
                <div className="callender col-span-1 row-span-2 row-start-2 -p-1 col-start-1 bg-transparent  rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-9 ">
                    <MyDatePicker 
                        onDateSelect={handleDateSelect}
                        initialDate={formData.date}/> 
                </div>
                <div className="message col-span-1 p-5 flex flex-col shadow-[0_0_30px_rgba(255,255,255,0.6)] border-3 justify-between items-center row-span-2 row-start-2 col-start-2 bg-white h-full w-full rounded-3xl md:my-0 my-8">
                    <label className="block mb-2 text-3xl font-bold p-2">Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="w-full h-full p-4 border border-black rounded-lg" 
                        placeholder="Type your message here..."
                        disabled={isSubmitting}
                    ></textarea>
                </div>
                <div className="email col-span-1 row-span-1 row-start-2 col-start-3  flex flex-col justify-center border-3 p-6 items-center bg-white h-full w-full rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.6)] md:my-0 my-8">
                    <label className="block text-3xl font-bold p-2 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full border p-5 border-black rounded-lg" 
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                    />
                </div>
                <div className="send col-span-1 row-span-1 p-8 row-start-3 col-start-3  bg-orange-300 h-full border-3 w-full rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                    <FancyButton 
                        onClick={handleSubmit} 
                        className={`bg-white text-black p-4 rounded-full w-full h-full flex items-center justify-center transition-opacity ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    >
                        <span className="text-7xl font-bold">
                            {isSubmitting ? 'Sending...' : 'Send!'}
                        </span>
                    </FancyButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;

