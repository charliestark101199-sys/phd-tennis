"use client";

import { useEffect, useState } from "react";

type ProfileFormData = {
  first_name: string;
  last_name: string;
  graduation_year: string;
  hometown: string;
  state: string;
  phone_number: string;
  gpa: string;
  sat_score: string;
  act_score: string;
  intended_major: string;
  utr_rating: string;
  usta_ranking: string;
  singles_record: string;
  doubles_record: string;
  playing_style: string;
  preferred_position: string;
  handedness: string;
  highlight_video_one: string;
  highlight_video_two: string;
  personal_statement: string;
};

const initialFormData: ProfileFormData = {
  first_name: "",
  last_name: "",
  graduation_year: "",
  hometown: "",
  state: "",
  phone_number: "",
  gpa: "",
  sat_score: "",
  act_score: "",
  intended_major: "",
  utr_rating: "",
  usta_ranking: "",
  singles_record: "",
  doubles_record: "",
  playing_style: "",
  preferred_position: "",
  handedness: "",
  highlight_video_one: "",
  highlight_video_two: "",
  personal_statement: "",
};

export default function ProfilePage() {
  const [formData, setFormData] = useState<ProfileFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch("/api/profile", { method: "GET" });
        if (!response.ok) {
          throw new Error("Failed to load profile.");
        }

        const result = await response.json();
        if (result.profile) {
          setFormData((prev) => ({
            ...prev,
            ...result.profile,
          }));
        }
      } catch {
        setStatusMessage("Could not load saved profile data.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleChange = (field: keyof ProfileFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = async () => {
    setIsSaving(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile.");
      }

      setStatusMessage("Profile saved successfully.");
    } catch {
      setStatusMessage("Failed to save profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Recruit Profile Builder</h1>
        <p className="mt-2 text-sm text-slate-600">
          Complete your profile so coaches can quickly evaluate your fit.
        </p>
      </section>

      <form className="space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Personal Info</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="mb-1 block text-sm font-medium text-slate-700">
                First name
              </label>
              <input
                id="first_name"
                type="text"
                value={formData.first_name}
                onChange={(event) => handleChange("first_name", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="mb-1 block text-sm font-medium text-slate-700">
                Last name
              </label>
              <input
                id="last_name"
                type="text"
                value={formData.last_name}
                onChange={(event) => handleChange("last_name", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="graduation_year" className="mb-1 block text-sm font-medium text-slate-700">
                Graduation year
              </label>
              <input
                id="graduation_year"
                type="text"
                value={formData.graduation_year}
                onChange={(event) => handleChange("graduation_year", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="hometown" className="mb-1 block text-sm font-medium text-slate-700">
                Hometown
              </label>
              <input
                id="hometown"
                type="text"
                value={formData.hometown}
                onChange={(event) => handleChange("hometown", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="state" className="mb-1 block text-sm font-medium text-slate-700">
                State
              </label>
              <input
                id="state"
                type="text"
                value={formData.state}
                onChange={(event) => handleChange("state", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="phone_number" className="mb-1 block text-sm font-medium text-slate-700">
                Phone number
              </label>
              <input
                id="phone_number"
                type="tel"
                value={formData.phone_number}
                onChange={(event) => handleChange("phone_number", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Academic Stats</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="gpa" className="mb-1 block text-sm font-medium text-slate-700">
                GPA
              </label>
              <input
                id="gpa"
                type="text"
                value={formData.gpa}
                onChange={(event) => handleChange("gpa", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="sat_score" className="mb-1 block text-sm font-medium text-slate-700">
                SAT score
              </label>
              <input
                id="sat_score"
                type="text"
                value={formData.sat_score}
                onChange={(event) => handleChange("sat_score", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="act_score" className="mb-1 block text-sm font-medium text-slate-700">
                ACT score
              </label>
              <input
                id="act_score"
                type="text"
                value={formData.act_score}
                onChange={(event) => handleChange("act_score", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="intended_major" className="mb-1 block text-sm font-medium text-slate-700">
                Intended major
              </label>
              <input
                id="intended_major"
                type="text"
                value={formData.intended_major}
                onChange={(event) => handleChange("intended_major", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Tennis Stats</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="utr_rating" className="mb-1 block text-sm font-medium text-slate-700">
                UTR rating
              </label>
              <input
                id="utr_rating"
                type="text"
                value={formData.utr_rating}
                onChange={(event) => handleChange("utr_rating", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="usta_ranking" className="mb-1 block text-sm font-medium text-slate-700">
                USTA ranking
              </label>
              <input
                id="usta_ranking"
                type="text"
                value={formData.usta_ranking}
                onChange={(event) => handleChange("usta_ranking", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="singles_record" className="mb-1 block text-sm font-medium text-slate-700">
                Singles record (W-L)
              </label>
              <input
                id="singles_record"
                type="text"
                placeholder="e.g. 18-6"
                value={formData.singles_record}
                onChange={(event) => handleChange("singles_record", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="doubles_record" className="mb-1 block text-sm font-medium text-slate-700">
                Doubles record (W-L)
              </label>
              <input
                id="doubles_record"
                type="text"
                placeholder="e.g. 14-4"
                value={formData.doubles_record}
                onChange={(event) => handleChange("doubles_record", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="playing_style" className="mb-1 block text-sm font-medium text-slate-700">
                Playing style
              </label>
              <select
                id="playing_style"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={formData.playing_style}
                onChange={(event) => handleChange("playing_style", event.target.value)}
                disabled={isLoading}
              >
                <option value="" disabled>
                  Select playing style
                </option>
                <option>Aggressive baseline</option>
                <option>All-court</option>
                <option>Serve and volley</option>
                <option>Defensive baseliner</option>
              </select>
            </div>
            <div>
              <label htmlFor="preferred_position" className="mb-1 block text-sm font-medium text-slate-700">
                Preferred position
              </label>
              <select
                id="preferred_position"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={formData.preferred_position}
                onChange={(event) => handleChange("preferred_position", event.target.value)}
                disabled={isLoading}
              >
                <option value="" disabled>
                  Select preferred position
                </option>
                <option>1 singles</option>
                <option>2 singles</option>
                <option>3 singles</option>
                <option>1 doubles</option>
                <option>2 doubles</option>
                <option>3 doubles</option>
              </select>
            </div>
            <div>
              <label htmlFor="handedness" className="mb-1 block text-sm font-medium text-slate-700">
                Left or right hand?
              </label>
              <select
                id="handedness"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={formData.handedness}
                onChange={(event) => handleChange("handedness", event.target.value)}
                disabled={isLoading}
              >
                <option value="" disabled>
                  Select handedness
                </option>
                <option>Right</option>
                <option>Left</option>
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Highlight Videos</h2>
          <div className="mt-4 grid gap-4">
            <div>
              <label htmlFor="highlight_video_one" className="mb-1 block text-sm font-medium text-slate-700">
                Highlight video 1 (YouTube or Hudl URL)
              </label>
              <input
                id="highlight_video_one"
                type="url"
                placeholder="https://"
                value={formData.highlight_video_one}
                onChange={(event) => handleChange("highlight_video_one", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="highlight_video_two" className="mb-1 block text-sm font-medium text-slate-700">
                Highlight video 2 (YouTube or Hudl URL)
              </label>
              <input
                id="highlight_video_two"
                type="url"
                placeholder="https://"
                value={formData.highlight_video_two}
                onChange={(event) => handleChange("highlight_video_two", event.target.value)}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Personal Statement</h2>
          <div className="mt-4">
            <label htmlFor="personal_statement" className="mb-1 block text-sm font-medium text-slate-700">
              Share your goals, work ethic, and what you bring to a college program
            </label>
            <textarea
              id="personal_statement"
              rows={7}
              value={formData.personal_statement}
              onChange={(event) => handleChange("personal_statement", event.target.value)}
              disabled={isLoading}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </section>

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-slate-600">{statusMessage}</p>
          <button
            type="button"
            onClick={handleSaveProfile}
            disabled={isLoading || isSaving}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            {isSaving ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
