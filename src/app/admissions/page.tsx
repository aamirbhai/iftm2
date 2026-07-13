"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const programmes = [
  "B.Tech (Computer Science)",
  "B.Tech (Mechanical)",
  "B.Tech (Civil)",
  "B.Tech (Electrical)",
  "B.Pharm",
  "D.Pharm",
  "MBA",
  "BBA",
  "BCA",
  "MCA",
  "LLB",
  "BA-LLB",
  "B.Sc (Nursing)",
  "B.Sc (Agriculture)",
  "B.Ed",
  "M.Tech",
  "M.Pharm",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  programme: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  programme?: string;
}

export default function AdmissionsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    programme: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.programme) {
      newErrors.programme = "Please select a programme";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Admissions Open 2026-27"
        subtitle="Apply now for UG, PG & Diploma programmes at IFTM University"
        breadcrumbs={[{ label: "Admissions", href: "/admissions" }]}
      />

      <section className="py-12 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Left - Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-iftm-navy mb-4">
                Start Your Journey
              </h2>
              <p className="text-iftm-text-light mb-6">
                Fill out the form and our admission counsellor will get in touch
                with you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-iftm-primary text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-iftm-navy text-sm">
                      Admission Helpline
                    </p>
                    <p className="text-iftm-text-light text-sm">
                      1800-270-1490 (Toll Free)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-iftm-primary text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-iftm-navy text-sm">
                      Email
                    </p>
                    <p className="text-iftm-text-light text-sm">
                      admissions@iftm.ac.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-iftm-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-iftm-primary text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-iftm-navy text-sm">
                      Campus Address
                    </p>
                    <p className="text-iftm-text-light text-sm">
                      Lodhipur Rajput, Delhi Road,
                      <br />
                      Moradabad - 244102, UP
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-iftm-light rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-iftm-primary">130+</p>
                  <p className="text-xs text-iftm-text-light">Programmes</p>
                </div>
                <div className="bg-iftm-light rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-iftm-primary">90%+</p>
                  <p className="text-xs text-iftm-text-light">Placement</p>
                </div>
                <div className="bg-iftm-light rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-iftm-primary">10K+</p>
                  <p className="text-xs text-iftm-text-light">Students</p>
                </div>
                <div className="bg-iftm-light rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-iftm-primary">69+</p>
                  <p className="text-xs text-iftm-text-light">Acres Campus</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="md:col-span-3">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700 mb-6">
                    Your enquiry has been received. Our admission counsellor
                    will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        programme: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-iftm-primary text-white rounded-lg hover:bg-iftm-primary-dark transition-colors text-sm font-medium"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-iftm-border rounded-2xl p-6 md:p-8 shadow-lg shadow-black/5"
                >
                  <h3 className="text-xl font-bold text-iftm-navy mb-6">
                    Enquiry Form
                  </h3>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-iftm-navy mb-1.5">
                        Full Name <span className="text-iftm-primary">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-400" : "border-iftm-border"
                        } focus:outline-none focus:border-iftm-primary focus:ring-2 focus:ring-iftm-primary/20 transition-all text-sm`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-iftm-navy mb-1.5">
                        Phone Number{" "}
                        <span className="text-iftm-primary">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-iftm-text-light text-sm">
                          +91
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange(
                              "phone",
                              e.target.value.replace(/\D/g, "").slice(0, 10)
                            )
                          }
                          placeholder="10-digit mobile number"
                          className={`w-full pl-12 pr-4 py-3 rounded-lg border ${
                            errors.phone
                              ? "border-red-400"
                              : "border-iftm-border"
                          } focus:outline-none focus:border-iftm-primary focus:ring-2 focus:ring-iftm-primary/20 transition-all text-sm`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-iftm-navy mb-1.5">
                        Email Address{" "}
                        <span className="text-iftm-primary">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email
                            ? "border-red-400"
                            : "border-iftm-border"
                        } focus:outline-none focus:border-iftm-primary focus:ring-2 focus:ring-iftm-primary/20 transition-all text-sm`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Programme */}
                    <div>
                      <label className="block text-sm font-medium text-iftm-navy mb-1.5">
                        Programme of Interest{" "}
                        <span className="text-iftm-primary">*</span>
                      </label>
                      <select
                        value={formData.programme}
                        onChange={(e) =>
                          handleChange("programme", e.target.value)
                        }
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.programme
                            ? "border-red-400"
                            : "border-iftm-border"
                        } focus:outline-none focus:border-iftm-primary focus:ring-2 focus:ring-iftm-primary/20 transition-all text-sm bg-white`}
                      >
                        <option value="">Select a programme</option>
                        {programmes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      {errors.programme && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.programme}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-iftm-navy mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Any specific questions or requirements..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-iftm-border focus:outline-none focus:border-iftm-primary focus:ring-2 focus:ring-iftm-primary/20 transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-iftm-primary text-white font-semibold rounded-lg hover:bg-iftm-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-iftm-primary/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <i className="fas fa-spinner fa-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-iftm-text-light mt-4 text-center">
                    By submitting, you agree to receive admission-related
                    communication from IFTM University.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
