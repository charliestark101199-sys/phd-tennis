export default function ProfilePage() {
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
              <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-slate-700">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-slate-700">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="graduationYear" className="mb-1 block text-sm font-medium text-slate-700">
                Graduation year
              </label>
              <input
                id="graduationYear"
                type="text"
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
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium text-slate-700">
                Phone number
              </label>
              <input
                id="phoneNumber"
                type="tel"
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
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="satScore" className="mb-1 block text-sm font-medium text-slate-700">
                SAT score
              </label>
              <input
                id="satScore"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="actScore" className="mb-1 block text-sm font-medium text-slate-700">
                ACT score
              </label>
              <input
                id="actScore"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="intendedMajor" className="mb-1 block text-sm font-medium text-slate-700">
                Intended major
              </label>
              <input
                id="intendedMajor"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Tennis Stats</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="utrRating" className="mb-1 block text-sm font-medium text-slate-700">
                UTR rating
              </label>
              <input
                id="utrRating"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="ustaRanking" className="mb-1 block text-sm font-medium text-slate-700">
                USTA ranking
              </label>
              <input
                id="ustaRanking"
                type="text"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="singlesRecord" className="mb-1 block text-sm font-medium text-slate-700">
                Singles record (W-L)
              </label>
              <input
                id="singlesRecord"
                type="text"
                placeholder="e.g. 18-6"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="doublesRecord" className="mb-1 block text-sm font-medium text-slate-700">
                Doubles record (W-L)
              </label>
              <input
                id="doublesRecord"
                type="text"
                placeholder="e.g. 14-4"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="playingStyle" className="mb-1 block text-sm font-medium text-slate-700">
                Playing style
              </label>
              <select
                id="playingStyle"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                defaultValue=""
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
              <label htmlFor="preferredPosition" className="mb-1 block text-sm font-medium text-slate-700">
                Preferred position
              </label>
              <select
                id="preferredPosition"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                defaultValue=""
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
                Handedness
              </label>
              <select
                id="handedness"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                defaultValue=""
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
              <label htmlFor="highlightVideoOne" className="mb-1 block text-sm font-medium text-slate-700">
                Highlight video 1 (YouTube or Hudl URL)
              </label>
              <input
                id="highlightVideoOne"
                type="url"
                placeholder="https://"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="highlightVideoTwo" className="mb-1 block text-sm font-medium text-slate-700">
                Highlight video 2 (YouTube or Hudl URL)
              </label>
              <input
                id="highlightVideoTwo"
                type="url"
                placeholder="https://"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Personal Statement</h2>
          <div className="mt-4">
            <label htmlFor="personalStatement" className="mb-1 block text-sm font-medium text-slate-700">
              Share your goals, work ethic, and what you bring to a college program
            </label>
            <textarea
              id="personalStatement"
              rows={7}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
