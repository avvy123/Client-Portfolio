import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_phjn4jh", // from step 1
        "template_zbgl3jv", // from step 1
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          title: data.message,
          time: new Date().toLocaleString(),
          reply_to: data.email,
        },
        "_GvPrjgP0c54Haw22", // from step 2
      );

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
      className="bg-gray-50/50 dark:bg-gray-900/20"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                <Mail className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Email
                </p>
                <p className="font-semibold">businesstechnonikhil@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                <MapPin className="text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Location
                </p>
                <p className="font-semibold">Bihar, IND</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
                <Phone className="text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Phone
                </p>
                <p className="font-semibold">+91 8541996151 </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-800/80 p-8 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-lg relative overflow-hidden"
          >
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 text-sm font-medium"
              >
                Message sent successfully!
              </motion.div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-700"} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors`}
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors`}
                  placeholder="yourname@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border ${errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-700"} focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-colors resize-none`}
                  placeholder="How can I help you?"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full gap-2"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
