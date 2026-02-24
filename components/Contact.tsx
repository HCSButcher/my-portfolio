"use client";
import Section from "./Section";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 748 092 687 ",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "trevor254oduol@gmail.com ",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Nakuru, Kabarak 20157 ",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectedService: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/consultation`,
        {
          method: "POST",
          
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            selectedService: formData.selectedService,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to submit form. Please try again");
        return;
      }

      toast.success(data.message || "Form submitted successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        selectedService: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast.error(
        "Failed to submit form. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section id="contact">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#00ff99",
              secondary: "#fff",
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <div className=" mx-4 xl:container min-h-screen">
        <div className="flex flex-col xl:flex-row gap-12">
          <div className="xl:w-[54%] order-2 xl:order-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-4xl"
            >
              <h3 className="text-[#00ff99] text-2xl ">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">
                Bring your ideas to me and I&apos;ll transform them into live
                working projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                />
                <Input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
         {/* Remove the name="service" from Root, it's not needed */}
<SelectPrimitive.Root
  value={formData.selectedService}
  onValueChange={(value) =>
    setFormData((prev) => ({
      ...prev,
      selectedService: value,
    }))
  }
>
  <SelectPrimitive.Trigger
    className="flex h-[48px] w-full items-center justify-between rounded-md border border-white/10 bg-primary px-4 py-5 text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none"
    aria-label="Service"
  >
    <SelectPrimitive.Value placeholder="Select a service" />
  </SelectPrimitive.Trigger>
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className="z-50 bg-primary border border-white/10 rounded-md shadow-md"
      position="popper"
      side="top"
      sideOffset={5}
    >
      <SelectPrimitive.Viewport>
        <SelectPrimitive.Group>
          <SelectPrimitive.Label className="text-white/40 px-4 py-2">
            Select a service
          </SelectPrimitive.Label>

          {[
            "Website Development",
            "Web App Development",
            "Mobile App Development",
          ].map((service) => (
            <SelectPrimitive.Item
              key={service}
              value={service}
              className="px-4 py-2 cursor-pointer hover:bg-accent text-white flex items-center justify-between"
            >
              <SelectPrimitive.ItemText>
                {service}
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="w-4 h-4 text-white" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          ))}
        </SelectPrimitive.Group>
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
</SelectPrimitive.Root>
              <Textarea
                name="message"
                className="h-[200px] focus-visible:ring-accent focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                variant="default"
                size="md"
                className="max-w-40"
                type="submit"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-0 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-1 w-full max-w-sm">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 py-2 px-4 rounded-2xl"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#1f1f23] text-accent rounded-xl flex items-center justify-center shrink-0">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-wide text-white/60 mb-1">
                      {item.title}
                    </p>
                    <h3 className="text-lg xl:text-xl font-semibold">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
